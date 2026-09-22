"use client";

import { useEffect, useRef, useState } from "react";
import { streamChat, type Message } from "@/services/api";

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hello! I'm Sumit's AI Portfolio Assistant. You can ask me anything about his technical stack, projects (ApexMoney, Study Guide AI, GlucoWave), education at VTU, DSA achievements, or availability for internships and developer roles."
};

const SUGGESTED_PROMPTS = [
  "What is Sumit's tech stack?",
  "Tell me about ApexMoney",
  "What are his GenAI / RAG projects?",
  "What is his education & CGPA?",
  "How can I contact or hire him?"
];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function clearChat() {
    if (loading) return;
    setMessages([INITIAL_MESSAGE]);
    setInput("");
    setError("");
  }

  async function handleSend(promptText?: string) {
    const textToSend = promptText || input;
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: textToSend.trim()
    };

    const conversationMessages = messages.filter(
      (m, i) => !(i === 0 && m.content === INITIAL_MESSAGE.content)
    );

    const updatedMessages = [...conversationMessages, userMessage];

    setMessages([...updatedMessages, { role: "assistant", content: "" }]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      await streamChat(updatedMessages, (chunk) => {
        setMessages((current) => {
          const copy = [...current];
          const lastIdx = copy.length - 1;
          copy[lastIdx] = {
            ...copy[lastIdx],
            content: copy[lastIdx].content + chunk
          };
          return copy;
        });
      });
    } catch {
      setError("Unable to get response from AI. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="chat" className="relative px-6 py-24 border-t border-[#5a4136]/30">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-3 py-1 text-xs font-mono text-[#ff7a1a] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff7a1a]"></span>
              Interactive Assistant
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#e2e2e8] sm:text-4xl">
              Chat with My AI Recruiter
            </h2>
            <p className="mt-2 text-sm text-[#a98a7d]">
              Have questions about my technical background, system designs, or coursework? Ask below.
            </p>
          </div>

          <button
            onClick={clearChat}
            disabled={loading}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a98a7d] hover:text-[#ff7a1a] transition-colors disabled:opacity-40"
          >
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>Reset Conversation</span>
          </button>
        </div>

        {/* Suggested Prompts Bar */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#a98a7d]">Quick Prompts:</span>
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSend(prompt)}
              disabled={loading}
              className="rounded border border-[#5a4136]/50 bg-[#16191f] px-2.5 py-1 text-xs font-mono font-medium text-[#e2bfb0] hover:border-[#ff6b00]/60 hover:bg-[#ff6b00]/10 hover:text-[#ff7a1a] transition-colors disabled:opacity-50"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Window */}
        <div className="overflow-hidden rounded border border-[#5a4136]/60 bg-[#16191f] shadow-2xl shadow-black/50 backdrop-blur-xl">
          {/* Messages Container */}
          <div className="h-[440px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => {
              const isUser = message.role === "user";
              return (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!isUser && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#ff6b00]/15 border border-[#ff6b00]/30 text-[#ff7a1a] font-mono text-xs font-bold">
                      AI
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded p-4 text-sm leading-relaxed ${
                      isUser
                        ? "bg-[#ff6b00] text-[#0c0e12] font-medium shadow-md shadow-[#ff6b00]/20"
                        : "border border-[#5a4136]/50 bg-[#111317] text-[#e2e2e8]"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>

                    {loading &&
                      index === messages.length - 1 &&
                      !isUser &&
                      message.content === "" && (
                        <div className="flex items-center gap-1.5 py-1">
                          <span className="h-2 w-2 rounded-full bg-[#ff7a1a] animate-bounce" />
                          <span className="h-2 w-2 rounded-full bg-[#ff7a1a] animate-bounce [animation-delay:150ms]" />
                          <span className="h-2 w-2 rounded-full bg-[#ff7a1a] animate-bounce [animation-delay:300ms]" />
                        </div>
                      )}
                  </div>

                  {isUser && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#1e2024] border border-[#5a4136] text-[#e2bfb0] font-mono text-xs font-bold">
                      You
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="border-t border-[#5a4136]/40 bg-[#111317]/80 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, education, or experience..."
                disabled={loading}
                className="flex-1 rounded border border-[#5a4136]/50 bg-[#1e2024] px-4 py-3 text-sm font-mono text-white placeholder:text-[#a98a7d]/60 outline-none focus:border-[#ff6b00] focus:ring-1 focus:ring-[#ff6b00]/30 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="inline-flex items-center justify-center rounded bg-[#ff6b00] px-5 py-3 text-xs font-mono uppercase tracking-wider font-bold text-[#0c0e12] shadow-md shadow-[#ff6b00]/20 transition-all hover:bg-[#ff7a1a] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Thinking..." : "Send"}
              </button>
            </form>

            {error && (
              <p className="mt-2 text-xs font-mono font-medium text-rose-400">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}