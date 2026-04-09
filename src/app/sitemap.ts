import type { MetadataRoute } from "next";
import { cityPages } from "@/data/cities";
import { guides } from "@/data/guides";
import { servicePages } from "@/data/services";
import { indiaStatesWithDistricts } from "@/data/districts";
import { stateRules } from "@/data/state-rules";
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
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/states`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/codes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/cities`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.88,
    },
    {
      url: `${siteConfig.url}/rules/states`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...indiaStatesWithDistricts.map((state) => ({
      url: `${siteConfig.url}/states/${getStateSlug(state)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...stateRules.map((rule) => ({
      url: `${siteConfig.url}/rules/states/${rule.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cityPages.map((cityPage) => ({
      url: `${siteConfig.url}/cities/${cityPage.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...servicePages.map((servicePage) => ({
      url: `${siteConfig.url}/services/${servicePage.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),
    ...getAllCodeRecords().map(({ district }) => ({
      url: `${siteConfig.url}/codes/${getCodeSlug(district.rtoCode)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
