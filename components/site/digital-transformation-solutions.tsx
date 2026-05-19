import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cloud,
  Globe2,
  Smartphone,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { DIJITAL_DONUSUM_TABS } from "@/lib/dijital-donusum-tabs";

const ICON_BY_TAB_ID: Record<(typeof DIJITAL_DONUSUM_TABS)[number]["id"], LucideIcon> =
  {
    crm: UsersRound,
    erp: Boxes,
    mobil: Smartphone,
    web: Globe2,
    ai: Sparkles,
    bulut: Cloud,
  };

export function DigitalTransformationSolutions() {
  return (
    <section
      id="dijital-donusum"
      aria-labelledby="dijital-donusum-baslik"
      className="border-t border-white/10 bg-ege-surface-deep py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto min-w-0 max-w-2xl px-1 text-center sm:px-0">
          <h2
            id="dijital-donusum-baslik"
            className="text-balance text-3xl font-bold tracking-tight text-white break-words sm:text-4xl md:text-5xl"
          >
            Dijital Dönüşüm Çözümleri
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-400 break-words [overflow-wrap:anywhere]">
            Kurumsal yazılım ve entegrasyon projelerinde önce iş kuralını ve veri
            akışını netleştirir; ardından ölçülebilir teslimat planıyla ilerleriz.
            Detaylı anlatım için aşağıdaki kutulardan birini seçin veya tam sayfayı açın.
          </p>
        </div>

        <div className="mt-14 grid min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIJITAL_DONUSUM_TABS.map((tab) => {
            const Icon = ICON_BY_TAB_ID[tab.id];
            return (
              <Link
                key={tab.id}
                href={`/dijital-donusum#${tab.id}`}
                className="card-dark group flex min-w-0 max-w-full flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-ege-sea/25 sm:p-8"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ege-sea/15 text-ege-sea-bright ring-1 ring-ege-sea/25 transition-colors group-hover:bg-ege-sea/25">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 min-w-0 text-lg font-semibold leading-snug text-white break-words">
                  {tab.label}
                </h3>
                <p className="mt-3 min-w-0 line-clamp-3 text-left text-[15px] leading-relaxed text-slate-500 break-words [overflow-wrap:anywhere]">
                  {tab.lede}
                </p>
                <span className="mt-6 text-sm font-semibold text-ege-sea-light underline-offset-4 group-hover:text-ege-sea-bright group-hover:underline">
                  Detaylı incele
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/dijital-donusum"
            className="text-sm font-semibold text-ege-sea-light underline-offset-4 hover:text-ege-sea-bright hover:underline"
          >
            Tüm dijital dönüşüm çözümlerini sekme görünümünde aç
          </Link>
        </p>
      </div>
    </section>
  );
}
