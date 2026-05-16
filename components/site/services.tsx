import { Factory, HardHat, Shirt, type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Shirt,
    title: "Tekstil",
    description:
      "Üretim hattı izleme, makine verimi ve sipariş planlamasını tek panele bağlayan tekstil odaklı SaaS çözümleri.",
  },
  {
    icon: HardHat,
    title: "İnşaat",
    description:
      "Şantiye yönetimi, hakediş ve iş programı süreçlerini mobil öncelikli olarak dijitalleştiren inşaat platformu.",
  },
  {
    icon: Factory,
    title: "Sanayi",
    description:
      "Üretim verisinden öngörüsel bakım ve verimlilik raporlamasına; uçtan uca endüstriyel veri ekosistemi.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative w-full py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Uzmanlık Alanlarımız
          </p>
          <h2
            id="services-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Üç sektörde, derinlemesine uzmanlık
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            Tekstil, inşaat ve sanayide sahadan yönetime kadar tüm operasyonu
            kapsayan, sektöre özel 360° SaaS çözümleri üretiyoruz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="glass-card group relative overflow-hidden transition-all hover:-translate-y-1 hover:glow-ring"
            >
              <CardHeader>
                <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[15px] leading-relaxed text-muted-foreground">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
