"use client";
import { useMemo, useState } from "react";
import { ArrowRightOutlined, CheckCircleFilled, EnvironmentOutlined, HomeOutlined, SearchOutlined, TeamOutlined } from "@ant-design/icons";


type Community = {
  id: string;
  name: string;
  address: string;
  area: string;
  placeholder?: boolean;
};

type Zone = {
  id: number;
  name: string;
  areas: string[];
  communities: Community[];
};

const zones: Zone[] = [
  {
    id: 1,
    name: "Zone 1",
    areas: ["Areas to be confirmed"],
    communities: [
      {
        id: "z1-placeholder-1",
        name: "Missional Community — To Be Confirmed",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z1-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
  {
    id: 2,
    name: "Zone 2",
    areas: ["Areas to be confirmed"],
    communities: [
      {
        id: "z2-placeholder-1",
        name: "Missional Community — To Be Confirmed",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z2-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
  {
    id: 3,
    name: "Zone 3",
    areas: ["Areas to be confirmed"],
    communities: [
      {
        id: "z3-placeholder-1",
        name: "Missional Community — To Be Confirmed",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z3-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
  {
    id: 4,
    name: "Zone 4",
    areas: ["Areas to be confirmed"],
    communities: [
      {
        id: "z4-placeholder-1",
        name: "Missional Community — To Be Confirmed",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z4-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
  {
    id: 5,
    name: "Zone 5",
    areas: ["Areas to be confirmed"],
    communities: [
      {
        id: "z5-placeholder-1",
        name: "Missional Community — To Be Confirmed",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z5-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
  {
    id: 6,
    name: "Zone 6",
    areas: ["Areas to be confirmed"],
    communities: [
      {
        id: "z6-placeholder-1",
        name: "Missional Community — To Be Confirmed",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z6-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be provided by the church",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
  {
    id: 7,
    name: "Zone 7",
    areas: ["Gbagada", "Ifako", "Anthony", "Palmgroove", "Onipan"],
    communities: [
      {
        id: "z7-joy-tribe",
        name: "JOY Tribe",
        address: "16 Lateef Ali Crescent, Sholuyi, Gbagada, Lagos",
        area: "Gbagada",
      },
      {
        id: "z7-placeholder-1",
        name: "Additional MC Location",
        address: "Meeting address to be confirmed",
        area: "Area to be confirmed",
        placeholder: true,
      },
      {
        id: "z7-placeholder-2",
        name: "Additional MC Location",
        address: "Meeting address to be confirmed",
        area: "Area to be confirmed",
        placeholder: true,
      },
    ],
  },
];

const zoneThemes = [
  {
    tint: "#E7F6FC",
    accent: "#007EAF",
    number: "01",
    shape: "rounded-tl-[1.75rem] rounded-br-[0.5rem]",
  },
  {
    tint: "#FFF2D0",
    accent: "#946500",
    number: "02",
    shape: "rounded-tr-[1.75rem] rounded-bl-[0.5rem]",
  },
  {
    tint: "#E5F6EB",
    accent: "#087B49",
    number: "03",
    shape: "rounded-tl-[0.5rem] rounded-br-[1.75rem]",
  },
  {
    tint: "#F0EAFE",
    accent: "#7550B8",
    number: "04",
    shape: "rounded-tr-[0.5rem] rounded-bl-[1.75rem]",
  },
  {
    tint: "#FCEAE5",
    accent: "#B74D31",
    number: "05",
    shape: "rounded-tl-[1.75rem] rounded-br-[0.5rem]",
  },
  {
    tint: "#E7EEFF",
    accent: "#365DB5",
    number: "06",
    shape: "rounded-tr-[1.75rem] rounded-bl-[0.5rem]",
  },
  {
    tint: "#E3F5F1",
    accent: "#087D6B",
    number: "07",
    shape: "rounded-tl-[0.5rem] rounded-br-[1.75rem]",
  },
];

export const MCZones = () => {
  const [search, setSearch] = useState("");
  const [activeZone, setActiveZone] = useState<number>(7);

  const query = search.trim().toLowerCase();

  const filteredZones = useMemo(() => {
    if (!query) return zones;

    return zones.filter((zone) => {
      const zoneMatches = zone.name.toLowerCase().includes(query);

      const areaMatches = zone.areas.some((area) =>
        area.toLowerCase().includes(query),
      );

      const communityMatches = zone.communities.some((community) =>
        [community.name, community.address, community.area].some((value) =>
          value.toLowerCase().includes(query),
        ),
      );

      return zoneMatches || areaMatches || communityMatches;
    });
  }, [query]);

  const selectedZone = useMemo(() => {
    if (query) {
      return (
        filteredZones.find((zone) => zone.id === activeZone) ??
        filteredZones[0] ??
        null
      );
    }

    return zones.find((zone) => zone.id === activeZone) ?? zones[6];
  }, [activeZone, filteredZones, query]);

  const visibleCommunities = useMemo(() => {
    if (!selectedZone) return [];

    if (!query) return selectedZone.communities;

    const zoneMatches = selectedZone.name.toLowerCase().includes(query);
    const areaMatches = selectedZone.areas.some((area) =>
      area.toLowerCase().includes(query),
    );

    if (zoneMatches || areaMatches) return selectedZone.communities;

    return selectedZone.communities.filter((community) =>
      [community.name, community.address, community.area].some((value) =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [query, selectedZone]);

  const totalListings = zones.reduce(
    (total, zone) => total + zone.communities.length,
    0,
  );

  return (
    <section
      id="mc-zones"
      aria-labelledby="mc-zones-heading"
      className="relative isolate overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-cyan/[0.08] blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-40 h-80 w-80 rounded-full bg-brand-gold/[0.10] blur-[100px]"
      />

      <div className="gh-container relative mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <header className="grid gap-8 lg:grid-cols-[1.15fr_0.65fr] lg:items-end lg:gap-16">
          <div>
            <h2
              id="mc-zones-heading"
              className="mt-7 max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.055em] text-brand-blue-dark sm:text-5xl lg:text-[4.25rem]"
            >
              Church feels different
              <span className="relative mt-1 block w-fit">
                <span className="relative z-10">when it feels like</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-0 h-3 w-full -rotate-1 rounded-full bg-brand-gold/70 sm:bottom-2 sm:h-4"
                />
              </span>
              <span className="mt-1 block text-brand-cyan-dark">
                your kind of people.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end lg:pb-2">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              Across Lagos, our seven zones bring people closer to faith,
              friendship, and everyday community. Find the zone that connects
              with where you live.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-5">
              <div>
                <p className="text-2xl font-bold tracking-tight text-brand-blue-dark">
                  07
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Zones
                </p>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div>
                <p className="text-2xl font-bold tracking-tight text-brand-blue-dark">
                  Lagos
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  Local connections
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_20px_70px_rgba(7,23,68,0.055)] sm:mt-16 sm:rounded-[2.25rem]">
          <div className="border-b border-slate-200/80 p-5 sm:p-7 lg:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-cyan-dark">
                  Start exploring
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-brand-blue-dark sm:text-3xl">
                  Where are you based?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Select a zone or search for a neighbourhood.
                </p>
              </div>

              <label className="relative block w-full md:max-w-sm">
                <span className="sr-only">
                  Search zones, neighbourhoods, or communities
                </span>

                <SearchOutlined className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-400" />

                <input
                  id="mc-zone-search"
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    const nextQuery = event.target.value.trim().toLowerCase();

                    if (nextQuery) {
                      const match = zones.find((zone) =>
                        zone.communities.some((community) =>
                          [
                            community.name,
                            community.address,
                            community.area,
                          ].some((value) =>
                            value.toLowerCase().includes(nextQuery),
                          ),
                        ),
                      );

                      if (match) setActiveZone(match.id);
                    }
                  }}
                  placeholder="Try Gbagada or JOY Tribe"
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFC] pl-11 pr-4 text-sm text-brand-blue-dark outline-none transition placeholder:text-slate-400 focus:border-brand-cyan focus:bg-white focus:ring-4 focus:ring-brand-cyan/10"
                />
              </label>
            </div>

            {query && (
              <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-[#F1F8FC] px-4 py-3">
                <p className="text-sm text-slate-600">
                  <span className="font-bold text-brand-blue-dark">
                    {filteredZones.length}
                  </span>{" "}
                  {filteredZones.length === 1 ? "zone" : "zones"} matching{" "}
                  <span className="font-semibold text-brand-blue-dark">
                    “{search.trim()}”
                  </span>
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveZone(7);
                  }}
                  className="shrink-0 text-xs font-bold text-brand-cyan-dark underline decoration-brand-cyan/40 underline-offset-4 hover:text-brand-blue-dark"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)]">
            <aside
              aria-label="Choose a zone"
              className="border-b border-slate-200/80 bg-[#FBFCFE] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-5 xl:p-6"
            >
              <div className="mb-4 flex items-center justify-between px-1">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-slate-500">
                  Explore by zone
                </p>

                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                  {filteredZones.length} available
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {filteredZones.map((zone) => {
                  const theme = zoneThemes[zone.id - 1];
                  const isActive = selectedZone?.id === zone.id;

                  return (
                    <button
                      key={zone.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveZone(zone.id)}
                      className={`group relative flex min-h-[105px] flex-col items-start justify-between overflow-hidden border p-3.5 text-left transition-all duration-200 sm:min-h-[115px] sm:p-4 lg:min-h-0 lg:flex-row lg:items-center lg:gap-3 lg:rounded-2xl ${
                        isActive
                          ? "border-brand-blue-dark bg-brand-blue-dark text-white shadow-lg shadow-brand-blue-dark/15"
                          : `border-transparent hover:border-slate-200 hover:bg-white ${theme.shape}`
                      }`}
                      style={
                        isActive
                          ? undefined
                          : { backgroundColor: theme.tint }
                      }
                    >
                      <span
                        className={`absolute -right-4 -top-5 h-20 w-20 rounded-full border-[12px] transition-transform duration-300 group-hover:scale-110 ${
                          isActive ? "border-white/[0.07]" : "border-white/60"
                        }`}
                        aria-hidden="true"
                      />

                      <span className="relative flex w-full items-center justify-between gap-2 lg:justify-start">
                        <span
                          className={`font-mono text-[10px] font-bold tracking-[0.14em] ${
                            isActive ? "text-brand-gold" : "text-slate-500"
                          }`}
                        >
                          {theme.number}
                        </span>

                        {isActive && (
                          <CheckCircleFilled className="text-sm text-brand-gold lg:hidden" />
                        )}
                      </span>

                      <span className="relative mt-4 flex w-full items-center justify-between gap-2 lg:mt-0">
                        <span
                          className={`text-base font-bold sm:text-lg ${
                            isActive ? "text-white" : "text-brand-blue-dark"
                          }`}
                        >
                          {zone.name}
                        </span>

                        <span
                          className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs transition-all lg:flex ${
                            isActive
                              ? "bg-white/10 text-brand-gold"
                              : "bg-white/70 text-slate-500 group-hover:translate-x-0.5"
                          }`}
                        >
                          {isActive ? (
                            <CheckCircleFilled />
                          ) : (
                            <ArrowRightOutlined />
                          )}
                        </span>
                      </span>

                      <span
                        className={`relative mt-1.5 line-clamp-2 text-[11px] leading-5 lg:hidden ${
                          isActive ? "text-white/65" : "text-slate-600"
                        }`}
                      >
                        {zone.areas.join(", ")}
                      </span>
                    </button>
                  );
                })}

                {filteredZones.length === 0 && (
                  <div className="col-span-full rounded-xl border border-dashed border-slate-300 p-5 text-center lg:col-span-1">
                    <p className="text-sm font-semibold text-brand-blue-dark">
                      No zones found
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Try another search.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-5 hidden rounded-2xl border border-dashed border-slate-200 p-4 lg:block">
                <div className="flex items-center gap-2 text-brand-blue-dark">
                  <EnvironmentOutlined className="text-brand-cyan" />
                  <p className="text-xs font-bold">Made for your neighbourhood</p>
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Start with your area, then explore the communities connected
                  to it.
                </p>
              </div>
            </aside>

            <div className="min-w-0 p-5 sm:p-7 lg:p-8 xl:p-10">
              {selectedZone ? (
                <>
                  <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-brand-cyan/10 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-brand-cyan-dark">
                        <EnvironmentOutlined />
                        Selected location
                      </div>

                      <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-brand-blue-dark sm:text-4xl">
                        {selectedZone.name}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                        {selectedZone.areas.join(" · ")}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-[#F8FAFC] px-4 py-3 sm:min-w-[130px]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/25 text-brand-blue-dark">
                        <HomeOutlined />
                      </span>
                      <div>
                        <p className="text-xl font-bold text-brand-blue-dark">
                          {visibleCommunities.length}
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                          {visibleCommunities.length === 1
                            ? "Listing"
                            : "Listings"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <h4 className="text-sm font-bold text-brand-blue-dark sm:text-base">
                      Communities in this zone
                    </h4>

                    <span className="text-xs text-slate-400">
                      {selectedZone.id === 7
                        ? "Local connections"
                        : "Directory listings"}
                    </span>
                  </div>

                  {visibleCommunities.length > 0 ? (
                    <div className="mt-4 space-y-3">
                      {visibleCommunities.map((community, index) => (
                        <article
                          key={community.id}
                          className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 transition-all duration-200 hover:border-brand-cyan/40 hover:shadow-[0_12px_32px_rgba(7,23,68,0.06)] sm:p-5"
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                                community.placeholder
                                  ? "bg-amber-50 text-amber-700"
                                  : "bg-[#E5F6EB] text-[#087B49]"
                              }`}
                            >
                              {community.placeholder ? (
                                <HomeOutlined className="text-lg" />
                              ) : (
                                <TeamOutlined className="text-lg" />
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h5 className="text-base font-bold leading-6 text-brand-blue-dark sm:text-lg">
                                  {community.name}
                                </h5>

                                {community.placeholder ? (
                                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-800">
                                    To be confirmed
                                  </span>
                                ) : (
                                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-700">
                                    Listed community
                                  </span>
                                )}
                              </div>

                              <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-600">
                                <EnvironmentOutlined className="mt-1 shrink-0 text-brand-cyan-dark" />
                                <span>{community.address}</span>
                              </p>

                              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
                                  {community.area}
                                </span>

                                <span className="text-[10px] font-mono text-slate-400">
                                  MC-{String(index + 1).padStart(2, "0")}
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-5 rounded-2xl border border-dashed border-slate-300 bg-[#FAFBFD] px-5 py-10 text-center">
                      <SearchOutlined className="text-2xl text-slate-400" />
                      <h5 className="mt-3 font-bold text-brand-blue-dark">
                        No matching locations
                      </h5>
                      <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                        Try another neighbourhood or search term to discover
                        available listings.
                      </p>
                    </div>
                  )}

                  <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-slate-500">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                    Some locations are still being confirmed. Contact the
                    church team for help finding the right community.
                  </p>
                </>
              ) : (
                <div className="flex min-h-72 flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cyan/10 text-brand-cyan-dark">
                    <SearchOutlined className="text-xl" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-brand-blue-dark">
                    Choose a zone to begin
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Select one of the zones to explore its Missional Community
                    listings.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 overflow-hidden rounded-[1.75rem] bg-brand-blue-dark p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-9">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-gold text-brand-blue-dark">
              <TeamOutlined className="text-xl" />
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.19em] text-brand-cyan">
                We can help
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                Not sure which zone is yours?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                Navigate through our zones, and we can help you find the
                most suitable Missional Community.
              </p>
            </div>
          </div>

          <a
            href="/our-zones"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-blue-dark transition duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-dark"
          >
            Explore our zonal locations
            <ArrowRightOutlined />
          </a>
        </div>
      </div>
    </section>
  );
};