import type { Metadata } from "next";
import Link from "next/link";
import { cityPages } from "@/data/cities";
import { siteConfig } from "@/lib/site";
import { getStateChipLabel } from "@/lib/state-content";

export const metadata: Metadata = {
  title: "City RTO code pages",
  description:
    "Browse city-focused RTO code landing pages for major Indian metros including Delhi, Chennai, Mumbai, Bengaluru, Hyderabad, and Kolkata.",
  alternates: {
    canonical: "/cities",
  },
  openGraph: {
    type: "website",
    title: "City RTO code pages | RTO.codes",
    description:
      "Browse city-focused RTO code landing pages for major Indian metros including Delhi, Chennai, Mumbai, Bengaluru, Hyderabad, and Kolkata.",
    url: `${siteConfig.url}/cities`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "City RTO code pages | RTO.codes",
    description:
      "Browse city-focused RTO code landing pages for major Indian metros including Delhi, Chennai, Mumbai, Bengaluru, Hyderabad, and Kolkata.",
  },
};

export default function CitiesPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Open lookup
            </Link>
            <Link
              href="/states"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              State directory
            </Link>
          </div>
          <Link
            href="/services"
            className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
          >
            Utility pages
          </Link>
        </div>

        <header className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-500">
            City directories
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Major-city RTO code pages
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            These metro-focused landing pages give users a faster route into high-demand city searches like Delhi, Chennai,
            Mumbai, Bengaluru, Hyderabad, and Kolkata without forcing them through the full state list first.
          </p>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cityPages.map((cityPage) => (
            <Link
              key={cityPage.slug}
              href={`/cities/${cityPage.slug}`}
              className="rounded-[28px] border border-slate-200/80 bg-white/78 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_16px_36px_rgba(148,163,184,0.16)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-500">
                {cityPage.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {cityPage.city}
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {getStateChipLabel(cityPage.stateCode)} family
              </p>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                {cityPage.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cityPage.featuredCodes.slice(0, 4).map((code) => (
                  <span
                    key={code}
                    className="rounded-full border border-slate-200/80 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
