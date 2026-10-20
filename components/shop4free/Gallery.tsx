"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  ExpandOutlined,
  HeartFilled,
  PlusOutlined,
} from "@ant-design/icons";

const galleryImages = [
  { src: "/images/shop4free/one.PNG", alt: "Shop4Free community outreach moment" },
  { src: "/images/shop4free/two.PNG", alt: "Shop4Free in action" },
  { src: "/images/shop4free/three.PNG", alt: "Community members at Shop4Free" },
  { src: "/images/shop4free/four.PNG", alt: "A moment of generosity and care" },
  { src: "/images/shop4free/five.PNG", alt: "Shop4Free community experience" },
  { src: "/images/shop4free/six.PNG", alt: "Volunteers serving the community" },
  { src: "/images/shop4free/seven.jpg", alt: "Shop4Free outreach activities" },
  { src: "/images/shop4free/eight.PNG", alt: "People coming together through Shop4Free" },
  { src: "/images/shop4free/nine.jpg", alt: "A memorable Shop4Free moment" },
  { src: "/images/shop4free/ten.jpg", alt: "Compassion in action" },
  { src: "/images/shop4free/eleven.jpg", alt: "Shop4Free community gathering" },
  { src: "/images/shop4free/twelve.jpg", alt: "Sharing hope through Shop4Free" },
  { src: "/images/shop4free/thirteen.jpg", alt: "Shop4Free outreach memories" },
  { src: "/images/shop4free/fourteen.jpg", alt: "A community united by generosity" },
  { src: "/images/shop4free/fifteen.jpg", alt: "Dignity, kindness, and community" },
];

const INITIAL_COUNT = 6;

export default function Shop4FreeGallery() {
  const reduceMotion = useReducedMotion();
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const closeGallery = useCallback(() => setActiveImage(null), []);

  const showPrevious = useCallback(() => {
    setActiveImage((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeGallery, showPrevious, showNext]);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);

  return (
    <>
      <section
        id="shop4free-gallery"
        aria-labelledby="shop4free-gallery-title"
        className="relative overflow-hidden bg-white px-4 py-10 sm:py-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-cyan/[0.06] blur-3xl"
        />

        <div className="relative mx-auto max-w-[780px]">
          <motion.header
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-5 flex items-end justify-between gap-3 sm:mb-6"
          >
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-brand-blue">
                  The Shop4Free story
                </span>
              </div>

              <h2
                id="shop4free-gallery-title"
                className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.055em] text-brand-blue sm:text-[2.65rem]"
              >
                Life in{" "}
                <span className="font-serif font-normal italic text-brand-cyan">
                  moments.
                </span>
              </h2>

              <p className="mt-2 max-w-sm text-xs leading-5 text-slate-500 sm:text-[13px]">
                Stories of generosity, dignity, and the people who make a
                difference.
              </p>
            </div>

            <div className="mb-1 flex shrink-0 items-center gap-1.5 font-serif text-sm">
              <span className="font-semibold text-brand-blue">01</span>
              <span className="text-brand-gold">/</span>
              <span className="text-slate-400">
                {String(galleryImages.length).padStart(2, "0")}
              </span>
            </div>
          </motion.header>

          <div className="rounded-[18px] border border-slate-200/80 bg-white p-2 shadow-[0_18px_55px_-38px_rgba(7,23,68,0.4)] sm:rounded-[22px] sm:p-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
              {visibleImages.map((image, index) => {
                const featured = index === 0;

                return (
                  <motion.button
                    key={image.src}
                    layout={!reduceMotion}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.3,
                      ease: "easeOut",
                    }}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View photo ${index + 1}: ${image.alt}`}
                    className={`group relative block w-full overflow-hidden rounded-lg bg-brand-blue-light text-left outline-none ring-brand-cyan focus-visible:ring-2 focus-visible:ring-offset-2 sm:rounded-xl ${
                      featured
                        ? "col-span-2 aspect-[1.5/1] sm:row-span-3 sm:aspect-auto sm:min-h-[310px]"
                        : "aspect-[1.2/1]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        featured
                          ? "(max-width: 639px) 90vw, 370px"
                          : "(max-width: 639px) 44vw, 180px"
                      }
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    <div
                      className={`absolute inset-0 ${
                        featured
                          ? "bg-gradient-to-t from-[#06142F]/90 via-[#06142F]/10 to-[#06142F]/5"
                          : "bg-gradient-to-t from-[#06142F]/70 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                      }`}
                    />

                    {featured ? (
                      <>
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#071744]/65 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-xl sm:left-4 sm:top-4">
                          Moments that matter
                        </span>

                        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                          <span className="mb-2 block text-[8px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                            Community · Compassion
                          </span>

                          <p className="max-w-[270px] text-sm font-semibold leading-5 text-white sm:text-lg sm:leading-6">
                            {image.alt}
                          </p>

                          <span className="mt-3 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80">
                            Explore moment
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/35 transition-all duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue">
                              <ArrowRightOutlined className="text-[9px]" />
                            </span>
                          </span>
                        </div>

                        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white opacity-100 backdrop-blur-md sm:right-4 sm:top-4 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                          <ExpandOutlined className="text-[11px]" />
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="absolute left-2 top-2 flex h-5 min-w-5 items-center justify-center rounded-md border border-white/20 bg-[#071744]/50 px-1 text-[8px] font-semibold text-white backdrop-blur-md">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-md border border-white/20 bg-[#071744]/40 text-white opacity-100 backdrop-blur-md sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                          <ExpandOutlined className="text-[10px]" />
                        </span>

                        <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-2 text-[9px] font-medium leading-3.5 text-white sm:p-2.5 sm:text-[10px] sm:leading-4">
                          {image.alt}
                        </p>

                        <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand-gold transition-transform duration-300 group-hover:scale-x-100" />
                      </>
                    )}
                  </motion.button>
                );
              })}

              {!showAll && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.12 }}
                  className="relative flex aspect-[1.2/1] flex-col items-center justify-center overflow-hidden rounded-lg bg-brand-blue px-2 text-center sm:rounded-xl"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-12 -right-10 h-32 w-32 rounded-full border border-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 -right-6 h-24 w-24 rounded-full border border-brand-cyan/20"
                  />

                  <div className="relative flex items-center gap-2">
                    <span className="h-px w-4 bg-brand-gold/80" />
                    <HeartFilled className="text-sm text-brand-gold" />
                    <span className="h-px w-4 bg-brand-gold/80" />
                  </div>

                  <p className="relative mt-3 text-[10px] font-semibold tracking-[0.24em] text-white sm:text-xs">
                    SHOP4FREE
                  </p>

                  <p className="relative mt-2 max-w-[110px] text-[8px] leading-4 text-white/60 sm:text-[9px]">
                    A community built on kindness.
                  </p>

                  <span className="relative mt-3 h-px w-6 bg-brand-gold/70" />
                </motion.div>
              )}
            </div>

            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-1 pt-3 sm:px-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-brand-blue">
                  <ExpandOutlined className="text-[11px]" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold text-brand-blue">
                    The moments collection
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-400">
                    {visibleImages.length} of {galleryImages.length} photographs
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                aria-expanded={showAll}
                className="inline-flex min-h-9 items-center gap-2 rounded-full border border-brand-blue/15 px-3.5 py-2 text-[10px] font-semibold text-brand-blue transition-all duration-200 hover:border-brand-cyan/50 hover:bg-brand-cyan-light"
              >
                {showAll ? (
                  <CloseOutlined />
                ) : (
                  <PlusOutlined className="text-brand-cyan-dark" />
                )}
                {showAll ? "Show less" : "View all photos"}
                {!showAll && (
                  <span className="text-slate-400">
                    +{galleryImages.length - INITIAL_COUNT}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            key="shop4free-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040B19]/95 p-3 backdrop-blur-xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Shop4Free photo gallery"
            onClick={closeGallery}
          >
            <button
              type="button"
              onClick={closeGallery}
              aria-label="Close gallery"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-brand-cyan/60 hover:bg-white/10 sm:right-6 sm:top-6"
            >
              <CloseOutlined />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-brand-cyan/60 hover:bg-brand-blue sm:left-5"
            >
              <ArrowLeftOutlined />
            </button>

            <div
              className="flex h-[78vh] max-h-[800px] w-full max-w-5xl flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1">
                <Image
                  key={galleryImages[activeImage].src}
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex w-full items-center justify-between gap-4 border-t border-white/10 pt-4 text-white">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium sm:text-base">
                    {galleryImages[activeImage].alt}
                  </p>
                  <p className="mt-1 text-[9px] font-semibold tracking-[0.2em] text-white/45">
                    SHOP4FREE · {String(activeImage + 1).padStart(2, "0")} /{" "}
                    {String(galleryImages.length).padStart(2, "0")}
                  </p>
                </div>

                <HeartFilled className="shrink-0 text-brand-gold" />
              </div>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:border-brand-cyan/60 hover:bg-brand-blue sm:right-5"
            >
              <ArrowRightOutlined />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}