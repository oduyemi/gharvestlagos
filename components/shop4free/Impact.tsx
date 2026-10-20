"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, CalendarOutlined, HeartFilled, TeamOutlined } from "@ant-design/icons";


const highlights = [
  {
    icon: CalendarOutlined,
    value: "2011",
    title: "It started with a simple act of care.",
    description:
      "Launched on Good Friday in April 2011 as a practical expression of compassion.",
    tag: "THE BEGINNING",
  },
  {
    icon: TeamOutlined,
    value: "700–1,000+",
    title: "Families reached across editions.",
    description:
      "Reported reach for individual editions, with numbers varying by event.",
    tag: "COMMUNITY REACH",
  },
  {
    icon: HeartFilled,
    value: "Every year",
    title: "A commitment that continues.",
    description:
      "Shop4Free grew into a major annual end-of-year outreach, commonly held in December.",
    tag: "THE LEGACY",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Shop4FreeImpact = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#071744] py-20 text-white sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/shop4free/community.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#071744]/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071744] via-[#071744]/95 to-[#0B2265]/75"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-[#00A3E0]/10 blur-3xl"
      />

      <div className="gh-container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFC72C]">
                The impact
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              More than an event.
              <span className="mt-2 block text-[#41B6E6]">
                A lasting legacy.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-white/75 sm:text-lg">
              What began as an Easter initiative grew into an enduring
              expression of community generosity — making practical support
              part of the story, year after year.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-semibold text-white/60">
                Rooted in compassion. Growing through community.
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-7">
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B2265]/80 p-7 sm:min-h-[390px] sm:p-9 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-56 w-56 rounded-full border-[32px] border-white/[0.045]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#00A3E0]/10 blur-2xl"
            />

            <div className="relative flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                <CalendarOutlined className="text-[#FFC72C]" />
                Since the beginning
              </span>
            </div>

            <div className="relative mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#41B6E6]">
                A story that began in
              </p>
              <p className="mt-1 text-[6.5rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[8rem]">
                2011<span className="text-[#FFC72C]">.</span>
              </p>
              <div className="mt-5 h-1 w-14 rounded-full bg-[#FFC72C]" />
              <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
                Launched on Good Friday in April, with a vision to turn
                compassion into practical support.
              </p>
            </div>
          </motion.article>

          <div className="relative flex flex-col justify-between gap-4">
            {highlights.slice(1).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.tag}
                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease,
                  }}
                  className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 transition-colors duration-300 hover:bg-white/[0.085] sm:p-8 lg:p-9"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#41B6E6] sm:text-xs">
                      {item.tag}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#FFC72C] transition-transform duration-300 group-hover:scale-105">
                      <Icon />
                    </span>
                  </div>

                  <div className="mt-7">
                    <p
                      className={`font-extrabold leading-none tracking-tight text-white ${
                        index === 0
                          ? "text-4xl sm:text-5xl"
                          : "text-3xl sm:text-4xl"
                      }`}
                    >
                      {item.value}
                    </p>

                    <h3 className="mt-4 text-lg font-bold leading-snug text-white sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-7 text-white/65">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1 w-8 rounded-full bg-[#FFC72C]" />
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mt-8 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg text-xs leading-6 text-white/45 sm:text-sm">
            Historical program information supplied by Global Harvest Church.
            Reported reach and activities vary by edition.
          </p>

          <a
            href="#shop4free-get-involved"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#FFC72C] px-6 py-3.5 text-sm font-bold text-[#071744] transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071744] sm:self-auto"
          >
            Help carry the vision forward
            <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
