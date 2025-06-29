"use client";

import Image from "next/image";
import QRCode from "@/components/qr-code";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";

interface ETicketProps {
  name: string;
  college: string;
  photoUrl: string;
  qrData: string;
  ticketId: string;
}

export default function ETicket({ name, college, photoUrl, qrData, ticketId }: ETicketProps) {
  const eventDetails = {
    date: "October 26-27, 2024",
    time: "9:00 AM Onwards",
    location: "University Auditorium, Tech City"
  };

  return (
    <div id="e-ticket-container">
      <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in-50">
        <CardHeader className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
          <CardTitle className="font-headline text-3xl mt-4">Registration Confirmed!</CardTitle>
          <p className="text-muted-foreground">Thank you, {name}. Your e-ticket is ready.</p>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="border-2 border-dashed border-primary/50 rounded-xl p-6 bg-background/30">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-dashed border-primary/50 pb-4 mb-4 gap-2">
              <div>
                <h2 className="text-xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">FestVerse 2024</h2>
                <p className="text-xs text-muted-foreground">E-TICKET / ADMIT ONE</p>
              </div>
              <p className="font-mono text-sm bg-muted px-2 py-1 rounded-md">Ticket ID: {ticketId}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-4">
                 <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                    <div className="relative w-24 h-24 bg-muted rounded-full overflow-hidden border-2 border-primary/50 shrink-0">
                        {photoUrl && <Image src={photoUrl} alt="Participant photo" layout="fill" objectFit="cover" />}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-headline">{name}</h3>
                        <p className="text-muted-foreground">{college}</p>
                    </div>
                 </div>

                 <div className="space-y-2 pt-4 border-t border-dashed border-primary/20 mt-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary shrink-0"/>
                        <span>{eventDetails.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary shrink-0"/>
                        <span>{eventDetails.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-primary shrink-0"/>
                        <span>{eventDetails.location}</span>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-background/50 rounded-lg">
                  <QRCode data={qrData} size={120} />
                  <p className="text-muted-foreground text-xs text-center">Scan for seamless entry</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
