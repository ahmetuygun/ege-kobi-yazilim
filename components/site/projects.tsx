import Link from "next/link";
import { ArrowUpRight, Building2, Factory } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  brand: string;
  tagline: string;
  description: string;
  sector: string;
  metrics: { label: string; value: string }[];
  icon: typeof Factory;
};

const PROJECTS: Project[] = [
  {
    brand: "yapı360",
    tagline: "Endüstriyel İnşaat İşletim Sistemi",
    description:
      "Şantiye yönetimi, hakediş, iş programı ve saha raporlamasını tek panelde birleştiren, mobil öncelikli inşaat platformu.",
    sector: "İnşaat & Taahhüt",
    metrics: [
      { label: "Aktif proje", value: "24" },
      { label: "Toplam bütçe", value: "₺285M" },
    ],
    icon: Building2,
  },
  {
    brand: "tekstil360",
    tagline: "Üretim Hattı Performans Paneli",
    description:
      "Makine durumlarını gerçek zamanlı izleyen, sipariş - üretim - sevkiyat akışını otomatize eden tekstil odaklı SaaS çözümü.",
    sector: "Üretim & Tekstil",
    metrics: [
      { label: "Üretim verimi", value: "85%" },
      { label: "Açık sipariş", value: "18" },
    ],
    icon: Factory,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative w-full py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Projelerimiz
            </p>
            <h2
              id="projects-title"
              className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Sektör liderlerinin tercih ettiği 360° ürünler
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tüm vakaları görüntüle
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {PROJECTS.map(({ icon: Icon, ...project }) => (
            <Card
              key={project.brand}
              className="glass-card group relative overflow-hidden p-0"
            >
              <CardContent className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/5 text-foreground ring-1 ring-white/10">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                        {project.brand}
                      </h3>
                      <Badge
                        variant="outline"
                        className="mt-1 border-border/60 text-xs text-muted-foreground"
                      >
                        {project.sector}
                      </Badge>
                    </div>
                  </div>
                  <Link
                    href="#contact"
                    aria-label={`${project.brand} hakkında bilgi al`}
                    className="inline-flex size-9 items-center justify-center rounded-full bg-white/5 text-foreground ring-1 ring-white/10 transition-colors hover:bg-foreground hover:text-background"
                  >
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>

                <div>
                  <p className="text-base font-medium text-foreground">
                    {project.tagline}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <dl className="grid grid-cols-2 gap-4 border-t border-border/40 pt-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-2xl font-semibold text-foreground">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
