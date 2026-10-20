
import { MCLiveAbout } from "@/components/mclive/About";
import { MCLiveHero } from "@/components/mclive/Hero";
import { MCLiveHighlights } from "@/components/mclive/Highlights";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "JOIN MC Live | Global Harvest Church Maryland, Lagos",
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
        url: "/images/about/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Global Harvest Church, Maryland, Lagos",
      },
    ],
  },
};

export default function MCOnline() {
  return (
    <main>
      <MCLiveHero />
      <MCLiveAbout />
      <MCLiveHighlights/>
    </main>
  );
}
