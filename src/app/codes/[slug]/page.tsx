import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import IndianPlate from "@/components/IndianPlate";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/site";
import { getAllCodeRecords, getCodeBySlug, getCodeSlug, getCodeUrl, getStateChipLabel, getStateNote, getStateUrl, WIKI_TITLE_MAP } from "@/lib/state-content";

type CodePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllCodeRecords().map(({ district }) => ({
    slug: getCodeSlug(district.rtoCode),
  }));
}

export async function generateMetadata({ params }: CodePageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getCodeBySlug(slug);

  if (!record) {
    return { title: "Code not found" };
  }

  const { state, district } = record;
  const title = `${district.rtoCode} meaning`;
  const description = `${district.rtoCode} is the registration code for ${district.name.trim()}, ${state.name}. Browse the code, state context, and related India RTO references.`;
  const url = `${siteConfig.url}${getCodeUrl(district.rtoCode)}`;

  return {
    title,
    description,
    alternates: {
      canonical: getCodeUrl(district.rtoCode),
    },
    openGraph: {
      type: "article",
      title: `${district.rtoCode} meaning | RTO.codes`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${district.rtoCode} meaning | RTO.codes`,
      description,
    },
  };
}

export default async function CodePage({ params }: CodePageProps) {
  const { slug } = await params;
  const record = getCodeBySlug(slug);

  if (!record) notFound();

  const { state, district } = record;
  const stateEntries = state.districts;
  const neighbors = stateEntries
    .filter((entry) => entry.rtoCode !== district.rtoCode)
    .slice(0, 6);
  const note = getStateNote({ code: state.code, name: state.name, entries: stateEntries });
  const relatedGuides = guides.slice(0, 3);
  const wikiUrl = `https://en.wikipedia.org/wiki/${
    WIKI_TITLE_MAP[state.code] ?? state.name.replace(/\s+/g, "_")
  }`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${district.rtoCode} meaning`,
        description: `${district.rtoCode} is the registration code for ${district.name.trim()}, ${state.name}.`,
        mainEntityOfPage: `${siteConfig.url}${getCodeUrl(district.rtoCode)}`,
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
            name: `What does ${district.rtoCode} stand for?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${district.rtoCode} maps to ${district.name.trim()} in the ${state.name} registration family.`,
            },
          },
          {
            "@type": "Question",
            name: `Which state uses ${district.rtoCode}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${district.rtoCode} belongs to ${state.name}, which uses the ${state.code}${state.code === "TS" ? " / TG" : ""} registration family.`,
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

      <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/codes"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Back to codes
            </Link>
            <Link
              href={getStateUrl(state)}
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              State page
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

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-500">
              {district.rtoCode} code page
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              {district.rtoCode} means {district.name.trim()}.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              {district.rtoCode} belongs to the {getStateChipLabel(state.code)} registration family for {state.name}.
              Use this page as the code-level explanation layer before moving into the broader state directory or the
              interactive lookup.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Code
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {district.rtoCode}
                </p>
              </div>
              <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  Office
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {district.name.trim()}
                </p>
              </div>
              <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                  State
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                  {state.code === "TS" ? "TS / TG" : state.code}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
            <IndianPlate
              primaryCode={`${district.rtoCode}-PK-1310`}
              alternateCode={
                state.code === "TS" && district.alternateCodes?.[0]
                  ? `${district.alternateCodes[0]}-PK-1310`
                  : undefined
              }
            />
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              A code-specific preview for {district.rtoCode} inside the {state.name} registration family.
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
          </section>
        ) : null}

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Where this code fits</h2>
            <div className="mt-4 grid gap-4">
              <p className="text-[15px] leading-8 text-slate-600 dark:text-slate-300">
                {district.rtoCode} is one code block within the broader {state.name} ladder. Users who search directly
                for this code are usually trying to identify an office from a plate, verify that a number belongs to the
                right state family, or understand a code they have seen in the wild.
              </p>
              <p className="text-[15px] leading-8 text-slate-600 dark:text-slate-300">
                These code pages are the long-tail search layer for RTO.codes. They give every meaningful registration
                mark its own indexable page instead of leaving all context trapped inside the interactive UI.
              </p>
            </div>

            <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em]">Nearby codes in {state.name}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {neighbors.map((entry) => (
                <Link
                  key={entry.id}
                  href={getCodeUrl(entry.rtoCode)}
                  className="rounded-[18px] border border-slate-200/80 bg-white/80 px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-sky-400/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                    {entry.rtoCode}
                  </p>
                  <p className="mt-1 text-sm font-semibold tracking-[-0.02em]">
                    {entry.name.trim()}
                  </p>
                </Link>
              ))}
            </div>
          </div>

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
        </section>
      </div>
    </main>
  );
}
