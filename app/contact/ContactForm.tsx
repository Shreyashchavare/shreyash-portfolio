"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill in name, email, and message.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message })
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl border border-white/10 bg-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 text-foreground/80">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/10 outline-none focus:border-primary" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1 text-foreground/80">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/10 outline-none focus:border-primary" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1 text-foreground/80">Subject</label>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/10 outline-none focus:border-primary" placeholder="How can I help?" />
      </div>
      <div>
        <label className="block text-sm mb-1 text-foreground/80">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-36 px-4 py-2 rounded-md bg-white/10 border border-white/10 outline-none focus:border-primary" placeholder="Write your message..." />
      </div>
      <div className="flex items-center gap-3">
        <button disabled={status === "submitting"} className="px-5 py-2.5 rounded-full bg-accent text-black hover:opacity-90 disabled:opacity-50 transition border border-foreground/20 flex items-center gap-2" type="submit">
          <Send size={18} />
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && <span className="text-green-400">Message sent!</span>}
        {status === "error" && <span className="text-red-400">{error}</span>}
      </div>
    </form>
  );
}





