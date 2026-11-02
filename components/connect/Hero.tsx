"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  HeartFilled,
  MessageOutlined,
  PlayCircleFilled,
  WifiOutlined,
} from "@ant-design/icons";

export const ConnectHero = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#06143D] text-white sm:min-h-[780px] lg:min-h-[850px]">
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/hero/connect.jpg"
          alt="Global Harvest Church community connecting together"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[#06143D]/55" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#06143D]/95 via-[#0B2265]/75 to-[#06143D]/20" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#06143D] via-transparent to-[#06143D]/40" />
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#00A3E0]/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-48 left-[15%] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#FFC72C]/10 blur-[130px]" />

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]" />

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1440px] flex-col justify-center px-5 pb-24 pt-32 sm:min-h-[780px] sm:px-8 sm:pb-28 sm:pt-36 lg:min-h-[850px] lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <div className="relative z-10 max-w-3xl">
            <motion.h1
              {...reveal(0.2)}
              className="mt-8 max-w-3xl text-[3.25rem] font-bold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              One church.
              <br />
              <span className="relative inline-block text-[#FFC72C]">
                Many ways
                <svg
                  viewBox="0 0 300 15"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-full"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10C85 1 211 -1 297 7"
                    stroke="#00A3E0"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              to connect<span className="text-[#41B6E6]">.</span>
            </motion.h1>

            <motion.p
              {...reveal(0.3)}
              className="mt-9 max-w-xl text-base leading-8 text-white/75 sm:text-lg sm:leading-9"
            >
              Wherever you are, there’s a place for you in our community.
              Watch, follow, ask questions, and stay connected with everything
              happening at Global Harvest Church.
            </motion.p>

            <motion.div
              {...reveal(0.4)}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="#social-channels"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#FFC72C] px-7 py-4 text-sm font-bold text-[#0B2265] shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-1 hover:bg-white sm:text-base"
              >
                Explore our channels
                <ArrowDownOutlined className="transition-transform duration-300 group-hover:translate-y-1" />
              </Link>

              <Link
                href="#ask-us"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.08] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#41B6E6] hover:bg-white/15 sm:text-base"
              >
                Ask a question
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              {...reveal(0.5)}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/65"
            >
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
                Watch
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00A3E0]" />
                Follow
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00A859]" />
                Ask
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Be part of the journey.</span>
            </motion.div>
          </div>

          <motion.div
            {...reveal(0.35)}
            className="relative mx-auto hidden min-h-[460px] w-full max-w-[460px] items-center justify-center lg:flex"
          >
            <div className="absolute h-[390px] w-[390px] rounded-full border border-white/15" />
            <div className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-white/20" />
            <div className="absolute h-[230px] w-[230px] rounded-full border border-white/10" />

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [-3, 0, -3] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-3 top-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0B2265]/75 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFC72C] text-xl text-[#0B2265]">
                <PlayCircleFilled />
              </span>
              <div>
                <span className="block text-xs text-white/55">Stay inspired</span>
                <span className="mt-1 block text-sm font-bold text-white">
                  Watch together
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 9, 0], rotate: [2, -2, 2] }
              }
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 left-0 flex items-center gap-3 rounded-2xl border border-white/15 bg-[#0B2265]/80 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00A859] text-xl text-white">
                <MessageOutlined />
              </span>
              <div>
                <span className="block text-xs text-white/55">We're listening</span>
                <span className="mt-1 block text-sm font-bold text-white">
                  Let's talk
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -8, 0], rotate: [0, 5, 0] }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-2 top-[27%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A3E0] text-2xl text-white shadow-xl shadow-black/20"
            >
              <WifiOutlined />
            </motion.div>

            <div className="absolute right-5 top-[56%] flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC72C] text-xl text-[#0B2265] shadow-xl">
              <HeartFilled />
            </div>

            {/* Central visual */}
            <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full bg-gradient-to-br from-[#41B6E6] to-[#00A3E0] shadow-[0_25px_100px_rgba(0,163,224,0.3)]">
              <div className="absolute inset-3 rounded-full border border-white/25" />
              <div className="absolute inset-7 rounded-full border border-dashed border-white/25" />

              <div className="relative flex flex-col items-center text-center">
                <GlobalOutlined className="text-6xl text-white" />
                <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75">
                  Global Harvest
                </span>
                <span className="mt-1 text-2xl font-bold tracking-tight text-white">
                  Connected.
                </span>
              </div>
            </div>

            <span className="absolute left-[23%] top-[12%] h-3 w-3 rounded-full bg-[#FFC72C]" />
            <span className="absolute bottom-[18%] right-[22%] h-2.5 w-2.5 rounded-full bg-[#00A859]" />
            <span className="absolute right-[15%] top-[30%] h-2 w-2 rounded-full bg-[#41B6E6]" />

          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="absolute bottom-8 right-8 hidden flex-col items-center gap-3 text-white/50 lg:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] [writing-mode:vertical-rl]">
            Discover
          </span>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-md"
          >
            <ArrowDownOutlined className="text-xs" />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#00A859] via-[#FFC72C] to-[#00A3E0]" />
      </div>
    </section>
  );
};
