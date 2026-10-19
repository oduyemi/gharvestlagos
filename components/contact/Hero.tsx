"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownOutlined, HeartFilled } from "@ant-design/icons";


export const ContactHero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue-dark text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/hero/contact.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/85 to-brand-blue-dark/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-blue-dark/40 to-transparent"
      />

      <div className="gh-container mx-auto w-full px-5 py-20 sm:px-8 sm:py-24 md:px-10 lg:px-12 lg:py-28 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm sm:text-xs">
            <HeartFilled className="text-brand-gold" />
            We'd love to hear from you
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s start a
            <span className="block text-brand-gold">conversation.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            Have a question, need prayer, or want to find your place in our
            church family? Whatever brings you here, there&apos;s room for you
            at Global Harvest Church.
          </p>

          <a
            href="#contact-form"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-blue-dark transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
          >
            Get in touch
            <ArrowDownOutlined className="transition-transform group-hover:translate-y-1" />
          </a>
        </motion.div>

        <div className="mt-12 flex items-center gap-3 sm:mt-16">
          <span className="h-px w-10 bg-brand-gold" />
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65 sm:text-xs">
            Love. Faith. Purpose.
          </p>
        </div>
      </div>
    </section>
  );
}