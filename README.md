This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## İletişim bilgileri (ortam değişkenleri)

E-posta, telefon ve ofis adresi `lib/site-contact.ts` üzerinden okunur; sitede `mailto:` / `tel:` / WhatsApp dış bağlantıları kullanılmaz, iletişim `/iletisim` üzerinden yönlendirilir. Yerelde `.env.local` oluşturup `.env.example` içindeki `NEXT_PUBLIC_*` değişkenlerini kopyalayın; gerçek değerleri burada tutun (repoya commit etmeyin).

## SEO

- **Kök metadata:** `app/layout.tsx` — `metadataBase`, `applicationName`, `openGraph` / `twitter`, `robots`, `referrer`, `formatDetection`, genişletilmiş `keywords`.
- **Sayfa başına:** `app/*/page.tsx` — benzersiz `title` / `description` / `keywords`, `alternates.canonical`, OG görseli; ürün sayfaları `buildPageMetadata()` ile (`lib/seo-metadata.ts`).
- **Ana sayfa:** `Organization` + `WebSite` JSON-LD (`@graph`, `@id` ile birbirine bağlı).
- **Sitemap / robots:** `app/sitemap.ts`, `app/robots.ts` — canlı domain `lib/site-assets.ts` içindeki `SITE_ORIGIN` ile üretilir (staging için bu değeri güncelleyin).
- **Ege yerel arama:** `lib/ege-local-seo-keywords.ts` — TÜİK Ege Bölgesi 8 ili ve tüm ilçeleri için üretilen `EGE_LOCAL_SEARCH_KEYWORDS`, `buildPageMetadata()` ve ana sayfa `metadata` ile meta `keywords` alanına eklenir; ana sayfa JSON-LD `Organization` + `ContactPoint` için `areaServed` (bölge + iller) doldurulur.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
