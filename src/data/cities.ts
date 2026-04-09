export type CitySection = {
  title: string;
  body: string[];
};

export type CityFAQ = {
  question: string;
  answer: string;
};

export type CityPage = {
  slug: string;
  city: string;
  stateCode: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  readingTime: string;
  featuredCodes: string[];
  sections: CitySection[];
  faqs: CityFAQ[];
};

export const cityPages: CityPage[] = [
  {
    slug: "delhi-rto-codes",
    city: "Delhi",
    stateCode: "DL",
    eyebrow: "Metro guide",
    title: "Delhi RTO codes",
    description:
      "A Delhi-focused guide to DL registration numbers, including the zonal office codes most users encounter and the format details that make Delhi registrations distinctive.",
    intro:
      "Delhi registration numbers are unusually familiar because DL plates appear constantly in the city and surrounding NCR traffic. The practical question for most users is not what DL means. It is which zonal office the number belongs to and why Delhi registrations often look slightly different from examples in other states.",
    readingTime: "4 min read",
    featuredCodes: ["DL-01", "DL-02", "DL-03", "DL-04", "DL-05", "DL-06", "DL-07"],
    sections: [
      {
        title: "How Delhi registration numbers are organized",
        body: [
          "Delhi registrations are organized around zonal office codes rather than a simple district-style ladder. That is why the DL number immediately after the prefix matters so much: it points users toward the relevant zonal office family.",
          "For everyday users, the practical outcome is that a Delhi number should be read as a zonal registration mark, not just as a generic city plate.",
        ],
      },
      {
        title: "Why Delhi plates often attract extra attention",
        body: [
          "Delhi is one of the few registration families where users frequently notice format details beyond the state prefix. The examples seen on the road often include series patterns that make people compare Delhi against other states more closely.",
          "That is why Delhi lookup intent often blends office lookup and format explanation in the same search.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many Delhi code blocks are listed here?",
        answer:
          "This page groups the seven Delhi zonal code blocks currently reflected in the official-safe mapping used by the site.",
      },
      {
        question: "What matters most after identifying DL on a number plate?",
        answer:
          "The zonal office code is the next meaningful part of the registration number because it narrows the plate into a specific Delhi office family.",
      },
    ],
  },
  {
    slug: "bengaluru-rto-codes",
    city: "Bengaluru",
    stateCode: "KA",
    eyebrow: "Metro guide",
    title: "Bengaluru RTO codes",
    description:
      "A Bengaluru-focused guide to the Karnataka registration family, highlighting the KA codes that users most often associate with Bangalore or Bengaluru.",
    intro:
      "Bengaluru is one of the most searched city names in the Indian vehicle-registration space because many users first recognize Karnataka registrations through the city. This page is designed to group the Bengaluru-linked entries clearly and then connect users to the wider Karnataka registration family.",
    readingTime: "3 min read",
    featuredCodes: ["KA-02", "KA-03"],
    sections: [
      {
        title: "How Bengaluru appears in the current dataset",
        body: [
          "The current Karnataka dataset maps Bengaluru through the Bangalore Rural and Bangalore Urban entries. Even though Karnataka as a whole needs deeper official verification before a full office-by-office rewrite, these entries are the ones most users currently associate with Bengaluru in the live directory.",
          "This page therefore serves as a city-facing entry point while still acknowledging the broader KA family around it.",
        ],
      },
      {
        title: "How to use this page",
        body: [
          "If a user already knows the registration begins with KA and is trying to place it within the Bengaluru cluster, this page is the fastest orientation layer. From here, the next step is the state page or the specific code page.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Bengaluru-linked codes are currently listed here?",
        answer:
          "The current live dataset connects Bengaluru with KA-02 and KA-03 through the Bangalore Rural and Bangalore Urban entries.",
      },
      {
        question: "Why does the page use both Bangalore and Bengaluru language?",
        answer:
          "Because both names remain common in user searches and everyday usage, and they point to the same registration-reference intent.",
      },
    ],
  },
  {
    slug: "mumbai-rto-codes",
    city: "Mumbai",
    stateCode: "MH",
    eyebrow: "Metro guide",
    title: "Mumbai RTO codes",
    description:
      "A Mumbai-focused guide to MH registration numbers, covering the city, suburban, and wider metro-belt office series that users most often search for.",
    intro:
      "Mumbai registrations are best understood as a city cluster rather than a single office. In the official Maharashtra office ladder, the metropolitan area spans central, western, eastern, and wider suburban or satellite office groupings. That is why a dedicated Mumbai page is more useful than a single city row.",
    readingTime: "4 min read",
    featuredCodes: ["MH-01", "MH-02", "MH-03", "MH-43", "MH-46", "MH-47", "MH-48"],
    sections: [
      {
        title: "How Mumbai fits into the MH family",
        body: [
          "The official Maharashtra registration ladder shows that Mumbai is not limited to one code. It sits across multiple office series, including Mumbai Central, West, East, and key metro-belt offices such as Vashi, Panvel, Borivali, and Vasai.",
          "This is important because users often search for 'Mumbai RTO code' as if there were only one answer. In practice, the city and surrounding metropolitan region are spread across several office families.",
        ],
      },
      {
        title: "Why users should start with the office code",
        body: [
          "Once the MH prefix is known, the office number becomes the useful part of the plate. That is especially true in Mumbai, where the metropolitan area is dense enough that the city label alone is not specific enough for a reliable interpretation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Mumbai-linked codes are grouped on this page?",
        answer:
          "This page currently groups MH-01, MH-02, MH-03, MH-43, MH-46, MH-47, and MH-48 as the main Mumbai and wider metro-belt cluster.",
      },
      {
        question: "Why is Mumbai not represented by a single MH code?",
        answer:
          "Because the official Maharashtra office structure distributes the metropolitan region across multiple registration offices rather than a single city-only series.",
      },
    ],
  },
  {
    slug: "chennai-rto-codes",
    city: "Chennai",
    stateCode: "TN",
    eyebrow: "Metro guide",
    title: "Chennai RTO codes",
    description:
      "A Chennai-focused guide to the TN registration ladder, including the central and suburban office codes most strongly associated with the city.",
    intro:
      "Chennai is one of the clearest examples of a city that occupies a deep and recognizable block inside a state registration family. Users who search Chennai registration numbers are usually trying to understand where a TN code sits within the larger city and suburban office structure.",
    readingTime: "5 min read",
    featuredCodes: ["TN-01", "TN-02", "TN-03", "TN-04", "TN-05", "TN-06", "TN-07", "TN-09", "TN-10", "TN-11", "TN-12", "TN-13", "TN-14", "TN-18", "TN-22", "TN-85"],
    sections: [
      {
        title: "Why Chennai forms a dense TN cluster",
        body: [
          "Tamil Nadu uses a long registration sequence, and Chennai occupies many of the most familiar and high-traffic office blocks within that ladder. That makes city-level orientation useful because the answer is rarely just 'it is a TN plate'.",
          "Users often want to know whether a number belongs to central Chennai, a suburban belt, or another Chennai-linked office family within the wider metropolitan region.",
        ],
      },
      {
        title: "How to read Chennai-related TN numbers",
        body: [
          "Start with the exact TN code and then compare it against the Chennai office list. The city page helps users do that quickly before they move into individual code pages or the broader Tamil Nadu state directory.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Chennai really use that many TN office codes?",
        answer:
          "Yes. Chennai occupies a substantial portion of the best-known Tamil Nadu office ladder, including central and suburban registration series.",
      },
      {
        question: "Should this page be read separately from the Tamil Nadu state page?",
        answer:
          "It is best used as a city-level shortcut. The Tamil Nadu state page still gives the wider sequence context for the full TN family.",
      },
    ],
  },
  {
    slug: "hyderabad-rto-codes",
    city: "Hyderabad",
    stateCode: "TS",
    eyebrow: "Metro guide",
    title: "Hyderabad RTO codes",
    description:
      "A Hyderabad-focused guide to the Telangana registration ladder, including the core city codes and the TS/TG context that users commonly ask about.",
    intro:
      "Hyderabad registration lookups often involve two questions at once: which city office family the number belongs to and whether TS or TG should be expected. A useful city page therefore needs to explain both the office ladder and the ongoing user confusion around the state mark.",
    readingTime: "4 min read",
    featuredCodes: ["TS-09", "TS-10", "TS-11", "TS-12", "TS-13"],
    sections: [
      {
        title: "How the Hyderabad office ladder is grouped",
        body: [
          "In the current Telangana dataset, Hyderabad is grouped through central, east, north, south, and west office entries. That makes the city page a practical orientation tool for users who already know the plate is Hyderabad-linked but need the office context.",
        ],
      },
      {
        title: "Why TS and TG both matter here",
        body: [
          "Hyderabad is where the state-mark question becomes especially visible because the city has high plate visibility and high search volume. Users still encounter TS on existing vehicles, while TG now appears in newer references. The city page therefore keeps both signals in view.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Hyderabad codes are grouped here?",
        answer:
          "This page groups the Hyderabad-linked TS-09 through TS-13 entries in the current live dataset.",
      },
      {
        question: "Why does the page reference both TS and TG?",
        answer:
          "Because users continue to see TS on existing vehicles while TG is relevant in newer state references. Both matter in real-world lookups.",
      },
    ],
  },
  {
    slug: "kolkata-rto-codes",
    city: "Kolkata",
    stateCode: "WB",
    eyebrow: "Metro guide",
    title: "Kolkata RTO codes",
    description:
      "A Kolkata-focused guide to the West Bengal registration family, with the PVD Kolkata series grouped together for quick city-level lookup.",
    intro:
      "Kolkata registrations are best understood through the PVD Kolkata series rather than through a single city row. Users who search Kolkata usually want the quickest possible answer to whether a number belongs to the city registration family before they move deeper into the West Bengal office structure.",
    readingTime: "3 min read",
    featuredCodes: ["WB-01", "WB-02", "WB-03", "WB-04", "WB-05", "WB-06", "WB-07"],
    sections: [
      {
        title: "How Kolkata appears in the official West Bengal structure",
        body: [
          "In the official-safe West Bengal mapping used by the site, Kolkata is represented through the PVD Kolkata registration series rather than a single generic city label. That is a more accurate way to understand how Kolkata fits inside the WB registration family.",
        ],
      },
      {
        title: "How to use this page",
        body: [
          "Use this page to establish whether a plate belongs to the Kolkata registration family. After that, the next useful step is the exact code page or the wider West Bengal directory if the number falls outside the city series.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Kolkata codes are shown on this page?",
        answer:
          "The page groups the PVD Kolkata series from WB-01 through WB-07 in the current official-safe mapping.",
      },
      {
        question: "Why is Kolkata shown as a series instead of a single code?",
        answer:
          "Because the official West Bengal office structure groups Kolkata through multiple registration marks rather than a single standalone city code.",
      },
    ],
  },
];

export const featuredCities = cityPages.slice(0, 4);

export function getCityBySlug(slug: string) {
  return cityPages.find((cityPage) => cityPage.slug === slug) ?? null;
}

export function getCitiesByStateCode(stateCode: string) {
  return cityPages.filter((cityPage) => cityPage.stateCode === stateCode);
}
