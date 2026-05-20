<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Tema / renkler

- **Tek kaynak:** `app/globals.css` — `html` blokları açık tema, `html.dark` koyu tema (CSS değişkenleri).
- **Kullanım:** Bileşenlerde mümkün olduğunca `text-foreground`, `text-muted-foreground`, `bg-background`, `bg-secondary`, `border-border`, `surface-card`, `bg-header` gibi semantik sınıflar; ham `slate-*` / `text-white` yerine bunlar.
- **Anahtar:** `ThemeToggle` (`components/site/theme-toggle.tsx`) + `localStorage` (`THEME_STORAGE_KEY`); sunucu çıktısı `layout` içinde varsayılan `dark`.
- **Referans:** `lib/site-theme.ts` (dosya yolu notu), `THEME_COLOR_*` → `lib/site-assets.ts`.
