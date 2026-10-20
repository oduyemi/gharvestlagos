"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, GiftOutlined, ShopOutlined, HeartOutlined, TeamOutlined, CheckOutlined } from "@ant-design/icons";


const steps = [
  {
    number: "01",
    label: "THE GIVING",
    title: "A community that gives.",
    description:
      "Church members, partners, and sponsors come together to provide everyday essentials for households that need support.",
    icon: GiftOutlined,
    accent: "#FFC72C",
    wash: "#FFF7DF",
    detail: "DONATIONS & PARTNERSHIPS",
    note: "It starts with generosity.",
  },
  {
    number: "02",
    label: "THE EXPERIENCE",
    title: "The freedom to choose.",
    description:
      "Using a voucher, families select the essentials that matter most to their own households, with dignity and choice at the centre.",
    icon: ShopOutlined,
    accent: "#00A3E0",
    wash: "#E7F7FD",
    detail: "CHOICE & DIGNITY",
    note: "Support, on their terms.",
  },
  {
    number: "03",
    label: "THE CONNECTION",
    title: "Care beyond the essentials.",
    description:
      "Each visit can also create space for encouragement, prayer, and meaningful human connection.",
    icon: HeartOutlined,
    accent: "#00A859",
    wash: "#E7F7EE",
    detail: "CARE & COMMUNITY",
    note: "Every person matters.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Shop4FreeHowItWorks = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="shop4free-how-it-works"
      aria-labelledby="shop4free-how-title"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-32"
    >
      {/* Restrained brand atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#41B6E6]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-40 -z-10 h-[360px] w-[360px] rounded-full bg-[#FFC72C]/10 blur-[90px]"
      />

      <div className="gh-container relative mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Section introduction */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-9 rounded-full bg-[#E87722]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#0B2265] sm:text-xs">
                How Shop4Free works
              </span>
            </div>

            <h2
              id="shop4free-how-title"
              className="max-w-2xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.065em] text-[#0B2265] sm:text-5xl lg:text-[4.5rem]"
            >
              Practical help.
              <br />
              <span className="font-serif font-normal italic text-[#00A3E0]">
                Personal dignity.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="lg:pb-2"
          >
            <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-[17px]">
              Shop4Free turns community generosity into practical support,
              creating an experience where people are welcomed, respected,
              and free to choose what their households need.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0B2265]/10 bg-white text-[#0B2265] shadow-sm">
                <TeamOutlined />
              </span>
              <div>
                <p className="text-xs font-bold text-[#0B2265] sm:text-sm">
                  A community effort
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Made possible by people who care.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three-step journey */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          {/* Journey connector on larger screens */}
          <div
            aria-hidden="true"
            className="absolute left-[8.333%] right-[8.333%] top-[35px] hidden h-px bg-gradient-to-r from-[#FFC72C]/70 via-[#00A3E0]/50 to-[#00A859]/60 lg:block"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 24 }
                  }
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion ? 0 : index * 0.12,
                    ease,
                  }}
                  className={`group relative flex min-w-0 flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_65px_-40px_rgba(11,34,101,0.3)] ${
                    index === 1 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Coloured card header */}
                  <div
                    className="relative flex min-h-[185px] items-center justify-between overflow-hidden px-6 py-6 sm:min-h-[205px] sm:px-7"
                    style={{ backgroundColor: step.wash }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-9 -top-14 h-48 w-48 rounded-full border-[24px] border-white/45 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-12 left-1/3 h-28 w-28 rounded-full bg-white/45"
                    />

                    <div className="relative z-10 flex h-full flex-col justify-between self-stretch">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B2265]/65">
                        STEP {step.number}
                      </span>

                      <div className="mt-8">
                        <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#0B2265]/55">
                          {step.label}
                        </p>
                        <p className="mt-2 max-w-[210px] text-sm font-medium leading-5 text-[#0B2265]/80">
                          {step.note}
                        </p>
                      </div>
                    </div>

                    <div
                      className="relative z-10 flex h-[74px] w-[74px] shrink-0 items-center justify-center rounded-[22px] bg-white shadow-[0_10px_30px_-15px_rgba(11,34,101,0.3)] transition-transform duration-500 group-hover:rotate-[-5deg] group-hover:scale-105 sm:h-[82px] sm:w-[82px]"
                    >
                      <Icon
                        style={{ color: step.accent }}
                        className="text-[30px] sm:text-[34px]"
                      />
                    </div>

                    <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ backgroundColor: step.accent }} />
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-[#0B2265] sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
                        {step.detail}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-[#0B2265] transition-all duration-300 group-hover:border-[#0B2265] group-hover:bg-[#0B2265] group-hover:text-white"
                      >
                        <ArrowRightOutlined className="text-[11px]" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing invitation */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease }}
          className="relative mt-8 overflow-hidden rounded-[24px] bg-[#0B2265] sm:mt-12 sm:rounded-[30px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full border-[38px] border-white/[0.055] sm:right-12"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 left-[38%] h-64 w-64 rounded-full bg-[#00A3E0]/20 blur-[70px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 bg-[#FFC72C]"
          />

          <div className="relative flex flex-col gap-7 p-6 pl-8 sm:p-9 sm:pl-11 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-12 lg:py-11">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#41B6E6]">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] sm:text-xs">
                  Be part of the story
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Compassion works better{" "}
                <span className="font-serif font-normal italic text-[#FFC72C]">
                  together.
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                Your time, generosity, or partnership can help bring practical
                care and encouragement to more people.
              </p>

              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium text-white/80 sm:text-xs">
                <span className="inline-flex items-center gap-2">
                  <CheckOutlined className="text-[#FFC72C]" />
                  Give
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckOutlined className="text-[#FFC72C]" />
                  Volunteer
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckOutlined className="text-[#FFC72C]" />
                  Partner
                </span>
              </div>
            </div>

            <a
              href="#shop4free-get-involved"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#FFC72C] px-6 py-3 text-sm font-bold text-[#0B2265] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2265] lg:self-center"
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
