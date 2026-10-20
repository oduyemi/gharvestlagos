
"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownOutlined, ArrowRightOutlined, YoutubeFilled, HeartFilled, PlayCircleFilled } from "@ant-design/icons";


const YOUTUBE_CHANNEL = "https://www.youtube.com/@gharvestchurch";


export const WorshipHero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.65, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#071744] text-white">
      {/* Background photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-[center_40%] sm:bg-center"
        style={{ backgroundImage: "url('/images/hero/worship-online.jpg')" }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#071744]/40"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06102f]/95 via-[#071744]/80 to-[#071744]/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071744] via-transparent to-[#071744]/30"
      />

      {/* Subtle decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 h-72 w-72 rounded-full bg-brand-cyan/15 blur-[100px]"
      />

      <div className="gh-container relative mx-auto w-full px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-24 xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.72fr)] lg:gap-12 xl:gap-16">
          {/* Main introduction */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
              },
            }}
            className="mx-auto w-full max-w-2xl lg:mx-0"
          >
            <motion.div variants={reveal}>
              <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-[#071744]/50 px-3.5 py-2 backdrop-blur-md sm:px-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand-gold/60 motion-reduce:animate-none" />
                  <span className="relative h-2 w-2 rounded-full bg-brand-gold" />
                </span>
                <span className="truncate text-[10px] font-bold uppercase tracking-[0.15em] text-white/90 sm:text-xs sm:tracking-[0.18em]">
                  Global Harvest Church · Maryland, Lagos
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-6 max-w-2xl text-[clamp(2.7rem,7vw,5.5rem)] font-extrabold leading-[0.99] tracking-[-0.055em]"
            >
              Wherever you are,
              <span className="relative mt-2 block w-fit text-brand-gold">
                you belong here.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-[85%] text-brand-cyan sm:-bottom-3 sm:h-3"
                >
                  <path
                    d="M3 8C67 1 174 1 297 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-lg text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Come as you are. Lift your voice, encounter God, and grow in
              faith with our church family. Wherever life finds you, there is
              a place for you here.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={reveal}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5"
            >
              <a
                href="/worship-online/#live"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand-gold px-5 py-3 text-sm font-extrabold text-brand-blue-dark shadow-[0_8px_28px_rgba(255,199,44,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#071744] sm:px-6"
              >
                <YoutubeFilled className="text-lg" />
                Join Livestream
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="#online-services"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/[0.06] px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-brand-cyan/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6"
              >
                Explore past services
                <ArrowDownOutlined className="transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </motion.div>

            {/* Small social proof detail */}
            <motion.div
              variants={reveal}
              className="mt-7 flex items-center gap-3 text-xs text-white/65 sm:mt-8"
            >
              <span className="flex -space-x-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#071744] bg-brand-gold text-[10px] text-[#071744]">
                  <HeartFilled />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#071744] bg-brand-cyan text-[10px] text-[#071744]">
                  <HeartFilled />
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#071744] bg-white text-[10px] text-[#071744]">
                  <HeartFilled />
                </span>
              </span>
              <span>A church family, wherever life takes you.</span>
            </motion.div>
          </motion.div>

          {/* Compact floating feature card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="relative mx-auto w-full max-w-[360px] lg:ml-auto lg:mr-0"
          >
            {/* Offset frame */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rotate-2 rounded-[1.65rem] border border-white/20"
            />

            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#091638]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-cyan/15 blur-3xl"
              />

              <div className="relative flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Your online worship space
                </span>
                <YoutubeFilled className="text-xl text-brand-gold" />
              </div>

              <div className="relative mt-5 flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-gold text-xl text-brand-blue-dark">
                  <PlayCircleFilled />
                </div>

                <div>
                  <h2 className="text-lg font-bold leading-tight tracking-tight sm:text-xl">
                    More than a screen.
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-brand-cyan">
                    A place to belong.
                  </p>
                </div>
              </div>

              <p className="relative mt-4 text-sm leading-6 text-white/65">
                Be encouraged by the Word, join in worship, and carry the
                presence of God into your everyday life.
              </p>

              <div className="relative my-5 h-px bg-white/10" />

              <div className="relative flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <HeartFilled />
                </span>
                <div>
                  <p className="text-sm font-bold">Grow with our family</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Find encouragement, strengthen your faith, and stay
                    connected.
                  </p>
                </div>
              </div>

              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-5 flex min-h-11 items-center justify-between gap-3 rounded-xl bg-white/[0.07] px-4 py-3 text-xs font-bold text-white transition hover:bg-white/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:text-sm"
              >
                Explore our YouTube channel
              </a>
            </div>

            {/* Playful floating label */}
            <motion.div
              initial={false}
              animate={reduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-full border border-white/15 bg-white px-3.5 py-2 text-xs font-bold text-brand-blue-dark shadow-xl sm:flex"
            >
              <HeartFilled className="text-rose-500" />
              Faith grows together
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Transition into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#071744]/70 to-transparent"
      />
    </section>
  );
};
