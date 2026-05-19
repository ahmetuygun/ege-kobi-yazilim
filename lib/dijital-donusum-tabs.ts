/**
 * Dijital Dönüşüm Çözümleri — sekme içerikleri ve ana sayfa kart özetleri.
 */

export type DijitalDonusumSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type DijitalDonusumTab = {
  id: string;
  label: string;
  lede: string;
  sections: readonly DijitalDonusumSection[];
};

export const DIJITAL_DONUSUM_TABS: readonly DijitalDonusumTab[] = [
  {
    id: "crm",
    label: "CRM Çözümleri",
    lede:
      "Satış, pazarlama ve müşteri hizmetlerinin aynı müşteri kaydı üzerinden yürüdüğünde tekrar eden görüşmeler azalır, tahminler güçlenir. Ölçeğinize uygun ekranlarla başlar; süreç oturdukça alanları genişletiriz.",
    sections: [
      {
        heading: "Satış hattı ve öngörü",
        paragraphs: [
          "Tekliften tahsilata giden adımlar netleştiğinde yönetim, sahadaki gerçek fırsat stoğu ile konuşur. Aşama geçişlerinde zorunlu alanlar ve onaylar, hatalı kayıtları en başta keser.",
          "Rol bazlı yetkiyle veri görünürlüğü kişiye göre daraltılır; müşteri notları ve ekler tek yerde toplanır, ekip değişiminde bilgi kaybı azalır.",
        ],
      },
      {
        heading: "Destek ve geri bildirim",
        paragraphs: [
          "Çağrı ve talepler öncelik ve sözleşme satırına bağlandığında SLA takibi anlamlı hale gelir. Çözülen kayıtlar ürün ve operasyona ölçülebilir geri bildirim olarak döner.",
          "Kısa anketlerle memnuniyet eğrisi izlenir; iyileştirme kararları tek seferlik yorum değil, tekrarlayan veriye dayanır.",
        ],
      },
      {
        heading: "Bağlantılar ve rapor",
        paragraphs: [
          "Muhasebe, e-arşiv veya web formlarıyla kontrollü veri akışı kurulduğunda aynı bilginin iki kez girilmesi engellenir. Yönetim için satış, tahsilat ve destek metrikleri tek panoda bir araya getirilebilir.",
        ],
      },
    ],
  },
  {
    id: "erp",
    label: "ERP Sistemleri",
    lede:
      "Stok, üretim, satınalma ve finansın aynı gerçeği paylaşması, maliyet ve nakit akışını konuşurken tartışmayı kısaltır. Devasa paket yerine işinize yetecek modüllerle başlayıp büyüyen bir yol haritası izleriz.",
    sections: [
      {
        heading: "Operasyon ve stok disiplini",
        paragraphs: [
          "Malzeme hareketleri ve üretim emirleri canlı izlendiğinde plan sapması erken fark edilir. Güvenli stok ve kritik seviye uyarıları, fazla stokta donan nakdi görünür kılar.",
          "Satınalma talebinden sevkiyata kadar iz bırakan kayıt zinciri, hem iç denetim hem de tedarikçi görüşmelerinde ortak dil sağlar.",
        ],
      },
      {
        heading: "Maliyet ve dönem kapanışı",
        paragraphs: [
          "Masraf yeri veya proje bazlı dağıtım netleştiğinde hangi işin marjı nerede eridiği görülür. Dönem sonunda tekrarlanan kontrol listeleri ve onay adımları, kapanışı hızlandırır.",
        ],
      },
      {
        heading: "Canlıya geçiş",
        paragraphs: [
          "Önce kritik modüllerle üretim ortamına çıkılır; ardından kademeli yayılır. Kullanıcıya kısa notlar ve ekran bazlı kılavuzlar, eğitim yükünü dağıtır.",
        ],
      },
    ],
  },
  {
    id: "mobil",
    label: "Mobil Uygulama Geliştirme",
    lede:
      "Saha, bayi veya son kullanıcı için iOS ve Android’de tek mantıkta ilerleyen arayüzler tasarlarız. Bağlantının kesildiği anlarda bile kritik işin durabilmesi için çevrimdışı senaryoları baştan tanımlarız.",
    sections: [
      {
        heading: "Kullanım ve performans",
        paragraphs: [
          "Uzun formlar yerine adım adım akış, sahada hata oranını düşürür. Listelerde sayfalama ve gerektiğinde önbellek ile cihazın üzerindeki yük kontrol altında tutulur.",
        ],
      },
      {
        heading: "Güvenlik ve yayın",
        paragraphs: [
          "Cihaz kaydı, sürüm güncellemesi ve mağaza süreçleri önceden planlanır. Hassas veri mümkün olduğunca sunucuda tutulur; oturum yenileme ve şifreli iletişim varsayılan kabul edilir.",
        ],
      },
      {
        heading: "Sunucu tarafı",
        paragraphs: [
          "Var olan servislerinize uyumlu API sözleşmeleri yazılır; geriye dönük uyumluluk için sürümleme kuralları belirlenir. İş akışına uygun anlık bildirim ve derin bağlantı desteği eklenebilir.",
        ],
      },
    ],
  },
  {
    id: "web",
    label: "Web Platform Geliştirme",
    lede:
      "Bayi portalları, yönetim konsolları ve müşterinin kendi işini gördüğü self-servis ekranlarında tarayıcı yeterli olur. Rol ve şubeye göre menü, dil ve yetki; projenin omurgasını oluşturur.",
    sections: [
      {
        heading: "Mimari ve hız",
        paragraphs: [
          "Sunucuda üretilen sayfa ile istemci tarafı iş bölümü netleştiğinde hem ilk açılış hem bakım maliyeti iyileşir. Yoğun tablolarda sanallaştırma ve gerektiğinde tembel yükleme ile tarayıcı nefes alır.",
        ],
      },
      {
        heading: "Yetki ve iz",
        paragraphs: [
          "Çok şubeli veya çok kiracılı yapılarda yetki matrisi sade tutulur; riskli işlemlerde ikinci onay istenebilir. Kimin neyi ne zaman değiştirdiği kayıt altına alınır.",
        ],
      },
      {
        heading: "Yayın süreci",
        paragraphs: [
          "Otomatik test ve önce deneme ortamında doğrulama, canlıya çıkış riskini azaltır. Canlıda izleme ve hata raporları, sonraki sürümlere somut girdi sağlar.",
        ],
      },
    ],
  },
  {
    id: "ai",
    label: "AI & Veri Analitiği",
    lede:
      "Önce hangi sorunun sayılarla yanıtlanacağını netleştiririz. Tahmin, sınıflandırma veya sapma tespiti gibi ölçülebilir hedefler seçilir; veri hazır değilse önce düzenlenir, modele acele edilmez.",
    sections: [
      {
        heading: "Veri zemini",
        paragraphs: [
          "Dağınık tablolar ve farklı adlandırmalar tek modele bağlanmadan sonuç güvenilmez olur. Alan sözlüğü, tekil anahtar ve eksik veri kuralları yazılı hale getirilir.",
        ],
      },
      {
        heading: "Raporlama ve karar",
        paragraphs: [
          "Yönetici özeti ile saha ekranı aynı tanımlardan beslendiğinde tartışma süresi kısalır. Grafik şovundan çok okunabilir tablolar ve net filtreler önceliklidir; detay gerektiğinde açılır.",
        ],
      },
      {
        heading: "Sorumlu kullanım",
        paragraphs: [
          "Kişisel veri açısından gereksiz alan taşınmaz; kritik kararlarda insan onayı korunur. Canlıdaki model davranışı izlenir; beklenmedik sapmada uyarı üretilir.",
        ],
      },
    ],
  },
  {
    id: "bulut",
    label: "Bulut & Sistem Entegrasyonları",
    lede:
      "Buluttaki SaaS araçları ile yıllardır ayakta duran iç sistemlerin aynı dilde konuşması gerekir. Mesaj kuyruğu ve yinelenen çağrılarda güvenli (idempotent) tasarım, kesinti anlarında veriyi korur.",
    sections: [
      {
        heading: "Entegrasyon tasarımı",
        paragraphs: [
          "Anlık yanıt gerektiren işler ile arkada sıraya alınması doğru olan işler ayrılır. İki yönlü senkronizasyonda çakışma nasıl çözülecek, yazılı kural olarak sabitlenir.",
        ],
      },
      {
        heading: "Bulut işletmesi",
        paragraphs: [
          "Geliştirme, test ve canlı ortamlar birbirinden ayrılır; yedek ve geri dönüş senaryosu en az yılda bir denenir. Kaynak etiketleri ve uyarı eşikleri ile maliyet sürprizi azaltılır.",
        ],
      },
      {
        heading: "Gözlem ve müdahale",
        paragraphs: [
          "Log ve iz ile hata kaynağı hızlı daraltılır. Başarısız mesajlar için ayrı kuyruk ve operatöre düşen uyarı, gece yarısı kesintisini kısaltır.",
        ],
      },
    ],
  },
] as const;
