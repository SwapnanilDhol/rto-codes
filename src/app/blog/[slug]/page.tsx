import type { Metadata } from "next";
import Link from "next/link";
import IndianPlate from "@/components/IndianPlate";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import { siteConfig } from "@/lib/site";
import type { Post } from "@/data/posts";

type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | RTO.codes`,
      description: post.description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | RTO.codes`,
      description: post.description,
    },
  };
}

const COLOR_MAP = {
  emerald: {
    border: "border-emerald-200/80",
    bg: "bg-emerald-50/60",
    text: "text-emerald-700",
    subtext: "text-emerald-600/80",
    chipBg: "bg-emerald-100",
    chipText: "text-emerald-700",
    cardBorder: "border-emerald-200/50",
    cardBg: "bg-white/60",
    darkBorder: "dark:border-emerald-400/20",
    darkBg: "dark:bg-emerald-400/8",
    darkText: "dark:text-emerald-300",
    darkSubtext: "dark:text-emerald-400/70",
    darkCardBg: "dark:bg-emerald-950/30",
  },
  blue: {
    border: "border-blue-200/80",
    bg: "bg-blue-50/60",
    text: "text-blue-700",
    subtext: "text-blue-600/80",
    chipBg: "bg-blue-100",
    chipText: "text-blue-700",
    cardBorder: "border-blue-200/50",
    cardBg: "bg-white/60",
    darkBorder: "dark:border-blue-400/20",
    darkBg: "dark:bg-blue-400/8",
    darkText: "dark:text-blue-300",
    darkSubtext: "dark:text-blue-400/70",
    darkCardBg: "dark:bg-blue-950/30",
  },
  violet: {
    border: "border-violet-200/80",
    bg: "bg-violet-50/60",
    text: "text-violet-700",
    subtext: "text-violet-600/80",
    chipBg: "bg-violet-100",
    chipText: "text-violet-700",
    cardBorder: "border-violet-200/50",
    cardBg: "bg-white/60",
    darkBorder: "dark:border-violet-400/20",
    darkBg: "dark:bg-violet-400/8",
    darkText: "dark:text-violet-300",
    darkSubtext: "dark:text-violet-400/70",
    darkCardBg: "dark:bg-violet-950/30",
  },
  amber: {
    border: "border-amber-200/80",
    bg: "bg-amber-50/60",
    text: "text-amber-700",
    subtext: "text-amber-600/80",
    chipBg: "bg-amber-100",
    chipText: "text-amber-700",
    cardBorder: "border-amber-200/50",
    cardBg: "bg-white/60",
    darkBorder: "dark:border-amber-400/20",
    darkBg: "dark:bg-amber-400/8",
    darkText: "dark:text-amber-300",
    darkSubtext: "dark:text-amber-400/70",
    darkCardBg: "dark:bg-amber-950/30",
  },
  rose: {
    border: "border-rose-200/80",
    bg: "bg-rose-50/60",
    text: "text-rose-700",
    subtext: "text-rose-600/80",
    chipBg: "bg-rose-100",
    chipText: "text-rose-700",
    cardBorder: "border-rose-200/50",
    cardBg: "bg-white/60",
    darkBorder: "dark:border-rose-400/20",
    darkBg: "dark:bg-rose-400/8",
    darkText: "dark:text-rose-300",
    darkSubtext: "dark:text-rose-400/70",
    darkCardBg: "dark:bg-rose-950/30",
  },
  cyan: {
    border: "border-cyan-200/80",
    bg: "bg-cyan-50/60",
    text: "text-cyan-700",
    subtext: "text-cyan-600/80",
    chipBg: "bg-cyan-100",
    chipText: "text-cyan-700",
    cardBorder: "border-cyan-200/50",
    cardBg: "bg-white/60",
    darkBorder: "dark:border-cyan-400/20",
    darkBg: "dark:bg-cyan-400/8",
    darkText: "dark:text-cyan-300",
    darkSubtext: "dark:text-cyan-400/70",
    darkCardBg: "dark:bg-cyan-950/30",
  },
};

const CATEGORY_LABELS: Record<Post["category"], string> = {
  guide: "Guide",
  service: "Service",
  "state-rule": "State rule",
};

const CATEGORY_BADGE: Record<Post["category"], string> = {
  guide: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  service: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  "state-rule": "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
};

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
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
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
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

      <article className="mx-auto flex w-full max-w-4xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
          >
            ← Blog
          </Link>
          {post.stateCode && (
            <Link
              href={`/${post.stateCode.toLowerCase()}`}
              className="rounded-full border border-slate-200/90 bg-white/80 px-4 py-2 text-sm font-medium transition hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 dark:hover:text-sky-300"
            >
              {post.stateCode} state
            </Link>
          )}
        </div>

        {/* Header */}
        <header className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/80 p-8 dark:border-white/10 dark:bg-white/[0.04]">
          <div className="flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${CATEGORY_BADGE[post.category]}`}>
              {CATEGORY_LABELS[post.category]}
            </span>
            {post.stateCode && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {post.stateCode}
              </span>
            )}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {post.intro}
          </p>
          <p className="mt-4 text-sm text-slate-400">
            {post.readingTime} · {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>

          {/* Stats Banner */}
          {post.stats && post.stats.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {post.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[14px] border border-slate-200/60 bg-slate-50/80 px-4 py-2 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-lg font-semibold tracking-[-0.02em] text-slate-700 dark:text-slate-200">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Plate Format */}
        {post.plateFormat && (
          <section className="mt-6 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Plate format</h2>
            <div className="mt-4">
              <IndianPlate primaryCode={post.plateFormat} />
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Format: {post.plateFormat.replace(/(\w{2})/g, "$1 ").trim().replace(/ /g, " · ")}
            </p>
          </section>
        )}

        {/* Data Sections */}
        {post.data && post.data.length > 0 && (
          <section className="mt-6 grid gap-4 lg:grid-cols-2">
            {post.data.map((section) => {
              const colors = COLOR_MAP[section.color || "blue"];
              return (
                <div
                  key={section.category}
                  className={`rounded-[28px] border ${colors.border} ${colors.bg} p-7 ${colors.darkBorder} ${colors.darkBg}`}
                >
                  <h3 className={`text-xl font-semibold tracking-[-0.03em] ${colors.text} ${colors.darkText}`}>
                    {section.category}
                  </h3>
                  <div className="mt-4 grid gap-2">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between rounded-[14px] border ${colors.cardBorder} ${colors.cardBg} px-3 py-2 ${colors.darkCardBg}`}
                      >
                        <span className={`text-sm font-medium ${colors.text} ${colors.darkText}`}>
                          {item.label}
                        </span>
                        <span className={`rounded-full ${colors.chipBg} ${colors.chipText} px-2 py-0.5 text-xs font-semibold`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Timeline */}
        {post.timeline && post.timeline.length > 0 && (
          <section className="mt-6 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
            <h2 className="text-xl font-semibold tracking-[-0.03em]">Timeline</h2>
            <div className="mt-5 relative">
              <div className="absolute left-[7px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
              <div className="grid gap-4">
                {post.timeline.map((event, i) => (
                  <div key={i} className="relative flex items-start gap-4 pl-6">
                    <div className="absolute left-[3px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {event.year}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                        {event.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Sections */}
        {post.sections.map((section) => (
          <section
            key={section.title}
            className="mt-6 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">{section.title}</h2>
            <div className="mt-4 grid gap-4">
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
            {section.data && (
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {section.data.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-[14px] border border-slate-200/50 bg-white/60 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* FAQ Section */}
        <section className="mt-8 rounded-[28px] border border-slate-200/80 bg-white/72 p-7 dark:border-white/10 dark:bg-white/[0.04]">
          <h2 className="text-xl font-semibold tracking-[-0.03em]">Frequently asked questions</h2>
          <div className="mt-5 grid gap-4">
            {post.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[18px] border border-slate-200/60 bg-white/80 p-5 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <h3 className="text-base font-semibold tracking-[-0.01em]">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
