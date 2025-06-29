import Link from "next/link";
import { Button } from "./ui/button";
import AiChatbot from "./ai-chatbot";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-6xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-xl sm:inline-block">
              FestVerse
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#highlights" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Highlights
          </Link>
          <Link href="/#schedule" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Schedule
          </Link>
          <Link href="/#prizes" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Prizes
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-foreground/80 text-foreground/60">
            FAQ
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild className="hidden md:inline-flex">
                <Link href="/register">Register Now</Link>
            </Button>
          <AiChatbot />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
