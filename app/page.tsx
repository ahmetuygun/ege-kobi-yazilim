import type { Metadata } from "next";

import { ClosingCta } from "@/components/site/closing-cta";
import { DigitalTransformationSolutions } from "@/components/site/digital-transformation-solutions";
import { FeaturedProjects } from "@/components/site/featured-projects";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { SectorSolutions } from "@/components/site/sector-solutions";
import { SuccessStories } from "@/components/site/success-stories";
import { ValuesRow } from "@/components/site/values-row";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_TEL,
  ORGANIZATION_POSTAL_ADDRESS,
} from "@/lib/site-contact";
import { DEFAULT_OG_IMAGE, ORGANIZATION_LOGO_URL, SITE_ORIGIN } from "@/lib/site-assets";
import {
  EGE_LOCAL_SEARCH_KEYWORDS,
  EGE_PROVINCE_NAMES,
  EGE_REGION_LABEL,
} from "@/lib/ege-local-seo-keywords";
import { LOCALE_TR, OG_IMAGE_PRESET, SITE_BRAND, SITE_LEGAL_NAME } from "@/lib/seo-metadata";

const homeDescription =
  "Tekstil360, Yapı360 ve Üretim360 ile sektörel yazılım; CRM, ERP, mobil, web ve bulut ile KOBİ dijital dönüşümü. Ege Bölgesi’nin tüm illeri ve ilçelerinde hizmet. Pamukkale Üniversitesi Teknokent, Denizli.";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_BRAND} | Tekstil, yapı, üretim yazılımı ve dijital dönüşüm | Denizli`,
  },
  description: homeDescription,
  keywords: [
    "EgeKOBİ ana sayfa",
    "Tekstil360",
    "Yapı360",
    "Üretim360",
    "dijital dönüşüm çözümleri",
    "KOBİ yazılım Denizli",
    "Pamukkale Teknokent yazılım",
    "tekstil atölyesi programı",
    "inşaat şantiye yazılımı",
    "fabrika üretim takip",
    ...EGE_LOCAL_SEARCH_KEYWORDS,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: LOCALE_TR,
    url: SITE_ORIGIN,
    siteName: SITE_BRAND,
    title: `${SITE_BRAND} | Tekstil, yapı, üretim ve dijital dönüşüm`,
    description: homeDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        ...OG_IMAGE_PRESET,
        alt: `${SITE_BRAND} — sektörel ve kurumsal yazılım çözümleri`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_BRAND} | Tekstil, yapı, üretim ve dijital dönüşüm`,
    description: homeDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

const orgId = `${SITE_ORIGIN}/#organization`;
const websiteId = `${SITE_ORIGIN}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: SITE_LEGAL_NAME,
      alternateName: [SITE_BRAND, "Ege360"],
      url: SITE_ORIGIN,
      logo: ORGANIZATION_LOGO_URL,
      description: homeDescription,
      address: ORGANIZATION_POSTAL_ADDRESS,
      areaServed: [EGE_REGION_LABEL, "Türkiye", ...EGE_PROVINCE_NAMES],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE_TEL,
        areaServed: [EGE_REGION_LABEL, "Türkiye", ...EGE_PROVINCE_NAMES],
        availableLanguage: ["Turkish"],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_BRAND,
      url: SITE_ORIGIN,
      inLanguage: "tr-TR",
      publisher: { "@id": orgId },
      description: homeDescription,
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main" className="flex flex-col bg-ege-surface-deep">
        <Hero />
        <SectorSolutions />
        <DigitalTransformationSolutions />
        <FeaturedProjects />
        <SuccessStories />
        <ValuesRow />
        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
