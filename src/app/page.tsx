"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import CountdownTimer from "@/components/countdown-timer";
import AutoScrollGallery from "@/components/auto-scroll-gallery";
import { Briefcase, CalendarDays, Code, GraduationCap, Link as LinkIcon, MapPin, Mic, Sparkles, Users, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LaurelWreath = ({ colorClass }: { colorClass: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-24 h-24 ${colorClass}`}>
    <path d="M12 2C6.48 2 2 6.48..." opacity="0"></path>
  </svg>
);

export default function Home() {
  const [targetDate, setTargetDate] = useState<Date | null>(null);

  useEffect(() => {
    const now = new Date();
    const future = new Date(now.getTime() + (
      ((21 * 24 + 14) * 60 + 12) * 60 + 53
    ) * 1000);
    setTargetDate(future);
  }, []);

  const scheduleItems = [
    { time: "9:00 AM", title: "Inauguration", description: "Kick-off ceremony with guest speakers.", image: "https://placehold.co/400x300.png", hint: "stage ceremony" },
    { time: "10:00 AM", title: "Problem Statement Reveal", description: "Hackathon themes and problems are announced.", image: "https://placehold.co/400x300.png", hint: "presentation screen" },
    { time: "10:30 AM", title: "Codeathon Round 1", description: "First round of the coding challenge begins.", image: "https://placehold.co/400x300.png", hint: "students coding" },
    { time: "1:00 PM", title: "Lunch Break", description: "Recharge with a delicious meal.", image: "https://placehold.co/400x300.png", hint: "food buffet" },
    { time: "2:00 PM", title: "Workshop Session", description: "Learn from industry experts.", image: "https://placehold.co/400x300.png", hint: "workshop presentation" },
    { time: "4:00 PM", title: "Codeathon Round 2", description: "The second round of the coding challenge.", image: "https://placehold.co/400x300.png", hint: "focused coder" },
    { time: "7:00 PM", title: "DJ Night", description: "Unwind and dance to the beats.", image: "https://placehold.co/400x300.png", hint: "dj party concert" },
    { time: "9:00 PM", title: "Campfire & Midnight Snacks", description: "Networking and fun under the stars.", image: "https://placehold.co/400x300.png", hint: "campfire students" },
    { time: "11:00 PM", title: "Final Pitching", description: "Top teams present their solutions.", image: "https://placehold.co/400x300.png", hint: "startup pitch" },
    { time: "12:00 AM", title: "Closing Ceremony", description: "Prize distribution and closing remarks.", image: "https://placehold.co/400x300.png", hint: "award ceremony" },
  ];

  const highlights = [
    { icon: Mic, title: "Guest Speakers", description: "Insights from industry leaders and tech visionaries." },
    { icon: Code, title: "Hackathon Themes", description: "Challenging themes covering AI, Web3, and Sustainable Tech." },
    { icon: Sparkles, title: "Fun Activities", description: "Engaging games, workshops, and entertainment throughout." },
    { icon: Video, title: "Live Performances", description: "Electrifying live music and performances to keep the energy high." },
  ];

  const opportunities = [
    { icon: Users, title: "Networking", description: "Connect with peers, mentors, and recruiters." },
    { icon: Briefcase, title: "Internship Offers", description: "Top performers get a chance for internships." },
    { icon: LinkIcon, title: "Collaborations", description: "Find co-founders and collaborators for future projects." },
    { icon: GraduationCap, title: "Certifications", description: "Receive certificates of participation and merit." },
  ];

  const faqItems = [
    { q: "Who can participate?", a: "The event is open to all undergraduate and postgraduate students from any stream." },
    { q: "Is there a registration fee?", a: "Yes, there is a nominal registration fee. Please check the registration page for details." },
    { q: "Can I participate alone?", a: "Yes, you can participate as an individual. We also have team formation sessions at the beginning of the event." },
    { q: "Are accommodation and food provided?", a: "Food and snacks will be provided throughout the event. Accommodation can be arranged on request for outstation participants." },
  ];

  const sponsors = [
    { name: "Sponsor 1", logo: "https://i.ibb.co/HpqnbwQZ/alogo.png", dataAiHint: "tech logo" },
    { name: "Sponsor 2", logo: "https://i.ibb.co/4w16JG3Y/tlogo.png", dataAiHint: "startup logo" },
    { name: "Sponsor 3", logo: "https://i.ibb.co/Xrypbztn/ttlogo.png", dataAiHint: "company logo" },
    { name: "Sponsor 4", logo: "https://i.ibb.co/PyWD9C0/nlogo.png", dataAiHint: "brand logo" },
    { name: "Sponsor 5", logo: "https://i.ibb.co/cX6Mjrsk/mlogo.png", dataAiHint: "software logo" },
    { name: "Sponsor 6", logo: "https://i.ibb.co/DHffzf9Y/glogo.webp", dataAiHint: "tech company" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute inset-0 w-full h-full object-cover opacity-0"
          poster="https://cdn.pixabay.com/photo/2017/11/12/08/39/snow-2949695_1280.jpg"
        >
          <source src="https://cdn.pixabay.com/video/2019/04/20/22908-331768732_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-background/1 "></div>
        <div className="relative z-20 p-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent animate-gradient-x">
            FestVerse 2024
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Where Innovation Meets Celebration. Join the biggest hackathon and college fest of the year!
          </p>
          <div className="mt-8">{targetDate && <CountdownTimer targetDate={targetDate} />}</div>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full transition-transform transform hover:scale-105">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights */}
        <section id="highlights" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl sm:text-2xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground text-sm sm:text-base">{highlight.description}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Event Schedule</h2>
          <div className="relative space-y-8">
            {scheduleItems.map((item, i) => (
              <div key={i} className="relative md:space-y-12">
                <div className="hidden md:flex items-center w-full my-6">
                  <div className={cn("w-5/12", i % 2 === 0 ? "text-right pr-8" : "pl-8 order-3")}>
                    <p className="text-primary font-bold">{item.time}</p>
                    <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  <div className="w-2/12 flex justify-center order-2">
                    <TooltipProvider>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <div className="w-10 h-10 bg-background border-2 border-primary rounded-full z-10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <CalendarDays className="w-5 h-5 text-primary" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-0 border-transparent bg-transparent shadow-xl">
                          <Image src={item.image} width={400} height={300} alt={item.title} className="rounded-md" data-ai-hint={item.hint} />
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="w-5/12 order-1" />
                </div>

                <div className="flex md:hidden items-start gap-4 ml-10 mb-8">
                  <div className="absolute -left-[1px] top-1 z-10">
                    <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                      <CalendarDays className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-bold">{item.time}</p>
                    <h3 className="font-headline text-lg sm:text-xl font-semibold mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                    {/* Remove image on mobile */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20 text-center">
            <h2 className="text-4xl font-headline font-bold mb-12">Prizes & Recognition</h2>
            <div className="flex flex-col md:flex-row justify-center items-end gap-8 md:gap-4">
                <div className="podium-item order-2 md:order-1 w-full max-w-xs mx-auto md:w-1/3">
                    <LaurelWreath colorClass="text-gray-300" />
                    <div className="podium-base h-32 bg-foreground/70 shadow-lg">2</div>
                    <div className="mt-4">
                      <p className="text-3xl font-bold">₹50,000</p>
                      <p className="text-muted-foreground">and cool swags</p>
                    </div>
                </div>
                <div className="podium-item order-1 md:order-2 w-full max-w-xs mx-auto md:w-1/3">
                    <LaurelWreath colorClass="text-yellow-400" />
                    <div className="podium-base h-48 bg-foreground shadow-2xl">1</div>
                     <div className="mt-4">
                      <p className="text-4xl font-bold text-primary">₹1,00,000</p>
                      <p className="text-muted-foreground">and amazing goodies</p>
                    </div>
                </div>
                <div className="podium-item order-3 md:order-3 w-full max-w-xs mx-auto md:w-1/3">
                    <LaurelWreath colorClass="text-orange-400" />
                    <div className="podium-base h-24 bg-foreground/50 shadow-md">3</div>
                     <div className="mt-4">
                      <p className="text-2xl font-bold">₹25,000</p>
                      <p className="text-muted-foreground">and exclusive merch</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Opportunities Section */}
        <section id="opportunities" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Advantages & Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20">
                <div className="p-3 bg-primary/10 rounded-full">
                  <opp.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-semibold">{opp.title}</h3>
                  <p className="text-muted-foreground">{opp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">What Our Alums Say</h2>
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                     <AutoScrollGallery />
                </CardContent>
            </Card>
        </section>

        {/* Venue Section */}
        <section id="venue" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Venue</h2>
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="font-headline text-3xl font-bold">University Auditorium</h3>
                <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <p>123 University Road, Tech City, India</p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <CalendarDays className="w-5 h-5" />
                  <p>October 26-27, 2024</p>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Our state-of-the-art auditorium is equipped with high-speed internet, comfortable seating, and a massive stage for all the action. Located in the heart of the campus, it's easily accessible.
                </p>
              </div>
              <div>
                <Image src="https://placehold.co/600x400.png" width={600} height={400} alt="Venue map" className="w-full h-full object-cover" data-ai-hint="college campus" />
              </div>
            </div>
          </Card>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Glimpses from the Past</h2>
             <AutoScrollGallery />
        </section>
        
        {/* Sponsors Section */}
        <section id="sponsors" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Our Sponsors</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <Image key={index} src={sponsor.logo} width={150} height={60} alt={sponsor.name} className="grayscale hover:grayscale-0 transition-all duration-300" data-ai-hint={sponsor.dataAiHint} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-headline text-lg">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
