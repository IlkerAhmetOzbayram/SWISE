"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "SAP ABAP Danismanligi",
    desc: "Kurumsal ihtiyaclara ozel ABAP gelistirme, bakim, optimizasyon ve S/4HANA uyumlu cozumler.",
  },
  {
    title: "E-Fatura",
    desc: "Yasal uyumlu, guvenli ve surdurulebilir e-Fatura surec yonetimi cozumleri.",
  },
  {
    title: "E-Arsiv",
    desc: "Dijital belge yonetimini kolaylastiran, hizli ve izlenebilir e-Arsiv altyapisi.",
  },
  {
    title: "E-Irsaliye",
    desc: "Operasyon sureclerini hizlandiran, entegrasyon odakli e-Irsaliye uygulamalari.",
  },
  {
    title: "E-Defter",
    desc: "Mevzuata uygun, kontrol edilebilir ve guvenilir e-Defter cozumleri.",
  },
  {
    title: "E-Mutabakat",
    desc: "Ticari mutabakat sureclerini dijitallestiren verimli ve merkezi yonetim yapisi.",
  },
];

const reasons = [
  "SAP ABAP uzmanligi",
  "e-Donusum urun ailesi",
  "Kurumsal ve surdurulebilir yaklasim",
  "Entegrasyon odakli cozum yapisi",
];

const menuItems = [
  { name: "Ana Sayfa", link: "#anasayfa" },
  { name: "Hakkimizda", link: "#hakkimizda" },
  { name: "Hizmetler", link: "#hizmetler" },
  { name: "Neden SWISE", link: "#neden-biz" },
  { name: "Referanslar", link: "#referanslar" },
  { name: "Iletisim", link: "#iletisim" },
];

const references = [
  {
    title: "Uretim ve Sanayi",
    desc: "Operasyonel sureclerin dijitallestirilmesi, SAP uyumlu gelistirmeler ve entegrasyon cozumleri.",
  },
  {
    title: "Finans ve Kurumsal Yapilar",
    desc: "Yasal uyumluluk, e-Donusum surecleri ve surdurulebilir dijital belge yonetimi cozumleri.",
  },
  {
    title: "Lojistik ve Tedarik Zinciri",
    desc: "e-Irsaliye, veri akisi, surec takibi ve entegrasyon odakli kurumsal altyapi destegi.",
  },
  {
    title: "Kurumsal Donusum Projeleri",
    desc: "SAP ABAP ozel gelistirme, surec iyilestirme ve uctan uca dijital donusum yaklasimi.",
  },
];

const differentiators = [
  "Kuruma ozel yazilim ve danismanlik yaklasimi",
  "SAP sistemleri ile uyumlu entegrasyon cozumleri",
  "Yasal uyumluluk ve operasyonel verimlilik odagi",
  "Uzun vadeli, guvenilir is ortakligi anlayisi",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Image
                src="/logo.png"
                alt="SWISE Logo"
                width={144}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-[0.22em] text-stone-950">
                SWISE
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Teknoloji ve Danismanlik
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
              aria-label="Mobil menuyu ac"
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
              SAP ABAP . E-Donusum . Entegrasyon Cozumleri
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl xl:text-6xl">
              SAP ABAP ve e-Donusum sureclerinde guvenilir, yalin ve kurumsal cozumler
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              SWISE, kurumlarin dijital donusum yolculugunda SAP ABAP danismanligi, e-Donusum urunleri
              ve entegrasyon hizmetleri ile uctan uca cozum sunar. Teknik gucu is sureci bilgisiyle
              birlestirerek daha verimli ve daha yonetilebilir yapilar kurar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#hizmetler"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
              >
                Hizmetleri Inceleyin
              </a>
              <a
                href="#iletisim"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Teklif Alin
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
                    <div className="text-xs text-slate-500">Kurumsal teknoloji cozumleri</div>
                  </div>
                  <div className="rounded-full bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
                    Enterprise Ready
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Ana uzmanlik</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      SAP ABAP danismanligi ve ozel gelistirme
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Urun ailesi</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      e-Fatura, e-Arsiv, e-Irsaliye, e-Defter, e-Mutabakat
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-50 p-5">
                    <div className="text-sm text-slate-500">Yaklasim</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">
                      Entegre, surdurulebilir ve kurum ihtiyaclarina ozel cozumler
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl bg-blue-700 p-5 text-white">
                    <div className="text-sm text-blue-100">Odak</div>
                    <div className="mt-2 text-xl font-bold">SAP ve e-Donusum</div>
                  </div>
                  <div className="rounded-3xl bg-slate-900 p-5 text-white">
                    <div className="text-sm text-slate-300">Hedef</div>
                    <div className="mt-2 text-xl font-bold">Verimlilik ve uyum</div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Hakkimizda</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Dijital donusumde sade ve kurumsal yaklasim</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-base leading-8 text-slate-600">
              SWISE Bilgi Teknolojileri ve Danismanlik Hizmetleri Ltd. Sti., SAP ABAP yazilim gelistirme
              ve e-Donusum cozumleri alaninda uzmanlasmis bir teknoloji firmasidir. Guclu teknik bilgi,
              proje deneyimi ve musteri odakli yaklasimi ile kurumlarin is sureclerini iyilestiren,
              verimliligi artiran ve surdurulebilir deger yaratan cozumler sunar.
            </p>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Hizmetlerimiz</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Is sureclerinizi guclendiren cozumler</h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            SAP altyapinizdan e-Donusum operasyonlariniza kadar tum surecler icin modern, guvenilir ve
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
            <h2 className="mt-4 text-3xl font-semibold">Kurumsal ihtiyaclara uygun, sonuc odakli yaklasim</h2>
            <p className="mt-5 leading-8 text-slate-300">
              SAP ABAP uzmanligimiz ve e-Donusum urun ailemiz sayesinde musterilerimize tek noktadan,
              entegre ve surdurulebilir cozumler sunuyoruz. Analizden canli kullanima kadar tum
              sureclerde guvenilir is ortagi olarak konumlaniyoruz.
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
              Farkli sektorlerde kurumsal ihtiyaclara yonelik cozumler
            </h2>
          </div>
          <p className="max-w-2xl text-slate-600">
            SWISE, SAP ABAP danismanligi ve e-Donusum cozumleri ile farkli olceklerdeki isletmelerin
            dijital donusum sureclerine katki sunmayi hedefler.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {references.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {item.title}
              </div>
              <p className="leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[32px] border border-slate-200 bg-slate-50 p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <div className="text-3xl font-semibold text-slate-900">Kurumsal yaklasim</div>
              <p className="mt-3 leading-7 text-slate-600">
                Her projede is ihtiyacini, teknik gereksinimleri ve surdurulebilir yapiyi birlikte ele aliyoruz.
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold text-slate-900">Entegrasyon odagi</div>
              <p className="mt-3 leading-7 text-slate-600">
                SAP sistemleri ile e-Donusum surecleri arasinda guclu ve yonetilebilir entegrasyonlar kuruyoruz.
              </p>
            </div>

            <div>
              <div className="text-3xl font-semibold text-slate-900">Uzun vadeli deger</div>
              <p className="mt-3 leading-7 text-slate-600">
                Sadece gelistirme degil, kurumsal olcekte guvenilir ve uzun omurlu cozum yapilari sunmayi hedefliyoruz.
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
              Dijital donusum alaninda guvenilir ve tercih edilen bir teknoloji cozum ortagi olmak.
            </p>
          </div>
          <div className="rounded-[32px] bg-blue-600 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Misyonumuz</p>
            <p className="mt-4 text-2xl font-semibold leading-9">
              Musterilerimize verimliligi artiran, surdurulebilir ve yuksek kaliteli yazilim cozumleri sunmak.
            </p>
          </div>
        </div>
      </section>

      <section id="iletisim" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8 md:px-10 md:py-16">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Iletisim</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Kurumsal cozumler icin bizimle iletisime gecin</h2>
              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                SAP ABAP danismanligi, e-Donusum urunleri ve entegrasyon ihtiyaclariniz icin size uygun
                cozum yapisini birlikte kurgulayalim. Talebinizi iletin, ekibimiz en kisa surede sizinle
                iletisime gecsin.
              </p>

              <div className="mt-8 grid gap-4 rounded-[28px] bg-slate-50 p-6">
                <div className="rounded-3xl bg-white p-5">
                  <div className="text-sm text-slate-500">Sirket</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    SWISE Bilgi Teknolojileri ve Danismanlik Hizmetleri Ltd. Sti.
                  </div>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <div className="text-sm text-slate-500">E-Posta</div>
                  <div className="mt-1 font-semibold text-slate-900">info@swise.com.tr</div>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <div className="text-sm text-slate-500">Hizmet alanlari</div>
                  <div className="mt-1 font-semibold text-slate-900">
                    SAP ABAP, e-Fatura, e-Arsiv, e-Irsaliye, e-Defter, e-Mutabakat
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-slate-50 p-6 md:p-8">
              <form className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="Adiniz ve soyadiniz"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Firma Adi</label>
                  <input
                    type="text"
                    placeholder="Firma adinizi giriniz"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">E-Posta</label>
                    <input
                      type="email"
                      placeholder="ornek@firma.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Telefon</label>
                    <input
                      type="tel"
                      placeholder="05xx xxx xx xx"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Ilgilendiginiz hizmet</label>
                  <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600">
                    <option>SAP ABAP Danismanligi</option>
                    <option>e-Fatura</option>
                    <option>e-Arsiv</option>
                    <option>e-Irsaliye</option>
                    <option>e-Defter</option>
                    <option>e-Mutabakat</option>
                    <option>Entegrasyon Hizmetleri</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Mesajiniz</label>
                  <textarea
                    rows={6}
                    placeholder="Talebinizi ve ihtiyaclarinizi yazabilirsiniz"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex justify-center rounded-2xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
                >
                  Talep Gonder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10">
          <div>(c) 2026 SWISE Bilgi Teknolojileri ve Danismanlik Hizmetleri Ltd. Sti.</div>
          <div>SAP ABAP . e-Fatura . e-Arsiv . e-Irsaliye . e-Defter . e-Mutabakat</div>
        </div>
      </footer>
    </main>
  );
}
