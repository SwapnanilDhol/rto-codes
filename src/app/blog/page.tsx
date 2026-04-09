"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import type { Post } from "@/data/posts";

const CATEGORY_LABELS: Record<Post["category"], string> = {
  guide: "Guides",
  service: "Services",
  "state-rule": "State rules",
};

const CATEGORY_COLORS: Record<Post["category"], { badge: string; text: string; darkText: string }> = {
  guide: {
    badge: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
    text: "text-sky-600",
    darkText: "text-sky-400",
  },
  service: {
    badge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    text: "text-emerald-600",
    darkText: "text-emerald-400",
  },
  "state-rule": {
    badge: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
    text: "text-violet-600",
    darkText: "text-violet-400",
  },
};

type Filter = "all" | Post["category"];

export default function BlogPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? posts : posts.filter((p) => p.category === filter);
  const featured = posts[0];
  const rest = filtered.filter((p) => p.slug !== featured.slug || filter !== "all");

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">
            Editorial
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            RTO Guides &amp; Resources
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Practical guides on number plate formats, HSRP compliance, ownership transfer, state-specific registration rules, and more.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(["all", "guide", "service", "state-rule"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "border border-slate-200/80 bg-white/80 text-slate-600 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-sky-400/40 dark:hover:text-sky-300"
              }`}
            >
              {f === "all" ? "All posts" : CATEGORY_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {filter === "all" && featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-10 grid gap-6 rounded-[32px] border border-slate-200/90 bg-white/80 p-8 transition duration-200 hover:-translate-y-1 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40 lg:grid-cols-[1fr_340px]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${CATEGORY_COLORS[featured.category].badge}`}>
                  {CATEGORY_LABELS[featured.category]}
                </span>
                {featured.stateCode && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {featured.stateCode}
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {featured.title}
              </h2>
              {featured.stats && featured.stats.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.stats.slice(0, 4).map((stat) => (
                    <span
                      key={stat.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/[0.05] dark:text-slate-300"
                    >
                      <span className="text-[10px] text-slate-400">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {featured.description}
              </p>
              <p className="mt-5 text-sm font-medium text-slate-400">
                {featured.readingTime} · {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>
            {featured.plateFormat && (
              <div className="flex items-center justify-center rounded-[24px] border border-slate-200/60 bg-slate-50/60 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold tracking-widest text-slate-800 dark:text-white">
                    {featured.plateFormat}
                  </div>
                  <p className="mt-2 text-xs text-slate-400">Plate format preview</p>
                </div>
              </div>
            )}
          </Link>
        )}

        {/* Post grid */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 rounded-[24px] border border-slate-200/80 bg-white/72 px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-400/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${CATEGORY_COLORS[post.category].badge}`}>
                        {CATEGORY_LABELS[post.category]}
                      </span>
                      {post.stateCode && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          {post.stateCode}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em]">
                      {post.title}
                    </h3>
                  </div>
                </div>
                {post.stats && post.stats.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {post.stats.slice(0, 2).map((stat) => (
                      <span
                        key={stat.label}
                        className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        <span className="text-[10px] text-slate-400">{stat.label}</span>
                        <span>{stat.value}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {post.description}
              </p>
              <p className="text-sm font-medium text-slate-400">
                {post.readingTime} · {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-slate-400">No posts in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
