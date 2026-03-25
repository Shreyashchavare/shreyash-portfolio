import Reveal from "../(components)/Reveal";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2023",
    title: "College Journey Begins",
    description: "Started B.Tech in Computer Science & Engineering at DKTE Ichalkaranji. Discovered passion for coding and problem-solving.",
    icon: "🎓"
  },
  {
    year: "2024",
    title: "First Project: Hostel Management System",
    description: "Built a full-stack hostel management system using Java, Spring Boot, and React. Learned about backend development and database design.",
    icon: "🏗️"
  },
  {
    year: "2025",
    title: "Competitive Programming",
    description: "Started coding on LeetCode and Codeforces. Strengthened DSA fundamentals and problem-solving skills. Currently active on both platforms.",
    icon: "🎯"
  },
  {
    year: "2026",
    title: "Web Development Focus",
    description: "Dove deep into modern web technologies - React, Next.js, TypeScript, Tailwind CSS. Built multiple projects with focus on performance and UX.",
    icon: "💻"
  },
  {
    year: "2025",
    title: "IoT & Robotics Exploration",
    description: "Started exploring IoT systems and robotics with ROS2. Built smart monitoring systems and learned embedded systems concepts.",
    icon: "🤖"
  },
  {
    year: "2026",
    title: "Open Source & Portfolio",
    description: "Contributing to open-source projects. Building comprehensive portfolio showcasing skills, projects, and learnings.",
    icon: "🚀"
  }
];

export default function JourneyPage() {
  return (
    <section className="py-12 px-4">
      <Reveal>
        <h1 className="text-3xl font-bold mb-2">My Journey</h1>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-foreground/80 mb-16">A timeline of my growth as a developer and learner</p>
      </Reveal>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-accent to-transparent" />

        {/* Timeline Items */}
        <div className="space-y-20">
          {timeline.map((item, idx) => (
            <Reveal key={`${item.year}-${idx}`} delay={idx * 0.1}>
              <div className="relative h-48">
                {/* Left side items (even indices) */}
                {idx % 2 === 0 ? (
                  <>
                    {/* Left card */}
                    <div className="absolute right-1/2 mr-8 w-5/12 h-full flex items-center">
                      <div className="p-6 rounded-2xl border border-foreground/15 bg-foreground/5 hover:bg-foreground/8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 w-full">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-primary">{item.year}</div>
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-foreground/75 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                      <div className="relative flex items-center justify-center">
                        {/* Outer glow */}
                        <div className="absolute w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
                        {/* Main dot */}
                        <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg shadow-primary/60 z-10" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                      <div className="relative flex items-center justify-center">
                        {/* Outer glow */}
                        <div className="absolute w-8 h-8 rounded-full bg-accent/20 animate-pulse" />
                        {/* Main dot */}
                        <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-accent to-primary border-4 border-background shadow-lg shadow-accent/60 z-10" />
                      </div>
                    </div>

                    {/* Right card */}
                    <div className="absolute left-1/2 ml-8 w-5/12 h-full flex items-center">
                      <div className="p-6 rounded-2xl border border-foreground/15 bg-foreground/5 hover:bg-foreground/8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 w-full">
                        <div className="flex items-start gap-3 mb-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-accent">{item.year}</div>
                            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-foreground/75 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}

                {/* Mobile timeline dot */}
                <div className="md:hidden absolute left-2 top-6 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background shadow-lg z-10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Future Section */}
      <Reveal delay={0.6}>
        <div className="mt-20 max-w-2xl mx-auto p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 hover:border-primary/60 transition-all duration-300">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">✨</span>
          </div>
          <h2 className="text-2xl font-semibold text-foreground text-center mb-3">What's Next?</h2>
          <p className="text-foreground/80 leading-relaxed text-center">
            I'm excited about the future! My goals include contributing more to open-source projects,
            deepening my expertise in AI and machine learning, exploring full-stack development at scale,
            and building products that genuinely help people. I'm always learning and growing as a developer.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
