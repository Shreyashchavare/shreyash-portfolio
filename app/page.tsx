import Image from "next/image";
import Link from "next/link";
import Reveal from "./(components)/Reveal";
import { FolderGit2, Mail, FileText, Download } from "lucide-react";

export default function Home() {
  return (
    <section className="py-16 md:py-24 relative">
      
      {/* 🔥 HERO SECTION */}
      <div
        className="rounded-3xl p-8 md:p-12 mb-12"
        style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 space-y-6">
            <Reveal>
              <p className="text-secondary text-6xl font-semibold tracking-wide">
                Hello, I'm
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Shreyash
                <span className="block text-lg md:text-xl font-normal opacity-80 mt-2">
                  Software Development Engineer | Generative AI Developer
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-foreground/80 max-w-prose">
                I design and develop scalable web applications as a Software Development Engineer,
                with hands-on experience in integrating Generative AI solutions.
                I build intelligent systems using modern technologies, focusing on performance,
                usability, and real-world problem solving.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="px-5 py-2.5 rounded-full bg-accent text-black hover:opacity-90 transition border border-foreground/20 flex items-center gap-2"
                >
                  <FolderGit2 size={18} />
                  <span>View Projects</span>
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full border border-foreground/20 hover:bg-accent/10 transition flex items-center gap-2"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-4">
            <Reveal>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-white/20 shadow-[0_0_60px_-12px_rgba(139,92,246,0.65)] animate-float">
                <Image src="/profile.jpeg" alt="Profile" fill className="object-cover" priority />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex gap-3">
                <Link
                  href="/cv"
                  className="px-4 py-2 rounded-full bg-accent text-black hover:opacity-90 transition border border-foreground/20 flex items-center gap-2"
                >
                  <FileText size={18} />
                  <span>See Resume</span>
                </Link>

                <a
                  href="/Shreyash_Chavare_CV.pdf"
                  download
                  className="px-4 py-2 rounded-full border border-foreground/20 hover:bg-accent/10 transition flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Download</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* 🔥 INFO GRID */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        
        <Reveal>
          <div className="p-6 rounded-2xl border transition h-full flex flex-col justify-between"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-foreground/80">
                B.Tech in Computer Science with a strong foundation in software development, data structures, and problem solving.
              </p>
            </div>

            <Link href="/education" className="text-accent mt-4 inline-block">
              View more →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="p-6 rounded-2xl border transition h-full flex flex-col justify-between"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <p className="text-foreground/80">
                AI-driven Full-Stack Development using Java, Python, and modern web technologies, with expertise in Generative AI, RAG, and intelligent systems.
              </p>
            </div>

            <Link href="/skills" className="text-brand-pink mt-4 inline-block">
              View more →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="p-6 rounded-2xl border transition h-full flex flex-col justify-between"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <p className="text-foreground/80">
                Developed scalable full-stack and AI-driven applications, including RAG-based chatbots and management systems, focusing on real-world problem solving and user experience.
              </p>
            </div>

            <Link href="/projects" className="text-primary mt-4 inline-block">
              View more →
            </Link>
          </div>
        </Reveal>

      </div>

      {/* 🚀 FLOATING AI RAG CHATBOT BUTTON */}
      <Link
        href="/chatbot"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div
          className="relative flex items-center gap-3 px-5 py-3 rounded-full 
          bg-gradient-to-r from-purple-500 to-indigo-500 
          shadow-xl hover:scale-105 transition-all duration-300"
        >
          
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-xl opacity-30 group-hover:opacity-50 transition"></div>

          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 20l1.8-3.6A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>

          {/* Text */}
          <span className="text-white font-medium text-sm relative z-10 whitespace-nowrap">
            Ask AI About Me
          </span>
        </div>
      </Link>

    </section>
  );
}