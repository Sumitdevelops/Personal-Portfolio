import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import JobMatcher from "@/components/JobMatcher";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <JobMatcher />
        <Chatbot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}