export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  liveUrl?: string;
  gitUrl?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "hostel-mgt",
    title: "Hostel Management System",
    description: "A Hostel Management System (HMS) developed to digitize and streamline hostel operations such as student records, room allocation, payments, and complaint management, replacing inefficient manual record-keeping in our college hostel.",
    challenge: "The hostel staff relied on manual record-keeping, which led to data inconsistencies, difficulty in tracking room allocations, payments, and complaints, and inefficiency in managing multiple user roles like admin and students.",
    solution: "Designed and developed a centralized HMS with role-based access control, enabling efficient management of student data, room allocation, payments, and complaints. Implemented modular backend services, secure authentication and authorization, and a structured database system to ensure data consistency and easy reporting.",
    outcome: "Reduced manual effort and improved visibility; scalable architecture for new features and user roles.",
    tags: ["Java", "Spring Boot", "SQL", "React.js"],
    gitUrl: "https://github.com/shreyashchavare"
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio showcasing projects, skills, education, and contact information.",
    challenge: "Creating an engaging portfolio that effectively demonstrates skills and attracts opportunities.",
    solution: "Built with Next.js 15, TypeScript, Tailwind CSS with animations and dark mode support.",
    outcome: "Professional online presence with excellent performance metrics and SEO optimization.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://shreyashchavare.com",
    gitUrl: "https://github.com/shreyashchavare/shreyash-portfolio"
  },
  {
  id: "ecommerce-java",
  title: "E-Commerce Application (Java & MySQL)",
  description: "A basic e-commerce application developed using Java and MySQL to manage products, users, and orders with a simple interface.",
  challenge: "Understanding and implementing core Java concepts along with database integration, including handling product data, user management, and order processing.",
  solution: "Built the application using core Java concepts such as OOP and JDBC for database connectivity. Designed relational database schemas in MySQL and implemented CRUD operations for products, users, and orders.",
  outcome: "Successfully created a functional e-commerce system demonstrating strong fundamentals in Java programming and SQL, including data handling and database interaction.",
  tags: ["Java", "MySQL", "JDBC", "OOP", "SQL"],
  gitUrl: "https://github.com/shreyashchavare"
  },
  {
  id: "genai-chatbot",
  title: "GenAI Chatbot (RAG-based)",
  
  description: "An intelligent chatbot built using Generative AI to answer user queries based on custom data using Retrieval-Augmented Generation (RAG).",
  
  challenge: "Ensuring accurate and context-aware responses from large language models while handling custom knowledge sources and minimizing hallucinations.",
  
  solution: "Implemented a RAG pipeline using embeddings and vector databases to retrieve relevant context. Integrated LLMs with LangChain and designed prompt engineering strategies for accurate and reliable responses.",
  
  outcome: "Successfully developed a chatbot capable of answering domain-specific queries with improved accuracy and contextual relevance.",
  
  tags: ["Python", "LangChain", "RAG", "LLM", "Vector DB", "Prompt Engineering"],
  
  gitUrl: "https://github.com/shreyashchavare"
  },
  {
  id: "resume-analyzer",
  title: "HR Resume Analyzer (AI-Based)",
  
  description: "An AI-powered resume analyzer that evaluates resumes against job descriptions and provides feedback on skills, keywords, and match score.",
  
  challenge: "Extracting meaningful information from resumes and comparing it effectively with job requirements to generate accurate insights.",
  
  solution: "Built using Python with NLP techniques to parse resumes and extract key information. Integrated similarity matching and keyword analysis, along with LLM-based evaluation for enhanced feedback.",
  
  outcome: "Enabled automated resume screening with actionable insights, helping improve resume quality and alignment with job roles.",
  
  tags: ["Python", "NLP", "LLM", "Resume Parsing", "AI", "Text Analysis"],
  
  gitUrl: "https://github.com/shreyashchavare"
  }
];
