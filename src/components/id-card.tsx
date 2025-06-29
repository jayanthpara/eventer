"use client";

import Image from "next/image";
import QRCode from "@/components/qr-code";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface IdCardProps {
  name: string;
  college: string;
  photoUrl: string;
  qrData: string;
}

export default function IdCard({ name, college, photoUrl, qrData }: IdCardProps) {
  return (
    <div id="e-ticket" className="p-1">
        <Card className="w-full max-w-sm mx-auto bg-gradient-to-br from-primary/20 via-background to-background border-primary/30 shadow-2xl shadow-primary/20">
            <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-headline font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">FestVerse 2024</h2>
                    <Sparkles className="w-6 h-6 text-accent"/>
                </div>
                <div className="relative aspect-square w-2/3 mx-auto bg-muted/50 rounded-full overflow-hidden mb-4 border-2 border-primary/50">
                     {photoUrl && <Image src={photoUrl} alt="Participant photo" layout="fill" objectFit="cover" />}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl font-bold font-headline">{name}</h3>
                    <p className="text-muted-foreground">{college}</p>
                </div>
                
                <div className="mt-6 flex flex-col items-center justify-center space-y-2 p-4 bg-background/50 rounded-lg">
                    <QRCode data={qrData} size={120} />
                    <p className="text-muted-foreground text-xs">Scan for Entry</p>
                </div>

                 <p className="text-center text-xs text-muted-foreground mt-6">
                    This pass grants you access to all FestVerse 2024 events.
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
