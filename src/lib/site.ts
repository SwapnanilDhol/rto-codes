import { indiaStatesWithDistricts } from "@/data/districts";

const totalStates = indiaStatesWithDistricts.length;
const totalCodes = indiaStatesWithDistricts.reduce(
  (count, state) => count + state.districts.length,
  0
);

export const siteConfig = {
  name: "RTO.codes",
  title: "RTO.codes",
  description:
    "Search India RTO registration codes by state, transport office, and prefix. Browse official-style registration marks across states and union territories.",
  url: "https://rto.codes",
  locale: "en_IN",
  ogImagePath: "/opengraph-image",
  twitterImagePath: "/twitter-image",
  keywords: [
    "India RTO codes",
    "RTO code lookup",
    "vehicle registration India",
    "state code India",
    "number plate India",
    "registration mark India",
    "transport office codes",
    "India number plate lookup",
    "RTO directory",
    "vehicle registration prefixes",
  ],
} as const;

export const siteStats = {
  totalStates,
  totalCodes,
};

export const absoluteOgImageUrl = `${siteConfig.url}${siteConfig.ogImagePath}`;
export const absoluteTwitterImageUrl = `${siteConfig.url}${siteConfig.twitterImagePath}`;
