"use client";
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, CheckCircleFilled, MailOutlined, SendOutlined } from "@ant-design/icons";


type FormStatus = "idle" | "loading" | "success" | "error";


const inputClass =  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition placeholder:text-slate-400 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10 disabled:opacity-60";
const labelClass = "block text-sm font-semibold text-brand-blue-dark";

export const ContactForm = () => {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "We couldn't send your message. Please try again.",
        );
      }

      form.reset();
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

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-[#f7f9fc] py-16 sm:py-20 lg:py-24"
    >
      <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-cyan">
              Your message matters
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-blue-dark sm:text-4xl">
              We&apos;re listening.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Tell us a little about what you need. Whether you have a
              question, a prayer request, or simply want to connect, we&apos;ll
              do our best to point you in the right direction.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-brand-blue-dark/[0.07] bg-white p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/20 text-brand-blue-dark">
                <MailOutlined />
              </div>

              <div>
                <p className="text-sm font-bold text-brand-blue-dark">
                  A real conversation starts here.
                </p>
                <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                  Please include enough detail for our team to understand how
                  best to help.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500 sm:text-sm">
              <CheckCircleFilled className="text-brand-green" />
              Your message is sent securely over HTTPS when the site is
              correctly configured.
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_20px_60px_-42px_rgba(11,34,101,0.3)] sm:p-8 lg:p-9"
          >
            <div className="mb-7">
              <h3 className="text-xl font-bold text-brand-blue-dark sm:text-2xl">
                Send us a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fields marked with <span className="text-red-500">*</span> are
                required.
              </p>
            </div>

            {status === "success" && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-xl border border-brand-green/20 bg-brand-green/[0.07] p-4"
              >
                <CheckCircleFilled className="mt-0.5 text-lg text-brand-green" />
                <div>
                  <p className="text-sm font-bold text-brand-blue-dark">
                    Message sent successfully!
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Thank you for reaching out to Global Harvest Church.
                  </p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot: keep hidden from normal visitors */}
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
                    Phone number
                    <span className="ml-1 font-normal text-slate-400">
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
                    What would you like to discuss?
                    <span className="text-red-500"> *</span>
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    defaultValue="General enquiry"
                    required
                    className={inputClass}
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
                <label className={labelClass} htmlFor="contact-message">
                  Your message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={6}
                  placeholder="How can we help you?"
                  className={`${inputClass} resize-y`}
                  disabled={status === "loading"}
                />
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Please avoid including sensitive personal or financial
                  information.
                </p>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-brand-blue-dark px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending message...
                  </>
                ) : (
                  <>
                    <SendOutlined />
                    Send message
                    <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-xs leading-5 text-slate-400">
                By submitting this form, you agree that the church may use
                your details to respond to your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}