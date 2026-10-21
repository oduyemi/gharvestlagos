
import { MCLiveAbout } from "@/components/mclive/About";
import { MCLiveWOWCTA } from "@/components/mclive/CTA";
import { MCLiveFindYourCommunity } from "@/components/mclive/Find";
import { MCLiveHero } from "@/components/mclive/Hero";
import { MCLiveHighlights } from "@/components/mclive/Highlights";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "JOIN MC Live | Global Harvest Church Maryland, Lagos",
  description:
    "Discover Global Harvest Church, Maryland, Lagos — a Christian community committed to helping people discover their God-given purpose through life-transforming experiences with Christ.",
  alternates: {
    canonical: "/mc-live",
  },
  openGraph: {
    title: "JOIN MC LIVE | Global Harvest Church Maryland, Lagos",
    description:
      " Midweek teachings, prayers, and interactive community engagement centered on the church's vision of helping people discover their purpose in Christ.",
    url: "/mc-live",
    type: "website",
    images: [
      {
        url: "/images/hero/mclive.jpeg",
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
      <MCLiveFindYourCommunity />
      <MCLiveWOWCTA />
    </main>
  );
}
