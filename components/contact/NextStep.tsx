
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CompassOutlined,
  HeartFilled,
  HeartOutlined,
  TeamOutlined,
  YoutubeFilled,
  MessageOutlined,
} from "@ant-design/icons";

const nextSteps = [
  {
    number: "01",
    eyebrow: "GROW TOGETHER",
    icon: TeamOutlined,
    title: "Find your community",
    description:
      "Build genuine relationships, find encouragement, and grow in faith alongside people who want to walk the journey with you.",
    link: "/missional-communities",
    linkText: "Explore communities",
    accent: "bg-brand-cyan",
    iconStyle: "bg-brand-cyan/10 text-brand-cyan",
  },
  {
    number: "02",
    eyebrow: "WORSHIP WITH US",
    icon: YoutubeFilled,
    title: "Make room for worship",
    description:
      "Join us for worship, biblical teaching, and messages that bring encouragement and help you grow wherever you are.",
    link: "/worship-online",
    linkText: "Worship online",
    accent: "bg-brand-gold",
    iconStyle: "bg-brand-gold/20 text-brand-blue-dark",
  },
  {
    number: "03",
    eyebrow: "KEEP DISCOVERING",
    icon: HeartOutlined,
    title: "Explore our resources",
    description:
      "Find messages and resources to inspire reflection, strengthen your faith, and encourage your everyday walk with God.",
    link: "/resources",
    linkText: "Discover resources",
    accent: "bg-brand-green",
    iconStyle: "bg-brand-green/10 text-brand-green",
  },
];

export const NextStep = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="next-step"
      aria-labelledby="next-step-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#f7f9fc] py-12 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand-cyan/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-brand-gold/[0.08] blur-3xl"
      />

      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Image-led introduction */}
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-2xl bg-brand-blue-dark text-white shadow-xl shadow-brand-blue-dark/10 sm:rounded-3xl"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[url('/images/next-step.jpg')] bg-cover bg-[center_45%]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-dark/[0.97] via-brand-blue-dark/85 to-brand-blue-dark/30"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-blue-dark/55 via-transparent to-brand-blue-dark/10"
          />

          <div className="relative grid min-h-[390px] items-center gap-8 px-6 py-12 sm:min-h-[430px] sm:px-10 sm:py-14 md:px-12 lg:min-h-[460px] lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-xs">
                <CompassOutlined className="text-brand-gold" />
                Your next chapter
              </div>

              <h2
                id="next-step-heading"
                className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-[3.6rem]"
              >
                Your journey of faith
                <span className="mt-1 block text-brand-gold">
                  keeps moving forward.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                There is no single way to take your next step. Discover a
                community, spend time in worship, or find something that
                strengthens your faith. Start wherever you are.
              </p>

              <a
                href="#next-step-options"
                className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-lg bg-brand-gold px-5 py-3 text-sm font-bold text-brand-blue-dark transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
              >
                Find your next step
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <motion.div
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 0.94, x: 12 }
                }
                whileInView={
                  reduceMotion
                    ? undefined
                    : { opacity: 1, scale: 1, x: 0 }
                }
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative flex min-h-64 w-full max-w-sm items-end"
              >
                <div className="absolute right-0 top-0 h-52 w-52 rounded-full border border-white/20" />
                <div className="absolute right-6 top-6 h-40 w-40 rounded-full border border-brand-gold/50" />

                <div className="relative ml-auto max-w-[260px] rounded-2xl border border-white/20 bg-brand-blue-dark/50 p-6 shadow-2xl backdrop-blur-md">
                  <HeartFilled className="text-2xl text-brand-gold" />
                  <p className="mt-5 text-2xl font-bold leading-tight text-white">
                    Real people.
                    <span className="block text-brand-gold">
                      Real faith.
                    </span>
                    Together.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Introduction to the options */}
        <motion.div
          variants={reveal}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-14 flex flex-col gap-3 sm:mt-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan sm:text-xs">
              A place to begin
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-brand-blue-dark sm:text-3xl">
              Take the step that feels right.
            </h3>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600">
            Explore what connects with you today. You can always take another
            step tomorrow.
          </p>
        </motion.div>

        {/* Next-step cards */}
        <div
          id="next-step-options"
          className="mt-7 grid scroll-mt-28 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {nextSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.a
                key={step.number}
                href={step.link}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                variants={reveal}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_-24px_rgba(11,34,101,0.2)] outline-none transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/30 hover:shadow-[0_24px_55px_-30px_rgba(11,34,101,0.25)] focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 sm:p-7 lg:min-h-[355px] lg:p-8"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${step.accent} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100`}
                />

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.iconStyle} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="text-xl" />
                  </span>

                  <span className="pt-1 text-xs font-bold tracking-[0.16em] text-slate-300">
                    {step.number}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-bold tracking-[0.18em] text-brand-cyan">
                  {step.eyebrow}
                </p>

                <h4 className="mt-2 text-xl font-bold leading-tight tracking-tight text-brand-blue-dark sm:text-2xl">
                  {step.title}
                </h4>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                  <span className="text-xs font-bold text-brand-blue-dark transition-colors group-hover:text-brand-cyan sm:text-sm">
                    {step.linkText}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-brand-blue-dark transition-all duration-300 group-hover:border-brand-blue-dark group-hover:bg-brand-blue-dark group-hover:text-white">
                    <ArrowRightOutlined className="text-xs transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Closing invitation with the same photography */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative isolate mt-7 overflow-hidden rounded-2xl bg-brand-blue-dark text-white shadow-xl shadow-brand-blue-dark/10 sm:mt-9 sm:rounded-3xl"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[url('/images/next-step.jpg')] bg-cover bg-center"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-dark/[0.97] via-brand-blue-dark/90 to-brand-blue-dark/65"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-blue-dark/40 to-transparent"
          />

          <div className="relative flex flex-col gap-7 p-6 sm:p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-11">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-xs">
                <HeartFilled />
                We would love to hear from you
              </div>

              <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                Not sure where to begin?
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                You don't have to figure everything out today. Tell us a
                little about what you're looking for, and let's find a
                meaningful place for you to begin.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="/contact/#contact-form"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-blue-dark transition duration-200 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
              >
                <MessageOutlined />
                Let's talk
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                Get to know us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
