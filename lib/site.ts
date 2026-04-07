export const siteUrl = "https://swise.com.tr";
export const companyName = "SWISE Bilgi Teknolojileri ve Danismanlik Hizmetleri Ltd. Sti.";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  benefits: string[];
  details: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "sap-abap-danismanligi",
    title: "SAP ABAP Danismanligi",
    shortTitle: "SAP ABAP",
    summary:
      "Kurumsal ihtiyaclara ozel ABAP gelistirme, bakim, optimizasyon ve S/4HANA uyumlu cozumler.",
    metaTitle: "SAP ABAP Danismanligi | SWISE",
    metaDescription:
      "SWISE, SAP ABAP danismanligi, ozel gelistirme, bakim, optimizasyon ve S/4HANA uyumlu proje destegi sunar.",
    keywords: ["sap abap danismanligi", "abap gelistirme", "sap proje destegi", "s/4hana uyumu"],
    benefits: [
      "Kuruma ozel SAP ABAP gelistirme yapisi",
      "Mevcut uygulamalarda performans ve bakim iyilestirmesi",
      "S/4HANA gecis sureclerine uyumlu gelistirme destegi",
    ],
    details: [
      "SWISE, SAP sistemleri icinde ihtiyaca ozel ABAP gelistirme, raporlama, enhancement ve entegrasyon calismalari yurutur.",
      "Yeni ihtiyaclar kadar mevcut kodun sadeleştirilmesi, performansinin artirilmasi ve surdurulebilir hale getirilmesi de hizmet kapsamina dahildir.",
      "Projelerde is birimleri ile teknik ekipler arasinda net iletisim kurarak daha hizli ve daha yonetilebilir teslimatlar hedefleriz.",
    ],
  },
  {
    slug: "e-fatura",
    title: "e-Fatura Cozumleri",
    shortTitle: "e-Fatura",
    summary:
      "Yasal uyumlu, guvenli ve surdurulebilir e-Fatura surec yonetimi cozumleri.",
    metaTitle: "e-Fatura Cozumleri | SWISE",
    metaDescription:
      "SWISE, e-Fatura gecisi, entegrasyon, operasyon yonetimi ve kurumsal surec iyilestirmesi icin e-Fatura cozumleri sunar.",
    keywords: ["e-fatura", "e-fatura entegrasyonu", "e-fatura gecisi", "e-donusum"],
    benefits: [
      "Yasal sureclere uyumlu e-Fatura operasyonlari",
      "Muhasebe ve ERP sistemleri ile entegre calisma",
      "Kurumsal olcekte izlenebilir ve denetlenebilir akis",
    ],
    details: [
      "e-Fatura cozumlerimiz, belge olusturma, iletim, takibin yapilmasi ve operasyonel sureclerin yonetilmesi icin kurumsal bir yapi sunar.",
      "SAP ve diger kurumsal sistemlerle entegrasyon sayesinde manuel is yukunu azaltarak hata riskini dusururuz.",
      "Surec tasariminda sadece teknik kurulum degil, operasyonel verimlilik ve sureklilik de onceliklendirilir.",
    ],
  },
  {
    slug: "e-arsiv",
    title: "e-Arsiv Cozumleri",
    shortTitle: "e-Arsiv",
    summary:
      "Dijital belge yonetimini kolaylastiran, hizli ve izlenebilir e-Arsiv altyapisi.",
    metaTitle: "e-Arsiv Cozumleri | SWISE",
    metaDescription:
      "SWISE, e-Arsiv sureclerinin kurulumu, entegrasyonu ve kurumsal olcekte yonetimi icin guvenilir cozumler sunar.",
    keywords: ["e-arsiv", "e-arsiv entegrasyonu", "dijital belge yonetimi", "e-donusum"],
    benefits: [
      "Dijital arsiv sureclerinde kurumsal duzen",
      "Belge takibi ve erisimde yuksek izlenebilirlik",
      "Mevzuata uygun ve surdurulebilir altyapi",
    ],
    details: [
      "e-Arsiv hizmetlerimiz, elektronik belge uretimi ve saklama sureclerinin operasyonel ihtiyaclara uygun bicimde kurgulanmasini kapsar.",
      "Entegrasyon ve izleme mekanizmalari sayesinde belge hareketlerini daha seffaf ve daha denetlenebilir hale getiririz.",
      "Bu yapi, hem yasal gerekliliklerin hem de ic operasyon beklentilerinin birlikte karsilanmasina yardimci olur.",
    ],
  },
  {
    slug: "e-irsaliye",
    title: "e-Irsaliye Cozumleri",
    shortTitle: "e-Irsaliye",
    summary:
      "Operasyon sureclerini hizlandiran, entegrasyon odakli e-Irsaliye uygulamalari.",
    metaTitle: "e-Irsaliye Cozumleri | SWISE",
    metaDescription:
      "SWISE, e-Irsaliye kurulum, entegrasyon ve operasyon surecleri icin hizli ve kurumsal cozumler gelistirir.",
    keywords: ["e-irsaliye", "e-irsaliye entegrasyonu", "lojistik surecleri", "e-donusum"],
    benefits: [
      "Sevkiyat sureclerinde hiz ve tutarlilik",
      "ERP ve operasyon sistemleri ile entegre akis",
      "Lojistik sureclerinde daha iyi izlenebilirlik",
    ],
    details: [
      "e-Irsaliye cozumlerimiz, sevkiyat sureclerinin dijital ortamda daha hizli ve daha hatasiz yonetilmesini destekler.",
      "Lojistik, depo ve ERP yapilari ile kurulan entegrasyonlar sayesinde operasyonlar tek merkezden daha etkin takip edilir.",
      "Kurumsal yapilarda surec standardizasyonu ve veri tutarliligi saglamak icin saha ihtiyaclarina uygun kurgular olustururuz.",
    ],
  },
  {
    slug: "e-defter",
    title: "e-Defter Cozumleri",
    shortTitle: "e-Defter",
    summary:
      "Mevzuata uygun, kontrol edilebilir ve guvenilir e-Defter cozumleri.",
    metaTitle: "e-Defter Cozumleri | SWISE",
    metaDescription:
      "SWISE, e-Defter sureclerinin kurulumu, takibi ve surdurulebilir yonetimi icin guvenilir kurumsal cozumler sunar.",
    keywords: ["e-defter", "e-defter cozumleri", "mali surecler", "e-donusum"],
    benefits: [
      "Mevzuata uygun dijital defter sureci",
      "Kontrol edilebilir ve raporlanabilir isleyis",
      "Uzun vadeli operasyon surekliligi",
    ],
    details: [
      "e-Defter surecinde veri akisi, kontrol mekanizmalari ve dosya yonetimi kurumsal riskleri azaltacak sekilde ele alinir.",
      "Yasal yukumlulukleri karsilayan, ayni zamanda is ekiplerinin yonetebilecegi sade bir operasyon modeli tasarlariz.",
      "Surekli degisen beklentiler karsisinda sistemin guvenilir ve surdurulebilir kalmasi temel onceliklerimizden biridir.",
    ],
  },
  {
    slug: "e-mutabakat",
    title: "e-Mutabakat Cozumleri",
    shortTitle: "e-Mutabakat",
    summary:
      "Ticari mutabakat sureclerini dijitallestiren verimli ve merkezi yonetim yapisi.",
    metaTitle: "e-Mutabakat Cozumleri | SWISE",
    metaDescription:
      "SWISE, e-Mutabakat sureclerini dijitallestiren, merkezi yonetim ve operasyonel verimlilik saglayan cozumler sunar.",
    keywords: ["e-mutabakat", "mutabakat surecleri", "cari mutabakat", "e-donusum"],
    benefits: [
      "Mutabakat sureclerinde hizli ve merkezi yonetim",
      "Manuel is yukunde azalma",
      "Daha seffaf ve olculebilir operasyon yapisi",
    ],
    details: [
      "e-Mutabakat hizmetlerimiz, cari ve ticari mutabakat sureclerinin daha duzenli, hizli ve izlenebilir sekilde yonetilmesini hedefler.",
      "Kurumsal yapida farkli ekiplerin ayni sureci tek bir akis icinde takip etmesini saglayacak merkezi bir model olustururuz.",
      "Bu yapi operasyonel verimliligi artirirken surec icindeki kopukluklari ve tekrarli manuel islemleri azaltir.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
