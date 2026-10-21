"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, EnvironmentOutlined, HeartFilled, PlayCircleFilled } from "@ant-design/icons";


const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=378+Ikorodu+Road%2C+Maryland%2C+Lagos%2C+Nigeria";


export default function MCCTA() {
  const shouldReduceMotion = useReducedMotion();
  const reveal = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 22,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.65,
      ease: "easeOut" as const,
    },
  };

  return (
    <section
      aria-labelledby="mc-cta-heading"
      className="relative overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-28"
    >
      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          {...reveal}
          className="relative isolate"
        >
          <div className="grid overflow-hidden rounded-[1.75rem] bg-brand-blue-dark shadow-[0_28px_80px_rgba(7,23,68,0.14)] sm:rounded-[2.25rem] lg:min-h-[570px] lg:grid-cols-[1fr_0.94fr]">
            <div className="relative z-10 flex flex-col justify-center overflow-hidden px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-[34px] border-white/[0.035] sm:h-72 sm:w-72"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-brand-cyan/[0.08] blur-3xl"
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
                  <span className="flex h-2 w-2 rounded-full bg-brand-gold" />
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.19em] text-white/85 sm:text-xs">
                    There’s room for you
                  </span>
                </div>

                <h2
                  id="mc-cta-heading"
                  className="mt-7 max-w-xl text-[2.65rem] font-bold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
                >
                  Life was never
                  <span className="mt-2 block">meant to be</span>
                  <span className="relative mt-2 inline-block">
                    <span className="relative z-10 text-brand-gold">
                      done alone.
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 250 13"
                      className="absolute -bottom-2 left-0 h-3 w-full text-brand-cyan sm:-bottom-3 sm:h-4"
                      fill="none"
                    >
                      <path
                        d="M3 8C56 2 147 2 247 7"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                  Faith grows deeper when it is shared. Find your people,
                  build meaningful friendships, and discover the joy of doing
                  life together at Global Harvest Church.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/mc-live"
                    className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-blue-dark transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
                  >
                    <PlayCircleFilled className="text-lg" />
                    Join MC Live
                    <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/50 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <EnvironmentOutlined className="text-brand-cyan" />
                    Come visit us
                  </a>
                </div>

                <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-white/65 sm:text-sm">
                    Come as you are.
                    <span className="ml-1 font-semibold text-white">
                      There’s a place for you here.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[440px] lg:min-h-full">
              <Image
                src="/images/mc/invite.jpg"
                alt="People coming together in community at Global Harvest Church"
                fill
                sizes="(max-width: 1023px) 100vw, 48vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
              />

              {/* Keep the photograph expressive while preserving contrast */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/65 via-brand-blue-dark/5 to-brand-blue-dark/10"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/15 to-transparent"
              />

              {/* Photo caption */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 lg:bottom-9 lg:left-9 lg:right-9">
                <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/25 bg-brand-blue-dark/65 p-3.5 text-white shadow-xl backdrop-blur-md sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold text-brand-blue-dark">
                    <HeartFilled />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold">Faith. Friendship. Family.</p>
                    <p className="mt-1 text-xs text-white/75">
                      Growing together, one connection at a time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Playful image accent */}
              <div
                aria-hidden="true"
                className="absolute right-5 top-5 flex h-[4.5rem] w-[4.5rem] rotate-6 flex-col items-center justify-center rounded-full bg-brand-gold text-center text-brand-blue-dark shadow-lg sm:right-8 sm:top-8 sm:h-24 sm:w-24"
              >
                <HeartFilled className="text-base sm:text-xl" />
                <span className="mt-1 text-[8px] font-extrabold uppercase tracking-[0.13em] sm:text-[10px]">
                  You belong
                </span>
              </div>
            </div>
          </div>

          {/* Floating location card */}
          <motion.a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="group relative mx-4 -mt-1 flex items-center gap-4 rounded-b-2xl border border-t-0 border-slate-200/80 bg-white p-4 shadow-[0_12px_30px_rgba(7,23,68,0.06)] transition hover:border-brand-cyan/40 sm:mx-8 sm:gap-5 sm:px-6 sm:py-5 lg:mx-12 lg:rounded-b-3xl"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E7F6FC] text-brand-cyan-dark sm:h-14 sm:w-14">
              <EnvironmentOutlined className="text-xl sm:text-2xl" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-slate-400">
                Find us in Maryland
              </p>
              <p className="mt-1 text-sm font-bold leading-6 text-brand-blue-dark sm:text-base">
                378 Ikorodu Road, Lagos
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Just after Maryland BRT Terminal
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-brand-blue-dark transition-all duration-300 group-hover:bg-brand-cyan group-hover:text-white sm:h-11 sm:w-11">
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:-rotate-45" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}