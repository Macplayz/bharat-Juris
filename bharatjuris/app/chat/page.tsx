"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Mic, Paperclip, Bot, User, RefreshCcw, ArrowLeft, Scale } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial Data
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      content: "Namaste! I am Nyaya Sahayak, your AI Legal Assistant. \n\nI can help you understand Indian laws, draft agreements, or summarize court notices. How can I assist you today?"
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // 2. Simulate AI Response
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        role: "bot",
        content: "I am analyzing your query based on the Bharatiya Nyaya Sanhita (BNS). Please allow me a moment to fetch the relevant legal sections and case precedents."
      };
      setMessages((prev) => [...prev, botMsg]);
      setLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // Main Container - Matches Landing Page Theme
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-black font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      
      {/* 1. Header (Minimal & Clean) */}
      <header className="flex-none px-6 py-4 flex items-center justify-between bg-white/50 dark:bg-white/5 backdrop-blur-md border-b border-slate-200 dark:border-white/10 z-10">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-200 dark:hover:bg-white/10">
              <ArrowLeft className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
               <Scale className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-none">Nyaya Sahayak</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">AI Legal Assistant • BNS Trained</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Chat Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 md:p-8 space-y-8">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex max-w-[85%] md:max-w-[80%] gap-4 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                
                {/* Avatar */}
                <Avatar className="h-10 w-10 border border-slate-200 dark:border-white/10 shadow-sm">
                  {msg.role === "bot" ? (
                    <AvatarFallback className="bg-blue-600 text-white"><Bot className="h-5 w-5" /></AvatarFallback>
                  ) : (
                    <AvatarFallback className="bg-slate-200 text-slate-700 dark:bg-white/20 dark:text-white"><User className="h-5 w-5" /></AvatarFallback>
                  )}
                </Avatar>

                {/* Message Bubble - Themed to match Landing Page Buttons/Cards */}
                <div
                  className={`p-5 text-base leading-7 shadow-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black rounded-3xl rounded-tr-none" // User matches "Start" button
                      : "bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 rounded-3xl rounded-tl-none" // Bot matches "Cards"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          ))}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-start w-full">
               <div className="flex items-center gap-3 ml-14">
                  <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-blue-600 rounded-full animate-bounce"></div>
               </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 3. Input Area (Floating Glass Pill) */}
      <div className="p-6">
        <div className="max-w-3xl mx-auto relative flex items-end gap-3 p-2 bg-white dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2rem] shadow-2xl transition-all focus-within:ring-2 focus-within:ring-blue-500/20">
          
          {/* Tools Left */}
          <div className="flex items-center gap-1 pl-2 pb-1">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-white/10 rounded-full transition-colors">
                <Paperclip className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-white/10 rounded-full transition-colors">
                <Mic className="h-5 w-5" />
            </Button>
          </div>

          {/* Input Field */}
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your legal query here..."
            className="flex-1 min-h-[48px] max-h-32 py-3 bg-transparent border-0 focus-visible:ring-0 resize-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400 text-lg"
          />

          {/* Send Button */}
          <div className="pb-1 pr-1">
            <Button 
                size="icon" 
                onClick={handleSend} 
                disabled={!input.trim() || loading}
                className="h-10 w-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <p className="text-center text-xs font-medium text-slate-400 mt-4 tracking-wide">
          AI can make mistakes. Please verify important legal information.
        </p>
      </div>
    </div>
  );
}