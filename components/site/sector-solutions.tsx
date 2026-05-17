import { Building2, Factory, Shirt, Check } from "lucide-react";

const SECTORS = [
  {
    name: "Tekstil",
    icon: Shirt,
    blurb:
      "Akıllı kumaş takibi ve sürdürülebilir üretim süreçleriyle atölyenizi güçlendirin.",
    items: ["Fason ve sipariş takibi", "Kumaş / stok kontrolü", "Günlük üretim özeti"],
  },
  {
    name: "İnşaat",
    icon: Building2,
    blurb:
      "Modern mühendislik ve saha disipliniyle şantiye işlerinizi düzenli tutun.",
    items: ["Şantiye ve iş programı", "Teklif ve malzeme", "Saha notları"],
  },
  {
    name: "Sanayi",
    icon: Factory,
    blurb:
      "Otomasyon ve hat verisiyle küçük-orta ölçekli üretimde verimi artırın.",
    items: ["Üretim planı", "Makine / vardiya takibi", "Depo hareketleri"],
  },
] as const;

export function SectorSolutions() {
  return (
    <section
      id="uzmanlik"
      aria-labelledby="uzmanlik-baslik"
      className="relative border-t border-white/10 bg-ege-surface-mid py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ege-sea/35 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="uzmanlik-baslik"
            className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Uzmanlık alanlarımız
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Üç ana sektörde derinleşiyoruz. Her kartta günlük iş dilinde özet
            maddeler bulabilirsiniz.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SECTORS.map(({ name, icon: Icon, blurb, items }) => (
            <article
              key={name}
              className="card-dark flex flex-col rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-0.5 hover:border-ege-sea/25"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-ege-sea/15 text-ege-sea-bright ring-1 ring-ege-sea/25">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-white">{name}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                {blurb}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-slate-300">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-ege-sea-light"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
