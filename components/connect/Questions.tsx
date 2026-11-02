"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, MessageCircleQuestion, Sparkles } from "lucide-react";


const SLIDO_URL = "https://app.sli.do/event/qXDRxEDooTWmxBgexGfYCK/live/questions";



export const ConnectSlido = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="ask-us"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative">
          <motion.div
            {...reveal()}
            className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                Let's have a conversation
              </span>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.055em] text-brand-blue-dark sm:text-5xl lg:text-7xl">
                Nothing is
                <br />
                <span className="text-brand-cyan">off the table.</span>
              </h2>
            </div>

            <p className="max-w-sm text-base leading-7 text-[#536078] sm:pb-2 sm:text-lg">
              Faith, life, relationships, purpose, or something you've always
              wanted to ask. There's room for your question here.
            </p>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="relative overflow-hidden rounded-[2rem] bg-brand-blue-dark shadow-[0_30px_90px_-35px_rgba(7,23,68,0.4)] sm:rounded-[2.5rem]"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-brand-cyan/25 blur-[100px]" />
              <div className="absolute -bottom-48 left-[20%] h-[28rem] w-[28rem] rounded-full bg-brand-blue/80 blur-[100px]" />

              <div
                className="absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
            </div>

            <div className="relative grid min-h-[570px] items-center lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-white/80 backdrop-blur-md">
                  <Sparkles size={14} className="text-brand-gold" />
                  A space for every question
                </div>

                <h3 className="mt-8 max-w-xl text-[2.7rem] font-black leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.5rem]">
                  Ask freely.
                  <br />
                  <span className="text-brand-cyan">Grow together.</span>
                </h3>

                <p className="mt-6 max-w-md text-base leading-8 text-white/65 sm:text-lg">
                  You don't have to have everything figured out. Send us your
                  questions anonymously through Slido and join the conversation.
                  No pressure. No judgment. Just room to learn.
                </p>

                <div className="mt-9 flex flex-col items-start gap-5">
                  <Link
                    href={SLIDO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-14 items-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-extrabold text-brand-blue-dark shadow-[0_12px_35px_-12px_rgba(255,199,44,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:text-base"
                  >
                    Ask your question
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-dark/10 transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={19} />
                    </span>
                  </Link>

                  <div className="flex items-center gap-2.5 text-xs font-medium text-white/45">
                    <MessageCircle size={15} className="text-brand-cyan" />
                    <span>Powered by Slido · Anonymous questions welcome</span>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden px-6 pb-12 sm:min-h-[440px] lg:min-h-full lg:px-8 lg:py-16">
                <motion.div
                  animate={
                    reduceMotion ? undefined : { rotate: 360 }
                  }
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-white/15 sm:h-[440px] sm:w-[440px]"
                />

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : { y: [0, -12, 0], rotate: [-3, 1, -3] }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 flex h-44 w-44 items-center justify-center rounded-[2.5rem] bg-brand-cyan shadow-[0_25px_80px_-15px_rgba(0,163,224,0.6)] sm:h-56 sm:w-56 sm:rounded-[3rem]"
                >
                  <div className="absolute inset-3 rounded-[2rem] border border-white/20 sm:rounded-[2.5rem]" />
                  <MessageCircleQuestion
                    size={104}
                    strokeWidth={1.25}
                    className="text-white sm:h-32 sm:w-32"
                  />
                </motion.div>

                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="absolute left-2 top-12 z-20 max-w-[190px] -rotate-6 rounded-2xl border border-white/20 bg-white px-4 py-3.5 shadow-xl sm:left-0 sm:top-16 sm:px-5"
                >
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                    A question for you
                  </span>
                  <p className="mt-1.5 text-sm font-bold leading-5 text-brand-blue-dark sm:text-base">
                    How do I discover my purpose?
                  </p>
                </motion.div>

                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, 9, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-16 right-0 z-20 max-w-[190px] rotate-3 rounded-2xl bg-brand-gold px-4 py-3.5 shadow-xl sm:bottom-20 sm:right-2 sm:px-5"
                >
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-brand-blue/60">
                    Keep asking
                  </span>
                  <p className="mt-1.5 text-sm font-bold leading-5 text-brand-blue-dark sm:text-base">
                    What does it mean to walk by faith?
                  </p>
                </motion.div>

                <motion.div
                  animate={
                    reduceMotion ? undefined : { scale: [1, 1.12, 1] }
                  }
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-gold backdrop-blur-md sm:right-12 sm:top-12"
                >
                  <Sparkles size={23} />
                </motion.div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 sm:bottom-8">
                  Questions create conversations
                </div>
              </div>
            </div>

            <div className="relative flex h-1.5 w-full">
              <div className="w-1/4 bg-brand-cyan" />
              <div className="w-1/4 bg-brand-gold" />
              <div className="w-1/4 bg-brand-orange" />
              <div className="w-1/4 bg-brand-green" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
