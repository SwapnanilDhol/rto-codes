import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stateRules, getRuleBySlug } from "@/data/state-rules";
import { indiaStatesWithDistricts } from "@/data/districts";
import { siteConfig } from "@/lib/site";
import { getStateChipLabel, getStateUrl } from "@/lib/state-content";

type StateRulePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return stateRules.map((rule) => ({ slug: rule.slug }));
}

export async function generateMetadata({ params }: StateRulePageProps): Promise<Metadata> {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);
  if (!rule) return { title: "Rule page not found" };

  const title = rule.title;
  const url = `${siteConfig.url}/rules/states/${rule.slug}`;

  return {
    title,
    description: rule.description,
    alternates: {
      canonical: `/rules/states/${rule.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | RTO.codes`,
      description: rule.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | RTO.codes`,
      description: rule.description,
    },
  };
}

export default async function StateRulePage({ params }: StateRulePageProps) {
  const { slug } = await params;
  const rule = getRuleBySlug(slug);
  if (!rule) notFound();

  const state = indiaStatesWithDistricts.find((entry) => entry.code === rule.stateCode);
  if (!state) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rule.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: rule.title,
    description: rule.description,
    mainEntityOfPage: `${siteConfig.url}/rules/states/${rule.slug}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto flex w-full max-w-4xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/rules/states"
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              Back to rules
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
            {getStateChipLabel(state.code)} rule page
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            {rule.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            {rule.readingTime}
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
            {rule.intro}
          </p>
        </header>

        <section className="mt-8 grid gap-4">
          {rule.sections.map((section) => (
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
          <h2 className="text-2xl font-semibold tracking-[-0.03em]">Frequently asked questions</h2>
          <div className="mt-5 grid gap-4">
            {rule.faqs.map((faq) => (
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
