
"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CheckOutlined,
  CloseOutlined,
  LockOutlined,
  MessageOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const prayerSteps = [
  {
    number: "01",
    title: "Share what's on your heart",
    description:
      "Tell us as much or as little as you feel comfortable sharing.",
  },
  {
    number: "02",
    title: "Let us stand with you",
    description:
      "Your request matters. You don't have to navigate every season alone.",
  },
  {
    number: "03",
    title: "Take a moment to breathe",
    description:
      "You can reach out without having to find all the right words.",
  },
];

const requestTypes = [
  "Personal prayer",
  "Family & relationships",
  "Healing & restoration",
  "Guidance & direction",
  "Thanksgiving",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  type: "Personal prayer",
  request: "",
  confidential: true,
};

export const PrayerRequests = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [formError, setFormError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openDialog = () => {
    setSubmitted(false);
    setFormError("");
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setFormError("");
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDialog();

      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const updateField = (
    field: keyof typeof initialForm,
    value: string | boolean
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFormError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.request.trim()) {
      setFormError("Please share a few words about your prayer request.");
      return;
    }

    if (form.request.trim().length < 10) {
      setFormError("Please add a little more detail to your request.");
      return;
    }

    // Frontend demonstration only — connect your API when ready.
    setSubmitted(true);
  };

  return (
    <>
      <section
        id="prayer-requests"
        aria-labelledby="prayer-requests-heading"
        className="relative isolate overflow-hidden bg-white py-16 text-brand-blue-dark sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl"
        />

        <div className="gh-container mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Scripture feature */}
            <motion.div
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 18 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-brand-blue-dark p-7 text-white shadow-xl shadow-brand-blue-dark/10 sm:p-9 lg:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/[0.08]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/[0.08]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-brand-cyan/10 blur-3xl"
                />

                <div className="relative">
                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold sm:text-xs">
                    You are not alone
                  </p>

                  <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    There is room for your story here.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                    Some seasons are joyful. Others are difficult to put into
                    words. Whatever this season looks like for you, you can
                    reach out and let someone stand with you in prayer.
                  </p>

                  <div className="mt-8 border-l-2 border-brand-gold pl-5">
                    <p className="text-base italic leading-7 text-white/90 sm:text-lg">
                      “Carry each other’s burdens, and in this way you will
                      fulfil the law of Christ.”
                    </p>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.17em] text-brand-gold">
                      Galatians 6:2
                    </p>
                  </div>

                  <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold">
                      <SafetyOutlined />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Share at your own pace
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/60">
                        Only share what you feel comfortable sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-brand-blue-dark/[0.07] bg-[#f8fafc] p-4">
                <p className="text-xs leading-6 text-slate-600">
                  You don't need perfect words or all the answers to ask for
                  prayer. A simple, honest message is enough.
                </p>
              </div>
            </motion.div>

            {/* Supporting content */}
            <motion.div
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 18 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
                ease: "easeOut",
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/15 bg-brand-cyan/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-brand-blue-dark sm:text-xs">
                <MessageOutlined className="text-brand-cyan" />
                Prayer & support
              </div>

              <h2
                id="prayer-requests-heading"
                className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-brand-blue-dark sm:text-4xl lg:text-[2.75rem]"
              >
                You don't have to face it{" "}
                <span className="text-brand-cyan">alone.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Whether you need strength for a difficult season, wisdom for a
                decision, or simply someone to pray with you, we're here to
                listen. You don't have to carry everything by yourself.
              </p>

              <div className="mt-8 space-y-5">
                {prayerSteps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-blue-dark/[0.07] bg-white text-xs font-bold text-brand-blue-dark shadow-sm">
                      {step.number}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-sm font-bold text-brand-blue-dark sm:text-base">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-start gap-4">
                <button
                  type="button"
                  onClick={openDialog}
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold text-brand-blue-dark shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffd34f] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-dark focus-visible:ring-offset-2 sm:w-auto"
                >
                  Share a prayer request
                  <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                </button>

                <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <LockOutlined className="mt-0.5 shrink-0 text-brand-cyan" />
                  Share only what you're comfortable sharing. Please don't
                  include sensitive medical details or other private information.
                </p>
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-slate-200 pt-6">
                <CheckCircleFilled className="mt-0.5 text-brand-green" />
                <div>
                  <p className="text-sm font-bold text-brand-blue-dark">
                    Every request matters.
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    You are welcome here, exactly as you are.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dedicated prayer request modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="prayer-modal-backdrop"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-end justify-center bg-[#061334]/75 p-0 backdrop-blur-sm sm:items-center sm:p-5"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeDialog();
            }}
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="prayer-modal-title"
              aria-describedby="prayer-modal-description"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 24, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 12, scale: 0.99 }
              }
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur-md sm:px-8 sm:py-5">
                <div className="flex items-start gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
                      Prayer & support
                    </p>
                    <h2
                      id="prayer-modal-title"
                      className="mt-1 text-xl font-bold tracking-tight text-brand-blue-dark sm:text-2xl"
                    >
                      {submitted
                        ? "Thank you for sharing"
                        : "How can we pray for you?"}
                    </h2>
                    <p
                      id="prayer-modal-description"
                      className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm"
                    >
                      {submitted
                        ? "Your request is ready for the next step."
                        : "Take your time. Share only what feels right."}
                    </p>
                  </div>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeDialog}
                  aria-label="Close prayer request dialog"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-brand-blue-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <CloseOutlined />
                </button>
              </div>

              <div className="p-5 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, y: 10 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    className="py-4 text-center sm:py-8"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-3xl text-brand-green">
                      <CheckCircleFilled />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-brand-blue-dark">
                      Thank you for trusting us.
                    </h3>

                    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
                      It can take courage to put something into words. We're
                      glad you took a moment to share what's on your heart.
                    </p>

                    <div className="mx-auto mt-6 max-w-md rounded-xl border border-brand-gold/30 bg-brand-gold/[0.08] p-4 text-left">
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark">
                        Your request
                      </p>
                      <p className="mt-2 text-xs font-semibold text-slate-500">
                        {form.type}
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
                        {form.request}
                      </p>
                    </div>

                    <p className="mx-auto mt-5 max-w-md text-xs leading-5 text-slate-500">
                      This is a frontend preview. Your request has not been
                      sent or saved. Submission will be connected when the
                      contact backend is ready.
                    </p>

                    <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => {
                          setForm(initialForm);
                          setSubmitted(false);
                          setFormError("");
                        }}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-brand-blue-dark transition hover:bg-slate-50"
                      >
                        Share another request
                      </button>
                      <button
                        type="button"
                        onClick={closeDialog}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-blue-dark px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
                      >
                        Close
                        <CheckOutlined />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-6 flex items-start gap-3 rounded-xl border border-brand-cyan/15 bg-brand-cyan/[0.05] p-4">
                      <SafetyOutlined className="mt-0.5 text-lg text-brand-cyan" />
                      <div>
                        <p className="text-sm font-bold text-brand-blue-dark">
                          A space to share, without pressure
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          Your name and email are optional. Please share only
                          the information you feel comfortable providing.
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="prayer-name"
                          className="mb-2 block text-xs font-bold text-brand-blue-dark"
                        >
                          Your name{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="prayer-name"
                          name="name"
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) =>
                            updateField("name", event.target.value)
                          }
                          placeholder="What should we call you?"
                          className="min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="prayer-email"
                          className="mb-2 block text-xs font-bold text-brand-blue-dark"
                        >
                          Email address{" "}
                          <span className="font-normal text-slate-400">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="prayer-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(event) =>
                            updateField("email", event.target.value)
                          }
                          placeholder="you@example.com"
                          className="min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="prayer-type"
                        className="mb-2 block text-xs font-bold text-brand-blue-dark"
                      >
                        What would you like prayer for?
                      </label>
                      <div className="relative">
                        <select
                          id="prayer-type"
                          name="type"
                          value={form.type}
                          onChange={(event) =>
                            updateField("type", event.target.value)
                          }
                          className="min-h-12 w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 pr-10 text-sm text-slate-800 outline-none transition hover:border-slate-300 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                        >
                          {requestTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-slate-400">
                          ▼
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="prayer-message"
                        className="mb-2 block text-xs font-bold text-brand-blue-dark"
                      >
                        Your prayer request{" "}
                        <span className="text-brand-orange">*</span>
                      </label>
                      <textarea
                        id="prayer-message"
                        name="request"
                        required
                        minLength={10}
                        rows={5}
                        maxLength={3000}
                        value={form.request}
                        onChange={(event) =>
                          updateField("request", event.target.value)
                        }
                        placeholder="Take your time. What's on your heart?"
                        aria-describedby={
                          formError
                            ? "prayer-error prayer-character-count"
                            : "prayer-character-count"
                        }
                        className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-cyan focus:ring-4 focus:ring-brand-cyan/10"
                      />
                      <div className="mt-2 flex items-start justify-between gap-3">
                        {formError ? (
                          <p
                            id="prayer-error"
                            role="alert"
                            className="text-xs font-medium text-red-600"
                          >
                            {formError}
                          </p>
                        ) : (
                          <p className="text-xs leading-5 text-slate-500">
                            A few sentences are enough.
                          </p>
                        )}
                        <p
                          id="prayer-character-count"
                          className="shrink-0 text-xs tabular-nums text-slate-400"
                        >
                          {form.request.length}/3000
                        </p>
                      </div>
                    </div>

                    <label className="mt-5 flex cursor-pointer items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-3.5">
                      <input
                        type="checkbox"
                        checked={form.confidential}
                        onChange={(event) =>
                          updateField("confidential", event.target.checked)
                        }
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#0b2265]"
                      />
                      <span className="text-xs leading-5 text-slate-600">
                        <span className="font-semibold text-brand-blue-dark">
                          Please handle my request with care.
                        </span>{" "}
                        I understand that confidentiality depends on the
                        church's eventual handling and safeguarding practices.
                      </span>
                    </label>

                    <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex items-center gap-2 text-xs text-slate-500">
                        <LockOutlined className="text-brand-cyan" />
                        No pressure. Share what feels right.
                      </p>

                      <button
                        type="submit"
                        className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-blue-dark transition hover:bg-[#ffd34f] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-dark focus-visible:ring-offset-2"
                      >
                        Prepare my request
                        <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
                      Frontend preview only. This form does not send or store
                      your information yet.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
