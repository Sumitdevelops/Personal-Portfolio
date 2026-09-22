"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "AI Tools", href: "#matcher" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#5a4136]/50 bg-[#111317]/95 shadow-xl shadow-black/60 backdrop-blur-xl py-3"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Brand Logo matching Stitch Orange */}
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-base font-bold tracking-tight text-[#ff7a1a] hover:text-[#ffb693] transition-colors"
        >
          <span>&lt;Sumit.dev&gt;</span>
          <span className="inline-block h-2 w-2 rounded-full bg-[#ff6b00] animate-ping opacity-85"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-xs tracking-wider uppercase font-semibold transition-all ${
                  isActive
                    ? "text-[#ff7a1a] border-b-2 border-[#ff6b00] pb-1"
                    : "text-[#a98a7d] hover:text-[#ffb693]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Availability Badge & Primary CTA */}
        <div className="flex items-center gap-4">
          {/* Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1c20] border border-[#ff6b00]/40">
            <span className="h-2 w-2 rounded-full bg-[#ff6b00] status-live-pulse"></span>
            <span className="font-mono text-[11px] text-[#e2bfb0] uppercase tracking-wider font-semibold">
              Available for hire
            </span>
          </div>

          {/* Primary CTA in Cyber Orange */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded bg-[#ff6b00] text-[#0c0e12] font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-[#ff6b00]/30 hover:bg-[#ff7a1a] hover:shadow-[#ff6b00]/50 active:scale-95 transition-all duration-150"
          >
            <span>Get in Touch</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded border border-[#5a4136] bg-[#1e2024] text-[#e2bfb0] hover:text-white md:hidden"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#5a4136]/50 bg-[#111317]/98 px-6 pt-4 pb-6 backdrop-blur-2xl">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded px-3 py-2 text-[#e2e2e8] hover:bg-[#1e2024] hover:text-[#ff7a1a] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#5a4136]/40">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded bg-[#ff6b00] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0c0e12]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}