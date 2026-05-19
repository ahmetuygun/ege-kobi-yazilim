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

/** Tekstil360 sayfası görselleri — dosya değişince `TEKSTIL_IMAGE_VERSION` artırın. */
export const TEKSTIL_IMAGE_VERSION = "2";
export const TEKSTIL_IMAGE_1 = `/images/textil-1.jpg?v=${TEKSTIL_IMAGE_VERSION}`;
export const TEKSTIL_IMAGE_2 = `/images/textil-2.avif?v=${TEKSTIL_IMAGE_VERSION}`;
export const TEKSTIL_IMAGE_3 = `/images/textil-3.jpg?v=${TEKSTIL_IMAGE_VERSION}`;

/** Yapı360 sayfası görselleri — dosya değişince `YAPI_IMAGE_VERSION` artırın. */
export const YAPI_IMAGE_VERSION = "3";
export const YAPI_IMAGE_1 = `/images/yapi-1.jpg?v=${YAPI_IMAGE_VERSION}`;
export const YAPI_IMAGE_2 = `/images/yapi-2.webp?v=${YAPI_IMAGE_VERSION}`;
export const YAPI_IMAGE_3 = `/images/yapi-3.jpg?v=${YAPI_IMAGE_VERSION}`;

/** Üretim360 sayfası görselleri — dosya değişince `URETIM_IMAGE_VERSION` artırın. */
export const URETIM_IMAGE_VERSION = "1";
export const URETIM_IMAGE_1 = `/images/uretim-1.jpg?v=${URETIM_IMAGE_VERSION}`;
export const URETIM_IMAGE_2 = `/images/uretim-2.jpg?v=${URETIM_IMAGE_VERSION}`;
export const URETIM_IMAGE_3 = `/images/uretim-3.avif?v=${URETIM_IMAGE_VERSION}`;

/** OG / Twitter paylaşım görseli (şimdilik hero görseli). */
export const DEFAULT_OG_IMAGE = HERO_BACKGROUND_IMAGE;

/** Yanlışlıkla `.png` ile gelen istekler (middleware → JPEG). */
export const HERO_BACKGROUND_LEGACY_PNG_PATH = "/images/hero-bg.png" as const;

export const SITE_ORIGIN = "https://egekobiyazilim.com" as const;

export const ORGANIZATION_LOGO_URL = `${SITE_ORIGIN}${SITE_LOGO}`;
