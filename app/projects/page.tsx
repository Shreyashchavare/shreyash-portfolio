import GithubRepos from "../(components)/GithubRepos";
import ProjectCaseStudies from "../(components)/ProjectCaseStudies";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">

      {/* 🔥 Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          A collection of projects showcasing my work in backend development,
          AI/GenAI systems, and real-world problem solving.
        </p>
      </div>

      {/* ⭐ Featured Projects */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <span className="text-sm text-foreground/60">
            Selected work & case studies
          </span>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6">
          <ProjectCaseStudies />
        </div>
      </div>

      {/* 🚀 GitHub Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Latest on GitHub</h2>
          
          <a
            href="https://github.com/shreyashchavare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            View Profile →
          </a>
        </div>

        <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6">
            <GithubRepos username="shreyashchavare" limit={6} />
        </div>
      </div>

      {/* 💡 CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-foreground/70 mb-4">
          Interested in collaborating or learning more about my work?
        </p>

        <Link
          href="/contact"
          className="inline-block px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition"
        >
          Get in Touch
        </Link>
      </div>

    </section>
  );
}