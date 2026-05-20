import { Building2, Factory, Shirt, Check } from "lucide-react";
import Link from "next/link";

const SOLUTIONS = [
  {
    name: "Üretim360",
    icon: Factory,
    blurb:
      "Planlama, OEE ve izlenebilirlikten enerji ve bakıma kadar fabrika operasyonlarını tek platformda toplayın.",
    items: [
      "Üretim planı ve hat verimliliği",
      "Kalite ve parti izlenebilirliği",
      "Enerji, bakım ve sürdürülebilirlik",
    ],
    detailHref: "/uretim" as const,
    detailLabel: "Üretim360’u inceleyin" as const,
  },
  {
    name: "Tekstil360",
    icon: Shirt,
    blurb:
      "Tekstil üretiminde sipariş, fason, stok ve günlük özetleri tek ekrandan yönetin.",
    items: [
      "Fason ve sipariş takibi",
      "Kumaş / stok kontrolü",
      "Günlük üretim özeti",
    ],
    detailHref: "/tekstil" as const,
    detailLabel: "Tekstil360’u inceleyin" as const,
  },
  {
    name: "Yapı360",
    icon: Building2,
    blurb:
      "Şantiye operasyonlarından maliyet ve sözleşmeye, İSG ve uyuma kadar yapı projelerinizi disipline edin.",
    items: [
      "İş programı ve saha koordinasyonu",
      "Teklif, hakediş ve tedarik",
      "İSG ve denetime hazır kayıt",
    ],
    detailHref: "/yapi" as const,
    detailLabel: "Yapı360’u inceleyin" as const,
  },
] as const;

export function SectorSolutions() {
  return (
    <section
      id="cozumler"
      aria-labelledby="cozumler-baslik"
      className="relative border-t border-border bg-secondary py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ege-sea/35 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cozumler-baslik"
            className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            Sektöre Özel Dijital Çözümler
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Üretim, tekstil ve yapı için geliştirdiğimiz üç ürün hattı. Her kartta
            o çözümün odak başlıklarını özetledik.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SOLUTIONS.map((sector) => {
            const { name, icon: Icon, blurb, items } = sector;
            const detailHref =
              "detailHref" in sector ? sector.detailHref : undefined;
            const detailLabel =
              "detailLabel" in sector ? sector.detailLabel : "Detayı inceleyin";
            return (
            <article
              key={name}
              className="surface-card flex flex-col rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-0.5 hover:border-ege-sea/25"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-ege-sea/15 text-ege-sea-bright ring-1 ring-ege-sea/25">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{name}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {blurb}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-muted-foreground">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-ege-sea-light"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {detailHref ? (
                <Link
                  href={detailHref}
                  className="mt-6 text-sm font-semibold text-ege-sea-light underline-offset-4 hover:text-ege-sea-bright hover:underline"
                >
                  {detailLabel}
                </Link>
              ) : null}
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
