import { CallToAction } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Principles } from "@/components/site/principles";
import { Projects } from "@/components/site/projects";
import { Services } from "@/components/site/services";
import { Stories } from "@/components/site/stories";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ege KOBİ Yazılım",
  alternateName: "Ege360",
  url: "https://egekobiyazilim.com",
  logo: "https://egekobiyazilim.com/images/hero-bg.jpg",
  description:
    "KOBİ’ler için 360° SaaS ürünleri (yapı360, tekstil360) geliştiren, İzmir merkezli yazılım stüdyosu.",
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
    availableLanguage: ["Turkish", "English"],
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

      <main id="main" className="flex flex-col">
        <Hero />
        <Services />
        <Projects />
        <Stories />
        <Principles />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
