import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  company?: string;
  email?: string;
  message?: string;
  name?: string;
  phone?: string;
  service?: string;
};

function getEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Gecersiz istek verisi gonderildi." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() || "";
  const company = payload.company?.trim() || "";
  const email = payload.email?.trim() || "";
  const phone = payload.phone?.trim() || "";
  const service = payload.service?.trim() || "";
  const message = payload.message?.trim() || "";

  if (!name || !company || !email || !phone || !service || !message) {
    return NextResponse.json(
      { message: "Lutfen tum alanlari doldurun." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Lutfen gecerli bir e-posta adresi girin." },
      { status: 400 },
    );
  }

  try {
    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = Number.parseInt(getEnv("SMTP_PORT"), 10);
    const smtpUser = getEnv("SMTP_USER");
    const smtpPass = getEnv("SMTP_PASS");
    const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
    const secure = (process.env.SMTP_SECURE || "").toLowerCase() === "true" || smtpPort === 465;

    const transporter = nodemailer.createTransport({
      auth: {
        pass: smtpPass,
        user: smtpUser,
      },
      host: smtpHost,
      port: smtpPort,
      secure,
    });

    await transporter.sendMail({
      from: `"SWISE Web Formu" <${contactFromEmail}>`,
      html: `
        <h2>Yeni iletisim formu talebi</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(name)}</p>
        <p><strong>Firma:</strong> ${escapeHtml(company)}</p>
        <p><strong>E-Posta:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Hizmet:</strong> ${escapeHtml(service)}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
      replyTo: email,
      subject: `SWISE Iletisim Formu - ${name}`,
      text: [
        "Yeni iletisim formu talebi",
        `Ad Soyad: ${name}`,
        `Firma: ${company}`,
        `E-Posta: ${email}`,
        `Telefon: ${phone}`,
        `Hizmet: ${service}`,
        `Mesaj: ${message}`,
      ].join("\n"),
      to: contactToEmail,
    });

    return NextResponse.json({
      message: "Mesajiniz alindi. En kisa surede size donus yapacagiz.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      {
        message:
          "Mesaj gonderilirken bir sorun olustu. Lutfen daha sonra tekrar deneyin.",
      },
      { status: 500 },
    );
  }
}
