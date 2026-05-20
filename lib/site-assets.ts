/**
 * Koyu tema / koyu yüzey logosu — `Logo variant="dark"` ve şema `Organization.logo`.
 * `public/images/logo.png` güncellenince sürümü artırın.
 */
export const SITE_LOGO_VERSION = "2";

export const SITE_LOGO = `/images/logo.png?v=${SITE_LOGO_VERSION}`;

/**
 * Açık tema logosu (açık zemin, tam renk). `public/images/logo-light.png` güncellenince artırın.
 */
export const SITE_LOGO_LIGHT_VERSION = "1";
export const SITE_LOGO_LIGHT = `/images/logo-light.png?v=${SITE_LOGO_LIGHT_VERSION}`;

/**
 * Sekme ikonu + Google arama sonuçları favicon önbelleği.
 * `public/images/site-favicon.png` değişince sürümü artırın (URL değişir, yeniden taranır).
 * Not: `app/icon.png` kullanılmıyor — Next.js sorgusuz `/icon.png` üretip Google önbelleğini kilitleyebiliyor.
 */
export const SITE_FAVICON_VERSION = "2";
export const SITE_FAVICON_ICON =
  `/images/site-favicon.png?v=${SITE_FAVICON_VERSION}` as const;
export const SITE_FAVICON_APPLE =
  `/images/site-apple-touch-icon.png?v=${SITE_FAVICON_VERSION}` as const;

/** `next.config` içinde `/favicon.ico` → PNG yönlendirmesi için (Google hâlâ bu yolu ister). */
export const SITE_FAVICON_REDIRECT_DESTINATION = SITE_FAVICON_ICON;

/** Koyu tema — `html.dark` içindeki `--ege-surface-deep` ile uyumlu (viewport `themeColor`). */
export const THEME_COLOR_DEEP_SURFACE = "#050a14" as const;

/** Açık tema — `app/globals.css` içindeki `html` `--background` / `--ege-surface-deep` ile uyumlu. */
export const THEME_COLOR_LIGHT_SURFACE = "#fafbfc" as const;

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

/** İletişim sayfası ofis fotoğrafı — dosya değişince `ILETISIM_OFFICE_IMAGE_VERSION` artırın. */
export const ILETISIM_OFFICE_IMAGE_VERSION = "1";
export const ILETISIM_OFFICE_IMAGE =
  `/images/ofis.jpg?v=${ILETISIM_OFFICE_IMAGE_VERSION}` as const;

/** OG / Twitter paylaşım görseli (şimdilik hero görseli). */
export const DEFAULT_OG_IMAGE = HERO_BACKGROUND_IMAGE;

/** Yanlışlıkla `.png` ile gelen istekler (middleware → JPEG). */
export const HERO_BACKGROUND_LEGACY_PNG_PATH = "/images/hero-bg.png" as const;

export const SITE_ORIGIN = "https://egekobiyazilim.com" as const;

export const ORGANIZATION_LOGO_URL = `${SITE_ORIGIN}${SITE_LOGO}`;
