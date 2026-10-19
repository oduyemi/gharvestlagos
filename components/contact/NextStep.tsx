
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CompassOutlined,
  HeartOutlined,
  TeamOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const nextSteps = [
  {
    number: "01",
    icon: TeamOutlined,
    title: "Find your community",
    description:
      "Build genuine relationships and discover opportunities to grow alongside others in faith.",
    link: "/missional-communities",
    linkText: "Explore communities",
    accent: "bg-brand-cyan",
    iconStyle: "bg-brand-cyan/10 text-brand-cyan",
  },
  {
    number: "02",
    icon: YoutubeFilled,
    title: "Worship with us",
    description:
      "Join us online for worship, biblical messages, and encouragement wherever you are.",
    link: "/worship-online",
    linkText: "Worship online",
    accent: "bg-brand-gold",
    iconStyle: "bg-brand-gold/20 text-brand-blue-dark",
  },
  {
    number: "03",
    icon: HeartOutlined,
    title: "Explore our resources",
    description:
      "Discover messages and resources to help you reflect, deepen your faith, and keep growing.",
    link: "/resources",
    linkText: "Explore resources",
    accent: "bg-brand-green",
    iconStyle: "bg-brand-green/10 text-brand-green",
  },
];

export const NextStep = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="next-step"
      aria-labelledby="next-step-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-brand-cyan/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-gold/[0.08] blur-3xl"
      />

      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan shadow-sm sm:text-xs">
            <CompassOutlined />
            Your next chapter
          </div>

          <h2
            id="next-step-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-blue-dark sm:text-4xl lg:text-5xl"
          >
            Faith is a journey.
            <span className="block text-brand-cyan">
              Let&apos;s take the next step together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Wherever you are in your walk with God, there is always room to
            discover, connect, and grow. Start with the step that feels
            right for you.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 lg:gap-6">
          {nextSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.a
                key={step.number}
                href={step.link}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex min-h-[285px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_-24px_rgba(11,34,101,0.2)] outline-none transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-brand-cyan/30 hover:shadow-[0_24px_55px_-30px_rgba(11,34,101,0.25)] focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 sm:p-7 lg:p-8"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${step.accent} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
                />

                <div className="flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.iconStyle} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="text-xl" />
                  </span>

                  <span className="pt-1 text-xs font-bold tracking-[0.15em] text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-brand-blue-dark sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-bold text-brand-blue-dark transition-colors group-hover:text-brand-cyan sm:text-sm">
                    {step.linkText}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-brand-blue-dark transition-all duration-300 group-hover:border-brand-blue-dark group-hover:bg-brand-blue-dark group-hover:text-white">
                    <ArrowRightOutlined className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-7 flex flex-col gap-4 rounded-2xl bg-brand-blue-dark px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="text-base font-bold sm:text-lg">
              Not sure where to begin?
            </p>
            <p className="mt-1 text-sm leading-6 text-white/65">
              That&apos;s okay. Tell us a little about yourself, and we can
              help you find a place to start.
            </p>
          </div>

          <a
            href="/contact/#contact-form"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-gold px-5 py-3 text-xs font-bold text-brand-blue-dark transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark sm:text-sm"
          >
            Let&apos;s talk
            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
