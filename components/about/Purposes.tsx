"use client";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Megaphone,
  Music2,
  Quote,
  UsersRound,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const purposes = [
  {
    number: "01",
    title: "Worship",
    eyebrow: "Our response to God",
    description:
      "We honour God through worship, prayer, gratitude, and lives centred on His presence.",
    detail: "A life of devotion",
    icon: Music2,
    accent: "#FFC72C",
    accentText: "#071744",
    mark: "✳",
  },
  {
    number: "02",
    title: "Ministry",
    eyebrow: "Our hands at work",
    description:
      "We serve God and people with our gifts, abilities, and opportunities, making every contribution count.",
    detail: "A heart ready to serve",
    icon: HeartHandshake,
    accent: "#41B6E6",
    accentText: "#071744",
    mark: "↗",
  },
  {
    number: "03",
    title: "Evangelism",
    eyebrow: "Our message to the world",
    description:
      "We share the good news of Jesus Christ and invite others into a life-changing relationship with Him.",
    detail: "Good news for everyone",
    icon: Megaphone,
    accent: "#E87722",
    accentText: "#FFFFFF",
    mark: "✳",
  },
  {
    number: "04",
    title: "Fellowship",
    eyebrow: "Our life together",
    description:
      "We build meaningful relationships, grow in community, and support one another through every season.",
    detail: "Better together",
    icon: UsersRound,
    accent: "#00A859",
    accentText: "#FFFFFF",
    mark: "♡",
  },
  {
    number: "05",
    title: "Discipleship",
    eyebrow: "Our journey of growth",
    description:
      "We grow in God's Word, follow the example of Christ, and put our faith into practice with maturity and purpose.",
    detail: "Growing to become more like Christ",
    icon: BookOpen,
    accent: "#9B8AFB",
    accentText: "#071744",
    mark: "↗",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export const AboutPurposes = () => {
  const reduceMotion = useReducedMotion();

  const animationProps = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        variants: reveal,
        transition: { duration: 0.55, ease: "easeOut" as const },
      };

  return (
    <section
      id="our-purposes"
      aria-labelledby="purposes-heading"
      className="relative overflow-hidden bg-[#FAF8F2] text-[#071744]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-28 h-64 w-64 rounded-full border border-[#0B2265]/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-38 h-44 w-44 rounded-full border border-[#0B2265]/[0.07]"
      />

      <div className="gh-container relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <motion.div
          {...animationProps}
          className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16"
        >
          <div>
            <h2
              id="purposes-heading"
              className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.6rem]"
            >
              Faith with
              <br />
              <span className="relative inline-block">
                a purpose
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 18"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-[#FFC72C] sm:-bottom-3 sm:h-4"
                >
                  <path
                    d="M3 12 C70 2, 180 17, 316 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="ml-2 inline-block align-top text-[#E87722]">.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#46516A] sm:text-lg">
              Church is more than a place we gather. It is a people called to
              worship, serve, share the love of Jesus, grow together, and live
              out His Word.
            </p>
          </div>

          <div className="relative max-w-md lg:justify-self-end lg:pb-2">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2265] text-[#FFC72C]">
                <BookOpen size={19} />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B2265]">
                Our guiding principle
              </span>
            </div>

            <p className="text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
              “We are here to love God, serve people, and help lives grow in
              Christ.”
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#E87722]" />
              <span className="text-sm font-medium text-[#667087]">
                The heart behind everything we do
              </span>
            </div>

            <span
              aria-hidden="true"
              className="absolute -right-2 -top-7 -z-0 select-none font-serif text-8xl leading-none text-[#FFC72C]/60"
            >
              ”
            </span>
          </div>
        </motion.div>

        <div className="my-14 flex items-center gap-4 sm:my-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7B8496]">
            Five expressions of our faith
          </span>
          <span className="h-px flex-1 bg-[#071744]/15" />
          <span className="hidden text-sm font-medium text-[#7B8496] sm:block">
            Rooted in the Word. Lived every day.
          </span>
        </div>

        <div className="border-t border-[#071744]/20">
          {purposes.map((purpose, index) => {
            const Icon = purpose.icon;

            return (
              <motion.article
                key={purpose.number}
                id={`purpose-${purpose.number}`}
                {...animationProps}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 0.5,
                        delay: index * 0.07,
                        ease: "easeOut",
                      }
                }
                className="group relative border-b border-[#071744]/20"
              >
                <a
                  href="#purpose-scripture"
                  aria-label={`Read the biblical foundation for ${purpose.title}`}
                  className="grid gap-5 py-8 outline-none transition-colors duration-300 focus-visible:bg-white/60 sm:py-9 md:grid-cols-[76px_minmax(0,1fr)_minmax(220px,0.75fr)_44px] md:items-center md:gap-7 lg:gap-10"
                >
                  <div className="flex items-center gap-4 md:block">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-black transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 md:h-14 md:w-14"
                      style={{
                        backgroundColor: purpose.accent,
                        color: purpose.accentText,
                      }}
                    >
                      {purpose.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8990A0] md:mt-3 md:block">
                      Purpose
                    </span>
                  </div>

                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.19em] text-[#7B8496] sm:text-xs">
                      {purpose.eyebrow}
                    </p>
                    <h3 className="text-3xl font-black leading-none tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl lg:text-[2.7rem]">
                      {purpose.title}
                      <span
                        aria-hidden="true"
                        className="ml-1"
                        style={{ color: purpose.accent }}
                      >
                        .
                      </span>
                    </h3>
                  </div>

                  <div>
                    <p className="max-w-lg text-sm leading-7 text-[#46516A] sm:text-base sm:leading-7">
                      {purpose.description}
                    </p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#0B2265]">
                      {purpose.detail}
                    </p>
                  </div>

                  <div className="absolute right-0 top-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#071744]/15 transition-all duration-300 group-hover:border-[#071744] group-hover:bg-[#071744] group-hover:text-white md:static md:h-11 md:w-11">
                    <ArrowUpRight size={19} />
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-5 right-14 hidden text-2xl font-bold opacity-0 transition-all duration-300 group-hover:translate-y-[-3px] group-hover:opacity-100 md:block"
                    style={{ color: purpose.accent }}
                  >
                    {purpose.mark}
                  </span>
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          id="purpose-scripture"
          {...animationProps}
          className="relative mt-16 overflow-hidden bg-[#0B2265] text-white sm:mt-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/10 sm:-right-5 sm:h-80 sm:w-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-1 top-0 h-40 w-40 rounded-full bg-[#41B6E6]/10 blur-3xl"
          />

          <div className="relative grid gap-8 p-7 sm:p-10 md:grid-cols-[90px_1fr] md:gap-10 md:p-14 lg:p-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFC72C] text-[#071744] sm:h-20 sm:w-20">
              <Quote size={35} strokeWidth={2.2} />
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#FFC72C]">
                The foundation
              </p>

              <h3 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                One mission. Five expressions. A faith that goes beyond Sunday.
              </h3>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Our purposes draw from the Great Commission and the example of
                the early church: making disciples, teaching Christ&apos;s
                commands, sharing life together, praying, and growing in faith.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-semibold">
                  <BookOpen size={16} className="text-[#FFC72C]" />
                  Matthew 28:19–20
                </span>
                <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-semibold">
                  <BookOpen size={16} className="text-[#41B6E6]" />
                  Acts 2:42–47
                </span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col gap-5 border-t border-white/15 px-7 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-14 lg:px-16">
            <p className="max-w-lg text-sm leading-6 text-white/75">
              Discover the values that shape how we live out this calling.
            </p>

            <a
              href="#our-values"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 bg-[#FFC72C] px-5 py-3 text-sm font-bold text-[#071744] transition-all duration-300 hover:gap-5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC72C]"
            >
              Explore our values
              <ArrowDownRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
