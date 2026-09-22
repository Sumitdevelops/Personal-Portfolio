"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profileData";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"code" | "ai">("code");
  const { personal } = PROFILE_DATA;

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-6 pt-24 pb-20 overflow-hidden bg-grid-mesh">
      {/* Industrial Cyber Ambient Glows matching Stitch */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#ff6b00]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#df731f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Stats Counter (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-[#1e2024] border border-[#ff6b00]/30 w-fit">
              <span className="h-2 w-2 rounded-full bg-[#ff7a1a] status-live-pulse"></span>
              <span className="font-mono text-xs text-[#e2bfb0] font-medium tracking-wide">
                Open to Full-Stack &amp; AI Engineering Roles | Bengaluru, IN
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="font-mono text-xs text-[#ff7a1a] font-semibold tracking-wider uppercase">
                Hi, I&apos;m {personal.name}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#e2e2e8] tracking-tight leading-[1.1]">
                Full-Stack &amp;{" "}
                <span className="bg-gradient-to-r from-[#ff6b00] via-[#ff7a1a] to-[#ffb59c] bg-clip-text text-transparent">
                  AI/GenAI
                </span>{" "}
                Developer.
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-[#a98a7d] max-w-2xl leading-relaxed">
              Crafting production-ready web applications, intelligent RAG pipelines, and
              scalable distributed backends. Combining rigorous Computer Science fundamentals
              (9.20 CGPA at VTU) with modern LLM &amp; GenAI orchestration.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded bg-[#ff6b00] text-[#0c0e12] font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 shadow-lg shadow-[#ff6b00]/30 hover:bg-[#ff7a1a] hover:shadow-[#ff6b00]/50 active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded bg-[#1e2024] border border-[#5a4136] hover:border-[#ff6b00] text-[#e2e2e8] font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all hover:bg-[#282a2e]"
              >
                <span>Contact Me</span>
                <svg className="h-4 w-4 text-[#ff7a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-10 w-10 items-center justify-center rounded border border-[#5a4136] bg-[#1a1c20] text-[#a98a7d] hover:border-[#ff6b00] hover:text-[#ff7a1a] transition-all"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-10 w-10 items-center justify-center rounded border border-[#5a4136] bg-[#1a1c20] text-[#a98a7d] hover:border-[#ff6b00] hover:text-[#ff7a1a] transition-all"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Stats Counter Bar matching Stitch Industrial Orange */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-[#5a4136]/50">
              <div className="bg-[#16191f] p-4 rounded border border-[#5a4136]/60 hover:border-[#ff6b00]/50 transition-colors">
                <span className="block font-mono text-2xl md:text-3xl text-[#ff7a1a] font-bold">9.20</span>
                <span className="block font-mono text-xs text-[#a98a7d] mt-1">CGPA VTU CSE</span>
              </div>
              <div className="bg-[#16191f] p-4 rounded border border-[#5a4136]/60 hover:border-[#ff6b00]/50 transition-colors">
                <span className="block font-mono text-2xl md:text-3xl text-[#ffb59c] font-bold">100+</span>
                <span className="block font-mono text-xs text-[#a98a7d] mt-1">LeetCode Solved</span>
              </div>
              <div className="bg-[#16191f] p-4 rounded border border-[#5a4136]/60 hover:border-[#ff6b00]/50 transition-colors">
                <span className="block font-mono text-2xl md:text-3xl text-[#ff6b00] font-bold">3+</span>
                <span className="block font-mono text-xs text-[#a98a7d] mt-1">Production Apps</span>
              </div>
              <div className="bg-[#16191f] p-4 rounded border border-[#5a4136]/60 hover:border-[#ff6b00]/50 transition-colors">
                <span className="block font-mono text-2xl md:text-3xl text-[#ffdbcc] font-bold">21+</span>
                <span className="block font-mono text-xs text-[#a98a7d] mt-1">Active Users</span>
              </div>
            </div>
          </div>

          {/* Right Column: Industrial Terminal Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded border border-[#5a4136] bg-[#0c0e12]/95 backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden transition-all duration-300 hover:border-[#ff6b00]/70 hover:shadow-[#ff6b00]/10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-[#5a4136]/50 bg-[#16191f] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff7a1a]/80" />
                  <span className="ml-2 font-mono text-xs text-[#a98a7d]">
                    sumit@dev:~/portfolio
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 rounded bg-[#1e2024] p-0.5 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`rounded px-2.5 py-0.5 transition-colors ${
                      activeTab === "code"
                        ? "bg-[#ff6b00] text-[#0c0e12] font-bold"
                        : "text-[#a98a7d] hover:text-white"
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("ai")}
                    className={`rounded px-2.5 py-0.5 transition-colors ${
                      activeTab === "ai"
                        ? "bg-[#ff7a1a] text-[#0c0e12] font-bold"
                        : "text-[#a98a7d] hover:text-white"
                    }`}
                  >
                    agent.py
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#e2e2e8]">
                {activeTab === "code" ? (
                  <div className="space-y-1">
                    <p className="text-[#a98a7d]">// Developer Profile Spec</p>
                    <p>
                      <span className="text-[#ffb59c]">const</span>{" "}
                      <span className="text-[#ff7a1a]">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-[#ffb689]">name</span>:{" "}
                      <span className="text-[#ffdbcc]">&quot;Sumit Srivastava&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#ffb689]">degree</span>:{" "}
                      <span className="text-[#ffdbcc]">&quot;B.E. CSE @ VTU (9.20 CGPA)&quot;</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#ffb689]">stack</span>: [
                    </p>
                    <p className="pl-8 text-[#ff7a1a]">
                      &quot;Next.js&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;FastAPI&quot;, &quot;MongoDB&quot;
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-[#ffb689]">aiFocus</span>: [
                    </p>
                    <p className="pl-8 text-[#ffb59c]">
                      &quot;LangChain&quot;, &quot;RAG&quot;, &quot;Grok API&quot;, &quot;Generative AI&quot;
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      <span className="text-[#ffb689]">dsaSolved</span>:{" "}
                      <span className="text-[#ff7a1a]">100</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#ffb689]">status</span>:{" "}
                      <span className="text-[#ffdbcc]">&quot;Ready to Build &amp; Deploy&quot;</span>
                    </p>
                    <p>&#125;;</p>
                    <div className="pt-2 flex items-center gap-1 text-[#a98a7d]">
                      <span className="text-[#ff7a1a]">&gt;</span> ready for production
                      <span className="inline-block h-3.5 w-1.5 bg-[#ff6b00] animate-cursor" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-[#a98a7d]"># LangChain RAG &amp; Full-Stack Pipeline</p>
                    <p>
                      <span className="text-[#ffb59c]">from</span>{" "}
                      <span className="text-[#ff7a1a]">langchain_community</span>{" "}
                      <span className="text-[#ffb59c]">import</span> vectorstores
                    </p>
                    <p>
                      <span className="text-[#ffb59c]">from</span>{" "}
                      <span className="text-[#ff7a1a]">fastapi</span>{" "}
                      <span className="text-[#ffb59c]">import</span> FastAPI
                    </p>
                    <p className="pt-1">
                      <span className="text-[#ffb59c]">class</span>{" "}
                      <span className="text-[#ff7a1a]">AIEngineer</span>:
                    </p>
                    <p className="pl-4 text-[#ffb689]">
                      def __init__(self):
                    </p>
                    <p className="pl-8 text-[#e2e2e8]">
                      self.frameworks = [<span className="text-[#ffdbcc]">&quot;MERN&quot;</span>, <span className="text-[#ffdbcc]">&quot;FastAPI&quot;</span>, <span className="text-[#ffdbcc]">&quot;RAG&quot;</span>]
                    </p>
                    <p className="pl-8 text-[#e2e2e8]">
                      self.deployed_apps = [<span className="text-[#ffdbcc]">&quot;ApexMoney&quot;</span>, <span className="text-[#ffdbcc]">&quot;GlucoWave&quot;</span>]
                    </p>
                    <p className="pl-4 text-[#ffb689]">
                      def build_solution(self, problem):
                    </p>
                    <p className="pl-8 text-[#ff7a1a]">
                      return &quot;High-performance, AI-augmented product&quot;
                    </p>
                    <div className="pt-2 flex items-center gap-1 text-[#a98a7d]">
                      <span className="text-[#ff7a1a]">&gt;</span> python -m portfolio.serve
                      <span className="inline-block h-3.5 w-1.5 bg-[#ff6b00] animate-cursor" />
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="border-t border-[#5a4136]/50 bg-[#16191f]/60 px-5 py-3 flex items-center justify-between text-[11px] text-[#a98a7d]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff7a1a]"></span>
                  <span>Industrial Terminal</span>
                </div>
                <a
                  href="#matcher"
                  className="text-[#ff7a1a] hover:text-[#ffb693] transition-colors font-mono"
                >
                  Test AI Job Matcher →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}