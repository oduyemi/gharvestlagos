"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  BookOutlined,
  FlagOutlined,
  HomeOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  CompassOutlined,
} from "@ant-design/icons";


const milestones = [
  {
    year: "1986",
    label: "The vision",
    title: "A vision beyond borders.",
    description:
      "According to the published historical account of the Island branch, Rev. Victor Adeyemi received a vision of a worldwide soul-winning and church-planting ministry during a period of fasting and prayer.",
    icon: BookOutlined,
    accent: "#41B6E6",
    number: "01",
    note: "It began with a vision.",
  },
  {
    year: "1995",
    label: "The beginning",
    title: "A ministry takes root.",
    description:
      "Rev. Victor Adeyemi and Pastor Jumoke Adeyemi founded Global Harvest Church in Ibadan, Nigeria. The early congregation met at the Banquet Hall of Premier Hotel before the ministry grew.",
    icon: FlagOutlined,
    accent: "#FFC72C",
    number: "02",
    note: "A vision becomes a community.",
  },
  {
    year: "1998",
    label: "A permanent home",
    title: "Building for the future.",
    description:
      "The ministry's published historical account records the acquisition of a permanent site in Ibadan, marking an important milestone in its development and establishing a foundation for the journey ahead.",
    icon: HomeOutlined,
    accent: "#48D6A0",
    number: "03",
    note: "A foundation for what was to come.",
  },
  {
    year: "Today",
    label: "The continuing vision",
    title: "The story is still unfolding.",
    description:
      "Global Harvest Church continues to pursue its vision of interconnected branches reaching across continents and shaping the culture of nations and generations.",
    icon: GlobalOutlined,
    accent: "#B5A4FF",
    number: "04",
    note: "The mission continues through generations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export const AboutHistory = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
        variants: fadeUp,
      };

  return (
    <section
      id="our-story"
      aria-labelledby="history-heading"
      className="relative isolate overflow-hidden bg-[#071744] py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border border-[#41B6E6]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[460px] w-[460px] rounded-full bg-[#00A3E0]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[48%] top-[35%] h-72 w-72 rounded-full bg-[#0B2265]/70 blur-[100px]"
      />

      <div className="gh-container relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          {...reveal}
          className="grid gap-9 border-b border-white/15 pb-12 sm:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2.5">
              <CompassOutlined className="text-[#FFC72C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8DDCFA] sm:text-xs">
                Our story, over time
              </span>
            </div>

            <h2
              id="history-heading"
              className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.75rem]"
            >
              Every journey
              <br />
              <span className="text-[#FFC72C]">has a beginning.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end lg:pb-1">
            <p className="text-base leading-8 text-blue-100/75 sm:text-lg sm:leading-9">
              What began with a vision grew into a ministry with a continuing
              purpose: reaching people, planting churches, and sharing the
              Gospel across generations.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-white/55">
              <span className="h-px w-8 bg-[#FFC72C]" />
              A journey of faith, growth, and purpose
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal}
          className="flex flex-wrap items-end justify-between gap-4 py-9 sm:py-12"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8DDCFA] sm:text-xs">
              Milestones along the way
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              From the first vision to today.
            </h3>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#48D6A0]" />
            A continuing story
          </span>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-14 left-[19px] top-5 w-px bg-gradient-to-b from-[#41B6E6] via-[#FFC72C] via-55% to-[#B5A4FF] sm:left-[27px] lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-8 sm:space-y-10 lg:space-y-14">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 1;

              return (
                <motion.article
                  key={item.number}
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        initial: {
                          opacity: 0,
                          y: 24,
                        },
                        whileInView: {
                          opacity: 1,
                          y: 0,
                        },
                        viewport: {
                          once: true,
                          amount: 0.15,
                        },
                        transition: {
                          duration: 0.6,
                          delay: index * 0.08,
                          ease: "easeOut" as const,
                        },
                      })}
                  className="relative pl-[53px] sm:pl-[76px] lg:grid lg:grid-cols-2 lg:gap-16 lg:pl-0"
                >
                  <div
                    className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-[5px] border-[#071744] shadow-[0_0_0_1px_rgba(255,255,255,0.15)] sm:top-7 sm:h-14 sm:w-14 lg:left-1/2 lg:top-8 lg:-translate-x-1/2"
                    style={{ backgroundColor: item.accent }}
                  >
                    <Icon
                      className="text-sm sm:text-lg"
                      style={{
                        color:
                          item.year === "1995" ||
                          item.year === "1998"
                            ? "#071744"
                            : "#FFFFFF",
                      }}
                    />
                  </div>

                  <div
                    className={`mb-4 flex items-center gap-4 sm:mb-5 lg:mb-0 lg:pt-5 ${
                      isRight
                        ? "lg:col-start-2 lg:row-start-1 lg:pl-0"
                        : "lg:col-start-1 lg:row-start-1 lg:flex-row-reverse lg:justify-self-stretch lg:pr-0"
                    }`}
                  >
                    <div
                      className={`min-w-0 ${
                        isRight
                          ? "lg:order-1"
                          : "lg:order-1 lg:text-right"
                      }`}
                    >
                      <p
                        className="text-4xl font-black leading-none tracking-[-0.065em] sm:text-5xl lg:text-6xl"
                        style={{ color: item.accent }}
                      >
                        {item.year}
                      </p>

                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/45 sm:text-xs">
                        {item.label}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`hidden h-px flex-1 lg:block ${
                        isRight ? "lg:order-2" : "lg:order-2"
                      }`}
                      style={{
                        background: `linear-gradient(to right, ${item.accent}80, transparent)`,
                      }}
                    />
                  </div>

                  <div
                    className={`relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.075] sm:rounded-[2rem] sm:p-8 lg:row-start-1 lg:p-9 ${
                      isRight
                        ? "lg:col-start-1"
                        : "lg:col-start-2"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] opacity-10"
                      style={{ backgroundColor: item.accent }}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] sm:text-[11px]"
                          style={{
                            color: item.accent,
                            backgroundColor: `${item.accent}16`,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: item.accent }}
                          />
                          Chapter {item.number}
                        </span>

                        <span className="text-xs font-semibold text-white/25">
                          {item.number}
                        </span>
                      </div>

                      <h4 className="mt-6 max-w-md text-2xl font-bold leading-tight tracking-[-0.035em] sm:text-3xl">
                        {item.title}
                      </h4>

                      <p className="mt-4 text-sm leading-7 text-blue-100/65 sm:text-base sm:leading-8">
                        {item.description}
                      </p>

                      <div
                        className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5"
                      >
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs"
                          style={{
                            backgroundColor: `${item.accent}18`,
                            color: item.accent,
                          }}
                        >
                          <Icon />
                        </span>

                        <p className="text-xs font-semibold leading-5 text-white/75 sm:text-sm">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          {...reveal}
          className="mt-16 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] sm:mt-24 sm:rounded-[2rem]"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-6 sm:p-9 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#8DDCFA] sm:text-xs">
                The story continues
              </p>

              <h3 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                The vision lives on in every generation.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                This timeline reflects the history of the wider Global
                Harvest Church ministry. Milestones specific to the Maryland
                congregation can be added as they are confirmed.
              </p>
            </div>

            <div className="border-t border-white/10 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <a
                href="#our-purposes"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#FFC72C] px-5 py-3 text-sm font-bold text-[#071744] transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C] focus-visible:ring-offset-4 focus-visible:ring-offset-[#071744]"
              >
                Discover our purposes
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
