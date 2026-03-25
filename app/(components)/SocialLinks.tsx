import { SOCIAL_LINKS } from "@/lib/socials";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, { icon: React.ReactNode; bgClass: string }> = {
  Github: {
    icon: <Github size={20} className="text-primary" />,
    bgClass: "hover:bg-primary/10"
  },
  Linkedin: {
    icon: <Linkedin size={20} className="text-primary" />,
    bgClass: "hover:bg-primary/10"
  },
  Twitter: {
    icon: <Twitter size={20} className="text-primary" />,
    bgClass: "hover:bg-primary/10"
  },
  Mail: {
    icon: <Mail size={20} className="text-foreground" />,
    bgClass: "hover:bg-foreground/10"
  },
  Codeforces: {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="4" height="12" rx="1" fill="#3C6EFC"/>
        <rect x="10" y="4" width="4" height="16" rx="1" fill="#F44336"/>
        <rect x="17" y="10" width="4" height="10" rx="1" fill="#FFCC00"/>
      </svg>
    ),
    bgClass: "hover:bg-accent/10"
  },
  LeetCode: {
    icon: <span className="text-sm font-bold text-[#FFA116] leading-none">LC</span>,
    bgClass: "hover:bg-[#FFA116]/10"
  },
};

export default function SocialLinks() {
  return (
    <div className="flex gap-2 items-center">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          title={link.label}
          className={`w-9 h-9 p-2 rounded-lg border border-foreground/20 hover:border-foreground/40 transition-all duration-300 flex items-center justify-center ${iconMap[link.icon].bgClass}`}
        >
          {iconMap[link.icon].icon}
        </a>
      ))}
    </div>
  );
}
