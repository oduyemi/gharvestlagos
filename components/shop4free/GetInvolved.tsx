"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, GiftOutlined, HeartFilled, MailOutlined, TeamOutlined } from "@ant-design/icons";


const waysToHelp = [
  {
    number: "01",
    icon: GiftOutlined,
    title: "Give essentials",
    description:
      "Help provide groceries, clothing, and household necessities for families.",
    action: "Explore giving",
    color: "#FFC72C",
    bg: "bg-[#FFF7DF]",
  },
  {
    number: "02",
    icon: TeamOutlined,
    title: "Give your time",
    description:
      "Help with preparation, welcoming guests, organisation, and outreach-day service.",
    action: "Explore volunteering",
    color: "#41B6E6",
    bg: "bg-[#E8F7FD]",
  },
  {
    number: "03",
    icon: HeartFilled,
    title: "Partner with us",
    description:
      "Bring your business, organisation, or community network into the vision.",
    action: "Discuss partnership",
    color: "#00A859",
    bg: "bg-[#E8F7EF]",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Shop4FreeGetInvolved = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="shop4free-get-involved"
      className="relative scroll-mt-24 overflow-hidden bg-[#F6F8FB] py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00A3E0]/[0.06] blur-3xl"
      />

      <div className="gh-container relative mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[1.75rem] bg-[#0B2265] text-white sm:rounded-[2rem]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[url('/images/shop4free/community.jpg')] bg-cover bg-center opacity-20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#071744] via-[#0B2265]/95 to-[#0B2265]/65"
          />

          <div
            aria-hidden="true"
            className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[42px] border-white/[0.06] sm:-right-5 sm:h-[26rem] sm:w-[26rem]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-[#00A3E0]/15 blur-3xl"
          />

          <div className="relative grid gap-9 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-14 lg:py-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFC72C] sm:text-xs">
                Your part matters
              </div>

              <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Make kindness
                <span className="block text-[#41B6E6]">
                  something we do.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Bring what you have, share what you know, or give your time.
                Every contribution helps turn compassion into practical care.
              </p>
            </div>

            <a
              href="/contact/#contact-form"
              className="group inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-xl bg-[#FFC72C] px-6 py-3.5 text-sm font-bold text-[#071744] transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2265] lg:self-end"
            >
              Start a conversation
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative grid grid-cols-3 border-t border-white/15 bg-black/[0.08]">
            {[
              { value: "GIVE", label: "What you can" },
              { value: "SERVE", label: "Where needed" },
              { value: "PARTNER", label: "For greater reach" },
            ].map((item, index) => (
              <div
                key={item.value}
                className={`px-3 py-5 text-center sm:px-6 sm:py-6 ${
                  index !== 2 ? "border-r border-white/15" : ""
                }`}
              >
                <p className="text-xs font-extrabold tracking-[0.16em] text-[#FFC72C] sm:text-sm">
                  {item.value}
                </p>
                <p className="mt-1.5 text-[10px] text-white/60 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A3E0]">
                Find your way to help
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0B2265] sm:text-3xl lg:text-4xl">
                There is more than one way.
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Start with what feels possible for you. Our team can help you
              explore the next step.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {waysToHelp.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.number}
                  href="/contact/#contact-form"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : index * 0.1,
                    ease,
                  }}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_55px_-38px_rgba(11,34,101,0.28)] sm:p-7 lg:p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg} transition-transform duration-300 group-hover:scale-105`}
                      style={{ color: item.color }}
                    >
                      <Icon className="text-2xl" />
                    </div>

                    <span className="text-xs font-bold tracking-[0.18em] text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-7 text-xl font-extrabold tracking-tight text-[#0B2265] sm:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-bold text-[#0B2265] transition-colors group-hover:text-[#00A3E0]">
                      {item.action}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#0B2265]/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2265] text-[#FFC72C]">
              <MailOutlined />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#0B2265] sm:text-base">
                Not sure where to begin?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                Tell us what you have in mind, and let’s explore the possibilities.
              </p>
            </div>
          </div>

          <a
            href="/contact/#contact-form"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg border border-[#0B2265]/15 px-5 py-3 text-sm font-bold text-[#0B2265] transition-colors hover:border-[#00A3E0] hover:text-[#00A3E0] sm:self-center"
          >
            Contact the team
            <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
