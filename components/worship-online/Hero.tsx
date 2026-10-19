
"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownOutlined, ArrowRightOutlined, YoutubeFilled, HeartFilled } from "@ant-design/icons";


const YOUTUBE_CHANNEL = "https://www.youtube.com/@gharvestchurch";

export const WorshipHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[auto] items-center overflow-hidden bg-[#071744] text-white sm:min-h-[680px] lg:min-h-[740px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-cover bg-[center_38%] sm:bg-center"
        style={{
          backgroundImage: "url('/images/hero/worship-online.jpg')",
        }}
      />

      {/* Layered overlays: stronger behind copy, lighter over the image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#071744]/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#06102f]/95 via-[#071744]/80 to-[#071744]/35"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071744] via-transparent to-[#071744]/35"
      />

      {/* Soft brand lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-64 w-64 rounded-full bg-brand-cyan/15 blur-[90px] sm:h-96 sm:w-96 sm:blur-[120px]"
      />

      
    <div className="gh-container relative mx-auto w-full px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-32 lg:px-12 lg:py-28 xl:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.75fr)] lg:gap-10 xl:gap-16">
          {/* Main introduction */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7 }}
            className="mx-auto w-full max-w-3xl lg:mx-0"
          >
            <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/20 bg-[#071744]/45 px-3.5 py-2.5 backdrop-blur-md sm:mb-8 sm:px-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
              </span>

              <span className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-white/90 sm:text-xs sm:tracking-[0.2em]">
                Global Harvest Church, Maryland, Lagos
              </span>
            </div>

            <h1 className="max-w-3xl text-[clamp(2.65rem,8.5vw,5.8rem)] font-extrabold leading-[1.02] tracking-[-0.045em] [overflow-wrap:anywhere]">
              Wherever you are,
              <span className="mt-2 block text-brand-gold sm:mt-3">
                you belong here.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              Come as you are. Lift your voice, encounter God, and grow in
              faith with our church family. Wherever life finds you, there is
              a place for you here.
            </p>

            {/* Responsive actions */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="/worship-online/#live"
                rel="noopener noreferrer"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand-gold px-5 py-3.5 text-sm font-extrabold text-brand-blue-dark shadow-[0_10px_32px_rgba(255,199,44,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#071744] sm:w-auto sm:min-w-[185px] sm:px-6"
              >
                <YoutubeFilled className="shrink-0 text-lg" />
                Join Livestream
                <ArrowRightOutlined className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Link
                href="#online-services"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full border border-white/30 bg-white/[0.07] px-5 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:border-white/60 hover:bg-white/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto sm:px-6"
              >
                Explore past services
                <ArrowDownOutlined className="shrink-0 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="relative mx-auto w-full max-w-[440px] lg:ml-auto lg:mr-0"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[1.75rem] border border-white/10 sm:-inset-3 sm:rounded-[2rem]"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#071744]/75 p-5 shadow-2xl backdrop-blur-xl sm:rounded-[1.5rem] sm:p-7 md:p-8">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-cyan/20 blur-[60px] sm:h-44 sm:w-44"
              />

              <div className="relative flex items-start justify-between gap-3">
                <span className="inline-flex max-w-[calc(100%-2.5rem)] items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[9px] font-bold uppercase leading-4 tracking-[0.13em] text-white/85 sm:text-[10px] sm:tracking-[0.16em]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                  <span>Your church, wherever you are</span>
                </span>

                <YoutubeFilled className="mt-1 shrink-0 text-xl text-brand-gold sm:text-2xl" />
              </div>

              <h2 className="relative mt-6 text-2xl font-bold leading-tight tracking-tight sm:mt-8 sm:text-3xl">
                More than a screen.
                <span className="mt-1.5 block text-brand-cyan">
                  A place to belong.
                </span>
              </h2>

              <p className="relative mt-3 text-sm leading-6 text-white/70 sm:mt-4 sm:leading-7">
                Be encouraged by the Word, join in worship, and carry the
                presence of God into your everyday life.
              </p>

              <div className="relative mt-6 space-y-4 border-t border-white/15 pt-5 sm:mt-7 sm:space-y-5 sm:pt-6">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold sm:h-11 sm:w-11">
                    <YoutubeFilled className="text-base" />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-bold text-white">
                      Watch and worship
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60 sm:text-[13px]">
                      Join online services and revisit messages whenever you
                      need encouragement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan sm:h-11 sm:w-11">
                    <HeartFilled className="text-base" />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-bold text-white">
                      Grow with our family
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/60 sm:text-[13px]">
                      Find encouragement, strengthen your faith, and stay
                      connected.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-left text-xs font-bold text-white transition hover:border-white/20 hover:bg-white/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan sm:mt-7 sm:text-sm"
              >
                <span>Explore our YouTube channel</span>
                <ArrowRightOutlined className="shrink-0 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seamless transition into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071744]/75 to-transparent sm:h-24"
      />
    </section>
  );
};
