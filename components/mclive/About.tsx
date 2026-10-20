
"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartFilled, HeartOutlined, TeamOutlined, StarFilled } from "@ant-design/icons";

const features = [
  {
    number: "01",
    icon: HeartOutlined,
    title: "Discover your God-given purpose",
    description:
      "Grow in faith, apply biblical truth, and make a meaningful difference in your everyday life.",
    accent: "bg-brand-cyan/10 text-brand-blue-dark",
    marker: "bg-brand-cyan",
  },
  {
    number: "02",
    icon: TeamOutlined,
    title: "Find your people",
    description:
      "Move beyond attending a service to building genuine relationships in a Missional Community near you.",
    accent: "bg-brand-gold/20 text-brand-blue-dark",
    marker: "bg-brand-gold",
  },
];

export const MCLiveAbout = () => {
  const shouldReduceMotion = useReducedMotion();
  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-12 lg:py-24 xl:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-cyan/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[-5rem] -z-10 h-72 w-72 rounded-full bg-brand-gold/[0.09] blur-3xl"
      />

      <div className="gh-container mx-auto w-full max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.09,
                },
              },
            }}
            className="relative"
          >
            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/15 bg-brand-cyan/[0.07] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-blue-dark sm:text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-brand-cyan/40" />
                  <span className="relative h-2 w-2 rounded-full bg-brand-cyan" />
                </span>
                More than a midweek service
              </span>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-7 flex items-center gap-3 text-xs font-semibold text-gray-500 sm:mt-8 sm:text-sm"
            >
              <span className="h-px w-8 bg-brand-gold" />
              Faith is better when shared
            </motion.div>

            <motion.h2
              variants={reveal}
              className="mt-4 max-w-xl text-[clamp(2.3rem,4.2vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-brand-blue-dark"
            >
              Church is not just a place.
              <span className="relative mt-2 block pb-2 text-brand-cyan">
                It is a people.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 10"
                  fill="none"
                  className="absolute bottom-0 left-0 h-2 w-40 text-brand-gold sm:w-48"
                >
                  <path
                    d="M3 6C54 1 144 2 217 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:text-base sm:leading-8"
            >
              Faith grows deeper when we share the journey. MC Live brings us
              together around God’s Word, prayer, worship, and the relationships
              that help us live out our purpose.
            </motion.p>

            <motion.div variants={reveal} className="mt-7">
              <Link
                href="/missional-communities"
                className="group inline-flex max-w-full items-center gap-3 rounded-full border border-brand-blue-dark/10 bg-white py-2 pl-4 pr-2 text-sm font-bold text-brand-blue-dark shadow-sm transition duration-300 hover:border-brand-cyan/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 sm:pl-5"
              >
                <span>Explore Missional Communities</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-dark text-white transition duration-300 group-hover:translate-x-0.5 group-hover:bg-brand-cyan group-hover:text-brand-blue-dark">
                  <ArrowRightOutlined className="text-xs" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-cyan/15 text-xs text-brand-blue-dark">
                  <HeartFilled />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-gold/30 text-xs text-brand-blue-dark">
                  <TeamOutlined />
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-blue-dark text-[10px] text-white">
                  <StarFilled />
                </span>
              </div>
              <p className="text-xs font-medium text-gray-500">
                Growing in faith, together.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 20,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-2xl lg:ml-auto"
          >
            <div
              aria-hidden="true"
              className="absolute -right-2 -top-2 h-20 w-20 rounded-tr-[2rem] border-r-2 border-t-2 border-brand-gold/70 sm:-right-3 sm:-top-3 sm:h-24 sm:w-24"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-2 h-20 w-20 rounded-bl-[2rem] border-b-2 border-l-2 border-brand-cyan/60 sm:-bottom-3 sm:-left-3"
            />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-gray-200/80 bg-[#fbfcfe] p-5 shadow-[0_24px_70px_-42px_rgba(18,53,91,0.28)] sm:rounded-[2rem] sm:p-7 lg:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full border-[24px] border-brand-cyan/[0.06]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-12 top-10 h-2 w-2 rounded-full bg-brand-gold/70"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-cyan sm:text-[11px]">
                    What you’ll find here
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.045em] text-brand-blue-dark sm:text-3xl">
                    Room to grow.
                    <span className="block text-gray-400">
                      People to grow with.
                    </span>
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 rotate-3 items-center justify-center rounded-2xl bg-brand-gold/25 text-lg text-brand-blue-dark transition-transform duration-300 hover:rotate-0 sm:h-12 sm:w-12">
                  <HeartFilled />
                </div>
              </div>

              <div className="relative mt-7">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.number}
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 12,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        delay: shouldReduceMotion ? 0 : index * 0.12,
                      }}
                      className="group flex gap-3.5 border-t border-gray-200/80 py-5 first:border-t-0 first:pt-0 last:pb-0 sm:gap-5 sm:py-6"
                    >
                      <div
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${feature.accent} transition duration-300 group-hover:-rotate-3 group-hover:scale-105 sm:h-14 sm:w-14`}
                      >
                        <Icon className="text-lg sm:text-xl" />
                        <span
                          className={`absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#fbfcfe] ${feature.marker}`}
                        />
                      </div>

                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <span className="text-[10px] font-extrabold tracking-wider text-gray-400">
                            {feature.number}
                          </span>
                          <h4 className="text-base font-extrabold tracking-tight text-brand-blue-dark sm:text-lg">
                            {feature.title}
                          </h4>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-gray-600 sm:leading-7">
                          {feature.description}
                        </p>
                      </div>

                      <ArrowRightOutlined className="mt-1 shrink-0 text-xs text-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:text-brand-cyan" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative mt-7 overflow-hidden rounded-2xl bg-brand-blue-dark p-4 text-white sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full border-[18px] border-white/[0.05]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-24 h-20 w-20 rounded-full bg-brand-cyan/[0.12] blur-2xl"
                />

                <div className="relative flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-gold">
                    <HeartFilled />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-brand-cyan">
                      Your next step
                    </p>
                    <p className="mt-2 max-w-sm text-base font-bold leading-6 sm:text-lg sm:leading-7">
                      Join online today. Discover a community you can grow
                      with.
                    </p>
                  </div>
                </div>

                <Link
                  href="#find-your-mc"
                  className="group relative mt-5 inline-flex min-h-10 items-center gap-2.5 rounded-full bg-brand-gold px-4 py-2.5 text-xs font-extrabold text-brand-blue-dark transition duration-300 hover:gap-3.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark sm:text-sm"
                >
                  Help me find my MC
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
