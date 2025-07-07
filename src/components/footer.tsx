"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-12 border-t border-border mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-lg">FestVerse 2025</h3>
          <p className="text-sm text-muted-foreground">
  Made by <a href="https://jayanthpara.vercel.app/" target="_blank" rel="noopener noreferrer"><strong className="text-blue-500">Jayanth Para</strong></a>
</p>

          <p className="text-xs text-muted-foreground mt-1">&copy; {new Date().getFullYear()} FestVerse. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com/jayanth_para" target="_blank" className="hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/jayanthpara" target="_blank" className="hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://www.instagram.com/jayanth_para" target="_blank" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="http://www.linkedin.com/in/jayanth-para-4a60aa25a" target="_blank" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
