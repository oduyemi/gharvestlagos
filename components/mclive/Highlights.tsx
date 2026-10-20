"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOutlined,
  HeartOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  StarFilled,
} from "@ant-design/icons";

const highlights = [
  {
    number: "01",
    title: "The Living Word",
    description:
      "Practical, Bible-based teaching to strengthen your faith and help you navigate purposeful living, relationships, and everyday decisions.",
    icon: BookOutlined,
    accent: "bg-brand-cyan/10 text-brand-blue-dark",
    line: "bg-brand-cyan",
    label: "Rooted in truth",
    featured: true,
  },
  {
    number: "02",
    title: "Spirit-Led Worship",
    description:
      "Set aside the distractions of the week and join a heartfelt expression of worship that draws our attention back to God.",
    icon: HeartOutlined,
    accent: "bg-brand-gold/20 text-brand-blue-dark",
    line: "bg-brand-gold",
    label: "A heart of worship",
    featured: false,
  },
  {
    number: "03",
    title: "Communion & Intercession",
    description:
      "Come together in prayer, seek God's direction, and find fresh strength to carry your faith into the rest of the week.",
    icon: ThunderboltOutlined,
    accent: "bg-brand-green/10 text-brand-blue-dark",
    line: "bg-brand-green",
    label: "Stronger in prayer",
    featured: false,
  },
  {
    number: "04",
    title: "Community & Connection",
    description:
      "Take a step beyond watching online. Connect with people in a local Missional Community and build relationships that grow your faith.",
    icon: TeamOutlined,
    accent: "bg-brand-blue-support/15 text-brand-blue-dark",
    line: "bg-brand-blue-support",
    label: "Faith in fellowship",
    featured: true,
  },
];

export const MCLiveHighlights = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#F7F9FC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      {/* Soft editorial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-brand-cyan/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-gold/[0.10] blur-3xl"
      />

      <div className="gh-container relative mx-auto w-full max-w-[1440px]">
        {/* Intro */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/20 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-blue-dark shadow-sm sm:text-xs">
            <StarFilled className="text-brand-gold" />
            What makes MC Live special
            <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          </span>

          <h2 className="mt-6 text-[2.1rem] font-extrabold leading-[1.12] tracking-[-0.055em] text-brand-blue-dark sm:text-4xl lg:text-5xl">
            Come for the gathering.
            <span className="mt-1 block text-brand-cyan">
              Grow beyond it.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Experience the Word, encounter God in worship, grow through prayer,
            and find your place in a community that walks with you.
          </p>
        </motion.div>

        {/* Asymmetric highlight grid */}
        <div className="mt-11 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const isFeatured = item.featured;

            return (
              <motion.article
                key={item.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] border transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(18,53,91,0.09)] sm:rounded-[1.9rem] ${
                  isFeatured
                    ? "border-brand-cyan/20 bg-white"
                    : "border-gray-200/80 bg-white/80"
                }`}
              >
                {/* Decorative corner shape */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full transition-transform duration-500 group-hover:scale-125 ${
                    index === 0
                      ? "bg-brand-cyan/[0.07]"
                      : index === 1
                        ? "bg-brand-gold/[0.12]"
                        : index === 2
                          ? "bg-brand-green/[0.08]"
                          : "bg-brand-blue-support/[0.08]"
                  }`}
                />

                {/* Card content */}
                <div className="relative flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.accent} transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 sm:h-14 sm:w-14`}
                    >
                      <Icon className="text-xl sm:text-2xl" />
                    </div>

                    <span className="text-xs font-extrabold tracking-[0.16em] text-gray-300 transition-colors group-hover:text-brand-blue-dark/50">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-1 flex-col sm:mt-8">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="max-w-sm text-xl font-extrabold leading-snug tracking-[-0.035em] text-brand-blue-dark sm:text-2xl">
                        {item.title}
                      </h3>

                      {isFeatured && (
                        <span className="mt-1 hidden shrink-0 rounded-full bg-brand-cyan/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-brand-blue-dark md:inline-flex">
                          Essential
                        </span>
                      )}
                    </div>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-gray-600 sm:mt-4 sm:text-[15px] sm:leading-[1.85]">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
                      <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-blue-dark/65 sm:text-[11px]">
                        <span className={`h-2 w-2 rounded-full ${item.line}`} />
                        {item.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Color reveal */}
                <div
                  aria-hidden="true"
                  className={`h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${item.line}`}
                />
              </motion.article>
            );
          })}
        </div>

        {/* Closing invitation */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="relative mt-6 overflow-hidden rounded-[1.6rem] bg-brand-blue-dark sm:mt-8 sm:rounded-[1.9rem]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-48 w-48 rounded-full border-[26px] border-white/[0.045] sm:-right-6"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-1/3 h-28 w-28 rounded-full bg-brand-cyan/[0.10] blur-2xl"
          />

          <div className="relative flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-10">
            <div className="flex items-start gap-4">
              <div className="max-w-2xl">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-cyan sm:text-[11px]">
                  You belong here
                </span>

                <p className="mt-2 text-base font-semibold leading-7 text-white sm:text-lg">
                  Faith grows deeper when we grow together.
                </p>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                  Join us online, then discover the people and community
                  that help you live out your faith every day.
                </p>
              </div>
            </div>

            <a
              href="#find-your-mc"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-extrabold text-brand-blue-dark transition-all duration-300 hover:bg-brand-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark sm:text-sm"
            >
              Find your community
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
