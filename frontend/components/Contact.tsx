"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profileData";

export default function Contact() {
  const { personal } = PROFILE_DATA;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[#ff7a1a]">
            Get In Touch
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#a98a7d]">
            Whether you are looking to hire a Full-Stack or AI engineering intern, discuss a project,
            or explore collaborative opportunities, I would love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status Card */}
            <div className="rounded border border-[#ff6b00]/30 bg-[#16191f] p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff7a1a] status-live-pulse"></span>
                <h3 className="text-base font-semibold text-[#ffb693]">
                  Open for Opportunities
                </h3>
              </div>
              <p className="mt-2 text-xs text-[#a98a7d] leading-relaxed font-mono">
                Currently open for software engineering internships, Full-Stack developer roles,
                and GenAI engineering collaborations.
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="rounded border border-[#5a4136]/60 bg-[#16191f] p-6 transition-colors hover:border-[#ff6b00]/50">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#a98a7d]">
                    Direct Email
                  </span>
                  <p className="mt-1 font-mono text-sm font-semibold text-[#e2e2e8]">
                    {personal.email}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded border border-[#5a4136] bg-[#111317] px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#e2bfb0] hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 hover:text-[#ff7a1a] transition-all"
                >
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Social Connects Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded border border-[#5a4136]/60 bg-[#16191f] p-4 transition-all hover:border-[#ff6b00]/60 hover:bg-[#1e2024] group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#111317] text-[#a98a7d] group-hover:text-[#ff7a1a]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#a98a7d]">GitHub</p>
                  <p className="text-sm font-semibold text-[#e2e2e8]">/Sumitdevelops</p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded border border-[#5a4136]/60 bg-[#16191f] p-4 transition-all hover:border-[#ff6b00]/60 hover:bg-[#1e2024] group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#111317] text-[#a98a7d] group-hover:text-[#ff7a1a]">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#a98a7d]">LinkedIn</p>
                  <p className="text-sm font-semibold text-[#e2e2e8]">Sumit Srivastava</p>
                </div>
              </a>
            </div>

            {/* Location Card */}
            <div className="flex items-center gap-3 rounded border border-[#5a4136]/60 bg-[#16191f] p-4 text-xs font-mono text-[#a98a7d]">
              <svg
                className="h-5 w-5 text-[#ff7a1a] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Right Column: Clean Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded border border-[#5a4136] bg-[#16191f] p-8 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-[#e2e2e8] tracking-tight">
                Send a Message
              </h3>
              <p className="mt-1 text-xs text-[#a98a7d]">
                Fill out the form below or write directly via email.
              </p>

              {submitted ? (
                <div className="mt-8 rounded border border-[#ff6b00]/30 bg-[#ff6b00]/10 p-8 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b00]/20 text-[#ff7a1a]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-[#e2e2e8]">Message Received!</h4>
                  <p className="text-xs text-[#a98a7d] max-w-sm mx-auto">
                    Thank you for reaching out, {formState.name}. You can also email me directly at{" "}
                    <span className="font-mono text-[#ff7a1a]">{personal.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 text-xs font-mono text-[#a98a7d] hover:text-[#ff7a1a] underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-mono text-xs">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-[#a98a7d]">
                        Your Name <span className="text-[#ff6b00]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Johnson"
                        className="w-full rounded border border-[#5a4136]/50 bg-[#111317] px-4 py-3 text-sm text-white placeholder:text-[#a98a7d]/40 outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/30"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[#a98a7d]">
                        Email Address <span className="text-[#ff6b00]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full rounded border border-[#5a4136]/50 bg-[#111317] px-4 py-3 text-sm text-white placeholder:text-[#a98a7d]/40 outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#a98a7d]">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Internship / Role Inquiry / Project Discussion"
                      className="w-full rounded border border-[#5a4136]/50 bg-[#111317] px-4 py-3 text-sm text-white placeholder:text-[#a98a7d]/40 outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#a98a7d]">
                      Message <span className="text-[#ff6b00]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hi Sumit, we reviewed your projects and would like to discuss..."
                      className="w-full resize-none rounded border border-[#5a4136]/50 bg-[#111317] p-4 text-sm text-white placeholder:text-[#a98a7d]/40 outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded bg-[#ff6b00] py-3.5 text-xs font-mono uppercase tracking-wider font-bold text-[#0c0e12] shadow-lg shadow-[#ff6b00]/25 transition-all hover:bg-[#ff7a1a] active:scale-[0.99]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
