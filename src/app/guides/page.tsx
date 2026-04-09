import type { Metadata } from "next";
import Link from "next/link";
import { featuredGuides, guides } from "@/data/guides";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Reference guides for HSRP plates, BH series registrations, Indian number plate formats, and RTO lookup explainers.",
  alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RTO.codes guides",
    description:
      "Reference guides for Indian vehicle registration, number plates, HSRP, BH series, and RTO code lookup topics.",
    url: `${siteConfig.url}/guides`,
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
            Reference guides
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Vehicle registration guides for India
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Browse practical guides on Indian number plate formats, HSRP, BH registration, special plate categories,
            and the most common questions users ask when decoding a vehicle registration number.
          </p>
        </div>

        <section className="mt-10 grid gap-4 lg:grid-cols-2">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-[28px] border border-slate-200/90 bg-white/80 p-6 shadow-[0_16px_48px_rgba(148,163,184,0.12)] transition duration-200 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_24px_64px_rgba(56,189,248,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:bg-white/[0.06]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-500">
                {guide.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {guide.description}
              </p>
              <p className="mt-4 text-sm font-medium text-slate-500 transition group-hover:text-sky-600 dark:text-slate-400 dark:group-hover:text-sky-300">
                {guide.readingTime}
              </p>
            </Link>
          ))}
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">All guides</h2>
            <Link
              href="/"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Back to lookup
            </Link>
          </div>

          <div className="mt-5 grid gap-3">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="flex flex-col gap-2 rounded-[22px] border border-slate-200/80 bg-white/72 px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_18px_42px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                      {guide.eyebrow}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em]">{guide.title}</h3>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {guide.readingTime}
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
