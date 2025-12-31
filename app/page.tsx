import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Mic, Scale, FileText, 
  BookOpen, Gavel, Landmark, Twitter, Github, Linkedin, Mail, PlayCircle, ShieldCheck, Zap 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // Main Container
    <div className="flex flex-col min-h-screen bg-[#050505] bg-grid-white/[0.05] text-white font-sans overflow-x-hidden selection:bg-blue-500/30 no-scrollbar">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-40 pb-32 px-4 text-center space-y-10 max-w-6xl mx-auto z-10">
        
        {/* Vignette Mask */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* HERO TITLE */}
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
              Legal Clarity. <br className="hidden sm:block" />
              
              {/* THE RADIAL GLOW & TEXT */}
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-10 bg-blue-500/15 blur-[100px] rounded-full pointer-events-none select-none"></span>
                <span className="relative text-blue-500">
                  Instantly Available.
                </span>
              </span>
            </h1>
            
            {/* SUBHEAD */}
            <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide font-medium">
              Bharat Juris simplifies Indian Law. Chat with Nyaya Sahayak, draft rent agreements, and understand court notices in seconds.
            </p>
            
            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto justify-center items-center">
              <Link href="/chat">
                  <Button size="lg" className="h-14 px-8 min-w-[200px] text-lg font-semibold tracking-wide rounded-full bg-white text-black hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
                    Start Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
              </Link>
              
              <Link href="#how-it-works">
                  <Button variant="outline" size="lg" className="h-14 px-8 min-w-[200px] text-lg font-medium tracking-wide rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 active:bg-white/20 active:scale-95 backdrop-blur-sm transition-all">
                    <PlayCircle className="mr-2 h-5 w-5 text-gray-400" /> How it Works
                  </Button>
              </Link>
            </div>

            {/* TRUST SIGNALS */}
            <div className="pt-12 grid grid-cols-3 gap-8 opacity-60">
                <div className="flex flex-col items-center gap-2">
                    <Zap className="w-5 h-5 text-gray-400" />
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">Powered by Groq</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gray-400" />
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">Private & Secure</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Scale className="w-5 h-5 text-gray-400" />
                    <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500">Valid BNS 2023</span>
                </div>
            </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section id="constitution" className="w-full py-32 px-4 bg-[#0a0a0a]/50 border-y border-[#1f1f1f] relative overflow-hidden backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide text-white leading-tight">
              Upholding the Spirit of <br/> <span className="text-blue-500">Indian Law</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed tracking-wide font-light">
              We operate on the principles of the <strong>Constitution of India</strong>. 
              Our mission is to ensure that justice is not just a privilege for the wealthy, but a right accessible to every citizen.
            </p>
            
            <div className="space-y-6 pt-4">
                <div className="flex items-start gap-5 group cursor-default">
                    <div className="p-3 rounded-2xl bg-[#151515] border border-[#333] group-hover:border-white/30 transition-colors duration-300">
                        <Gavel className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white tracking-wide">Article 39A Compliance</h4>
                        <p className="text-gray-500 tracking-wide">Promoting equal justice and free legal aid.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 group cursor-default">
                    <div className="p-3 rounded-2xl bg-[#151515] border border-[#333] group-hover:border-white/30 transition-colors duration-300">
                        <Landmark className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white tracking-wide">BNS & IPC Trained</h4>
                        <p className="text-gray-500 tracking-wide">Up-to-date with Bharatiya Nyaya Sanhita.</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-[#333] group">
              <Image 
                src="/court.jpg" 
                alt="Supreme Court of India" 
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-bold tracking-[0.2em] uppercase mb-2 text-blue-400">Justice For All</p>
                <p className="text-lg opacity-90 font-medium tracking-wide">Bridging the gap between the judiciary and the people.</p>
              </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="w-full py-32 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide text-white">Powerful Tools, Simple Use</h2>
            <p className="text-xl text-gray-400 tracking-wide max-w-2xl mx-auto">Everything you need to navigate the legal system with confidence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Speak Your Language",
                desc: "Legal advice in Hindi, Marathi, or English. Our AI understands your local dialect.",
                link: "/chat"
              },
              {
                icon: FileText,
                title: "Simplify Court Notices",
                desc: "Received a confusing notice? Upload it and get a summary: Is it urgent? What should you do next?",
                link: "/documents"
              },
              {
                icon: BookOpen,
                title: "Instant Drafting",
                desc: "Create legally binding Rent Agreements and Affidavits in minutes, without a lawyer.",
                link: "/draft"
              }
            ].map((feature, i) => (
              <Link key={i} href={feature.link} className="block h-full">
                  <Card className="h-full group bg-[#0a0a0a] border-[#333] hover:border-white/20 hover:bg-[#0f0f0f] hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader>
                      <feature.icon className="h-12 w-12 text-gray-500 mb-6 group-hover:text-white transition-colors duration-300" />
                      <CardTitle className="text-2xl font-bold tracking-wide text-white group-hover:text-white transition-colors duration-300">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg text-gray-400 leading-relaxed tracking-wide group-hover:text-gray-300 transition-colors duration-300">
                      {feature.desc}
                    </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="how-it-works" className="w-full py-32 px-4 border-t border-[#1f1f1f] bg-[#0a0a0a]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-wide text-white">Get Answers in 3 Steps</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#333] to-transparent z-0"></div>

            {[
                { 
                  title: "Describe Your Issue", 
                  desc: "Type your situation in plain language. No complex legal terms needed." 
                },
                { 
                  title: "AI Interpretation", 
                  desc: "The system applies BNS & IPC frameworks to your specific context instantly." 
                },
                { 
                  title: "Receive Guidance", 
                  desc: "Get a simplified explanation, a summary, or a ready-to-use legal draft." 
                }
            ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 group cursor-default">
                    <div className="h-20 w-20 rounded-2xl bg-[#151515] border border-[#333] group-hover:border-white/30 group-hover:bg-white/5 flex items-center justify-center shadow-xl z-10 transition-all duration-300 rotate-0 group-hover:rotate-3">
                        <span className="text-3xl font-bold text-gray-500 group-hover:text-white transition-colors duration-300">{i + 1}</span>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-wide text-white group-hover:text-white transition-colors duration-300">{step.title}</h3>
                        <p className="text-gray-400 max-w-xs text-base leading-relaxed tracking-wide mx-auto">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="w-full py-12 px-6 border-t border-[#1f1f1f] bg-[#050505]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-0">
            
            <div className="space-y-4 max-w-sm">
                <div className="flex items-center gap-3 font-bold text-2xl tracking-tight text-white">
                    {/* ✅ FIXED: Removed 'grayscale' - Logo is now Blue only (Original Color) */}
                    <div className="relative h-20 w-64"> 
                        <Image 
                          src="/Bharat.png" 
                          alt="Bharat Juris Logo"
                          fill
                          className="object-contain object-left"
                        />
                    </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                    Democratizing legal access through AI. <br/> 
                    Breaking language barriers and simplifying complexity.
                </p>
                <div className="pt-4 flex items-center gap-2 text-xs text-gray-500">
                    <span>© 2025 Bharat Juris.</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"/>
                    <span>Made with ❤️ in India.</span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 text-sm">
                
                <div className="space-y-4">
                    <h4 className="text-white font-semibold tracking-wide font-serif">Platform</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/chat" className="hover:text-white transition-colors">Nyaya Sahayak</Link></li>
                        <li><Link href="/documents" className="hover:text-white transition-colors">Analyzer</Link></li>
                        <li><Link href="/draft" className="hover:text-white transition-colors">Legal Drafter</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-semibold tracking-wide font-serif">Legal</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/legal" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/legal" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link href="/legal" className="hover:text-white transition-colors">Disclaimer</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-semibold tracking-wide font-serif">Connect</h4>
                    <div className="flex gap-4">
                        <Link href="https://x.com/PlayzMac" target="_blank" className="p-2 bg-[#151515] rounded-full text-gray-400 hover:text-black hover:bg-white transition-all border border-[#222]">
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link href="https://github.com/Macplayz" target="_blank" className="p-2 bg-[#151515] rounded-full text-gray-400 hover:text-black hover:bg-white transition-all border border-[#222]">
                            <Github className="h-4 w-4" />
                        </Link>
                        <Link href="mailto:machhanilay@gmail.com" className="p-2 bg-[#151515] rounded-full text-gray-400 hover:text-black hover:bg-white transition-all border border-[#222]">
                            <Mail className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}