import { SKILLS_BY_CATEGORY } from "@/lib/skills";
import Reveal from "../(components)/Reveal";

// Type definition
type Skill = {
  name: string;
  level: "advanced" | "intermediate" | "beginner";
};

// Color mapping
const levelColors: Record<Skill["level"], string> = {
  advanced: "#10b981",
  intermediate: "#f59e0b",
  beginner: "#6366f1",
};

export default function SkillsPage() {
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>

      {/* 🔥 Legend Section */}
      <div className="flex flex-wrap items-center gap-6 mb-8">
        {Object.entries(levelColors).map(([level, color]) => (
          <div key={level} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-sm text-foreground/70 capitalize">
              {level}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {Object.entries(SKILLS_BY_CATEGORY).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-lg font-semibold mb-4 text-foreground/70">
              {category}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {(skills as Skill[]).map((skill, idx) => (
                <Reveal key={`${category}-${skill.name}-${idx}`} delay={idx * 0.04}>
                  <div className="p-4 rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-foreground/10 transition flex items-center justify-between">
                    
                    <span className="text-foreground/90">
                      {skill.name}
                    </span>

                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: levelColors[skill.level] }}
                      aria-label={skill.level}
                      title={skill.level}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}