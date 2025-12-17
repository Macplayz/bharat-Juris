import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, Mic, Scale, FileText, 
  BookOpen, Gavel, Landmark, Twitter, Github, Linkedin, Mail 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    // Main Container
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden no-scrollbar selection:bg-blue-100 dark:selection:bg-blue-900 font-sans">
      
      {/* 1. HERO SECTION (White Background) */}
      <section className="relative w-full pt-48 pb-32 px-4 text-center space-y-10 max-w-6xl mx-auto">
        
        <div className="relative z-10 flex flex-col items-center gap-10">
            
            {/* CONSTITUTION TEXT */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-slate-500 dark:text-slate-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              Aligned with Article 39A
            </div>
            
            {/* HERO TITLE */}
            <h1 className="text-5xl md:text-8xl font-black tracking-wide text-slate-900 dark:text-white leading-[1.1]">
              Legal Clarity. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
                Instantly Available.
              </span>
            </h1>
            
            {/* SUBHEAD */}
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed tracking-wide font-medium">
              Bharat Juris simplifies Indian Law. Chat with Nyaya Sahayak,draft rent agreements, and understand court notices in seconds.
            </p>
            
            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 w-full sm:w-auto">
              <Link href="/chat">
                  <Button size="lg" className="h-16 px-12 min-w-[260px] text-lg font-bold tracking-wide rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-slate-200 shadow-2xl transition-all hover:scale-105 w-full sm:w-auto">
                  Start Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
              </Link>
              <Link href="/documents">
                  <Button variant="outline" size="lg" className="h-16 px-12 min-w-[200px] text-lg font-bold tracking-wide rounded-full border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-white/10 transition-all w-full sm:w-auto">
                  Draft Documents
                  </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* 2. TRUST SECTION (Grey Background for Separation) */}
      {/* Changed bg-white to bg-slate-50 for Visual Rhythm */}
      <section id="constitution" className="w-full py-32 px-4 bg-slate-50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-slate-900 dark:text-white leading-tight">
              Upholding the Spirit of <br/> Indian Law
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
              We operate on the principles of the <strong>Constitution of India</strong>. 
              Our mission is to ensure that justice is not just a privilege for the wealthy, but a right accessible to every citizen.
            </p>
            
            <div className="space-y-6 pt-4">
                <div className="flex items-start gap-5">
                    {/* Icon Box: White to pop against Grey Background */}
                    <div className="p-3 rounded-2xl bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-transparent">
                        <Gavel className="h-6 w-6 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">Article 39A Compliance</h4>
                        <p className="text-slate-500 dark:text-slate-400 tracking-wide">Promoting equal justice and free legal aid.</p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className="p-3 rounded-2xl bg-white dark:bg-white/10 shadow-sm border border-slate-200 dark:border-transparent">
                        <Landmark className="h-6 w-6 text-slate-900 dark:text-white" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-wide">BNS & IPC Trained</h4>
                        <p className="text-slate-500 dark:text-slate-400 tracking-wide">Up-to-date with Bharatiya Nyaya Sanhita.</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 group">
             <Image 
               src="/court.jpg" 
               alt="Supreme Court of India" 
               fill
               className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
             <div className="absolute bottom-8 left-8 text-white">
               <p className="text-sm font-bold tracking-[0.2em] uppercase mb-2 text-blue-400">Justice For All</p>
               <p className="text-lg opacity-90 font-medium tracking-wide">Bridging the gap between the judiciary and the people.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION (White Background) */}
      <section id="features" className="w-full py-32 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-slate-900 dark:text-white">Powerful Tools, Simple Use</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 tracking-wide">Everything you need to navigate the legal system with confidence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Speak Your Language",
                desc: "Legal advice in Hindi, Marathi, or English. Our AI understands your local dialect."
              },
              {
                icon: FileText,
                title: "Simplify Court Notices",
                desc: "Received a confusing notice? Upload it and get a summary: Is it urgent? What should you do next?"
              },
              {
                icon: BookOpen,
                title: "Instant Drafting",
                desc: "Create legally binding Rent Agreements and Affidavits in minutes, without a lawyer."
              }
            ].map((feature, i) => (
              // Cards: Grey background (slate-100) on White Section
              <Card key={i} className="group bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-slate-900 dark:text-white mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <CardTitle className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed tracking-wide">
                  {feature.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION (Grey Background for Separation) */}
      <section id="how-it-works" className="w-full py-32 px-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20">
        <div className="max-w-6xl mx-auto text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide text-slate-900 dark:text-white">Get Answers in 3 Steps</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-slate-200 dark:bg-white/10 z-0"></div>

            {[
                { title: "Ask Your Query", desc: "Type or speak naturally. No legal jargon required." },
                { title: "AI Analysis", desc: "Our system cross-references thousands of Indian laws instantly." },
                { title: "Get Solution", desc: "Receive clear, actionable advice or a drafted document." }
            ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6">
                    <div className="h-20 w-20 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-700 flex items-center justify-center shadow-xl z-10 transition-transform hover:scale-110">
                        <span className="text-3xl font-bold text-slate-700 dark:text-slate-200">{i + 1}</span>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold tracking-wide text-slate-900 dark:text-white">{step.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xs text-base leading-relaxed tracking-wide mx-auto">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 5. FOOTER (White Background) */}
      <footer className="w-full py-16 px-4 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            
            {/* Left: Brand */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
                    <Scale className="h-6 w-6" />
                    <span>BharatJuris</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs tracking-wide">
                    Democratizing legal access through AI. <br/> Made with ❤️ in India.
                </p>
                <p className="text-xs text-slate-400 mt-4">© 2024 Bharat Juris.</p>
            </div>

            {/* Right: Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-medium tracking-wide">
                <div className="space-y-4">
                    <h4 className="text-slate-900 dark:text-white font-bold">Platform</h4>
                    <div className="flex flex-col gap-3 text-slate-500 dark:text-slate-400">
                        <Link href="/chat" className="hover:text-blue-600 dark:hover:text-white transition-colors">Nyaya Sahayak</Link>
                        <Link href="/documents" className="hover:text-blue-600 dark:hover:text-white transition-colors">Drafting</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-slate-900 dark:text-white font-bold">Legal</h4>
                    <div className="flex flex-col gap-3 text-slate-500 dark:text-slate-400">
                        <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-blue-600 dark:hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-slate-900 dark:text-white font-bold">Connect</h4>
                    <div className="flex gap-4 text-slate-500 dark:text-slate-400">
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Twitter className="h-5 w-5"/></Link>
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github className="h-5 w-5"/></Link>
                        <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Mail className="h-5 w-5"/></Link>
                    </div>
                </div>
            </div>
        </div>
      </footer>

    </div>
  );
}