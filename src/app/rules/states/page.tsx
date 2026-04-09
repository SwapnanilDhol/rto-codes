import type { Metadata } from "next";
import Link from "next/link";
import { stateRules } from "@/data/state-rules";
import { indiaStatesWithDistricts } from "@/data/districts";
import { siteConfig } from "@/lib/site";
import { getStateChipLabel } from "@/lib/state-content";

export const metadata: Metadata = {
  title: "State registration rules",
  description:
    "Browse state-specific India registration rule pages covering Delhi format quirks, Telangana TS vs TG, Odisha OR vs OD, and other high-signal state topics.",
  alternates: {
    canonical: "/rules/states",
  },
};

export default function StateRulesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RTO.codes state rules",
    description: "State-specific Indian vehicle registration rule and format pages.",
    url: `${siteConfig.url}/rules/states`,
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
              State rule pages
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              High-signal registration rules by state.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              These pages explain the state-level quirks that drive real search behavior: code changes, renamed prefixes,
              dense office ladders, and format patterns users repeatedly ask about.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/states"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              States
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Lookup
            </Link>
          </div>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stateRules.map((rule) => {
            const state = indiaStatesWithDistricts.find((entry) => entry.code === rule.stateCode);
            if (!state) return null;

            return (
              <Link
                key={rule.slug}
                href={`/rules/states/${rule.slug}`}
                className="group rounded-[28px] border border-slate-200/90 bg-white/80 p-6 shadow-[0_16px_48px_rgba(148,163,184,0.12)] transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_24px_64px_rgba(56,189,248,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-500">
                    {getStateChipLabel(state.code)}
                  </p>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {rule.readingTime}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {rule.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {rule.description}
                </p>
                <p className="mt-5 text-sm font-medium text-slate-500 transition group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-300">
                  Open rule page
                </p>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}
