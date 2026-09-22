"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profileData";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Responsive, accessible, and dynamic interfaces with modern styling",
    badge: "Client-Side",
    skills: [
      { name: "React.js", level: "Advanced", core: true },
      { name: "Next.js", level: "Advanced", core: true },
      { name: "Tailwind CSS", level: "Advanced", core: true },
      { name: "JavaScript (ES6+)", level: "Advanced", core: true },
      { name: "HTML5", level: "Proficient", core: false },
      { name: "CSS3", level: "Proficient", core: false }
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ff7a1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Robust RESTful APIs, database schema design, and asynchronous processing",
    badge: "Server & Data",
    skills: [
      { name: "Node.js", level: "Advanced", core: true },
      { name: "Express.js", level: "Advanced", core: true },
      { name: "MongoDB", level: "Advanced", core: true },
      { name: "RESTful APIs", level: "Advanced", core: true },
      { name: "FastAPI", level: "Proficient", core: true },
      { name: "JWT & OAuth 2.0", level: "Proficient", core: false }
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ffb59c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    id: "ai",
    title: "AI & Generative AI",
    description: "Orchestrating intelligent LLM workflows, RAG systems, and agent pipelines",
    badge: "Intelligence",
    skills: [
      { name: "Python", level: "Advanced", core: true },
      { name: "LangChain", level: "Proficient", core: true },
      { name: "RAG (Retrieval-Augmented Generation)", level: "Proficient", core: true },
      { name: "Generative AI", level: "Proficient", core: true },
      { name: "LLM APIs (Grok / OpenAI)", level: "Advanced", core: true },
      { name: "Prompt Engineering", level: "Advanced", core: false }
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "tools",
    title: "Tools & DevOps Workflow",
    description: "Version control, API testing, build optimization, and cloud deployments",
    badge: "Workflow & Cloud",
    skills: [
      { name: "Git", level: "Advanced", core: true },
      { name: "GitHub", level: "Advanced", core: true },
      { name: "Postman", level: "Advanced", core: true },
      { name: "Vite", level: "Proficient", core: false },
      { name: "Vercel / Netlify", level: "Proficient", core: false },
      { name: "Render", level: "Proficient", core: false }
    ],
    icon: (
      <svg className="h-6 w-6 text-[#ffb689]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCategories =
    activeFilter === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[#ff7a1a]">
              Technical Expertise
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
              Skills &amp; Technology Stack
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#a98a7d]">
              Categorized technologies and tools I utilize to engineer scalable full-stack
              products and intelligent GenAI workflows.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded border border-[#5a4136]/50 bg-[#16191f] p-1 backdrop-blur-md">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-[#ff6b00] text-[#0c0e12] font-bold shadow-sm"
                  : "text-[#a98a7d] hover:text-[#e2e2e8]"
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`rounded px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                  activeFilter === cat.id
                    ? "bg-[#ff6b00] text-[#0c0e12] font-bold shadow-sm"
                    : "text-[#a98a7d] hover:text-[#e2e2e8]"
                }`}
              >
                {cat.badge.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="group rounded border border-[#5a4136]/50 bg-[#16191f] p-6 transition-all duration-300 hover:border-[#ff6b00]/60 hover:bg-[#1e2024] shadow-lg shadow-black/40"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#5a4136]/30">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-[#5a4136]/60 bg-[#111317] group-hover:bg-[#ff6b00]/10 transition-colors">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#e2e2e8]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#a98a7d]">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="rounded border border-[#5a4136]/50 bg-[#1e2024] px-2.5 py-0.5 text-[11px] font-mono text-[#e2bfb0]">
                  {category.badge}
                </span>
              </div>

              {/* Skill Pills */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 rounded border px-3.5 py-1.5 text-xs font-mono font-medium transition-all ${
                      skill.core
                        ? "border-[#ff6b00]/40 bg-[#ff6b00]/10 text-[#ff7a1a] hover:border-[#ff6b00] hover:bg-[#ff6b00]/15"
                        : "border-[#5a4136]/40 bg-[#1e2024] text-[#e2e2e8] hover:border-[#a98a7d] hover:text-[#ffb693]"
                    }`}
                  >
                    {skill.core && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a1a]" />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages Footer Bar */}
        <div className="mt-8 rounded border border-[#5a4136]/50 bg-[#16191f] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase text-[#a98a7d]">
              Core Languages:
            </span>
            <div className="flex flex-wrap gap-2">
              {PROFILE_DATA.skills.languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded border border-[#5a4136]/50 bg-[#111317] px-2.5 py-0.5 text-xs font-mono text-[#e2bfb0]"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#a98a7d] text-center sm:text-right font-mono">
            Practicing daily algorithmic efficiency &amp; clean design patterns.
          </p>
        </div>
      </div>
    </section>
  );
}