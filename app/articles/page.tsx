import Reveal from "../(components)/Reveal";

export default function ArticlesPage() {
  return (
    <section className="py-12">
      <Reveal>
        <h1 className="text-3xl font-bold mb-6">Articles</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-foreground/80 mb-6">A place for my technical write-ups and learning notes.</p>
      </Reveal>
      <div className="space-y-4">
        <Reveal delay={0.2}>
          <article className="p-5 rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <h2 className="text-xl font-semibold">Coming soon</h2>
            <p className="text-foreground/70">I will publish articles here about Java, DSA, Spring Boot, and more.</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}


