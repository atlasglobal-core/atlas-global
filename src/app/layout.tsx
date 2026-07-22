import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atlasglobal.digital"),
  title: "Atlas Global — Research, Architecture & Platforms",
  description:
    "A Atlas Global investiga, arquiteta e desenvolve plataformas digitais inteligentes, combinando inteligência artificial, engenharia de software, cloud e inovação.",
  keywords: [
    "Atlas Global",
    "Research Architecture Platforms",
    "inteligência artificial",
    "engenharia de software",
    "plataformas digitais",
    "cloud",
    "transformação digital",
    "blockchain",
    "fintech",
  ],
  authors: [{ name: "Atlas Global" }],
  creator: "Atlas Global",
  publisher: "Atlas Global",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Atlas Global — Research, Architecture & Platforms",
    description:
      "A Atlas Global investiga, arquiteta e desenvolve plataformas digitais inteligentes, combinando inteligência artificial, engenharia de software, cloud e inovação.",
    url: "https://atlasglobal.digital",
    siteName: "Atlas Global",
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Global — Research, Architecture & Platforms",
    description:
      "A Atlas Global investiga, arquiteta e desenvolve plataformas digitais inteligentes, combinando inteligência artificial, engenharia de software, cloud e inovação.",
  },
  alternates: { canonical: "https://atlasglobal.digital" },
};

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Atlas Global",
    alternateName: "ATLAS GLOBAL",
    url: "https://atlasglobal.digital",
    logo: "https://atlasglobal.digital/logo.svg",
    description:
      "Atlas Global é uma empresa de Research, Architecture & Platforms.",
    sameAs: ["https://github.com/atlasglobal-core/atlas-global"],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@atlasglobal.digital",
      contactType: "customer service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="dark" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}