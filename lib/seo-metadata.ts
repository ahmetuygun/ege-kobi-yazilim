import type { Metadata } from "next";

import { EGE_LOCAL_SEARCH_KEYWORDS } from "@/lib/ege-local-seo-keywords";
import { SITE_ORIGIN } from "@/lib/site-assets";

/** Kısa marka adı (title şablonu ve OG `siteName`). */
export const SITE_BRAND = "EgeKOBİ" as const;

/** Yasal / şema adı. */
export const SITE_LEGAL_NAME = "Ege KOBİ Yazılım" as const;

export const LOCALE_TR = "tr_TR" as const;

/** OG / Twitter önerilen en-boy (kırpma ve önbellek için tutarlı değer). */
export const OG_IMAGE_PRESET = { width: 1200, height: 630 } as const;

export function absolutePageUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return SITE_ORIGIN;
  return `${SITE_ORIGIN}${normalized}`;
}

/**
 * İç sayfalar için tutarlı metadata: `layout` içindeki
 * `title.template` (`%s · EgeKOBİ`) ile uyumlu başlık üretir.
 */
export function buildPageMetadata(input: {
  path: string;
  title: string;
  description: string;
  keywords: readonly string[];
  ogImage: { url: string; alt: string };
  ogType?: "website" | "article";
}): Metadata {
  const ogTitle = `${input.title} · ${SITE_BRAND}`;
  return {
    title: input.title,
    description: input.description,
    keywords: [...input.keywords, ...EGE_LOCAL_SEARCH_KEYWORDS],
    alternates: { canonical: input.path },
    openGraph: {
      type: input.ogType ?? "website",
      locale: LOCALE_TR,
      siteName: SITE_BRAND,
      url: absolutePageUrl(input.path),
      title: ogTitle,
      description: input.description,
      images: [
        {
          ...OG_IMAGE_PRESET,
          url: input.ogImage.url,
          alt: input.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: input.description,
      images: [input.ogImage.url],
    },
  };
}
