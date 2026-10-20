"use client";
import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { motion, useReducedMotion } from "framer-motion";

const values = [
  {
    number: "01",
    letter: "F",
    name: "Family",
    subtitle: "Growing together",
    description:
      "We are more than a gathering. We are a family where people are welcomed, relationships are nurtured, and every generation is encouraged to grow in faith.",
    statement: "There is room for you at the table.",
    color: "#0789C4",
    tint: "#DDF4FC",
    rotation: "-3deg",
    shape: "rounded-[2rem] rounded-tr-[5rem]",
  },
  {
    number: "02",
    letter: "Lo",
    name: "Love",
    subtitle: "Care without conditions",
    description:
      "God's love is the foundation of how we treat one another. We choose compassion, generosity, and genuine care within our church and throughout the wider community.",
    statement: "Love should always leave a mark.",
    color: "#B94F22",
    tint: "#FCE9DC",
    rotation: "3deg",
    shape: "rounded-[2rem] rounded-bl-[5rem]",
  },
  {
    number: "03",
    letter: "A",
    name: "Authenticity",
    subtitle: "Faith lived genuinely",
    description:
      "We value integrity over appearances. We seek to live out our faith honestly, speak the truth in love, and communicate the Gospel with clarity and conviction.",
    statement: "No performance. Just genuine faith.",
    color: "#08784D",
    tint: "#DDF5E8",
    rotation: "-2deg",
    shape: "rounded-[2rem] rounded-bl-[5rem]",
  },
  {
    number: "04",
    letter: "T",
    name: "The Supernatural",
    subtitle: "Expecting God's work",
    description:
      "We believe God is still at work today. We make room for the Holy Spirit, pray with expectation, and remain open to God's transforming presence in our lives and church.",
    statement: "We come with faith and expectation.",
    color: "#866000",
    tint: "#FFF1C6",
    rotation: "2deg",
    shape: "rounded-[2rem] rounded-tr-[5rem]",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export const AboutValues = () => {
  const reduceMotion = useReducedMotion();

  const entrance = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        variants: reveal,
      };

  return (
    <section
      id="our-values"
      aria-labelledby="values-heading"
      className="relative isolate overflow-hidden bg-[#FAF8F2] py-20 text-[#10234B] sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#41B6E6]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[42%] h-96 w-96 rounded-full bg-[#FFC72C]/10 blur-3xl"
      />

      <div className="gh-container relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          {...entrance}
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16"
        >
          <div>
            <h2
              id="values-heading"
              className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[6.25rem]"
            >
              Good things
              <br />
              <span className="relative inline-block text-[#0B2265]">
                grow here.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 310 18"
                  fill="none"
                  className="absolute -bottom-2 left-0 w-[95%] sm:-bottom-3"
                >
                  <path
                    d="M4 11C69 2 206 2 305 9"
                    stroke="#FFC72C"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:justify-self-end lg:pb-2">
            <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              The best communities are built on more than good intentions.
              They grow through the things people choose to live out, day
              after day.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Meet the four convictions at the heart of who we are.
            </p>

            <a
              href="#float-01"
              className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-[#0B2265] transition-colors hover:text-[#0789C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0789C4] focus-visible:ring-offset-4"
            >
              Get to know FLoAT
              <ArrowDownOutlined />
            </a>
          </div>
        </motion.div>

        <motion.div
          {...entrance}
          className="relative mt-14 overflow-hidden rounded-[2rem] bg-[#0B2265] p-5 text-white shadow-[0_24px_70px_-35px_rgba(11,34,101,0.55)] sm:mt-20 sm:rounded-[2.5rem] sm:p-8 lg:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border-[45px] border-white/[0.045]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8DDCFA] sm:text-xs">
                Four letters. One family.
              </p>

              <div
                aria-label="FLoAT: Family, Love, Authenticity, The Supernatural"
                className="mt-5 flex items-baseline gap-1 sm:gap-2"
              >
                {values.map((value) => (
                  <span
                    key={value.number}
                    className="text-6xl font-black leading-none tracking-[-0.08em] sm:text-7xl lg:text-8xl"
                    style={{ color: value.tint }}
                  >
                    {value.letter}
                  </span>
                ))}
              </div>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
                Not just what we believe. How we choose to live.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((value) => (
                <a
                  key={value.number}
                  href={`#float-${value.number}`}
                  className="group flex min-h-[100px] items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DDCFA] sm:min-h-[112px] sm:p-5"
                >
                  <div>
                    <span
                      className="block text-[10px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: value.tint }}
                    >
                      {value.number}
                    </span>
                    <span className="mt-2 block text-sm font-bold text-white sm:text-base">
                      {value.name}
                    </span>
                  </div>

                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 sm:mt-24">
          <div className="mb-9 flex items-end justify-between gap-4 sm:mb-12">
            <div>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#10234B] sm:text-3xl">
                Four ways we show up.
              </h3>
            </div>

            <span className="hidden rounded-full border border-[#10234B]/10 px-4 py-2 text-xs font-semibold text-slate-500 sm:inline-flex">
              Our FLoAT values
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6 xl:gap-8">
            {values.map((value, index) => {
              return (
                <motion.article
                  key={value.number}
                  id={`float-${value.number}`}
                  {...entrance}
                  className={`group relative isolate scroll-mt-24 overflow-hidden border border-black/[0.045] bg-white p-6 shadow-[0_12px_45px_-35px_rgba(16,35,75,0.3)] transition-shadow duration-300 hover:shadow-[0_25px_65px_-35px_rgba(16,35,75,0.3)] sm:p-8 lg:p-9 ${value.shape}`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-3 -top-10 select-none text-[12rem] font-black leading-none tracking-[-0.12em] opacity-[0.09] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 sm:-right-1 sm:-top-12 sm:text-[15rem]"
                    style={{ color: value.color }}
                  >
                    {value.letter}
                  </span>

                  <div className="relative flex items-center justify-between gap-4">
                    <span className="text-xs font-bold tracking-[0.18em] text-slate-400">
                      {value.number} / 04
                    </span>
                  </div>

                  <div className="relative mt-9 sm:mt-12">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs"
                      style={{ color: value.color }}
                    >
                      {value.subtitle}
                    </p>

                    <h4 className="mt-3 max-w-md text-3xl font-black leading-tight tracking-[-0.045em] text-[#10234B] sm:text-4xl">
                      {value.name}
                    </h4>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {value.description}
                    </p>
                  </div>

                  <div
                    className="relative mt-7 flex items-start gap-3 border-t pt-5 sm:mt-8"
                    style={{ borderColor: `${value.color}25` }}
                  >
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: value.color }}
                    />

                    <p className="text-sm font-bold leading-6 text-[#10234B]">
                      {value.statement}
                    </p>

                    <span
                      aria-hidden="true"
                      className="ml-auto shrink-0 text-lg transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: value.color }}
                    >
                      ↗
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute bottom-0 right-0 h-3 w-16 rounded-tl-2xl opacity-80 transition-all duration-300 group-hover:w-24 ${index % 2 === 0 ? "rounded-br-none" : "rounded-tr-none"}`}
                    style={{ backgroundColor: value.color }}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          {...entrance}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-[#FFC72C] p-6 text-[#10234B] sm:mt-24 sm:rounded-[2.5rem] sm:p-10 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full border-[28px] border-[#10234B]/[0.07] sm:h-64 sm:w-64"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="mt-6 text-3xl font-black leading-[1.05] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Faith at our centre.
                <br />
                Love in everything.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#10234B]/75 sm:text-base">
                These values are an invitation to belong, to grow, and to be
                part of something bigger than ourselves.
              </p>
            </div>

            <a
              href="#our-purposes"
              className="group inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#0B2265] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#123A91] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2265] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFC72C] sm:w-auto"
            >
              Discover our purpose
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
