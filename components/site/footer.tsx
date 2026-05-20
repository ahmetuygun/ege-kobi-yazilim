import Link from "next/link";
import { Mail } from "lucide-react";

import { Logo } from "@/components/site/logo";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL } from "@/lib/site-contact";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const KURUMSAL_LINKS = [
  { label: "Tekstil360", href: "/tekstil" },
  { label: "Yapı360", href: "/yapi" },
  { label: "Üretim360", href: "/uretim" },
  { label: "Çözümler", href: "/#cozumler" },
  { label: "Dijital dönüşüm", href: "/dijital-donusum" },
  { label: "Nasıl çalışıyoruz", href: "/#nasil-calisiyoruz" },
  { label: "Başarı hikayeleri", href: "/#hikayeler" },
  { label: "İletişim", href: "/iletisim" },
] as const;

const YASAL_LINKS = [
  { label: "Gizlilik politikası", href: "#" },
  { label: "Kullanım şartları", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-ege-surface-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" compact className="dark:hidden" />
            <Logo variant="dark" compact className="hidden dark:inline-flex" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Tekstil, yapı ve üretim odaklı yazılımlar. Ege merkezli ekiple
              sahada ve ekranda yanınızdayız.
            </p>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-ege-sea/40 hover:text-ege-sea-bright"
            >
              <LinkedinIcon className="size-4" />
            </Link>
          </div>

          <nav aria-label="Kurumsal">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Kurumsal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {KURUMSAL_LINKS.map((link) => (
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

          <nav aria-label="Yasal">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Yasal
            </h3>
            <ul className="mt-4 space-y-2.5">
              {YASAL_LINKS.map((link) => (
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
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ege KOBİ Yazılım. Tüm hakları saklıdır.</p>
          <p className="inline-flex items-center gap-1.5">
            <Mail className="size-3.5 shrink-0" aria-hidden />
            <span>{CONTACT_EMAIL}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
