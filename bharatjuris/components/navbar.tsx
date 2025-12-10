"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale, Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation"; // <--- Import this
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname(); // <--- Get current route

  // Logic: If we are on the chat page, DO NOT render this Navbar
  if (pathname === "/chat") {
    return null;
  }

  const navLinks = [
    { name: "Nyaya Sahayak Chat", href: "/chat" },
    { name: "Features", href: "/#features" },
    { name: "How it Works", href: "/#how-it-works" },
  ];

  return (
    // Floating Pill Container
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <div className="rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:bg-white/20 dark:hover:bg-black/40 px-6 py-3 flex items-center justify-between transition-all duration-300">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity">
          <Scale className="h-5 w-5" />
          <span>BharatJuris</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
           <ModeToggle />
           <Link href="/chat">
            <Button size="sm" className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 font-bold px-6 shadow-md">
              Get Started
            </Button>
           </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 dark:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-white/95 dark:bg-black/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl">
              <div className="flex flex-col gap-6 mt-8 items-center">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg font-medium text-slate-900 dark:text-white">
                    {link.name}
                  </Link>
                ))}
                <Link href="/chat" className="w-full max-w-xs">
                  <Button className="w-full rounded-full font-bold">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}