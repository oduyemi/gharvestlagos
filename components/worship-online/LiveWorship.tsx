
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, YoutubeFilled, PlayCircleFilled, HeartFilled } from "@ant-design/icons";


const YOUTUBE_LIVE = "https://www.youtube.com/@gharvestchurch/live";


export const LiveWorship = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="live"
      className="relative overflow-hidden bg-[#FAF9F5] py-14 text-[#18202a] sm:py-16 lg:py-20"
    >
      {/* Subtle decorative backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-brand-cyan/[0.07] blur-3xl"
      />

      <div className="gh-container relative mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.1,
                },
              },
            }}
            className="relative z-10 mx-auto w-full max-w-xl lg:mx-0"
          >
            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/20 bg-white px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-blue sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand-cyan/50 motion-reduce:animate-none" />
                  <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
                </span>
                Worship with us
              </span>
            </motion.div>

            <motion.h2
              variants={reveal}
              className="mt-6 text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.055em]"
            >
              One faith.
              <br />
              One family.
              <span className="relative mt-1 block w-fit text-brand-blue">
                Wherever you are.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 280 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-[88%] text-brand-gold"
                >
                  <path
                    d="M3 7C66 1 173 2 277 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-6 max-w-md text-sm leading-7 text-[#18202a]/65 sm:text-base sm:leading-8"
            >
              Join us online for uplifting worship and a life-giving word.
              Wherever you are, there&apos;s room for you in our family.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={YOUTUBE_LIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-blue/15 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-cyan hover:text-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 sm:px-6"
              >
                <YoutubeFilled className="text-lg" />
                Watch Live on YouTube
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-5 flex items-start gap-2.5 text-xs leading-5 text-[#18202a]/55"
            >
              <HeartFilled className="mt-0.5 shrink-0 text-brand-cyan" />
              <p>
                Not live right now? Explore our previous services below.
              </p>
            </motion.div>
          </motion.div>

          {/* Cinematic worship image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
          >
            {/* Offset decorative frame */}
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-2 bottom-2 left-2 rounded-[1.6rem] border border-brand-gold/60 sm:-right-3 sm:-top-3 sm:rounded-[2rem]"
            />

            <a
              href={YOUTUBE_LIVE}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Global Harvest Church live worship on YouTube"
              className="group relative block overflow-hidden rounded-[1.4rem] bg-brand-blue-dark shadow-xl shadow-brand-blue-dark/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 sm:rounded-[1.75rem]"
            >
              <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[1.18/1] lg:aspect-[5/4]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[url('/images/worship.jpg')] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#06102f]/90 via-[#071744]/15 to-[#071744]/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-[#071744]/20 to-transparent"
                />

                {/* Floating YouTube label */}
                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071744]/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md sm:text-xs">
                    <YoutubeFilled className="text-brand-gold" />
                    Worship online
                  </span>
                </div>

                {/* Play control */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border border-white/60 bg-white/20 text-3xl text-white shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue-dark sm:h-20 sm:w-20 sm:text-4xl">
                    <PlayCircleFilled />
                    <span
                      aria-hidden="true"
                      className="absolute -inset-2 rounded-full border border-white/30 transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                </div>

                {/* Image caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.19em] text-brand-gold sm:text-[10px]">
                        Global Harvest Church
                      </p>
                      <h3 className="mt-2 max-w-sm text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl">
                        Let&apos;s worship together.
                      </h3>
                      <p className="mt-2 text-xs text-white/70 sm:text-sm">
                        Maryland, Lagos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Floating note */}
            <motion.div
              initial={false}
              animate={reduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 left-5 flex items-center gap-2.5 rounded-full border border-black/5 bg-white px-3.5 py-2.5 shadow-lg shadow-black/10 sm:left-8"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/20 text-sm text-brand-blue">
                <HeartFilled />
              </span>
              <span className="text-xs font-bold text-[#18202a]">
                Faith grows together
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
