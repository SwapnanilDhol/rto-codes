import type { Metadata } from "next";
import Link from "next/link";
import { getAllCodeRecords, getCodeUrl, getStateChipLabel, getStateUrl } from "@/lib/state-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Codes",
  description:
    "Browse India RTO codes directly by registration mark, with code-level landing pages for every state and transport office entry in the dataset.",
  alternates: {
    canonical: "/codes",
  },
};

const codeRecords = getAllCodeRecords().sort((a, b) => a.district.rtoCode.localeCompare(b.district.rtoCode));

export default function CodesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RTO.codes directory",
    description: "Directory of India registration code pages, grouped across states and transport offices.",
    url: `${siteConfig.url}/codes`,
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
              Code directory
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Every RTO code as its own page.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              This directory turns individual registration marks into searchable landing pages, which is where long-tail
              discovery gets much sharper for RTO.codes.
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

        <section className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {codeRecords.map(({ state, district }) => (
            <Link
              key={district.id}
              href={getCodeUrl(district.rtoCode)}
              className="rounded-[22px] border border-slate-200/80 bg-white/80 px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_18px_42px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  {district.rtoCode}
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                  {getStateChipLabel(state.code)}
                </p>
              </div>
              <p className="mt-2 text-lg font-semibold tracking-[-0.02em]">
                {district.name.trim()}
              </p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-600 dark:text-slate-300">{state.name}</p>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {getStateChipLabel(state.code)}
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
