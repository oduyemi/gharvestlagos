
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, YoutubeFilled, PlayCircleFilled } from "@ant-design/icons";

const YOUTUBE_LIVE = "https://www.youtube.com/@gharvestchurch/live";

export const LiveWorship = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-14 text-[#18202a] sm:py-20 lg:py-24" id="live">
      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          {/* Concise introduction */}
          <div className="max-w-xl">
            <p className="mb-4 pl-2 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              Worship with us
            </p>

            <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              One faith.
              <br />
              One family.
              <span className="mt-1 block text-brand-blue">
                Wherever you are.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#18202a]/65 sm:text-base sm:leading-8">
              Join us online for uplifting worship and a life-giving word.
            </p>

            <a
              href={YOUTUBE_LIVE}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-cyan hover:text-brand-blue-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 sm:mt-8 sm:w-auto sm:min-w-[190px]"
            >
              <YoutubeFilled className="text-lg" />
              Watch Live on YouTube
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs text-[#18202a]/50">
              Not live right now? Explore our previous services below.
            </p>
          </div>

          {/* Visual worship panel */}
          <motion.a
            href={YOUTUBE_LIVE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Global Harvest Church live worship on YouTube"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.08 }}
            className="group relative block w-full overflow-hidden rounded-2xl bg-brand-blue-dark shadow-xl shadow-brand-blue-dark/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
          >
            <div className="relative aspect-[4/3] min-h-[240px] w-full overflow-hidden sm:aspect-[5/3] lg:aspect-[4/3]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[url('/images/worship.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#06102f]/90 via-[#071744]/20 to-[#071744]/10"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 text-3xl text-white shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-blue-dark sm:h-20 sm:w-20 sm:text-4xl">
                  <PlayCircleFilled />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
                    Global Harvest Church,<br />Maryland, Lagos
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Let&apos;s worship together.
                  </h3>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-brand-gold group-hover:text-brand-blue-dark">
                  <ArrowRightOutlined />
                </span>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
