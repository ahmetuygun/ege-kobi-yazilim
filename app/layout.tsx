import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

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

const SITE_URL = "https://egekobiyazilim.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ege360 — KOBİ’ler için 360° Yazılım Çözümleri",
    template: "%s · Ege360",
  },
  description:
    "Ege KOBİ Yazılım, yapı360 ve tekstil360 gibi 360° SaaS ürünleri ile KOBİ’lerin operasyonlarını dijitalleştirir. Sistem mimarisi, yapay zeka entegrasyonu ve siber güvenlik uzmanlığı.",
  keywords: [
    "KOBİ yazılım",
    "yapı360",
    "tekstil360",
    "şantiye yönetimi",
    "ERP",
    "yapay zeka entegrasyonu",
    "siber güvenlik",
    "İzmir yazılım",
    "Ege KOBİ Yazılım",
  ],
  authors: [{ name: "Ege KOBİ Yazılım" }],
  creator: "Ege KOBİ Yazılım",
  publisher: "Ege KOBİ Yazılım",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Ege360",
    title: "Ege360 — KOBİ’ler için 360° Yazılım Çözümleri",
    description:
      "yapı360, tekstil360 ve özel SaaS çözümleri ile KOBİ’lerin dijital dönüşüm partneri.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Ege360 — Endüstriyel kontrol paneli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ege360 — KOBİ’ler için 360° Yazılım Çözümleri",
    description:
      "KOBİ’ler için yapı360 ve tekstil360 SaaS ürünleri ile uçtan uca dijital dönüşüm.",
    images: ["/images/hero-bg.jpg"],
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
    { media: "(prefers-color-scheme: light)", color: "#2c3a4f" },
    { media: "(prefers-color-scheme: dark)", color: "#2c3a4f" },
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
