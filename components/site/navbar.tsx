"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/dijital-donusum", label: "Dijital dönüşüm" },
  { href: "/uretim", label: "Üretim360" },
  { href: "/tekstil", label: "Tekstil360" },
  { href: "/yapi", label: "Yapı360" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-sm shadow-black/20 backdrop-blur-xl transition-colors duration-300">
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
          <Button asChild size="sm" className="gap-1.5 px-4 font-medium">
            <Link href="/iletisim">
              BİZE ULAŞIN
              <ArrowRight className="size-3.5 shrink-0" />
            </Link>
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
        <div className="border-t border-white/10 bg-slate-950/98 backdrop-blur-xl lg:hidden">
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
            <Button asChild size="default" className="mt-3 w-full font-medium">
              <Link href="/iletisim" onClick={() => setOpen(false)}>
                BİZE ULAŞIN
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
