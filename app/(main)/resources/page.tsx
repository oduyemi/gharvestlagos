import type { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/Hero";
import { ResourcesCategories } from "@/components/resources/Categories";
import { ResourcesCTA } from "@/components/resources/CTA";


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const pageTitle = "Christian Resources | Books, Blog, Sermons & Songs – Global Harvest Church";
const pageDescription = "Explore Christian resources from Global Harvest Church, Maryland, Lagos. Read faith-building articles, discover books by Rev. Victor Adeyemi and Pastor Jumoke Adeyemi, and access audio messages and songs.";



export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Global Harvest Church resources",
    "Christian resources Lagos",
    "Rev Victor Adeyemi books",
    "Pastor Jumoke Adeyemi books",
    "Christian blog",
    "Christian books for sale",
    "Christian sermons audio",
    "Christian songs",
    "faith building resources",
    "Global Harvest Church Maryland",
  ],
  alternates: siteUrl
    ? {
        canonical: `${siteUrl}/resources`,
      }
    : undefined,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "en_NG",
    siteName: "Global Harvest Church",
    url: siteUrl ? `${siteUrl}/resources` : undefined,
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/images/hero/resources.jpg`,
            width: 1200,
            height: 630,
            alt: "Christian resources from Global Harvest Church",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: siteUrl ? [`${siteUrl}/images/hero/resources.jpg`] : undefined,
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

const resourcesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  ...(siteUrl && {
    url: `${siteUrl}/resources`,
    isPartOf: {
      "@type": "WebSite",
      name: "Global Harvest Church",
      url: siteUrl,
    },
  }),
  about: [
    {
      "@type": "Thing",
      name: "Christian articles and blog",
      url: siteUrl ? `${siteUrl}/blog` : undefined,
    },
    {
      "@type": "Thing",
      name: "Christian books",
      url: siteUrl ? `${siteUrl}/books` : undefined,
    },
    {
      "@type": "Thing",
      name: "Christian audio messages and songs",
      url: siteUrl ? `${siteUrl}/audio` : undefined,
    },
  ],
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resourcesStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main id="main-content">
        <ResourcesHero />
        <ResourcesCategories />
        <ResourcesCTA />
      </main>
    </>
  );
}
