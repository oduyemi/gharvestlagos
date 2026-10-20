
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  HeartFilled,
  PlayCircleFilled,
  StarFilled,
} from "@ant-design/icons";

const YOUTUBE_URL = "https://www.youtube.com/@gharvestchurch/live";
const MIXLR_URL = "https://mixlr.com/global-harvest-maryland";

const highlights = [
  {
    number: "01",
    title: "The Living Word",
    description: "Biblical truth for everyday life.",
    icon: StarFilled,
  },
  {
    number: "02",
    title: "Worship & prayer",
    description: "Make room for God's presence together.",
    icon: HeartFilled,
  },
  {
    number: "03",
    title: "A spiritual family",
    description: "Find people to grow and walk with.",
    icon: CheckCircleFilled,
  },
];

export const MCLiveHero = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
      },
    },
  };

  return (
    <section
      id="join-mc-live"
      className="relative isolate overflow-hidden bg-brand-blue-dark text-white"
    >
      {/* Background image — brighter and more visible */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero/mclive.jpeg"
          alt="Members of Global Harvest Church worshipping together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center"
        />
      </div>

      {/* Directional overlays: protect text without hiding the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[#07152f]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#07152f]/85 via-[#07152f]/55 to-[#07152f]/10 sm:from-[#07152f]/80 sm:via-[#07152f]/42 sm:to-[#07152f]/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-t from-brand-blue-dark/65 via-transparent to-[#07152f]/10"
      />

      {/* Soft brand accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-0 -z-10 h-80 w-80 rounded-full bg-brand-cyan/[0.09] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[25%] -z-10 h-80 w-80 rounded-full bg-brand-gold/[0.07] blur-[100px]"
      />

      <div className="gh-container relative mx-auto grid w-full items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:min-h-[690px] lg:grid-cols-[1.08fr_0.82fr] lg:gap-12 lg:px-12 lg:py-20 xl:gap-16 xl:px-14">
        {/* Main message */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-[#07152f]/35 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-white shadow-sm backdrop-blur-sm sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
              </span>
              Missional Communities
              <span className="h-3 w-px bg-white/35" />
              <span className="text-brand-cyan">Live</span>
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex items-center gap-3 text-xs font-semibold text-white/85 sm:mt-9 sm:text-sm"
          >
            <span className="h-px w-7 bg-brand-gold" />
            Your midweek moment of connection
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[clamp(2.65rem,6.2vw,5.2rem)] font-extrabold leading-[0.99] tracking-[-0.065em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.18)]"
          >
            Faith for life.
            <span className="mt-2 block text-brand-cyan">
              Family for
              <span className="relative ml-2 inline-block text-brand-gold">
                the journey.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 280 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 h-2 w-full text-brand-gold/90"
                >
                  <path
                    d="M3 7C75 1 190 2 277 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-sm leading-7 text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.2)] sm:text-base sm:leading-8"
          >
            Make the middle of your week meaningful. Join us for practical
            teaching, heartfelt worship, corporate prayer, and a community
            growing together in Christ — wherever you are.
          </motion.p>

          {/* Wednesday gathering details */}
          <motion.div
            variants={fadeUp}
            className="mt-7 inline-flex max-w-full flex-wrap items-center gap-3 rounded-2xl border border-white/25 bg-[#07152f]/40 p-3.5 shadow-lg shadow-black/10 backdrop-blur-md sm:gap-5 sm:px-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-lg text-brand-blue-dark">
              <CalendarOutlined />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-white/75">
                Our weekly gathering
              </p>
              <p className="mt-1 text-sm font-bold text-white sm:text-base">
                Every Wednesday
              </p>
            </div>

            <span className="hidden h-8 w-px bg-white/25 sm:block" />

            <div className="flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-[#07152f]/35 px-3 py-2 text-xs font-bold text-white sm:text-sm">
              <ClockCircleOutlined className="text-brand-cyan" />
              6:00 PM WAT
            </div>
          </motion.div>

          {/* Calls to action */}
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-brand-gold px-5 py-3.5 text-sm font-extrabold text-brand-blue-dark shadow-[0_8px_25px_-12px_rgba(255,199,44,0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(255,199,44,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark sm:px-6"
            >
              <PlayCircleFilled className="text-lg" />
              Watch on YouTube
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={MIXLR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl border border-white/35 bg-[#07152f]/40 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-cyan/70 hover:bg-[#07152f]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:px-6"
            >
              <CustomerServiceOutlined className="text-lg text-brand-cyan" />
              Listen on Mixlr
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <Link
              href="#find-your-mc"
              className="group inline-flex items-center gap-2.5 text-xs font-semibold text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/35 bg-[#07152f]/20 transition-colors group-hover:border-brand-gold group-hover:text-brand-gold">
                <ArrowDownOutlined className="text-[10px] transition-transform group-hover:translate-y-0.5" />
              </span>
              New here? Find your Missional Community
            </Link>
          </motion.div>
        </motion.div>

        {/* Community feature card */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 22,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[410px] lg:ml-auto"
        >
          <div
            aria-hidden="true"
            className="absolute -right-2 -top-2 h-24 w-24 rounded-tr-[2rem] border-r border-t border-brand-gold/70 sm:-right-3 sm:-top-3"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-[1.8rem] border-b border-l border-brand-cyan/60"
          />

          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/25 bg-[#091a3b]/75 p-5 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:rounded-[1.8rem] sm:p-6">
            {/* Gentle card highlight */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.18em] text-brand-cyan sm:text-[10px]">
                  <StarFilled className="text-xs" />
                  A place to belong
                </div>

                <h2 className="mt-3 text-[1.65rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-3xl">
                  Connect.
                  <br />
                  Grow.
                  <span className="ml-2 text-brand-gold">Belong.</span>
                </h2>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-gold text-xl text-brand-blue-dark shadow-lg shadow-brand-gold/10 sm:h-12 sm:w-12">
                <PlayCircleFilled />
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
              More than a midweek service — a chance to deepen your faith,
              share life, and grow alongside your spiritual family.
            </p>

            {/* Experience highlights */}
            <div className="mt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, x: 12 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : 0.3 + index * 0.1,
                    }}
                    className="group flex gap-3.5 border-t border-white/15 py-4 first:border-t-0 first:pt-0 last:pb-1"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-brand-blue-dark">
                      <Icon />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-extrabold tracking-wider text-white/50">
                          {item.number}
                        </span>
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-white/75">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRightOutlined className="mt-1 text-[10px] text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-brand-cyan" />
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="#find-your-mc"
              className="group mt-5 flex min-h-12 w-full items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-brand-blue-dark transition duration-300 hover:bg-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#091a3b] sm:px-5"
            >
              <span className="flex items-center gap-2.5">
                <HeartFilled className="text-brand-cyan transition-colors group-hover:text-brand-blue-dark" />
                Find your community
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-dark/[0.06] transition-transform group-hover:translate-x-0.5">
                <ArrowRightOutlined className="text-xs" />
              </span>
            </Link>
          </div>

          {/* Floating community note */}
          <motion.div
            initial={false}
            animate={
              shouldReduceMotion ? { y: 0 } : { y: [0, -4, 0] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute -bottom-5 right-4 hidden items-center gap-2.5 rounded-2xl border border-white/25 bg-[#10254b]/90 px-3.5 py-3 shadow-xl backdrop-blur-lg sm:flex lg:-right-5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
              <HeartFilled className="text-sm" />
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-white">
                Growing together
              </p>
              <p className="mt-0.5 text-[10px] text-white/70">
                Faith. Friendship. Family.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
    </section>
  );
};
