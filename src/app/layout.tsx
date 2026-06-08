import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbluesky.co.ke"),
  title: {
    default: "Apex Blue Sky — TikTok Ads for Kenyan Businesses",
    template: "%s | Apex Blue Sky",
  },
  description:
    "Run profitable TikTok Ads for your Kenyan business. Start from KES 5,000/day. Official TikTok for Business partner. 200+ businesses helped across East Africa.",
  keywords: [
    "TikTok Ads Kenya",
    "TikTok advertising Kenya",
    "social media marketing Nairobi",
    "digital marketing Kenya",
    "TikTok for Business Kenya",
    "run TikTok ads",
    "Apex Blue Sky",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://apexbluesky.co.ke",
    siteName: "Apex Blue Sky",
    title: "Apex Blue Sky — TikTok Ads for Kenyan Businesses",
    description:
      "Run profitable TikTok Ads for your Kenyan business from KES 5,000/day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Blue Sky — TikTok Ads for Kenyan Businesses",
    site: "@apexbluesky",
  },
  robots: { index: true, follow: true },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
