"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartFilled, YoutubeFilled } from "@ant-design/icons";


export const ContactConnect = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-dark text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/connect/connect.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/90 to-brand-blue-dark/65"
      />

      <div className="gh-container mx-auto w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:px-12 lg:py-20 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center lg:gap-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              <HeartFilled />
              You belong here
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              The conversation doesn&apos;t end here.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Until we connect personally, you can worship with us online,
              explore our messages, and stay connected with the Global Harvest
              Church family.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@gharvestchurch"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-blue-dark transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
          >
            <YoutubeFilled className="text-lg" />
            Worship with us
            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}