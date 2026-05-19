"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      <section className="overflow-x-hidden border-b border-white/10 bg-ege-surface-mid">
        <div className="mx-auto max-w-5xl min-w-0 px-4 pb-10 pt-[calc(5.5rem+env(safe-area-inset-top))] sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mb-6 mt-1 border-white/20 bg-white/5 text-white hover:bg-white/10 sm:mb-8 sm:mt-4"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Ana sayfa
            </Link>
          </Button>
          <p className="text-xs font-semibold uppercase tracking-wider text-ege-sea-light sm:text-sm">
            Dijital dönüşüm
          </p>
          <h1 className="mt-2 min-w-0 max-w-full text-balance text-2xl font-bold leading-tight tracking-tight text-white break-words sm:text-4xl md:text-5xl">
            Dijital Dönüşüm Çözümleri
          </h1>
          <p className="mt-3 max-w-3xl min-w-0 text-pretty text-base leading-relaxed text-slate-400 sm:mt-4 sm:text-lg break-words [overflow-wrap:anywhere]">
            İşletmenizin mevcut sistemleriyle uyumlu, ölçülebilir ve sürdürülebilir bir dijital mimari kuruyoruz. Aşağıdaki başlıklarda hangi
            soruya nasıl yaklaştığımızı; uygulama, entegrasyon ve veri tarafında neleri önceliklendirdiğimizi özetledik.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full min-w-0 max-w-6xl overflow-x-hidden px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex w-full min-w-0 max-w-full flex-col gap-8 lg:flex-row lg:gap-12">
          <nav className="w-full min-w-0 max-w-full lg:w-64 lg:max-w-none lg:shrink-0">
            <p
              id="donusum-sekme-listesi-etiket"
              className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:mb-3"
            >
              Konular
            </p>
            <div
              role="tablist"
              aria-labelledby="donusum-sekme-listesi-etiket"
              className="flex min-h-0 min-w-0 max-w-full snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] lg:flex-col lg:overflow-visible lg:pb-0 lg:[touch-action:auto] [&::-webkit-scrollbar]:hidden"
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
                        "min-h-11 shrink-0 snap-start rounded-xl border px-3 py-2.5 text-left text-sm font-medium leading-snug transition-colors sm:px-4 sm:py-3 lg:w-full lg:max-w-none lg:whitespace-normal",
                        "max-w-[min(100%,18rem)] sm:max-w-[20rem] lg:max-w-full",
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
          </nav>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="card-dark box-border min-h-[260px] w-full min-w-0 max-w-full flex-1 overflow-hidden rounded-2xl border border-white/10 p-5 sm:min-h-[320px] sm:p-8 md:p-10"
          >
            <div className="min-w-0 max-w-full">
              <h2 className="min-w-0 max-w-full text-xl font-bold tracking-tight text-white break-words sm:text-2xl md:text-3xl">
                {active.label}
              </h2>
              <p className="mt-3 min-w-0 max-w-full text-base leading-relaxed text-slate-300 break-words [overflow-wrap:anywhere] sm:mt-4 sm:text-[17px]">
                {active.lede}
              </p>
              <div className="mt-8 space-y-8 border-t border-white/10 pt-8 sm:mt-10 sm:space-y-10 sm:pt-10">
                {active.sections.map((section) => (
                  <section
                    key={section.heading}
                    className="scroll-mt-[calc(4rem+env(safe-area-inset-top))] sm:scroll-mt-28"
                  >
                    <h3 className="min-w-0 max-w-full text-base font-semibold text-ege-sea-light break-words sm:text-lg">
                      {section.heading}
                    </h3>
                    <div className="mt-2 min-w-0 max-w-full space-y-3 text-[15px] leading-relaxed text-slate-400 sm:mt-3 sm:space-y-4 sm:text-base">
                      {section.paragraphs.map((p, i) => (
                        <p
                          key={`${section.heading}-${i}`}
                          className="min-w-0 max-w-full break-words [overflow-wrap:anywhere]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-8 flex min-w-0 max-w-full flex-col gap-3 border-t border-white/10 pt-8 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="min-w-0 w-full max-w-full whitespace-normal rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto sm:rounded-full"
                >
                  <Link href="/#dijital-donusum" className="min-w-0 max-w-full whitespace-normal text-center">
                    Ana sayfadaki özet
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
