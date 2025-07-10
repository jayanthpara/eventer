"use client";

import Image from "next/image";
import QRCode from "@/components/qr-code";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, MapPin } from "lucide-react";

interface ETicketProps {
  name: string;
  college: string;
  photoUrl: string; // Ignored
  qrData: string;
  ticketId: string;
}

// Placeholder image
const PLACEHOLDER_IMAGE = "https://iili.io/FE7fA3F.jpg";

export default function ETicket({ name, college, qrData, ticketId }: ETicketProps) {
  const eventDetails = {
    date: "October 26-27, 2024",
    time: "9:00 AM Onwards",
    location: "University Auditorium, Tech City"
  };

  return (
    <div id="e-ticket-container" className="print:bg-white print:text-black print:p-4 print:m-0 print:shadow-none print:rounded-none print:w-full print:h-full">
      <Card className="bg-card/50 backdrop-blur-sm animate-in fade-in-50 print:!bg-white print:!text-black print:!shadow-none print:!border-0">
        <CardHeader className="text-center print:!text-black">
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 print:hidden" />
          <CardTitle className="font-headline text-3xl mt-4">Registration Confirmed!</CardTitle>
          <p className="text-muted-foreground print:!text-black">Thank you, {name}. Your e-ticket is ready.</p>
        </CardHeader>

        <CardContent className="p-4 sm:p-6">
          <div className="border-2 border-dashed border-primary/50 rounded-xl p-6 bg-background/30 print:!border-black print:!bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-dashed border-primary/50 pb-4 mb-4 gap-2 print:!border-black">
              <div>
                <h2 className="text-xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent print:!text-black print:!bg-none print:!text-xl">
                  FestVerse 2024
                </h2>
                <p className="text-xs text-muted-foreground print:!text-black">E-TICKET / ADMIT ONE</p>
              </div>
              <p className="font-mono text-sm bg-muted px-2 py-1 rounded-md print:!text-black print:!bg-white print:!border print:!border-black">
                Ticket ID: {ticketId}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="relative w-24 h-24 bg-muted rounded-full overflow-hidden border-2 border-primary/50 shrink-0">
                    {/* Always use placeholder */}
                    <Image src={PLACEHOLDER_IMAGE} alt="Participant photo" layout="fill" objectFit="cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-headline">{name}</h3>
                    <p className="text-muted-foreground print:!text-black">{college}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-dashed border-primary/20 mt-4 print:!border-black">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary shrink-0 print:!text-black" />
                    <span>{eventDetails.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary shrink-0 print:!text-black" />
                    <span>{eventDetails.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0 print:!text-black" />
                    <span>{eventDetails.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-background/50 rounded-lg print:!bg-white">
                <QRCode data={qrData} size={120} />
                <p className="text-muted-foreground text-xs text-center print:!text-black">Scan for seamless entry</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
