"use client";

import { useState } from "react";

const CHAPTERS = [
  { title: "Chapter 1: Foundations", text: "Early exploration of coding and problem solving." },
  { title: "Chapter 2: Building", text: "Creating projects and learning modern stacks." },
  { title: "Chapter 3: Impact", text: "Delivering features that matter to users." }
];

export default function InteractiveStory() {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => Math.min(s + 1, CHAPTERS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
  const c = CHAPTERS[step];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Interactive Journey</h2>
      <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
        <h3 className="text-lg font-semibold">{c.title}</h3>
        <p className="opacity-80 mt-1">{c.text}</p>
        <div className="mt-4 flex gap-3">
          <button onClick={prev} className="px-3 py-1 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition" disabled={step === 0}>Back</button>
          <button onClick={next} className="px-3 py-1 rounded-full bg-accent text-black font-medium hover:opacity-90 transition" disabled={step === CHAPTERS.length - 1}>Next</button>
        </div>
      </div>
    </section>
  );
}


