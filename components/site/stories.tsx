import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function Stories() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-title"
      className="relative w-full py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Başarı Hikayeleri
          </p>
          <h2
            id="stories-title"
            className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Müşterilerimizin sözünden bizi tanıyın
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="glass-card relative overflow-hidden p-0">
            <CardContent className="p-8 sm:p-10">
              <Quote
                aria-hidden
                className="size-9 text-muted-foreground/70"
              />
              <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground">
                &ldquo;yapı360 ile şantiyelerimizin nakit akışını anlık takip
                edebiliyoruz. Hakediş süreçleri 3 haftadan 4 güne indi.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden
                  className="grid size-11 place-items-center rounded-full bg-white/10 font-semibold text-foreground ring-1 ring-white/10"
                >
                  MD
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Mehmet Demir
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Genel Müdür · Demir İnşaat Taahhüt
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card relative overflow-hidden p-0">
            <CardContent className="p-8 sm:p-10">
              <Quote
                aria-hidden
                className="size-9 text-muted-foreground/70"
              />
              <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground">
                &ldquo;tekstil360 sayesinde makine duruşları %42 azaldı,
                üretim planlama tek panelden yapılır hale geldi. Çok hızlı
                entegre oldular.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  aria-hidden
                  className="grid size-11 place-items-center rounded-full bg-white/10 font-semibold text-foreground ring-1 ring-white/10"
                >
                  AY
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Ayşe Yıldız
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Üretim Direktörü · Ege Tekstil A.Ş.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
