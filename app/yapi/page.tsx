import type { Metadata } from "next";

import { ClosingCta } from "@/components/site/closing-cta";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { Yapi360PageContent } from "@/components/site/yapi360-page";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { YAPI_IMAGE_1 } from "@/lib/site-assets";

const description =
  "Yapı360: şantiye ve iş programı, maliyet–teklif–hakediş, İSG ve uyum. Müteahhit ve taşeron için ölçülebilir yapı sektörü yazılımı ve dijital şantiye yönetimi. Hizmet alanı: Ege Bölgesi illeri ve ilçeleri.";

export const metadata: Metadata = buildPageMetadata({
  path: "/yapi",
  title: "Yapı360",
  description,
  keywords: [
    "Yapı360",
    "inşaat yazılımı",
    "şantiye takip programı",
    "iş programı yazılımı",
    "hakediş yazılımı",
    "İSG yazılımı",
    "yapı sektörü ERP",
    "müteahhit yazılımı",
    "KOBİ inşaat yazılımı",
  ],
  ogImage: {
    url: YAPI_IMAGE_1,
    alt: "Yapı360 — inşaat ve şantiye yönetimi",
  },
  ogType: "article",
});

export default function YapiPage() {
  return (
    <>
      <Navbar />

      <main id="main" className="flex min-h-svh flex-col bg-background">
        <Yapi360PageContent />
        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
