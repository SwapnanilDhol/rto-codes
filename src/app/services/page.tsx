import type { Metadata } from "next";
import Link from "next/link";
import { servicePages } from "@/data/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vehicle registration utility pages",
  description:
    "Browse practical utility pages on HSRP, vehicle transfers, FASTag, insurance, PUC, and related registration-adjacent workflows.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    title: "Vehicle registration utility pages | RTO.codes",
    description:
      "Browse practical utility pages on HSRP, vehicle transfers, FASTag, insurance, PUC, and related registration-adjacent workflows.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle registration utility pages | RTO.codes",
    description:
      "Browse practical utility pages on HSRP, vehicle transfers, FASTag, insurance, PUC, and related registration-adjacent workflows.",
  },
};

export default function ServicesPage() {
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
              href="/guides"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Guides
            </Link>
          </div>
          <Link
            href="/cities"
            className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
          >
            City pages
          </Link>
        </div>

        <header className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-500">
            Utility pages
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Vehicle admin workflows beyond the lookup
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            These pages cover the practical workflows that usually come after a registration lookup: HSRP, ownership
            transfer, toll-readiness, insurance, PUC, and basic vehicle document checks.
          </p>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {servicePages.map((servicePage) => (
            <Link
              key={servicePage.slug}
              href={`/services/${servicePage.slug}`}
              className="rounded-[28px] border border-slate-200/80 bg-white/78 p-6 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_16px_36px_rgba(148,163,184,0.16)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-500">
                {servicePage.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {servicePage.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                {servicePage.readingTime}
              </p>
              <p className="mt-4 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                {servicePage.description}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
