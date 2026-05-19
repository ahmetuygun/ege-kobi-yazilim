import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HERO_BACKGROUND_IMAGE } from "@/lib/site-assets";

const PROJECTS = [
  {
    tag: "İnşaat",
    title: "Akıllı Şantiye Merkezi",
    subtitle: "Tek ekranda iş programı ve malzeme akışı",
    href: "/iletisim",
    image: HERO_BACKGROUND_IMAGE,
    objectPosition: "object-[60%_center]",
  },
  {
    tag: "Tekstil",
    title: "Entegre Üretim Paneli",
    subtitle: "Sipariş, fason ve stok bir arada",
    href: "/iletisim",
    image: HERO_BACKGROUND_IMAGE,
    objectPosition: "object-[35%_center]",
  },
] as const;

export function FeaturedProjects() {
  return (
    <section
      id="projeler"
      aria-labelledby="projeler-baslik"
      className="border-t border-white/10 bg-ege-surface-deep py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2
              id="projeler-baslik"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Seçkin projelerimiz
            </h2>
            <p className="mt-3 max-w-xl text-lg text-slate-400">
              Gerçek sahadan esinlenen örnek başlıklar. Detayları birlikte
              konuşalım.
            </p>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wider text-ege-sea-light hover:text-ege-sea-bright"
          >
            Tüm projeler
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${p.objectPosition}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="inline-block rounded-full bg-ege-sea/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ege-sea-bright ring-1 ring-ege-sea/30">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400 sm:text-base">
                  {p.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
