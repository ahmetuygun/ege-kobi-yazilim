import Link from "next/link";
import { Mail } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { Separator } from "@/components/ui/separator";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 6.84c.98.01 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.26 5.69.42.36.79 1.07.79 2.17v3.22c0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2H21.5l-7.42 8.487L23 22h-6.797l-5.18-6.78L4.96 22H1.7l7.94-9.08L1 2h6.96l4.71 6.23L18.244 2zm-2.4 18h1.88L7.24 4H5.26l10.584 16z" />
    </svg>
  );
}

const LINK_GROUPS = [
  {
    title: "Ürünler",
    links: [
      { label: "yapı360", href: "#projects" },
      { label: "tekstil360", href: "#projects" },
      { label: "saha360", href: "#projects" },
      { label: "finans360", href: "#projects" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Hakkımızda", href: "#stories" },
      { label: "Kariyer", href: "#contact" },
      { label: "Basın Kiti", href: "#contact" },
      { label: "İletişim", href: "#contact" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { label: "Gizlilik Politikası", href: "#" },
      { label: "KVKK Aydınlatma", href: "#" },
      { label: "Çerez Politikası", href: "#" },
      { label: "Kullanım Koşulları", href: "#" },
    ],
  },
] as const;

const SOCIAL = [
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "E-posta", href: "mailto:hello@egekobiyazilim.com", icon: Mail },
] as const;

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border/60 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              KOBİ&apos;ler için 360° dijital dönüşüm yazılımları geliştiren,
              Ege merkezli bir teknoloji stüdyosu.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIAL.map(({ icon: Icon, ...item }) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex size-10 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-foreground/60 hover:text-foreground"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <Separator className="my-10 bg-border/60" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Ege360 — Ege KOBİ Yazılım. Tüm hakları
            saklıdır.
          </p>
          <p>İzmir, Türkiye · hello@egekobiyazilim.com</p>
        </div>
      </div>
    </footer>
  );
}
