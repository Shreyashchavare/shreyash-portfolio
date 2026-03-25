import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeProvider from "./(components)/ThemeProvider";
import ThemeToggle from "./(components)/ThemeToggle";
import SocialLinks from "./(components)/SocialLinks";
import { span } from "framer-motion/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyash Suresh Chavare | Portfolio",
  description: "Portfolio of Shreyash Suresh Chavare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
        <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-foreground">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">Shreyash Suresh Chavare</Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/about" className="text-foreground hover:text-primary relative group transition-colors">About<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
              <Link href="/skills" className="text-foreground hover:text-primary relative group transition-colors">Skills<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
              <Link href="/journey" className="text-foreground hover:text-primary relative group transition-colors">Education<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
              <Link href="/projects" className="text-foreground hover:text-primary relative group transition-colors">Projects<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
              <Link href="/articles" className="text-foreground hover:text-primary relative group transition-colors">Articles<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
              <Link href="/cv" className="text-foreground hover:text-primary relative group transition-colors">Resume<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
              <Link href="/contact" className="text-foreground hover:text-primary relative group transition-colors">Contact<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span></Link>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4">
          {children}
        </main>
        <footer className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur border-t" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between text-foreground">
            <SocialLinks />
            <div className="text-xs text-foreground/70">© {new Date().getFullYear()} shreyash suresh chavare — All rights reserved.</div>
          </div>
        </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
