import type { Metadata } from "next";

import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Uretim360PageContent } from "@/components/site/uretim360-page";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { URETIM_IMAGE_1 } from "@/lib/site-assets";

const description =
  "Üretim360: üretim planlama, OEE ve hat verimliliği, kalite ve izlenebilirlik, enerji–bakım–ESG. Fabrika ve KOBİ üretim tesisleri için dijital üretim yönetimi platformu. Hizmet alanı: Ege Bölgesi illeri ve ilçeleri.";

export const metadata: Metadata = buildPageMetadata({
  path: "/uretim",
  title: "Üretim360",
  description,
  keywords: [
    "Üretim360",
    "üretim yazılımı",
    "OEE yazılımı",
    "fabrika dijitalleşme",
    "üretim planlama",
    "kalite izlenebilirlik",
    "enerji yönetimi fabrika",
    "KOBİ üretim yazılımı",
    "sanayi 4.0 KOBİ",
  ],
  ogImage: {
    url: URETIM_IMAGE_1,
    alt: "Üretim360 — dijital üretim yönetimi",
  },
  ogType: "article",
});

export default function UretimPage() {
  return (
    <>
      <Navbar />

      <main id="main" className="flex min-h-svh flex-col bg-ege-surface-deep">
        <Uretim360PageContent />
        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
