export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/shreyashchavare",
    icon: "Github",
    label: "View GitHub profile"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shreyash-chavare",
    icon: "Linkedin",
    label: "Connect on LinkedIn"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Shreyash_Chavare_14",
    icon: "Codeforces",
    label: "View Codeforces profile"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Shreyash_Chavare_14",
    icon: "LeetCode",
    label: "View LeetCode profile"
  },
  {
    name: "Email",
    url: "mailto:shreyashchavare3110@gmail.com",
    icon: "Mail",
    label: "Send email"
  }
];
