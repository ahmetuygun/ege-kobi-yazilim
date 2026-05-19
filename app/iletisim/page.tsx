import type { Metadata } from "next";

import { Footer } from "@/components/site/footer";
import { IletisimPageContent } from "@/components/site/iletisim-page";
import { Navbar } from "@/components/site/navbar";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { ILETISIM_OFFICE_IMAGE } from "@/lib/site-assets";

const description =
  "EgeKOBİ iletişim: Pamukkale Üniversitesi Teknokent, Denizli. Teklif, demo ve iş birliği için e-posta ve telefon bilgileri bu sayfada. Ege Bölgesi illeri ve ilçelerinden de ulaşabilirsiniz.";

export const metadata: Metadata = buildPageMetadata({
  path: "/iletisim",
  title: "İletişim",
  description,
  keywords: [
    "EgeKOBİ iletişim",
    "Pamukkale Teknokent yazılım",
    "Denizli yazılım iletişim",
    "KOBİ yazılım teklif",
    "demo talebi",
    "EgeKOBİ adres",
  ],
  ogImage: {
    url: ILETISIM_OFFICE_IMAGE,
    alt: "EgeKOBİ — Pamukkale Teknokent ofis",
  },
  ogType: "website",
});

export default function IletisimPage() {
  return (
    <>
      <Navbar />

      <main id="main" className="flex min-h-svh flex-col bg-ege-surface-deep">
        <IletisimPageContent />
      </main>

      <Footer />
    </>
  );
}
