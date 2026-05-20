import type { LucideIcon } from "lucide-react";
import { Blocks, MonitorPlay, Rocket, ScanSearch } from "lucide-react";
import { Fragment } from "react";

const STEPS: readonly {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    num: "01",
    title: "Ücretsiz İhtiyaç Analizi",
    description:
      "İş süreçlerinizi analiz ederek ihtiyaçlarınızı ve en uygun çözüm altyapısını belirliyoruz.",
    icon: ScanSearch,
  },
  {
    num: "02",
    title: "Ücretsiz Demo & Fiyatlandırma",
    description:
      "İşletmenize uygun çözümleri canlı demo üzerinden sunuyor ve kapsam planlamasını paylaşıyoruz.",
    icon: MonitorPlay,
  },
  {
    num: "03",
    title: "Yazılım Geliştirme & Entegrasyon",
    description:
      "Web, mobil, CRM ve ERP altyapılarını geliştirerek mevcut sistemlerinize entegre ediyoruz.",
    icon: Blocks,
  },
  {
    num: "04",
    title: "Yayına Alma & Sürekli Destek",
    description:
      "Projeyi canlı ortama taşıyor, performans takibi ve teknik destek süreçlerini yönetiyoruz.",
    icon: Rocket,
  },
];

function HorizontalConnector() {
  return (
    <div
      className="hidden shrink-0 items-center self-center px-1 lg:flex lg:w-10 xl:w-14"
      aria-hidden
    >
      <div className="how-we-work-line-h h-[2px] w-full rounded-full shadow-[0_0_12px_color-mix(in_oklab,var(--ege-sea)_35%,transparent)]" />
    </div>
  );
}

function VerticalConnector() {
  return (
    <div className="flex justify-center py-2 lg:hidden" aria-hidden>
      <div className="how-we-work-line-v h-14 w-[2px] rounded-full shadow-[0_0_10px_color-mix(in_oklab,var(--ege-sea)_30%,transparent)]" />
    </div>
  );
}

export function HowWeWork() {
  return (
    <section
      id="nasil-calisiyoruz"
      aria-labelledby="nasil-calisiyoruz-baslik"
      className="relative overflow-hidden border-t border-border bg-secondary py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-site opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--ege-sea)_18%,transparent),transparent_65%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="nasil-calisiyoruz-baslik"
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            İşletmenizin ihtiyaçlarını analiz ediyor, size özel yazılım çözümlerini
            uçtan uca geliştiriyor ve sürdürülebilir destek sunuyoruz.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl lg:mt-20">
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-between">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <Fragment key={step.num}>
                  {index > 0 ? <VerticalConnector /> : null}
                  <article className="group relative flex min-w-0 flex-1 flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-none ring-1 ring-border/60 backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-1 hover:border-ege-sea/25 hover:shadow-[0_24px_48px_-28px_color-mix(in_oklab,var(--ege-sea)_40%,transparent)] hover:ring-ege-sea/20 sm:p-8 lg:text-center">
                    <div className="flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0">
                      <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-ege-sea/20 to-muted text-ege-sea-bright ring-1 ring-ege-sea/20 transition duration-300 group-hover:from-ege-sea/30 group-hover:shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--ege-sea)_45%,transparent)] sm:size-[4.5rem]">
                        <Icon
                          className="size-8 stroke-[1.25] sm:size-9"
                          strokeWidth={1.25}
                          aria-hidden
                        />
                      </div>
                      <div className="min-w-0 flex-1 lg:mt-6">
                        <p className="font-mono text-xs font-medium tracking-[0.22em] text-ege-sea-light/85">
                          {step.num}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-left text-[15px] leading-relaxed text-muted-foreground lg:text-center">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                  {index < STEPS.length - 1 ? <HorizontalConnector /> : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
