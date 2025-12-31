import type { Metadata } from "next";
import { Lato } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { GuestBadge } from "@/components/guestbadge";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "BharatJuris - AI Legal Assistant",
  description: "Simplifying Indian Law for everyone.",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Removed playfair variable. Now using only Lato. */}
      <body className={`${lato.variable} font-sans antialiased bg-[#050505] text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            
            <Navbar />
            
            {children}
            
            <Toaster />

            <GuestBadge />
            
            <Analytics />

          </ThemeProvider>
      </body>
    </html>
  );
}