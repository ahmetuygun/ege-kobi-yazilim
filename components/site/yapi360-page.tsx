import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { YAPI_IMAGE_1, YAPI_IMAGE_2, YAPI_IMAGE_3 } from "@/lib/site-assets";

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
  "Gantt ve kritik yol bazlı iş programı senkronizasyonu",
  "Günlük / haftalık ilerleme ve imalat yüzdesi raporları",
  "Şantiye günlüğü, olay kaydı ve fotoğraflı kanıt zinciri",
  "Ekip, vardiya ve alt yüklenici koordinasyon panosu",
  "Metraj ve imalat kalemleriyle sahada veri girişi",
  "Mobil onay akışları ve imza / yetki matrisi",
  "Plan–gerçekleşen sapma uyarıları ve risk kayıtları",
] as const;

const SECTION_2_BULLETS = [
  "Bütçe kalemleri ve revizyon versiyonlama",
  "Teklif karşılaştırma ve birim fiyat analitiği",
  "Sözleşme maddeleri ile hakediş satır eşlemesi",
  "Teminat, kesinti ve ek iş süreçlerinin izlenebilirliği",
  "Satınalma talebi–teklif–sipariş zinciri ve onay limitleri",
  "Alt yüklenici performans ve termin skorları",
  "Nakit akışı ve maliyet merkezi raporları",
] as const;

const SECTION_3_BULLETS = [
  "İş güvenliği risk değerlendirme ve KYT dijital formları",
  "Saha denetimleri, düzeltici faaliyet ve takip listeleri",
  "Kalite planı, deney ve kabul kayıtları",
  "İSG eğitimleri, belge yenileme ve yetkinlik takibi",
  "Yönetmelik ve sözleşme uygunluk kontrol listeleri",
  "Kaza / ramak kala olay kayıt ve kök neden analizi",
  "Denetim ve müşteri denetimine hazır dokümantasyon paketleri",
] as const;

const VALUE_BULLETS = [
  "Şantiye ile merkez arasında tek doğruluk kaynağı oluşur",
  "Gecikme ve maliyet aşımı riskleri erken sinyalleştirilir",
  "Hakediş ve sözleşme uyuşmazlıkları azaltılır",
  "İSG ve kalite süreçleri ölçülebilir ve denetlenebilir hale gelir",
  "Kurumsal hafıza belgelerde saklanır; personel değişiminden etkilenmez",
  "Yatırımcı ve paydaş raporlaması standartlaşır",
] as const;

export function Yapi360PageContent() {
  return (
    <>
      <section className="relative isolate min-h-[38vh] overflow-hidden border-b border-white/10 sm:min-h-[42vh]">
        <Image
          src={YAPI_IMAGE_1}
          alt="İnşaat şantiyesi ve taşıyıcı yapı"
          fill
          priority
          unoptimized
          className="object-cover object-[center_45%]"
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
            Yapı360
          </p>
          <h1 className="mt-2 text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Yapı360 ile yapı sektörünün üç temel ihtiyacına entegre ve ölçülebilir
            çözüm
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-300">
          Türkiye yapı sektörü; artan malzeme ve finansman maliyetleri, sıkılaşan
          sözleşme koşulları, denetim baskısı ve nitelikli iş gücü kısıtı altında
          operasyonlarını sürdürmektedir. Orta ve büyük ölçekli müteahhitlik
          firmalarında verinin dağınık olması; iş programı sapmalarını,
          hakediş gecikmelerini ve sahadaki iş güvenliği risklerini büyüten temel
          faktörler arasındadır.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          <strong className="font-semibold text-white">Yapı360</strong>, yapı
          sektöründe en sık karşılaşılan üç kritik alanı tek platformda birleştiren;
          şantiye operasyonlarından maliyet ve sözleşme yönetimine, iş güvenliği ve
          uyum süreçlerine kadar uçtan uca dijitalleşmeyi hedefleyen kurumsal bir
          çözüm mimarisidir.
        </p>
      </div>

      <section className="border-t border-white/10 bg-ege-surface-mid py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
            <Image
              src={YAPI_IMAGE_2}
              alt="Şantiye planlama ve koordinasyon"
              fill
              unoptimized
              className="object-cover object-[center_40%]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              1. Şantiye operasyonları ve iş programı yönetimi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Planlanan ile gerçekleşen arasındaki farkın zamanında görülmemesi;
              kritik imalatların gecikmesine, kaynak israfına ve taşeron
              uyumsuzluklarına yol açar. Yapı360, iş programını sahayla sürekli
              hizalar; karar alıcıların tek ekranda güncel durumu görmesini
              sağlar.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
              Yapı360 bu alanı nasıl kapsar?
            </p>
            <BulletList items={SECTION_1_BULLETS} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
              Sonuç olarak şantiye yöneticileri; ilerlemeyi ölçülebilir biçimde
              raporlar, sapmaları erken müdahale edilebilir hale getirir ve
              paydaşlarla şeffaf bir iletişim zemini oluşturur.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              2. Maliyet, teklif, sözleşme ve tedarik yönetimi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
              Birim fiyat dalgalanmaları, sözleşme maddelerinin sahada yorum
              farklılıkları ve hakediş süreçlerinin yavaşlaması nakit akışını
              doğrudan etkiler. Yapı360, finans ve saha verisini aynı çatı altında
              toplayarak kontrol gücünü artırır.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
              Yapı360 bu alanı nasıl kapsar?
            </p>
            <BulletList items={SECTION_2_BULLETS} />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
              Böylece yönetim kurulu ve proje finansı; tekliften kapanışa kadar
              izlenebilir bir maliyet disiplinine kavuşur, sözleşme riskleri
              azaltılır.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:order-2">
            <Image
              src={YAPI_IMAGE_3}
              alt="Maliyet ve sözleşme yönetimi"
              fill
              unoptimized
              className="object-cover object-[55%_center]"
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
                src={YAPI_IMAGE_1}
                alt="İş güvenliği ve saha denetimi"
                fill
                unoptimized
                className="object-cover object-[35%_center]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                3. İş güvenliği, kalite ve regülasyon uyumu
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">
                Saha kazaları, denetim bulguları ve eksik belge kaynaklı duruşlar
                hem itibar hem de mali sonuç doğurur. Yapı360; İSG ve kalite
                süreçlerini prosedürle bütünleştirir, denetime hazır kayıt üretir.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ege-sea-light">
                Yapı360 bu alanı nasıl kapsar?
              </p>
              <BulletList items={SECTION_3_BULLETS} />
              <p className="mt-6 text-[15px] leading-relaxed text-slate-400">
                Kurumsal standartlarla uyumlu, tekrarlanabilir ve denetlenebilir
                bir güvenlik ve kalite kültürü oluşturulmasına katkı sağlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Yapı360&apos;un kurumsal katma değeri
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Yapı360; yalnızca bir yazılım aracı değil, proje yönetişimi için ortak
            bir veri modeli sunar. Şantiye, finans, satınalma ve İSG ekipleri aynı
            referanslar üzerinden çalışır; tekil tablolar ve dağınık dosya
            paylaşımlarından kaynaklanan bilgi asimetrisi azaltılır.
          </p>
          <p className="mt-4 font-medium text-white">Tek platform üzerinden:</p>
          <BulletList items={VALUE_BULLETS} />
          <p className="mt-8 text-[15px] leading-relaxed text-slate-400">
            Yapı360, yapı sektörünün ihtiyaç duyduğu disiplin, şeffaflık ve ölçeklenebilir
            operasyon yapısını destekleyecek şekilde tasarlanmıştır.
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
