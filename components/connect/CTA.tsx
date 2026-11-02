"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin, Heart, Navigation } from "lucide-react";


const MAP_URL = "https://www.google.com/maps/search/?api=1&query=378+Ikorodu+Road%2C+Maryland%2C+Lagos%2C+Nigeria";



export const ConnectCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative isolate overflow-hidden rounded-[2rem] bg-brand-blue-dark sm:rounded-[2.5rem]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand-cyan/20 blur-[110px]" />
            <div className="absolute -bottom-48 -left-32 h-[30rem] w-[30rem] rounded-full bg-brand-blue/60 blur-[100px]" />

            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "25px 25px",
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-[1fr_0.78fr]">
            <div className="relative px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <h2 className="mt-8 max-w-2xl text-[2.8rem] font-black leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]">
                There’s a
                <br />
                place for
                <br />
                <span className="text-brand-cyan">you here.</span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
                Church is more than a place we attend. It’s a family where
                faith grows, friendships begin, and lives are transformed.
                We'd love to welcome you.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/about"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-brand-gold px-7 py-4 text-sm font-extrabold text-brand-blue-dark shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:text-base"
                >
                  Discover our church
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-dark/10 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </Link>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:bg-brand-cyan/10 sm:text-base"
                >
                  <Navigation
                    size={17}
                    className="text-brand-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  Find your way here
                </a>
              </div>
            </div>

            <div className="relative flex items-end px-5 pb-5 sm:px-8 sm:pb-8 lg:px-0 lg:pb-0 lg:pt-8">
              <div className="relative flex min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[1.6rem] bg-brand-gold p-7 text-brand-blue-dark sm:min-h-[340px] sm:p-9 lg:min-h-[440px] lg:rounded-l-[2rem] lg:rounded-r-none lg:p-10">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[35px] border-brand-blue-dark/[0.06]" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[35px] border-brand-blue-dark/[0.06]" />

                <div className="relative flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-brand-blue-dark/60">
                    Come as you are
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-dark text-brand-gold shadow-lg">
                    <Heart size={21} fill="currentColor" />
                  </div>
                </div>

                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-blue-dark/10 bg-white/40">
                    <MapPin size={27} strokeWidth={1.8} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-dark/55">
                    We'd love to see you
                  </p>

                  <h3 className="mt-3 max-w-sm text-3xl font-black leading-[1.08] tracking-[-0.045em] sm:text-4xl">
                    Your seat is waiting.
                  </h3>

                  <div className="mt-6 border-t border-brand-blue-dark/15 pt-5">
                    <p className="text-sm font-bold">Global Harvest Church</p>
                    <p className="mt-1 max-w-xs text-sm leading-6 text-brand-blue-dark/65">
                      378 Ikorodu Road,
                      <br />
                      Maryland, Lagos, Nigeria.
                    </p>
                  </div>

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue-dark"
                  >
                    Get directions
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <span className="absolute right-8 top-1/2 hidden -translate-y-1/2 text-[9rem] font-black leading-none text-brand-blue-dark/[0.045] lg:block">
                  GH
                </span>
              </div>
            </div>
          </div>

          <div className="flex h-1.5">
            <div className="w-1/4 bg-brand-cyan" />
            <div className="w-1/4 bg-brand-gold" />
            <div className="w-1/4 bg-brand-orange" />
            <div className="w-1/4 bg-brand-green" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
