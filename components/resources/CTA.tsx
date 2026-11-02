"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Heart,
  Compass,
  Sparkles,
  MoveUpRight,
  Star,
} from "lucide-react";

export const ResourcesCTA = () => {
  const reduceMotion = useReducedMotion();

  const enter = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.2 },
    variants: enter,
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] py-20 sm:py-24 lg:py-32">
      <div className="gh-container">
        <motion.div
          {...reveal()}
          className="group relative isolate overflow-hidden rounded-[2rem] bg-[#091B40] shadow-[0_35px_100px_-35px_rgba(7,23,68,0.4)] sm:rounded-[2.5rem] lg:rounded-[3rem]"
        >
          <Image
            src="/images/resources.jpg"
            alt="A welcoming atmosphere of worship and spiritual growth at Global Harvest Church"
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            className="absolute inset-0 -z-30 object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
          />

          <div className="absolute inset-0 -z-20 bg-[#071744]/85" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#071744] via-[#071744]/90 to-[#071744]/35" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#071744]/80 via-transparent to-[#071744]/15" />

          {/* Ambient colour */}
          <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-brand-cyan/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-48 left-[25%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-blue/60 blur-[110px]" />

          {/* Decorative corner details */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-48 w-48 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-48 w-48 rotate-45 border border-white/10" />
            <div className="absolute -right-14 -top-14 h-36 w-36 rotate-45 border border-white/10" />
          </div>

          <div className="relative grid min-h-[570px] items-center gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[620px] lg:grid-cols-[1fr_0.75fr] lg:gap-8 lg:px-16 lg:py-20 xl:px-20">
            <div className="relative z-10 max-w-2xl">
              <motion.div
                {...reveal(0.1)}
                className="inline-flex items-center gap-3 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2.5 backdrop-blur-md"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
                  There is more to discover
                </span>
              </motion.div>

              <motion.h2
                {...reveal(0.18)}
                className="mt-8 text-[2.75rem] font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.6rem] xl:text-[5.1rem]"
              >
                More than
                <br />
                a moment.
                <br />
                <span className="relative inline-block text-brand-gold">
                  A journey.
                  <svg
                    viewBox="0 0 280 18"
                    fill="none"
                    className="absolute -bottom-3 left-0 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12C70 2 200 0 276 9"
                      stroke="#00A3E0"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h2>

              <motion.p
                {...reveal(0.26)}
                className="mt-8 max-w-xl text-base leading-8 text-blue-100/80 sm:text-lg sm:leading-9"
              >
                Faith is a journey, and you do not have to walk it alone.
                Discover a community where you can grow in God, find
                meaningful connections and become all He has called you to be.
              </motion.p>

              <motion.div
                {...reveal(0.34)}
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              >
                <Link
                  href="/about"
                  className="group/primary inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-sm font-bold text-brand-blue-dark shadow-[0_12px_35px_-12px_rgba(255,199,44,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:text-base"
                >
                  Discover Global Harvest
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover/primary:translate-x-1 group-hover/primary:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/missional-communities"
                  className="group/secondary inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.07] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:bg-brand-cyan/10 sm:text-base"
                >
                  <Compass
                    size={18}
                    className="text-brand-cyan transition-transform duration-300 group-hover/secondary:rotate-12"
                  />
                  Find your community
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/secondary:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                {...reveal(0.42)}
                className="mt-9 flex items-center gap-3 text-xs font-medium text-white/50 sm:text-sm"
              >
                <span className="h-px w-9 bg-brand-gold" />
                Discover purpose. Experience God.
              </motion.div>
            </div>

            <motion.div
              {...reveal(0.25)}
              className="relative mx-auto flex min-h-[330px] w-full max-w-[420px] items-center justify-center lg:min-h-[420px]"
            >
              <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9rem] font-black tracking-[-0.1em] text-white/[0.045] sm:text-[12rem]">
                GROW
              </span>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -9, 0], rotate: [-3, -2, -3] }
                }
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-[260px] rotate-[-3deg] rounded-[1.8rem] border border-white/20 bg-white/[0.09] p-5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-500 group-hover:rotate-0 sm:w-[290px] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-brand-blue-dark">
                    <Heart size={19} fill="currentColor" />
                  </div>

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Global Harvest
                  </span>
                </div>

                <div className="mt-9">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                    You belong here
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl">
                    Grow in
                    <br />
                    grace.
                    <br />
                    <span className="text-brand-gold">Live with</span>
                    <br />
                    purpose.
                  </h3>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/45">
                    Faith · Community · Purpose
                  </span>
                  <MoveUpRight size={19} className="text-brand-cyan" />
                </div>
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, 7, 0], rotate: [8, 12, 8] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-7 z-20 flex h-[94px] w-[94px] rotate-[8deg] flex-col items-center justify-center rounded-full bg-brand-gold text-center shadow-xl shadow-black/20 sm:right-2 sm:top-4 sm:h-[108px] sm:w-[108px]"
              >
                <Star size={17} fill="currentColor" />
                <span className="mt-1 text-[9px] font-black uppercase leading-4 tracking-[0.1em]">
                  Faith
                  <br />
                  for life
                </span>
              </motion.div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -7, 0], rotate: [0, -12, 0] }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-0 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-brand-cyan text-white shadow-xl shadow-black/20 sm:bottom-8 sm:left-2 sm:h-[74px] sm:w-[74px]"
              >
                <Sparkles size={29} />
              </motion.div>

              <span className="absolute left-8 top-8 text-3xl text-brand-cyan">
                ✳
              </span>
              <span className="absolute bottom-5 right-10 text-xl text-brand-gold">
                ✦
              </span>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-brand-cyan via-brand-gold to-brand-orange" />
        </motion.div>
      </div>
    </section>
  );
};
