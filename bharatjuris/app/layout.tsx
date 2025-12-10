import type { Metadata } from "next";
import { Lato } from "next/font/google"; // <--- Import Lato
import "./globals.css";
import Navbar from "@/components/navbar"; 
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import LightRays from "@/components/LightRays";

// Configure Lato Font
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Load multiple weights for rich typography
  variable: "--font-lato", // Define the CSS variable name
});

export const metadata: Metadata = {
  title: "Bharat Juris - AI Legal Aid Platform",
  description: "Bridging the gap to justice using AI to simplify Indian Law.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        // Apply the Lato variable and base antialiasing classes
        className={`${lato.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          
          <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
             <LightRays /> 
          </div>

          <Navbar />
          
          <main className="min-h-screen relative">
            {children}
          </main>
          
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}