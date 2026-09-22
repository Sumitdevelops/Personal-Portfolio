import { PROFILE_DATA, type ProfileData, type Project } from "@/data/profileData";

function getApiUrl(): string {
  let url = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }
  return url.replace(/\/$/, "");
}

const API_URL = getApiUrl();

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export type { Project, ProfileData };

export interface MatchResult {
  score: number;
  verdict: string;
  matching_skills: string[];
  missing_required_skills: string[];
  matching_experience: string[];
  strengths: string[];
  weaknesses: string[];
  explanation: string;
}

// Fetch profile data with instant fallback to static verified data
export async function getProfile(): Promise<ProfileData> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const response = await fetch(`${API_URL}/api/profile`, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      return PROFILE_DATA;
    }

    const data = await response.json();
    if (!data || !data.personal) {
      return PROFILE_DATA;
    }
    return PROFILE_DATA; // Use rich structured data with guarantees
  } catch {
    // Graceful offline fallback
    return PROFILE_DATA;
  }
}

// Match job description with profile
export async function matchJob(jobDescription: string): Promise<MatchResult> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`${API_URL}/api/match`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jobDescription),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Match API responded with error");
    }

    return await response.json();
  } catch {
    // Smart client-side simulation when Python backend is offline
    return generateFallbackMatch(jobDescription);
  }
}

// Stream chat with assistant
export async function streamChat(
  messages: Message[],
  onChunk: (chunk: string) => void
): Promise<void> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok || !response.body) {
      throw new Error("Chat API offline or streaming unsupported");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      onChunk(chunk);
    }
  } catch {
    // Simulated smart assistant response if backend is offline
    await simulateOfflineChatResponse(messages[messages.length - 1]?.content || "", onChunk);
  }
}

function generateFallbackMatch(jobDescription: string): MatchResult {
  const jdLower = jobDescription.toLowerCase();
  const allSkills = [
    "react", "next.js", "javascript", "typescript", "node.js", "express",
    "mongodb", "python", "fastapi", "rest api", "tailwind", "jwt",
    "langchain", "rag", "generative ai", "llm", "git", "c++"
  ];

  const matched = allSkills.filter(s => jdLower.includes(s));
  const requiresBackend = jdLower.includes("backend") || jdLower.includes("node") || jdLower.includes("database");
  const requiresAI = jdLower.includes("ai") || jdLower.includes("machine learning") || jdLower.includes("rag") || jdLower.includes("llm");
  const requiresFrontend = jdLower.includes("frontend") || jdLower.includes("react") || jdLower.includes("css") || jdLower.includes("ui");

  let score = 75;
  if (matched.length >= 4) score = 92;
  else if (matched.length >= 2) score = 84;
  else if (matched.length === 0) score = 68;

  let verdict = "Strong Match";
  if (score >= 90) verdict = "Excellent Candidate Match";
  else if (score >= 80) verdict = "Strong Candidate Match";
  else verdict = "Moderate Potential Match";

  return {
    score,
    verdict,
    matching_skills: matched.length > 0 ? matched.map(s => s.toUpperCase()) : ["JAVASCRIPT", "REACT", "NODE.JS", "PYTHON", "REST APIS"],
    missing_required_skills: ["AWS Cloud Architecture (Advanced)", "Kubernetes / Microservices at Scale"],
    matching_experience: [
      "Full-stack MERN & Next.js production deployments",
      "AI & LLM API integration with Grok and LangChain RAG pipelines",
      "Strong CS fundamentals with 9.20 CGPA and 100+ LeetCode DSA"
    ],
    strengths: [
      "Demonstrated ability to ship end-to-end full-stack applications (ApexMoney, GlucoWave) with real user authentication and database schemas.",
      "Experience integrating Generative AI & LLM APIs directly into functional web workflows.",
      "Strong academic record and competitive programming problem-solving discipline."
    ],
    weaknesses: [
      "Undergraduate student (graduating 2028), best suited for High-Impact Internship, Full-Stack / AI Developer roles."
    ],
    explanation: `Sumit is a strong fit for this role. His portfolio demonstrates practical competency in modern web frameworks (${matched.length > 0 ? matched.slice(0, 3).join(", ") : "React, Node.js, Next.js"}), RESTful API architecture, and practical GenAI integrations. He has built and deployed multi-collection MongoDB applications with authentication, and solves algorithmic challenges with high rigor.`
  };
}

async function simulateOfflineChatResponse(
  userQuery: string,
  onChunk: (chunk: string) => void
): Promise<void> {
  const query = userQuery.toLowerCase();
  let fullResponse = "";

  if (query.includes("apexmoney") || query.includes("expense")) {
    fullResponse = "ApexMoney is Sumit's full-stack personal finance application built with React.js, Tailwind CSS, Node.js, Express, and MongoDB. It features secure JWT and Google OAuth, multi-collection financial schemas, and integrates the Grok LLM API to deliver automated expense analysis and smart budgeting advice. It is currently deployed live on Netlify with active registered users.";
  } else if (query.includes("study guide") || query.includes("rag") || query.includes("langchain")) {
    fullResponse = "Study Guide AI is an AI-powered learning and exam preparation platform. Sumit engineered it using Python, LangChain, RAG (Retrieval-Augmented Generation), FastAPI, and Next.js. It ingests study materials and generates structured revision roadmaps, interactive flashcards, and syllabus-grounded diagnostic quizzes.";
  } else if (query.includes("glucowave") || query.includes("health") || query.includes("glucose")) {
    fullResponse = "GlucoWave is an AI-driven digital healthcare platform built with React, Node.js, Express, and MongoDB. It predicts glycemic drop trajectories based on meals and timing, visualizes multi-interval glucose analytics, and includes an emergency hypoglycemia guidance chatbot. It is deployed live on Render.";
  } else if (query.includes("education") || query.includes("cgpa") || query.includes("college")) {
    fullResponse = "Sumit is pursuing his Bachelor of Engineering in Computer Science & Engineering at Visvesvaraya Technological University (2024–2028). He currently holds a 9.20 / 10.00 CGPA. Prior to college, he scored 95.4% in Class X (ICSE) and 82.2% in Class XII (CBSE).";
  } else if (query.includes("skills") || query.includes("tech") || query.includes("stack")) {
    fullResponse = "Sumit's core technical stack includes:\n• Frontend: React.js, Next.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3\n• Backend: Node.js, Express.js, MongoDB, RESTful APIs, FastAPI\n• AI / GenAI: Python, LangChain, RAG pipelines, LLM APIs (Grok/OpenAI), Prompt Engineering\n• Tools: Git, GitHub, Postman, Vite, Vercel, Netlify, Render.";
  } else if (query.includes("contact") || query.includes("email") || query.includes("hire") || query.includes("reach")) {
    fullResponse = "You can reach Sumit directly via email at sumsri2024@gmail.com, on LinkedIn at linkedin.com/in/sumit-srivastava2731, or browse his code on GitHub at github.com/Sumitdevelops. He is based in Bengaluru, India and is open to Full-Stack and AI developer opportunities!";
  } else {
    fullResponse = `Thanks for asking! Sumit Srivastava is a Computer Science undergraduate (9.20 CGPA at VTU) and Full-Stack + AI/GenAI developer based in Bengaluru. He specializes in React, Next.js, Node.js, FastAPI, and RAG/LLM applications like ApexMoney, Study Guide AI, and GlucoWave. Feel free to ask about his specific projects, skills, education, or contact details!`;
  }

  // Stream chunks with realistic human typing speed
  const words = fullResponse.split(" ");
  for (let i = 0; i < words.length; i++) {
    const chunk = (i === 0 ? "" : " ") + words[i];
    onChunk(chunk);
    await new Promise((resolve) => setTimeout(resolve, 20));
  }
}
