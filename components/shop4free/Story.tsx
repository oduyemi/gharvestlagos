"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartFilled, SafetyCertificateOutlined, TeamOutlined, CalendarOutlined } from "@ant-design/icons";


const principles = [
  {
    number: "01",
    icon: SafetyCertificateOutlined,
    title: "Choice with dignity",
    description: "The freedom to choose what your household needs.",
  },
  {
    number: "02",
    icon: HeartFilled,
    title: "Care that connects",
    description: "Practical help, encouragement, and human connection.",
  },
  {
    number: "03",
    icon: TeamOutlined,
    title: "Community in action",
    description: "People coming together to make a real difference.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export const Shop4FreeStory = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.65, delay, ease },
        };

  return (
    <section
      id="shop4free-story"
      aria-labelledby="shop4free-story-heading"
      className="relative isolate overflow-hidden bg-[#f8f7f3] py-14 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-cyan/[0.06] blur-3xl"
      />

      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div {...reveal()} className="mb-8 sm:mb-11">
          <div className="flex items-center justify-between gap-4 border-b border-brand-blue-dark/15 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-blue-dark sm:text-xs">
                The Shop4Free story
              </span>
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-[10px]">
              Global Harvest Church Maryland, Lagos
            </span>
          </div>

          <div className="grid gap-5 pt-7 sm:pt-9 lg:grid-cols-[1fr_260px] lg:items-end lg:gap-10">
            <h2
              id="shop4free-story-heading"
              className="max-w-3xl text-[clamp(2.8rem,6.5vw,5.8rem)] font-black leading-[0.94] tracking-[-0.075em] text-brand-blue-dark"
            >
              More than giving.
              <span className="block font-serif font-normal italic tracking-[-0.055em] text-brand-cyan">
                A gift of dignity.
              </span>
            </h2>

            <div className="max-w-xs lg:justify-self-end">
              <p className="text-sm leading-6 text-slate-600">
                A community initiative where practical support meets
                compassion, personal choice, and respect.
              </p>

              <a
                href="#shop4free-how-it-works"
                className="group mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.13em] text-brand-blue-dark transition-colors hover:text-brand-cyan sm:text-xs"
              >
                Discover how it works
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.06)}
          className="grid overflow-hidden bg-brand-blue-dark lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div className="group relative min-h-[330px] overflow-hidden sm:min-h-[440px] lg:min-h-[500px]">
            <Image
              src="/images/shop4free/story.png"
              alt="Shop4Free community outreach in action"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className={`object-cover object-center ${
                reduceMotion
                  ? ""
                  : "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
              }`}
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#071744]/75 via-transparent to-[#071744]/15"
            />

            <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
              <span className="inline-flex items-center gap-2 border border-white/25 bg-[#071744]/45 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Compassion in action
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-[10px]">
                The heart of Shop4Free
              </p>

              <p className="mt-2 max-w-lg text-2xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                Help people feel seen, valued, and supported.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 border border-white/20 sm:inset-5"
            />
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-9 lg:p-8 xl:p-10">
            <div>
              <div className="flex items-center gap-2 text-brand-gold">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Our purpose
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                A supermarket with a bigger purpose.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
                Beneficiaries choose essentials for their own households,
                supported by a community that cares.
              </p>
            </div>

            <div className="mt-8 border-t border-white/15 pt-5">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-bold text-white">
                    Essentials with empathy
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Food, clothing, and household needs.
                  </p>
                </div>
              </div>

              <a
                href="#shop4free-how-it-works"
                className="group mt-6 flex min-h-12 items-center justify-between gap-3 bg-brand-gold px-4 py-3 text-xs font-extrabold text-brand-blue-dark transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
              >
                Explore the initiative
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.04)}
          className="grid gap-5 border-b border-brand-blue-dark/15 py-9 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:py-11"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-[76px] w-[94px] shrink-0 flex-col justify-center bg-brand-blue-dark px-3 text-white">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-brand-gold">
                Since
              </span>
              <span className="text-3xl font-black leading-none tracking-[-0.06em]">
                2011
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-brand-cyan">
                <CalendarOutlined />
                <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                  The beginning
                </span>
              </div>
              <p className="mt-2 text-sm font-bold text-brand-blue-dark">
                Good Friday · April
              </p>
            </div>
          </div>

          <div className="max-w-xl sm:justify-self-end">
            <p className="text-lg font-bold leading-snug tracking-[-0.025em] text-brand-blue-dark sm:text-xl">
              Pioneered by Global Harvest Church to support families facing
              financial hardship.
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal()} className="pt-10 sm:pt-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-cyan sm:text-[10px]">
                What guides us
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-brand-blue-dark sm:text-3xl">
                Compassion in practice.
              </h3>
            </div>

            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Three guiding principles
            </span>
          </div>

          <div className="grid gap-px border border-brand-blue-dark/10 bg-brand-blue-dark/10 sm:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.article
                  key={principle.number}
                  {...reveal(index * 0.07)}
                  className="group relative bg-[#f8f7f3] p-5 transition-colors duration-300 hover:bg-white sm:p-6 lg:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand-cyan">
                      {principle.number}
                    </span>

                    <Icon className="text-lg text-brand-blue-dark transition-colors duration-300 group-hover:text-brand-cyan" />
                  </div>

                  <h4 className="mt-5 text-lg font-extrabold tracking-[-0.035em] text-brand-blue-dark">
                    {principle.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {principle.description}
                  </p>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-gold transition-all duration-500 group-hover:w-full"
                  />
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.05)}
          className="relative mt-12 overflow-hidden bg-brand-blue-dark sm:mt-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/[0.08] sm:-right-5 sm:-top-32 sm:h-80 sm:w-80"
          />

          <div className="relative flex flex-col gap-6 p-6 sm:p-9 md:flex-row md:items-center md:justify-between lg:p-11">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-brand-gold">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  The purpose remains
                </span>
              </div>

              <p className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                Everyone deserves to be seen.
              </p>

              <p className="mt-2 text-sm text-white/60">
                Practical help. Personal choice. Human dignity.
              </p>
            </div>

            <a
              href="#shop4free-how-it-works"
              className="group inline-flex min-h-12 shrink-0 items-center justify-between gap-5 bg-brand-gold px-5 py-3 text-xs font-extrabold text-brand-blue-dark transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark md:min-w-[205px]"
            >
              See how it works
              <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
