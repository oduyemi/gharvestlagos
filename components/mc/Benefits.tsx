
"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Heart,
  MoveUpRight,
  Sparkles,
  Sprout,
  UsersRound,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    label: "FIND YOUR PEOPLE",
    title: "A place\nto belong.",
    description:
      "Find people who welcome you as you are, share life with you, and remind you that you never have to walk alone.",
    icon: Heart,
    accent: "#00A3E0",
    background: "bg-[#E4F6FC]",
    numberColor: "text-[#008BBF]",
    rotation: "lg:-rotate-2",
    size: "lg:col-span-5",
    decoration: "heart",
  },
  {
    number: "02",
    label: "KEEP BECOMING",
    title: "Room\nto grow.",
    description:
      "Explore your faith, discover your gifts, and take meaningful steps towards becoming all God has called you to be.",
    icon: Sprout,
    accent: "#C58B00",
    background: "bg-[#FFF2CC]",
    numberColor: "text-[#986900]",
    rotation: "lg:rotate-2",
    size: "lg:col-span-7",
    decoration: "growth",
  },
  {
    number: "03",
    label: "LIFE, SHARED",
    title: "You don't\nhave to do\nlife alone.",
    description:
      "Celebrate the good days together and find encouragement, prayer, and understanding when life gets complicated.",
    icon: UsersRound,
    accent: "#009B56",
    background: "bg-[#E0F5E9]",
    numberColor: "text-[#008448]",
    rotation: "lg:rotate-1",
    size: "lg:col-span-7",
    decoration: "community",
  },
  {
    number: "04",
    label: "MAKE IT MATTER",
    title: "Purpose\nbeyond you.",
    description:
      "Put faith into action, use your gifts to serve others, and become part of something that makes a lasting difference.",
    icon: Sparkles,
    accent: "#4774D9",
    background: "bg-[#E8EEFF]",
    numberColor: "text-[#315CC1]",
    rotation: "lg:-rotate-2",
    size: "lg:col-span-5",
    decoration: "purpose",
  },
];

export default function MCBenefits() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="mc-benefits"
      aria-labelledby="mc-benefits-heading"
      className="relative isolate overflow-hidden bg-[#071744] py-24 text-white sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#00A3E0]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-24 h-96 w-96 rounded-full bg-[#00A859]/10 blur-[110px]"
      />

      <div className="gh-container relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-8"
          >
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00A859] opacity-50 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00A859]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 sm:text-xs">
                Life is better together
              </span>
            </div>

            <h2
              id="mc-benefits-heading"
              className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
            >
              Faith was never
              <br />
              meant to be{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FFC72C]">
                  a solo
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 250 18"
                  fill="none"
                  className="absolute -bottom-2 left-0 z-0 w-full sm:-bottom-1"
                >
                  <path
                    d="M4 12C55 3 174 1 244 8"
                    stroke="#FFC72C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              journey.
            </h2>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col items-start gap-7 lg:col-span-4 lg:pb-2"
          >
            <p className="max-w-md text-base leading-8 text-blue-100/70 sm:text-lg">
              There is something special about growing with people who know
              your name, share your faith, and show up for your life. That is
              what missional community is all about.
            </p>

            <Link
              href="#find-your-community"
              className="group inline-flex items-center gap-3 border-b border-[#FFC72C]/60 pb-2 text-sm font-semibold text-[#FFC72C] transition-colors hover:border-[#FFC72C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071744]"
            >
              Discover your place here
              <MoveUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        <div className="my-14 flex items-center gap-4 sm:my-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
            What we find together
          </span>
          <div className="h-px flex-1 bg-white/15" />
          <ArrowDownRight
            aria-hidden="true"
            className="h-5 w-5 text-[#FFC72C]"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12 lg:gap-7">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-1 sm:min-h-[420px] sm:p-9 lg:p-10 ${benefit.background} ${benefit.size} ${benefit.rotation}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-2 -top-9 select-none text-[9rem] font-black leading-none tracking-[-0.1em] opacity-[0.075] sm:text-[11rem] ${benefit.numberColor}`}
                >
                  {benefit.number}
                </span>

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span
                    className={`text-xs font-extrabold tracking-[0.2em] ${benefit.numberColor}`}
                  >
                    {benefit.number} / 04
                  </span>

                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                    style={{ backgroundColor: benefit.accent }}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-14">
                  <p
                    className={`mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] ${benefit.numberColor}`}
                  >
                    {benefit.label}
                  </p>

                  <h3 className="whitespace-pre-line text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#071744] sm:text-5xl lg:text-[3.5rem]">
                    {benefit.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#071744]/70 sm:text-base sm:leading-7">
                    {benefit.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-8 h-32 w-32 rounded-full border-[18px] opacity-30 transition-transform duration-700 group-hover:scale-125"
                  style={{ borderColor: benefit.accent }}
                />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 sm:mt-24 sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 h-56 w-56 rounded-full border-[35px] border-[#00A3E0]/10 sm:-right-2 sm:h-72 sm:w-72"
          />

          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="flex items-start gap-5 sm:gap-6 lg:col-span-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFC72C] text-[#071744] sm:h-16 sm:w-16">
                <Heart
                  aria-hidden="true"
                  className="h-7 w-7 fill-current sm:h-8 sm:w-8"
                />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.23em] text-[#FFC72C] sm:text-xs">
                  A little reminder
                </p>

                <blockquote className="max-w-2xl text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl lg:text-3xl">
                  “Let us consider how we may spur one another on toward love
                  and good deeds.”
                </blockquote>

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/50">
                  Hebrews 10:24
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="#find-your-community"
                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#FFC72C] px-6 py-4 text-sm font-bold text-[#071744] transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#071744] sm:w-auto"
              >
                Find your community
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
