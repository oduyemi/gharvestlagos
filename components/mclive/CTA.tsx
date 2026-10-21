
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  HeartFilled,
  StarFilled,
} from "@ant-design/icons";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=378+Ikorodu+Road%2C+Maryland%2C+Lagos%2C+Nigeria";

export const MCLiveWOWCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#fff9ed] py-16 sm:py-20 lg:py-24">
      {/* Soft, warm background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 hidden text-5xl text-brand-orange/20 sm:block"
      >
        ✳
      </div>

      <div className="gh-container relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-7xl"
        >
          {/* Section introduction */}
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/15 bg-white/75 px-3.5 py-2 shadow-sm shadow-orange-950/[0.03]">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-blue-dark">
                  A little more heaven in your week
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-brand-blue-dark sm:text-4xl lg:text-5xl">
                Your midweek moment
                <span className="relative ml-2 inline-block text-brand-orange">
                  with God.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 180 12"
                    className="absolute -bottom-2 left-0 w-full text-brand-gold"
                    fill="none"
                  >
                    <path
                      d="M3 8C45 1 115 1 176 6"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
              One gathering. One family. A fresh reminder that you never have
              to walk alone.
            </p>
          </div>

          {/* Main event card */}
          <div className="overflow-hidden rounded-[1.75rem] border border-[#eadfcb] bg-white shadow-[0_24px_80px_-32px_rgba(67,43,15,0.25)] sm:rounded-[2.25rem]">
            <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
              {/* Image panel */}
              <div className="group relative min-h-[350px] overflow-hidden sm:min-h-[440px] lg:min-h-[600px]">
                <Image
                  src="/images/mclive/wow.jpg"
                  alt="Worship on Wednesday at Global Harvest Church"
                  fill
                  priority={false}
                  sizes="(max-width: 1023px) 100vw, 51vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101a39]/90 via-[#101a39]/15 to-[#101a39]/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/15 via-transparent to-transparent" />

                {/* Floating event label */}
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="inline-flex items-center gap-2.5 rounded-2xl border border-white/50 bg-white/95 px-3.5 py-3 shadow-xl shadow-black/10 backdrop-blur-md sm:px-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1d1] text-brand-orange">
                      <StarFilled />
                    </span>
                    <span>
                      <span className="block text-[9px] font-extrabold uppercase tracking-[0.18em] text-gray-500">
                        Save the date
                      </span>
                      <span className="mt-0.5 block text-sm font-extrabold text-brand-blue-dark">
                        Worship on Wednesday
                      </span>
                    </span>
                  </div>
                </div>

                {/* Decorative WOW lettering */}
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-28 rotate-[8deg] sm:right-8 sm:top-32"
                >
                  <span className="block rounded-2xl border-2 border-white/70 bg-brand-gold px-4 py-2 text-2xl font-black tracking-widest text-brand-blue-dark shadow-lg sm:text-3xl">
                    WOW!
                  </span>
                  <span className="absolute -right-2 -top-3 text-2xl text-white">
                    ✦
                  </span>
                </div>

                {/* Image caption */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-10">
                  <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.24em] text-brand-gold sm:text-xs">
                    <span className="h-px w-7 bg-brand-gold" />
                    Come as you are
                  </p>

                  <p className="mt-4 max-w-lg text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
                    Leave with a
                    <span className="text-brand-gold"> fuller heart.</span>
                  </p>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
                    An atmosphere of worship, a community of faith, and room
                    for you to belong.
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-brand-gold backdrop-blur-sm">
                      <HeartFilled />
                    </div>
                    <span className="text-xs font-semibold text-white/90 sm:text-sm">
                      More than a service. A family.
                    </span>
                  </div>
                </div>
              </div>

              {/* Content panel */}
              <div className="flex flex-col justify-center px-5 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
                <div className="flex items-center gap-2.5">
                  <span className="h-0.5 w-7 rounded-full bg-brand-orange" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-orange sm:text-xs">
                    Make room for a moment with God
                  </span>
                </div>

                <h3 className="mt-5 text-[2.65rem] font-black leading-[0.96] tracking-[-0.055em] text-brand-blue-dark sm:text-5xl xl:text-[3.5rem]">
                  Worship
                  <span className="mt-1.5 block text-brand-orange">
                    on Wednesday<span className="text-brand-gold">.</span>
                  </span>
                </h3>

                {/* Playful event identity */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="-rotate-3 rounded-xl bg-brand-gold px-3.5 py-2 text-xl font-black tracking-[0.12em] text-brand-blue-dark shadow-[0_4px_0_#e7b94d] sm:text-2xl">
                    WOW!
                  </span>
                  <p className="max-w-[190px] text-xs font-semibold leading-5 text-gray-500 sm:text-sm sm:leading-6">
                    Your monthly invitation to pause, praise, and be refreshed.
                  </p>
                </div>

                <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                  Step away from the rush and make space for His presence. Join
                  us for a special monthly gathering filled with worship,
                  faith, and meaningful fellowship.
                </p>

                {/* Event information */}
                <div className="mt-7 space-y-4 rounded-2xl border border-[#f0e5d3] bg-[#fffaf1] p-4 sm:p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white text-lg text-brand-orange shadow-sm ring-1 ring-[#efe4d1]">
                      <CalendarOutlined />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <p className="text-sm font-extrabold leading-6 text-brand-blue-dark">
                        The final Wednesday of each month
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                        A special edition of MC Live.
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-[#eadfcb]" />

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-white text-lg text-brand-orange shadow-sm ring-1 ring-[#efe4d1]">
                      <EnvironmentOutlined />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-sm font-extrabold leading-6 text-brand-blue-dark">
                        Global Harvest Church, Maryland
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                        378 Ikorodu Road, Maryland, Lagos.
                      </p>

                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-orange transition-colors hover:text-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
                      >
                        Find us on the map
                        <ArrowRightOutlined />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
                  <Link
                    href="/mc-live"
                    className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-brand-orange px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-brand-orange/20 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-orange/25"
                  >
                    Come worship with us
                    <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to Global Harvest Church, Maryland"
                    className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl border border-[#e8ddca] bg-white px-5 py-4 text-sm font-bold text-brand-blue-dark transition duration-300 hover:border-brand-cyan hover:bg-[#f1fbfc] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cyan/20"
                  >
                    <EnvironmentOutlined />
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
