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
    { time: "9:00 AM", title: "Inauguration", description: "Kick-off ceremony with guest speakers.", image: "https://i.ibb.co/kt7LkVr/IMG-8694.jpg", hint: "stage ceremony" },
    { time: "10:00 AM", title: "Problem Statement Reveal", description: "Hackathon themes and problems are announced.", image: "https://i.ibb.co/zhZ94c6R/IMG-8935.jpg", hint: "presentation screen" },
    { time: "10:30 AM", title: "Codeathon Round 1", description: "First round of the coding challenge begins.", image: "https://i.ibb.co/jZh9D5Xg/IMG-8975.jpg", hint: "students coding" },
    { time: "1:00 PM", title: "Lunch Break", description: "Recharge with a delicious meal.", image: "https://i.ibb.co/RG99w7NZ/IMG-8702.jpg", hint: "food buffet" },
    { time: "2:00 PM", title: "Workshop Session", description: "Learn from industry experts.", image: "https://i.ibb.co/zhZ94c6R/IMG-8935.jpg", hint: "workshop presentation" },
    { time: "4:00 PM", title: "Codeathon Round 2", description: "The second round of the coding challenge.", image: "https://i.ibb.co/TMG6y2BV/IMG-8890.jpg", hint: "focused coder" },
    { time: "7:00 PM", title: "DJ Night", description: "Unwind and dance to the beats.", image: "https://i.ibb.co/27CFNhqH/IMG-0042.jpg", hint: "dj party concert" },
    { time: "9:00 PM", title: "Campfire & Midnight Snacks", description: "Networking and fun under the stars.", image: "https://i.ibb.co/27Ctd0C8/IMG-9008.jpg", hint: "campfire students" },
    { time: "11:00 PM", title: "Final Pitching", description: "Top teams present their solutions.", image: "https://i.ibb.co/VW9JqB4S/IMG-0172.jpg", hint: "startup pitch" },
    { time: "12:00 AM", title: "Closing Ceremony", description: "Prize distribution and closing remarks.", image: "https://i.ibb.co/v4BZShss/IMG-8781-1.jpg", hint: "award ceremony" },
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
    { name: "Sponsor 1", logo: "https://i.ibb.co/HpqnbwQZ/alogo.png", dataAiHint: "amazon logo" },
    { name: "Sponsor 2", logo: "https://i.ibb.co/4w16JG3Y/tlogo.png", dataAiHint: "tcs logo" },
   
    { name: "Sponsor 4", logo: "https://i.ibb.co/PyWD9C0/nlogo.png", dataAiHint: "Netflix logo" },
    { name: "Sponsor 5", logo: "https://i.ibb.co/cX6Mjrsk/mlogo.png", dataAiHint: "Meta logo" },
    { name: "Sponsor 6", logo: "https://i.ibb.co/DHffzf9Y/glogo.webp", dataAiHint: "Google company" },
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
            FestVerse 2025
          </h1>
          <p className="mt-2 text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
  Where Innovation Meets Celebration. Join the biggest hackathon and college fest of the year!
</p>

          <div className="mt-6 sm:mt-8">
  {targetDate && (
    <div className="max-w-xs sm:max-w-md mx-auto text-lg sm:text-2xl md:text-4xl">
      <CountdownTimer targetDate={targetDate} />
    </div>
  )}
</div>

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

        <section id="schedule" className="py-20 relative ">
  <h2 className="text-4xl font-headline font-bold text-center mb-12">Event Schedule</h2>

  <div className="relative flex flex-col space-y-16">
    {/* Vertical timeline line */}
    <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-primary/20 z-0" />

    {scheduleItems.map((item, i) => (
      <div
        key={i}
        className="relative flex flex-col md:flex-row md:items-center md:justify-between w-full"
      >
        {/* Left content */}
        <div className={`hidden md:block w-5/12 ${i % 2 === 0 ? "text-right pr-8" : "order-3 text-left pl-8"}`}>
          <p className="text-primary font-bold">{item.time}</p>
          <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>

        {/* Center icon on timeline */}
        <div className="hidden md:flex justify-center items-center md:absolute left-1/2 transform -translate-x-1/2 z-10 group relative">
  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
    <CalendarDays className="w-6 h-6 text-primary" />
  </div>

  {/* Hover image */}
  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[110%] pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-[400px]">
  <Image
    src={item.image}
    width={400}
    height={300}
    alt={item.title}
    className="w-full h-auto rounded-lg shadow-lg border border-primary bg-background"
    data-ai-hint={item.hint}
  />
</div>

</div>


        {/* Right content */}
        <div className={`hidden md:block w-5/12 ${i % 2 === 0 ? "" : "order-1"}`} />

        {/* Mobile: stacked timeline items */}
        <div className="flex md:hidden items-start relative pl-8">
  {/* Vertical line (mobile only) */}
  <div className="absolute left-3 top-0 bottom-0 w-px bg-primary/30 z-0" />
  
  {/* Icon on the line */}
  <div className="relative z-10">
    <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
      <CalendarDays className="w-5 h-5 text-primary" />
    </div>
  </div>
  
  {/* Details to the right */}
  <div className="flex-1 pl-4">
    <p className="text-primary font-bold">{item.time}</p>
    <h3 className="font-headline text-lg sm:text-xl font-semibold mt-1">{item.title}</h3>
    <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
  </div>
</div>

      </div>
    ))}
  </div>
</section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20 text-center">
            <h2 className="text-4xl font-headline font-bold mb-12">Prizes & Recognition</h2>
            <div className="w-full flex flex-row justify-center items-end gap-2 sm:gap-6 overflow-x-auto px-2 py-6">
  {/* 2nd Prize */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 rounded-lg w-24 h-20 sm:w-44 sm:h-36 flex items-center justify-center text-2xl sm:text-4xl font-bold text-gray-700 mb-2">
      2
    </div>
    <div className="text-base sm:text-xl font-bold text-white">₹50,000</div>
    <div className="text-xs sm:text-base text-gray-400"></div>
  </div>
  {/* 1st Prize (center, bigger) */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-100 rounded-lg w-28 h-28 sm:w-56 sm:h-56 flex items-center justify-center text-3xl sm:text-6xl font-bold text-gray-800 mb-2">
      1
    </div>
    <div className="text-lg sm:text-2xl font-bold text-purple-500">₹1,00,000</div>
    <div className="text-xs sm:text-base text-gray-400"></div>
  </div>
  {/* 3rd Prize */}
  <div className="flex flex-col items-center">
    <div className="bg-gray-300 rounded-lg w-24 h-20 sm:w-44 sm:h-36 flex items-center justify-center text-2xl sm:text-4xl font-bold text-gray-700 mb-2">
      3
    </div>
    <div className="text-base sm:text-xl font-bold text-white">₹25,000</div>
    <div className="text-xs sm:text-base text-gray-400"></div>
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
        <section id="testimonials" className="py-20 hidden sm:block">
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
                  <p>MR University , Hyderabad, India</p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                  <CalendarDays className="w-5 h-5" />
                  <p>October 26-27, 2025</p>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Our state-of-the-art auditorium is equipped with high-speed internet, comfortable seating, and a massive stage for all the action. Located in the heart of the campus, it's easily accessible.
                </p>
              </div>
              <div>
                <Image src="https://i.ibb.co/yFK2Ydyh/Screenshot-13.png" width={600} height={400} alt="Venue map" className="w-full h-full object-cover" data-ai-hint="college campus" />
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
