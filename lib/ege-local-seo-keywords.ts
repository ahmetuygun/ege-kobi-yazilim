/**
 * TÜİK Ege Bölgesi (8 il) ve ilçeleri — yerel arama (il / ilçe + yazılım, KOBİ) için anahtar kelime üretimi.
 * İlçe adları resmi yazım ile tutulur; güncel idari değişikliklerde bu listeyi güncelleyin.
 */

export const EGE_REGION_LABEL = "Ege Bölgesi" as const;

/** İl → ilçe adları (merkez ilçeler dahil). */
export const EGE_PROVINCES_WITH_DISTRICTS = {
  Afyonkarahisar: [
    "Başmakçı",
    "Bayat",
    "Bolvadin",
    "Çay",
    "Çobanlar",
    "Dazkırı",
    "Dinar",
    "Emirdağ",
    "Evciler",
    "Hocalar",
    "İhsaniye",
    "İscehisar",
    "Kızılören",
    "Sandıklı",
    "Sinanpaşa",
    "Sultandağı",
    "Şuhut",
    "Afyonkarahisar",
  ],
  Aydın: [
    "Bozdoğan",
    "Buharkent",
    "Çine",
    "Didim",
    "Efeler",
    "Germencik",
    "İncirliova",
    "Karacasu",
    "Karpuzlu",
    "Koçarlı",
    "Köşk",
    "Kuşadası",
    "Kuyucak",
    "Nazilli",
    "Söke",
    "Sultanhisar",
    "Yenipazar",
  ],
  Denizli: [
    "Acıpayam",
    "Babadağ",
    "Baklan",
    "Bekilli",
    "Beyağacı",
    "Bozkurt",
    "Buldan",
    "Çal",
    "Çameli",
    "Çardak",
    "Çivril",
    "Güney",
    "Honaz",
    "Kale",
    "Merkezefendi",
    "Pamukkale",
    "Sarayköy",
    "Serinhisar",
    "Tavas",
  ],
  İzmir: [
    "Aliağa",
    "Balçova",
    "Bayındır",
    "Bayraklı",
    "Bergama",
    "Beydağ",
    "Bornova",
    "Buca",
    "Çeşme",
    "Çiğli",
    "Dikili",
    "Foça",
    "Gaziemir",
    "Güzelbahçe",
    "Karabağlar",
    "Karaburun",
    "Karşıyaka",
    "Kemalpaşa",
    "Kınık",
    "Kiraz",
    "Konak",
    "Menderes",
    "Menemen",
    "Narlıdere",
    "Ödemiş",
    "Seferihisar",
    "Selçuk",
    "Tire",
    "Torbalı",
    "Urla",
  ],
  Kütahya: [
    "Altıntaş",
    "Aslanapa",
    "Çavdarhisar",
    "Domaniç",
    "Dumlupınar",
    "Emet",
    "Gediz",
    "Hisarcık",
    "Kütahya",
    "Pazarlar",
    "Şaphane",
    "Simav",
    "Tavşanlı",
  ],
  Manisa: [
    "Ahmetli",
    "Akhisar",
    "Alaşehir",
    "Demirci",
    "Gölmarmara",
    "Gördes",
    "Kırkağaç",
    "Köprübaşı",
    "Kula",
    "Salihli",
    "Sarıgöl",
    "Saruhanlı",
    "Selendi",
    "Soma",
    "Şehzadeler",
    "Turgutlu",
    "Yunusemre",
  ],
  Muğla: [
    "Bodrum",
    "Dalaman",
    "Datça",
    "Fethiye",
    "Kavaklıdere",
    "Köyceğiz",
    "Marmaris",
    "Menteşe",
    "Milas",
    "Ortaca",
    "Seydikemer",
    "Ula",
    "Yatağan",
  ],
  Uşak: ["Banaz", "Eşme", "Karahallı", "Sivaslı", "Ulubey", "Uşak"],
} as const satisfies Record<string, readonly string[]>;

export type EgeProvince = keyof typeof EGE_PROVINCES_WITH_DISTRICTS;

export const EGE_PROVINCE_NAMES = Object.keys(
  EGE_PROVINCES_WITH_DISTRICTS,
) as EgeProvince[];

/** Meta keywords + benzeri alanlar için düz liste (tekrarsız). */
export function buildEgeLocalSearchKeywords(): readonly string[] {
  const set = new Set<string>();
  const add = (s: string) => {
    const t = s.trim();
    if (t) set.add(t);
  };

  add("Ege bölgesi yazılım");
  add("Ege bölgesi KOBİ yazılım");
  add("Ege illeri yazılım firması");
  add("Ege Bölgesi dijital dönüşüm");

  for (const il of EGE_PROVINCE_NAMES) {
    add(`${il} yazılım`);
    add(`${il} KOBİ yazılım`);
    add(`${il} il yazılım`);
    add(`${il} dijital dönüşüm`);

    const ilceler = EGE_PROVINCES_WITH_DISTRICTS[il];
    for (const ilce of ilceler) {
      add(`${ilce} yazılım`);
      add(`${ilce} ilçe yazılım`);
      add(`${ilce} ${il} KOBİ yazılım`);
    }
  }

  return [...set];
}

export const EGE_LOCAL_SEARCH_KEYWORDS = buildEgeLocalSearchKeywords();
