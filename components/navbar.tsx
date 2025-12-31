"use client";

import Link from "next/link";
import Image from "next/image"; 
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; 
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();

  // Paths where navbar should be hidden
  const hiddenPaths = ["/chat", "/documents", "/draft", "/legal"];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  const navLinks = [
    { name: "Nyaya Sahayak", href: "/chat" },
    { name: "Analyzer", href: "/documents" },
    { name: "Legal Drafter", href: "/draft" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <div className="rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-3 flex items-center justify-between">
        
        {/* Logo Section - Original Size */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          {/* w-32 allows the full wide logo to fit naturally */}
          <div className="relative h-10 w-32"> 
            <Image 
              src="/Bharat.png" 
              alt="Bharat Juris Logo"
              fill
              className="object-contain object-left" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav - Clean & Consistent Fonts */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              // ✅ REMOVED: Blue hover effect
              // ✅ ADDED: Subtle shift to Black/White (Premium feel)
              className="hover:text-black dark:hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
           <Link href="/chat">
            <Button size="sm" className="rounded-full bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 font-semibold px-6 shadow-md transition-transform hover:scale-105">
              Start Now
            </Button>
           </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-slate-900 dark:text-white">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-white/95 dark:bg-black/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl">
              <div className="flex flex-col gap-6 mt-8 items-center">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/chat" className="w-full max-w-xs">
                  <Button className="w-full rounded-full font-bold">Start Now</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}