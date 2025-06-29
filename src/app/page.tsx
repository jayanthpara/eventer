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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4h-2v-4zm0 6h2v2h-2v-2z" opacity="0"></path>
    <path d="M16.69 6.33c-1.34-1.14-3.23-1.6-5.18-1.15A7.983 7.983 0 0 0 4.19 9.35c-.86 2.07-.49 4.39.95 6.07 1.35 1.57 3.33 2.45 5.43 2.45 2.19 0 4.17-.96 5.5-2.62 1.25-1.55 1.7-3.64 1.14-5.63-.5-1.78-1.78-3.24-3.52-4.24zM12 20c-3.8 0-6.91-2.73-7.72-6.33.6-1.7 1.95-3.05 3.65-3.65C9.72 9.47 11.66 10 13.5 11.5c1.35 1.09 2.08 2.65 2.08 4.29 0 .34-.04.68-.11 1.01C14.54 18.23 13.12 19 12 19c-.58 0-1.14-.11-1.67-.31-.56.88-1.5 1.5-2.58 1.69A7.95 7.95 0 0 0 12 20zm-5.4-8.08c1.33 1.33 3.11 2.08 5 2.08s3.67-.75 5-2.08c.64-.64.99-1.5 1.01-2.42-.02-.92-.37-1.78-1.01-2.42-1.33-1.33-3.11-2.08-5-2.08s-3.67.75-5 2.08c-1.42 1.42-1.42 3.72 0 5.14z"></path>
    <path d="M12,2c-0.3,0-0.58,0.02-0.86,0.05C11.53,2.02,11.76,2,12,2c5.52,0,10,4.48,10,10c0,5.52-4.48,10-10,10c-5.52,0-10-4.48-10-10C2,6.48,6.48,2,12,2 M12,0C5.37,0,0,5.37,0,12s5.37,12,12,12s12-5.37,12-12S18.63,0,12,0L12,0z"></path>
    <path transform="translate(-2,-2)" d="M19.4,18.2c0.2-0.6,0.3-1.2,0.3-1.9c0-2.3-1.1-4.4-2.9-5.7c-0.4-0.3-0.8-0.5-1.3-0.7c-0.2-2-1.3-3.7-2.9-4.9 c-1.2-0.9-2.6-1.4-4.1-1.4c-1.5,0-2.9,0.5-4.1,1.4c-1.6,1.2-2.7,2.9-2.9,4.9c-0.5,0.2-0.9,0.4-1.3,0.7C2.4,12,2,14.4,2.9,16.5 c0.7,1.5,2,2.7,3.6,3.3c0,0,0,0,0.1,0c0.2,0.7,0.5,1.4,0.9,2c0.6-0.2,1.2-0.5,1.8-0.9c0.7,0.5,1.5,0.9,2.4,1.1c0.3,0.9,0.9,1.7,1.6,2.3 c0.3,0.2,0.6,0.4,0.9,0.5c0.3-0.1,0.6-0.3,0.9-0.5c0.7-0.6,1.3-1.4,1.6-2.3c0.9-0.2,1.7-0.6,2.4-1.1c0.6,0.4,1.2,0.7,1.8,0.9 c0.4-0.6,0.7-1.3,0.9-2c0,0,0.1,0,0.1,0c1.6-0.6,2.9-1.8,3.6-3.3C22.1,19.3,21.5,18.7,19.4,18.2z M12,21.8c-0.5,0-1-0.2-1.4-0.6 c-0.7-0.7-1.1-1.7-1.1-2.8c0-0.7,0.2-1.4,0.6-2c-0.9-0.3-1.8-0.8-2.5-1.4c-0.5,0.6-1.2,1.1-1.9,1.5c-0.5-0.6-0.9-1.2-1.1-1.9 C5.2,15.1,6,14.4,6,13.4c0-0.5-0.1-1-0.4-1.5c-0.5-0.8-0.7-1.7-0.6-2.6c0.1-0.9,0.5-1.8,1.2-2.4c0.7-0.6,1.6-1,2.6-1 c0.9,0,1.8,0.2,2.5,0.7C12.2,6.9,13,7.5,13.4,8.4c0.5-0.2,1-0.3,1.5-0.3c2.8,0,5.1,2.3,5.1,5.1c0,0.8-0.2,1.5-0.5,2.2 c-0.6,1-1.5,1.8-2.6,2.3c-0.3-0.8-0.8-1.5-1.4-2.1c-1.4-1.4-3.3-2.1-5.3-2.1c-1.7,0-3.3,0.5-4.6,1.4c-1.3,0.9-2.1,2.3-2.1,3.8 c0,1,0.3,1.9,0.9,2.7c0.8,1.1,2,1.8,3.3,2c0.2,0.9,0.7,1.7,1.4,2.4C11,21.6,11.5,21.8,12,21.8z" fillRule="evenodd" clipRule="evenodd"/>
  </svg>
);


export default function Home() {
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
    { q: "Are accommodation and food provided?", a: "Food and snacks will be provided throughout the event. Accommodation can be arranged on a request basis for outstation participants." },
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
        <div className="absolute inset-0 bg-background/60 z-10 backdrop-blur-sm"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          poster="https://placehold.co/1920x1080.png"
        >
          {/* You need to provide your own video file here. 
              For example, place `hero-video.mp4` in your `public` folder. */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 p-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent animate-gradient-x">
            FestVerse 2024
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Where Innovation Meets Celebration. Join the biggest hackathon and college fest of the year!
          </p>
          <div className="mt-8">
            <CountdownTimer />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full transition-transform transform hover:scale-105">
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights Section */}
        <section id="highlights" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Event Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {highlight.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-20">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Event Schedule</h2>
          <div className="relative">
            {/* Desktop timeline path */}
            <div className="hidden md:block absolute top-0 left-1/2 w-full h-full -translate-x-1/2" aria-hidden="true">
               <svg width="100%" height="100%" viewBox="0 0 200 1200" preserveAspectRatio="none">
                <path d="M 100 0 C 50 100, 150 200, 100 300 C 50 400, 150 500, 100 600 C 50 700, 150 800, 100 900 C 50 1000, 150 1100, 100 1200" className="timeline-path" />
               </svg>
            </div>
            {/* Mobile timeline path */}
            <div className="md:hidden absolute top-0 left-4 w-0.5 h-full bg-border" aria-hidden="true"></div>

            <div className="space-y-8 md:space-y-0">
            {scheduleItems.map((item, index) => (
              <div key={index} className="relative md:space-y-12">
                {/* Desktop view */}
                <div className="hidden md:flex items-center w-full my-6">
                  <div className={cn("w-5/12", index % 2 === 0 ? 'text-right pr-8' : 'pl-8 order-3')}>
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
                              <Image src={item.image} width={400} height={300} alt={item.title} className="rounded-md" data-ai-hint={item.hint}/>
                          </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="w-5/12 order-1" />
                </div>

                {/* Mobile view */}
                 <div className="flex md:hidden items-start gap-4 ml-10 mb-8">
                   <div className="absolute -left-[1px] top-1 z-10">
                      <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                          <CalendarDays className="w-5 h-5 text-primary" />
                      </div>
                   </div>
                   <div className="flex-1">
                      <p className="text-primary font-bold">{item.time}</p>
                      <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                      <Image src={item.image} width={400} height={300} alt={item.title} className="rounded-md w-full" data-ai-hint={item.hint}/>
                   </div>
                </div>
              </div>
            ))}
            </div>
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
