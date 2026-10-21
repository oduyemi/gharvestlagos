
"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartOutlined, TeamOutlined, CompassOutlined } from "@ant-design/icons";


const communityPillars = [
  {
    number: "01",
    icon: TeamOutlined,
    title: "Belong",
    label: "THE PEOPLE",
    description:
      "Build genuine relationships with people who welcome you, care about you, and walk alongside you.",
    accent: "#00A3E0",
    surface: "bg-[#EAF8FC]",
    ink: "text-[#087EAA]",
    note: "You have a place here.",
  },
  {
    number: "02",
    icon: HeartOutlined,
    title: "Become",
    label: "THE GROWTH",
    description:
      "Grow in your relationship with Christ through encouragement, prayer, and shared faith.",
    accent: "#E8B323",
    surface: "bg-[#FFF6DC]",
    ink: "text-[#8B670D]",
    note: "There is room to grow.",
  },
  {
    number: "03",
    icon: CompassOutlined,
    title: "Be a blessing",
    label: "THE PURPOSE",
    description:
      "Put your faith into action by caring for others and making a meaningful difference around you.",
    accent: "#00A859",
    surface: "bg-[#EAF8EF]",
    ink: "text-[#087A47]",
    note: "Your faith goes further.",
  },
];

export const MCIntroduction = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 14,
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
      duration: shouldReduceMotion ? 0 : 0.45,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      id="what-are-mcs"
      aria-labelledby="mc-introduction-heading"
      className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-24 -z-10 h-72 w-72 rounded-full bg-brand-cyan/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-12 -z-10 h-72 w-72 rounded-full bg-brand-gold/[0.09] blur-3xl"
      />

      <div className="gh-container relative mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          {...reveal()}
          className="grid gap-5 border-b border-slate-200/80 pb-8 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-12 lg:pb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/15 bg-brand-cyan/[0.055] px-3 py-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-brand-cyan-dark sm:text-[11px]">
                A little closer, together
              </span>
            </div>

            <h2
              id="mc-introduction-heading"
              className="mt-4 max-w-xl text-3xl font-black leading-[1.12] tracking-[-0.045em] text-brand-blue-dark sm:text-4xl lg:text-[3.25rem]"
            >
              Faith feels different when it&apos;s{" "}
              <span className="relative inline-block">
                shared.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 -z-10 h-2.5 w-full -rotate-1 rounded-full bg-brand-gold/60"
                />
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Missional Communities are smaller communities within Global
              Harvest Church where friendship and faith grow side by side.
              We make room for honest conversations, prayer, encouragement,
              and putting what we believe into practice.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              You don&apos;t need to have everything figured out. Just bring
              yourself — there&apos;s room to take the next step together.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.05)}
          className="mb-6 mt-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5 lg:mt-10"
        >
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-cyan-dark sm:text-[11px]">
              How we do life together
            </p>
            <h3 className="mt-1.5 text-xl font-extrabold tracking-[-0.035em] text-brand-blue-dark sm:text-2xl">
              One community. Three ways to grow.
            </h3>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Grow at your own pace
          </span>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {communityPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.number}
                {...reveal(index * 0.09)}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(11,34,101,0.035)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_32px_rgba(11,34,101,0.09)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div
                  aria-hidden="true"
                  className="h-1 w-full origin-left transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                  style={{ backgroundColor: pillar.accent }}
                />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.surface} ${pillar.ink} transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none`}
                    >
                      <Icon className="text-xl" />
                    </div>

                    <span className="font-mono text-xs font-semibold tracking-wider text-slate-400">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p
                      className={`text-[10px] font-extrabold uppercase tracking-[0.16em] ${pillar.ink}`}
                    >
                      {pillar.label}
                    </p>

                    <h4 className="mt-1.5 text-2xl font-extrabold tracking-[-0.04em] text-brand-blue-dark">
                      {pillar.title}
                    </h4>

                    <p className="mt-2.5 text-sm leading-6 text-slate-600">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-2.5 border-t border-slate-100 pt-4 mt-6">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: pillar.accent }}
                    />
                    <span className="text-xs font-semibold text-slate-500">
                      {pillar.note}
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          {...reveal(0.08)}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-brand-cyan/15 bg-[#F4FAFD] p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand-cyan-dark shadow-sm ring-1 ring-slate-100">
              <TeamOutlined className="text-lg" />
            </div>

            <div>
              <p className="font-bold text-brand-blue-dark">
                Your people might be closer than you think.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Explore our communities and find a place to start.
              </p>
            </div>
          </div>

          <Link
            href="/mc-live/#find-your-community"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand-blue-dark px-5 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-brand-cyan-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cyan/25 sm:w-auto motion-reduce:transition-none"
          >
            Explore communities
            <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
