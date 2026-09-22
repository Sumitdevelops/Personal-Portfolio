"use client";

import { useState } from "react";
import { matchJob, type MatchResult } from "@/services/api";

const PRESET_JDS = [
  {
    label: "Full-Stack MERN",
    text: `Looking for a Full-Stack Web Developer proficient in React.js, Tailwind CSS, Node.js, Express, and MongoDB. Must have experience developing RESTful APIs, implementing JWT authentication, and deploying applications on cloud platforms. Familiarity with TypeScript and Next.js is a plus.`
  },
  {
    label: "AI / GenAI Engineer",
    text: `Seeking an AI Software Engineer with strong Python fundamentals, experience with LangChain, Retrieval-Augmented Generation (RAG), and integrating LLM APIs (OpenAI/Grok) into web applications. Experience with FastAPI and vector stores is desirable.`
  },
  {
    label: "Frontend React Developer",
    text: `We are hiring a Frontend Developer experienced in React, Next.js, responsive web design, Tailwind CSS, component state management, and connecting frontend clients to backend REST APIs.`
  }
];

export default function JobMatcher() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState<MatchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleMatch() {
    if (!jobDescription.trim()) return;

    setLoading(true);
    setError("");

    try {
      const matchResult = await matchJob(jobDescription);
      setResult(matchResult);
    } catch {
      setError("Unable to process the job description. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function loadPreset(text: string) {
    setJobDescription(text);
    setError("");
  }

  return (
    <section id="matcher" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-3 py-1 text-xs font-mono text-[#ff7a1a] mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a1a]"></span>
            AI Recruiter Suite
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
            AI Job Matcher &amp; Profile Analyzer
          </h2>
          <p className="mt-3 max-w-2xl text-base text-[#a98a7d]">
            Paste any job description or click a sample role below. The AI analyzer compares
            the requirements directly against my verified skills, projects, and coursework.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Input and Presets (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Quick Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#a98a7d]">Try sample JD:</span>
              {PRESET_JDS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => loadPreset(preset.text)}
                  className="rounded border border-[#5a4136]/50 bg-[#16191f] px-2.5 py-1 text-xs font-mono font-medium text-[#e2bfb0] hover:border-[#ff6b00]/60 hover:bg-[#ff6b00]/10 hover:text-[#ff7a1a] transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Job Description Textarea */}
            <div className="relative">
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description or role requirements here..."
                rows={11}
                className="w-full resize-none rounded border border-[#5a4136]/60 bg-[#16191f] p-5 text-sm font-mono leading-relaxed text-[#e2e2e8] placeholder:text-[#a98a7d]/60 outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/30 shadow-xl shadow-black/40"
              />
            </div>

            {/* Action Button */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleMatch}
                disabled={loading || !jobDescription.trim()}
                className="inline-flex items-center gap-2 rounded bg-[#ff6b00] px-6 py-3.5 text-xs font-mono uppercase tracking-wider font-bold text-[#0c0e12] shadow-lg shadow-[#ff6b00]/25 transition-all hover:bg-[#ff7a1a] hover:shadow-[#ff6b00]/40 disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin text-[#0c0e12]"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Analyzing Candidate Fit...</span>
                  </>
                ) : (
                  <>
                    <span>Run Match Analysis</span>
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </>
                )}
              </button>

              {jobDescription && (
                <button
                  onClick={() => {
                    setJobDescription("");
                    setResult(null);
                  }}
                  className="text-xs font-mono text-[#a98a7d] hover:text-[#e2e2e8] transition-colors"
                >
                  Clear Input
                </button>
              )}
            </div>

            {error && (
              <p className="text-xs font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded p-3 font-mono">
                {error}
              </p>
            )}
          </div>

          {/* Right Column: Match Analysis Results Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[380px] rounded border border-[#5a4136]/60 bg-[#16191f] p-6 shadow-xl shadow-black/40 flex flex-col justify-between">
              {!result && !loading && (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center text-[#a98a7d]">
                  <div className="flex h-14 w-14 items-center justify-center rounded border border-[#5a4136]/40 bg-[#111317] text-[#ff7a1a] mb-4">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-[#e2e2e8]">
                    Awaiting Job Description
                  </h4>
                  <p className="mt-1 max-w-sm text-xs text-[#a98a7d] font-mono">
                    Paste a role requirement or select a sample JD on the left to see
                    calculated fit score, matching skills, and strengths.
                  </p>
                </div>
              )}

              {loading && (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center text-[#a98a7d] space-y-4">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7a1a] opacity-20"></span>
                    <span className="relative inline-flex rounded-full h-8 w-8 bg-[#ff6b00]"></span>
                  </div>
                  <p className="text-sm font-medium text-[#e2e2e8] font-mono">
                    Evaluating candidate match &amp; skillset...
                  </p>
                </div>
              )}

              {result && !loading && (
                <div className="space-y-6">
                  {/* Score & Verdict Banner */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#5a4136]/40">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#a98a7d]">
                        Match Score
                      </span>
                      <div className="mt-1 flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-[#ff7a1a] font-mono">
                          {result.score}
                        </span>
                        <span className="font-mono text-sm text-[#a98a7d]">/100</span>
                      </div>
                    </div>

                    <span className="rounded border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-[#ff7a1a]">
                      {result.verdict}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-[#e2e2e8] leading-relaxed">
                    {result.explanation}
                  </p>

                  {/* Matching Skills */}
                  {result.matching_skills && result.matching_skills.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#ffb59c]">
                        ✓ Matching Skillsets
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {result.matching_skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-2.5 py-1 text-xs font-mono font-medium text-[#ff7a1a]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strengths */}
                  {result.strengths && result.strengths.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-[#5a4136]/30">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#a98a7d]">
                        Candidate Strengths:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#a98a7d]">
                        {result.strengths.map((str, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#ff7a1a] mt-0.5">•</span>
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}