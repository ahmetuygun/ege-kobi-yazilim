import type { Metadata } from "next";

import { ClosingCta } from "@/components/site/closing-cta";
import { DijitalDonusumPageContent } from "@/components/site/dijital-donusum-page";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { DEFAULT_OG_IMAGE } from "@/lib/site-assets";

const description =
  "Kurumsal CRM ve ERP, mobil ve web uygulamalar, veri analitiği ve yapay zekâ projeleri, bulut ile sistem entegrasyonları. Mevcut altyapınızla uyumlu, ölçülebilir dijital dönüşüm; Ege Bölgesi başta olmak üzere Türkiye genelinde.";

export const metadata: Metadata = buildPageMetadata({
  path: "/dijital-donusum",
  title: "Dijital Dönüşüm Çözümleri",
  description,
  keywords: [
    "dijital dönüşüm",
    "CRM çözümleri",
    "ERP sistemleri",
    "mobil uygulama geliştirme",
    "web platform geliştirme",
    "yapay zekâ veri analitiği",
    "bulut entegrasyonu",
    "KOBİ dijital dönüşüm",
    "Denizli yazılım",
  ],
  ogImage: {
    url: DEFAULT_OG_IMAGE,
    alt: "EgeKOBİ — dijital dönüşüm çözümleri",
  },
  ogType: "website",
});

export default function DijitalDonusumRoutePage() {
  return (
    <>
      <Navbar />

      <main
        id="main"
        className="flex min-h-svh min-w-0 flex-col overflow-x-hidden bg-background"
      >
        <DijitalDonusumPageContent />
        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
