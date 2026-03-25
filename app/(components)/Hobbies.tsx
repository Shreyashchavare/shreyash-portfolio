import Image from "next/image";

type Hobby = {
  title: string;
  description: string;
  icon: string; // path under /public
};

const HOBBIES: Hobby[] = [
  { title: "Learning", description: "Daily deep-dives into AI and backend systems.", icon: "/hobbies/learning.svg" },
  { title: "Travel", description: "Exploring new cities and capturing stories.", icon: "/hobbies/travel.svg" },
  { title: "Sketching", description: "Hand-drawn icons and diagrams for ideas.", icon: "/hobbies/sketching.svg" }
];

export default function Hobbies() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Beyond Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HOBBIES.map((hobby) => (
          <div key={hobby.title} className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
              <Image src={hobby.icon} alt={hobby.title} width={24} height={24} className="opacity-90" />
            </div>
            <h3 className="text-lg font-semibold">{hobby.title}</h3>
            <p className="text-sm opacity-80 mt-1">{hobby.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


