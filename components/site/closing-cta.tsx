import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section
      id="cta-birlikte"
      aria-labelledby="cta-birlikte-baslik"
      className="border-t border-border bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="section-glow surface-cta-panel relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-ege-sea/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-ege-sea-deep/20 blur-3xl"
          />

          <h2
            id="cta-birlikte-baslik"
            className="relative text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Fikirlerinizi birlikte gerçeğe dönüştürelim
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            İletişim sayfasında adres ve ileti bilgilerimizi bulabilirsiniz.
            Kapsamı ve süreyi birlikte netleştirelim.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="xl"
              className="w-full font-medium sm:w-auto"
            >
              <Link href="/iletisim">
                İletişim sayfası
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
