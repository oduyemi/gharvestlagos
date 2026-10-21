
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://gharvestchurch.org";
const siteName = "Global Harvest Church, Maryland, Lagos";
const siteDescription =
  "Discover Global Harvest Church in Maryland, Lagos, Nigeria. Explore our Sunday worship services, Wednesday Word, Prayer & Communion, church ministries, leadership, events, and a Christ-centred community committed to faith and purpose.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: siteName,

  title: {
    default:
      "Global Harvest Church Maryland, Lagos | Sunday Services",
    template: "%s | Global Harvest Church, Maryland, Lagos",
  },

  description: siteDescription,

  category: "religion",

  alternates: {
    languages: {
      "en-NG": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName,
    title:
      "Global Harvest Church Maryland, Lagos | Sunday Services",
    description: siteDescription,
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

  appleWebApp: {
    capable: true,
    title: "Global Harvest",
    statusBarStyle: "black-translucent",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2265",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
