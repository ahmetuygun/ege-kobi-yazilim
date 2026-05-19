import type { Metadata } from "next";

import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Tekstil360PageContent } from "@/components/site/tekstil360-page";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { TEKSTIL_IMAGE_1 } from "@/lib/site-assets";

const description =
  "Tekstil360: Ege tekstili için üretim planlama, kalite ve izlenebilirlik, enerji ve sürdürülebilirlik. Fason, sipariş ve stok tek ekranda; KOBİ’ye uygun dijital fabrika yönetimi. Hizmet alanı: Ege Bölgesi illeri ve ilçeleri.";

export const metadata: Metadata = buildPageMetadata({
  path: "/tekstil",
  title: "Tekstil360",
  description,
  keywords: [
    "Tekstil360",
    "tekstil yazılımı",
    "tekstil atölyesi programı",
    "fason takip yazılımı",
    "kumaş stok yönetimi",
    "üretim planlama tekstil",
    "tekstil izlenebilirlik",
    "KOBİ tekstil yazılımı",
    "Denizli tekstil yazılım",
  ],
  ogImage: {
    url: TEKSTIL_IMAGE_1,
    alt: "Tekstil360 — tekstil üretim yönetimi",
  },
  ogType: "article",
});

export default function TekstilPage() {
  return (
    <>
      <Navbar />

      <main id="main" className="flex min-h-svh flex-col bg-ege-surface-deep">
        <Tekstil360PageContent />
        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
