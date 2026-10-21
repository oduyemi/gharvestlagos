
import MCBenefits from "@/components/mc/Benefits";
import MCCTA from "@/components/mc/CTA";
import { MCExperience } from "@/components/mc/Experience";
import { MCHero } from "@/components/mc/Hero";
import { MCIntroduction } from "@/components/mc/Intro";
import { MCZones } from "@/components/mc/Zones";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "MC | Global Harvest Church Maryland, Lagos",
  description:
    "Discover Global Harvest Church, Maryland, Lagos — a Christian community committed to helping people discover their God-given purpose through life-transforming experiences with Christ.",
  alternates: {
    canonical: "/missional-communities",
  },
  openGraph: {
    title: "Missional Communities | Global Harvest Church Maryland, Lagos",
    description:
      "Discover our mission, vision, FLoAT values and the story of the wider Global Harvest Church ministry.",
    url: "/missional-communities",
    type: "website",
    images: [
      {
        url: "/images/hero/mc.jpg",
        width: 1200,
        height: 630,
        alt: "Global Harvest Church, Maryland, Lagos",
      },
    ],
  },
};

export default function MCs() {
  return (
    <main>
      <MCHero />
      <MCIntroduction />
      <MCExperience />
      <MCBenefits />
      <MCZones/>
      <MCCTA />
    </main>
  );
}
