import { ClosingCta } from "@/components/site/closing-cta";
import { FeaturedProjects } from "@/components/site/featured-projects";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { SectorSolutions } from "@/components/site/sector-solutions";
import { SuccessStories } from "@/components/site/success-stories";
import { ValuesRow } from "@/components/site/values-row";
import { ORGANIZATION_LOGO_URL, SITE_ORIGIN } from "@/lib/site-assets";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ege KOBİ Yazılım",
  alternateName: ["EgeKOBİ", "Ege360"],
  url: SITE_ORIGIN,
  logo: ORGANIZATION_LOGO_URL,
  description:
    "Tekstil, yapı ve üretim işletmeleri için yazılım: sipariş, stok, şantiye ve raporlama. EgeKOBİ.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İzmir",
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@egekobiyazilim.com",
    telephone: "+90-232-111-22-33",
    areaServed: "TR",
    availableLanguage: ["Turkish"],
  },
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
        <FeaturedProjects />
        <SuccessStories />
        <ValuesRow />
        <ClosingCta />
      </main>

      <Footer />
    </>
  );
}
