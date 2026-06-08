import type { Metadata } from "next";
import { SOCIAL_LINKS, WHATSAPP_NUMBER, CONTACT_EMAIL } from "@/data/content";
import "./globals.css";

const siteUrl = "https://apexbluesky.co.ke";
const siteTitle = "Apex Blue Sky — TikTok Ads for Kenyan Businesses";
const siteDescription =
  "Run profitable TikTok Ads for your Kenyan business from KES 5,000/day. Official TikTok for Business partner helping Kenyan brands grow with TikTok.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Apex Blue Sky",
  },
  description: siteDescription,
  keywords: [
    "TikTok Ads Kenya",
    "TikTok advertising Kenya",
    "TikTok marketing Nairobi",
    "digital marketing Kenya",
    "social media advertising",
    "TikTok for Business Kenya",
    "business growth Kenya",
    "Apex Blue Sky",
  ],
  authors: [{ name: "Apex Blue Sky", url: siteUrl }],
  applicationName: "Apex Blue Sky",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Apex Blue Sky",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@apexbluesky",
    site: "@apexbluesky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en": siteUrl,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Apex Blue Sky",
      url: siteUrl,
      telephone: `+${WHATSAPP_NUMBER}`,
      email: CONTACT_EMAIL,
      sameAs: Object.values(SOCIAL_LINKS),
      description: siteDescription,
      areaServed: "Kenya",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Apex Blue Sky",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
