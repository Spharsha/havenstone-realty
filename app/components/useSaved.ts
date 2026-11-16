"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "havenstone-saved";

function read(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export function useSaved() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setIds(read());
    sync();
    window.addEventListener("saved-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("saved-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const current = read();
    const next = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      // storage may be unavailable; ignore
    }
    window.dispatchEvent(new Event("saved-change"));
  }, []);

  return { ids, toggle };
}
