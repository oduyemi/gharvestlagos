
"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownOutlined,
  ArrowRightOutlined,
  HeartFilled,
  HeartOutlined,
  MessageOutlined,
  TeamOutlined,
} from "@ant-design/icons";


const options = [
    {
      number: "01",
      icon: MessageOutlined,
      eyebrow: "WE'RE HAPPY TO HELP",
      title: "General enquiries",
      href: "/contact/contact-form",
      description:
        "Questions about our church, gatherings, or ministries? We'd love to help you find the right answers.",
      action: "Talk to our team",
      topic: "General enquiry",
      featured: false,
      accent: "bg-brand-cyan",
    },
    {
      number: "02",
      icon: HeartFilled,
      eyebrow: "YOU DON'T HAVE TO WALK ALONE",
      title: "Prayer & support",
      href: "/contact/#prayer-requests",
      description:
        "Whatever you're walking through, you don't have to face it alone. Share what's on your heart and let us stand with you in prayer.",
      action: "Share a prayer request",
      topic: "Prayer request",
      featured: true,
      accent: "bg-brand-gold",
    },
    {
      number: "03",
      icon: TeamOutlined,
      eyebrow: "THERE'S A PLACE FOR YOU",
      title: "Find your community",
      href: "/contact/#next-step",
      description:
        "Build meaningful relationships, grow in faith, and discover where you belong in our church family.",
      action: "Take your next step",
      topic: "Getting connected",
      featured: false,
      accent: "bg-brand-green",
    },
  ];
  
export const ContactOptions = () => {
  const reduceMotion = useReducedMotion();

  const selectTopic = (topic: string) => {
    const form = document.querySelector<HTMLFormElement>(
      "#contact-form form",
    );
    const topicSelect = form?.elements.namedItem("topic");

    if (topicSelect instanceof HTMLSelectElement) {
      topicSelect.value = topic;
      topicSelect.dispatchEvent(
        new Event("change", { bubbles: true }),
      );
    }
  };

  const revealOptions = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <section
      aria-labelledby="contact-options-heading"
      className="relative isolate overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-36 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-cyan/[0.055] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand-gold/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(#0b2265 0.7px, transparent 0.7px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Section introduction */}
        <motion.div
          {...revealOptions}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-[1.1fr_0.7fr] md:items-end md:gap-12"
        >
          <div>
            <h2
              id="contact-options-heading"
              className="mt-5 max-w-2xl text-[2.35rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-brand-blue-dark sm:text-5xl lg:text-[3.6rem]"
            >
              Every great connection
              <span className="mt-1 block">
                starts with{" "}
                <span className="relative inline-block text-brand-cyan">
                  a conversation.
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-2/3 rounded-full bg-brand-gold sm:-bottom-1.5"
                  />
                </span>
              </span>
            </h2>
          </div>

          <div className="max-w-md md:justify-self-end md:pb-1">
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              You don't need to have everything figured out before reaching
              out. Whether you have a question, need prayer, or are looking
              for community, we'd love to hear from you.
            </p>
          </div>
        </motion.div>

        {/* Contact pathways */}
        
<div className="mt-10 grid items-stretch gap-5 sm:mt-14 md:grid-cols-3 md:gap-5 lg:gap-6">
  {options.map((option, index) => {
    const Icon = option.icon;

    return (
        <motion.a
        key={option.number}
        href={option.href}
        onClick={() => {
          if (option.topic === "General enquiry") {
            selectTopic(option.topic);
          }
        }}
        className={`group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border p-6 outline-none transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4 sm:p-7 lg:min-h-[350px] lg:p-8 ${
          option.featured
            ? "border-brand-blue-dark bg-brand-blue-dark text-white shadow-[0_20px_50px_-28px_rgba(7,23,68,0.65)] hover:shadow-[0_28px_60px_-28px_rgba(7,23,68,0.75)]"
            : "border-slate-200/80 bg-white text-brand-blue-dark shadow-[0_8px_30px_-24px_rgba(11,34,101,0.2)] hover:border-slate-300 hover:shadow-[0_24px_50px_-30px_rgba(11,34,101,0.25)]"
        }`}
      >
        {/* Accent strip */}
        <span
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-1 ${option.accent} origin-left transition-transform duration-500 group-hover:scale-x-100 ${
            option.featured ? "scale-x-100" : "scale-x-0"
          }`}
        />

        {/* Decorative background glow */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 ${
            option.featured
              ? "bg-brand-cyan/20 opacity-70 group-hover:opacity-100"
              : "bg-brand-cyan/10 opacity-0 group-hover:opacity-100"
          }`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
              option.featured
                ? "bg-white/10 text-brand-gold ring-1 ring-white/10"
                : "bg-brand-cyan/10 text-brand-cyan"
            }`}
          >
            <Icon className="text-xl" />
          </div>

          <span
            className={`pt-1 text-xs font-bold tracking-[0.16em] ${
              option.featured ? "text-white/35" : "text-slate-300"
            }`}
          >
            {option.number}
          </span>
        </div>

        <div className="relative mt-8">
          <p
            className={`text-[9px] font-bold uppercase leading-5 tracking-[0.16em] sm:text-[10px] ${
              option.featured ? "text-brand-gold" : "text-slate-400"
            }`}
          >
            {option.eyebrow}
          </p>

          <h3
            className={`mt-2 text-2xl font-bold tracking-tight ${
              option.featured ? "text-white" : "text-brand-blue-dark"
            }`}
          >
            {option.title}
          </h3>

          <p
            className={`mt-3 text-sm leading-7 ${
              option.featured ? "text-white/70" : "text-slate-600"
            }`}
          >
            {option.description}
          </p>
        </div>

        <div
          className={`relative mt-auto flex items-center justify-between gap-3 border-t pt-5 ${
            option.featured ? "border-white/15" : "border-slate-100"
          }`}
        >
          <span
            className={`text-xs font-bold sm:text-sm ${
              option.featured
                ? "text-white transition-colors group-hover:text-brand-gold"
                : "text-brand-blue-dark transition-colors group-hover:text-brand-cyan"
            }`}
          >
            {option.action}
          </span>

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              option.featured
                ? "bg-brand-gold text-brand-blue-dark group-hover:bg-white"
                : "border border-slate-200 bg-white text-brand-blue-dark group-hover:border-brand-blue-dark group-hover:bg-brand-blue-dark group-hover:text-white"
            }`}
          >
            <ArrowRightOutlined className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </motion.a>
    );
  })}
</div>

        {/* Reassurance banner */}
        <motion.div
          {...revealOptions}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative mt-6 overflow-hidden rounded-2xl border border-brand-blue-dark/[0.07] bg-white p-5 shadow-[0_10px_35px_-28px_rgba(11,34,101,0.2)] sm:mt-7 sm:px-7 sm:py-6"
        >
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-brand-gold"
          />

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-start gap-3.5 sm:items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-blue-dark">
                <HeartOutlined className="text-lg" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-brand-blue-dark sm:text-base">
                  Come as you are. You're welcome here.
                </h3>
                <p className="mt-1 max-w-xl text-xs leading-6 text-slate-500 sm:text-sm">
                  No perfect words needed. Choose a topic and tell us a
                  little about how we can help.
                </p>
              </div>
            </div>

            <a
              href="#contact-form"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2.5 self-start rounded-lg bg-brand-blue-dark px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 sm:self-center sm:text-sm"
            >
              <span>Send us a message</span>
              <ArrowDownOutlined className="text-[11px] transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
