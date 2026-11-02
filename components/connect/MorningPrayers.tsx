"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3, Sun, Video } from "lucide-react";


const ZOOM_URL = "https://us06web.zoom.us/j/82132563729?pwd=MEo1Y2h2a3NQZVhtRWxsYkVqTFp2QT09";




export const MorningPrayer = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="morning-prayer"
      aria-labelledby="morning-prayer-heading"
      className="relative overflow-hidden bg-[#F8F7F2] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
          <motion.div {...reveal()} className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#9A6634] sm:text-xs">
                A daily moment with God
              </span>
            </div>

            <h2
              id="morning-prayer-heading"
              className="text-[clamp(3.2rem,7vw,6.8rem)] font-black leading-[0.92] tracking-[-0.075em] text-[#0B2265]"
            >
              Before anything
              <br />
              <span className="text-[#E87722]">else, seek Him.</span>
            </h2>
          </motion.div>

          <motion.p
            {...reveal(0.12)}
            className="max-w-sm pb-1 text-sm leading-8 text-[#687184] sm:text-base"
          >
            Make space for prayer before the day begins. Let's gather, seek
            God's presence and build our lives on a stronger foundation of faith.
          </motion.p>
        </div>
        <motion.div
          {...reveal(0.16)}
          className="relative isolate min-h-[420px] overflow-hidden rounded-[1.75rem] bg-[#D9A45A] sm:min-h-[540px] sm:rounded-[2.25rem] lg:min-h-[650px]"
        >
          <img
            src="/images/morning_prayer.jpg"
            alt="praying woman"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/75 via-[#101B35]/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101B35]/20 via-transparent to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8 lg:left-10 lg:right-10 lg:top-10">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/15 px-4 py-2.5 text-white backdrop-blur-md">
              <Sun size={15} className="text-[#FFC72C]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.17em] sm:text-[10px]">
                Monday – Friday
              </span>
            </div>

            <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-white/75 sm:block">
              Global Harvest Church
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-14">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#FFC72C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFE5A0]">
                The first light
              </span>
            </div>

            <p className="mt-5 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Start your day
              <br />
              in His presence.
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/80 sm:text-base">
              A little time with God can change the way you see the whole day.
            </p>
          </div>

          <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 sm:right-8 sm:block lg:right-12">
            <div className="flex flex-col items-center rounded-full border border-white/30 bg-white/15 px-5 py-7 text-white shadow-xl backdrop-blur-lg">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">
                Every morning
              </span>
              <span className="mt-2 text-3xl font-black tracking-[-0.06em] lg:text-4xl">
                06:00
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFE5A0]">
                AM
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.2)}
          className="mt-8 grid gap-8 border-b border-[#DCDDD8] pb-9 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12"
        >
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8">
            <div className="border-l-[3px] border-[#FFC72C] pl-4">
              <div className="flex items-center gap-2 text-[#9A6634]">
                <Clock3 size={15} />
                <span className="text-[9px] font-bold uppercase tracking-[0.17em]">
                  Time
                </span>
              </div>
              <p className="mt-3 text-xl font-black tracking-tight text-[#0B2265] sm:text-2xl">
                6:00 – 6:30
              </p>
              <p className="mt-1 text-xs text-[#7C8491]">Every morning</p>
            </div>

            <div className="border-l-[3px] border-[#00A3E0] pl-4">
              <div className="flex items-center gap-2 text-[#1687B0]">
                <Video size={15} />
                <span className="text-[9px] font-bold uppercase tracking-[0.17em]">
                  Platform
                </span>
              </div>
              <p className="mt-3 text-xl font-black tracking-tight text-[#0B2265] sm:text-2xl">
                Zoom
              </p>
              <p className="mt-1 text-xs text-[#7C8491]">Join from anywhere</p>
            </div>

            <div className="col-span-2 border-l-[3px] border-[#00A859] pl-4 sm:col-span-1">
              <div className="flex items-center gap-2 text-[#16895B]">
                <Sun size={15} />
                <span className="text-[9px] font-bold uppercase tracking-[0.17em]">
                  Frequency
                </span>
              </div>
              <p className="mt-3 text-xl font-black tracking-tight text-[#0B2265] sm:text-2xl">
                Weekdays
              </p>
              <p className="mt-1 text-xs text-[#7C8491]">Monday to Friday</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href={ZOOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Global Harvest Church morning prayer on Zoom"
              className="group inline-flex min-h-[58px] w-full items-center justify-center gap-5 rounded-full bg-[#0B2265] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#0B2265]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#00A3E0] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A3E0]/25 sm:w-auto sm:px-8"
            >
              Join morning prayer
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <span className="text-xs text-[#8A909B]">
              30 minutes to begin your day with purpose.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
