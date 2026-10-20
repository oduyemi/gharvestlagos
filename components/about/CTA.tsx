
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, EnvironmentOutlined, HeartFilled } from "@ant-design/icons";


export const AboutCTA = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden bg-brand-blue-dark py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
            },
          }}
          className="relative"
        >
          {/* Main CTA */}
          <div className="grid items-center gap-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-7 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:p-9 lg:rounded-[2rem] lg:p-10">
            {/* Content */}
            <div className="relative z-10">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-gold sm:text-xs">
                  <HeartFilled />
                  You belong here
                </span>
              </motion.div>

              <motion.h2
                id="about-cta-heading"
                variants={fadeUp}
                className="mt-5 max-w-xl text-[2rem] font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.8rem]"
              >
                There&apos;s a place for you{" "}
                <span className="font-serif italic font-normal text-brand-gold">
                  here.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base"
              >
                Come as you are. Find community, grow in faith, and discover
                the purpose God has for your life.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Link
                  href="#our-services"
                  className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-brand-gold px-5 py-3 text-sm font-bold text-brand-blue-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
                >
                  Plan your visit
                  <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-cyan hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>

            {/* Compact image panel */}
            <motion.div
              variants={fadeUp}
              className="relative min-h-[220px] overflow-hidden rounded-[1.15rem] sm:min-h-[260px] md:min-h-[300px]"
            >
              <Image
                src="/images/about/cta.jpg"
                alt="Church community gathering together"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-brand-blue-dark/10 to-transparent" />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                      Faith. Family. Purpose.
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      Grow with us.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location strip */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-col gap-4 border-t border-white/10 px-1 pt-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <EnvironmentOutlined className="text-brand-cyan" />
                <span>Maryland, Lagos</span>
              </div>

              <span className="hidden h-4 w-px bg-white/20 sm:block" />

              <Link
                href="tel:+2349064318797"
                className="text-sm text-white/70 transition-colors hover:text-brand-gold"
              >
                +234 906 431 8797
              </Link>
            </div>

            <p className="text-xs font-medium tracking-wide text-white/50">
              Discover purpose. Experience God.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
