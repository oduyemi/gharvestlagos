import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { ConditionalFooter } from "@/components/layout/ConditionalFooter";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Global Harvest Church | Love, Faith & Purpose",
    template: "%s | Global Harvest Church, Maryland, Lagos",
  },
  description:
    "Discover Global Harvest Church, explore church communities and upcoming events, and join a community committed to Christian unity, faith, and purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Header />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}