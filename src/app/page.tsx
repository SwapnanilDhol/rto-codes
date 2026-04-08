"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { trackEvent } from "@/lib/analytics";
import { useTheme } from "@/components/ThemeProvider";
import IndianPlate from "@/components/IndianPlate";
import { indiaStatesWithDistricts } from "@/data/districts";
import { indiaStatesGeoJSON } from "@/data/loader";
import { RTOFeature } from "@/types/rto";

const RTOMap = dynamic(() => import("@/components/RTOMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#020617]" />,
});

const POPULAR_STATE_CODES = ["MH", "DL", "KA", "TN", "TS", "GJ", "UP", "WB"];

const WIKI_TITLE_MAP: Record<string, string> = {
  AN: "Andaman_and_Nicobar_Islands",
  AP: "Andhra_Pradesh",
  AR: "Arunachal_Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CH: "Chandigarh",
  CG: "Chhattisgarh",
  DN: "Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
  DL: "Delhi",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal_Pradesh",
  JH: "Jharkhand",
  JK: "Jammu_and_Kashmir_(union_territory)",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MH: "Maharashtra",
  ML: "Meghalaya",
  MN: "Manipur",
  MP: "Madhya_Pradesh",
  MZ: "Mizoram",
  NL: "Nagaland",
  OD: "Odisha",
  PB: "Punjab,_India",
  PY: "Puducherry_(union_territory)",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil_Nadu",
  TR: "Tripura",
  TS: "Telangana",
  UK: "Uttarakhand",
  UP: "Uttar_Pradesh",
  WB: "West_Bengal",
};

type CodeEntry = {
  id: string;
  district: string;
  rtoCode: string;
  alternateCodes: string[];
};

type StateLookup = {
  code: string;
  name: string;
  entries: CodeEntry[];
};

type WikiSummary = {
  title: string;
  description?: string;
  extract?: string;
  thumbnailUrl?: string;
};

type StateNote = {
  eyebrow: string;
  text: string;
};

type HoverOverlayState = {
  stateCode: string;
  x: number;
  y: number;
};

function normalizeValue(value: string) {
  return value.toLowerCase().replace(/[\s-]/g, "");
}

function getStateChipLabel(code: string) {
  return code === "TS" ? "TG/TS" : code;
}

function getStateNote(state: StateLookup | undefined): StateNote | null {
  if (!state) return null;

  const specialNotes: Record<string, StateNote> = {
    AN: {
      eyebrow: "Territory note",
      text: "AN is a short island code family in this dataset, split across South Andaman, North and Middle Andaman, and Nicobar.",
    },
    AP: {
      eyebrow: "Prefix note",
      text: "Andhra Pradesh kept the AP registration mark after Telangana was carved out as a separate state in 2014.",
    },
    AS: {
      eyebrow: "Metro split",
      text: "Assam separates Kamrup Metropolitan from Kamrup in this dataset, so Guwahati gets its own code block instead of sharing one district series.",
    },
    CH: {
      eyebrow: "Single-city code",
      text: "Chandigarh is both a city and a union territory, so the same CH family covers the whole territory.",
    },
    CG: {
      eyebrow: "Statehood note",
      text: "CG is a newer state prefix that appeared after Chhattisgarh was formed out of Madhya Pradesh in 2000.",
    },
    DD: {
      eyebrow: "Merged UT note",
      text: "DD is the newer registration mark for the merged union territory of Dadra & Nagar Haveli and Daman & Diu; it took effect in January 2020.",
    },
    DL: {
      eyebrow: "Delhi quirk",
      text: "In Delhi, the letter after the zonal code can denote vehicle class too: the Delhi Transport Department shows C for cars and S for two-wheelers in examples like DL-04-C-1969.",
    },
    DN: {
      eyebrow: "Legacy prefix",
      text: "DN is the older Dadra & Nagar Haveli mark. Newer registrations in the merged union territory now use DD, but DN still matters for older vehicles.",
    },
    GA: {
      eyebrow: "Compact code map",
      text: "Goa stays unusually compact in this dataset: GA-01 and GA-02 cover North Goa and South Goa.",
    },
    JK: {
      eyebrow: "Reorganisation note",
      text: "JK continues as the vehicle mark for the Union Territory of Jammu and Kashmir even after the 2019 split that created Ladakh.",
    },
    JH: {
      eyebrow: "Statehood note",
      text: "JH is another post-2000 prefix, introduced after Jharkhand was carved out as a separate state.",
    },
    KA: {
      eyebrow: "Metro note",
      text: "KA is one of the most recognizable prefixes in the country because Bengaluru occupies several of the earliest and busiest code blocks.",
    },
    KL: {
      eyebrow: "Dense network",
      text: "Kerala packs a dense registration network into the KL family, with many district and sub-regional offices for a relatively narrow state.",
    },
    LA: {
      eyebrow: "New UT code",
      text: "LA was assigned after Ladakh became a separate union territory in 2019, giving it a distinct vehicle mark from JK.",
    },
    MH: {
      eyebrow: "Large code set",
      text: `Maharashtra has ${state.entries.length} code blocks in this dataset, making MH one of the larger registration families on the map.`,
    },
    OD: {
      eyebrow: "Renamed-state note",
      text: "Odisha switched new registrations from OR to OD in 2012 after the state's official name changed from Orissa to Odisha; older OR plates can still exist.",
    },
    PB: {
      eyebrow: "Tricity note",
      text: "PB and CH often appear together around the Chandigarh tricity, but Punjab keeps its own district-wise PB ladder.",
    },
    PY: {
      eyebrow: "Shared UT prefix",
      text: "Puducherry's enclaves are geographically separate, but they still sit under the same PY registration family.",
    },
    SK: {
      eyebrow: "Smallest ladder",
      text: "Sikkim has one of the shortest code ladders in the dataset, which makes SK one of the cleanest prefixes to scan quickly.",
    },
    TN: {
      eyebrow: "Long sequence",
      text: "Tamil Nadu uses a long TN number sequence, with Chennai and the major regional offices occupying many early blocks in the ladder.",
    },
    TR: {
      eyebrow: "Small-state pattern",
      text: "Tripura stays compact enough that the TR family covers only a small set of transport office regions.",
    },
    TS: {
      eyebrow: "Code change",
      text: "Telangana's registration mark was changed from TS to TG by a central notification in March 2024. Older TS plates still remain valid, which is why both show up.",
    },
    UK: {
      eyebrow: "Current prefix",
      text: "Uttarakhand's transport department now uses UK as the state prefix, so registrations read like UK-07 for Dehradun.",
    },
    UP: {
      eyebrow: "Massive grid",
      text: `UP is one of the biggest code networks in the app, with ${state.entries.length} registration offices listed in this dataset.`,
    },
    WB: {
      eyebrow: "Metro-heavy early series",
      text: "West Bengal's early WB blocks are Kolkata-heavy, but the family stretches much further once you move beyond the first urban offices.",
    },
  };

  const specialNote = specialNotes[state.code];
  if (specialNote) return specialNote;

  if (state.entries.length === 1) {
    return {
      eyebrow: "Single-code territory",
      text: `${state.name} only uses one code block in this dataset, so the state prefix does almost all of the visual work on the plate.`,
    };
  }

  if (state.entries.length === 2) {
    return {
      eyebrow: "Two-code split",
      text: `${state.name} is represented by just two transport office codes here, which keeps the prefix family unusually easy to scan.`,
    };
  }

  if (state.entries.length >= 25) {
    return {
      eyebrow: "Wide network",
      text: `${state.name} has ${state.entries.length} code blocks in this dataset, so the numeric segment matters far more than the state prefix once you are inside the state.`,
    };
  }

  return {
    eyebrow: "Dataset note",
    text: `${state.name} uses ${state.entries.length} code blocks in this dataset; the prefix stays fixed while the numeric segment points to the local registering authority.`,
  };
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const sidebarScrollRef = useRef<HTMLDivElement | null>(null);
  const lastTrackedSearchRef = useRef("");
  const [query, setQuery] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("MH");
  const [sidebarView, setSidebarView] = useState<"browse" | "details">("browse");
  const [wikiSummary, setWikiSummary] = useState<WikiSummary | null>(null);
  const [wikiLoading, setWikiLoading] = useState(false);
  const [hoveredState, setHoveredState] = useState<HoverOverlayState | null>(null);

  const states = useMemo<StateLookup[]>(
    () =>
      indiaStatesWithDistricts.map((state) => ({
        code: state.code,
        name: state.name,
        entries: state.districts.map((district) => ({
          id: district.id,
          district: district.name.trim(),
          rtoCode: district.rtoCode,
          alternateCodes: district.alternateCodes ?? [],
        })),
      })),
    []
  );

  const stateByCode = useMemo(
    () => new Map(states.map((state) => [state.code, state])),
    [states]
  );

  const filteredStates = useMemo(() => {
    if (!query.trim()) return states;
    const normalizedQuery = normalizeValue(query);

    return states.filter((state) => {
      if (
        normalizeValue(state.name).includes(normalizedQuery) ||
        normalizeValue(state.code).includes(normalizedQuery)
      ) {
        return true;
      }

      return state.entries.some((entry) => {
        const alternateMatch = entry.alternateCodes.some((code) =>
          normalizeValue(code).includes(normalizedQuery)
        );

        return (
          normalizeValue(entry.district).includes(normalizedQuery) ||
          normalizeValue(entry.rtoCode).includes(normalizedQuery) ||
          alternateMatch
        );
      });
    });
  }, [query, states]);

  const selectedState = stateByCode.get(selectedStateCode) ?? states[0];

  const filteredEntries = useMemo(() => {
    if (!selectedState) return [];
    if (!query.trim()) return selectedState.entries;

    const normalizedQuery = normalizeValue(query);
    return selectedState.entries.filter((entry) => {
      const alternateMatch = entry.alternateCodes.some((code) =>
        normalizeValue(code).includes(normalizedQuery)
      );

      return (
        normalizeValue(entry.district).includes(normalizedQuery) ||
        normalizeValue(entry.rtoCode).includes(normalizedQuery) ||
        alternateMatch ||
        normalizeValue(selectedState.name).includes(normalizedQuery) ||
        normalizeValue(selectedState.code).includes(normalizedQuery)
      );
    });
  }, [query, selectedState]);

  const selectedFeature = useMemo(
    () =>
      indiaStatesGeoJSON.features.find(
        (feature) => feature.properties.code === selectedState?.code
      ) ?? null,
    [selectedState]
  );

  const popularStates = useMemo(
    () => filteredStates.filter((state) => POPULAR_STATE_CODES.includes(state.code)),
    [filteredStates]
  );

  const otherStates = useMemo(
    () => filteredStates.filter((state) => !POPULAR_STATE_CODES.includes(state.code)),
    [filteredStates]
  );

  useEffect(() => {
    if (!selectedState) return;

    const wikiTitle = WIKI_TITLE_MAP[selectedState.code] ?? selectedState.name.replace(/\s+/g, "_");
    const controller = new AbortController();

    async function loadWikiSummary() {
      setWikiLoading(true);
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Wikipedia fetch failed");

        const payload = await response.json();
        setWikiSummary({
          title: payload.title ?? selectedState.name,
          description: payload.description,
          extract: payload.extract,
          thumbnailUrl: payload.thumbnail?.source,
        });
      } catch {
        if (!controller.signal.aborted) {
          setWikiSummary({
            title: selectedState.name,
            description: "State or union territory in India",
            extract: `${selectedState.name} has ${selectedState.entries.length} registration codes in the current dataset.`,
          });
        }
      } finally {
        if (!controller.signal.aborted) setWikiLoading(false);
      }
    }

    loadWikiSummary();
    return () => controller.abort();
  }, [selectedState]);

  useEffect(() => {
    const container = sidebarScrollRef.current;
    if (!container) return;
    container.scrollTo({ top: 0, behavior: "auto" });
  }, [sidebarView, selectedStateCode]);

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (trimmedQuery.length < 2) {
      lastTrackedSearchRef.current = "";
      return;
    }

    const timer = window.setTimeout(() => {
      const normalizedQuery = trimmedQuery.toLowerCase();
      if (lastTrackedSearchRef.current === normalizedQuery) return;

      trackEvent("search_rto", {
        query: trimmedQuery,
        scope: sidebarView === "details" ? "state" : "global",
        state_code: sidebarView === "details" ? selectedState?.code : undefined,
      });
      lastTrackedSearchRef.current = normalizedQuery;
    }, 450);

    return () => window.clearTimeout(timer);
  }, [query, selectedState, sidebarView]);

  const handleStateSelect = useCallback((stateCode: string) => {
    setSelectedStateCode(stateCode);
    setQuery("");
    setSidebarView("details");
    trackEvent("select_state", { state_code: stateCode });
  }, []);

  const handleMapSelect = useCallback(
    (feature: RTOFeature | null) => {
      if (!feature?.properties.code) return;
      handleStateSelect(feature.properties.code);
    },
    [handleStateSelect]
  );

  const handleMapHover = useCallback((feature: RTOFeature | null, pointer?: { x: number; y: number }) => {
    if (!feature?.properties.code || !pointer) {
      setHoveredState(null);
      return;
    }

    const tooltipWidth = 214;
    const tooltipHeight = 58;
    const clampedX = Math.min(pointer.x + 18, window.innerWidth - tooltipWidth - 16);
    const clampedY = Math.min(
      Math.max(pointer.y - tooltipHeight - 12, 16),
      window.innerHeight - tooltipHeight - 16
    );

    setHoveredState({
      stateCode: feature.properties.code,
      x: clampedX,
      y: clampedY,
    });
  }, []);

  const shellClass =
    theme === "dark"
      ? "bg-[#020617] text-white"
      : "bg-[#f8fafc] text-slate-900";
  const panelClass =
    theme === "dark"
      ? "border-white/10 bg-[#020617]/84 backdrop-blur-xl"
      : "border-slate-200/80 bg-white/84 backdrop-blur-xl";
  const searchClass =
    theme === "dark"
      ? "border-white/10 bg-white/[0.05] text-white placeholder:text-slate-500"
      : "border-slate-200/80 bg-white/78 text-slate-900 placeholder:text-slate-400";
  const selectedClass =
    theme === "dark"
      ? "border-sky-400/40 bg-sky-400/10 shadow-[0_10px_30px_rgba(14,165,233,0.12)] hover:-translate-y-0.5 hover:bg-sky-400/14"
      : "border-sky-300 bg-sky-50 shadow-[0_10px_24px_rgba(59,130,246,0.08)] hover:-translate-y-0.5 hover:bg-sky-100/88";
  const idleClass =
    theme === "dark"
      ? "border-white/8 bg-white/[0.035] hover:-translate-y-0.5 hover:bg-white/[0.055] hover:border-white/14 hover:shadow-[0_12px_30px_rgba(2,6,23,0.18)]"
      : "border-slate-200/80 bg-white/74 hover:-translate-y-0.5 hover:bg-white/88 hover:border-slate-300/80 hover:shadow-[0_12px_28px_rgba(148,163,184,0.14)]";
  const mutedLabelClass = theme === "dark" ? "text-slate-500" : "text-slate-400";
  const mutedTextClass = theme === "dark" ? "text-slate-400" : "text-slate-500";
  const sectionBorderClass = theme === "dark" ? "border-white/10" : "border-slate-200";
  const cardClass =
    theme === "dark"
      ? "border-white/8 bg-white/[0.035] backdrop-blur-md"
      : "border-slate-200/80 bg-white/78 backdrop-blur-md";

  const previewPrimaryCode =
    selectedState?.code === "TS"
      ? `${selectedState.code}-28-PK-1310`
      : `${selectedState?.code ?? "MH"}-28-PK-1310`;
  const previewAlternateCode = selectedState?.code === "TS" ? "TG-28-PK-1310" : undefined;
  const wikiUrl = selectedState
    ? `https://en.wikipedia.org/wiki/${
        WIKI_TITLE_MAP[selectedState.code] ?? selectedState.name.replace(/\s+/g, "_")
      }`
    : "#";
  const stateNote = getStateNote(selectedState);
  const hoveredStateLookup = hoveredState ? stateByCode.get(hoveredState.stateCode) : null;
  const sidebarTransition = {
    type: "spring" as const,
    stiffness: 260,
    damping: 36,
    mass: 1,
  };

  return (
    <div className={`h-screen overflow-hidden ${shellClass}`}>
      <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)]">
        <aside className={`relative z-10 flex h-full min-h-0 flex-col border-r shadow-[0_20px_60px_rgba(15,23,42,0.12)] ${panelClass}`}>
          <div className={`border-b px-4 py-4 ${sectionBorderClass}`}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-semibold tracking-tight">RTO.codes</p>
                <p className={`text-xs ${mutedLabelClass}`}>Search and browse India RTO codes</p>
              </div>
              <button
                onClick={() => {
                  trackEvent("toggle_theme", {
                    theme: theme === "dark" ? "light" : "dark",
                  });
                  toggleTheme();
                }}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Light mode" : "Dark mode"}
                className={`cursor-pointer rounded-xl border p-2.5 transition ${searchClass}`}
              >
                {theme === "dark" ? (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M12 3v2.25M12 18.75V21M4.72 4.72l1.59 1.59M17.69 17.69l1.59 1.59M3 12h2.25M18.75 12H21M4.72 19.28l1.59-1.59M17.69 6.31l1.59-1.59M15.75 12A3.75 3.75 0 118.25 12a3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M21 12.8A9 9 0 1111.2 3a7.5 7.5 0 009.8 9.8z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className={`mt-4 flex items-center gap-3 rounded-[18px] border px-4 py-3 ${searchClass}`}>
              <svg
                className={`h-4 w-4 shrink-0 ${mutedLabelClass}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  sidebarView === "details"
                    ? `Search within ${selectedState?.code === "TS" ? "TS / TG" : selectedState?.code}`
                    : "Search state, district, or code"
                }
                className={`w-full bg-transparent text-sm outline-none ${
                  theme === "dark"
                    ? "text-white placeholder:text-slate-500"
                    : "text-slate-900 placeholder:text-slate-400"
                }`}
              />
            </div>

            {sidebarView === "browse" ? (
              <div className="mt-3">
                <p className={`pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                  Popular / Metro
                </p>
                <div className="flex flex-wrap gap-2">
                  {states
                    .filter((state) => POPULAR_STATE_CODES.includes(state.code))
                    .map((state) => (
                      <button
                        key={state.code}
                        onClick={() => handleStateSelect(state.code)}
                        className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition duration-200 ${
                          selectedState?.code === state.code ? selectedClass : idleClass
                        }`}
                      >
                        {getStateChipLabel(state.code)}
                      </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div
            ref={sidebarScrollRef}
            className="min-h-0 flex-1 overflow-y-auto px-3 py-3 scrollbar-thin"
          >
            <AnimatePresence mode="wait" initial={false}>
              {sidebarView === "browse" ? (
                <motion.section
                  key="browse"
                  className="transform-gpu will-change-transform"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  transition={sidebarTransition}
                >
                  {query.trim() ? (
                    <>
                      <p className={`px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                        Search results
                      </p>
                      <div className="space-y-2">
                        {filteredStates.map((state) => (
                          <button
                            key={state.code}
                            onClick={() => handleStateSelect(state.code)}
                            className={`cursor-pointer w-full rounded-[18px] border px-4 py-3 text-left transition duration-200 ${
                              selectedState?.code === state.code ? selectedClass : idleClass
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="min-w-0">
                                <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${mutedLabelClass}`}>
                                  {state.code === "TS" ? "TS / TG" : state.code}
                                </p>
                                <p className="mt-1 truncate text-sm font-medium">{state.name}</p>
                              </div>
                              <span className={`text-xs ${mutedLabelClass}`}>{state.entries.length}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      {popularStates.length > 0 ? (
                        <section>
                          <p className={`px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                            Popular / Metro
                          </p>
                          <div className="space-y-2">
                            {popularStates.map((state) => (
                              <button
                                key={state.code}
                                onClick={() => handleStateSelect(state.code)}
                                className={`cursor-pointer w-full rounded-[18px] border px-4 py-3 text-left transition duration-200 ${
                                  selectedState?.code === state.code ? selectedClass : idleClass
                                }`}
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <div className="min-w-0">
                                    <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${mutedLabelClass}`}>
                                      {state.code === "TS" ? "TS / TG" : state.code}
                                    </p>
                                    <p className="mt-1 truncate text-sm font-medium">{state.name}</p>
                                  </div>
                                  <span className={`text-xs ${mutedLabelClass}`}>{state.entries.length}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </section>
                      ) : null}

                      {otherStates.length > 0 ? (
                        <section className={popularStates.length > 0 ? "mt-5" : ""}>
                          <p className={`px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                            Rest of India
                          </p>
                          <div className="space-y-2">
                            {otherStates.map((state) => (
                              <button
                                key={state.code}
                                onClick={() => handleStateSelect(state.code)}
                                className={`cursor-pointer w-full rounded-[18px] border px-4 py-3 text-left transition duration-200 ${
                                  selectedState?.code === state.code ? selectedClass : idleClass
                                }`}
                              >
                                <div className="flex items-center justify-between gap-3">
                                  <div className="min-w-0">
                                    <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${mutedLabelClass}`}>
                                      {state.code}
                                    </p>
                                    <p className="mt-1 truncate text-sm font-medium">{state.name}</p>
                                  </div>
                                  <span className={`text-xs ${mutedLabelClass}`}>{state.entries.length}</span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </section>
                      ) : null}
                    </>
                  )}
                </motion.section>
              ) : (
                <motion.section
                  key="details"
                  className="pt-1 transform-gpu will-change-transform"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -4 }}
                  transition={sidebarTransition}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <button
                        onClick={() => setSidebarView("browse")}
                        className={`cursor-pointer mb-3 inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition duration-200 ${idleClass}`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.8}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Back
                      </button>
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${mutedLabelClass}`}>
                        Selected state
                      </p>
                      <p className="mt-1 text-[1.45rem] font-semibold tracking-[-0.03em]">
                        {selectedState?.name}
                      </p>
                      <p className={`mt-1 text-sm font-medium ${mutedTextClass}`}>
                        {selectedState?.code}
                        {selectedState?.code === "TS" ? " / TG" : ""} • {filteredEntries.length} visible codes
                      </p>
                    </div>
                    <a
                      href="https://forms.gle/2kz7DHf2uMvrm6H59"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent("click_report_issue", {
                          state_code: selectedState?.code,
                        })
                      }
                      className={`cursor-pointer inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition duration-200 ${idleClass}`}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M12 9v3.75m0 3.75h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Report issue
                    </a>
                  </div>

                  {stateNote ? (
                    <div
                      className={`mt-4 rounded-[18px] border px-3.5 py-3 ${
                        theme === "dark"
                          ? "border-amber-400/20 bg-amber-400/8"
                          : "border-amber-300 bg-amber-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 rounded-full p-1.5 ${
                            theme === "dark" ? "bg-amber-300/12 text-amber-300" : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.8}
                              d="M12 9v3.75m0 3.75h.01M10.29 3.86l-7.5 13A2 2 0 004.53 20h14.94a2 2 0 001.74-3.14l-7.5-13a2 2 0 00-3.42 0z"
                            />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <p
                            className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
                              theme === "dark" ? "text-amber-300/80" : "text-amber-700"
                            }`}
                          >
                            {stateNote.eyebrow}
                          </p>
                          <p
                            className={`mt-1 text-sm leading-6 ${
                              theme === "dark" ? "text-amber-50/88" : "text-amber-950/85"
                            }`}
                          >
                            {stateNote.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : null}

                    <a
                      href={wikiUrl}
                      target="_blank"
                      rel="noreferrer"
                    onClick={() =>
                      trackEvent("click_wikipedia_summary", {
                        state_code: selectedState?.code,
                        wiki_url: wikiUrl,
                      })
                    }
                    className={`group mt-3 block cursor-pointer rounded-[18px] border p-3 transition duration-200 hover:-translate-y-0.5 ${cardClass} ${theme === "dark" ? "hover:bg-white/[0.05] hover:shadow-[0_16px_32px_rgba(2,6,23,0.18)]" : "hover:bg-slate-100 hover:shadow-[0_16px_32px_rgba(148,163,184,0.14)]"}`}
                  >
                    <div className="overflow-hidden rounded-[18px]">
                      {wikiSummary?.thumbnailUrl ? (
                        <div className="relative h-28 overflow-hidden rounded-[16px]">
                          <img
                            src={wikiSummary.thumbnailUrl}
                            alt={wikiSummary.title ?? selectedState?.name}
                            className="h-full w-full scale-105 object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.78)_100%)]" />
                          <div className="absolute inset-x-0 bottom-0 p-3 backdrop-blur-[1px]">
                            <p className="text-sm font-semibold text-white">
                              {wikiSummary?.title ?? selectedState?.name}
                            </p>
                            <p className="mt-0.5 text-xs text-white/80">
                              {wikiLoading
                                ? "Loading summary..."
                                : wikiSummary?.description ?? "State or union territory in India"}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold tracking-[-0.02em]">
                          {wikiSummary?.title ?? selectedState?.name}
                        </p>
                        <p className={`mt-1 text-[11px] font-medium ${mutedLabelClass}`}>
                          {wikiLoading
                            ? "Loading summary..."
                            : wikiSummary?.description ?? "State or union territory in India"}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 text-xs font-medium ${
                          theme === "dark"
                            ? "text-slate-500 group-hover:text-slate-300"
                            : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      >
                        Wikipedia
                      </span>
                    </div>
                    <p className={`mt-3 line-clamp-2 text-sm leading-6 ${mutedTextClass}`}>
                      {wikiLoading
                        ? "Fetching a short reference summary."
                        : wikiSummary?.extract ??
                          `${selectedState?.name} has ${selectedState?.entries.length} registration codes in the current dataset.`}
                    </p>
                  </a>

                  <div className="mt-3">
                    <IndianPlate
                      primaryCode={previewPrimaryCode}
                      alternateCode={previewAlternateCode}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-3 pb-3">
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                        All codes
                      </p>
                      <span className={`text-xs font-medium ${mutedTextClass}`}>{filteredEntries.length}</span>
                    </div>
                    <div className="grid gap-2">
                      {filteredEntries.map((entry) => (
                        <div
                          key={entry.id}
                          className={`rounded-[16px] border px-3 py-2.5 ${cardClass}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                                {entry.rtoCode}
                              </p>
                              <p className="mt-1 text-[15px] font-semibold tracking-[-0.01em]">
                                {entry.district}
                              </p>
                            </div>
                            {entry.alternateCodes.length > 0 ? (
                              <div className="flex flex-col items-end gap-1">
                                {entry.alternateCodes.map((code) => (
                                  <span
                                    key={code}
                                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${
                                      theme === "dark"
                                        ? "border-white/10 bg-white/[0.04] text-slate-300"
                                        : "border-slate-200 bg-white text-slate-500"
                                    }`}
                                  >
                                    {code}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                    {filteredEntries.length === 0 ? (
                      <div className={`mt-2 rounded-[16px] border px-3 py-3 text-sm ${cardClass}`}>
                        No matching codes in {selectedState?.name}.
                      </div>
                    ) : null}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </aside>

        <main className={`relative h-full ${theme === "dark" ? "bg-[#020617]" : "bg-slate-100"}`}>
          <RTOMap
            data={indiaStatesGeoJSON}
            selectedRTO={selectedFeature}
            onRTOClick={handleMapSelect}
            onRTOHover={handleMapHover}
            onRTOSelect={handleMapSelect}
            theme={theme}
          />
          {hoveredState && hoveredStateLookup ? (
            <div
              className="pointer-events-none fixed z-[450] hidden w-[214px] lg:block"
              style={{ left: hoveredState.x, top: hoveredState.y }}
            >
              <div
                className={`relative overflow-hidden rounded-[16px] border shadow-[0_14px_32px_rgba(15,23,42,0.14)] backdrop-blur-xl ${
                  theme === "dark"
                    ? "border-white/12 bg-slate-950/68"
                    : "border-white/70 bg-white/72"
                }`}
              >
                <div className="absolute inset-x-3 top-0 h-px bg-white/40" />
                <div className="flex items-center gap-2.5 px-3 py-2.5">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border ${
                      theme === "dark"
                        ? "border-white/10 bg-white/[0.05] text-sky-300"
                        : "border-slate-200/80 bg-white/80 text-[#184f9c]"
                    }`}
                  >
                    <div className="relative h-3 w-3 rounded-full border border-current">
                      <div className="absolute inset-[2px] rounded-full border border-current" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p
                        className={`truncate text-sm font-semibold tracking-[-0.02em] ${
                          theme === "dark" ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {hoveredStateLookup.name}
                      </p>
                    </div>
                    <p className={`mt-0.5 text-[10px] font-medium ${mutedTextClass}`}>
                      {hoveredStateLookup.code === "TS" ? "TG / TS" : hoveredStateLookup.code} •{" "}
                      {hoveredStateLookup.entries.length} codes
                    </p>
                  </div>
                </div>
                <div
                  className={`h-[2px] w-full ${
                    theme === "dark"
                      ? "bg-[linear-gradient(90deg,rgba(125,211,252,0.18)_0%,rgba(59,130,246,0.4)_50%,rgba(125,211,252,0.18)_100%)]"
                      : "bg-[linear-gradient(90deg,rgba(59,130,246,0.10)_0%,rgba(59,130,246,0.24)_50%,rgba(59,130,246,0.10)_100%)]"
                  }`}
                />
              </div>
            </div>
          ) : null}
        </main>
      </div>

    </div>
  );
}
