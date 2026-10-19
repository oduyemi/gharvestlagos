"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CloseOutlined, MenuOutlined, ArrowRightOutlined, DownOutlined } from "@ant-design/icons";

const navLinks = [
  { label: "Worship Online", href: "/worship-online" },
  {
    label: "Our Church",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Pastors", href: "/about/#pastors" },
      { label: "Our Locations", href: "/about/#locations" },
    ],
  },
  { label: "Missional Communities", href: "/missional-communities" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Books", href: "/books" },
      { label: "Sermons", href: "/sermons" },
    ],
  },
  {
    label: "Connect",
    href: "/connect",
    children: [
      { label: "Service Ministries", href: "/connect/#ministries" },
      { label: "Upcoming Events", href: "/events" },
      { label: "Annual Calendar", href: "/events/calendar" },
    ],
  },
  { label: "Shop4Free", href: "/shop4free" },
  { label: "Contact", href: "/contact" },
];

const joinLink = { label: "JOIN MC LIVE", href: "/mc-live" };

export const Header = () => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  };

  const isItemActive = (href: string) => {
    const [path] = href.split("#");
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const isGroupActive = (item: (typeof navLinks)[number]) =>
    isItemActive(item.href) ||
    (item.children?.some((child) => isItemActive(child.href)) ?? false);

  const dropdownMotion = shouldReduceMotion
    ? {
        initial: false as const,
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 8 },
      };

  return (
    <header
      className={`${
        isHome ? "absolute inset-x-0 top-0" : "relative"
      } z-50 w-full bg-transparent`}
    >
      {/* Transparent main header */}
      <div className="gh-container flex items-center justify-between gap-5 py-4 lg:py-5">
        <Link
          href="/"
          aria-label="Global Harvest Church homepage"
          onClick={closeMenu}
          className="relative z-[70] shrink-0 pl-4"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Global Harvest Church"
            width={190}
            height={70}
            priority
            className="h-10 w-auto object-contain sm:h-11 lg:h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {navLinks.map((item) => {
            const active = isGroupActive(item);
            const hasChildren = Boolean(item.children?.length);

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (hasChildren) setOpenDropdown(item.label);
                }}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {hasChildren ? (
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    className={`group relative inline-flex items-center gap-1.5 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                      active
                        ? "text-brand-gold"
                        : "text-gray-500 hover:text-brand-cyan"
                    }`}
                  >
                    {item.label}
                    <DownOutlined
                      className={`text-[10px] transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-brand-gold transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`group relative inline-flex items-center py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                      active
                        ? "text-brand-gold"
                        : "text-gray-500 hover:text-brand-cyan"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-[2px] origin-left bg-brand-gold transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                )}

                <AnimatePresence>
                  {hasChildren && openDropdown === item.label && (
                    <motion.div
                      {...dropdownMotion}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                      className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-xl bg-brand-blue-dark/95 p-2 backdrop-blur-xl"
                    >
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className={`flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm transition-colors ${
                            isItemActive(child.href)
                              ? "bg-white/[0.06] text-brand-gold"
                              : "text-white hover:bg-white/[0.08] hover:text-brand-cyan"
                          }`}
                        >
                          {child.label}
                          <ArrowRightOutlined className="text-[10px] opacity-60" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={joinLink.href}
          className="hidden shrink-0 items-center gap-2 text-white bg-brand-gold px-5 py-3 text-[11px] font-extrabold tracking-[0.12em] text-brand-blue-dark transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-800 xl:inline-flex"
        >
          {joinLink.label}
          <ArrowRightOutlined className="text-xs" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="relative z-[80] mr-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/[0.28] text-lg text-white transition-all duration-200 hover:bg-brand-gold hover:text-brand-blue-dark xl:hidden"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile backdrop and navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Blurred page backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[55] h-dvh w-full bg-[#071744]/55 backdrop-blur-md xl:hidden"
            />

            {/* Frosted-glass mobile panel */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: -14, scale: 0.985 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.985 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
              className="fixed inset-x-3 top-3 z-[60] max-h-[calc(100dvh-24px)] overflow-y-auto rounded-3xl bg-[#071744]/85 px-5 pb-6 pt-5 backdrop-blur-2xl sm:inset-x-5 sm:px-7 xl:hidden"
            >
              {/* Mobile panel heading */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-brand-cyan">
                    Global Harvest Church
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Love. Faith. Purpose.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-gold hover:text-brand-blue-dark"
                >
                  <CloseOutlined />
                </button>
              </div>

              <div className="mb-5 h-px bg-gradient-to-r from-brand-gold/70 via-white/15 to-transparent" />

              <nav aria-label="Mobile navigation" className="space-y-1">
                {navLinks.map((item, index) => {
                  const active = isGroupActive(item);
                  const hasChildren = Boolean(item.children?.length);
                  const expanded = mobileDropdown === item.label;

                  return (
                    <motion.div
                      key={item.label}
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 8 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.2,
                        delay: shouldReduceMotion ? 0 : index * 0.025,
                      }}
                      className="rounded-xl"
                    >
                      {hasChildren ? (
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() =>
                            setMobileDropdown((current) =>
                              current === item.label ? null : item.label
                            )
                          }
                          className={`flex min-h-12 w-full items-center justify-between gap-4 rounded-xl px-3 py-3.5 text-left text-[15px] font-semibold transition-colors ${
                            expanded || active
                              ? "bg-white/[0.07] text-brand-gold"
                              : "text-white hover:bg-white/[0.05] hover:text-brand-cyan"
                          }`}
                        >
                          <span>{item.label}</span>
                          <DownOutlined
                            className={`text-[11px] transition-transform duration-200 ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex min-h-12 items-center justify-between gap-4 rounded-xl px-3 py-3.5 text-[15px] font-semibold transition-colors ${
                            active
                              ? "bg-white/[0.07] text-brand-gold"
                              : "text-white hover:bg-white/[0.05] hover:text-brand-cyan"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowRightOutlined className="text-[11px] opacity-50" />
                        </Link>
                      )}

                      <AnimatePresence>
                        {hasChildren && expanded && (
                          <motion.div
                            initial={
                              shouldReduceMotion
                                ? false
                                : { height: 0, opacity: 0 }
                            }
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: shouldReduceMotion ? 0 : 0.2,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 space-y-1 pb-2 pl-3 pt-1">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={closeMenu}
                                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                                    isItemActive(child.href)
                                      ? "text-brand-gold"
                                      : "text-white/75 hover:bg-white/[0.05] hover:text-brand-cyan"
                                  }`}
                                >
                                  <span>{child.label}</span>
                                  <ArrowRightOutlined className="text-[10px] opacity-40" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Full-width primary CTA */}
              <Link
                href={joinLink.href}
                onClick={closeMenu}
                className="group mt-6 flex min-h-[58px] w-full items-center justify-between gap-4 rounded-xl bg-brand-gold px-5 py-4 text-sm font-extrabold tracking-[0.1em] text-brand-blue-dark transition-all duration-200 hover:bg-white active:scale-[0.99]"
              >
                <span>{joinLink.label}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-dark/10 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRightOutlined />
                </span>
              </Link>

              <p className="mt-4 text-center text-[10px] font-medium tracking-[0.16em] text-white/40">
                LOVE · FAITH · PURPOSE
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
