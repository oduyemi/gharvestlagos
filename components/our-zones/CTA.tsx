"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, EnvironmentOutlined, HeartFilled, TeamOutlined } from "@ant-design/icons";


export const OurZonesCTA = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          {...reveal()}
          className="relative isolate overflow-hidden rounded-[2rem] bg-[#0B2265] text-white sm:rounded-[2.5rem]"
        >
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-24 -top-32 h-[26rem] w-[26rem] rounded-full bg-[#00A3E0]/20 blur-[90px]" />
            <div className="absolute -bottom-40 left-[30%] h-[24rem] w-[24rem] rounded-full bg-[#FFC72C]/10 blur-[100px]" />

            <div
              className="absolute inset-0 opacity-[0.055]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <span className="absolute -right-12 top-8 select-none text-[20rem] font-black leading-none text-white/[0.035]">
              +
            </span>
          </div>

          <div className="grid items-center gap-12 px-7 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:px-16 lg:py-20 xl:px-20">
            {/* Copy */}
            <div className="relative z-10 max-w-2xl">
              <motion.div
                {...reveal(0.1)}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFC72C] text-[#0B2265]">
                  <HeartFilled className="text-xs" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                  There is a place for you
                </span>
              </motion.div>

              <motion.h2
                {...reveal(0.2)}
                className="mt-8 max-w-xl text-[2.65rem] font-bold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[4.25rem]"
              >
                Faith grows
                <br />
                <span className="relative inline-block text-[#41B6E6]">
                  better together.
                  <svg
                    viewBox="0 0 360 14"
                    fill="none"
                    className="absolute -bottom-2 left-0 w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10C94 1 245 -1 356 7"
                      stroke="#FFC72C"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h2>

              <motion.p
                {...reveal(0.3)}
                className="mt-8 max-w-lg text-base leading-8 text-white/70 sm:text-lg"
              >
                Not sure which zone is right for you? Reach out to Global
                Harvest Church, Maryland. We’ll help you find a Missional
                Community where you can connect, grow and belong.
              </motion.p>

              <motion.div
                {...reveal(0.4)}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <a
                  href="/mc-live#find-your-community"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#FFC72C] px-7 py-4 font-bold text-[#0B2265] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  <TeamOutlined />
                  Find your people
                  <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Link
                  href="/missional-communities"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#41B6E6] hover:bg-white/10"
                >
                  Explore communities
                </Link>
              </motion.div>
            </div>

            <motion.div
              {...reveal(0.25)}
              className="relative mx-auto flex min-h-[280px] w-full max-w-[440px] items-center justify-center sm:min-h-[360px] lg:min-h-[420px]"
            >
              <div className="absolute h-[250px] w-[250px] rounded-full border border-white/10 sm:h-[340px] sm:w-[340px]" />
              <div className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-white/20 sm:h-[260px] sm:w-[260px]" />
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[7%] top-[9%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC72C] text-2xl text-[#0B2265] shadow-xl shadow-black/10 sm:right-[10%] sm:h-16 sm:w-16"
              >
                <HeartFilled />
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[12%] left-[5%] flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00A859] text-2xl text-white shadow-xl shadow-black/10 sm:left-[8%] sm:h-[4.5rem] sm:w-[4.5rem]"
              >
                <TeamOutlined />
              </motion.div>

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[#00A3E0] shadow-[0_25px_80px_rgba(0,163,224,0.25)] sm:h-64 sm:w-64">
                <div className="absolute inset-3 rounded-full border border-white/20" />
                <div className="flex flex-col items-center text-center">
                  <EnvironmentOutlined className="text-5xl text-white sm:text-6xl" />
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/75 sm:text-xs">
                    Your community
                  </span>
                  <span className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    Starts here.
                  </span>
                </div>
              </div>

              <div className="absolute bottom-[7%] right-[3%] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:bottom-[10%] sm:right-[2%]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
                  <span className="text-xs font-semibold text-white">
                    Global Harvest Church
                  </span>
                </div>
                <span className="mt-1 block pl-4 text-[10px] text-white/55">
                  Maryland, Lagos
                </span>
              </div>

              <span className="absolute left-[10%] top-[15%] h-3 w-3 rounded-full bg-[#41B6E6]" />
              <span className="absolute bottom-[25%] right-[13%] h-2.5 w-2.5 rounded-full bg-[#FFC72C]" />
            </motion.div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#00A859] via-[#FFC72C] to-[#00A3E0]" />
        </motion.div>
      </div>
    </section>
  );
};
