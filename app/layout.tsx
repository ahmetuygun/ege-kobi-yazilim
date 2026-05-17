import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { DEFAULT_OG_IMAGE, SITE_ORIGIN, THEME_COLOR_DEEP_SURFACE } from "@/lib/site-assets";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EgeKOBİ — Tekstil, yapı ve üretim için pratik yazılım",
    template: "%s · EgeKOBİ",
  },
  description:
    "Tekstil, yapı ve üretim işletmeleri için sipariş takibi, stok, şantiye ve personel yönetimi. EgeKOBİ ile işlerinizi tek ekrandan kolayca yönetin.",
  keywords: [
    "KOBİ yazılım",
    "tekstil atölyesi yazılımı",
    "inşaat şantiye takibi",
    "sipariş takibi",
    "stok kontrolü",
    "üretim yönetimi",
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
    siteName: "EgeKOBİ",
    title: "EgeKOBİ — Tekstil, yapı ve üretim için pratik yazılım",
    description:
      "Tekstil, yapı ve üretim işletmeleri için pratik yazılım çözümleri. Sipariş, stok ve saha takibi tek ekranda.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "EgeKOBİ — örnek ekran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EgeKOBİ — Tekstil, yapı ve üretim için pratik yazılım",
    description:
      "KOBİ’ler için sipariş, stok, şantiye ve personel takibi. Kolay kullanım, mobil erişim.",
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
