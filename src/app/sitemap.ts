import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { indiaStatesWithDistricts } from "@/data/districts";
import { siteConfig } from "@/lib/site";
import { getAllCodeRecords, getCodeSlug, getStateSlug } from "@/lib/state-content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/states`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/data`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...indiaStatesWithDistricts.map((state) => ({
      url: `${siteConfig.url}/states/${getStateSlug(state)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...getAllCodeRecords().map(({ district }) => ({
      url: `${siteConfig.url}/codes/${getCodeSlug(district.rtoCode)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
