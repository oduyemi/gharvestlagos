"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownOutlined, ArrowRightOutlined, HeartOutlined, StarFilled } from "@ant-design/icons";


export const AboutHero = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.75,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative isolate min-h-[680px] overflow-hidden bg-brand-blue-dark text-white sm:min-h-[740px] lg:min-h-[780px]"
    >
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-30 bg-[url('/images/hero/about.jpg')] bg-cover bg-[center_42%]"
        />
        <div
            aria-hidden="true"
            className="absolute inset-0 -z-30 bg-[url('/images/hero/about.jpg')] bg-cover bg-center"
        />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#071744]/15"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071744]/85 via-[#071744]/55 via-45% to-[#071744]/10"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071744]/55 via-transparent to-[#071744]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-12 -z-10 h-72 w-72 rounded-full bg-brand-cyan/[0.08] blur-[100px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[30%] -z-10 h-72 w-72 rounded-full bg-brand-gold/[0.06] blur-[100px]"
      />

      <div className="gh-container relative mx-auto w-full px-5 pb-10 pt-20 sm:px-8 sm:pb-12 sm:pt-24 md:px-10 lg:px-12 lg:pb-14 lg:pt-28 xl:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.45fr] lg:gap-10">
          <div className="max-w-4xl">
            <motion.div
              {...reveal(0.05)}
              className="mb-8 inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-3.5 py-2 backdrop-blur-md sm:gap-3 sm:px-4"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 sm:text-xs sm:tracking-[0.18em]">
                Global Harvest Church
              </span>

              <span className="h-3.5 w-px bg-white/25" />

              <span className="text-[10px] font-medium text-white/65 sm:text-xs">
                Maryland, Lagos
              </span>
            </motion.div>

            <motion.h1
              {...reveal(0.15)}
              id="about-hero-heading"
              className="max-w-4xl text-[clamp(2.8rem,8vw,6.6rem)] font-black leading-[0.96] tracking-[-0.065em]"
            >
              More than a
              <br />
              <span className="relative inline-block">
                place to worship
                <span
                  aria-hidden="true"
                  className="absolute -right-5 -top-2 text-2xl text-brand-gold sm:-right-7 sm:-top-3 sm:text-4xl"
                >
                  ✳
                </span>
              </span>
              <br />
              <span className="relative mt-2 inline-block text-brand-gold">
                a place to belong.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 440 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-3 left-0 h-2.5 w-full text-brand-cyan sm:-bottom-4 sm:h-3"
                >
                  <path
                    d="M3 9 C95 1, 245 15, 436 5"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...reveal(0.27)}
              className="mt-9 max-w-xl text-base leading-8 text-white/75 sm:mt-10 sm:text-lg sm:leading-9"
            >
              Discover your purpose, experience the presence of God, and find
              your place in a community growing together in the love of Jesus
              Christ.
            </motion.p>

            <motion.div
              {...reveal(0.36)}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <Link
                href="#who-we-are"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-bold text-brand-blue-dark shadow-[0_8px_30px_rgba(255,199,44,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_36px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              >
                Discover our story
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-dark/10 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-blue-dark group-hover:text-white">
                  <ArrowRightOutlined className="text-xs" />
                </span>
              </Link>

              <Link
                href="#our-services"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/30 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <HeartOutlined className="text-brand-cyan transition-transform duration-300 group-hover:scale-110" />
                Plan your visit
              </Link>
            </motion.div>

            <motion.div
              {...reveal(0.45)}
              className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-white/20 pt-6 sm:mt-16 sm:pt-7"
            >
              <Link
                href="#who-we-are"
                aria-label="Scroll to discover who we are"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/[0.04] text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
              >
                <ArrowDownOutlined className="transition-transform duration-300 group-hover:translate-y-1" />
              </Link>

              <div>
                <p className="text-sm font-bold text-white">
                  Discover purpose. Experience God.
                </p>
                <p className="mt-1.5 text-xs leading-5 text-white/55 sm:text-sm">
                  Faith <span className="mx-1.5 text-brand-gold">✳</span>
                  Growth <span className="mx-1.5 text-brand-gold">✳</span>
                  Community <span className="mx-1.5 text-brand-gold">✳</span>
                  Purpose
                </p>
              </div>
            </motion.div>
          </div>

          <motion.aside
            {...reveal(0.38)}
            className="relative mx-auto w-full max-w-sm lg:ml-auto lg:mr-0"
          >
            <div className="relative rotate-[1.5deg] rounded-[1.75rem] border border-white/20 bg-[#0B2265]/70 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:p-6">
              <div className="mb-7 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold text-brand-blue-dark">
                  <HeartOutlined className="text-xl" />
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5">
                  <StarFilled className="text-[10px] text-brand-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                    You are welcome
                  </span>
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
                A place for your journey
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                Come as you are.
                <span className="mt-1 block text-brand-gold">
                  Grow as you go.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Wherever you are in your walk of faith, there is room to
                discover, connect, and grow with us.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
                <div className="flex -space-x-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0B2265] bg-[#41B6E6] text-xs font-black text-[#071744]">
                    F
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0B2265] bg-brand-gold text-xs font-black text-[#071744]">
                    L
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0B2265] bg-[#00A859] text-xs font-black text-white">
                    G
                  </span>
                </div>

                <span className="text-xs font-semibold text-white/65">
                  Faith. Love. Growth.
                </span>
              </div>

              <span
                aria-hidden="true"
                className="absolute -right-3 -top-4 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-brand-cyan text-lg font-black text-brand-blue-dark shadow-lg"
              >
                +
              </span>
            </div>

            <motion.div
              aria-hidden="true"
              animate={shouldReduceMotion ? undefined : { y: [0, -9, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-brand-gold text-2xl text-brand-blue-dark shadow-xl sm:-left-6"
            >
              ✳
            </motion.div>

            <motion.div
              aria-hidden="true"
              animate={shouldReduceMotion ? undefined : { y: [0, 7, 0], rotate: [0, -5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute -right-2 top-1/3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#0B2265] text-lg text-brand-cyan shadow-lg sm:-right-5"
            >
              ✦
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};