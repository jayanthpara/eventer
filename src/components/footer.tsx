import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-headline font-bold">
              FestVerse
            </Link>
            <p className="text-muted-foreground mt-2">
              The ultimate college fest experience.
            </p>
          </div>
          <div className="flex flex-col items-center">
             <p className="font-semibold mb-2">Quick Links</p>
            <div className="flex gap-4">
                <Button variant="link" asChild className="text-muted-foreground"><Link href="/#schedule">Schedule</Link></Button>
                <Button variant="link" asChild className="text-muted-foreground"><Link href="/#faq">FAQ</Link></Button>
                <Button variant="link" asChild className="text-muted-foreground"><Link href="/register">Register</Link></Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} FestVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
