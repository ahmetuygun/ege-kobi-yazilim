"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";

const NAV_LINKS = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#uzmanlik", label: "Uzmanlık" },
  { href: "#projeler", label: "Projeler" },
  { href: "#hikayeler", label: "Başarı Hikayeleri" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-3 z-50 border-b transition-all duration-300 sm:top-4",
        scrolled
          ? "border-white/10 bg-slate-950/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Logo variant="dark" priority />

        <nav
          aria-label="Ana navigasyon"
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-ege-sea to-ege-sea-deep px-5 font-semibold text-slate-950 shadow-lg shadow-ege-sea/25 hover:from-ege-sea-light hover:to-ege-sea"
          >
            <Link href="#iletisim">BİZE ULAŞIN</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-3 w-full rounded-full bg-gradient-to-r from-ege-sea to-ege-sea-deep font-semibold text-slate-950"
            >
              <Link href="#iletisim" onClick={() => setOpen(false)}>
                BİZE ULAŞIN
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
