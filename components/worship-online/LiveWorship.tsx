
"use client";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, YoutubeFilled, HeartFilled, ClockCircleOutlined, LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
import Link from "next/link";
const YOUTUBE_LIVE = "https://www.youtube.com/@gharvestchurch/live";

const CHECK_INTERVAL = 60_000;

type LiveStream = {
  isLive: boolean;
  videoId: string | null;
  title: string | null;
};

export const LiveWorship = () => {
  const reduceMotion = useReducedMotion();

  const [stream, setStream] = useState<LiveStream>({
    isLive: false,
    videoId: null,
    title: null,
  });

  const [checking, setChecking] = useState(true);
  const [hasChecked, setHasChecked] = useState(false);
  const [checkFailed, setCheckFailed] = useState(false);

  const checkLiveStatus = useCallback(async () => {
    setChecking(true);

    try {
      const response = await fetch("/api/youtube/live", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to check livestream status.");
      }

      const data: LiveStream = await response.json();

      setStream(data);
      setCheckFailed(false);
    } catch (error) {
      console.error("Livestream status error:", error);
      setCheckFailed(true);
    } finally {
      setChecking(false);
      setHasChecked(true);
    }
  }, []);

  useEffect(() => {
    checkLiveStatus();

    const interval = setInterval(
      checkLiveStatus,
      CHECK_INTERVAL
    );

    return () => clearInterval(interval);
  }, [checkLiveStatus]);

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const isLive = stream.isLive && !!stream.videoId;

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

          {/* Dynamic Livestream Frame */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 20, scale: 0.985 }
            }
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

            <div className="relative overflow-hidden rounded-[1.4rem] bg-brand-blue-dark shadow-xl shadow-brand-blue-dark/15 sm:rounded-[1.75rem]">
              <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[1.18/1] lg:aspect-[5/4]">

                {/* =====================================
                    INITIAL LOADING STATE
                ====================================== */}
                {!hasChecked && checking ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand-blue-dark via-brand-blue to-[#071744] px-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 text-3xl text-brand-gold">
                      <LoadingOutlined />
                    </div>

                    <p className="mt-5 text-sm font-semibold text-white">
                      Connecting to Global Harvest Church...
                    </p>

                    <p className="mt-2 text-xs text-white/55">
                      Checking our livestream status
                    </p>
                  </div>
                ) : isLive ? (

                  /* =====================================
                      LIVE STREAM PLAYER
                  ====================================== */
                  <div className="absolute inset-0 bg-black">
                    <iframe
                      key={stream.videoId}
                      src={`https://www.youtube-nocookie.com/embed/${stream.videoId}?autoplay=1&mute=1&rel=0`}
                      title={stream.title || "Global Harvest Church Live"}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />

                    {/* Live indicator */}
                    <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-red-600 px-3 py-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white shadow-lg sm:text-xs">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
                          <span className="relative h-2 w-2 rounded-full bg-white" />
                        </span>
                        Live Now
                      </span>
                    </div>

                    {/* Status warning */}
                    {checkFailed && (
                      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-[10px] font-medium text-white/90 backdrop-blur-md">
                        <ClockCircleOutlined />
                        Status temporarily unavailable
                      </div>
                    )}
                  </div>
                ) : (

                  /* =====================================
                      OFFLINE / ERROR STATE
                  ====================================== */
                  <div className="absolute inset-0">

                    {/* Background image */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[url('/images/worship.jpg')] bg-cover bg-center"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#06102f]/95 via-[#071744]/55 to-[#071744]/30"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-[#071744]/20 to-transparent"
                    />

                    {/* YouTube label */}
                    <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#071744]/60 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md sm:text-xs">
                        <YoutubeFilled className="text-brand-gold" />
                        Worship online
                      </span>
                    </div>

                    {/* Waiting / error message */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-10 pt-14 text-center">

                      {checkFailed ? (
                        <>
                          <ClockCircleOutlined className="text-4xl text-brand-gold" />

                          <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                            Stay Connected
                          </h3>

                          <p className="mt-3 max-w-xs text-xs leading-6 text-white/75 sm:text-sm">
                            We&apos;re having trouble checking our livestream
                            status. Please visit our YouTube channel for the
                            latest updates.
                          </p>

                          <button
                            type="button"
                            onClick={checkLiveStatus}
                            disabled={checking}
                            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {checking ? (
                              <LoadingOutlined />
                            ) : (
                              <ReloadOutlined />
                            )}
                            {checking ? "Checking..." : "Check Again"}
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/15 text-2xl text-brand-gold backdrop-blur-md sm:h-20 sm:w-20 sm:text-3xl">
                            <ClockCircleOutlined />
                          </span>

                          <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
                            We&apos;ll be live soon
                          </p>

                          <h3 className="mt-3 max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                            Every moment in His presence matters.
                          </h3>

                          <p className="mt-4 max-w-xs text-xs leading-6 text-white/75 sm:text-sm">
                            We&apos;re not streaming right now, but there&apos;s
                            always another opportunity to worship together.
                            Stay connected and join us during our next live
                            service.
                          </p>

                          <Link
                            href={YOUTUBE_LIVE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 text-xs font-extrabold text-brand-blue-dark transition hover:-translate-y-0.5 hover:bg-white"
                          >
                            Visit Our YouTube Channel
                            <ArrowRightOutlined />
                          </Link>
                        </>
                      )}
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.19em] text-brand-gold sm:text-[10px]">
                        Global Harvest Church
                      </p>
                      <p className="mt-2 text-sm font-bold text-white/90 sm:text-base">
                        Maryland, Lagos
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

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
