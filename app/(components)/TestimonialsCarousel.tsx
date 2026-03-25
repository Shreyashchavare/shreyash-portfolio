"use client";

import { useEffect, useState } from "react";

type Testimonial = { name: string; role: string; quote: string };
const TESTIMONIALS: Testimonial[] = [
  { name: "Mentor A", role: "Senior Engineer", quote: "Shreyash consistently delivers high-quality, thoughtful solutions." },
  { name: "Colleague B", role: "Teammate", quote: "A collaborative problem-solver with strong ownership." },
  { name: "Client C", role: "Partner", quote: "Great communication and reliable execution from start to finish." }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
        <p className="text-lg">“{t.quote}”</p>
        <div className="mt-3 text-sm opacity-80">— {t.name}, {t.role}</div>
        <div className="mt-4 flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "bg-accent w-6" : "bg-black/20 dark:bg-white/20 w-2"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


