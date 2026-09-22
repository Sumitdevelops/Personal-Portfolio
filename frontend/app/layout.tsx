import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumit Srivastava | Full-Stack Developer & AI/GenAI Enthusiast",
  description:
    "Portfolio of Sumit Srivastava — Computer Science undergraduate and Full-Stack + AI/GenAI developer building production-grade web applications, RAG pipelines, and intelligent AI solutions.",
  keywords: [
    "Sumit Srivastava",
    "Full Stack Developer",
    "AI Developer",
    "GenAI",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "LangChain",
    "RAG",
    "ApexMoney",
    "GlucoWave",
    "Study Guide AI",
    "Bengaluru"
  ],
  authors: [{ name: "Sumit Srivastava" }],
  creator: "Sumit Srivastava",
  openGraph: {
    title: "Sumit Srivastava | Full-Stack Developer & AI/GenAI Enthusiast",
    description:
      "Crafting production-grade full-stack web applications and AI-powered products using React, Node.js, FastAPI, and LLMs.",
    type: "website",
    locale: "en_US"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#060913] text-slate-100 antialiased font-sans selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}