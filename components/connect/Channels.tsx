"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FacebookFilled, InstagramFilled, YoutubeFilled } from "@ant-design/icons";


const channels = [
  {
    name: "YouTube",
    handle: "@gharvestchurch",
    href: "https://www.youtube.com/@gharvestchurch",
    image: "/images/rev_mama.jpeg",
    description: "Messages that move you. Worship that stays with you.",
    icon: YoutubeFilled,
    number: "01",
  },
  {
    name: "Instagram",
    handle: "@gharvestchurch",
    href: "https://www.instagram.com/gharvestchurch",
    image: "/images/instagram.jpg",
    description: "The faces, stories and beautiful moments of our family.",
    icon: InstagramFilled,
    number: "02",
  },
  {
    name: "Facebook",
    handle: "Global Harvest Church",
    href: "https://www.facebook.com/gharvestchurch",
    image: "/images/facebook.jpeg",
    description: "Church updates, conversations and everything happening.",
    icon: FacebookFilled,
    number: "03",
  },
];

const reveal = (reduced: boolean, delay = 0) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: {
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      };


export const ConnectSocialChannels = () => {
  const reduceMotion = useReducedMotion();

  const youtube = channels[0];
  const instagram = channels[1];
  const facebook = channels[2];

  return (
    <section
      id="social-channels"
      aria-labelledby="social-channels-heading"
      className="relative isolate overflow-hidden bg-[#F8F7F2] py-24 sm:py-32 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-0 -z-10 h-[550px] w-[550px] rounded-full border border-[#0B2265]/[0.055]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 -z-10 h-[400px] w-[400px] rounded-full border border-[#0B2265]/[0.055]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[40%] -z-10 h-80 w-80 rounded-full bg-[#FFC72C]/[0.09] blur-[100px]"
      />

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">

        <motion.div
          {...reveal(!!reduceMotion)}
          className="relative mb-16 lg:mb-20"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div className="relative">
              <h2
                id="social-channels-heading"
                className="relative z-10 text-[clamp(3.7rem,9.5vw,9rem)] font-black leading-[0.79] tracking-[-0.095em] text-[#0B2265]"
              >
                GOOD NEWS.
                <br />
                <span className="relative inline-block text-[#00A3E0]">
                  NO BORDERS.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 600 25"
                    className="absolute -bottom-4 left-0 w-full"
                    fill="none"
                  >
                    <path
                      d="M5 16C160 2 400 1 593 14"
                      stroke="#FFC72C"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <span
                aria-hidden="true"
                className="absolute -right-2 top-0 hidden rotate-12 text-7xl font-black text-[#E87722] xl:block"
              >
                ✳
              </span>
            </div>

            <div className="relative max-w-sm lg:pb-2">
              <span className="mb-4 block text-4xl font-black leading-none text-[#E87722]">
                ↘
              </span>

              <p className="text-base leading-8 text-[#647084] sm:text-lg">
                The message travels. The community grows. And there's always
                a place for you in the conversation.
              </p>

              <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2265]/50">
                ONE FAMILY. EVERYWHERE.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[4.5rem] left-0 z-20 hidden select-none text-[clamp(5rem,12vw,12rem)] font-black leading-none tracking-[-0.1em] text-gray/10 mix-blend-overlay lg:block"
          >
            TOGETHER
          </div>

          <div className="grid gap-0 lg:min-h-[680px] lg:grid-cols-[1.12fr_0.83fr_1fr]">
            <motion.a
              {...reveal(!!reduceMotion, 0.08)}
              href={youtube.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Global Harvest Church on YouTube"
              className="group relative isolate flex min-h-[520px] flex-col justify-between overflow-hidden bg-[#091B4F] text-white sm:min-h-[650px] lg:min-h-[680px]"
            >
              <img
                src={youtube.image}
                alt="Global Harvest Church worship and messages"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061333] via-[#071744]/45 to-[#071744]/20" />

              <div className="flex items-center justify-between p-6 sm:p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                  CHANNEL / 01
                </span>

                <YoutubeFilled className="text-3xl text-[#FF4545] sm:text-4xl" />
              </div>

              <div className="relative px-6 pb-9 sm:px-9 sm:pb-12">
                <div className="mb-7 flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#FF3838] text-3xl text-white shadow-xl transition-transform duration-500 group-hover:scale-110 sm:h-[76px] sm:w-[76px]">
                  <YoutubeFilled />
                </div>

                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.22em] text-[#FFC72C]">
                  WATCH. WORSHIP. GROW.
                </span>

                <h3 className="max-w-md text-5xl font-black leading-[0.9] tracking-[-0.075em] sm:text-6xl lg:text-[4.5rem]">
                  Take the
                  <br />
                  message
                  <br />
                  <span className="text-[#FFC72C]">everywhere.</span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
                  {youtube.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/25 pt-5">
                  <span className="text-xs font-bold text-white/80">
                    {youtube.handle}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-xl transition-all duration-300 group-hover:border-[#FFC72C] group-hover:bg-[#FFC72C] group-hover:text-[#0B2265]">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              {...reveal(!!reduceMotion, 0.16)}
              href={instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Global Harvest Church on Instagram"
              className="group relative isolate flex min-h-[560px] flex-col overflow-hidden bg-[#F1DCE5] text-[#30213D] sm:min-h-[650px] lg:min-h-[680px]"
            >
              <div className="flex items-center justify-between px-6 pt-7 sm:px-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#81576D]">
                  CHANNEL / 02
                </span>
                <InstagramFilled className="text-3xl text-[#C13584]" />
              </div>

              <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5">
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-[14%] rotate-[-15deg] text-8xl font-black tracking-[-0.1em] text-[#C13584]/10"
                >
                  LOVE
                </span>

                <span
                  aria-hidden="true"
                  className="absolute bottom-[12%] right-0 rotate-12 text-7xl text-[#E87722]"
                >
                  ✳
                </span>

                <div className="relative z-10 w-[85%] max-w-[340px] rotate-[-5deg] bg-white p-3 pb-14 shadow-[0_30px_70px_rgba(69,32,57,0.2)] transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-[1.03]">
                  <div className="relative overflow-hidden">
                    <img
                      src={instagram.image}
                      alt="Global Harvest Church community moments"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />

                    <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#C13584] shadow-md">
                      ♥
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-tight text-[#30213D]">
                      @GHARVESTCHURCH
                    </span>
                    <span className="text-lg text-[#C13584]">✳</span>
                  </div>
                </div>

                <div className="absolute left-1 top-[48%] z-20 -rotate-12 bg-[#FFC72C] px-4 py-3 text-[9px] font-black uppercase tracking-widest text-[#0B2265] shadow-lg">
                  LIFE IS BETTER TOGETHER
                </div>
              </div>

              <div className="relative z-10 px-6 pb-8 sm:px-8 sm:pb-10">
                <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-[#A14E76]">
                  STORIES. PEOPLE. MOMENTS.
                </span>

                <h3 className="text-5xl font-black leading-[0.9] tracking-[-0.075em] sm:text-6xl">
                  A little
                  <br />
                  more <span className="text-[#C13584]">us.</span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#705568]">
                  {instagram.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-[#B74F83]/20 pt-5">
                  <span className="text-xs font-bold">
                    {instagram.handle}
                  </span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>

            <motion.a
              {...reveal(!!reduceMotion, 0.24)}
              href={facebook.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Global Harvest Church on Facebook"
              className="group relative isolate flex min-h-[520px] flex-col justify-between overflow-hidden bg-[#00A3E0] text-white sm:min-h-[650px] lg:min-h-[680px]"
            >
              <img
                src={facebook.image}
                alt="Global Harvest Church community and church updates"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#071744]/75 via-[#006DAB]/35 to-[#071744]/95" />

              <div className="flex items-center justify-between p-6 sm:p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                  CHANNEL / 03
                </span>

                <FacebookFilled className="text-3xl sm:text-4xl" />
              </div>

              <div className="relative px-6 pb-9 sm:px-9 sm:pb-12">
                <div className="mb-8 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC72C]">
                    THE COMMUNITY BOARD
                  </span>
                </div>

                <h3 className="text-5xl font-black leading-[0.9] tracking-[-0.075em] sm:text-6xl lg:text-[4.5rem]">
                  Always
                  <br />
                  in the
                  <br />
                  <span className="text-[#FFC72C]">conversation.</span>
                </h3>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
                  {facebook.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/30 pt-5">
                  <span className="max-w-[75%] text-xs font-bold text-white/85">
                    {facebook.handle}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 text-xl transition-all duration-300 group-hover:border-[#FFC72C] group-hover:bg-[#FFC72C] group-hover:text-[#0B2265]">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};