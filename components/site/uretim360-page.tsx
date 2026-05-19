import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  URETIM_IMAGE_1,
  URETIM_IMAGE_2,
  URETIM_IMAGE_3,
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
  "Gerçek zamanlı üretim takibi",
  "Makine ve hat bazlı performans analizi",
  "İş emri ve üretim planlama yönetimi",
  "Vardiya yönetimi",
  "OEE (Overall Equipment Effectiveness) ölçümü",
  "Arıza ve duruş yönetimi",
  "Operatör performans takibi",
  "IoT destekli makine entegrasyonları",
] as const;

const SECTION_2_BULLETS = [
  "Dijital kalite kontrol süreçleri",
  "Ürün ve parti bazlı izlenebilirlik",
  "Hata ve uygunsuzluk yönetimi",
  "AI destekli kalite analizleri",
  "Kalite raporlama dashboardları",
  "Denetim ve sertifikasyon süreç yönetimi",
  "Üretim geçmişi kayıt sistemi",
  "Otomatik kalite bildirimleri",
] as const;

const SECTION_3_BULLETS = [
  "Enerji tüketim izleme",
  "Makine bazlı enerji analizleri",
  "Predictive maintenance (öngörücü bakım)",
  "Arıza tahminleme sistemleri",
  "Karbon ayak izi raporlama",
  "ESG ve sürdürülebilirlik dashboardları",
  "IoT sensör entegrasyonu",
  "Bakım planlama ve servis yönetimi",
] as const;

const VALUE_BULLETS = [
  "Üretim süreçleri optimize edilir",
  "Operasyonel verimlilik artırılır",
  "Plansız duruşlar azaltılır",
  "Kalite standartları güçlendirilir",
  "Enerji maliyetleri kontrol altına alınır",
  "Veri tabanlı karar alma süreçleri hızlanır",
  "Fabrika genelinde tam görünürlük sağlanır",
] as const;

export function Uretim360PageContent() {
  return (
    <>
      <section className="relative isolate min-h-[38vh] overflow-hidden border-b border-white/10 sm:min-h-[42vh]">
        <Image
          src={URETIM_IMAGE_1}
          alt="Modern üretim tesisi ve hat"
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
            Üretim360
          </p>
          <h1 className="mt-2 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Üretim360 ile Modern Üretim Sektörünün En Kritik 3 İhtiyacına Uçtan Uca
            Çözüm
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-300">
          Günümüz üretim sektöründe rekabet artık yalnızca üretim kapasitesiyle değil;
          hız, verimlilik, izlenebilirlik ve veri yönetimiyle şekilleniyor. Fabrikalar
          için operasyonel süreçlerin dijitalleşmesi, maliyetlerin azaltılması ve
          sürdürülebilir üretim altyapısının kurulması kritik önem taşıyor.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          <strong className="font-semibold text-white">Üretim360</strong>, üretim
          sektörünün en önemli ihtiyaçlarını tek platform altında birleştiren yeni
          nesil dijital üretim yönetim çözümüdür.
        </p>
      </div>

      <section className="border-t border-white/10 bg-ege-surface-mid py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <Image
              src={URETIM_IMAGE_1}
              alt="Üretim planlama ve hat verimliliği"
              fill
              unoptimized
              className="object-cover object-[center_45%]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              1. Üretim Planlama ve Operasyonel Verimlilik Yönetimi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Üretim tesislerinde plansız duruşlar, düşük kapasite kullanımı ve manuel
              süreçler operasyonel kayıpların en büyük nedenleri arasında yer alır.
              Gerçek zamanlı üretim görünürlüğü olmayan işletmeler hızlı karar almakta
              zorlanır.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
              Üretim360 bu süreci nasıl yönetir?
            </p>
            <BulletList items={SECTION_1_BULLETS} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
              Üretim360 sayesinde yöneticiler fabrikanın tüm üretim süreçlerini tek
              panel üzerinden anlık olarak takip edebilir; verimsizlik noktalarını
              hızla tespit ederek operasyonel performansı artırabilir.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              2. Kalite Kontrol ve İzlenebilirlik Yönetimi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Üretim sektöründe kalite sorunları yalnızca maliyet değil, aynı zamanda
              marka güvenilirliği açısından da büyük risk oluşturur. Üretim
              süreçlerinin izlenebilir olması hem müşteri memnuniyeti hem de
              uluslararası standartlara uyum açısından kritik hale gelmiştir.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
              Üretim360 bu süreci nasıl yönetir?
            </p>
            <BulletList items={SECTION_2_BULLETS} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
              Üretim360 ile kalite süreçleri manuel yapıdan çıkarılarak merkezi ve
              veri odaklı bir sisteme dönüştürülür.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:order-2">
            <Image
              src={URETIM_IMAGE_2}
              alt="Kalite ve izlenebilirlik"
              fill
              unoptimized
              className="object-cover object-[50%_center]"
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
                src={URETIM_IMAGE_3}
                alt="Enerji, bakım ve sürdürülebilirlik"
                fill
                unoptimized
                className="object-cover object-[40%_center]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                3. Enerji, Bakım ve Sürdürülebilirlik Yönetimi
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
                Artan enerji maliyetleri ve sürdürülebilirlik baskısı üretim
                tesislerinin en önemli gündemlerinden biri haline gelmiştir. Özellikle
                enerji yoğun çalışan tesislerde anlık veri takibi ve bakım
                optimizasyonu büyük avantaj sağlar.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
                Üretim360 bu süreci nasıl yönetir?
              </p>
              <BulletList items={SECTION_3_BULLETS} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
                Üretim360 sayesinde işletmeler yalnızca maliyetlerini düşürmekle kalmaz;
                aynı zamanda sürdürülebilir ve kesintisiz üretim altyapısı oluşturur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Üretim360&apos;un Sağladığı Katma Değer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Üretim360, üretim tesislerinin ihtiyaç duyduğu tüm kritik operasyonları tek
            merkezde birleştiren kapsamlı bir dijital dönüşüm platformudur.
          </p>
          <p className="mt-4 font-medium text-white">Tek platform üzerinden:</p>
          <BulletList items={VALUE_BULLETS} />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-400">
            Üretim360, modern üretim tesislerinin ihtiyaç duyduğu çevik, verimli ve
            sürdürülebilir operasyon altyapısını geleceğe taşır.
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
