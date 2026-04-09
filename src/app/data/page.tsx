import type { Metadata } from "next";
import Link from "next/link";
import { stateTransportData, allIndianStatesTransport } from "@/data/state-transport-data";
import { siteConfig } from "@/lib/site";
import { getStateByCode, getStateUrl } from "@/lib/state-content";

export const metadata: Metadata = {
  title: "Transport Data",
  description:
    "State-wise vehicle registration statistics, RTO office counts, and transport department data for Indian states and union territories.",
  alternates: {
    canonical: "/data",
  },
};

const DATA_QUALITY = {
  rich: {
    label: "Rich data",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    description: "Comprehensive statistics including vehicle population, zones, and breakdowns",
  },
  moderate: {
    label: "Moderate data",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    description: "Vehicle population and RTO office data available",
  },
  basic: {
    label: "Basic data",
    badge: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
    description: "RTO office counts and zone information only",
  },
  none: {
    label: "Coming soon",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    description: "Help us add transport data for this state",
  },
};

type DataQuality = keyof typeof DATA_QUALITY;

function getDataQuality(code: string): DataQuality {
  const data = stateTransportData[code];
  if (!data) return "none";
  if (data.vehicleBreakdown && data.revenueData) return "rich";
  if (data.vehicleStatistics?.registeredVehicles) return "moderate";
  return "basic";
}

function formatVehicleCount(num: number): string {
  if (num >= 10000000) return `${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `${(num / 100000).toFixed(1)} L`;
  return num.toLocaleString("en-IN");
}

export default function DataPage() {
  const statesWithData = Object.entries(stateTransportData)
    .map(([code, data]) => ({
      code,
      data,
      quality: getDataQuality(code),
    }))
    .sort((a, b) => {
      const aVehicles = a.data.vehicleStatistics?.registeredVehicles ?? 0;
      const bVehicles = b.data.vehicleStatistics?.registeredVehicles ?? 0;
      return bVehicles - aVehicles;
    });

  const totalStates = allIndianStatesTransport.length;
  const statesWithRichData = statesWithData.filter((s) => s.quality === "rich").length;
  const statesWithModerateData = statesWithData.filter((s) => s.quality === "moderate").length;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "India State Transport Statistics",
    description:
      "Vehicle registration statistics and RTO office data for Indian states and union territories.",
    url: `${siteConfig.url}/data`,
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">
            Transport data
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            India vehicle statistics
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Vehicle registration data, RTO office counts, and transport department statistics for{" "}
            {statesWithData.length} Indian states. Data sourced from official state transport departments and the Ministry of Road Transport & Highways.
          </p>
        </div>

        {/* Coverage summary */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[20px] border border-slate-200/80 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              States with data
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
              {statesWithData.length}
              <span className="ml-1 text-lg text-slate-400">/ {totalStates}</span>
            </p>
          </div>
          <div className="rounded-[20px] border border-emerald-200/80 bg-emerald-50/60 p-5 dark:border-emerald-400/20 dark:bg-emerald-400/8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
              Rich data states
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-emerald-700 dark:text-emerald-300">
              {statesWithRichData}
            </p>
          </div>
          <div className="rounded-[20px] border border-slate-200/80 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              Moderate data
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.03em]">
              {statesWithModerateData}
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-3">
          {(Object.entries(DATA_QUALITY) as [DataQuality, typeof DATA_QUALITY[DataQuality]][]).map(([key, q]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${q.badge}`}>
                {q.label}
              </span>
            </div>
          ))}
        </div>

        {/* States with data — ranked by vehicle count */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-[-0.03em]">States with data</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Ranked by registered vehicles (highest to lowest)
          </p>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {statesWithData.map(({ code, data, quality }) => {
              const qualityInfo = DATA_QUALITY[quality];
              const state = getStateByCode(code.toUpperCase());
              const stateName = state?.name ?? allIndianStatesTransport.find((s) => s.code === code)?.name ?? code.toUpperCase();
              const vehicles = data.vehicleStatistics?.registeredVehicles;
              const rtoCount = data.organization?.rtoOffices ?? data.organization?.totalOffices;
              const stateHref = state ? getStateUrl(state) : "#";

              return (
                <Link
                  key={code}
                  href={stateHref}
                  className="group rounded-[24px] border border-slate-200/80 bg-white/72 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold tracking-[-0.02em]">
                            {stateName}
                          </h3>
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold uppercase text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                            {code.toUpperCase()}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${qualityInfo.badge}`}>
                            {qualityInfo.label}
                          </span>
                          {rtoCount && (
                            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                              {rtoCount} RTOs
                            </span>
                          )}
                          {data.metadata?.asOfDate && (
                            <span className="text-[11px] text-slate-400">
                              as of {data.metadata.asOfDate}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {vehicles && (
                      <div className="text-right">
                        <p className="text-2xl font-semibold tracking-[-0.03em] text-slate-800 dark:text-white">
                          {formatVehicleCount(vehicles)}
                        </p>
                        <p className="text-[11px] text-slate-400">vehicles</p>
                      </div>
                    )}
                  </div>

                  {quality !== "none" && data.zones && data.zones.length > 0 && (
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        Zones
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {data.zones.slice(0, 5).map((zone) => (
                          <span
                            key={zone.name}
                            className="rounded-full bg-slate-50 px-2.5 py-0.5 text-[11px] text-slate-600 dark:bg-white/[0.05] dark:text-slate-300"
                          >
                            {zone.name} ({zone.rtos})
                          </span>
                        ))}
                        {data.zones.length > 5 && (
                          <span className="rounded-full bg-slate-50 px-2.5 py-0.5 text-[11px] text-slate-400 dark:bg-white/[0.05] dark:text-slate-400">
                            +{data.zones.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {quality === "rich" && data.vehicleBreakdown && (
                    <div className="mt-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        Top categories
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {Object.entries(data.vehicleBreakdown)
                          .sort(([, a], [, b]) => b - a)
                          .slice(0, 3)
                          .map(([type, count]) => (
                            <span
                              key={type}
                              className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                            >
                              {type}: {formatVehicleCount(count as number)}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        {/* States without data */}
        {(() => {
          const statesWithoutData = allIndianStatesTransport.filter(
            (s) => !stateTransportData[s.code]
          );
          if (statesWithoutData.length === 0) return null;

          return (
            <section className="mt-12">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">
                States without data yet
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Help us collect transport statistics for these states
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {statesWithoutData.map((stateEntry) => {
                  const st = getStateByCode(stateEntry.code.toUpperCase());
                  const stHref = st ? getStateUrl(st) : "#";
                  return (
                  <Link
                    key={stateEntry.code}
                    href={stHref}
                    className="flex items-center justify-between rounded-[18px] border border-slate-200/50 bg-white/40 p-4 text-slate-500 transition hover:border-slate-300 dark:border-white/5 dark:bg-white/[0.02] dark:text-slate-400 dark:hover:border-white/20"
                  >
                    <div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {stateEntry.name}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {stateEntry.rtoOffices} RTOs
                      </p>
                    </div>
                    <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:bg-amber-950/40 dark:text-amber-300">
                      Coming soon
                    </span>
                  </Link>
                  );
                })}
              </div>
            </section>
          );
        })()}
      </div>
    </main>
  );
}
