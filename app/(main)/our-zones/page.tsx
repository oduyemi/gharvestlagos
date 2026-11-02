import type { Metadata } from "next";
import { OurZonesHero } from "@/components/our-zones/Hero";
import { OurZonesDirectory } from "@/components/our-zones/Directory";
import { OurZonesCTA } from "@/components/our-zones/CTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const pageTitle = "Our Zones | Missional Communities Across Lagos – Global Harvest Church";
const pageDescription = "Explore the seven Missional Community zones of Global Harvest Church, Maryland, Lagos. Find neighbourhood coverage across Lagos and connect with a community near you.";


export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Global Harvest Church zones",
    "Missional Communities Lagos",
    "Global Harvest Maryland Lagos",
    "Christian communities Lagos",
    "Missional Communities in Lagos",
    "church fellowship Lagos",
    "Lagos neighbourhood church communities",
    "Global Harvest Church Maryland",
  ],
  alternates: siteUrl
    ? {
        canonical: `${siteUrl}/our-zones`,
      }
    : undefined,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    locale: "en_NG",
    siteName: "Global Harvest Church",
    url: siteUrl ? `${siteUrl}/our-zones` : undefined,
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/images/missional-communities/mc-hero.jpg`,
            width: 1200,
            height: 630,
            alt: "Missional Communities at Global Harvest Church, Lagos",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: siteUrl
      ? [`${siteUrl}/images/missional-communities/mc-hero.jpg`]
      : undefined,
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

const zonesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  ...(siteUrl && {
    url: `${siteUrl}/our-zones`,
    isPartOf: {
      "@type": "WebSite",
      name: "Global Harvest Church",
      url: siteUrl,
    },
  }),
  about: {
    "@type": "Thing",
    name: "Missional Communities",
    description:
      "Neighbourhood-based Christian communities organized into seven zones across Lagos by Global Harvest Church, Maryland.",
  },
  ...(siteUrl && {
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Zones",
          item: `${siteUrl}/our-zones`,
        },
      ],
    },
  }),
};

export default function OurZonesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(zonesStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main id="main-content">
        <OurZonesHero />
        <OurZonesDirectory />
        <OurZonesCTA />
      </main>
    </>
  );
}
