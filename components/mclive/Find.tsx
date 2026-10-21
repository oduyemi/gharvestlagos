"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  EnvironmentOutlined,
  HeartFilled,
  HeartOutlined,
  HomeOutlined,
  StarFilled,
  TeamOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const attendanceOptions = [
  {
    value: "online",
    label: "Online",
    description: "Connect from anywhere",
    icon: VideoCameraOutlined,
  },
  {
    value: "in-person",
    label: "In person",
    description: "Meet in your area",
    icon: HomeOutlined,
  },
  {
    value: "both",
    label: "I'm flexible",
    description: "Show me both options",
    icon: TeamOutlined,
  },
];

const inputClassName =
  "w-full rounded-2xl border border-gray-200/90 bg-[#F8FAFC] px-4 py-3.5 text-sm text-brand-blue-dark outline-none transition duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10";

const labelClassName =
  "mb-2.5 block text-sm font-bold text-brand-blue-dark";

export const MCLiveFindYourCommunity = () => {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState("");
  const [attendance, setAttendance] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus(
      "Your form is ready, but submissions are not connected yet. Please connect a form endpoint before publishing."
    );
  }

  return (
    <section
      id="find-your-community"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#F7F9FC] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Atmospheric background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-cyan/[0.09] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-brand-gold/[0.10] blur-3xl"
      />

      {/* Subtle decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(18,53,91,0.12) 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="gh-container relative mx-auto w-full max-w-[1440px]">
        <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
          {/* Left: Community discovery introduction */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="relative lg:sticky lg:top-28"
          >
            <h2 className="mt-7 max-w-xl text-[2.65rem] font-extrabold leading-[1.04] tracking-[-0.055em] text-brand-blue-dark sm:text-5xl lg:text-[3.65rem] xl:text-[4rem]">
              Faith was never
              <span className="mt-1 block">meant to be</span>
              <span className="relative mt-1 inline-block text-brand-cyan">
                a solo journey.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 12"
                  fill="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-gold"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8C65 2 185 2 257 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              You don't have to do life alone. Tell us a little about yourself
              and where you live, and we'll help you discover a Missional
              Community where faith and meaningful friendships can grow.
            </p>

            {/* Community location feature */}
            <div className="relative mt-9 overflow-hidden rounded-[1.75rem] border border-white bg-white p-5 shadow-[0_12px_40px_rgba(18,53,91,0.05)] sm:p-6">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-brand-gold/10"
              />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold/20 text-xl text-brand-blue-dark">
                  <EnvironmentOutlined />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-extrabold tracking-tight text-brand-blue-dark">
                    Good people. Closer to home.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Your neighbourhood helps us guide you towards a community
                    that works for your location and preferred way to connect.
                  </p>
                </div>
              </div>

              {/* Decorative connection path */}
              <div className="relative mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex -space-x-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-cyan/15 text-xs text-brand-blue-dark">
                    <HeartFilled />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-gold/30 text-xs text-brand-blue-dark">
                    <TeamOutlined />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-green/15 text-xs text-brand-blue-dark">
                    <StarFilled />
                  </span>
                </div>
                <p className="text-xs font-semibold leading-5 text-gray-500">
                  A place to belong, grow and serve.
                </p>
              </div>
            </div>

            {/* Welcome note */}
            <div className="mt-7 flex items-start gap-3 px-1">
              <p className="text-sm leading-6 text-gray-500">
                <span className="font-bold text-brand-blue-dark">
                  New to Global Harvest?
                </span>{" "}
                You're welcome here, whether you join us online or attend in
                person.
              </p>
            </div>
          </motion.div>

          {/* Right: Registration form */}
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 24,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="relative min-w-0"
          >
            {/* Floating form label */}
            <div className="absolute -top-3 right-6 z-10 flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-white px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-blue-dark shadow-sm sm:right-10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              Let's get connected
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-white bg-white shadow-[0_24px_80px_rgba(18,53,91,0.09)] sm:rounded-[2.1rem]">
              {/* Form header */}
              <div className="relative overflow-hidden bg-brand-blue-dark px-6 pb-7 pt-10 sm:px-9 sm:pb-9 sm:pt-12 lg:px-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[28px] border-white/[0.045]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 right-1/4 h-28 w-28 rounded-full bg-brand-cyan/[0.12] blur-2xl"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-cyan sm:text-[11px]">
                      <StarFilled />
                      Find your people
                    </span>

                    <h3 className="mt-4 max-w-md text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                      Let's find a place
                      <span className="block text-brand-gold">
                        where you belong.
                      </span>
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                      A few details will help our team get you connected.
                    </p>
                  </div>

                  <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/[0.07] text-2xl text-brand-gold sm:flex">
                    <TeamOutlined />
                  </div>
                </div>

                <div className="relative mt-7 flex items-center gap-2">
                  <span className="h-1 w-9 rounded-full bg-brand-cyan" />
                  <span className="h-1 w-5 rounded-full bg-white/20" />
                  <span className="h-1 w-5 rounded-full bg-white/20" />
                  <span className="ml-2 text-[10px] font-semibold tracking-wide text-white/50">
                    Just a few details
                  </span>
                </div>
              </div>

              {/* Form body */}
              <form
                onSubmit={handleSubmit}
                onChange={() => {
                  if (status) setStatus("");
                }}
                className="space-y-6 p-5 sm:p-8 lg:p-9"
              >
                <div>
                  <label htmlFor="mc-full-name" className={labelClassName}>
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="mc-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="What should we call you?"
                    className={inputClassName}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label htmlFor="mc-phone" className={labelClassName}>
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mc-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="+234 ..."
                      className={inputClassName}
                    />
                  </div>

                  <div className="min-w-0">
                    <label htmlFor="mc-email" className={labelClassName}>
                      Email address
                      <span className="ml-1.5 text-xs font-medium text-gray-400">
                        Optional
                      </span>
                    </label>
                    <input
                      id="mc-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mc-residential-area"
                    className={labelClassName}
                  >
                    Where do you live?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div>
                    <label
                        htmlFor="mc-residential-area"
                        className={labelClassName}
                    >
                        Where do you live?{" "}
                        <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                        <EnvironmentOutlined
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-brand-cyan"
                        />

                        <input
                        id="mc-residential-area"
                        name="residentialArea"
                        type="text"
                        autoComplete="address-level2"
                        required
                        placeholder="e.g. Maryland, Ikeja, Yaba..."
                        className="w-full rounded-2xl border border-gray-200/90 bg-[#F8FAFC] py-3.5 pl-11 pr-4 text-sm text-brand-blue-dark outline-none transition duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10"
                        />
                    </div>

                    <p className="mt-2.5 text-xs leading-5 text-gray-500">
                        Your neighbourhood helps us suggest a suitable community.
                    </p>
                    </div>
                </div>
                {/* Interactive attendance cards */}
                <fieldset>
                  <legend className={labelClassName}>
                    How would you like to connect?
                    <span className="ml-1 text-red-500">*</span>
                  </legend>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {attendanceOptions.map((option) => {
                      const Icon = option.icon;
                      const isSelected = attendance === option.value;

                      return (
                        <label
                          key={option.value}
                          className={`group relative flex min-w-0 cursor-pointer items-start gap-3 rounded-2xl border p-3.5 transition-all duration-200 sm:flex-col sm:gap-3 sm:p-4 ${
                            isSelected
                              ? "border-brand-cyan bg-brand-cyan/[0.07] shadow-[0_0_0_1px_rgba(52,138,167,0.12)]"
                              : "border-gray-200 bg-[#F8FAFC] hover:border-brand-cyan/50 hover:bg-white"
                          }`}
                        >
                          <input
                            type="radio"
                            name="attendancePreference"
                            value={option.value}
                            checked={isSelected}
                            onChange={() => setAttendance(option.value)}
                            required
                            className="sr-only"
                          />

                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-colors ${
                              isSelected
                                ? "bg-brand-blue-dark text-white"
                                : "bg-white text-brand-blue-dark shadow-sm group-hover:bg-brand-cyan/10"
                            }`}
                          >
                            <Icon />
                          </span>

                          <span className="min-w-0 flex-1 sm:flex-none">
                            <span className="block text-sm font-extrabold text-brand-blue-dark">
                              {option.label}
                            </span>
                            <span className="mt-1 block text-[11px] leading-5 text-gray-500">
                              {option.description}
                            </span>
                          </span>

                          <span
                            className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full transition-all sm:right-3 sm:top-auto sm:bottom-3 ${
                              isSelected
                                ? "text-brand-cyan opacity-100"
                                : "text-gray-300 opacity-0"
                            }`}
                          >
                            <CheckCircleFilled />
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Submit */}
                <div className="border-t border-gray-100 pt-6">
                  <button
                    type="submit"
                    className="group flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-brand-blue-dark px-5 py-4 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(18,53,91,0.14)] transition-all duration-300 hover:bg-brand-cyan hover:text-brand-blue-dark hover:shadow-[0_12px_28px_rgba(52,138,167,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-cyan/25"
                  >
                    Help Me Find My Community
                    <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {status && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 8,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      role="status"
                      className="mt-4 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-4 text-sm leading-6 text-brand-blue-dark"
                    >
                      {status}
                    </motion.p>
                  )}

                  <p className="mt-4 text-center text-[11px] leading-5 text-gray-400">
                    Your details will only be used to help our team follow up
                    about connecting you with a Missional Community.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
