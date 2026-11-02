"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  SearchOutlined,
  DownOutlined,
  CloseOutlined,
  ArrowRightOutlined,
  HeartFilled,
  StarOutlined,
  CheckOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

type Zone = {
  id: number;
  name: string;
  areas: string[];
};

const zones: Zone[] = [
  {
    id: 1,
    name: "Zone 1",
    areas: ["Mende", "Wasimi", "Ogudu", "Ojota", "Gold City"],
  },
  {
    id: 2,
    name: "Zone 2",
    areas: ["Isolo", "Lawanson", "Ago Palace"],
  },
  {
    id: 3,
    name: "Zone 3",
    areas: [
      "Ketu", "Alapere", "Ikosi", "Iyana School", "Mile 12",
      "Owode", "Weighbridge", "Idera", "Irawo", "Ajegunle",
      "Majidun", "Ogolonto", "Ebute", "Igbogbo", "Agric",
      "Ikorodu Axis",
    ],
  },
  {
    id: 4,
    name: "Zone 4",
    areas: [
      "Ikeja", "Shonibare Estate", "Opebi Allen", "Adeniyi Jones",
      "Ikeja Along", "Mangoro", "Alausa", "Marwa Garden",
      "Police Baracks", "Ojota/Oregun", "Ogba", "LSPDC - Agege",
      "Iju - Akowonjo", "Dopemu", "Egbeda", "Ipaja", "Abule Egba",
      "Igando",
    ],
  },
  {
    id: 5,
    name: "Zone 5",
    areas: [
      "Omole Phase 1", "Omole Phase 2", "Unilag Estate",
      "Isheri Axis", "Olowora", "Grammar School", "Ojodu Berger",
      "Ojodu Abiodun", "River Valley", "Opic Estate",
      "Magodo Isheri", "Magodo Phase 2", "Ajuwon", "Alagbole", "Akute",
    ],
  },
  {
    id: 6,
    name: "Zone 6",
    areas: [
      "Obalende", "Lekki", "Ajah", "Ikota",
      "Awoyaya", "Epe", "Jakande", "Chevron",
    ],
  },
  {
    id: 7,
    name: "Zone 7",
    areas: [
      "Anthony", "Millenium Estate", "Gbagada", "Ifako",
      "New Garage", "Fola Agoro", "Fadeyi", "WAEC", "Yaba",
      "Palmgroove", "Onipaanu", "Makoko", "Ebute Meta",
      "Iwaya", "Costain", "Apapa", "Igbobi", "Jibowu",
      "Abule Ijesha", "Unilag Road", "Abule Oja",
    ],
  },
];

const zoneStyles = [
  { color: "#00A3E0", soft: "#E3F6FD", label: "The heart of Lagos" },
  { color: "#D69B00", soft: "#FFF5D9", label: "Growing together" },
  { color: "#00A859", soft: "#E2F7EB", label: "Connected in faith" },
  { color: "#E87722", soft: "#FFF0E4", label: "A place to belong" },
  { color: "#41B6E6", soft: "#E6F7FC", label: "Life in community" },
  { color: "#0B2265", soft: "#E9ECF7", label: "Together in purpose" },
  { color: "#C94B79", soft: "#FCEAF1", label: "Faith in everyday life" },
];

export const OurZonesDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeZone, setActiveZone] = useState(7);
  const [expanded, setExpanded] = useState(true);
  const reduceMotion = useReducedMotion();

  const query = searchQuery.trim().toLowerCase();

  const filteredZones = useMemo(() => {
    if (!query) return zones;

    return zones
      .map((zone) => {
        const zoneMatch = zone.name.toLowerCase().includes(query);
        const matchingAreas = zone.areas.filter((area) =>
          area.toLowerCase().includes(query)
        );

        if (zoneMatch) return zone;
        if (matchingAreas.length) return { ...zone, areas: matchingAreas };

        return null;
      })
      .filter((zone): zone is Zone => zone !== null);
  }, [query]);

  const selectedZone = filteredZones.find((zone) => zone.id === activeZone)
    ?? filteredZones[0];

  const totalAreas = zones.reduce(
    (total, zone) => total + zone.areas.length,
    0
  );

  const isSearching = query.length > 0;
  const activeStyle = zoneStyles[(selectedZone?.id ?? 1) - 1];

  const selectZone = (id: number) => {
    setActiveZone(id);
    setExpanded(true);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setActiveZone(7);
    setExpanded(true);
  };

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 0.7,
            delay,
            ease: "easeOut" as const,
          },
        };

  return (
    <section
      id="zone-directory"
      className="relative overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 lg:py-28"
      >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-[#00A3E0]/[0.055] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[42%] h-[30rem] w-[30rem] rounded-full bg-[#FFC72C]/[0.08] blur-[100px]"
      />

        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div {...reveal()} className="relative">
            <div className="mt-9 grid gap-9 lg:grid-cols-[1fr_280px] lg:items-end lg:gap-16">
            <div>
              <h2 className="max-w-5xl text-[clamp(3.2rem,8vw,7.4rem)] font-black leading-[0.88] tracking-[-0.085em] text-[#0B2265]">
                Life is better
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#00A3E0]">
                    together.
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-1 h-3 -rotate-2 rounded-full bg-[#FFC72C]/80 sm:h-4"
                  />
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-[#647086] sm:text-lg">
                There's a community with your name on it. Explore our
                Missional Zones across Lagos and find people to share
                the journey of faith, friendship, and purpose.
              </p>
            </div>

            <div className="relative hidden pb-2 lg:block">
              <div className="absolute -right-2 -top-9 text-4xl text-[#FFC72C]">
                <StarOutlined />
              </div>
              <p className="mt-[-1] text-6xl font-black leading-none tracking-[-0.08em] text-[#0B2265]">
                07<span className="text-[#00A3E0]">/</span>
              </p>
              <p className="mt-3 text-sm font-bold text-[#0B2265]">
                Neighbourhood zones
              </p>
              <p className="mt-1 max-w-[220px] text-sm leading-6 text-[#7B8494]">
                One city. Many neighbourhoods. One growing family.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.08)}
          className="mt-14 flex flex-wrap items-center justify-between gap-5 border-y border-[#0B2265]/10 py-5 sm:mt-16"
        >
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <div>
              <span className="text-xl font-black tracking-tight text-[#0B2265]">
                07
              </span>
              <span className="ml-2 text-xs text-[#7B8494]">Zones</span>
            </div>
            <span className="h-6 w-px bg-[#0B2265]/10" />
            <div>
              <span className="text-xl font-black tracking-tight text-[#0B2265]">
                {totalAreas}
              </span>
              <span className="ml-2 text-xs text-[#7B8494]">
                Listed neighbourhoods
              </span>
            </div>
            <span className="h-6 w-px bg-[#0B2265]/10" />
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B2265]">
              <GlobalOutlined className="text-[#00A3E0]" />
              Lagos, Nigeria
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#00A859]">
            <span className="h-2 w-2 rounded-full bg-[#00A859]" />
            A place to grow
          </div>
        </motion.div>

        <motion.div {...reveal(0.12)} className="mt-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            <div>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00A3E0]">
                    Start exploring
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-[#0B2265] sm:text-3xl">
                    Find your corner.
                  </h3>
                </div>
                {isSearching && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="mb-1 text-xs font-bold text-[#008BC2] transition hover:text-[#0B2265]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="group relative mt-10 max-w-xl">
                <SearchOutlined className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-[#00A3E0]" />
                <input
                  id="zone-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    const value = event.target.value;
                    setSearchQuery(value);

                    const normalized = value.trim().toLowerCase();
                    if (normalized) {
                      const firstMatch = zones.find(
                        (zone) =>
                          zone.name.toLowerCase().includes(normalized) ||
                          zone.areas.some((area) =>
                            area.toLowerCase().includes(normalized)
                          )
                      );
                      if (firstMatch) {
                        setActiveZone(firstMatch.id);
                        setExpanded(true);
                      }
                    }
                  }}
                  placeholder="Search a neighbourhood..."
                  aria-label="Search neighbourhoods"
                  className="w-full rounded-2xl border border-[#0B2265]/10 bg-white py-5 pl-14 pr-12 text-sm font-medium text-[#0B2265] shadow-[0_8px_35px_rgba(11,34,101,0.035)] outline-none transition placeholder:font-normal placeholder:text-[#9AA3B2] focus:border-[#00A3E0]/60 focus:shadow-[0_10px_40px_rgba(0,163,224,0.09)] focus:ring-4 focus:ring-[#00A3E0]/[0.07]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear search"
                    className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#8D97A8] transition hover:bg-[#F1F4F8] hover:text-[#E87722]"
                  >
                    <CloseOutlined />
                  </button>
                )}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A1A8B5]">
                  {isSearching ? "Search results" : "Choose a zone"}
                </p>
                <p className="text-xs text-[#9AA3B2]">
                  {filteredZones.length} of 7
                </p>
              </div>

              <div className="mt-3 space-y-1.5">
                {filteredZones.map((zone) => {
                  const style = zoneStyles[zone.id - 1];
                  const isActive = selectedZone?.id === zone.id;

                  return (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => selectZone(zone.id)}
                      className={`group flex w-full items-center gap-4 rounded-xl px-3 py-3.5 text-left transition duration-200 sm:px-4 ${
                        isActive
                          ? "bg-[#0B2265] text-white shadow-[0_8px_24px_rgba(11,34,101,0.13)]"
                          : "text-[#0B2265] hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black transition ${
                          isActive
                            ? "bg-white/10 text-[#FFC72C]"
                            : "bg-white text-[#0B2265]/45 group-hover:bg-[#EAF8FE] group-hover:text-[#008BC2]"
                        }`}
                      >
                        {String(zone.id).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold">
                          {zone.name}
                        </span>
                        <span
                          className={`mt-0.5 block text-xs ${
                            isActive ? "text-white/55" : "text-[#9AA3B2]"
                          }`}
                        >
                          {isSearching
                            ? `${zone.areas.length} matching areas`
                            : `${zone.areas.length} neighbourhoods`}
                        </span>
                      </span>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                          isActive
                            ? "bg-[#FFC72C] text-[#0B2265]"
                            : "text-[#B5BECA] group-hover:translate-x-0.5 group-hover:text-[#00A3E0]"
                        }`}
                      >
                        {isActive ? (
                          <CheckOutlined className="text-xs" />
                        ) : (
                          <ArrowRightOutlined className="text-xs" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0">
              <AnimatePresence mode="wait">
                {selectedZone ? (
                  <motion.div
                    key={selectedZone.id}
                    initial={
                      reduceMotion ? false : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      reduceMotion ? undefined : { opacity: 0, y: -8 }
                    }
                    transition={{ duration: reduceMotion ? 0 : 0.28 }}
                    className="relative flex h-full min-h-[480px] flex-col overflow-hidden rounded-[2rem] bg-[#0B2265] text-white shadow-[0_25px_80px_rgba(11,34,101,0.14)] sm:min-h-[520px]"
                  >
                    {/* Decorative background geometry */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border-[55px] border-white/[0.045]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#00A3E0]/20 blur-[80px]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-10 top-32 h-2 w-2 rounded-full bg-[#FFC72C] shadow-[0_0_25px_8px_rgba(255,199,44,0.25)]"
                    />

                    <div className="relative flex flex-1 flex-col p-6 sm:p-9 lg:p-10">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: activeStyle.color }}
                          />
                          Community directory
                        </span>
                        <span className="text-xs font-bold tracking-[0.15em] text-white/35">
                          GH / 0{selectedZone.id}
                        </span>
                      </div>

                      <div className="mt-12 sm:mt-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#41B6E6]">
                          {activeStyle.label}
                        </p>

                        <div className="mt-3 flex items-end gap-3">
                          <h3 className="text-6xl font-black leading-none tracking-[-0.08em] sm:text-8xl">
                            {String(selectedZone.id).padStart(2, "0")}
                          </h3>
                          <span className="mb-1 text-2xl font-light text-white/35">
                            /
                          </span>
                          <p className="mb-1 text-xl font-bold sm:text-2xl">
                            {selectedZone.name}
                          </p>
                        </div>

                        <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                          A community of people sharing life, growing
                          together, and making faith part of everyday
                          neighbourhood life.
                        </p>
                      </div>

                      <div className="mt-9 border-t border-white/15 pt-6">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                              Neighbourhoods
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white">
                              {selectedZone.areas.length} places in this zone
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            aria-expanded={expanded}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-[#FFC72C] hover:text-[#FFC72C]"
                          >
                            <DownOutlined
                              className={`text-xs transition-transform ${
                                expanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={
                                reduceMotion
                                  ? false
                                  : { opacity: 0, height: 0 }
                              }
                              animate={{ opacity: 1, height: "auto" }}
                              exit={
                                reduceMotion
                                  ? undefined
                                  : { opacity: 0, height: 0 }
                              }
                              transition={{
                                duration: reduceMotion ? 0 : 0.25,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-wrap gap-2">
                                {selectedZone.areas.map((area) => (
                                  <span
                                    key={area}
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-3 py-2.5 text-xs font-medium text-white/85 transition hover:border-[#41B6E6]/50 hover:bg-white/[0.12]"
                                  >
                                    <span
                                      className="h-1.5 w-1.5 rounded-full"
                                      style={{
                                        backgroundColor: activeStyle.color,
                                      }}
                                    />
                                    {area}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/15 pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFC72C] text-sm text-[#0B2265]">
                            <HeartFilled />
                          </div>
                          <span className="text-xs font-medium text-white/60">
                            There's room for you here.
                          </span>
                        </div>

                        <span className="hidden text-xs font-bold uppercase tracking-[0.15em] text-[#41B6E6] sm:block">
                          {String(selectedZone.id).padStart(2, "0")} / 07
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex min-h-[480px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#0B2265]/15 bg-white p-8 text-center"
                  >
                    <SearchOutlined className="text-3xl text-[#00A3E0]" />
                    <h3 className="mt-5 text-xl font-black text-[#0B2265]">
                      No neighbourhood found
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      Try another search term or clear your search to
                      explore all seven zones.
                    </p>
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="mt-6 rounded-full bg-[#0B2265] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#00A3E0]"
                    >
                      Explore all zones
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.1)}
          className="mt-20 flex flex-col items-start justify-between gap-7 border-t border-[#0B2265]/10 pt-9 sm:flex-row sm:items-center"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC72C]/30 text-[#9A7000]">
              <HeartFilled />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight text-[#0B2265]">
                Not sure where you fit?
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-[#7B8494]">
                Our church team can help you find a suitable Missional
                Community and share the details you need to get started.
              </p>
            </div>
          </div>

          <a
            href="/mc-live#find-your-community"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0B2265] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#00A3E0]"
          >
            Find Your Community
          </a>
        </motion.div>
      </div>
    </section>
  );
};
