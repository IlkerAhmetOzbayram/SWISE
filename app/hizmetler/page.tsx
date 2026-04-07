import type { Metadata } from "next";
import { servicePages, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | SWISE",
  description:
    "SWISE hizmetleri: SAP ABAP danismanligi, e-Fatura, e-Arsiv, e-Irsaliye, e-Defter ve e-Mutabakat cozumleri.",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Hizmetlerimiz</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            SAP ABAP ve e-Donusum odakli kurumsal hizmet sayfalari
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
            Her hizmet alanimiz icin daha detayli bilgi, is kapsamı ve odak noktalarini bu sayfalarda
            bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicePages.map((service) => (
            <a
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {service.shortTitle}
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.summary}</p>
              <div className="mt-6 text-sm font-semibold text-blue-700">Detayli sayfayi incele</div>
            </a>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: servicePages.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${siteUrl}/hizmetler/${service.slug}`,
              name: service.title,
            })),
          }),
        }}
      />
    </main>
  );
}
