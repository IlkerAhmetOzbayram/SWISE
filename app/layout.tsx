import type { Metadata } from "next";
import "./globals.css";
import { companyName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SWISE | SAP ABAP ve e-Donusum Cozumleri",
    template: "%s | SWISE",
  },
  description:
    "SWISE; SAP ABAP danismanligi, e-Donusum urunleri ve entegrasyon hizmetleri sunan kurumsal teknoloji sirketidir.",
  applicationName: "SWISE",
  keywords: [
    "SAP ABAP danismanligi",
    "e-Donusum",
    "e-Fatura",
    "e-Arsiv",
    "e-Irsaliye",
    "e-Defter",
    "e-Mutabakat",
    "SAP entegrasyon",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SWISE | SAP ABAP ve e-Donusum Cozumleri",
    description:
      "SWISE; SAP ABAP danismanligi, e-Donusum urunleri ve entegrasyon hizmetleri sunan kurumsal teknoloji sirketidir.",
    url: siteUrl,
    siteName: "SWISE",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo-v3.png",
        width: 768,
        height: 768,
        alt: "SWISE logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "SWISE | SAP ABAP ve e-Donusum Cozumleri",
    description:
      "SAP ABAP danismanligi, e-Donusum urunleri ve entegrasyon hizmetleri icin kurumsal teknoloji cozumleri.",
    images: ["/logo-v3.png"],
  },
  icons: {
    icon: "/logo-v3.png",
    shortcut: "/logo-v3.png",
    apple: "/logo-v3.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SWISE",
  legalName: companyName,
  url: siteUrl,
  logo: `${siteUrl}/logo-v3.png`,
  email: "info@swise.com.tr",
  sameAs: [siteUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@swise.com.tr",
      availableLanguage: ["tr", "en"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SWISE",
  url: siteUrl,
  inLanguage: "tr-TR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
