"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  HeartFilled,
  MessageOutlined,
  StarFilled,
} from "@ant-design/icons";

export const ContactHero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.7,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate overflow-hidden bg-brand-blue-dark text-white"
    >
      {/* Photography first: retain the character of the original image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 bg-[url('/images/hero/contact.jpg')] bg-cover bg-center"
      />

      {/* Restrained overlays preserve image detail */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#071744]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071744]/85 via-[#071744]/60 via-55% to-[#071744]/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071744]/55 via-transparent to-[#071744]/10"
      />

      {/* Subtle atmospheric accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-[100px] sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[25%] -z-10 h-64 w-64 rounded-full bg-brand-gold/[0.08] blur-[90px]"
      />

      <div className="gh-container relative mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-12 lg:py-32 xl:px-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-16 xl:grid-cols-[1fr_340px]">
          {/* Main message */}
          <div className="max-w-3xl">
            <motion.h1
              {...reveal(0.1)}
              id="contact-hero-heading"
              className="text-[clamp(3rem,7.5vw,6.5rem)] font-black leading-[0.96] tracking-[-0.065em]"
            >
              Let's start a
              <br />
              <span className="relative mt-2 inline-block text-brand-gold">
                conversation
                <span
                  aria-hidden="true"
                  className="absolute -right-5 -top-3 text-2xl text-brand-cyan sm:-right-7 sm:-top-4 sm:text-4xl"
                >
                  ✳
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 440 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-3 left-0 h-2.5 w-full text-brand-cyan sm:-bottom-4 sm:h-3"
                >
                  <path
                    d="M3 9 C95 1, 245 15, 436 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-white">.</span>
            </motion.h1>

            <motion.p
              {...reveal(0.2)}
              className="mt-9 max-w-xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9"
            >
              Have a question, need prayer, or want to find your place in our
              church family? Whatever brings you here, there&apos;s room for you
              at Global Harvest Church.
            </motion.p>

            <motion.div
              {...reveal(0.3)}
              className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6"
            >
              <a
                href="#contact-form"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-bold text-brand-blue-dark shadow-[0_8px_30px_rgba(255,199,44,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_36px_rgba(255,255,255,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Get in touch
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue-dark/10 transition-all duration-300 group-hover:translate-y-0.5 group-hover:bg-brand-blue-dark group-hover:text-white">
                  <ArrowDownOutlined className="text-xs" />
                </span>
              </a>

              <span className="flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm">
                <HeartFilled className="text-brand-cyan" />
                Every message matters to us.
              </span>
            </motion.div>

            {/* Quiet signature */}
            <motion.div
              {...reveal(0.4)}
              className="mt-12 flex items-center gap-4 border-t border-white/20 pt-6 sm:mt-16 sm:pt-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 text-brand-gold">
                <ArrowDownOutlined />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  You don&apos;t have to reach out alone.
                </p>
                <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">
                  Questions · Prayer · Connection · Community
                </p>
              </div>
            </motion.div>
          </div>

          {/* Floating welcome note */}
          <motion.aside
            {...reveal(0.35)}
            className="relative mx-auto w-full max-w-[310px] lg:mx-0 lg:justify-self-end"
          >
            <div className="relative rotate-[2deg] rounded-[1.75rem] border border-white/20 bg-[#0B2265]/70 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-transform duration-500 hover:rotate-0 sm:p-7">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold text-2xl text-brand-blue-dark">
                  <HeartFilled />
                </div>

                <span className="flex h-9 w-9 rotate-6 items-center justify-center rounded-full border border-white/20 bg-white/[0.07] text-brand-cyan">
                  <StarFilled />
                </span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
                A little note
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.045em] sm:text-4xl">
                You are
                <span className="block text-brand-gold">welcome here.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/75">
                Whether you&apos;re visiting for the first time or have been
                part of our church family for years, we&apos;re glad you&apos;re
                here.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-xs font-semibold text-white/65">
                  Let&apos;s connect
                </span>
                <ArrowRightOutlined className="text-brand-gold" />
              </div>

              <span
                aria-hidden="true"
                className="absolute -right-3 -top-4 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-brand-cyan text-lg font-black text-brand-blue-dark shadow-lg"
              >
                +
              </span>
            </div>

            <motion.div
              aria-hidden="true"
              animate={
                reduceMotion ? undefined : { y: [0, -7, 0], rotate: [0, 7, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold text-xl text-brand-blue-dark shadow-xl sm:-left-5"
            >
              ✳
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};