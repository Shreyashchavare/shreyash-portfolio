"use client";

import { PropsWithChildren, useEffect } from "react";

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = getSystemPrefersDark();
    const theme = stored || (prefersDark ? "dark" : "light");
    root.classList.toggle("dark", theme === "dark");
  }, []);
  return children as any;
}


