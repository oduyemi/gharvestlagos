
"use client";
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  HeartOutlined,
  LockOutlined,
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "mt-2.5 min-h-12 w-full rounded-xl border border-slate-200 bg-[#fbfcfe] px-4 py-3 text-sm text-brand-blue-dark outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass =
  "block text-xs font-bold tracking-wide text-brand-blue-dark sm:text-sm";

export const ContactForm = () => {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? "").trim(),
      company: String(formData.get("company") ?? ""),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "We couldn't send your message. Please try again.",
        );
      }

      form.reset();
      setMessage("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const reveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#f6f8fb] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-brand-cyan/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-gold/[0.09] blur-3xl"
      />

      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 xl:gap-20">
          {/* Introduction */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-28"
          >
            <h2
              id="contact-form-heading"
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.045em] text-brand-blue-dark sm:text-5xl lg:text-[3.6rem]"
            >
              Every good
              <span className="block">conversation</span>
              <span className="block text-brand-cyan">starts somewhere.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Have a question, need prayer, or want to find your place in our
              church family? Tell us what's on your mind. We'd love to hear
              from you.
            </p>

            {/* Contact reassurance */}
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_12px_35px_-30px_rgba(11,34,101,0.25)] sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gold/20 text-lg text-brand-blue-dark">
                  <MailOutlined />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-brand-blue-dark">
                    Let's start with a conversation.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Give us a little context so our team can understand your
                    enquiry and help point you in the right direction.
                  </p>
                </div>
              </div>

              <div className="my-5 h-px bg-slate-100" />

              <div className="flex items-start gap-3">
                <SafetyCertificateOutlined className="mt-0.5 text-lg text-brand-cyan" />
                <div>
                  <p className="text-sm font-semibold text-brand-blue-dark">
                    Your information deserves care.
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    We use the details you provide to respond to your enquiry.
                    Please avoid sharing sensitive personal or financial
                    information.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f6f8fb] bg-brand-blue-dark text-xs text-white">
                  <HeartOutlined />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f6f8fb] bg-brand-cyan text-xs text-white">
                  <MessageOutlined />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f6f8fb] bg-brand-gold text-xs text-brand-blue-dark">
                  <TeamIcon />
                </span>
              </div>

              <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                A welcoming church family, ready to listen.
              </p>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            variants={reveal}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.08,
              ease: "easeOut",
            }}
            className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_25px_80px_-48px_rgba(11,34,101,0.3)] sm:rounded-3xl"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-cyan via-brand-gold to-brand-green" />

            <div className="p-5 sm:p-8 lg:p-9 xl:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan sm:text-xs">
                    Get in touch
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-blue-dark sm:text-3xl">
                    Send us a message
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Complete the form below and we'll take it from there.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-dark/[0.04] text-xl text-brand-blue-dark sm:flex">
                  <SendOutlined />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                Fields marked with{" "}
                <span className="font-bold text-red-500">*</span> are required
              </div>

              {status === "success" && (
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  aria-live="polite"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-brand-green/20 bg-brand-green/[0.07] p-4 sm:p-5"
                >
                  <CheckCircleFilled className="mt-0.5 text-xl text-brand-green" />
                  <div>
                    <p className="text-sm font-bold text-brand-blue-dark">
                      Your message is on its way.
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Thank you for reaching out to Global Harvest Church.
                      We appreciate you taking the time to connect with us.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-3 text-xs font-bold text-brand-blue-dark underline decoration-brand-cyan underline-offset-4 transition-colors hover:text-brand-cyan"
                    >
                      Send another message
                    </button>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-700">
                    !
                  </span>
                  <div>
                    <p className="text-sm font-bold text-red-800">
                      We couldn't send your message.
                    </p>
                    <p className="mt-1 text-sm leading-6 text-red-700">
                      {errorMessage}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-3 text-xs font-bold text-red-800 underline underline-offset-4"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-5"
              >
                {/* Honeypot field for server-side spam checks */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="contact-name">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      maxLength={100}
                      placeholder="Your full name"
                      className={inputClass}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="contact-email">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className={inputClass}
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="contact-phone">
                      Phone number{" "}
                      <span className="font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      placeholder="Your phone number"
                      className={inputClass}
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="contact-topic">
                      Enquiry type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-topic"
                      name="topic"
                      defaultValue="General enquiry"
                      required
                      className={`${inputClass} appearance-none`}
                      disabled={status === "loading"}
                    >
                      <option>General enquiry</option>
                      <option>Prayer request</option>
                      <option>Getting connected</option>
                      <option>Church services</option>
                      <option>Ministry and volunteering</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-end justify-between gap-3">
                    <label
                      className={labelClass}
                      htmlFor="contact-message"
                    >
                      Your message <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] tabular-nums text-slate-400">
                      {message.length}/5000
                    </span>
                  </div>

                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Tell us how we can help..."
                    className={`${inputClass} min-h-36 resize-y leading-7`}
                    disabled={status === "loading"}
                  />

                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    Please don't include sensitive personal, medical, or
                    financial information.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-5">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-brand-blue-dark px-6 py-3.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-brand-cyan hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-48"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending your message...
                      </>
                    ) : (
                      <>
                        <SendOutlined />
                        Send your message
                        <ArrowRightOutlined className="transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                    <LockOutlined className="mt-0.5 shrink-0" />
                    By submitting this form, you agree that Global Harvest
                    Church may use the information provided to respond to
                    your enquiry.
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

function TeamIcon() {
  return <MessageOutlined />;
}
