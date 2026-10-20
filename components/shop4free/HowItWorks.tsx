"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, GiftOutlined, ShopOutlined, HeartOutlined, TeamOutlined } from "@ant-design/icons";


const steps = [
  {
    number: "01",
    label: "THE GIVING",
    title: "A community that gives.",
    description:
      "Church members, partners, and sponsors help provide everyday essentials for households that need support.",
    icon: GiftOutlined,
    accent: "#FFC72C",
    bg: "bg-[#fff7dc]",
    detail: "DONATIONS + PARTNERSHIPS",
  },
  {
    number: "02",
    label: "THE EXPERIENCE",
    title: "A choice that matters.",
    description:
      "With a voucher, families choose the essentials that make the most difference in their own homes.",
    icon: ShopOutlined,
    accent: "#00A3E0",
    bg: "bg-[#e7f7fd]",
    detail: "FREEDOM + DIGNITY",
  },
  {
    number: "03",
    label: "THE CONNECTION",
    title: "Care that stays with you.",
    description:
      "Every visit is an opportunity for encouragement, prayer, and meaningful human connection.",
    icon: HeartOutlined,
    accent: "#00A859",
    bg: "bg-[#e6f7ee]",
    detail: "KINDNESS + COMMUNITY",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Shop4FreeHowItWorks = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="shop4free-how-it-works"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="gh-container relative mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[#E87722]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B2265]">
                How it works
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B2265] sm:text-5xl lg:text-6xl">
              Simple steps.
              <br />
              <span className="text-[#00A3E0]">Real impact.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="flex flex-col gap-5 lg:items-end lg:pb-2"
          >
            <p className="max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:text-right">
              A thoughtful journey from community generosity to practical
              support — with dignity at every step.
            </p>

            <div className="flex items-center gap-3 text-sm font-semibold text-[#0B2265]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff2c7] text-[#0B2265]">
                <TeamOutlined />
              </span>
              Powered by people who care
            </div>
          </motion.div>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-[27px] top-10 hidden w-px bg-slate-200 md:block lg:left-[43px]"
          />

          <div className="space-y-5 md:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease,
                  }}
                  className="group relative grid gap-5 md:grid-cols-[76px_minmax(0,1fr)] lg:grid-cols-[96px_minmax(0,1fr)] lg:gap-8"
                >
                  <div className="relative z-10 hidden pt-7 md:flex md:justify-center lg:justify-start">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-extrabold tracking-wider text-[#0B2265] shadow-sm transition-colors duration-300 group-hover:border-[#00A3E0] group-hover:bg-[#0B2265] group-hover:text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="grid overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-[0_18px_55px_-38px_rgba(11,34,101,0.35)] sm:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-[230px_minmax(0,1fr)]">
                    <div
                      className={`relative flex min-h-[155px] items-center justify-center overflow-hidden ${step.bg} sm:min-h-[220px]`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -right-7 -top-12 h-36 w-36 rounded-full border-[22px] border-white/50 sm:h-44 sm:w-44"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-white/45"
                      />

                      <span className="absolute left-5 top-4 text-xs font-bold tracking-[0.18em] text-[#0B2265]/60 md:hidden">
                        STEP {step.number}
                      </span>

                      <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-[1.5rem] bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
                        <Icon
                          style={{ color: step.accent }}
                          className="text-3xl"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: step.accent }}
                        />
                        <p className="text-[10px] font-extrabold tracking-[0.2em] text-slate-500 sm:text-xs">
                          {step.label}
                        </p>
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#0B2265] sm:text-3xl lg:text-[2rem]">
                        {step.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        {step.description}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                        <span className="text-[10px] font-bold tracking-[0.14em] text-slate-400 sm:text-xs">
                          {step.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="relative mt-12 overflow-hidden rounded-[1.5rem] bg-[#0B2265] sm:mt-16"
        >
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.06] sm:-right-4"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 right-40 h-44 w-44 rounded-full bg-[#00A3E0]/15 blur-2xl"
          />

          <div className="relative flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-10">
            <div className="flex items-start gap-4 sm:gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#41B6E6]">
                  Be part of the story
                </p>
                <h3 className="mt-2 max-w-xl text-xl font-extrabold leading-snug text-white sm:text-2xl lg:text-3xl">
                  There is a place for you in this work.
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  Give, volunteer, or partner with us to bring practical care
                  to more families.
                </p>
              </div>
            </div>

            <a
              href="#shop4free-get-involved"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#FFC72C] px-6 py-3 text-sm font-bold text-[#0B2265] transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2265] lg:self-center"
            >
              Get involved
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
