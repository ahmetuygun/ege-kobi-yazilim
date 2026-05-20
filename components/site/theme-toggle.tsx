"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY, type ThemeMode } from "@/lib/site-theme";

function applyDomTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(THEME_STORAGE_KEY);
  if (v === "light" || v === "dark") return v;
  return null;
}

export function ThemeToggle({ className }: { className?: string }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const stored = readStoredTheme();
    const initial: ThemeMode = stored ?? "dark";
    setMode(initial);
    applyDomTheme(initial);
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, next);
      applyDomTheme(next);
      return next;
    });
  }, []);

  const isDark = mode === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-7 w-11 shrink-0 rounded-full border border-border bg-muted transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute top-1/2 flex size-[1.25rem] -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-sm ring-1 ring-border transition-[left,right] duration-200 ease-out",
          isDark ? "left-auto right-0.5" : "left-0.5 right-auto"
        )}
      >
        {isDark ? (
          <Moon className="size-2.5 text-ege-sea-light" strokeWidth={2.25} />
        ) : (
          <Sun className="size-2.5 text-ege-sea" strokeWidth={2.25} />
        )}
      </span>
    </button>
  );
}
