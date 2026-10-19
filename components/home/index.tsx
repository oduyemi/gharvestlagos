
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, FacebookFilled, InstagramFilled, YoutubeFilled } from "@ant-design/icons";

const heroSlides = [
  "/images/hero/homehero1.jpg",
  "/images/hero/homehero2.jpg",
  "/images/hero/homehero3.jpg",
  "/images/hero/homehero4.jpeg",
  "/images/hero/homehero5.jpg",
  "/images/hero/homehero6.jpg",
  "/images/hero/homehero7.jpg",
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/gharvestchurch",
    icon: FacebookFilled,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@gharvestchurch",
    icon: YoutubeFilled,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gharvestchurch/",
    icon: InstagramFilled,
  },
];

export const Landing = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatically advance through the hero images.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.9,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[760px] w-full overflow-hidden bg-[#15171b] text-white sm:pt-5 md:pt-14 max-md:min-h-[100svh] lg:h-[100svh] lg:min-h-[700px] lg:max-h-[1100px]"
    >
      {/* ================================================== */}
      {/* AUTOMATIC BACKGROUND IMAGE SLIDESHOW                */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-30 overflow-hidden"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={heroSlides[activeSlide]}
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 1.045,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: shouldReduceMotion ? 0.15 : 1.3,
                ease: "easeInOut",
              },
              scale: {
                duration: shouldReduceMotion ? 0.15 : 7,
                ease: "linear",
              },
            }}
          >
            <Image
              src={heroSlides[activeSlide]}
              alt=""
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              className="object-cover object-[55%_center]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================================================== */}
      {/* IMAGE CONTRAST AND READABILITY                      */}
      {/* ================================================== */}

      {/* Neutral dark overlay — preserves natural photo colors */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-black/25"
      />

      {/* Left-side contrast for the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(12,15,20,0.78)_0%,rgba(12,15,20,0.62)_36%,rgba(12,15,20,0.22)_72%,rgba(12,15,20,0.35)_100%)]"
      />

      {/* Bottom and top contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(0deg,rgba(12,15,20,0.65)_0%,transparent_45%,rgba(12,15,20,0.18)_100%)]"
      />

      {/* Restrained cyan atmospheric highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-[18%] -z-10 h-80 w-80 rounded-full bg-brand-cyan/[0.07] blur-[110px] sm:h-[26rem] sm:w-[26rem]"
      />

      {/* ================================================== */}
      {/* DESKTOP LEFT RAIL                                   */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 top-0 z-0 hidden w-[4.5rem] border-r border-white/10 bg-black/10 lg:block xl:w-[5rem]"
      >
        <div className="absolute left-1/2 top-28 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-brand-gold/80 to-transparent" />
      </div>

      {/* ================================================== */}
      {/* HERO CONTENT                                        */}
      {/* ================================================== */}

      <div className="gh-container relative z-10 flex w-full flex-1 items-center pb-28 pt-32 sm:pb-32 sm:pt-36 lg:pb-24 lg:pl-[calc(4.5rem+2rem)] lg:pr-8 lg:pt-24 xl:pl-[calc(5rem+3rem)] xl:pr-12">
        <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,290px)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(250px,320px)] xl:gap-16 2xl:gap-20">
          {/* Main headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-w-0 max-w-4xl"
          >
            <motion.div variants={reveal} className="mb-6 sm:mb-8">
              <span className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/90 sm:gap-4 sm:text-[10px] sm:tracking-[0.3em] md:text-xs">
                <span className="h-px w-10 shrink-0 bg-brand-gold sm:w-14" />
                Global Harvest Church <br /> Maryland, Lagos
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={reveal}
              className="max-w-[850px] pl-4 text-[clamp(2.8rem,5.1vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-white sm:text-[clamp(3.5rem,6vw,5.8rem)] lg:text-[clamp(3.25rem,5.15vw,5.25rem)] xl:text-[clamp(4rem,5.1vw,5.8rem)]"
            >
              Discover
              <br />
              Purpose,
              <br />
              Experience
              <br />
              <span className="text-brand-gold">God.</span>
            </motion.h1>

            {/* Brand accent */}
            <motion.div
              variants={reveal}
              className="mt-6 flex h-[3px] w-20 gap-2 sm:mt-7 sm:w-24"
              aria-hidden="true"
            >
              <span className="h-full w-14 rounded-full bg-brand-gold sm:w-16" />
              <span className="h-full w-6 rounded-full bg-brand-cyan" />
            </motion.div>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-[470px] pl-4 text-sm leading-7 text-white/80 sm:mt-6 sm:text-base sm:leading-8 lg:text-[15px] xl:text-base"
            >
              Helping you discover and accomplish your God-given purpose
              through life-transforming experiences with Christ.
            </motion.p>

            {/* Mobile and tablet actions */}
            <motion.div
              variants={reveal}
              className="mt-7 flex max-w-md flex-col gap-3 sm:flex-row lg:hidden"
            >
              <Link
                href="/worship-online"
                className="group/action flex min-h-12 items-center justify-between gap-4 border border-brand-gold bg-brand-gold px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#18202a] transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#18202a]"
              >
                Worship Online
                <ArrowRightOutlined className="transition-transform duration-300 group-hover/action:translate-x-1" />
              </Link>

              <Link
                href="/service-ministries"
                className="group/action flex min-h-12 items-center justify-between gap-4 border border-white/40 bg-black/20 px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-brand-cyan hover:bg-brand-cyan hover:text-[#071744]"
              >
                Service Ministries
                <ArrowRightOutlined className="transition-transform duration-300 group-hover/action:translate-x-1" />
              </Link>

              <Link
                href="/events"
                className="group/action flex min-h-12 items-center justify-between gap-4 border border-white/40 bg-black/20 px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors duration-300 hover:border-brand-cyan hover:bg-brand-cyan hover:text-[#071744]"
              >
                Upcoming Events
                <ArrowRightOutlined className="transition-transform duration-300 group-hover/action:translate-x-1" />
              </Link>
            </motion.div>

            {/* Church values */}
            <motion.div
              variants={reveal}
              className="mt-7 flex items-center gap-3 border-t border-white/20 pt-5 sm:mt-9 sm:pt-6 lg:mt-8 xl:mt-10"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
              />
              <p className="mb-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-[10px] sm:tracking-[0.24em]">
                Love. Faith. Purpose.
              </p>
            </motion.div>
          </motion.div>

          {/* Desktop calls to action */}
          <motion.aside
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                x: shouldReduceMotion ? 0 : 16,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  delay: shouldReduceMotion ? 0 : 0.4,
                  duration: shouldReduceMotion ? 0.01 : 0.65,
                },
              },
            }}
            className="hidden min-w-0 w-full max-w-[320px] justify-self-end pb-1 lg:block"
            aria-label="Explore Global Harvest Church"
          >
            <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/65 xl:text-[10px]">
              Discover More
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/worship-online"
                className="group/action flex min-h-[62px] items-center justify-between gap-3 border border-white/65 bg-black/15 px-5 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-[#18202a] xl:min-h-[68px] xl:px-6"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.17em] xl:text-[10px] xl:tracking-[0.2em]">
                  Worship Online
                </span>
                <ArrowRightOutlined className="shrink-0 text-xs transition-transform duration-300 group-hover/action:translate-x-1" />
              </Link>

              <Link
                href="/service-ministries"
                className="group/action flex min-h-[62px] items-center justify-between gap-3 border border-white/65 bg-black/15 px-5 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-[#18202a] xl:min-h-[68px] xl:px-6"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.17em] xl:text-[10px] xl:tracking-[0.2em]">
                  Service Ministries
                </span>
                <ArrowRightOutlined className="shrink-0 text-xs transition-transform duration-300 group-hover/action:translate-x-1" />
              </Link>

              <Link
                href="/events"
                className="group/action flex min-h-[62px] items-center justify-between gap-3 border border-white/65 bg-black/15 px-5 text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-[#18202a] xl:min-h-[68px] xl:px-6"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.17em] xl:text-[10px] xl:tracking-[0.2em]">
                  Upcoming Events
                </span>
                <ArrowRightOutlined className="shrink-0 text-xs transition-transform duration-300 group-hover/action:translate-x-1" />
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* ================================================== */}
      {/* DESKTOP SOCIAL RAIL                                 */}
      {/* ================================================== */}

      <motion.aside
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute bottom-24 left-0 top-24 z-10 hidden w-[4.5rem] flex-col items-center justify-end gap-4 pb-4 lg:flex xl:w-[5rem]"
        aria-label="Follow Global Harvest Church"
      >
        <span className="mb-1 text-[9px] font-bold uppercase tracking-[0.24em] text-white/60 [writing-mode:vertical-rl]">
          Follow Us
        </span>

        <span className="h-7 w-px bg-gradient-to-b from-brand-gold/70 to-white/20" />

        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${label}`}
            className="grid h-9 w-9 place-items-center rounded-full text-white/75 transition-colors duration-300 hover:bg-brand-cyan/10 hover:text-brand-cyan"
          >
            <Icon className="text-base" />
          </a>
        ))}
      </motion.aside>

      {/* Mobile social links */}
      <div className="absolute bottom-5 right-4 z-10 flex items-center gap-2 sm:bottom-6 sm:right-6 lg:hidden">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${label}`}
            className="grid h-9 w-9 place-items-center border border-white/30 bg-black/30 text-sm text-white/90 backdrop-blur-sm transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Subtle brand finish */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-10 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"
      />
    </section>
  );
};
