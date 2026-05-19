import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  TEKSTIL_IMAGE_1,
  TEKSTIL_IMAGE_2,
  TEKSTIL_IMAGE_3,
} from "@/lib/site-assets";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Check
            className="mt-0.5 size-4 shrink-0 text-ege-sea-light"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const SECTION_1_BULLETS = [
  "Gerçek zamanlı üretim izleme",
  "Makine ve hat bazlı performans analizi",
  "Operatör verimlilik ölçümü",
  "Vardiya ve iş emri yönetimi",
  "Barkod / RFID destekli üretim akışı",
  "Fason atölye süreç takibi",
  "Anlık duruş ve fire analizi",
] as const;

const SECTION_2_BULLETS = [
  "Dijital kalite kontrol formları",
  "Top kumaş hata takibi",
  "Lot ve üretim geçmişi izlenebilirliği",
  "AI destekli görsel hata analizi",
  "Laboratuvar reçete entegrasyonu",
  "Renk standardizasyon yönetimi",
  "Kalite raporlama ve müşteri dokümantasyonu",
] as const;

const SECTION_3_BULLETS = [
  "Anlık enerji tüketim takibi",
  "Su, buhar ve elektrik analizleri",
  "Makine bazlı enerji verimlilik ölçümü",
  "Karbon ayak izi raporlama",
  "ESG ve sürdürülebilirlik dashboardları",
  "Otomatik çevresel performans raporları",
  "IoT sensör entegrasyonları",
] as const;

const VALUE_BULLETS = [
  "Üretim süreçleri hızlanır",
  "Operasyonel maliyetler azalır",
  "İnsan kaynaklı hatalar minimize edilir",
  "Veri tabanlı karar alma güçlenir",
  "İhracat uyumluluğu kolaylaşır",
  "Fabrika genelinde tam görünürlük sağlanır",
] as const;

export function Tekstil360PageContent() {
  return (
    <>
      <section className="relative isolate min-h-[38vh] overflow-hidden border-b border-white/10 sm:min-h-[42vh]">
        <Image
          src={TEKSTIL_IMAGE_1}
          alt="Tekstil üretim tesisi"
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ege-surface-deep via-ege-surface-deep/75 to-ege-surface-deep/35"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col justify-end px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mb-6 w-fit border-white/20 bg-black/30 text-white backdrop-blur hover:bg-white/10"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Ana sayfa
            </Link>
          </Button>
          <p className="text-sm font-semibold uppercase tracking-wider text-ege-sea-light">
            Tekstil360
          </p>
          <h1 className="mt-2 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Tekstil360 ile Ege Tekstil Sanayisinin Kritik 3 İhtiyacına Uçtan Uca
            Çözüm
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-300">
          Ege Bölgesi tekstil üreticileri bugün yalnızca üretim yapmakla değil;
          hız, izlenebilirlik, maliyet kontrolü ve sürdürülebilirlik baskısıyla da
          mücadele ediyor. Özellikle ihracat odaklı çalışan üreticiler için
          dijital dönüşüm artık bir tercih değil, operasyonel zorunluluk haline
          geldi.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Tekstil360, tekstil sektörünün en kritik üç ihtiyacını tek platformda
          birleştiren yeni nesil üretim yönetim çözümüdür.
        </p>
      </div>

      <section className="border-t border-white/10 bg-ege-surface-mid py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <Image
              src={TEKSTIL_IMAGE_2}
              alt="Tekstil üretim ve izleme"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              1. Üretim planlama ve anlık fabrika takibi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Tekstil sektöründe geciken terminler, plansız kapasite kullanımı ve
              manuel takip süreçleri ciddi maliyet oluşturur. Özellikle örme,
              boya-terbiye ve konfeksiyon operasyonlarında üretim akışının gerçek
              zamanlı yönetilmesi kritik öneme sahiptir.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
              Tekstil360 bu süreci nasıl yönetir?
            </p>
            <BulletList items={SECTION_1_BULLETS} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
              Tekstil360 sayesinde üretim yöneticileri fabrikanın tüm operasyonunu
              tek panel üzerinden canlı olarak takip edebilir; darboğazlar
              oluşmadan müdahale edebilir.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              2. Kalite kontrol ve izlenebilirlik yönetimi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Tekstil üretiminde küçük kalite hataları büyük ihracat kayıplarına
              dönüşebilir. Yanlış renk tonu, kumaş hataları veya üretim lotlarının
              takip edilememesi markalar için ciddi risk oluşturur.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
              Tekstil360 bu süreci nasıl yönetir?
            </p>
            <BulletList items={SECTION_2_BULLETS} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
              Tekstil360 ile tüm kalite süreçleri dijitalleşir; geçmiş üretim
              verilerine saniyeler içinde erişilebilir hale gelir.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:order-2">
            <Image
              src={TEKSTIL_IMAGE_3}
              alt="Tekstil kalite ve izlenebilirlik"
              fill
              unoptimized
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ege-surface-mid py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:aspect-[4/3]">
              <Image
                src={TEKSTIL_IMAGE_1}
                alt="Enerji ve sürdürülebilirlik"
                fill
                unoptimized
                className="object-cover object-[center_40%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                3. Enerji ve sürdürülebilirlik yönetimi
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
                Enerji maliyetleri tekstil sektörünün en büyük gider
                kalemlerinden biridir. Özellikle boya-terbiye tesislerinde elektrik,
                su ve buhar tüketiminin optimize edilmesi rekabet avantajı sağlar.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
                Aynı zamanda Avrupa pazarında sürdürülebilirlik raporlaması artık
                zorunlu hale gelmektedir.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
                Tekstil360 bu süreci nasıl yönetir?
              </p>
              <BulletList items={SECTION_3_BULLETS} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
                Tekstil360, fabrikaların hem operasyonel maliyetlerini düşürmesine
                hem de uluslararası sürdürülebilirlik standartlarına uyum
                sağlamasına yardımcı olur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Tekstil360&apos;un sağladığı katma değer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Tekstil360 yalnızca bir ERP sistemi değildir. Üretim, kalite, enerji ve
            sürdürülebilirlik süreçlerini tek merkezde birleştiren sektör odaklı
            bir dijital dönüşüm platformudur.
          </p>
          <p className="mt-4 font-medium text-white">Tek platform üzerinden:</p>
          <BulletList items={VALUE_BULLETS} />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-400">
            Tekstil360, modern tekstil üretiminin ihtiyaç duyduğu hız, şeffaflık
            ve sürdürülebilirlik altyapısını geleceğe hazır hale getirir.
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="xl"
              variant="outline"
              className="w-full rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 sm:w-auto"
            >
              <Link href="/">Ana sayfaya dön</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
