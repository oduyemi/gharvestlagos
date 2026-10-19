
import type { Metadata } from "next";
import { WorshipHero } from "@/components/worship-online/Hero";
import { LiveWorship } from "@/components/worship-online/LiveWorship";
import { OnlineServices } from "@/components/worship-online/OnlineServices";
import { WorshipConnect } from "@/components/worship-online/WorshipConnect";

export const metadata: Metadata = {
  title: "Worship Online",
  description:
    "Join Global Harvest Church online for worship and the Word. Watch live services, revisit previous online services, and connect with our church family on YouTube.",
  alternates: {
    canonical: "/worship-online",
  },
  openGraph: {
    title: "Worship Online | Global Harvest Church",
    description:
      "Worship with Global Harvest Church wherever you are. Join our live broadcasts and watch previous online services.",
    url: "/worship-online",
    type: "website",
  },
};

export default function WorshipOnlinePage() {
  return (
    <main>
      <WorshipHero />
      <LiveWorship />
      <OnlineServices />
      <WorshipConnect />
    </main>
  );
}
