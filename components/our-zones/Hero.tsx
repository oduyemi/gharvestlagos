"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {ArrowDownOutlined, ArrowRightOutlined, CompassOutlined, EnvironmentOutlined, GlobalOutlined, StarFilled, TeamOutlined} from "@ant-design/icons";


const stats = [
  {
    value: "07",
    label: "Missional Zones",
    icon: CompassOutlined,
    accent: "text-brand-gold",
  },
  {
    value: "Lagos",
    label: "Across Our City",
    icon: GlobalOutlined,
    accent: "text-brand-cyan",
  },
  {
    value: "Together",
    label: "Growing in Faith",
    icon: TeamOutlined,
    accent: "text-brand-green",
  },
];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=378+Ikorodu+Road%2C+Maryland%2C+Lagos%2C+Nigeria";


export const OurZonesHero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      aria-labelledby="zones-hero-heading"
      className="relative isolate overflow-hidden bg-brand-blue-dark text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[url('/images/hero/zone.jpeg')] bg-cover bg-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#071744]/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071744]/95 via-[#071744]/75 via-55% to-[#071744]/25"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071744]/90 via-transparent to-[#071744]/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-brand-cyan/15 blur-[100px] sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[20%] -z-10 h-72 w-72 rounded-full bg-brand-gold/[0.09] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="gh-container relative mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-12 lg:py-28 xl:px-14 xl:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_350px] xl:gap-16">
          <div className="max-w-4xl">
            <motion.div
              {...reveal(0.05)}
              className="mb-8 flex flex-wrap items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gold text-brand-blue-dark shadow-lg shadow-black/10">
                <CompassOutlined className="text-lg" />
              </span>

              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-cyan sm:text-xs">
                  Global Harvest Church
                </p>
                <p className="mt-1 text-sm text-white/65">
                  Missional Communities
                </p>
              </div>

              <span className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3.5 py-2 text-[10px] font-semibold text-white/85 backdrop-blur-md sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                Maryland, Lagos
              </span>
            </motion.div>

            <motion.h1
              {...reveal(0.15)}
              id="zones-hero-heading"
              className="max-w-4xl text-[clamp(3.25rem,7.5vw,6.7rem)] font-black leading-[0.94] tracking-[-0.065em]"
            >
              Find your place
              <br />
              in{" "}
              <span className="relative mt-2 inline-block text-brand-gold">
                community
                <span
                  aria-hidden="true"
                  className="absolute -right-5 -top-3 text-2xl text-brand-cyan sm:-right-7 sm:-top-4 sm:text-4xl"
                >
                  ✳
                </span>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 440 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-3 left-0 h-2.5 w-full text-brand-cyan sm:-bottom-4 sm:h-3"
                >
                  <path
                    d="M3 9 C95 1, 245 15, 436 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              {...reveal(0.25)}
              className="mt-9 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9"
            >
              Faith was never meant to be lived alone. Across Lagos, our
              Missional Communities create spaces to grow in Christ, build
              lasting relationships, and discover the beauty of doing life
              together.
            </motion.p>

            <motion.div
              {...reveal(0.35)}
              className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="#zone-directory"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-bold text-brand-blue-dark shadow-[0_8px_30px_rgba(255,199,44,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_36px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              >
                Explore Our Zones
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-dark/10 transition-all duration-300 group-hover:translate-y-0.5 group-hover:bg-brand-blue-dark group-hover:text-white">
                  <ArrowDownOutlined className="text-xs" />
                </span>
              </Link>

              <Link
                href="/missional-communities"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/30 bg-white/[0.07] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-cyan sm:text-base"
              >
                Discover Missional Communities
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              {...reveal(0.45)}
              className="mt-12 flex items-center gap-4 border-t border-white/20 pt-6 sm:mt-16 sm:pt-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-brand-gold">
                <HeartFilledFallback />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Belong. Become. Be a blessing.
                </p>
                <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">
                  One church family, growing together across our city.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.aside
            {...reveal(0.35)}
            className="relative mx-auto w-full max-w-[350px] lg:mx-0 lg:justify-self-end"
          >
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-6 h-32 w-32 rounded-full border border-brand-cyan/35 sm:-right-8 sm:-top-8 sm:h-40 sm:w-40"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-7 h-36 w-36 rounded-full border border-brand-gold/25"
            />

            <div className="relative rotate-[1.5deg] rounded-[1.75rem] border border-white/20 bg-[#0B2265]/75 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:p-7">
              {/* Card header */}
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-2xl text-brand-blue-dark">
                  <CompassOutlined />
                </div>

                <span className="flex h-9 w-9 rotate-6 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] text-brand-cyan">
                  <StarFilled />
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
                Your community awaits
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
                Seven zones.
                <span className="block text-brand-gold">
                  One family.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                Find a community where faith deepens, friendships grow, and
                everyday life becomes part of your walk with God.
              </p>

              {/* Mini stats */}
              <div className="mt-7 space-y-4 border-t border-white/15 pt-6">
                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] ${item.accent}`}
                      >
                        <Icon />
                      </span>

                      <div className="min-w-0">
                        <p className="text-sm font-bold text-white">
                          {item.value}
                        </p>
                        <p className="mt-0.5 text-xs text-white/55">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="#zone-directory"
                className="group mt-7 flex min-h-12 items-center justify-between gap-3 rounded-xl bg-white/[0.08] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
              >
                Find your zone
                <ArrowRightOutlined className="text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <span
                aria-hidden="true"
                className="absolute -right-3 -top-4 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-brand-cyan text-lg font-black text-brand-blue-dark shadow-lg"
              >
                +
              </span>
            </div>

            <motion.a
              aria-label="Get directions to Global Harvest Church in Maryland"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -6, 0], rotate: [0, 2, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-white/15 bg-brand-blue-dark px-4 py-3 shadow-xl shadow-black/20 transition-colors hover:border-brand-cyan/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan sm:left-auto sm:right-0 sm:translate-x-0"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                <EnvironmentOutlined />
              </span>

              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-brand-cyan">
                  Our home base
                </span>
                <span className="mt-1 block text-xs font-semibold text-white">
                  Maryland, Lagos
                </span>
              </span>
            </motion.a>
          </motion.aside>
        </div>

        <motion.div
          {...reveal(0.55)}
          className="mt-20 border-t border-white/20 pt-8 sm:mt-24 sm:pt-10"
        >
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-6">
            {[
              ...stats,
              {
                value: "Purpose",
                label: "Living the Journey",
                icon: EnvironmentOutlined,
                accent: "text-brand-gold",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 14 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="group flex items-start gap-3 sm:gap-4"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] transition-colors duration-300 group-hover:border-white/30 ${item.accent}`}
                  >
                    <Icon />
                  </div>

                  <div className="min-w-0">
                    <p className="break-words text-lg font-bold tracking-tight text-white sm:text-xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-5 text-white/55 sm:text-sm">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-7 right-6 hidden flex-col items-center gap-3 text-white/50 lg:flex xl:right-10"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] [writing-mode:vertical-rl]">
          Explore
        </span>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25"
        >
          <ArrowDownOutlined className="text-xs" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function HeartFilledFallback() {
  return <TeamOutlined className="text-lg" />;
}
