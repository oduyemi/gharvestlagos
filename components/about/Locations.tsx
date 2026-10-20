"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  CompassOutlined,
  HeartFilled,
  StarFilled,
  CalendarOutlined,
} from "@ant-design/icons";

const services = [
  {
    number: "01",
    title: "Business Service",
    time: "8:00 AM",
    description: "Begin your Sunday with worship, prayer, and the Word.",
    tag: "Early gathering",
  },
  {
    number: "02",
    title: "Celebration Service",
    time: "10:00 AM",
    description: "A joyful gathering for worship, fellowship, and spiritual growth.",
    tag: "Main celebration",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const AboutLocations = () =>{
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.15 },
        variants: reveal,
        transition: {
          duration: 0.65,
          ease: "easeOut" as const,
        },
      };

  return (
    <section
      id="our-services"
      className="relative isolate overflow-hidden bg-[#F8F7F2] py-16 sm:py-20 lg:py-28"
    >
      {/* Ambient background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full border border-[#10265C]/[0.07] sm:-right-20 sm:h-80 sm:w-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-[42%] h-64 w-64 rounded-full border border-[#00A3E0]/10 sm:-left-20 sm:h-80 sm:w-80"
      />

      {/* Consistent responsive horizontal padding */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section introduction */}
        <motion.div
          {...animationProps}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16"
        >
          <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-[#071744] sm:text-4xl md:text-5xl lg:text-6xl">
            Come for the Word.
            <span className="mt-1 block font-serif italic font-normal text-[#00A3E0]">
              Stay for the family.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
            There is a place for you here. Join us for meaningful worship,
            practical teaching, genuine community, and a faith that goes beyond
            Sunday.
          </p>
        </motion.div>

        {/* Main location and service layout */}
        <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-7 lg:grid-cols-12 lg:gap-8">
          {/* Location card */}
          <motion.div
            {...animationProps}
            className="relative isolate flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] bg-[#071744] p-6 text-white shadow-[0_24px_70px_-30px_rgba(7,23,68,0.45)] sm:rounded-[2rem] sm:p-8 md:p-10 lg:col-span-5 lg:p-9 xl:p-10"
          >
            {/* Decorative typography */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 top-8 select-none text-[8rem] font-black leading-none tracking-[-0.1em] text-white/[0.035] sm:-right-3 sm:text-[10rem] lg:text-[9rem] xl:text-[10rem]"
            >
              GH
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 top-24 h-48 w-48 rounded-full border border-white/[0.08] sm:-right-12 sm:h-60 sm:w-60"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-5 top-36 h-32 w-32 rounded-full border border-[#00A3E0]/20 sm:right-0 sm:h-40 sm:w-40"
            />

            <div className="relative z-10 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-white/85 sm:text-[11px]">
                <EnvironmentOutlined className="text-[#55D5FF]" />
                Find us
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC72C] text-[#071744]">
                <CompassOutlined className="text-lg" />
              </span>
            </div>

            <div className="relative z-10 mt-10 sm:mt-14 lg:mt-12 xl:mt-16">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#55D5FF]">
                Your Sunday destination
              </p>

              <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl lg:text-[2rem] xl:text-4xl">
                Your seat is waiting.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Walk in as you are. Leave encouraged, connected, and reminded
                that you are part of something bigger.
              </p>
            </div>

            <div className="relative z-10 mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:mt-10 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#55D5FF]">
                  <EnvironmentOutlined className="text-lg" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                    Our location
                  </p>

                  <address className="mt-2 text-sm font-medium not-italic leading-6 text-white sm:text-base">
                    378 Ikorodu Road,
                    <br />
                    Maryland, Lagos, Nigeria
                  </address>
                </div>
              </div>

              <div className="my-4 border-t border-white/10 sm:my-5" />

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#55D5FF]">
                  <PhoneOutlined className="text-lg" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                    Have a question?
                  </p>

                  <a
                    href="tel:+2349064318797"
                    className="mt-1 inline-block text-sm font-semibold text-white transition-colors hover:text-[#55D5FF] sm:text-base"
                  >
                    +234 906 431 8797
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 sm:mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=378+Ikorodu+Road+Maryland+Lagos+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#FFC72C] px-5 py-3 text-sm font-bold text-[#071744] transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC72C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071744] sm:w-auto sm:px-6"
              >
                Get directions
                <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/20 sm:bottom-8 sm:right-8"
            >
              <StarFilled className="text-lg" />
            </div>
          </motion.div>

          {/* Service schedule */}
          <motion.div
            {...animationProps}
            className="flex min-w-0 flex-col rounded-[1.75rem] border border-[#10265C]/[0.07] bg-white p-5 shadow-[0_20px_60px_-40px_rgba(7,23,68,0.24)] sm:rounded-[2rem] sm:p-7 md:p-9 lg:col-span-7 lg:p-8 xl:p-10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#00A3E0]">
                  <CalendarOutlined />
                  Every Sunday
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#071744] sm:text-3xl">
                  Pick your moment.
                </h3>

                <p className="mt-2 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Two opportunities to gather, worship, and grow together.
                  Choose the service that works best for you.
                </p>
              </div>

              <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#F0F8FF] px-3 py-2 text-xs font-semibold text-[#10265C]">
                <span className="h-2 w-2 rounded-full bg-[#00A859]" />
                You're welcome
              </span>
            </div>

            <div className="mt-7 space-y-4 sm:mt-9 sm:space-y-5">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: 18,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-[#10265C]/[0.08] bg-[#FAFBFD] p-4 transition-all duration-300 hover:border-[#00A3E0]/30 hover:bg-[#F5FAFF] hover:shadow-[0_12px_32px_-24px_rgba(0,163,224,0.5)] sm:p-5 md:p-6"
                >
                  <div className="flex items-start gap-3 sm:gap-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F6FC] text-sm font-bold text-[#087EA4] transition-colors duration-300 group-hover:bg-[#00A3E0] group-hover:text-white sm:h-12 sm:w-12">
                      {service.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <h4 className="text-base font-semibold leading-snug text-[#071744] sm:text-lg">
                            {service.title}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-slate-500">
                            {service.description}
                          </p>
                        </div>

                        <div className="shrink-0 sm:text-right">
                          <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold tabular-nums text-[#10265C] shadow-sm ring-1 ring-[#10265C]/[0.06] sm:text-base">
                            <ClockCircleOutlined className="text-[#00A3E0]" />
                            {service.time}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
                          {service.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-6 sm:pt-8">
              <div className="flex items-start gap-3 rounded-2xl bg-[#FFF8E7] p-4 sm:items-center sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/30 text-[#8A6200]">
                  <HeartFilled className="text-base" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-[#071744]">
                    Your first visit? We've got you.
                  </p>

                  <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                    Come as you are. Our church family will be happy to help
                    you find your way around.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Community section */}
        <motion.div
          {...animationProps}
          className="relative mt-6 overflow-hidden rounded-[1.75rem] bg-[#EAF5EC] p-5 sm:mt-8 sm:rounded-[2rem] sm:p-8 md:p-10 lg:mt-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-[#00A859]/10 sm:-right-6 sm:-top-20 sm:h-64 sm:w-64"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 right-[20%] h-40 w-40 rounded-full border border-[#00A859]/10 sm:h-52 sm:w-52"
          />

          <div className="relative z-10 grid min-w-0 grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#00A859]/15 bg-white/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#176B43] sm:text-xs">
                <TeamOutlined />
                Life beyond Sunday
              </span>

              <h3 className="mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#10265C] sm:text-3xl md:text-4xl lg:text-[2.65rem]">
                Faith grows stronger when we grow together.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#365647] sm:text-base sm:leading-8">
                Church is more than a Sunday gathering. Through our seven
                zones, we create opportunities to build meaningful
                relationships, support one another, and live out our faith
                together throughout the week.
              </p>
            </div>

            <div className="min-w-0 lg:col-span-4">
              <div className="rounded-2xl border border-[#00A859]/10 bg-white/75 p-5 sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDF4E4] text-[#087A45]">
                  <TeamOutlined className="text-xl" />
                </div>

                <p className="mt-5 text-xl font-semibold tracking-tight text-[#10265C] sm:text-2xl">
                  Find your people.
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Connect with a welcoming community and discover where you
                  belong.
                </p>

                <a
                  href="/our-zones"
                  className="group mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#087A45] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#065E36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087A45] focus-visible:ring-offset-2 sm:w-auto"
                >
                  Connect with us
                  <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          {...animationProps}
          className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#10265C]/10 pt-8 text-center sm:mt-12 sm:flex-row sm:text-left lg:mt-14 lg:pt-10"
        >
          <div>
            <p className="text-lg font-semibold tracking-tight text-[#071744] sm:text-xl">
              We can't wait to welcome you.
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Have a question before your visit? We'd love to hear from you.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-full border border-[#10265C]/15 bg-white px-6 py-3 text-sm font-semibold text-[#10265C] shadow-sm transition-all duration-300 hover:border-[#10265C] hover:bg-[#10265C] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A3E0] focus-visible:ring-offset-2 sm:w-auto"
          >
            Contact our team
            <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}