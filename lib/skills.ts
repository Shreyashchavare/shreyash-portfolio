export interface Skill {
  name: string;
  category: string;
  level?: "beginner" | "intermediate" | "advanced";
}

export const SKILLS_BY_CATEGORY = {
  "Programming Languages": [
    { name: "Python", category: "Programming Languages", level: "advanced" as const },
    { name: "Java", category: "Programming Languages", level: "advanced" as const },
    { name: "C++", category: "Programming Languages", level: "intermediate" as const },
    { name: "C", category: "Programming Languages", level: "intermediate" as const },
  ],

  "Backend Development": [
    { name: "Spring Boot", category: "Backend Development", level: "advanced" as const },
    { name: "Flask", category: "Backend Development", level: "advanced" as const },
    { name: "RESTful APIs", category: "Backend Development", level: "advanced" as const },
    { name: "SQL", category: "Backend Development", level: "advanced" as const },
    { name: "Database Design", category: "Backend Development", level: "intermediate" as const },
  ],

  "Full Stack Development": [
    { name: "MERN Stack", category: "Full Stack Development", level: "beginner" as const },
    { name: "Next.js Full Stack Apps", category: "Full Stack Development", level: "beginner" as const },
  ],

  "AI & GenAI Engineering": [
    { name: "Large Language Models (LLMs)", category: "AI & GenAI Engineering", level: "intermediate" as const },
    { name: "Generative AI", category: "AI & GenAI Engineering", level: "intermediate" as const },
    { name: "AI Agents", category: "AI & GenAI Engineering", level: "advanced" as const },
    { name: "Embeddings", category: "AI & GenAI Engineering", level: "advanced" as const },
    { name: "Vector Databases", category: "AI & GenAI Engineering", level: "advanced" as const },
    { name: "RAG (Retrieval-Augmented Generation)", category: "AI & GenAI Engineering", level: "advanced" as const },
    { name: "Prompt Engineering", category: "AI & GenAI Engineering", level: "advanced" as const },
  ],

  "Computer Science Fundamentals": [
    { name: "Data Structures & Algorithms", category: "Computer Science Fundamentals", level: "advanced" as const },
    { name: "Object-Oriented Programming (OOP)", category: "Computer Science Fundamentals", level: "advanced" as const },
    { name: "System Design", category: "Computer Science Fundamentals", level: "intermediate" as const },
    { name: "Operating Systems", category: "Computer Science Fundamentals", level: "intermediate" as const },
    { name: "DBMS", category: "Computer Science Fundamentals", level: "advanced" as const },
    { name: "Computer Networks", category: "Computer Science Fundamentals", level: "intermediate" as const },
  ],

  "Tools & Platforms": [
    { name: "Git", category: "Tools & Platforms", level: "advanced" as const },
    { name: "GitHub", category: "Tools & Platforms", level: "advanced" as const },
    { name: "Linux", category: "Tools & Platforms", level: "intermediate" as const },
    { name: "Linux CLI", category: "Tools & Platforms", level: "advanced" as const },
    { name: "Visual Studio Code", category: "Tools & Platforms", level: "advanced" as const },
    { name: "LM Studio", category: "Tools & Platforms", level: "advanced" as const },
    { name: "Selenium", category: "Tools & Platforms", level: "intermediate" as const },
    { name: "Web Scraping", category: "Tools & Platforms", level: "advanced" as const },
  ],
};