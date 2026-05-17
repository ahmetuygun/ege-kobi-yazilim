import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section
      id="iletisim"
      aria-labelledby="iletisim-baslik"
      className="border-t border-white/10 bg-ege-surface-deep py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="section-glow relative overflow-hidden rounded-3xl border border-ege-sea/20 bg-gradient-to-b from-slate-900/90 to-slate-950 px-8 py-14 text-center sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-ege-sea/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-ege-sea-deep/20 blur-3xl"
          />

          <h2
            id="iletisim-baslik"
            className="relative text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Fikirlerinizi birlikte gerçeğe dönüştürelim
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-400">
            Kısa bir telefon görüşmesiyle başlayalım. Size uygun modülleri ve
            süreyi net şekilde yazalım.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 min-w-[200px] rounded-full bg-gradient-to-r from-ege-sea-bright via-ege-sea-light to-ege-sea px-8 text-base font-semibold text-slate-950 shadow-lg hover:opacity-95"
            >
              <Link href="mailto:hello@egekobiyazilim.com?subject=İletişim">
                Bize ulaşın
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 min-w-[200px] rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="tel:+902321112233">Hemen ara</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
