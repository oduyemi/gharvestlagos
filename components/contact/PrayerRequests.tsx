
"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, HeartFilled, HeartOutlined, MessageOutlined } from "@ant-design/icons";


export const PrayerRequests = () => {
  const reduceMotion = useReducedMotion();

  const goToPrayerForm = () => {
    const form = document.querySelector<HTMLFormElement>(
      "#contact-form form",
    );
    const topic = form?.elements.namedItem("topic");

    if (topic instanceof HTMLSelectElement) {
      topic.value = "Prayer request";
      topic.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

  return (
    <section
      id="prayer-requests"
      aria-labelledby="prayer-requests-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-brand-gold/[0.10] blur-3xl"
      />

      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Prayer illustration */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-brand-blue-dark p-7 text-white sm:p-10 lg:min-h-[390px] lg:p-11">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-32 w-32 rounded-full border border-white/[0.08]"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-brand-cyan/15 blur-2xl"
              />

              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold text-brand-blue-dark">
                <HeartFilled className="text-xl" />
              </div>

              <p className="relative mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                You are not alone
              </p>

              <blockquote className="relative mt-4 max-w-md text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                “Carry each other&apos;s burdens.”
              </blockquote>

              <p className="relative mt-3 text-xs font-medium text-white/55">
                Galatians 6:2
              </p>

              <div className="relative mt-8 flex items-center gap-3 border-t border-white/15 pt-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-brand-gold">
                  <HeartOutlined />
                </span>
                <p className="max-w-xs text-xs leading-6 text-white/70 sm:text-sm">
                  Whatever you are facing, there is space for you to share
                  and be supported.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Prayer message */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan sm:text-xs">
              <span className="h-px w-7 bg-brand-gold" />
              Prayer & support
            </div>

            <h2
              id="prayer-requests-heading"
              className="mt-5 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-blue-dark sm:text-4xl lg:text-5xl"
            >
              Some things are easier when{" "}
              <span className="text-brand-cyan">we face them together.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              You don&apos;t have to find the perfect words or carry
              everything on your own. If you&apos;re facing a difficult
              season, celebrating a breakthrough, or simply need someone
              to pray with you, our church family would be honoured to
              stand with you.
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  title: "Share what is on your heart",
                  description:
                    "Tell us as much or as little as you feel comfortable sharing.",
                },
                {
                  title: "Let us stand with you",
                  description:
                    "Send your request through our contact form so our team can receive it.",
                },
                {
                  title: "You are welcome here",
                  description:
                    "Your request matters, whether it is personal, practical, or a reason to give thanks.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-3.5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-cyan/10 text-xs font-bold text-brand-cyan">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-brand-blue-dark">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact-form"
                onClick={goToPrayerForm}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-brand-blue-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
              >
                Share a prayer request
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </a>

              <p className="flex items-center justify-center gap-2 text-xs text-slate-500 sm:justify-start">
                <MessageOutlined className="text-brand-cyan" />
                We&apos;re glad you reached out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
