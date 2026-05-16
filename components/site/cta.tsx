import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="relative w-full px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-border/60 bg-card p-8 sm:p-14">
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2
              id="cta-title"
              className="text-balance text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Projeyi konuşalım, 48 saatte yol haritasını çıkaralım.
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Ücretsiz teknik keşif görüşmesi için iletişime geçin. Ekibimiz
              size sektörünüze özel demo ortamı kurar.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Button
              asChild
              size="xl"
              className="bg-primary font-medium text-primary-foreground hover:bg-primary/90"
            >
              <Link href="mailto:hello@egekobiyazilim.com">
                İş Birliği Başlatın
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/15 bg-white/5 text-foreground hover:bg-white/10"
            >
              <Link href="tel:+902321112233">+90 (232) 111 22 33</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
