"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CompassOutlined,
  HomeOutlined,
  HeartFilled,
  SmileOutlined,
  SearchOutlined,
} from "@ant-design/icons";


const helpfulLinks = [
  { label: "Homepage", href: "/", icon: HomeOutlined },
  { label: "Worship online", href: "/worship-online", icon: HeartFilled },
  { label: "Contact the team", href: "/contact", icon: SmileOutlined },
];

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#f7f9fc] px-5 py-12 text-brand-blue-dark sm:px-8 sm:py-16 lg:py-20">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_8%_12%,rgba(65,182,230,0.14),transparent_34%),radial-gradient(ellipse_at_88%_78%,rgba(255,199,44,0.16),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[30rem] w-[30rem] rounded-full border border-brand-blue-dark/[0.045] sm:h-[42rem] sm:w-[42rem]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-36 -z-10 h-[30rem] w-[30rem] rounded-full border border-dashed border-brand-cyan/[0.13]"
      />

      <div className="gh-container mx-auto w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.09 },
            },
          }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <motion.div
                variants={entrance}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-2"
              >
                <p className="text-[5.5rem] font-black leading-[0.85] tracking-[-0.095em] text-brand-blue-dark/[0.09] sm:text-8xl lg:text-[7.5rem]">
                  404<span className="text-brand-gold">.</span>
                </p>

                <h1 className="mt-5 text-[2.7rem] font-extrabold leading-[1.04] tracking-[-0.06em] text-brand-blue-dark sm:text-5xl md:text-6xl">
                  This page has
                  <span className="mt-2 block text-brand-cyan">
                    gone on a journey.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={entrance}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:mx-0"
              >
                We&apos;re not sure whether it missed the turn, took the
                scenic route, or answered a different calling. Either way,
                it&apos;s not here.
              </motion.p>

              {/* Humour note */}
              <motion.div
                variants={entrance}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mx-auto mt-6 flex max-w-md items-start gap-3 rounded-xl border border-brand-gold/25 bg-brand-gold/[0.09] p-4 text-left sm:gap-4 sm:p-5 lg:mx-0"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-blue-dark shadow-sm">
                  <SmileOutlined className="text-lg" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-blue-dark">
                    We have prayed about it.
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                    We&apos;re now trying the more traditional solution:
                    checking the URL.
                  </p>
                </div>
              </motion.div>

              {/* Primary actions */}
              <motion.div
                variants={entrance}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
              >
                <Link
                  href="/"
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-brand-blue-dark px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-blue-dark/15 transition duration-200 hover:-translate-y-0.5 hover:bg-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
                >
                  <HomeOutlined />
                  Take Me Home
                  <ArrowRightOutlined className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/worship-online"
                  className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border border-brand-blue-dark/10 bg-white/90 px-6 py-3 text-sm font-bold text-brand-blue-dark transition duration-200 hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
                >
                  Worship With Us
                  <ArrowRightOutlined className="text-brand-cyan transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.p
                variants={entrance}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mt-5 text-xs text-slate-400 sm:text-sm"
              >
                Good news: grace abounds. Bad news: this URL doesn&apos;t.
              </motion.p>
            </div>

            {/* Visual story */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-blue-dark/[0.07] bg-white p-4 shadow-[0_30px_90px_-38px_rgba(11,34,101,0.25)] sm:p-6">
                {/* Illustration heading */}
                <div className="flex items-center justify-between gap-3 px-1 pb-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                      Lost & found
                    </p>
                    <h2 className="mt-1 text-sm font-bold text-brand-blue-dark sm:text-base">
                      The missing page files
                    </h2>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-dark/[0.04] text-brand-blue-dark/50">
                    <SearchOutlined />
                  </div>
                </div>

                {/* Scenic illustration panel */}
                <div className="relative isolate flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-[#edf7fb] sm:h-72">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(255,199,44,0.45),transparent_18%),linear-gradient(180deg,#edf7fb_0%,#f8fbfc_65%,#e7f3e9_100%)]"
                  />

                  {/* Sun */}
                  <div
                    aria-hidden="true"
                    className="absolute right-10 top-8 h-12 w-12 rounded-full bg-brand-gold/80 blur-[1px] sm:right-14 sm:top-10 sm:h-14 sm:w-14"
                  />

                  {/* Rolling hills */}
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-10 h-36 w-[120%] rotate-[-7deg] rounded-[50%] bg-[#d7ebdc]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-24 -right-16 h-40 w-[110%] rotate-[8deg] rounded-[50%] bg-[#c3e1cd]"
                  />

                  {/* Floating route markers */}
                  <div className="absolute left-7 top-8 rounded-full border border-white/80 bg-white/80 px-3 py-2 text-[10px] font-bold text-brand-blue-dark shadow-sm backdrop-blur-sm sm:left-9 sm:top-10">
                    YOU ARE HERE?
                  </div>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 280 170"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <path
                      d="M38 123 C65 65, 102 147, 142 90 S204 47, 243 75"
                      stroke="#0b2265"
                      strokeOpacity=".25"
                      strokeWidth="2"
                      strokeDasharray="5 7"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Sheep character */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { y: [0, -6, 0], rotate: [0, 2, -2, 0] }
                    }
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/2 top-[43%] z-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/90 bg-white/80 shadow-[0_18px_50px_-25px_rgba(11,34,101,0.25)] backdrop-blur-sm sm:h-40 sm:w-40">
                      <span className="select-none text-[6rem] leading-none sm:text-[7rem]">
                        🐑
                      </span>
                      <span className="absolute -right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-brand-blue-dark shadow-md">
                        <CompassOutlined className="text-lg" />
                      </span>
                    </div>
                  </motion.div>

                  {/* Map pin */}
                  <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                    <span className="text-[10px] font-bold text-brand-blue-dark">
                      Somewhere on the internet
                    </span>
                  </div>
                </div>

                {/* Case details */}
                <div className="px-1 pb-1 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-brand-blue-dark">
                      <CompassOutlined />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-blue-dark">
                        Last seen following a link.
                      </p>
                      <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                        May respond to prayer, a working link, or someone
                        who remembers the right address.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Case status
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/[0.09] px-3 py-1.5 text-[10px] font-bold text-brand-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                      Hope remains
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating announcement */}
              <motion.div
                animate={
                  shouldReduceMotion ? undefined : { y: [0, -4, 0] }
                }
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-2 max-w-[230px] rounded-xl bg-brand-blue-dark px-4 py-3 text-white shadow-xl sm:-left-5 sm:max-w-[250px]"
              >
                <div className="flex items-center gap-2">
                  <HeartFilled className="text-brand-gold" />
                  <p className="text-xs font-bold">
                    Service update
                  </p>
                </div>
                <p className="mt-1 text-[11px] leading-5 text-white/75">
                  This page may be missing, but Sunday is still coming.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom navigation */}
          <motion.div
            variants={entrance}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-16 border-t border-brand-blue-dark/[0.08] pt-7 sm:mt-20 sm:pt-8"
          >
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-brand-blue-dark">
                  While you&apos;re here…
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  These links have their lives together.
                </p>
              </div>

              <nav
                aria-label="Helpful links"
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
              >
                {helpfulLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-600 transition-colors hover:text-brand-cyan sm:text-sm"
                  >
                    <Icon className="text-brand-cyan" />
                    {label}
                    <ArrowRightOutlined className="text-[10px] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-slate-400 sm:text-xs">
                Global Harvest Church
              </p>
              <p className="text-xs text-slate-400">
                Love. Faith. Purpose. Even when the URL has none.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
