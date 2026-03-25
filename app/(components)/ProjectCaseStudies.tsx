import { PROJECTS } from "@/lib/projects";

export default function ProjectCaseStudies() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Project Stories</h2>
      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <article key={project.id} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium mb-1">Challenge</div>
                <p className="opacity-80">{project.challenge}</p>
              </div>
              <div>
                <div className="font-medium mb-1">Solution</div>
                <p className="opacity-80">{project.solution}</p>
              </div>
              <div>
                <div className="font-medium mb-1">Outcome</div>
                <p className="opacity-80">{project.outcome}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full border border-foreground/20 hover:bg-accent/10 transition inline-block"
                >
                  Live Demo
                </a>
              )}
              {project.gitUrl && (
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-accent text-black hover:opacity-90 transition border border-foreground/20 inline-block"
                >
                  View Code
                </a>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


