import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GRM Digital",
    template: "%s | GRM Digital",
  },

  description:
    "Создаем сайты, которые продают. Разработка, дизайн, AI и автоматизация бизнеса.",

  keywords: [
    "создание сайтов",
    "разработка сайтов",
    "web design",
    "digital agency",
    "маркетинг",
    "лендинг",
    "Next.js",
    "GRM Digital",
  ],

  authors: [
    {
      name: "GRM Digital",
    },
  ],

  creator: "GRM Digital",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "GRM Digital — Создаем сайты, которые продают",
    description:
      "Разработка современных сайтов, дизайн, AI и автоматизация бизнеса.",
    siteName: "GRM Digital",
    locale: "ru_RU",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GRM Digital — Создаем сайты, которые продают",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GRM Digital — Создаем сайты, которые продают",
    description: "Создаем сайты, которые продают.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}