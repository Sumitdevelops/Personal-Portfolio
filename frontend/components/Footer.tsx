"use client";

import { PROFILE_DATA } from "@/data/profileData";

export default function Footer() {
  const { personal } = PROFILE_DATA;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-[#5a4136]/50 bg-[#0a0c10] px-6 py-12 text-[#a98a7d]">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-bold text-[#e2e2e8]">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff7a1a] font-mono text-xs">
                &lt;/&gt;
              </span>
              <span className="font-mono">
                {personal.name}
              </span>
            </div>
            <p className="max-w-md text-xs text-[#a98a7d] font-mono">
              Full-Stack Web Developer &amp; AI/GenAI Enthusiast. Crafting production-ready
              software, intelligent RAG pipelines, and accessible user experiences.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-medium text-[#e2bfb0]">
            <a href="#about" className="hover:text-[#ff7a1a] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#ff7a1a] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#ff7a1a] transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-[#ff7a1a] transition-colors">
              Education
            </a>
            <a href="#matcher" className="hover:text-[#ff7a1a] transition-colors">
              AI Tools
            </a>
            <a href="#contact" className="hover:text-[#ff7a1a] transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded border border-[#5a4136] bg-[#16191f] text-[#a98a7d] hover:border-[#ff6b00] hover:text-[#ff7a1a] transition-all"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#5a4136]/30 pt-8 text-xs font-mono text-[#a98a7d]">
          <p>© 2026 {personal.name}. Built with Next.js, React &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff7a1a] transition-colors"
            >
              GitHub
            </a>
            <span className="text-white/20">•</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff7a1a] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/20">•</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-[#ff7a1a] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
