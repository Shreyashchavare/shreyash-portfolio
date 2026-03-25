import Image from "next/image";
import Reveal from "../(components)/Reveal";

export default function AboutPage() {
  return (
    <section className="py-12">
      <Reveal>
        <h1 className="text-3xl font-bold mb-8">About Me</h1>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Photo */}
        <div className="md:col-span-1">
          <Reveal delay={0.05}>
            <div className="space-y-4">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-lg">
                <Image
                  src="/profile.jpeg"
                  alt="Shreyash Chavare"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Quick Bio */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="font-semibold mb-3">Quick Facts</h3>
                <ul className="text-sm text-foreground/80 space-y-2">
                  <li className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Ichalkaranji, Maharashtra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🎓</span>
                    <span>B.Tech (Pursuing) - CSE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>💻</span>
                    <span>Software Devlopment Engineer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🤖</span>
                    <span>Genrative AI Devloper</span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Content */}
        <div className="md:col-span-2 space-y-6">
          <Reveal delay={0.1}>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Who I Am</h2>
              <p className="text-foreground/80 leading-relaxed">
                I’m Shreyash, a Software Development Engineer passionate about building scalable, real-world applications and intelligent systems.
                I specialize in AI-driven full-stack development, combining backend engineering with Generative AI technologies such as RAG, LLMs, and agent-based systems.
                I enjoy solving complex problems, building efficient architectures, and creating user-focused applications that deliver real impact.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <h2 className="text-lg font-semibold mb-3">Core Strengths</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>AI-driven Full-Stack Development using Java, Python, and modern web technologies</li>
                <li>Strong Computer Science fundamentals including Data Structures & Algorithms, OOP, OS, DBMS</li>
                <li>Backend Engineering with Spring Boot, Flask, REST APIs, and Database Design</li>
                <li>Generative AI development with RAG, LLMs, embeddings, and vector databases</li>
                <li>Building scalable, maintainable, and performance-focused applications</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
              <h2 className="text-lg font-semibold mb-3">Beyond Code</h2>
              <p className="text-foreground/80 leading-relaxed">
                Beyond coding, I enjoy sketching, traveling, and continuously exploring new technologies. 
                I am particularly interested in the evolution of Generative AI and its real-world applications. I enjoy learning, experimenting, and building projects that combine software engineering with intelligent systems.
                I believe in continuous growth, collaboration, and creating technology that makes a meaningful impact.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


