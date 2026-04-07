import type { MetadataRoute } from "next";
import { servicePages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/hizmetler`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/hizmetler/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
