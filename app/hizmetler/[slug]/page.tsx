import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, servicePages, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  props: PageProps<"/hizmetler/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteUrl}/hizmetler/${service.slug}`,
      siteName: "SWISE",
      locale: "tr_TR",
      type: "article",
    },
  };
}

export default async function ServiceDetailPage(props: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
            {service.shortTitle}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
            {service.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          {service.details.map((detail) => (
            <p key={detail} className="leading-8 text-slate-600">
              {detail}
            </p>
          ))}
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Neler saglar?</h2>
          <div className="mt-5 grid gap-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700">
                {benefit}
              </div>
            ))}
          </div>
          <a
            href="/#iletisim"
            className="mt-6 inline-flex rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Bu hizmet icin iletisime gecin
          </a>
        </aside>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Diger hizmetler</div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {servicePages
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <a
                  key={item.slug}
                  href={`/hizmetler/${item.slug}`}
                  className="rounded-2xl bg-slate-50 p-5 transition hover:bg-blue-50"
                >
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{item.summary}</div>
                </a>
              ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metaDescription,
            provider: {
              "@type": "Organization",
              name: "SWISE",
              url: siteUrl,
            },
            areaServed: "TR",
            serviceType: service.title,
            url: `${siteUrl}/hizmetler/${service.slug}`,
          }),
        }}
      />
    </main>
  );
}
