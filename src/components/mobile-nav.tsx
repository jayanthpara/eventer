"use client"

import Link from "next/link";
import { Home, Calendar, Trophy, UserPlus, Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/#", icon: Home, label: "Home" },
    { href: "/#schedule", icon: Calendar, label: "Schedule" },
    { href: "/#prizes", icon: Trophy, label: "Prizes" },
    { href: "/#highlights", icon: Sparkles, label: "Highlights"},
    { href: "/register", icon: UserPlus, label: "Register" },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-sm border-t border-border/40 z-50">
            <nav className="h-full">
                <ul className="flex justify-around items-center h-full px-2">
                    {navItems.map((item) => {
                        const isActive = (item.href === '/register' && pathname === '/register') || (item.href !== '/register' && pathname === '/');
                        return (
                            <li key={item.label}>
                                <Link href={item.href} className={cn(
                                    "flex flex-col items-center justify-center gap-1 w-16 text-xs transition-colors rounded-md py-1",
                                    isActive ? "text-primary" : "text-muted-foreground",
                                    "hover:text-primary"
                                )}>
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
}
