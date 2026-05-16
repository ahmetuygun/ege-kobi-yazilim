import { Award, Lightbulb, ShieldCheck, type LucideIcon } from "lucide-react";

type Principle = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: Award,
    title: "Kalite",
    description:
      "%85+ test kapsamı, otomatik QA süreçleri ve canlı KPI doğrulaması ile her sürümü güvenle çıkarırız.",
  },
  {
    icon: Lightbulb,
    title: "İnovasyon",
    description:
      "Yapay zeka, IoT ve modern bulut mimarileri ile geleneksel sektörlere geleceğin araçlarını taşırız.",
  },
  {
    icon: ShieldCheck,
    title: "Güven",
    description:
      "KVKK uyumlu süreçler, sıfır güven mimarisi ve şeffaf raporlama; verileriniz her zaman sizin kontrolünüzde.",
  },
];

export function Principles() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="relative w-full py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            İlkelerimiz
          </p>
          <h2
            id="principles-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Her satır kodun arkasındaki üç söz
          </h2>
        </div>

        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-3"
        >
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <li key={title} className="bg-card p-8">
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
