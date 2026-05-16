import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate w-full overflow-hidden pt-16"
    >
      <div className="relative w-full">
        <div className="relative aspect-[2400/1339] w-full sm:aspect-[16/7] lg:aspect-[21/9] lg:max-h-[640px]">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-l from-transparent via-background/40 to-background/95 sm:via-background/35 sm:to-background"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-full max-w-[min(100%,52rem)] bg-gradient-to-r from-black/80 from-[42%] via-black/45 to-transparent sm:from-[38%] sm:via-black/35"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background"
          />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:absolute lg:inset-0 lg:flex lg:items-center lg:px-8 lg:py-0">
          <div className="relative flex max-w-2xl flex-col items-start text-left">
            <h1
              id="hero-title"
              className="hero-text-shadow text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl 2xl:text-7xl"
            >
              Ege&apos;nin Lider KOBİ{" "}
              <span className="text-gradient-brand">
                Dijital Dönüşüm Platformu
              </span>
            </h1>

            <p className="hero-sub-shadow mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
              Tekstil, yapı ve üretim sektörleri için geliştirilen yazılımlarla
              tüm operasyonlarınızı tek merkezden yönetin. Sistem mimarisi,
              yapay zeka ve siber güvenlik çözümleri ile uçtan uca dijital
              dönüşüm.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-3">
              <Button
                asChild
                size="xl"
                className="w-full bg-primary font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                <Link href="#contact">
                  Projeyi Keşfedin
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="w-full border-white/20 bg-white/5 text-foreground backdrop-blur hover:bg-white/10 sm:w-auto"
              >
                <Link href="#projects">Portföyümüz</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
