/**
 * Marka logosu — yalnızca `Logo` ve şema `Organization.logo`.
 * `public/images/logo.png` dosyasını güncellediğinizde `SITE_LOGO_VERSION` değerini artırın
 * (Next Image önbelleği ve tarayıcı eski görseli tutmasın diye).
 */
export const SITE_LOGO_VERSION = "2";

export const SITE_LOGO = `/images/logo.png?v=${SITE_LOGO_VERSION}`;

/** `app/globals.css` içindeki `--ege-surface-deep` ile aynı (viewport `themeColor` vb.). */
export const THEME_COLOR_DEEP_SURFACE = "#050a14" as const;

/** Ana sayfa hero tam ekran arka planı (dekoratif). */
export const HERO_BACKGROUND_IMAGE = "/images/hero-bg.jpg" as const;

/** OG / Twitter paylaşım görseli (şimdilik hero görseli). */
export const DEFAULT_OG_IMAGE = HERO_BACKGROUND_IMAGE;

/** Yanlışlıkla `.png` ile gelen istekler (middleware → JPEG). */
export const HERO_BACKGROUND_LEGACY_PNG_PATH = "/images/hero-bg.png" as const;

export const SITE_ORIGIN = "https://egekobiyazilim.com" as const;

export const ORGANIZATION_LOGO_URL = `${SITE_ORIGIN}${SITE_LOGO}`;
