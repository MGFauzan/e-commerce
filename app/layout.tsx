import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://openhelp.pages.dev"),
  title: {
    default: "OpenHelp — Jasa Coding Profesional | Website, Tugas, Refactoring",
    template: "%s | OpenHelp",
  },
  description:
    "Jasa coding profesional: pembuatan website, joki tugas, refactoring kode, open source modding. Cepat, berkualitas, harga terjangkau. Hubungi kami sekarang!",
  keywords: [
    "jasa coding",
    "jasa pembuatan website",
    "joki tugas programming",
    "refactoring kode",
    "web developer Indonesia",
    "next.js developer",
    "freelance programmer",
    "openhelp",
  ],
  authors: [{ name: "OpenHelp Team", url: "https://openhelp.pages.dev" }],
  creator: "OpenHelp",
  publisher: "OpenHelp",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://openhelp.dev",
    siteName: "OpenHelp",
    title: "OpenHelp — Jasa Coding Profesional",
    description:
      "Pembuatan website, joki tugas, refactoring, open source modding. Cepat & profesional.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenHelp — Jasa Coding Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenHelp — Jasa Coding Profesional",
    description: "Pembuatan website, joki tugas, refactoring, open source modding.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "OpenHelp",
              description: "Jasa coding profesional: website, tugas, refactoring",
              url: "https://openhelp.dev",
              email: "hello@openhelp.dev",
              areaServed: "ID",
              serviceType: [
                "Web Development",
                "Software Engineering",
                "Code Refactoring",
                "Open Source Development",
              ],
              priceRange: "Rp 50.000 - Rp 5.000.000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
            }),
          }}
        />
      </head>
      <body className="scanlines crt-noise antialiased">
        {children}
      </body>
    </html>
  );
}
