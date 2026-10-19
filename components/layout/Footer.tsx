
"use client";

import Link from "next/link";
import {
  ArrowRightOutlined,
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  HeartFilled,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Worship Online", href: "/worship-online" },
  { label: "Missional Communities", href: "/missional-communities" },
  { label: "Resources", href: "/resources" },
];

const connectLinks = [
  { label: "Connect With Us", href: "/connect" },
  { label: "Join MC Live", href: "/mc-live" },
  { label: "Shop for Free", href: "/shop4free" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gharvestchurch",
    icon: YoutubeFilled,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/gharvestchurch",
    icon: FacebookFilled,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gharvestchurch/",
    icon: InstagramFilled,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-blue-dark text-white">
      {/* Subtle brand accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 h-80 w-80 rounded-full border-[50px] border-brand-cyan/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-28 h-80 w-80 rounded-full bg-brand-cyan/[0.06] blur-3xl"
      />

      <div className="gh-container relative mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Main footer */}
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] lg:gap-10 lg:py-16">
          {/* Brand and introduction */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Global Harvest Church home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-blue-dark">
                <HeartFilled className="text-xl" />
              </span>

              <span className="leading-tight">
                <span className="block text-base font-extrabold tracking-tight sm:text-lg">
                  GLOBAL HARVEST
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-cyan">
                  Church
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/65">
              A community growing in love, grounded in faith, and living with
              purpose. Wherever you are, there&apos;s room for you in the
              Global Harvest Church family.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white/75 transition-colors hover:border-brand-gold/60 hover:bg-white/10 hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Explore
            </h2>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-cyan/70 transition-colors group-hover:bg-brand-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Get Connected
            </h2>

            <ul className="mt-5 space-y-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-cyan/70 transition-colors group-hover:bg-brand-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and CTA */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Stay in Touch
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/65">
              Have a question or want to know more about our church? We&apos;d
              love to hear from you.
            </p>

            <Link
              href="/contact"
              className="group mt-5 inline-flex min-h-10 items-center gap-2 rounded-md bg-brand-gold px-4 py-2.5 text-xs font-bold text-brand-blue-dark transition-colors hover:bg-white sm:text-sm"
            >
              Contact Our Team
              <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-5 space-y-3">
              <Link
                href="/contact"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <MailOutlined className="mt-1 shrink-0 text-brand-cyan" />
                <span>Send us a message</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <EnvironmentOutlined className="mt-1 shrink-0 text-brand-cyan" />
                <span>Find out how to visit</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scripture-inspired brand message */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-xs text-white/55 sm:text-sm">
              <HeartFilled className="text-brand-gold" />
              A place to belong. A faith to grow. A purpose to live.
            </p>

            <Link
              href="/worship-online"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan transition-colors hover:text-white sm:text-sm"
            >
              Worship with us online
              <ArrowRightOutlined />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-5">
          <div className="flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} Global Harvest Church. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/privacy"
                className="transition-colors hover:text-white/80"
              >
                Privacy
              </Link>

              <Link
                href="/contact"
                className="transition-colors hover:text-white/80"
              >
                Contact
              </Link>

              <a
                href="#top"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-gold"
              >
                Back to top
                <ArrowUpOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
