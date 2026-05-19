import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HERO_BACKGROUND_IMAGE } from "@/lib/site-assets";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh w-full overflow-hidden"
    >
      {/* Full-viewport background */}
      <div className="absolute inset-0 min-h-svh">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt="Endüstriyel tesis"
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

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="relative flex max-w-2xl flex-col items-start text-left">
          <h1
            id="hero-title"
            className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white [text-shadow:0_2px_28px_rgb(0_0_0_/_0.55),0_1px_2px_rgb(0_0_0_/_0.4)] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl 2xl:text-7xl"
          >
            Ege&apos;nin Lider KOBİ{" "}
            <span className="text-ege-sea [text-shadow:0_1px_18px_rgb(0_0_0_/_0.55)]">
              Dijital Dönüşüm Platformu
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 [text-shadow:0_1px_14px_rgb(0_0_0_/_0.5)] sm:text-lg">
            Tekstil, yapı ve üretim sektörleri için geliştirilen yazılımlarla tüm
            operasyonlarınızı tek merkezden yönetin. Sistem mimarisi, yapay zeka
            ve siber güvenlik çözümleri ile uçtan uca dijital dönüşüm.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-3">
            <Button
              asChild
              size="xl"
              className="w-full font-medium sm:w-auto"
            >
              <Link href="/iletisim">
                Ücretsiz Fiyat Teklifi Alın
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
