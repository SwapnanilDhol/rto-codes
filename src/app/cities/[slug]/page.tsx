import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cityPages, getCityBySlug } from "@/data/cities";
import { getRuleByStateCode } from "@/data/state-rules";
import { siteConfig } from "@/lib/site";
import { getCodeBySlug, getCodeSlug, getCodeUrl, getStateByCode, getStateChipLabel, getStateUrl } from "@/lib/state-content";

type CityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return cityPages.map((cityPage) => ({ slug: cityPage.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityPage = getCityBySlug(slug);

  if (!cityPage) return { title: "City page not found" };

  const url = `${siteConfig.url}/cities/${cityPage.slug}`;

  return {
    title: cityPage.title,
    description: cityPage.description,
    alternates: {
      canonical: `/cities/${cityPage.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${cityPage.title} | RTO.codes`,
      description: cityPage.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${cityPage.title} | RTO.codes`,
      description: cityPage.description,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const cityPage = getCityBySlug(slug);
  if (!cityPage) notFound();

  const state = getStateByCode(cityPage.stateCode);
  if (!state) notFound();

  const featuredEntries = cityPage.featuredCodes
    .map((code) => getCodeBySlug(getCodeSlug(code)))
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
  const stateRule = getRuleByStateCode(cityPage.stateCode);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: cityPage.title,
        description: cityPage.description,
        mainEntityOfPage: `${siteConfig.url}/cities/${cityPage.slug}`,
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
        mainEntity: cityPage.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
              href="/cities"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Back to cities
            </Link>
            <Link
              href={getStateUrl(state)}
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              State page
            </Link>
          </div>
          <Link
            href="/"
            className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
          >
            Lookup
          </Link>
        </div>

        <header className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_56px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-500">
            {cityPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            {cityPage.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            {cityPage.readingTime} • {getStateChipLabel(state.code)} family
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            {cityPage.intro}
          </p>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              State family
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {getStateChipLabel(state.code)}
            </p>
          </div>
          <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              Featured codes
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              {featuredEntries.length}
            </p>
          </div>
          <div className="rounded-[22px] border border-slate-200/80 bg-white/72 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
              State page
            </p>
            <p className="mt-2 text-lg font-semibold tracking-[-0.03em]">
              {state.name}
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-4">
          {cityPage.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{section.title}</h2>
              <div className="mt-4 grid gap-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-8 text-slate-600 dark:text-slate-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">
              Featured {cityPage.city} codes
            </h2>
            {stateRule ? (
              <Link
                href={`/rules/states/${stateRule.slug}`}
                className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
              >
                Read state rule page
              </Link>
            ) : null}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {featuredEntries.map(({ district }) => (
              <Link
                key={district.id}
                href={getCodeUrl(district.rtoCode)}
                className="rounded-[20px] border border-slate-200/80 bg-white/80 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-sky-400/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
                  {district.rtoCode}
                </p>
                <p className="mt-2 text-base font-semibold tracking-[-0.02em]">
                  {district.name.trim()}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {state.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">Frequently asked questions</h2>
          <div className="mt-5 grid gap-4">
            {cityPage.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[22px] border border-slate-200/80 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{faq.question}</h3>
                <p className="mt-2 text-[15px] leading-8 text-slate-600 dark:text-slate-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
