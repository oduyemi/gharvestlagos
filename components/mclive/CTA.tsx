"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  StarFilled,
} from "@ant-design/icons";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=378+Ikorodu+Road%2C+Maryland%2C+Lagos%2C+Nigeria";

export const MCLiveWOWCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="mc-live-heading"
      className="relative isolate overflow-hidden bg-[#F4F8FF] py-12 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-[#41B6E6]/15 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-[#00A859]/[0.07] blur-[100px]"
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[1240px]"
        >
          <div className="grid overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_24px_70px_-32px_rgba(11,34,101,0.28)] lg:grid-cols-[0.95fr_1.05fr] lg:rounded-[2rem]">
            {/* Worship image */}
            <div className="group relative min-h-[370px] overflow-hidden bg-[#071744] sm:min-h-[440px] lg:min-h-[570px]">
              <Image
                src="/images/mclive/wow.jpg"
                alt="Worshippers worshipping together at Global Harvest Church"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#071744]/55 via-transparent to-[#071744]/90" />

              {/* Compact event badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2.5 rounded-full border border-white/20 bg-[#071744]/60 py-2 pl-2 pr-4 backdrop-blur-md sm:left-7 sm:top-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC72C] text-[#0B2265]">
                  <StarFilled />
                </span>
                <span>
                  <span className="block text-xs font-extrabold text-white">
                    MC Live
                  </span>
                  <span className="block text-[10px] text-white/70">
                    Global Harvest Church Maryland, Lagos
                  </span>
                </span>
              </div>

              {/* WOW graphic */}
              <div
                aria-hidden="true"
                className="absolute right-6 top-[27%] -rotate-6 sm:right-9"
              >
                <span className="block text-6xl font-black italic tracking-[-0.09em] text-white drop-shadow-lg sm:text-8xl">
                  WOW<span className="text-[#FFC72C]">!</span>
                </span>
                <div className="ml-2 mt-0.5 h-1.5 w-3/4 -rotate-2 rounded-full bg-[#00A3E0]" />
              </div>

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FFC72C] sm:text-xs">
                  One Wednesday. One family.
                </p>
                <h3 className="mt-3 max-w-md text-3xl font-black leading-[1.05] tracking-[-0.055em] text-white sm:text-4xl lg:text-[2.8rem]">
                  Come as you are.
                  <span className="mt-1 block text-[#41B6E6]">
                    Leave encouraged.
                  </span>
                </h3>
              </div>
            </div>

            {/* Event information */}
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-10 xl:p-12">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E87722]" />
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0B2265]/65 sm:text-xs">
                  A special monthly gathering
                </p>
              </div>

              <h2
                id="mc-live-heading"
                className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.07em] text-[#0B2265] sm:text-6xl xl:text-[4.5rem]"
              >
                Worship
                <span className="mt-2 block text-[#00A3E0]">
                  on Wednesday<span className="text-[#FFC72C]">.</span>
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                An evening of worship, faith, and fellowship. Make room for a
                refreshing encounter with God.
              </p>

              {/* Compact event details */}
              <div className="mt-7 divide-y divide-[#0B2265]/[0.08] rounded-2xl border border-[#0B2265]/[0.08] bg-[#F7FAFF] px-4 sm:px-5">
                <div className="flex items-center gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E5F7FF] text-lg text-[#007EAF]">
                    <CalendarOutlined />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#007EAF]">
                      When
                    </p>
                    <p className="mt-1 text-sm font-extrabold leading-5 text-[#0B2265]">
                      Final Wednesday of each month
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E6F7EF] text-lg text-[#008747]">
                    <EnvironmentOutlined />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#008747]">
                      Where
                    </p>
                    <p className="mt-1 text-sm font-extrabold leading-5 text-[#0B2265]">
                      Global Harvest Church, Maryland
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      378 Ikorodu Road, Lagos
                    </p>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to Global Harvest Church"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0B2265]/10 bg-white text-[#007EAF] transition-colors hover:border-[#00A3E0]/40 hover:bg-[#E5F7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0]"
                  >
                    <ArrowRightOutlined />
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#join-mc-live"
                  className="group inline-flex min-h-[52px] flex-1 items-center justify-center gap-3 rounded-full bg-[#0B2265] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-[#0B2265]/15 transition-colors hover:bg-[#007EAF] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A3E0]/25"
                >
                  Come worship with us
                  <ArrowRightOutlined className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                </Link>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#0B2265]/15 px-5 py-3.5 text-sm font-bold text-[#0B2265] transition-colors hover:border-[#00A3E0]/40 hover:bg-[#E5F7FF] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A3E0]/20"
                >
                  <EnvironmentOutlined />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};