/**
 * İletişim ve ofis bilgileri.
 * `.env.local` içinde `NEXT_PUBLIC_*` değişkenlerini tanımlayın (bkz. `.env.example`).
 * Üretim öncesi gerçek değerleri buraya yazmayın; env üzerinden verin.
 */

function readEnv(name: string, fallback: string): string {
  const v = process.env[name];
  return typeof v === "string" && v.trim() !== "" ? v.trim() : fallback;
}

/** Görünen e-posta ve mailto hedefi */
export const CONTACT_EMAIL = readEnv(
  "NEXT_PUBLIC_CONTACT_EMAIL",
  "iletisim@egekobiyazilim.com",
);

/** Telefon, insan okunaklı metin */
export const CONTACT_PHONE_DISPLAY = readEnv(
  "NEXT_PUBLIC_CONTACT_PHONE_DISPLAY",
  "+90 (258) 000 00 00",
);

/** `tel:` bağlantısı (boşluksuz, +ülke kodu…) */
export const CONTACT_PHONE_TEL = readEnv(
  "NEXT_PUBLIC_CONTACT_PHONE_TEL",
  "+902580000000",
);

/**
 * WhatsApp `wa.me` için yalnızca rakamlar, ülke kodu ile (örn. 905551112233).
 * Başında + olmamalı.
 */
export const CONTACT_WHATSAPP_DIGITS = readEnv(
  "NEXT_PUBLIC_CONTACT_WHATSAPP_DIGITS",
  "905580000000",
);

/** Sokak / kampüs satırı (şema ve adres kartı) */
export const OFFICE_STREET_ADDRESS = readEnv(
  "NEXT_PUBLIC_OFFICE_STREET_ADDRESS",
  "Pamukkale Üniversitesi Teknokent",
);

export const OFFICE_ADDRESS_LOCALITY = readEnv(
  "NEXT_PUBLIC_OFFICE_ADDRESS_LOCALITY",
  "Denizli",
);

export const OFFICE_ADDRESS_SINGLE_LINE = `${OFFICE_STREET_ADDRESS}, ${OFFICE_ADDRESS_LOCALITY}`;

export const CONTACT_MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;

export const CONTACT_MAILTO_SUBJECT_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("İletişim — EgeKOBİ")}`;

export const CONTACT_TEL_HREF = `tel:${CONTACT_PHONE_TEL.replace(/\s/g, "")}`;

export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_WHATSAPP_DIGITS.replace(/\D/g, "")}`;

export function officeGoogleMapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS_SINGLE_LINE)}`;
}

/** JSON-LD `PostalAddress` */
export const ORGANIZATION_POSTAL_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: OFFICE_STREET_ADDRESS,
  addressLocality: OFFICE_ADDRESS_LOCALITY,
  addressCountry: "TR",
};
