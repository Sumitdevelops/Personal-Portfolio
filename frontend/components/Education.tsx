"use client";

import { PROFILE_DATA } from "@/data/profileData";

export default function Education() {
  const { education, achievements } = PROFILE_DATA;

  return (
    <section id="education" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[#ff7a1a]">
            Background &amp; Milestones
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
            Education &amp; Achievements
          </h2>
          <p className="mt-3 max-w-xl text-base text-[#a98a7d]">
            Academic credentials, competitive programming achievements, and engineering
            hackathon milestones.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="flex items-center gap-2.5 text-xl font-bold text-[#e2e2e8] tracking-tight">
              <svg
                className="h-5 w-5 text-[#ff7a1a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <span>Academic Pathway</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-[#5a4136]/50">
              {education.map((item, index) => (
                <div key={item.degree} className="relative group">
                  {/* Timeline Node */}
                  <span
                    className={`absolute -left-[27px] top-1.5 flex h-3.5 w-3.5 rounded-full border-2 ${
                      index === 0
                        ? "border-[#ff6b00] bg-[#ff7a1a] shadow-md shadow-[#ff6b00]/50"
                        : "border-[#5a4136] bg-[#0c0e12]"
                    }`}
                  />

                  <div className="rounded border border-[#5a4136]/60 bg-[#16191f] p-6 transition-all duration-300 hover:border-[#ff6b00]/60 hover:bg-[#1e2024]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#ff7a1a]">
                        {item.duration}
                      </span>
                      <span className="rounded border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-2.5 py-0.5 text-xs font-mono font-semibold text-[#ffb59c]">
                        {item.score} {item.scoreType}
                      </span>
                    </div>

                    <h4 className="mt-2 text-lg font-bold text-[#e2e2e8] tracking-tight">
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium text-[#a98a7d]">
                      {item.institution}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <ul className="mt-3 space-y-1.5 text-xs text-[#a98a7d]">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5">
                            <span className="text-[#ff7a1a] mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements & Honors (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="flex items-center gap-2.5 text-xl font-bold text-[#e2e2e8] tracking-tight">
              <svg
                className="h-5 w-5 text-[#ffb59c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span>Key Honors &amp; DSA</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="rounded border border-[#5a4136]/60 bg-[#16191f] p-6 transition-all duration-300 hover:border-[#ff6b00]/60 hover:bg-[#1e2024]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded border border-[#ff6b00]/40 bg-[#ff6b00]/10 px-2.5 py-0.5 text-xs font-mono font-medium text-[#ff7a1a]">
                      {achievement.badge}
                    </span>
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-[#ff6b00]/10 text-[#ff7a1a]">
                      {achievement.iconType === "code" ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-[#e2e2e8]">
                    {achievement.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#a98a7d]">
                    {achievement.description}
                  </p>
                </div>
              ))}

              {/* LeetCode Profile Highlight Box */}
              <div className="rounded border border-[#ff6b00]/30 bg-gradient-to-br from-[#1e2024] to-[#111317] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ff7a1a] animate-pulse"></span>
                    <span className="text-xs font-mono font-semibold uppercase text-[#ff7a1a]">
                      Problem Solving Discipline
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#a98a7d]">100+ Solved</span>
                </div>
                <p className="mt-2 text-xs text-[#a98a7d] leading-relaxed font-mono">
                  Regularly solving complex data structure challenges in C++ and Python to write
                  optimal algorithms with clean memory and time complexity bounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
