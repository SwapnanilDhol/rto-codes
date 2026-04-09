import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import IndianPlate from "@/components/IndianPlate";
import TransportStats from "@/components/TransportStats";
import { getCitiesByStateCode } from "@/data/cities";
import { indiaStatesWithDistricts } from "@/data/districts";
import { guides } from "@/data/guides";
import { getRuleByStateCode } from "@/data/state-rules";
import { siteConfig } from "@/lib/site";
import { getCodeUrl, getStateBySlug, getStateChipLabel, getStateNote, getStateSlug, getStateUrl, WIKI_TITLE_MAP } from "@/lib/state-content";

type StatePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return indiaStatesWithDistricts.map((state) => ({
    slug: getStateSlug(state),
  }));
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    return { title: "State not found" };
  }

  const title = `${state.name} RTO codes`;
  const description = `Browse ${state.name} RTO codes, registration prefixes, office counts, and state-specific number plate notes on RTO.codes.`;
  const url = `${siteConfig.url}${getStateUrl(state)}`;

  return {
    title,
    description,
    alternates: {
      canonical: getStateUrl(state),
    },
    openGraph: {
      type: "article",
      title: `${title} | RTO.codes`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | RTO.codes`,
      description,
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) notFound();

  const note = getStateNote({ code: state.code, name: state.name, entries: state.districts });
  const sampleCodes = state.districts.slice(0, 8);
  const relatedGuides = guides.slice(0, 3);
  const relatedCities = getCitiesByStateCode(state.code);
  const stateRule = getRuleByStateCode(state.code);
  const wikiUrl = `https://en.wikipedia.org/wiki/${
    WIKI_TITLE_MAP[state.code] ?? state.name.replace(/\s+/g, "_")
  }`;
  const previewPrimaryCode = state.code === "TS" ? `${state.code}-28-PK-1310` : `${state.code}-28-PK-1310`;
  const previewAlternateCode = state.code === "TS" ? "TG-28-PK-1310" : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${state.name} RTO codes`,
        description: `Browse ${state.name} RTO codes, prefixes, and office coverage.`,
        mainEntityOfPage: `${siteConfig.url}${getStateUrl(state)}`,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What is the state prefix for ${state.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${state.name} uses the ${state.code} prefix${state.code === "TS" ? ", with TG also relevant for Telangana legacy and alternate references," : ""} in this dataset.`,
            },
          },
          {
            "@type": "Question",
            name: `How many code blocks are listed for ${state.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${state.name} has ${state.districts.length} registration code blocks listed on this page.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/states"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Back to states
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Open lookup
            </Link>
          </div>
          <a
            href={wikiUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
          >
            Wikipedia
          </a>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_360px]">
          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-500">
              {getStateChipLabel(state.code)} registration family
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {state.name} RTO codes
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              Browse the {state.code} registration ladder for {state.name}, including office counts, sample code blocks,
              and state-specific notes that help explain how the number plate family is structured.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Prefix
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {state.code === "TS" ? "TS / TG" : state.code}
                </p>
              </div>
              <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Code blocks
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {state.districts.length}
                </p>
              </div>
              <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  First series
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {state.districts[0]?.rtoCode}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
            <IndianPlate
              primaryCode={previewPrimaryCode}
              alternateCode={previewAlternateCode}
            />
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              A state-specific preview using the {state.code === "TS" ? "TS / TG" : state.code} registration family.
            </p>
          </div>
        </section>

        {note ? (
          <section className="mt-6 rounded-[28px] border border-amber-300 bg-amber-50 p-7 dark:border-amber-400/20 dark:bg-amber-400/8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300/80">
              {note.eyebrow}
            </p>
            <p className="mt-3 text-[15px] leading-8 text-amber-950/85 dark:text-amber-50/88">
              {note.text}
            </p>
            {stateRule ? (
              <Link
                href={`/rules/states/${stateRule.slug}`}
                className="mt-4 inline-flex rounded-full border border-amber-400/30 bg-white/50 px-4 py-2 text-sm font-medium text-amber-900 transition hover:border-amber-500 hover:bg-white/70 dark:border-amber-300/20 dark:bg-amber-50/5 dark:text-amber-100 dark:hover:border-amber-300/40"
              >
                Read the full {state.name} rule page
              </Link>
            ) : null}
          </section>
        ) : null}

        <TransportStats stateCode={state.code} stateName={state.name} />

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Sample codes in {state.name}</h2>
            <p className="mt-3 text-[15px] leading-8 text-slate-600 dark:text-slate-300">
              These sample entries help users understand how the {state.code} registration family begins before they
              move into the full lookup.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {sampleCodes.map((entry) => (
                <Link
                  key={entry.id}
                  href={getCodeUrl(entry.rtoCode)}
                  className="rounded-[20px] border border-slate-200/80 bg-white/80 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                    {entry.rtoCode}
                  </p>
                  <p className="mt-2 text-base font-semibold tracking-[-0.02em]">
                    {entry.name.trim()}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {relatedCities.length > 0 ? (
              <div className="rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
                <h2 className="text-xl font-semibold tracking-[-0.03em]">Related city pages</h2>
                <div className="mt-5 grid gap-3">
                  {relatedCities.map((cityPage) => (
                    <Link
                      key={cityPage.slug}
                      href={`/cities/${cityPage.slug}`}
                      className="rounded-[18px] border border-slate-200/80 bg-white/80 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-sky-400/40"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                        {cityPage.eyebrow}
                      </p>
                      <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">
                        {cityPage.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
              <h2 className="text-xl font-semibold tracking-[-0.03em]">Related guides</h2>
              <div className="mt-5 grid gap-3">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="rounded-[18px] border border-slate-200/80 bg-white/80 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-sky-400/40"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                      {guide.eyebrow}
                    </p>
                    <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">
                      {guide.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">How to use this state page</h2>
          <div className="mt-4 grid gap-4">
            <p className="text-[15px] leading-8 text-slate-600 dark:text-slate-300">
              Start with the state prefix and sample code list to understand how the registration family is structured.
              Then move to the exact code page if you already know the office number, or use the related guides if the
              question is about format, HSRP, or a state-specific rule change.
            </p>
            <p className="text-[15px] leading-8 text-slate-600 dark:text-slate-300">
              The yellow note on this page highlights the detail most likely to confuse users in that state, such as a
              legacy mark, a renamed prefix, or an office structure that does not map neatly to district boundaries.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
