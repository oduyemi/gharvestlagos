
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartFilled, YoutubeFilled } from "@ant-design/icons";

export const WorshipConnect = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-dark text-white">
      {/* Community photography */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/connect.jpg')] bg-cover bg-center"
      />

      {/* Restrained overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/80 to-brand-blue-dark/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-blue-dark/60 to-transparent"
      />

      <div className="gh-container relative mx-auto w-full px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-16 xl:px-14">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid items-center gap-8 lg:grid-cols-[1fr_290px] lg:gap-12"
        >
          {/* Main content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-xs">
              <HeartFilled className="text-brand-gold" />
              You belong here
            </div>

            <h2 className="mt-4 max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
              Faith is better
              <span className="text-brand-gold"> together.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:leading-7">
              Wherever life finds you, stay connected with our church family.
              Find encouragement through worship, biblical messages, and
              moments that help you grow in faith.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.youtube.com/@gharvestchurch?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-md bg-brand-gold px-5 py-3 text-xs font-bold text-brand-blue-dark transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark sm:text-sm"
              >
                <YoutubeFilled className="text-base" />
                Subscribe on YouTube
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://www.youtube.com/@gharvestchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/[0.06] px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold sm:text-sm"
              >
                Explore our channel
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Compact invitation card */}
          <motion.div
            initial={
              shouldReduceMotion ? false : { opacity: 0, x: 14 }
            }
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="w-full max-w-sm lg:max-w-none"
          >
            <div className="rounded-xl border border-white/20 bg-brand-blue-dark/55 p-5 shadow-xl shadow-black/10 backdrop-blur-md sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/15 text-brand-gold">
                  <HeartFilled />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">
                    A place to grow
                  </p>
                  <p className="mt-0.5 text-xs text-white/60">
                    Love. Faith. Purpose.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/75">
                Come as you are. Watch a message, worship with us, and be
                encouraged wherever you are.
              </p>

              <a
                href="https://www.youtube.com/@gharvestchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-brand-gold transition-colors hover:text-white sm:text-sm"
              >
                Get to know us
                <ArrowRightOutlined />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-9 h-px bg-gradient-to-r from-brand-gold/50 via-white/15 to-transparent sm:mt-11" />
      </div>
    </section>
  );
};
