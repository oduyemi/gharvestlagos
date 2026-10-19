import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/Hero";
import { ContactOptions } from "@/components/contact/Options";
import { ContactForm } from "@/components/contact/Form";
import { ContactConnect } from "@/components/contact/Connect";
import { PrayerRequests } from "@/components/contact/PrayerRequests";
import { NextStep } from "@/components/contact/NextStep";


export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Global Harvest Church. Send us an enquiry, share a prayer request, or discover ways to connect with our church family.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Global Harvest Church",
    description:
      "We'd love to hear from you. Contact Global Harvest Church for enquiries, prayer requests, and ways to connect.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactOptions />
      <PrayerRequests />
      <NextStep />
      <ContactForm />
      <ContactConnect />
    </main>
  );
}