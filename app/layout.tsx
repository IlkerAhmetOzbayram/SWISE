import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SWISE | SAP ABAP ve e-Donusum Cozumleri",
  description: "SWISE icin SAP ABAP, e-Donusum ve entegrasyon hizmetlerini tanitan kurumsal web sitesi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
