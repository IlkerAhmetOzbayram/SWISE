"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    title: "SAP ABAP Danışmanlığı",
    desc: "Kurumsal ihtiyaçlara özel ABAP geliştirme, bakım, optimizasyon ve S/4HANA uyumlu çözümler.",
  },
  {
    title: "E-Fatura",
    desc: "Yasal uyumlu, güvenli ve sürdürülebilir e-Fatura süreç yönetimi çözümleri.",
  },
  {
    title: "E-Arşiv",
    desc: "Dijital belge yönetimini kolaylaştıran, hızlı ve izlenebilir e-Arşiv altyapısı.",
  },
  {
    title: "E-İrsaliye",
    desc: "Operasyon süreçlerini hızlandıran, entegrasyon odaklı e-İrsaliye uygulamaları.",
  },
  {
    title: "E-Defter",
    desc: "Mevzuata uygun, kontrol edilebilir ve güvenilir e-Defter çözümleri.",
  },
  {
    title: "E-Mutabakat",
    desc: "Ticari mutabakat süreçlerini dijitalleştiren verimli ve merkezi yönetim yapısı.",
  },
];

const reasons = [
  "SAP ABAP uzmanlığı",
  "E-Dönüşüm ürün ailesi",
  "Kurumsal ve sürdürülebilir yaklaşım",
  "Entegrasyon odaklı çözüm yapısı",
];

const menuItems = [
  { name: "Ana Sayfa", link: "#anasayfa" },
  { name: "Hakkımızda", link: "#hakkimizda" },
  { name: "Hizmetler", link: "#hizmetler" },
  { name: "Neden SWISE", link: "#neden-biz" },
  { name: "Referanslar", link: "#referanslar" },
  { name: "İletişim", link: "#iletisim" },
];

const references = [
  {
    title: "Konveyör",
    logo: "/references/konveyor-as-logo.jpg",
    sector: "Beyaz eşya, otomotiv ve yedek parça",
    service: "SAP ABAP ve entegrasyon çözümleri",
    desc: "Üretim ve tedarik süreçlerinde SAP uyumlu geliştirmeler, iş akışlarının iyileştirilmesi ve operasyonel entegrasyon yapıları.",
  },
];

const differentiators = [
  "Kuruma özel yazılım ve danışmanlık yaklaşımı",
  "SAP sistemleri ile uyumlu entegrasyon çözümleri",
  "Yasal uyumluluk ve operasyonel verimlilik odağı",
  "Uzun vadeli, güvenilir iş ortaklığı anlayışı",
];

type SubmitState = {
  kind: "idle" | "success" | "error";
  message: string;
};

function AnimatedLogo() {
  return (
    <div className="swise-logo-shell">
      <svg viewBox="0 0 96 96" aria-hidden="true" className="swise-logo-mark">
        <defs>
          <linearGradient id="swise-s-fill" x1="12%" x2="84%" y1="18%" y2="86%">
            <stop offset="0%" stopColor="#173a7b" />
            <stop offset="52%" stopColor="#0f2e67" />
            <stop offset="100%" stopColor="#0a2351" />
          </linearGradient>
          <linearGradient id="swise-s-accent" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="48%" stopColor="rgba(255,255,255,0.34)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <clipPath id="swise-s-clip">
            <path d="M63 11C49 13 38 17 28 24C16 33 12 43 16 51C20 59 31 65 48 71L43 66C28 60 20 55 18 47C16 39 21 31 32 22C40 16 50 13 68 11H63Z" />
            <path d="M47 38C61 45 69 52 71 61C73 71 67 81 48 91H56C68 89 78 85 85 79C94 71 95 61 89 53C84 47 74 41 58 36L47 38Z" />
          </clipPath>
        </defs>

        <rect x="5" y="5" width="86" height="86" rx="26" className="swise-logo-panel" />
        <rect x="10" y="10" width="76" height="76" rx="21" className="swise-logo-inner" />

        <g className="swise-glyph">
          <path
            className="swise-s-mark"
            fill="url(#swise-s-fill)"
            d="M63 11C49 13 38 17 28 24C16 33 12 43 16 51C20 59 31 65 48 71L35 71C24 67 16 63 11 57C3 48 5 35 16 24C27 13 43 8 66 8H74L63 11Z"
          />
          <path
            className="swise-s-mark"
            fill="url(#swise-s-fill)"
            d="M47 38C61 45 69 52 71 61C73 71 67 81 48 91H56C68 89 78 85 85 79C94 71 95 61 89 53C84 47 74 41 58 36L47 38Z"
          />
          <path
            className="swise-s-core"
            fill="url(#swise-s-fill)"
            d="M49 32C37 25 28 18 23 12H33C37 17 44 23 56 29L49 32ZM40 67C49 61 56 54 59 48C62 41 59 33 49 24L59 24C68 33 70 43 66 51C63 59 55 66 43 74L40 67Z"
            opacity="0.98"
          />
        </g>

        <g clipPath="url(#swise-s-clip)">
          <rect className="swise-logo-sheen" x="-24" y="0" width="20" height="96" />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    kind: "idle",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ kind: "idle", message: "" });

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Mesaj gönderilemedi.");
      }

      formRef.current?.reset();
      setSubmitState({
        kind: "success",
        message: result.message || "Mesajınız başarıyla gönderildi.",
      });
    } catch (error) {
      setSubmitState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-4">
            <AnimatedLogo />
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-[0.22em] text-stone-950">
                SWISE
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Teknoloji ve Danışmanlık
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#iletisim"
              className="hidden rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-800 md:inline-flex"
            >
              Teklif Al
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xl text-slate-800 md:hidden"
              aria-label="Mobil menüyü aç"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "x" : "="}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-blue-50 hover:text-blue-800"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#iletisim"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex justify-center rounded-2xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white"
              >
                Teklif Al
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section
        id="anasayfa"
        className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white"
      >
        <div className="absolute inset-0 opacity-80">
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
              SAP ABAP . E-Dönüşüm . Entegrasyon Çözümleri
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
              SAP ABAP ve e-Dönüşüm süreçlerinde güvenilir, yalın ve kurumsal çözümler
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              SWISE, kurumların dijital dönüşüm yolculuğunda SAP ABAP danışmanlığı, e-Dönüşüm ürünleri
              ve entegrasyon hizmetleri ile uçtan uca çözüm sunar. Teknik gücü iş süreci bilgisiyle
              birleştirerek daha verimli ve daha yönetilebilir yapılar kurar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#hizmetler"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Hizmetleri İnceleyin
              </a>
              <a
                href="#iletisim"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teklif Alın
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/15 bg-white/10 p-4 text-sm text-white backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[26px] bg-white p-6 text-slate-900 shadow-inner">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                      SWISE
                    </div>
                    <div className="text-xs text-slate-500">Kurumsal teknoloji çözümleri</div>
                  </div>
                  <div className="rounded-full bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
                    Enterprise Ready
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Ana uzmanlık</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      SAP ABAP danışmanlığı ve özel geliştirme
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Ürün ailesi</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      e-Fatura, e-Arşiv, e-İrsaliye, e-Defter, e-Mutabakat
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Yaklaşım</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      Entegre, sürdürülebilir ve kurum ihtiyaçlarına özel çözümler
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-blue-700 p-5 text-white">
                    <div className="text-sm text-blue-100">Odak</div>
                    <div className="mt-2 text-xl font-bold">SAP ve e-Dönüşüm</div>
                  </div>
                  <div className="rounded-3xl bg-slate-900 p-5 text-white">
                    <div className="text-sm text-slate-300">Hedef</div>
                    <div className="mt-2 text-xl font-bold">Verimlilik ve Uyum</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-10">
        <div className="grid gap-6 rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Hakkımızda</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Dijital dönüşümde sade ve kurumsal yaklaşım</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-base leading-8 text-slate-600">
              SWISE Bilgi Teknolojileri ve Danışmanlık Hizmetleri Ltd. Şti., SAP ABAP yazılım geliştirme
              ve e-Dönüşüm çözümleri alanında uzmanlaşmış bir teknoloji firmasıdır. Güçlü teknik bilgi,
              proje deneyimi ve müşteri odaklı yaklaşımı ile kurumların iş süreçlerini iyileştiren,
              verimliliği artıran ve sürdürülebilir değer yaratan çözümler sunar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Hizmetlerimiz</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">İş süreçlerinizi güçlendiren çözümler</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            SAP altyapınızdan e-Dönüşüm operasyonlarınıza kadar tüm süreçler için modern, güvenilir ve
            entegre hizmetler.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {service.title}
              </div>
              <p className="leading-7 text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="neden-biz" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] bg-slate-950 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Neden SWISE</p>
            <h2 className="mt-4 text-3xl font-semibold">Kurumsal ihtiyaçlara uygun, sonuç odaklı yaklaşım</h2>
            <p className="mt-5 leading-8 text-slate-300">
              SAP ABAP uzmanlığımız ve e-Dönüşüm ürün ailemiz sayesinde müşterilerimize tek noktadan,
              entegre ve sürdürülebilir çözümler sunuyoruz. Analizden canlı kullanıma kadar tüm
              süreçlerde güvenilir iş ortağı olarak konumlanıyoruz.
            </p>
          </div>

          <div className="grid gap-4">
            {differentiators.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-base font-semibold text-slate-900"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="referanslar" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Referanslar</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">
              Farklı sektörlerde kurumsal ihtiyaçlara yönelik çözümler
            </h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            SWISE, SAP ABAP danışmanlığı ve e-Dönüşüm çözümleri ile farklı ölçeklerdeki işletmelerin
            dijital dönüşüm süreçlerine katkı sunmayı hedefler.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {references.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logosu`}
                    width={72}
                    height={72}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  {item.title}
                </div>
              </div>
              <div className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                {item.sector}
              </div>
              <div className="mt-3 text-base font-semibold text-slate-900">
                {item.service}
              </div>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <div className="text-3xl font-semibold text-slate-900">Kurumsal yaklaşım</div>
              <p className="mt-3 leading-7 text-slate-600">
                Her projede iş ihtiyacını, teknik gereksinimleri ve sürdürülebilir yapıyı birlikte ele alıyoruz.
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold text-slate-900">Entegrasyon odağı</div>
              <p className="mt-3 leading-7 text-slate-600">
                SAP sistemleri ile e-Dönüşüm süreçleri arasında güçlü ve yönetilebilir entegrasyonlar kuruyoruz.
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold text-slate-900">Uzun vadeli değer</div>
              <p className="mt-3 leading-7 text-slate-600">
                Sadece geliştirme değil, kurumsal ölçekte güvenilir ve uzun ömürlü çözüm yapıları sunmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] bg-slate-100 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Vizyonumuz</p>
            <p className="mt-4 text-2xl font-semibold leading-9 text-slate-900">
              Dijital dönüşüm alanında güvenilir ve tercih edilen bir teknoloji çözüm ortağı olmak.
            </p>
          </div>
          <div className="rounded-[32px] bg-blue-600 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Misyonumuz</p>
            <p className="mt-4 text-2xl font-semibold leading-9">
              Müşterilerimize verimliliği artıran, sürdürülebilir ve yüksek kaliteli yazılım çözümleri sunmak.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 md:py-16">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">İletişim</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Kurumsal çözümler için bizimle iletişime geçin</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                SAP ABAP danışmanlığı, e-Dönüşüm ürünleri ve entegrasyon ihtiyaçlarınız için size uygun
                çözüm yapısını birlikte kurgulayalım. Talebinizi iletin, ekibimiz en kısa sürede sizinle
                iletişime geçsin.
              </p>

              <div className="mt-8 grid gap-4 rounded-[28px] bg-slate-50 p-6">
                <div className="rounded-3xl bg-white p-5">
                  <div className="text-sm text-slate-500">Şirket</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    SWISE Bilgi Teknolojileri ve Danışmanlık Hizmetleri Ltd. Şti.
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <div className="text-sm text-slate-500">E-Posta</div>
                  <div className="mt-1 font-semibold text-slate-900">info@swise.com.tr</div>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <div className="text-sm text-slate-500">Hizmet alanları</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    SAP ABAP, e-Fatura, e-Arşiv, e-İrsaliye, e-Defter, e-Mutabakat
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-slate-50 p-6 md:p-8">
              <form ref={formRef} className="grid gap-5" onSubmit={handleContactSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Ad Soyad</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Firma Adı</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Firma adınızı giriniz"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">E-Posta</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="ornek@firma.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Telefon</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">İlgilendiğiniz hizmet</label>
                  <select
                    name="service"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    required
                  >
                    <option>SAP ABAP Danışmanlığı</option>
                    <option>e-Fatura</option>
                    <option>e-Arşiv</option>
                    <option>e-İrsaliye</option>
                    <option>e-Defter</option>
                    <option>e-Mutabakat</option>
                    <option>Entegrasyon Hizmetleri</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Mesajınız</label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Talebinizi ve ihtiyaçlarınızı yazabilirsiniz"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    required
                  />
                </div>

                {submitState.kind !== "idle" ? (
                  <p
                    aria-live="polite"
                    className={
                      submitState.kind === "success"
                        ? "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                        : "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    }
                  >
                    {submitState.message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-center rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Talep Gönder"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10">
          <div>(c) 2026 SWISE Bilgi Teknolojileri ve Danışmanlık Hizmetleri Ltd. Şti.</div>
          <div>SAP ABAP . e-Fatura . e-Arşiv . e-İrsaliye . e-Defter . e-Mutabakat</div>
        </div>
      </footer>
    </main>
  );
}
