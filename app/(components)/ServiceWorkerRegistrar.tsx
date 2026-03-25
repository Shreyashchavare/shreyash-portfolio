"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("serviceWorker" in navigator) {
      const register = async () => {
        try {
          await navigator.serviceWorker.register("/sw.js");
        } catch (err) {
          // no-op
        }
      };
      // wait a tick to avoid competing with hydration
      setTimeout(register, 0);
    }
  }, []);

  return null;
}


