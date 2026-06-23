import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Revy AI | الرد الذكي وحجز المواعيد التلقائي للعيادات والمراكز الطبية",
  description: "Revy AI يرد على استفسارات المرضى ويحجز مواعيدهم تلقائياً 24/7 على واتساب وفيسبوك وإنستجرام وموقعك الإلكتروني. لا تفقد مريضاً بعد اليوم.",
  keywords: ["Revy AI", "ذكاء اصطناعي للعيادات", "حجز مواعيد تلقائي", "رد تلقائي طبي", "خدمة عملاء عيادات", "أتمتة العيادات"],
  openGraph: {
    title: "Revy AI | الرد الذكي وحجز المواعيد التلقائي للعيادات والمراكز الطبية",
    description: "Revy AI يرد على استفسارات المرضى ويحجز مواعيدهم تلقائياً 24/7 على واتساب وفيسبوك وإنستجرام وموقعك الإلكتروني.",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-revy-bg-primary text-white flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
