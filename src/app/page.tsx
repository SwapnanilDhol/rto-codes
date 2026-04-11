"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { siteConfig, siteStats } from "@/lib/site";
import { getStateChipLabel, getStateNote, getStateUrl, WIKI_TITLE_MAP } from "@/lib/state-content";
import { useTheme } from "@/components/ThemeProvider";
import IndianPlate from "@/components/IndianPlate";
import { featuredPosts, getPostsByState } from "@/data/posts";
import { indiaStatesWithDistricts } from "@/data/districts";
import { indiaStatesGeoJSON } from "@/data/loader";
import { indiaDistrictsGeoJSON } from "@/data/datameet/districts-loader";
import { telanganaDistrictsGeoJSON } from "@/data/telangana-loader";
import { RTOFeature, RTOGeoJSON } from "@/types/rto";

const RTOMap = dynamic(() => import("@/components/RTOMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-[#020617]" />,
});

const POPULAR_STATE_CODES = ["MH", "DL", "KA", "TN", "TS", "GJ", "UP", "WB"];

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

type HoverOverlayState = {
  title: string;
  subtitle: string;
  codes?: string[];
  x: number;
  y: number;
};

function normalizeValue(value: string) {
  return value.toLowerCase().replace(/[\s-]/g, "");
}

function normalizeDistrictLabel(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function canonicalizeDistrictName(stateCode: string, value: string) {
  const normalized = normalizeDistrictLabel(value);

  const aliasMap: Record<string, Record<string, string>> = {
    UP: {
      "allahabad": "prayagraj",
      "bara banki": "barabanki",
      "bulandshahr": "bulandshahar",
      "budaun": "badaun",
      "gautam buddha nagar": "gautambudhnagar",
      "jyotiba phule nagar": "jyotibaphule nagar",
      "kheri": "lakhimpur khiri",
      "kushinagar": "padrauna krushi nagar",
      "maharajganj": "mahrajganj",
      "mahamaya nagar": "hathrash mahamaya nagar",
      "kansiram nagar": "kanshiram nagar",
      "rae bareli": "raebareli",
      "sant ravi das nagar bhadohi": "bhadohi",
      "shrawasti": "shravasti",
      "siddharth nagar": "siddharthnagar",
      "trans gomti office lucknow": "lucknow",
      "chitrakoot": "chitrakoot dham",
    },
    TS: {
      "mahaboobnagar": "mahabubnagar",
      "mahbubnagar": "mahabubnagar",
      "ranga reddy": "rangareddy",
      "hyderabad central": "hyderabad",
      "hyderabad east": "hyderabad",
      "hyderabad north": "hyderabad",
      "hyderabad south": "hyderabad",
      "hyderabad west": "hyderabad",
      "warangal urban": "hanumakonda",
      "warangal rural": "warangal",
      "rajanna": "rajanna sircilla",
      "jayashankar": "jayashankar bhupalpally",
      "jangoan": "jangaon",
      "bhadradri": "bhadradri kothagudem",
      "yadadri": "yadadri bhuvanagiri",
      "jogulamba": "jogulamba gadwal",
      "medchal": "medchal malkajgiri",
      "siddipet": "siddipet",
      "wanaparthy": "wanaparthy",
      "mahabubabad": "mahabubabad",
      "komaram bheem": "kumurambheem asifabad",
    },
  };

  return aliasMap[stateCode]?.[normalized] ?? normalized;
}

export default function Home() {
  const { theme } = useTheme();
  const sidebarScrollRef = useRef<HTMLDivElement | null>(null);
  const lastTrackedSearchRef = useRef("");
  const [query, setQuery] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState<string | null>(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [sidebarView, setSidebarView] = useState<"browse" | "details">("browse");
  const [sidebarDirection, setSidebarDirection] = useState<1 | -1>(1);
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

  const selectedState = selectedStateCode ? stateByCode.get(selectedStateCode) ?? null : null;
  const isSearching = query.trim().length > 0;
  const districtModeStateCode =
    selectedState?.code === "UP" || selectedState?.code === "TS" ? selectedState.code : null;
  const isDistrictMode = !!districtModeStateCode;

  const districtModeEntries = useMemo(
    () =>
      districtModeStateCode ? stateByCode.get(districtModeStateCode)?.entries ?? [] : [],
    [districtModeStateCode, stateByCode]
  );

  const districtFeatureStateName = districtModeStateCode === "TS" ? "Andhra Pradesh" : "Uttar Pradesh";

  const districtFeatures = useMemo(
    () => {
      if (districtModeStateCode === "TS") {
        return telanganaDistrictsGeoJSON.features.filter((feature) =>
          districtModeEntries.some(
            (entry) =>
              canonicalizeDistrictName("TS", entry.district) ===
              canonicalizeDistrictName("TS", feature.properties.name)
          )
        );
      }

      return indiaDistrictsGeoJSON.features.filter(
        (feature) =>
          feature.properties.state === districtFeatureStateName &&
          (!districtModeStateCode ||
            districtModeEntries.some(
              (entry) =>
                canonicalizeDistrictName(districtModeStateCode, entry.district) ===
                canonicalizeDistrictName(districtModeStateCode, feature.properties.name)
            ))
      );
    },
    [districtFeatureStateName, districtModeEntries, districtModeStateCode]
  );

  const districtMapData = useMemo<RTOGeoJSON>(
    () => ({
      type: "FeatureCollection",
      features: districtFeatures,
    }),
    [districtFeatures]
  );

  const districtById = useMemo(
    () => new Map(districtFeatures.map((feature) => [feature.properties.id, feature])),
    [districtFeatures]
  );

  const selectedDistrictFeature = selectedDistrictId
    ? districtById.get(selectedDistrictId) ?? null
    : null;
  const hasSelectedDistrict = isDistrictMode && !!selectedDistrictFeature;

  const districtFeatureByCanonicalName = useMemo(
    () =>
      new Map(
        districtFeatures.map((feature) => [
          canonicalizeDistrictName(districtModeStateCode ?? "UP", feature.properties.name),
          feature,
        ])
      ),
    [districtFeatures, districtModeStateCode]
  );

  const getDistrictEntries = useCallback(
    (districtName: string) => {
      if (!districtModeStateCode || !selectedState) return [];
      const canonical = canonicalizeDistrictName(districtModeStateCode, districtName);
      return selectedState.entries.filter(
        (entry) => canonicalizeDistrictName(districtModeStateCode, entry.district) === canonical
      );
    },
    [districtModeStateCode, selectedState]
  );

  const filteredEntries = useMemo(() => {
    if (!selectedState) return [];

    let entries = selectedState.entries;
    if (isDistrictMode && selectedDistrictFeature && districtModeStateCode) {
      const selectedDistrictName = canonicalizeDistrictName(
        districtModeStateCode,
        selectedDistrictFeature.properties.name
      );
      entries = entries.filter(
        (entry) =>
          canonicalizeDistrictName(districtModeStateCode, entry.district) === selectedDistrictName
      );
    }

    if (!query.trim()) return entries;

    const normalizedQuery = normalizeValue(query);
    return entries.filter((entry) => {
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
  }, [districtModeStateCode, isDistrictMode, query, selectedDistrictFeature, selectedState]);

  const selectedFeature = useMemo(
    () =>
      indiaStatesGeoJSON.features.find(
        (feature) => feature.properties.code === selectedState?.code
      ) ?? null,
    [selectedState]
  );

  const activeMapData = isDistrictMode ? districtMapData : indiaStatesGeoJSON;
  const selectedMapFeature = isDistrictMode
    ? selectedDistrictFeature ?? selectedFeature
    : selectedFeature;

  const handleDistrictEntrySelect = useCallback(
    (districtName: string) => {
      if (!isDistrictMode) return;
      const feature = districtFeatureByCanonicalName.get(
        canonicalizeDistrictName(districtModeStateCode ?? "UP", districtName)
      );
      if (!feature) return;
      setSelectedDistrictId(feature.properties.id);
      trackEvent("select_district", {
        state_code: districtModeStateCode,
        district_name: feature.properties.name,
        source: "sidebar",
      });
    },
    [districtFeatureByCanonicalName, districtModeStateCode, isDistrictMode]
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
    if (!selectedState) {
      setWikiSummary(null);
      setWikiLoading(false);
      return;
    }

    const stateSnapshot = selectedState;
    const wikiTitle =
      WIKI_TITLE_MAP[stateSnapshot.code] ?? stateSnapshot.name.replace(/\s+/g, "_");
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
          title: payload.title ?? stateSnapshot.name,
          description: payload.description,
          extract: payload.extract,
          thumbnailUrl: payload.thumbnail?.source,
        });
      } catch {
        if (!controller.signal.aborted) {
          setWikiSummary({
            title: stateSnapshot.name,
            description: "State or union territory in India",
            extract: `${stateSnapshot.name} has ${stateSnapshot.entries.length} registration codes in the current dataset.`,
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
    setSidebarDirection(1);
    setSelectedStateCode(stateCode);
    setSelectedDistrictId(null);
    setQuery("");
    setSidebarView("details");
    trackEvent("select_state", { state_code: stateCode });
  }, []);

  const handleMapSelect = useCallback(
    (feature: RTOFeature | null) => {
      if (!feature) return;

      if (
        isDistrictMode &&
        feature.properties.censusCode
      ) {
        setSelectedDistrictId(feature.properties.id);
        trackEvent("select_district", {
          state_code: districtModeStateCode,
          district_name: feature.properties.name,
        });
        return;
      }

      if (!feature.properties.code) return;
      handleStateSelect(feature.properties.code);
    },
    [districtModeStateCode, handleStateSelect, isDistrictMode]
  );

  const handleMapHover = useCallback((feature: RTOFeature | null, pointer?: { x: number; y: number }) => {
    if (!feature || !pointer) {
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
      title: feature.properties.name,
      subtitle:
        isDistrictMode && feature.properties.censusCode
          ? `${selectedState?.name} district - tap to zoom`
          : `${feature.properties.code === "TS" ? "TG / TS" : feature.properties.code} • ${
              stateByCode.get(feature.properties.code ?? "")?.entries.length ?? 0
            } codes`,
      codes:
        isDistrictMode && feature.properties.censusCode
          ? getDistrictEntries(feature.properties.name)
              .flatMap((entry) => [entry.rtoCode, ...entry.alternateCodes])
              .slice(0, 6)
          : undefined,
      x: clampedX,
      y: clampedY,
    });
  }, [getDistrictEntries, isDistrictMode, selectedState?.name, stateByCode]);

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
      ? "border-sky-400/40 bg-sky-400/10 hover:-translate-y-0.5 hover:bg-sky-400/14"
      : "border-sky-300 bg-sky-50 hover:-translate-y-0.5 hover:bg-sky-100/88";
  const idleClass =
    theme === "dark"
      ? "border-white/8 bg-white/[0.035] hover:-translate-y-0.5 hover:bg-white/[0.055] hover:border-white/14"
      : "border-slate-200/80 bg-white/74 hover:-translate-y-0.5 hover:bg-white/88 hover:border-slate-300/80";
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
      : `${selectedState?.code ?? "XX"}-28-PK-1310`;
  const previewAlternateCode = selectedState?.code === "TS" ? "TG-28-PK-1310" : undefined;
  const wikiUrl = selectedState
    ? `https://en.wikipedia.org/wiki/${
        WIKI_TITLE_MAP[selectedState.code] ?? selectedState.name.replace(/\s+/g, "_")
      }`
    : "#";
  const stateNote = getStateNote(selectedState ?? undefined);
  const stateRule = selectedState ? getPostsByState(selectedState.code).find((p) => p.category === "state-rule") ?? null : null;
  const sidebarTransition = {
    type: "spring" as const,
    stiffness: 340,
    damping: 34,
    mass: 1,
  };
  const sidebarVariants = {
    enter: (direction: 1 | -1) => ({
      opacity: 0,
      x: direction > 0 ? 14 : -14,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction: 1 | -1) => ({
      opacity: 0,
      x: direction > 0 ? -10 : 10,
    }),
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.locale,
      },
      {
        "@type": "WebApplication",
        name: siteConfig.name,
        url: siteConfig.url,
        applicationCategory: "ReferenceApplication",
        operatingSystem: "Any",
        description: siteConfig.description,
      },
      {
        "@type": "Dataset",
        name: "India RTO registration code directory",
        description: `A browsable directory of ${siteStats.totalCodes} India vehicle registration marks spanning ${siteStats.totalStates} states and union territories.`,
        url: siteConfig.url,
        keywords: siteConfig.keywords.join(", "),
        spatialCoverage: {
          "@type": "Country",
          name: "India",
        },
      },
    ],
  };

  return (
    <div className={`h-screen overflow-hidden ${shellClass}`}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[390px_minmax(0,1fr)]">
        <aside className={`relative z-10 flex h-full min-h-0 flex-col border-r ${panelClass}`}>
          <div className={`border-b px-4 py-4 ${sectionBorderClass}`}>
            <div className={`flex items-center gap-3 rounded-[18px] border px-4 py-3 ${searchClass}`}>
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
              {isSearching ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className={`cursor-pointer rounded-full p-1 transition ${
                    theme === "dark"
                      ? "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                      : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  }`}
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              ) : null}
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
            <AnimatePresence initial={false} custom={sidebarDirection} mode="sync">
              {sidebarView === "browse" ? (
                <motion.section
                  key="browse"
                  className="transform-gpu will-change-transform"
                  custom={sidebarDirection}
                  variants={sidebarVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={sidebarTransition}
                >
                  {isSearching ? (
                    <>
                      <p className={`px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                        Search results
                      </p>
                      {filteredStates.length > 0 ? (
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
                      ) : (
                        <div className={`rounded-[16px] border px-3 py-3 text-sm ${cardClass}`}>
                          No results found.
                        </div>
                      )}
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

                      <section className="mt-5">
                        <div className="flex items-center justify-between gap-3 px-1 pb-2">
                          <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                            Reference guides
                          </p>
                          <Link
                            href="/blog"
                            className={`cursor-pointer text-[11px] font-medium transition ${
                              theme === "dark" ? "text-slate-400 hover:text-sky-300" : "text-slate-500 hover:text-sky-700"
                            }`}
                          >
                            View all
                          </Link>
                        </div>
                        <div className="space-y-2">
                          {featuredPosts.slice(0, 3).map((post) => (
                            <Link
                              key={post.slug}
                              href={`/blog/${post.slug}`}
                              className={`block cursor-pointer rounded-[18px] border px-4 py-3 text-left transition duration-200 ${idleClass}`}
                            >
                              <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${mutedLabelClass}`}>
                                {post.eyebrow}
                              </p>
                              <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">
                                {post.title}
                              </p>
                              <p className={`mt-1 text-xs leading-6 ${mutedTextClass}`}>
                                {post.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </section>
                    </>
                  )}
                </motion.section>
              ) : (
                <motion.section
                  key="details"
                  className="pt-1 transform-gpu will-change-transform"
                  custom={sidebarDirection}
                  variants={sidebarVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={sidebarTransition}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <button
                        onClick={() => {
                          setSidebarDirection(-1);
                          setSidebarView("browse");
                        }}
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
                        {selectedState?.code === "TS" ? " / TG" : ""} • {filteredEntries.length}{" "}
                        {isSearching ? "matching codes" : "visible codes"}
                      </p>
                      {isDistrictMode ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span
                            className={`rounded-full border px-3 py-1.5 text-[11px] font-medium ${
                              theme === "dark"
                                ? "border-white/10 bg-white/[0.05] text-slate-300"
                                : "border-sky-200 bg-sky-50 text-sky-900"
                            }`}
                          >
                            {selectedDistrictFeature
                              ? `District: ${selectedDistrictFeature.properties.name}`
                              : `Tap a ${selectedState?.code === "TS" ? "TS/TG" : "UP"} district on the map to zoom in`}
                          </span>
                          {selectedDistrictFeature ? (
                            <button
                              type="button"
                              onClick={() => setSelectedDistrictId(null)}
                              className={`cursor-pointer rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${idleClass}`}
                            >
                              Clear district
                            </button>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                    {!isSearching && !hasSelectedDistrict ? (
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
                    ) : null}
                  </div>

                  {!isSearching && selectedState && !hasSelectedDistrict ? (
                    <Link
                      href={getStateUrl({ name: selectedState.name })}
                      className={`mt-3 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition duration-200 ${idleClass}`}
                    >
                      Open state page
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M13.5 6H19m0 0v5.5M19 6l-7.5 7.5M7 8.5v9h9"
                        />
                      </svg>
                    </Link>
                  ) : null}

                  {!isSearching && stateNote && !hasSelectedDistrict ? (
                    <div
                      className={`mt-4 rounded-[18px] border px-3.5 py-3 ${
                        theme === "dark"
                          ? "border-amber-400/20 bg-amber-400/8"
                          : "border-amber-300 bg-amber-50/90"
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
                              theme === "dark" ? "text-amber-300/80" : "text-amber-800"
                            }`}
                          >
                            {stateNote.eyebrow}
                          </p>
                          <p
                            className={`mt-1 text-sm leading-6 ${
                              theme === "dark" ? "text-amber-50/88" : "text-amber-950"
                            }`}
                          >
                            {stateNote.text}
                          </p>
                          {stateRule ? (
                            <Link
                              href={`/blog/${stateRule.slug}`}
                              className={`mt-3 inline-flex cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                                theme === "dark"
                                  ? "border-amber-300/20 bg-amber-50/5 text-amber-100 hover:border-amber-300/40"
                                  : "border-amber-400/40 bg-white text-amber-950 hover:border-amber-500"
                              }`}
                            >
                              Read full rule page
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {hasSelectedDistrict ? (
                    <div
                      className={`mt-4 rounded-[18px] border px-4 py-3 ${
                        theme === "dark"
                          ? "border-sky-400/20 bg-sky-400/10"
                          : "border-sky-200 bg-sky-50/90"
                      }`}
                    >
                      <p
                        className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
                          theme === "dark" ? "text-sky-300/80" : "text-sky-800"
                        }`}
                      >
                        Selected district
                      </p>
                      <p className={`mt-1 text-base font-semibold tracking-[-0.02em] ${theme === "dark" ? "text-white" : "text-slate-950"}`}>
                        {selectedDistrictFeature?.properties.name}
                      </p>
                      <p className={`mt-1 text-sm ${theme === "dark" ? mutedTextClass : "text-slate-700"}`}>
                        {filteredEntries.length} matching {filteredEntries.length === 1 ? "code" : "codes"}
                      </p>
                    </div>
                  ) : null}

                  {!isSearching && !hasSelectedDistrict ? (
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
                    className={`group mt-3 block cursor-pointer rounded-[18px] border p-3 transition duration-200 hover:-translate-y-0.5 ${cardClass} ${theme === "dark" ? "hover:bg-white/[0.05]" : "hover:bg-slate-100"}`}
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
                  ) : null}

                  {!isSearching && !hasSelectedDistrict ? (
                    <div className="mt-3">
                      <IndianPlate
                        primaryCode={previewPrimaryCode}
                        alternateCode={previewAlternateCode}
                      />
                    </div>
                  ) : null}

                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-3 pb-3">
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${mutedLabelClass}`}>
                        {isSearching ? "Search results" : "All codes"}
                      </p>
                      <span className={`text-xs font-medium ${mutedTextClass}`}>{filteredEntries.length}</span>
                    </div>
                    <div className="grid gap-2">
                      {filteredEntries.map((entry) => (
                        <button
                          key={entry.id}
                          type="button"
                          onClick={() => {
                            if (isDistrictMode) {
                              handleDistrictEntrySelect(entry.district);
                            }
                          }}
                          className={`w-full rounded-[16px] border px-3 py-2.5 text-left ${
                            isDistrictMode ? `cursor-pointer transition duration-200 ${idleClass}` : cardClass
                          }`}
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
                        </button>
                      ))}
                    </div>
                    {filteredEntries.length === 0 ? (
                      <div className={`mt-2 rounded-[16px] border px-3 py-3 text-sm ${cardClass}`}>
                        No results found.
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
            data={activeMapData}
            selectedRTO={selectedMapFeature}
            onRTOHover={handleMapHover}
            onRTOSelect={handleMapSelect}
            theme={theme}
            detailLevel={isDistrictMode ? "district" : "state"}
          />
          {hoveredState ? (
            <div
              className="pointer-events-none fixed z-[450] hidden w-[214px] lg:block"
              style={{ left: hoveredState.x, top: hoveredState.y }}
            >
              <div
                className={`relative overflow-hidden rounded-[16px] border backdrop-blur-xl ${
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
                    <p
                      className={`truncate text-sm font-semibold tracking-[-0.02em] ${
                        theme === "dark" ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {hoveredState.title}
                    </p>
                    <p className={`mt-0.5 text-[10px] font-medium ${mutedTextClass}`}>
                      {hoveredState.subtitle}
                    </p>
                    {hoveredState.codes?.length ? (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {hoveredState.codes.map((code) => (
                          <span
                            key={code}
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                              theme === "dark"
                                ? "border-white/10 bg-white/[0.05] text-slate-200"
                                : "border-sky-200 bg-sky-50 text-sky-900"
                            }`}
                          >
                            {code}
                          </span>
                        ))}
                      </div>
                    ) : null}
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
