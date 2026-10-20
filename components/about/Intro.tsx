"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  HeartFilled,
  CompassOutlined,
  TeamOutlined,
  StarFilled,
} from "@ant-design/icons";

const highlights = [
  {
    icon: HeartFilled,
    number: "01",
    title: "Faith",
    description: "Growing deeper in Christ.",
    accent: "bg-[#FFC72C]",
  },
  {
    icon: CompassOutlined,
    number: "02",
    title: "Purpose",
    description: "Discovering God's plan.",
    accent: "bg-[#41B6E6]",
  },
  {
    icon: TeamOutlined,
    number: "03",
    title: "Community",
    description: "Growing and serving together.",
    accent: "bg-[#00A859]",
  },
];

export const AboutIntro = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.65,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      id="who-we-are"
      aria-labelledby="about-intro-heading"
      className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 text-[#071744] sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#41B6E6]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#FFC72C]/10 blur-[110px]"
      />

      <div className="gh-container relative mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          <motion.div
            {...reveal(0)}
            className="relative mx-auto w-full max-w-[570px] pb-12 pl-3 pt-3 sm:pb-14 sm:pl-5 sm:pt-5 lg:mx-0 lg:pb-10 lg:pl-7 lg:pt-7"
          >
            <div
              aria-hidden="true"
              className="absolute bottom-10 left-8 right-0 top-12 rounded-[2rem] bg-[#0B2265] sm:bottom-12 sm:left-12 sm:top-16"
            />

            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-24 w-24 rounded-tl-[2rem] border-l-[3px] border-t-[3px] border-[#00A3E0] sm:h-32 sm:w-32"
            />

            <div className="group relative mr-4 overflow-hidden rounded-[1.5rem] bg-[#DCE4EA] shadow-[0_24px_65px_rgba(7,23,68,0.17)] sm:mr-7 sm:rounded-[2rem]">
              <div className="relative aspect-[4/4.8] sm:aspect-[4/4.5]">
                <Image
                  src="/images/about/community.jpg"
                  alt="Members of Global Harvest Church Maryland gathering in faith and fellowship"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 88vw, 44vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071744]/90 via-[#071744]/10 to-transparent" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#071744]/45 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:text-[10px]">
                    <span className="h-2 w-2 rounded-full bg-[#FFC72C]" />
                    Maryland, Lagos
                  </span>

                  <span className="flex h-10 w-10 shrink-0 rotate-6 items-center justify-center rounded-full bg-[#FFC72C] text-sm text-[#071744] shadow-lg transition-transform duration-300 group-hover:rotate-0">
                    <StarFilled />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-9">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-[3px] w-8 rounded-full bg-[#41B6E6]" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFC72C] sm:text-xs">
                      Our heart. Our calling.
                    </p>
                  </div>

                  <h3 className="max-w-sm text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.75rem]">
                    A place to belong.
                    <span className="mt-2 block font-medium text-white/75">
                      A faith that grows.
                    </span>
                  </h3>

                  <div className="mt-6 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-xs">
                    <span>Discover purpose</span>
                    <span className="text-[#FFC72C]">✳</span>
                    <span>Experience God</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              {...reveal(0.25)}
              className="absolute bottom-0 left-5 z-10 max-w-[310px] sm:bottom-0 sm:left-10 lg:-left-1"
            >
              <div className="relative -rotate-2 rounded-[1.25rem] bg-[#FFC72C] p-4 shadow-[0_16px_38px_rgba(7,23,68,0.18)] transition-transform duration-300 hover:rotate-0 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071744] text-lg text-[#FFC72C]">
                    <HeartFilled />
                  </div>

                  <div>
                    <p className="text-sm font-black text-[#071744]">
                      Faith in action
                    </p>
                    <p className="mt-1 max-w-[200px] text-xs leading-5 text-[#071744]/75">
                      Knowing God, caring for people, and serving with purpose.
                    </p>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-2 flex h-7 w-7 rotate-12 items-center justify-center rounded-lg bg-white text-sm text-[#0B2265] shadow-sm"
                >
                  ✳
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className="relative pt-1 lg:pl-2"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#E87722]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0B2265]/70 sm:text-xs">
                Who we are
              </p>
            </div>

            <h2
              id="about-intro-heading"
              className="max-w-2xl text-[2.65rem] font-black leading-[1.03] tracking-[-0.06em] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              More than a place to worship.
              <span className="relative mt-3 inline-block text-[#0B2265]">
                A place to{" "}
                <span className="relative inline-block text-[#00A3E0]">
                  grow.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 150 14"
                    preserveAspectRatio="none"
                    className="absolute -bottom-2 left-0 h-2.5 w-full text-[#FFC72C]"
                  >
                    <path
                      d="M3 9 C40 1, 95 14, 147 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-[#071744]/90 sm:text-xl sm:leading-9">
              We are a church family helping people know God, discover their
              God-given purpose, and experience transformation through Jesus
              Christ.
            </p>

            <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-[#515D72] sm:text-base sm:leading-8">
              <p>
                At Global Harvest Church, Maryland, Lagos, biblical teaching,
                prayer, worship, fellowship, and spiritual growth shape our
                life together. We seek to create an environment where people
                can deepen their relationship with God, strengthen their
                faith, and serve others meaningfully.
              </p>

              <p>
                Our congregation is part of the wider Global Harvest Church
                ministry, founded in Ibadan, Nigeria, in 1995 by Rev. Victor
                Adeyemi and Pastor Jumoke Adeyemi. We share its vision of
                reaching people, nurturing faith, and helping individuals
                fulfil their God-given purpose.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 border-y border-[#071744]/15 py-5 sm:grid-cols-3 sm:gap-5 sm:py-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    {...reveal(0.18 + index * 0.08)}
                    className="group flex items-center gap-3 sm:block"
                  >
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-[#071744]/[0.06] transition-transform duration-300 group-hover:-translate-y-1 sm:mb-4">
                      <span
                        aria-hidden="true"
                        className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${item.accent}`}
                      />
                      <Icon className="text-lg text-[#0B2265]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black tracking-[0.15em] text-[#0B2265]/40">
                          {item.number}
                        </span>
                        <h3 className="text-sm font-extrabold text-[#071744]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-[#515D72] sm:text-[13px] sm:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};