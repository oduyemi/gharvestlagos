
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, ArrowUpOutlined, EnvironmentOutlined } from "@ant-design/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Churches", href: "/churches" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  const reduceMotion = useReducedMotion();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

useEffect(() => {
  setCurrentYear(new Date().getFullYear());
}, []);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#071943] text-white">
      {/* Decorative brand background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,#071943_0%,#0b2265_55%,#071943_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 -z-10 h-96 w-96 rounded-full bg-gh-cyan/[0.08] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-gh-gold/[0.06] blur-[100px]"
      />

      {/* Top accent */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-gh-navy via-gh-cyan to-gh-gold"
      />

      <div className="gh-container">
        {/* Main footer columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.35fr_0.85fr_0.8fr] lg:gap-16 lg:py-20"
        >
          {/* Church identity */}
          <motion.div variants={reveal} className="max-w-md">
            <Link
              href="/"
              aria-label="Global Harvest Church homepage"
              className="inline-flex items-center rounded-lg transition-opacity hover:opacity-85"
            >
              <Image
                src="/images/logo/logo.PNG"
                alt="Global Harvest Church"
                width={210}
                height={78}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <div className="mb-5 mt-6 h-[3px] w-12 rounded-full bg-gh-gold" />

            <h2 className="mb-4 font-serif text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">
              United in Christ.
              <span className="mt-1 block text-gh-cyan">
                Growing in purpose.
              </span>
            </h2>

            <p className="mb-0 text-sm leading-7 text-white/65 sm:text-[15px]">
              We seek to unify the Church. As the display of God&apos;s glory
              and wisdom (Ephesians 3:10), we are called to preserve Christian
              unity in the bond of peace (Ephesians 4:1–3).
            </p>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-gh-gold transition-colors hover:text-white"
            >
              Discover our mission
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div variants={reveal}>
            <h3 className="mb-6 flex items-center gap-3 font-serif text-xl font-bold text-white">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-gh-cyan/20 bg-gh-cyan/10 text-gh-cyan">
                <EnvironmentOutlined />
              </span>
              Our Location
            </h3>

            <address className="not-italic">
              <p className="mb-1 text-sm leading-7 text-white/75">
                123 Awolowo Way,
              </p>
              <p className="mb-1 text-sm leading-7 text-white/75">
                Ikeja, Lagos,
              </p>
              <p className="mb-0 text-sm leading-7 text-white/75">
                Nigeria
              </p>
            </address>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Our heartbeat
              </p>
              <p className="mb-0 text-sm font-semibold tracking-wide text-gh-gold">
                Love. Faith. Purpose.
              </p>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={reveal}>
            <h3 className="mb-6 font-serif text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="m-0 list-none space-y-1 p-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 py-2 text-sm text-white/65 transition-colors duration-200 hover:text-gh-gold"
                  >
                    <span className="h-px w-4 shrink-0 bg-white/20 transition-all duration-300 group-hover:w-7 group-hover:bg-gh-cyan" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/churches"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition-all duration-300 hover:border-gh-cyan hover:bg-gh-cyan/10 hover:text-gh-cyan"
            >
              Find a Church
              <ArrowRightOutlined />
            </Link>
          </motion.div>
        </motion.div>

        {/* Copyright bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="mb-0 text-xs leading-6 text-white/50 sm:text-sm">
          © {currentYear ?? "2026"} The Churches Online Lagos. All rights reserved.
        </p>

          <p className="mb-0 text-xs font-medium tracking-wide text-white/45 sm:text-sm">
            Building unity. Advancing the Kingdom.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <motion.a
        href="#top"
        aria-label="Back to top"
        initial={false}
        whileHover={reduceMotion ? undefined : { y: -4 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        className="absolute bottom-6 right-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white shadow-lg backdrop-blur-md transition-colors hover:border-gh-gold hover:bg-gh-gold hover:text-gh-navy sm:bottom-8 sm:right-8"
      >
        <ArrowUpOutlined />
      </motion.a>
    </footer>
  );
}
