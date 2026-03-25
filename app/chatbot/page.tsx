"use client";

import Link from "next/link";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      
      <div className="text-center max-w-xl">
        
        {/* 🔥 Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 20l1.8-3.6A7.963 7.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </div>

        {/* 🔥 Title */}
        <h1 className="text-3xl font-bold mb-3">
          AI RAG Chatbot 🚀
        </h1>

        {/* 🔥 Subtitle */}
        <p className="text-foreground/70 mb-6">
          This feature is currently under development.  
          Soon you’ll be able to interact with an AI assistant  
          to explore my skills, projects, and experience.
        </p>

        {/* 🔥 Status Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-foreground/10 text-sm font-medium mb-6">
          🚧 Under Development
        </div>

        {/* 🔥 CTA Buttons */}
        <div className="flex justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full bg-black text-white hover:opacity-90 transition"
          >
            Go Back Home
          </Link>

          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-full border border-foreground/20 hover:bg-foreground/5 transition"
          >
            View Projects
          </Link>
        </div>

      </div>
    </div>
  );
}