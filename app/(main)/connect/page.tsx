import type { Metadata } from "next";
import { ConnectHero } from "@/components/connect/Hero";
import { ConnectSocialChannels } from "@/components/connect/Channels";
import { ConnectSlido } from "@/components/connect/Questions";
import { ConnectCTA } from "@/components/connect/CTA";
import { MorningPrayer } from "@/components/connect/MorningPrayers";


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const pageTitle = "Connect With Us | Global Harvest Church Maryland, Lagos";
const pageDescription = "Connect with Global Harvest Church Maryland, Lagos. Watch us on YouTube, follow our Instagram and Facebook communities, and ask questions through Slido.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Global Harvest Church social media",
    "Global Harvest Church YouTube",
    "Global Harvest Church Instagram",
    "Global Harvest Church Facebook",
    "Global Harvest Church Maryland Lagos",
    "Connect with Global Harvest Church",
    "Church online Lagos",
    "Global Harvest Church Slido",
  ],
  alternates: siteUrl
    ? {
        canonical: `${siteUrl}/connect`,
      }
    : undefined,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "en_NG",
    siteName: "Global Harvest Church",
    url: siteUrl ? `${siteUrl}/connect` : undefined,
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/images/hero/connect.jpg`,
            width: 1200,
            height: 630,
            alt: "Connect with Global Harvest Church",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: siteUrl ? [`${siteUrl}/images/hero/connect.jpg`] : undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const connectStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  ...(siteUrl && {
    url: `${siteUrl}/connect`,
    isPartOf: {
      "@type": "WebSite",
      name: "Global Harvest Church",
      url: siteUrl,
    },
  }),
  about: {
    "@type": "Organization",
    name: "Global Harvest Church",
    sameAs: [
      "https://www.youtube.com/@gharvestchurch",
      // Add official Instagram and Facebook profile URLs here.
    ],
  },
};

export default function ConnectPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(connectStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main id="main-content">
        <ConnectHero />
        <ConnectSocialChannels />
        <ConnectSlido />
        <MorningPrayer />
        <ConnectCTA />
      </main>
    </>
  );
}
