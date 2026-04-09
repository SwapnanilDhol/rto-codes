import type { Metadata } from "next";
import Link from "next/link";
import { indiaStatesWithDistricts } from "@/data/districts";
import { siteConfig } from "@/lib/site";
import { getStateChipLabel, getStateNote, getStateUrl } from "@/lib/state-content";

export const metadata: Metadata = {
  title: "States",
  description:
    "Browse India RTO codes state by state. Explore prefixes, office counts, and state-specific notes across all states and union territories.",
  alternates: {
    canonical: "/states",
  },
};

const states = indiaStatesWithDistricts
  .map((state) => ({
    ...state,
    note: getStateNote({ code: state.code, name: state.name, entries: state.districts }),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function StatesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RTO.codes states",
    description:
      "Directory of Indian states and union territories with registration prefixes and RTO code counts.",
    url: `${siteConfig.url}/states`,
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">
              State directory
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Browse RTO codes by state
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              Explore every state and union territory by registration prefix, office count, and state-specific context,
              then move into the detailed state page or the exact code you need.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
          >
            Back to lookup
          </Link>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.code}
              href={getStateUrl(state)}
              className="group rounded-[28px] border border-slate-200/90 bg-white/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-500">
                  {getStateChipLabel(state.code)}
                </p>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {state.districts.length} codes
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {state.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {state.note?.text ?? `${state.name} registration prefixes and office codes.`}
              </p>
              <p className="mt-5 text-sm font-medium text-slate-500 transition group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-300">
                Open state page
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
