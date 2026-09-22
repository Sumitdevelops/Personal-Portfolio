"use client";

import { PROFILE_DATA } from "@/data/profileData";

const PILLARS = [
  {
    title: "Full-Stack Web Development",
    description:
      "Designing responsive interfaces in React/Next.js paired with robust Node.js, Express, and FastAPI REST backends with normalized MongoDB schemas.",
    icon: (
      <svg
        className="h-6 w-6 text-[#ff7a1a]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    badge: "MERN & Next.js"
  },
  {
    title: "Artificial Intelligence & GenAI",
    description:
      "Integrating LLM APIs (Grok, OpenAI) and building Retrieval-Augmented Generation (RAG) pipelines with LangChain to provide grounded domain reasoning.",
    icon: (
      <svg
        className="h-6 w-6 text-[#ffb59c]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    badge: "RAG & LangChain"
  },
  {
    title: "Algorithmic Problem Solving",
    description:
      "Solved 100+ LeetCode algorithmic challenges, focusing on data structures, time complexity optimization, dynamic programming, and clean modular code.",
    icon: (
      <svg
        className="h-6 w-6 text-[#ff7a1a]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    badge: "100+ LeetCode"
  },
  {
    title: "Production Software Delivery",
    description:
      "Deploying full-stack applications with secure JWT/OAuth authentication, automated CI/CD workflows, and production monitoring on Netlify and Render.",
    icon: (
      <svg
        className="h-6 w-6 text-[#ffb689]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    badge: "Live Deployed"
  }
];

export default function About() {
  const { personal } = PROFILE_DATA;

  return (
    <section id="about" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[#ff7a1a]">
            About Me
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
            Engineering with curiosity and intent
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-[#a98a7d] leading-relaxed">
            I am a Computer Science undergraduate at{" "}
            <span className="text-[#e2e2e8] font-semibold">
              Visvesvaraya Technological University (9.20 CGPA)
            </span>{" "}
            with a deep focus on crafting practical full-stack software and
            implementing Generative AI applications. I enjoy tackling challenging
            system requirements—from designing normalized database schemas to
            orchestrating low-latency LLM agent workflows.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative flex flex-col justify-between rounded border border-[#5a4136]/50 bg-[#16191f] p-6 transition-all duration-300 hover:border-[#ff6b00]/60 hover:bg-[#1e2024] hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded border border-[#5a4136]/60 bg-[#111317] group-hover:border-[#ff6b00]/50 group-hover:bg-[#ff6b00]/10 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="rounded border border-[#5a4136]/50 bg-[#1e2024] px-2.5 py-0.5 text-[11px] font-mono font-medium text-[#e2bfb0]">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#e2e2e8] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a98a7d]">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Banner */}
        <div className="mt-12 rounded border border-[#5a4136]/50 bg-gradient-to-r from-[#1a1c20] via-[#16191f] to-[#1e2024] p-6 sm:p-8 backdrop-blur-md">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center text-center sm:text-left">
            <div>
              <p className="text-xs font-mono uppercase text-[#a98a7d] tracking-wider">
                Current Focus
              </p>
              <p className="mt-1 text-base font-semibold text-[#e2e2e8]">
                Next.js &amp; GenAI Architecture
              </p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[#a98a7d] tracking-wider">
                Academic Merit
              </p>
              <p className="mt-1 text-base font-semibold text-[#ff7a1a]">
                9.20 / 10.00 CGPA (3rd Year)
              </p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase text-[#a98a7d] tracking-wider">
                Location
              </p>
              <p className="mt-1 text-base font-semibold text-[#e2e2e8]">
                {personal.location}
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff7a1a] hover:text-[#ffb693] transition-colors"
              >
                <span>Explore My Work</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
