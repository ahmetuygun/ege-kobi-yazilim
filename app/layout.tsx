import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { DEFAULT_OG_IMAGE, SITE_ORIGIN, THEME_COLOR_DEEP_SURFACE } from "@/lib/site-assets";
import { LOCALE_TR, OG_IMAGE_PRESET, SITE_BRAND, SITE_LEGAL_NAME } from "@/lib/seo-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = SITE_ORIGIN;

const defaultDescription =
  "EgeKOBİ: Afyonkarahisar, Aydın, Denizli, İzmir, Kütahya, Manisa, Muğla ve Uşak illeri ile tüm ilçelerinde KOBİ ve kurumlara tekstil, inşaat, üretim yazılımı (Tekstil360, Yapı360, Üretim360), CRM, ERP, mobil ve web ile dijital dönüşüm. Pamukkale Teknokent, Denizli.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_BRAND,
  title: {
    default: `${SITE_BRAND} | KOBİ yazılım ve dijital dönüşüm | Denizli`,
    template: `%s · ${SITE_BRAND}`,
  },
  description: defaultDescription,
  keywords: [
    "EgeKOBİ",
    "Ege KOBİ Yazılım",
    "KOBİ yazılım",
    "tekstil yazılımı",
    "Tekstil360",
    "inşaat yazılımı",
    "şantiye takibi",
    "Yapı360",
    "üretim yazılımı",
    "Üretim360",
    "OEE",
    "CRM yazılımı",
    "ERP",
    "mobil uygulama geliştirme",
    "web platform",
    "yapay zekâ",
    "veri analitiği",
    "bulut entegrasyonu",
    "Pamukkale Teknokent",
    "Denizli yazılım şirketi",
  ],
  authors: [{ name: SITE_LEGAL_NAME, url: SITE_ORIGIN }],
  creator: SITE_LEGAL_NAME,
  publisher: SITE_LEGAL_NAME,
  alternates: { canonical: "/" },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: LOCALE_TR,
    url: SITE_URL,
    siteName: SITE_BRAND,
    title: `${SITE_BRAND} | KOBİ yazılım ve dijital dönüşüm`,
    description: defaultDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        ...OG_IMAGE_PRESET,
        alt: `${SITE_BRAND} — dijital dönüşüm ve sektörel yazılım çözümleri`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_BRAND} | KOBİ yazılım ve dijital dönüşüm`,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLOR_DEEP_SURFACE },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLOR_DEEP_SURFACE },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
