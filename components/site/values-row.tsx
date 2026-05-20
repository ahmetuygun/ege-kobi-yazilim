import { Award, Lightbulb, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "Kalite",
    text: "Her kurulumda kontrol listesi ve birlikte test. Sürprizleri baştan azaltırız.",
  },
  {
    icon: Lightbulb,
    title: "İnovasyon",
    text: "İşinizi büyüten, öğrenmesi kolay yenilikleri adım adım devreye alırız.",
  },
  {
    icon: ShieldCheck,
    title: "Güven",
    text: "Veriniz size ait kalır. Yetki ve yedekleme konularında açık konuşuruz.",
  },
] as const;

export function ValuesRow() {
  return (
    <section
      id="degerler"
      aria-labelledby="degerler-baslik"
      className="border-t border-border bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="degerler-baslik" className="sr-only">
          Değerlerimiz
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center md:text-left">
              <div className="mx-auto inline-flex size-14 items-center justify-center rounded-2xl bg-muted text-ege-sea-bright ring-1 ring-border md:mx-0">
                <Icon className="size-7" aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
