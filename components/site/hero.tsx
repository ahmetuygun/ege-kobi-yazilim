import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HERO_BACKGROUND_IMAGE } from "@/lib/site-assets";

/** Açık mod: sol koyu scrim üzerinde başlık derinliği */
const HERO_TITLE_SHADOW_ON_SCRIM =
  "[text-shadow:0_2px_28px_rgb(0_0_0_/_0.55),0_1px_2px_rgb(0_0_0_/_0.35)]" as const;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh w-full overflow-hidden"
    >
      <div className="absolute inset-0 min-h-svh">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt="Endüstriyel tesis"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center contrast-[1.04] saturate-[1.05] dark:contrast-100 dark:saturate-100"
        />

        {/* Açık: soldan sağa koyu → şeffaf (metin solda, mockuplar sağda ham görünür) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(15_23_42_/_0.9)_0%,rgb(15_23_42_/_0.62)_14%,rgb(15_23_42_/_0.38)_32%,rgb(15_23_42_/_0.16)_50%,rgb(15_23_42_/_0.05)_64%,transparent_78%)] dark:hidden sm:bg-[linear-gradient(to_right,rgb(15_23_42_/_0.88)_0%,rgb(15_23_42_/_0.52)_20%,rgb(15_23_42_/_0.22)_42%,rgb(15_23_42_/_0.06)_58%,transparent_74%)]"
        />

        {/* Koyu: önceki hero */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-l from-transparent via-background/40 to-background/95 sm:via-background/35 sm:to-background dark:block"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-full max-w-[min(100%,52rem)] bg-gradient-to-r from-black/80 from-[42%] via-black/45 to-transparent sm:from-[38%] sm:via-black/35 dark:block"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-b from-transparent to-background dark:block"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="relative flex max-w-2xl flex-col items-start text-left">
          <h1
            id="hero-title"
            className={`text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white ${HERO_TITLE_SHADOW_ON_SCRIM} dark:text-white dark:[text-shadow:0_2px_28px_rgb(0_0_0_/_0.55),0_1px_2px_rgb(0_0_0_/_0.4)] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl 2xl:text-7xl`}
          >
            Ege&apos;nin Lider KOBİ{" "}
            <span className="text-primary [text-shadow:0_1px_22px_rgb(0_0_0_/_0.6)] dark:[text-shadow:0_1px_18px_rgb(0_0_0_/_0.55)]">
              Dijital Dönüşüm Platformu
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg rounded-lg bg-black/40 px-3 py-2.5 sm:px-4 sm:py-3 dark:bg-transparent dark:px-0 dark:py-0 dark:rounded-none dark:text-white/90 dark:[text-shadow:0_1px_14px_rgb(0_0_0_/_0.5)]">
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
