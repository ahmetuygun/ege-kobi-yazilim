"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";

const NAV_LINKS = [
  { href: "#services", label: "Uzmanlık" },
  { href: "#projects", label: "Projeler" },
  { href: "#stories", label: "Başarı Hikayeleri" },
  { href: "#principles", label: "İlkelerimiz" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Ana navigasyon"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <Link href="#contact">İletişim</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#contact">İş Birliği</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border/60 text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button asChild variant="outline" size="lg">
                <Link href="#contact" onClick={() => setOpen(false)}>
                  İletişim
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="#contact" onClick={() => setOpen(false)}>
                  İş Birliği
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
