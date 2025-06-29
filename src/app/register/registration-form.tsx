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
import { Camera, Loader2, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { saveRegistration } from "@/actions/save-registration";
import ETicket from "@/components/e-ticket";
import { motion, AnimatePresence } from "framer-motion"; // 👈 Added for animation

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  college: z.string().min(3, { message: "College name is required." }),
  photo: z.string().optional(),  // ✅ photo is now optional
});


type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [generatedPhotoUrl, setGeneratedPhotoUrl] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string>("");
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  useEffect(() => {
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
    
    if (hasCameraPermission === null) {
      getCameraPermission();
    }
  }, [hasCameraPermission, toast]);


  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
  };
  
  const retakePhoto = () => {
    form.setValue("photo", "", { shouldValidate: true });
  };

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    try {
        const result = await saveRegistration(values);

        if (result.success && result.photoUrl) {
  setFormData(values);
  setGeneratedPhotoUrl(result.photoUrl);
  setTicketId(`FV24-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
  setIsSubmitted(true);

  setShowSuccessMessage(true);
  setTimeout(() => setShowSuccessMessage(false), 5000);
  return; // done, exit the function
}

// no else needed, just write this directly:
toast({
  variant: "destructive",
  title: "Registration Failed",
  description: result.message,
  duration: 5000,
  action: {
    label: "✕",
    onClick: () => toast.dismiss(),
  },
});



    } catch (error) {
        console.error("Submission error:", error);
        toast({
  variant: "destructive",
  title: "An unexpected error occurred",
  description: "Please try again later.",
  duration: 5000,
  action: {
    label: "✕",
    onClick: () => toast.dismiss(),
  },
});

    } finally {
        setIsLoading(false);
    }
  };

  const watchedPhoto = form.watch("photo");

  return (
    <>
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
          <ETicket
            name={formData.name}
            college={formData.college}
            photoUrl={generatedPhotoUrl}
            qrData={JSON.stringify({
              name: formData.name,
              email: formData.email,
              college: formData.college,
              ticketId,
              eventId: "FV2024",
            })}
            ticketId={ticketId}
          />
          <div className="text-center">
            <Button onClick={() => window.print()}>Print E-Ticket</Button>
          </div>
        </div>
      ) : (
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline">Participant Details</CardTitle>
            <CardDescription>Enter your details and take a photo for your event pass.</CardDescription>
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
                        {hasCameraPermission === false && (
                          <Alert variant="destructive">
                            <Camera className="h-4 w-4" />
                            <AlertTitle>Camera Access Required</AlertTitle>
                            <AlertDescription>
                              Please allow camera access in your browser to take a photo. You may need to refresh the page after granting permission.
                            </AlertDescription>
                          </Alert>
                        )}
                        {hasCameraPermission === null && (
                           <div className="flex items-center justify-center p-8 space-x-2 text-muted-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <span>Initializing Camera...</span>
                          </div>
                        )}
                        {hasCameraPermission && (
                          <div className="space-y-4">
                            <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted">
                               {watchedPhoto ? (
                                  <Image src={watchedPhoto} alt="Your photo" layout="fill" objectFit="cover" />
                               ) : (
                                  <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                               )}
                               <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                            <div className="flex justify-center gap-4">
                                {watchedPhoto ? (
                                    <Button type="button" variant="outline" onClick={retakePhoto}>
                                        <RefreshCw className="mr-2" /> Retake Photo
                                    </Button>
                                ) : (
                                    <Button type="button" onClick={takePhoto} disabled={!hasCameraPermission}>
                                        <Camera className="mr-2" /> Take Photo
                                    </Button>
                                )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                    <FormMessage />
                  </FormItem>
                )} />
                
                 <canvas ref={canvasRef} className="hidden" />

                <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                  {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>) : "Complete Registration"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
