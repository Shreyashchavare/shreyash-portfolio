"use client";

import { useEffect, useState } from "react";

type Skill = { name: string; level: number };
const SKILLS: Skill[] = [
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 78 },
  { name: "AI/ML", level: 65 }
];

export default function SkillsVisualization() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Skills Visualization</h2>
      <div className="space-y-4">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="">
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span className="opacity-70">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full bg-accent transition-[width] duration-700 ease-out will-change-[width]"
                style={{ width: mounted ? `${skill.level}%` : 0 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


