"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Headphones,
  Play,
  Star,
  Bookmark,
  AudioLines,
  Quote,
  MoveUpRight,
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

const waveform = [
  18, 30, 44, 25, 55, 72, 36, 48, 82, 60,
  34, 68, 92, 43, 55, 76, 35, 62, 88, 48,
  30, 66, 80, 42, 58, 95, 50, 34, 72, 46,
  26, 56, 76, 38, 62, 86, 45, 28, 54,
];

export const ResourcesCategories = () => {
  const reduceMotion = useReducedMotion();

  const motionProps = (delay = 0) => ({
    initial: reduceMotion ? false : "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.15 },
    variants: reveal,
    transition: {
      ...transition,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="resource-categories"
      className="relative isolate overflow-hidden bg-[#F8F7F2] py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-48 h-72 w-72 rounded-full bg-brand-cyan/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-brand-gold/[0.09] blur-3xl" />

      <div className="gh-container relative px-5 sm:px-8 lg:px-10 xl:px-12">
        <motion.div
        {...motionProps()}
        className="relative mb-12 sm:mb-16 lg:mb-20"
        >
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

            <div className="relative">
            <div className="mb-7 inline-flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue-dark text-brand-gold shadow-sm">
                <Bookmark size={16} />
                </span>

                <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-blue-dark">
                    The GHarvest Collection
                </span>
                <span className="text-[10px] font-medium tracking-wide text-gray-400">
                    Resources for your journey
                </span>
                </div>
            </div>

            <h2 className="max-w-3xl text-[2.65rem] font-black leading-[1.04] tracking-[-0.055em] text-brand-blue-dark sm:text-5xl lg:text-[4.25rem]">
                A world of inspiration,
                <br className="hidden sm:block" />
                <span className="relative inline-block text-brand-cyan">
                waiting to be explored.
                <svg
                    viewBox="0 0 480 16"
                    fill="none"
                    className="absolute -bottom-2 left-0 w-full max-w-[480px]"
                    aria-hidden="true"
                >
                    <path
                    d="M3 10C105 1 342 0 476 8"
                    stroke="#FFC72C"
                    strokeWidth="5"
                    strokeLinecap="round"
                    />
                </svg>
                </span>
            </h2>
            </div>

            <div className="relative lg:pb-2">
            <div className="mb-5 hidden h-px w-16 bg-brand-cyan lg:block" />

            <p className="max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
                Thoughtful words. Life-changing teachings. Music that lifts
                the soul. Discover resources to encourage your faith and
                inspire the way you live.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue-dark shadow-sm">
                <BookOpen size={13} className="text-brand-cyan" />
                Read
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#E87722]/20 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue-dark shadow-sm">
                <Bookmark size={13} className="text-[#E87722]" />
                Discover
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-[#00A859]/20 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-blue-dark shadow-sm">
                <Headphones size={13} className="text-[#00A859]" />
                Listen
                </span>
            </div>
            </div>
        </div>

        <div className="mt-9 flex items-center gap-4 sm:mt-12">
            <div className="h-px flex-1 bg-[#E4E2D9]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-400">
            Explore the collection
            </span>
            <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </div>
        </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
          <motion.article
            {...motionProps()}
            className="group relative isolate overflow-hidden rounded-[2rem] border border-[#E8E7E0] bg-white lg:col-span-7"
          >
            <Link
              href="/blog"
              aria-label="Explore the Global Harvest Church blog"
              className="relative flex min-h-[510px] flex-col justify-between p-7 sm:p-10 lg:min-h-[590px] lg:p-12"
            >
              <div className="pointer-events-none absolute -right-20 top-12 h-80 w-80 rounded-full bg-[#E9F7FB] transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute -right-10 top-24 h-64 w-64 rounded-full border border-brand-cyan/15" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-3 py-2">
                  <BookOpen size={14} className="text-brand-cyan" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue-dark">
                    Read & reflect
                  </span>
                </div>

                <span className="text-sm font-black tracking-widest text-gray-300">
                  01 / 03
                </span>
              </div>

              <div className="relative z-10 mt-14 lg:mt-20">
                <h3 className="max-w-[530px] text-[2.65rem] font-black leading-[1.04] tracking-[-0.05em] text-brand-blue-dark sm:text-5xl lg:text-[3.8rem]">
                  A fresh
                  <br />
                  perspective.
                  <br />
                  <span className="text-brand-cyan">A stronger faith.</span>
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                  Faith-filled articles, thoughtful reflections and
                  practical wisdom to encourage your walk with Christ
                  and inspire purposeful living.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-brand-blue-dark transition-colors group-hover:text-brand-cyan">
                  Explore the blog
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-dark text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-brand-cyan">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -8, 0], rotate: [-5, -3, -5] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute right-7 top-32 z-10 hidden w-36 rotate-[-5deg] rounded-xl bg-[#FFC72C] p-4 shadow-xl shadow-brand-blue-dark/10 sm:block lg:right-12 lg:top-36 lg:w-40"
              >
                <Quote size={20} className="text-brand-blue-dark/50" />
                <p className="mt-3 text-sm font-bold leading-5 text-brand-blue-dark">
                  Little truths.
                  <br />
                  Lasting impact.
                </p>
                <div className="mt-3 h-1 w-8 rounded-full bg-brand-blue-dark/30" />
              </motion.div>

              <span className="pointer-events-none absolute -bottom-12 right-3 text-[13rem] font-black leading-none tracking-[-0.1em] text-brand-cyan/[0.045] transition-transform duration-700 group-hover:-translate-y-3 lg:right-8 lg:text-[17rem]">
                01
              </span>

              <span className="pointer-events-none absolute bottom-8 right-8 hidden h-16 w-16 items-center justify-center rounded-full border border-brand-cyan/20 text-brand-cyan transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-cyan group-hover:text-white sm:flex">
                <MoveUpRight size={25} />
              </span>
            </Link>
          </motion.article>

          <div className="grid gap-5 lg:col-span-5 lg:gap-6">

            <motion.article
              {...motionProps(0.1)}
              className="group relative isolate min-h-[390px] overflow-hidden rounded-[2rem] bg-[#FCEBCF] p-7 sm:p-9 lg:min-h-0 lg:flex-1"
            >
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D68B37]/20" />
              <div className="pointer-events-none absolute -right-6 -top-10 h-44 w-44 rounded-full border border-[#D68B37]/20" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9A5B20]">
                  Discover & grow
                </span>
                <span className="text-sm font-black tracking-widest text-[#B98B54]">
                  02
                </span>
              </div>

              <div className="relative z-10 mt-8 max-w-[280px]">
                <h3 className="text-3xl font-black leading-[1.05] tracking-[-0.04em] text-brand-blue-dark sm:text-4xl">
                  Stories, wisdom &{" "}
                  <span className="text-[#B96B25]">big ideas.</span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#705C46]">
                  Books by Rev. Victor Adeyemi and Pastor Jumoke Adeyemi
                  to inspire deeper understanding and stronger faith.
                </p>
              </div>

              <div className="pointer-events-none relative my-7 flex h-[145px] items-center justify-center">
                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, -5, 0], rotate: [-13, -10, -13] }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-32 w-[88px] -rotate-[13deg] flex-col items-center justify-center rounded-r-lg border-l-[5px] border-[#92501D] bg-[#C97936] p-3 text-center shadow-xl shadow-[#8D5C30]/20 transition-transform duration-500 group-hover:-translate-y-3 group-hover:-rotate-[7deg]"
                >
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">
                    The journey
                  </span>
                  <BookOpen size={29} className="my-3 text-white" />
                  <span className="text-[8px] font-black uppercase tracking-wider text-white">
                    Grow in grace
                  </span>
                </motion.div>

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, 5, 0], rotate: [10, 13, 10] }
                  }
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative -ml-3 mt-5 flex h-28 w-[76px] rotate-[10deg] flex-col items-center justify-center rounded-r-lg border-l-[5px] border-[#A9781B] bg-[#E4B94D] shadow-xl shadow-[#8D5C30]/15 transition-transform duration-500 group-hover:translate-y-2 group-hover:rotate-[15deg]"
                >
                  <Star size={26} className="text-white" />
                  <span className="mt-3 text-[8px] font-black uppercase tracking-widest text-white">
                    Inspired
                  </span>
                </motion.div>

                <span className="absolute right-[17%] top-1 text-3xl text-[#D68B37]">
                  ✳
                </span>
                <span className="absolute bottom-0 left-[18%] text-xl text-[#D68B37]">
                  ✦
                </span>
              </div>

              <Link
                href="/books"
                className="relative z-10 inline-flex items-center gap-3 rounded-full bg-brand-blue-dark px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:gap-5 hover:bg-[#12358A]"
              >
                Browse our books
                <ArrowUpRight size={17} />
              </Link>

              <span className="pointer-events-none absolute -bottom-12 -right-5 text-[10rem] font-black leading-none text-[#A75A19]/[0.06]">
                02
              </span>
            </motion.article>

            <motion.article
              {...motionProps(0.2)}
              className="group relative isolate min-h-[390px] overflow-hidden rounded-[2rem] bg-[#091B40] p-7 text-white sm:p-9 lg:min-h-0 lg:flex-1"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#263F83]/60 blur-3xl" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                  Listen & be inspired
                </span>
                <span className="text-sm font-black tracking-widest text-white/30">
                  03
                </span>
              </div>

              <div className="relative z-10 mt-8 max-w-[290px]">
                <h3 className="text-3xl font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                  Press play.
                  <br />
                  <span className="text-brand-cyan">Let faith speak.</span>
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-100/70">
                  Powerful messages and inspiring songs to keep you
                  encouraged wherever life takes you.
                </p>
              </div>

              <div className="relative my-7 flex h-[125px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045]">
                <div className="absolute inset-0 flex items-center justify-center gap-[3px] px-4">
                  {waveform.map((height, index) => (
                    <motion.span
                      key={index}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scaleY: [0.65, 1, 0.75, 1],
                              opacity: [0.55, 1, 0.7, 0.9],
                            }
                      }
                      transition={{
                        duration: 1.8 + (index % 5) * 0.2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: index * 0.025,
                        ease: "easeInOut",
                      }}
                      className="w-[3px] origin-center rounded-full bg-brand-cyan sm:w-1"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-[5px] border-[#091B40] bg-brand-gold text-brand-blue-dark shadow-lg shadow-black/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                  <Play size={19} fill="currentColor" />
                </div>

                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  <AudioLines size={13} />
                  Listen. Learn. Live.
                </div>
              </div>

              <Link
                href="/audio"
                className="relative z-10 inline-flex items-center gap-3 rounded-full bg-brand-gold px-5 py-3.5 text-sm font-bold text-brand-blue-dark transition-all duration-300 hover:gap-5 hover:bg-white"
              >
                Explore audio
                <ArrowUpRight size={17} />
              </Link>

              <Headphones
                size={150}
                strokeWidth={0.5}
                className="pointer-events-none absolute -bottom-10 -right-8 rotate-[-15deg] text-white/[0.035] transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110"
              />
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};
