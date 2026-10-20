
import type { Metadata } from "next";
import {AboutHero} from "@/components/about/Hero";
import {AboutIntro} from "@/components/about/Intro";
import {AboutMissionVision} from "@/components/about/MissionVision";
import {AboutValues} from "@/components/about/Values";
import {AboutHistory} from "@/components/about/History";
import {AboutPurposes} from "@/components/about/Purposes";
import {AboutLocations} from "@/components/about/Locations";
import {AboutCTA} from "@/components/about/CTA";

export const metadata: Metadata = {
  title: "About Us | Global Harvest Church Maryland, Lagos",
  description:
    "Discover Global Harvest Church, Maryland, Lagos — a Christian community committed to helping people discover their God-given purpose through life-transforming experiences with Christ.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Global Harvest Church Maryland, Lagos",
    description:
      "Discover our mission, vision, FLoAT values and the story of the wider Global Harvest Church ministry.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/hero/about.jpg",
        width: 1200,
        height: 630,
        alt: "Global Harvest Church, Maryland, Lagos",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />

      <AboutMissionVision />

      <AboutValues />
      <AboutHistory />
      <AboutPurposes />
      <AboutLocations />
      <AboutCTA />
    </main>
  );
}
