
import {AboutHero} from "@/components/about/Hero";
import {AboutHistory} from "@/components/about/History";
import {AboutIntro} from "@/components/about/Intro";
import {AboutPurposes} from "@/components/about/Purposes";
import {AboutValues} from "@/components/about/Values";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shop4Free | Compassion in Action | Global Harvest Church",
  description:
    "Discover Shop4Free, Global Harvest Church's community outreach initiative launched in 2011 to support struggling families and community workers with practical assistance, dignity, and hope.",
  alternates: {
    canonical: "/shop4free",
  },
  openGraph: {
    title: "Shop4Free | Global Harvest Church",
    description:
      "A practical expression of compassion offering hope, dignity, and material support to communities in need.",
    url: "/shop4free",
    type: "website",
    images: [
      {
        url: "/images/shop4free/hero.jpg",
        alt: "Shop4Free community outreach by Global Harvest Church",
      },
    ],
  },
};

export default function AboutAwa() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutHistory />
      <AboutPurposes />
    </main>
  );
}
