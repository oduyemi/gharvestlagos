
import type { Metadata } from "next";
import { Shop4FreeHero } from "@/components/shop4free/Hero";
import { Shop4FreeStory } from "@/components/shop4free/Story";
import { Shop4FreeHowItWorks } from "@/components/shop4free/HowItWorks";
import { Shop4FreeSupport } from "@/components/shop4free/Support";
import { Shop4FreeImpact } from "@/components/shop4free/Impact";
import { Shop4FreeGetInvolved } from "@/components/shop4free/GetInvolved";
import Shop4FreeGallery from "@/components/shop4free/Gallery";

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

export default function Shop4Free() {
  return (
    <main>
      <Shop4FreeHero />
      <Shop4FreeStory />
      <Shop4FreeGallery />
      <Shop4FreeHowItWorks />
      <Shop4FreeSupport />
      <Shop4FreeImpact />
      <Shop4FreeGetInvolved />
    </main>
  );
}
