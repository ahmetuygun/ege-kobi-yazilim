/**
 * Site renk teması — tek kaynak `app/globals.css`.
 *
 * - **Açık tema:** `html` üzerinde `dark` sınıfı **yokken** (`html` bloğu).
 * - **Koyu tema:** `html` üzerinde `dark` sınıfı varken (`html.dark` bloğu).
 *
 * Geçiş: `components/site/theme-toggle.tsx` — `localStorage` (`THEME_STORAGE_KEY`) ve `html.dark`.
 */
export const SITE_THEME_CSS_ENTRY = "app/globals.css" as const;

/** `localStorage` anahtarı — `ThemeToggle` ile aynı olmalı. */
export const THEME_STORAGE_KEY = "egekobi-theme" as const;

export type ThemeMode = "light" | "dark";
