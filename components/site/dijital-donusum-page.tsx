"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DIJITAL_DONUSUM_TABS } from "@/lib/dijital-donusum-tabs";
import { cn } from "@/lib/utils";

function hashToIndex(hash: string): number {
  const raw = hash.replace(/^#/, "").toLowerCase();
  if (!raw) return 0;
  const i = DIJITAL_DONUSUM_TABS.findIndex((t) => t.id === raw);
  return i >= 0 ? i : 0;
}

export function DijitalDonusumPageContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = DIJITAL_DONUSUM_TABS[activeIndex]!;

  const syncFromHash = useCallback(() => {
    if (typeof window === "undefined") return;
    setActiveIndex(hashToIndex(window.location.hash));
  }, []);

  useLayoutEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const selectTab = (index: number) => {
    const id = DIJITAL_DONUSUM_TABS[index]?.id;
    if (!id) return;
    setActiveIndex(index);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <section className="border-b border-white/10 bg-ege-surface-mid">
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mb-8 mt-2 border-white/20 bg-white/5 text-white hover:bg-white/10 sm:mt-4"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Ana sayfa
            </Link>
          </Button>
          <p className="text-sm font-semibold uppercase tracking-wider text-ege-sea-light">
            Dijital dönüşüm
          </p>
          <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Dijital Dönüşüm Çözümleri
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">
            İşletmenizin mevcut sistemleriyle uyumlu, ölçülebilir ve sürdürülebilir bir dijital mimari kuruyoruz. Aşağıdaki başlıklarda hangi
            soruya nasıl yaklaştığımızı; uygulama, entegrasyon ve veri tarafında neleri önceliklendirdiğimizi özetledik.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <div className="lg:w-64 lg:shrink-0">
            <p
              id="donusum-sekme-listesi-etiket"
              className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Konular
            </p>
            <div
              role="tablist"
              aria-labelledby="donusum-sekme-listesi-etiket"
              className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            >
              {DIJITAL_DONUSUM_TABS.map((tab, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectTab(index)}
                    className={cn(
                      "shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors lg:w-full",
                      selected
                        ? "border-ege-sea/50 bg-ege-sea/15 text-white shadow-sm shadow-ege-sea/10"
                        : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-slate-200",
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="card-dark min-h-[320px] flex-1 rounded-2xl border border-white/10 p-6 sm:p-10"
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {active.label}
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-slate-300">
              {active.lede}
            </p>
            <div className="mt-10 space-y-10 border-t border-white/10 pt-10">
              {active.sections.map((section) => (
                <section key={section.heading} className="scroll-mt-28">
                  <h3 className="text-lg font-semibold text-ege-sea-light">
                    {section.heading}
                  </h3>
                  <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
                    {section.paragraphs.map((p, i) => (
                      <p key={`${section.heading}-${i}`}>{p}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <Button asChild size="xl" className="w-full font-medium sm:w-auto">
                <Link href="/iletisim">
                  Bu konuda görüşelim
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/#dijital-donusum">Ana sayfadaki özet</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
