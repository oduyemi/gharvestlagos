
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons";


export const Shop4FreeHero = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative isolate flex min-h-[590px] items-center overflow-hidden bg-brand-blue-dark text-white sm:min-h-[650px] lg:min-h-[700px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/images/hero/shop4free.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-blue-dark/[0.97] via-brand-blue-dark/80 to-brand-blue-dark/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-blue-dark/65 via-transparent to-brand-blue-dark/10"
      />

      <div className="gh-container mx-auto w-full px-5 py-24 sm:px-8 sm:py-28 md:px-10 lg:px-12 xl:px-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
            Global Harvest Church Maryland, Lagos
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            A little relief.
            <span className="mt-2 block text-brand-gold">
              A lot of hope.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
            Shop4Free is our expression of compassion in action — a community
            outreach initiative offering struggling families and everyday
            community workers practical support, dignity, and renewed hope.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#shop4free-story"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-blue-dark transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
            >
              Discover our story
              <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#shop4free-get-involved"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              Be part of the impact
            </a>
          </div>

          
        </motion.div>
      </div>

      <a
        href="#shop4free-story"
        aria-label="Scroll to the Shop4Free story"
        className="absolute bottom-6 right-6 hidden h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10 sm:flex lg:bottom-10 lg:right-10"
      >
        <ArrowDownOutlined />
      </a>
    </section>
  );
};
