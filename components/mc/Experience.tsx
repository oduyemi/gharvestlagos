
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { TeamOutlined, BookOutlined, HeartOutlined, GlobalOutlined, ArrowRightOutlined } from "@ant-design/icons";


const experiences = [
  {
    number: "01",
    title: "Real Fellowship",
    eyebrow: "DO LIFE TOGETHER",
    description:
      "Build friendships that go beyond Sunday. Share experiences, encourage one another, and discover the joy of belonging.",
    icon: TeamOutlined,
    accent: "#00A3E0",
  },
  {
    number: "02",
    title: "Growing in Faith",
    eyebrow: "BECOME MORE LIKE CHRIST",
    description:
      "Learn, ask questions, explore God's Word, and encourage one another as you grow in your walk with Christ.",
    icon: BookOutlined,
    accent: "#FFC72C",
  },
  {
    number: "03",
    title: "Prayer & Care",
    eyebrow: "YOU ARE NOT ALONE",
    description:
      "Find people who will stand with you in prayer, celebrate your victories, and offer encouragement through life's challenges.",
    icon: HeartOutlined,
    accent: "#00A859",
  },
  {
    number: "04",
    title: "Living on Mission",
    eyebrow: "MAKE A DIFFERENCE",
    description:
      "Put faith into action through kindness, practical support, and care for the people and communities around you.",
    icon: GlobalOutlined,
    accent: "#41B6E6",
  },
];

export const MCExperience = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.12,
    },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.5,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      aria-labelledby="mc-experience-heading"
      className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 lg:py-24"
    >
      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          {...reveal()}
          className="mb-9 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-brand-cyan" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-cyan-dark sm:text-xs">
                Life beyond Sunday
              </span>
            </div>

            <h2
              id="mc-experience-heading"
              className="text-3xl font-black leading-[1.08] tracking-[-0.05em] text-brand-blue-dark sm:text-4xl lg:text-5xl"
            >
              Faith in action.
              <span className="block text-brand-cyan">
                Life in community.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base md:pb-1">
            More than meeting together, we learn to love, grow, pray, and serve
            as one family. This is what shared faith looks like in everyday life.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          <motion.div
            {...reveal(0.05)}
            className="relative min-h-[440px] overflow-hidden rounded-[1.75rem] bg-brand-blue-dark sm:min-h-[520px] lg:min-h-full"
          >
            <Image
              src="/images/mc/missional.jpg"
              alt="People coming together in a missional community"
              fill
              priority={false}
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.035] motion-reduce:transform-none"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#071744]/95 via-[#071744]/25 to-transparent"
            />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-[#071744]/45 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md sm:left-6 sm:top-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
              Together on purpose
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">
                More than a gathering
              </span>

              <h3 className="mt-3 max-w-md text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                There&apos;s something powerful about doing life together.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                Real people. Honest conversations. A faith that makes a
                difference.
              </p>

              <div className="mt-6 flex items-center gap-2">
                <span className="h-1 w-8 rounded-full bg-brand-cyan" />
                <span className="h-1 w-3 rounded-full bg-white/50" />
                <span className="h-1 w-3 rounded-full bg-white/30" />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col divide-y divide-slate-200/90 rounded-[1.75rem] border border-slate-200/80 bg-white px-5 sm:px-7 lg:px-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.number}
                  {...reveal(index * 0.07)}
                  className="group relative py-5 first:pt-6 last:pb-6 sm:py-6"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex shrink-0 flex-col items-center gap-2 pt-1">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FA] text-brand-blue-dark transition-colors duration-300 group-hover:bg-brand-blue-dark group-hover:text-white motion-reduce:transition-none"
                      >
                        <Icon className="text-lg" />
                      </span>

                      <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400">
                        {experience.number}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <h3 className="text-lg font-extrabold tracking-[-0.03em] text-brand-blue-dark sm:text-xl">
                          {experience.title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: experience.accent }}
                        />
                      </div>

                      <p className="mt-1.5 text-[9px] font-extrabold tracking-[0.15em] text-brand-cyan-dark sm:text-[10px]">
                        {experience.eyebrow}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          {...reveal(0.1)}
          className="relative mt-7 overflow-hidden rounded-[1.5rem] bg-brand-blue-dark px-6 py-7 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:px-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-52 w-52 rounded-full border-[30px] border-white/[0.06]"
          />

          <div className="relative">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
              Your place in the story
            </p>

            <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
              You don&apos;t have to do life alone.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              Find your community and take the next step toward meaningful
              connection.
            </p>
          </div>

          <Link
            href="/mc-live/#find-your-community"
            className="group relative mt-5 inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-extrabold text-brand-blue-dark transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/40 sm:w-auto lg:mt-0 motion-reduce:transition-none"
          >
            Find your people
            <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
