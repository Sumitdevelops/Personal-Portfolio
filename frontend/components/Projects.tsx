"use client";

import { useState } from "react";
import { PROFILE_DATA, type Project } from "@/data/profileData";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const { projects } = PROFILE_DATA;

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) =>
          filter === "ai"
            ? p.category.includes("AI")
            : p.category.includes("Full-Stack")
        );

  return (
    <section id="projects" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[#ff7a1a]">
              Featured Work
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
              Production Projects &amp; AI Systems
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#a98a7d]">
              Explore deployed full-stack web applications, AI/LLM integrations, and
              healthcare analytics platforms built from scratch.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 rounded border border-[#5a4136]/50 bg-[#16191f] p-1 backdrop-blur-md">
            <button
              onClick={() => setFilter("all")}
              className={`rounded px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                filter === "all"
                  ? "bg-[#ff6b00] text-[#0c0e12] font-bold shadow-sm"
                  : "text-[#a98a7d] hover:text-[#e2e2e8]"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`rounded px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                filter === "ai"
                  ? "bg-[#ff6b00] text-[#0c0e12] font-bold shadow-sm"
                  : "text-[#a98a7d] hover:text-[#e2e2e8]"
              }`}
            >
              AI &amp; GenAI
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`rounded px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                filter === "fullstack"
                  ? "bg-[#ff6b00] text-[#0c0e12] font-bold shadow-sm"
                  : "text-[#a98a7d] hover:text-[#e2e2e8]"
              }`}
            >
              Full-Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded border border-[#5a4136]/60 bg-[#16191f] backdrop-blur-xl transition-all duration-300 hover:border-[#ff6b00]/70 hover:bg-[#1e2024] hover:-translate-y-1.5 shadow-xl shadow-black/50"
            >
              {/* Card Top Preview Graphic Header */}
              <div className="relative border-b border-[#5a4136]/40 bg-gradient-to-br from-[#1e2024] to-[#111317] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-3 py-0.5 text-xs font-mono font-medium text-[#ff7a1a]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#a98a7d] font-mono text-xs">
                    <span className="h-2 w-2 rounded-full bg-[#ff7a1a]"></span>
                    <span>Production</span>
                  </div>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#e2e2e8] tracking-tight group-hover:text-[#ffb693] transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#a98a7d]">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-[#a98a7d] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2 border-t border-[#5a4136]/30">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#e2bfb0]">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#a98a7d] leading-relaxed">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 flex h-1.5 w-1.5 rounded-full bg-[#ff7a1a] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Tags & Action Buttons */}
                <div className="space-y-5 pt-4 border-t border-[#5a4136]/30">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[#5a4136]/40 bg-[#111317] px-2 py-0.5 text-[11px] font-mono text-[#e2bfb0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded bg-[#ff6b00] px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold text-[#0c0e12] shadow-md shadow-[#ff6b00]/20 transition-all hover:bg-[#ff7a1a] hover:shadow-[#ff6b00]/40 active:scale-[0.98]"
                      >
                        <span>Live Demo</span>
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}

                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded border border-[#5a4136] bg-[#1e2024] px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-[#e2e2e8] transition-all hover:border-[#ff6b00] hover:text-[#ff7a1a] active:scale-[0.98]"
                      >
                        <svg
                          className="h-3.5 w-3.5 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}