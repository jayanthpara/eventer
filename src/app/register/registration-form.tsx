"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Camera, Loader2, RefreshCw, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { saveRegistration } from "@/actions/save-registration";
import ETicket from "@/components/e-ticket";
import { motion, AnimatePresence } from "framer-motion";

// Print styles to hide everything except the ticket
const printStyles = `
  @media print {
    /* Hide everything by default */
    body * {
      visibility: hidden;
    }
    
    /* Show only the ticket container and its children */
    .print-ticket, .print-ticket * {
      visibility: visible;
    }
    
    /* Position the ticket at the top of the page */
    .print-ticket {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
    
    /* Hide browser headers/footers */
    @page {
      margin: 0;
      size: auto;
    }
    
    /* Hide other elements that might interfere */
    .no-print {
      display: none !important;
    }
    
    /* Ensure ticket content is properly sized for print */
    .print-ticket {
      transform: none !important;
      max-width: none !important;
      box-shadow: none !important;
    }
  }
`;

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  college: z.string().min(3, { message: "College name is required." }),
  photo: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [generatedPhotoUrl, setGeneratedPhotoUrl] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      college: "",
      photo: "",
    },
  });

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        variant: "destructive",
        title: "Invalid File Type",
        description: "Please upload a JPEG, PNG, or WebP image.",
      });
      return;
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast({
        variant: "destructive",
        title: "File Too Large",
        description: "Please upload an image smaller than 5MB.",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      form.setValue("photo", dataUrl, { shouldValidate: true });
      setShowCamera(false); // Hide camera if it was open
    };
    reader.readAsDataURL(file);
  };

  // Camera functions
  const getCameraPermission = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
        setHasCameraPermission(false);
        toast({
          variant: "destructive",
          title: "Camera Access Denied",
          description: "Please enable camera permissions in your browser settings to continue.",
        });
      }
    } else {
      setHasCameraPermission(false);
      toast({
        variant: "destructive",
        title: "Camera Not Supported",
        description: "Your browser does not support camera access.",
      });
    }
  };

  const startCamera = () => {
    setShowCamera(true);
    if (hasCameraPermission === null) {
      getCameraPermission();
    }
  };

  const stopCamera = () => {
    setShowCamera(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    setHasCameraPermission(null);
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    const dataUrl = canvas.toDataURL("image/jpeg");
    form.setValue("photo", dataUrl, { shouldValidate: true });
    stopCamera();
  };
  
  const removePhoto = () => {
    form.setValue("photo", "", { shouldValidate: true });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    stopCamera();
  };

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    try {
      const result = await saveRegistration(values);

      if (result.success) {
        setFormData(values);
        setGeneratedPhotoUrl(result.photoUrl || "/https://via.placeholder.com/400x300?text=ID+Photo");
        setTicketId(`FV24-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
        setIsSubmitted(true);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
        return;
      }

      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: result.message,
        duration: 5000,
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: "Please try again later.",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const watchedPhoto = form.watch("photo");

  return (
    <>
      {/* Print Styles */}
      <style jsx global>{printStyles}</style>
      
      {/* Animated Thank You Overlay */}
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-4 z-50 bg-green-600 text-white px-6 py-4 rounded shadow-lg flex items-center justify-between w-[300px]"
          >
            <span>✅ Thank you! Your registration was successful.</span>
            <button
              className="ml-4 text-white font-bold"
              onClick={() => setShowSuccessMessage(false)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {isSubmitted && formData && generatedPhotoUrl ? (
        <div className="space-y-6">
          <div className="print-ticket">
            <ETicket
              name={formData.name}
              college={formData.college}
              photoUrl={generatedPhotoUrl}
              qrData={JSON.stringify({
                name: formData.name,
                email: formData.email,
                college: formData.college,
                ticketId,
                eventId: "FV2025",
              })}
              ticketId={ticketId}
            />
          </div>
          <div className="text-center no-print">
            <Button onClick={() => window.print()}>Print E-Ticket</Button>
          </div>
        </div>
      ) : (
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline">Participant Details</CardTitle>
            <CardDescription>Enter your details and upload a photo for your event pass.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl><Input type="email" placeholder="john.doe@example.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl><Input type="tel" placeholder="9876543210" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField control={form.control} name="college" render={({ field }) => (
                      <FormItem>
                        <FormLabel>College Name</FormLabel>
                        <FormControl><Input placeholder="University of Technology" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField control={form.control} name="photo" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Pass Photo</FormLabel>
                    <Card>
                      <CardContent className="p-4 space-y-4">
                        {/* Photo Display Area */}
                        <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted border-2 border-dashed border-gray-300">
                          {watchedPhoto ? (
                            <div className="relative w-full h-full">
                              <Image 
                                src={watchedPhoto} 
                                alt="Your photo" 
                                layout="fill" 
                                objectFit="cover" 
                                className="rounded-md"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={removePhoto}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : showCamera && hasCameraPermission ? (
                            <video 
                              ref={videoRef} 
                              className="w-full h-full object-cover" 
                              autoPlay 
                              muted 
                              playsInline 
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500">
                              <Upload className="h-12 w-12 mb-2" />
                              <p className="text-center">Upload your photo here</p>
                              <p className="text-sm text-gray-400">JPEG, PNG, or WebP (Max 5MB)</p>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                          {!watchedPhoto && !showCamera && (
                            <>
                              {/* Primary Upload Button */}
                              <Button type="button" onClick={() => fileInputRef.current?.click()} className="flex-1 sm:flex-none">
                                <Upload className="mr-2 h-4 w-4" />
                                Upload Photo
                              </Button>
                              
                              {/* Secondary Camera Button */}
                              <Button type="button" variant="outline" onClick={startCamera} className="flex-1 sm:flex-none">
                                <Camera className="mr-2 h-4 w-4" />
                                Use Camera
                              </Button>
                            </>
                          )}

                          {showCamera && hasCameraPermission && !watchedPhoto && (
                            <>
                              <Button type="button" onClick={takePhoto}>
                                <Camera className="mr-2 h-4 w-4" />
                                Take Photo
                              </Button>
                              <Button type="button" variant="outline" onClick={stopCamera}>
                                Cancel
                              </Button>
                            </>
                          )}

                          {showCamera && hasCameraPermission === false && (
                            <Alert variant="destructive">
                              <Camera className="h-4 w-4" />
                              <AlertTitle>Camera Access Required</AlertTitle>
                              <AlertDescription>
                                Please allow camera access in your browser to take a photo, or use the upload option instead.
                              </AlertDescription>
                            </Alert>
                          )}

                          {showCamera && hasCameraPermission === null && (
                            <div className="flex items-center justify-center p-4 space-x-2 text-muted-foreground">
                              <Loader2 className="h-5 w-5 animate-spin" />
                              <span>Requesting camera access...</span>
                            </div>
                          )}

                          {watchedPhoto && (
                            <>
                              <Button type="button" onClick={() => fileInputRef.current?.click()} variant="outline">
                                <Upload className="mr-2 h-4 w-4" />
                                Change Photo
                              </Button>
                              <Button type="button" variant="outline" onClick={startCamera}>
                                <Camera className="mr-2 h-4 w-4" />
                                Take New Photo
                              </Button>
                            </>
                          )}
                        </div>

                        {/* Hidden File Input */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </CardContent>
                    </Card>
                    <FormMessage />
                  </FormItem>
                )} />
                
                <canvas ref={canvasRef} className="hidden" />

                <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </>
  );
}