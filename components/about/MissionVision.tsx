
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  AimOutlined,
  CompassOutlined,
  ArrowRightOutlined,
  HeartFilled,
  StarFilled,
  GlobalOutlined,
} from "@ant-design/icons";

const mission =
  "Helping individuals discover and accomplish their God-given purpose through life-transforming experiences with Christ.";

const vision =
  "To become a multi-channel megachurch of interconnected branches reaching into all continents and shaping the culture of nations and generations.";

export const AboutMissionVision = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  const sectionMotion = {
    initial: reduceMotion ? false : ("hidden" as const),
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.15 },
    variants: reveal,
  };

  return (
    <section
      id="our-mission"
      aria-labelledby="mission-vision-heading"
      className="relative isolate overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-28"
    >
      {/* Background artwork */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-brand-gold/15 blur-3xl sm:h-[30rem] sm:w-[30rem]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0b2265 0.8px, transparent 0.8px)",
            backgroundSize: "23px 23px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Editorial heading */}
        <motion.div
          {...sectionMotion}
          className="relative mx-auto mb-12 max-w-5xl sm:mb-16 lg:mb-20"
        >
          <div className="mt-7 grid items-end gap-5 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
            <h2
              id="mission-vision-heading"
              className="text-balance text-center text-[2.65rem] font-semibold leading-[0.99] tracking-[-0.065em] text-brand-blue-dark sm:text-6xl md:text-7xl lg:text-left lg:text-[5.6rem] xl:text-[6.5rem]"
            >
              We believe
              <span className="relative mx-2 inline-block whitespace-nowrap font-serif font-normal italic text-brand-cyan sm:mx-3">
                in more.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 190 15"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-full text-brand-gold sm:-bottom-3"
                >
                  <path
                    d="M3 10C45 2 127 1 187 7"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <div className="mx-auto max-w-md lg:mx-0 lg:pb-2">
              <p className="text-center text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-left">
                We are here to help people discover their God-given purpose
                and to build a community whose impact reaches far beyond its
                walls.
              </p>

              <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                <span className="h-2 w-2 rounded-full bg-brand-blue-dark" />
                <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.17em] text-brand-blue-dark/60">
                  Our foundation
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric mission and vision composition */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Mission — bright, energetic panel */}
          <motion.article
            {...sectionMotion}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-[2rem] bg-brand-cyan p-6 text-brand-blue-dark shadow-[0_24px_60px_-35px_rgba(0,163,224,0.55)] transition-transform duration-500 hover:-translate-y-1 sm:p-8 md:p-10 lg:col-span-7 lg:min-h-[490px] lg:p-12"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-110 sm:-right-6 sm:-top-20 sm:h-72 sm:w-72"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-1 top-12 h-40 w-40 rounded-full border border-brand-blue-dark/10 transition-transform duration-700 group-hover:rotate-12 sm:right-8 sm:top-16 sm:h-48 sm:w-48"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-16 right-16 rotate-12 text-white/40 transition-transform duration-500 group-hover:rotate-45 sm:bottom-20 sm:right-24"
            >
              <StarFilled className="text-3xl sm:text-4xl" />
            </div>

            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                <AimOutlined />
                01 — Our mission
              </span>

              <span className="flex h-12 w-12 shrink-0 rotate-[-8deg] items-center justify-center rounded-2xl bg-brand-blue-dark text-xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-0 sm:h-14 sm:w-14 sm:text-2xl">
                <AimOutlined />
              </span>
            </div>

            <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue-dark/65 sm:text-xs">
                Why we exist
              </p>

              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-4xl md:text-5xl">
                Every life has
                <span className="block font-serif font-normal italic">
                  a God-given purpose.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-brand-blue-dark/80 sm:mt-6 sm:text-base sm:leading-8">
                {mission}
              </p>
            </div>

            <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-4 pt-10 sm:pt-12">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30">
                  <HeartFilled />
                </span>

                <div>
                  <p className="text-sm font-bold">Purpose through Christ</p>
                  <p className="mt-0.5 text-xs text-brand-blue-dark/65">
                    Discover. Grow. Fulfil.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Vision — deep, exploratory panel */}
          <motion.article
            {...sectionMotion}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.12,
              ease: "easeOut",
            }}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-[2rem] bg-brand-blue-dark p-6 text-white shadow-[0_24px_65px_-30px_rgba(7,23,68,0.4)] transition-transform duration-500 hover:-translate-y-1 sm:p-8 md:p-10 lg:col-span-5 lg:min-h-[490px] lg:p-10 xl:p-11"
          >
            {/* Playful orbital illustration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full border border-white/[0.12] transition-transform duration-700 group-hover:rotate-12 sm:-right-12 sm:top-16 sm:h-72 sm:w-72"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 top-32 h-44 w-44 rounded-full border border-brand-cyan/30 transition-transform duration-700 group-hover:-rotate-12 sm:right-5 sm:top-28 sm:h-52 sm:w-52"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-12 top-48 h-4 w-4 rounded-full bg-brand-gold shadow-[0_0_25px_rgba(255,199,44,0.5)] sm:right-16"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-20 top-28 h-2.5 w-2.5 rounded-full bg-brand-cyan sm:right-28"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-cyan/[0.12] blur-3xl"
            />

            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80 sm:text-xs">
                <CompassOutlined className="text-brand-gold" />
                02 — Our vision
              </span>

              <GlobalOutlined className="text-2xl text-brand-gold sm:text-3xl" />
            </div>

            <div className="relative z-10 mt-12 sm:mt-16 lg:mt-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
                Where we are going
              </p>

              <h3 className="mt-3 max-w-md text-3xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-4xl">
                One church.
                <span className="block font-serif font-normal italic text-brand-gold">
                  A world of impact.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70 sm:mt-6 sm:text-base sm:leading-8">
                {vision}
              </p>
            </div>

            <div className="relative z-10 mt-auto border-t border-white/10 pt-7 sm:pt-9">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Reaching nations and generations
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/50">
                    Connected by faith. United in purpose.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Bottom statement — designed like a signature */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-brand-blue-dark/[0.07] bg-white/80 p-6 text-center shadow-[0_15px_50px_-40px_rgba(7,23,68,0.25)] sm:mt-16 sm:rounded-[2rem] sm:p-9 lg:mt-20 lg:p-12"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-8 rotate-12 font-serif text-[9rem] leading-none text-brand-gold/[0.13] sm:-right-1 sm:-top-12 sm:text-[12rem]"
          >
            ”
          </span>

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto mb-5 flex h-11 w-11 rotate-[-6deg] items-center justify-center rounded-2xl bg-brand-gold/20 text-brand-blue-dark">
              <HeartFilled />
            </div>

            <p className="text-balance text-lg font-medium leading-8 tracking-[-0.025em] text-brand-blue-dark sm:text-xl sm:leading-9 lg:text-2xl">
              To see lives transformed, purpose discovered, and communities
              impacted through the love and power of Jesus Christ.
            </p>

            <Link
              href="#our-values"
              className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand-blue-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue-dark/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-cyan hover:shadow-brand-cyan/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 sm:mt-8"
            >
              Discover our values
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightOutlined className="text-xs" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
