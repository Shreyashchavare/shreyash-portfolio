"use client";

import { useRef } from "react";

export default function VideoIntro() {
  const ref = useRef<HTMLVideoElement | null>(null);
  return (
    <section className="py-12">
      <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5">
        <div className="aspect-video relative">
          <video
            ref={ref}
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster="/intro-poster.svg"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Hello! I’m Shreyash</h2>
            <p className="text-sm opacity-80">A short intro to my work and what I care about.</p>
          </div>
          <button
            className="px-3 py-1 rounded-full bg-accent text-black font-medium hover:opacity-90 transition"
            onClick={() => {
              const v = ref.current; if (!v) return; if (v.paused) v.play(); else v.pause();
            }}
          >
            Play/Pause
          </button>
        </div>
      </div>
    </section>
  );
}


