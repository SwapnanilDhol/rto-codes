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
    eyebrow: "Metro directory",
    title: "Delhi RTO codes",
    description:
      "Browse Delhi RTO codes across the official zonal ladder, with the Delhi-specific registration format context users usually need.",
    intro:
      "Delhi is one of the clearest metro landing pages for the domain because users search both for the zonal office ladder and for the letter-format quirks that show up on Delhi registrations.",
    readingTime: "4 min read",
    featuredCodes: ["DL-01", "DL-02", "DL-03", "DL-04", "DL-05", "DL-06", "DL-07"],
    sections: [
      {
        title: "Why Delhi deserves a city page",
        body: [
          "Delhi searches are not generic state-prefix lookups. Users usually want one of two things: the zonal office behind a DL number, or an explanation of the letter segment seen on actual plates.",
          "That makes Delhi one of the strongest city-heavy entry pages because it combines office lookup intent with format-explainer intent.",
        ],
      },
      {
        title: "How to read the DL ladder",
        body: [
          "The numeric block after DL points to the zonal office family. In practice, Delhi users compare these office numbers constantly because the city has dense on-road visibility and a relatively familiar registration family.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many Delhi RTO codes are listed here?",
        answer: "This page groups the seven Delhi zonal code blocks surfaced in the current official-safe mapping, from DL-01 through DL-07.",
      },
      {
        question: "Why do Delhi plates sometimes look different from other states?",
        answer:
          "Delhi examples often surface extra letter-series context that users notice on real plates, so the city generates more format-related search intent than many other metros.",
      },
    ],
  },
  {
    slug: "bengaluru-rto-codes",
    city: "Bengaluru",
    stateCode: "KA",
    eyebrow: "Metro directory",
    title: "Bengaluru RTO codes",
    description:
      "Explore the Bengaluru-linked Karnataka RTO codes in the current dataset, including the KA series entries that users most often associate with Bangalore.",
    intro:
      "Bengaluru is a high-recognition city even when the dataset is authority-led rather than neighborhood-led. Users searching Bangalore or Bengaluru usually want to know which KA offices map to the city cluster they have in mind.",
    readingTime: "3 min read",
    featuredCodes: ["KA-02", "KA-03"],
    sections: [
      {
        title: "How Bengaluru appears in this dataset",
        body: [
          "The current Karnataka dataset ties Bengaluru to the Bangalore Rural and Bangalore Urban office entries. That is enough to justify a city page because user search demand is centered on the city label, not the administrative nuance.",
        ],
      },
      {
        title: "Why this page matters",
        body: [
          "Bengaluru plate searches often come from curiosity after seeing KA numbers in the wild. A city page turns that vague recognition into a usable lookup entry point.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Bengaluru codes are surfaced here?",
        answer: "The current dataset connects Bengaluru with KA-02 and KA-03 through the Bangalore Rural and Bangalore Urban entries.",
      },
      {
        question: "Why does the page use both Bangalore and Bengaluru language?",
        answer:
          "Because users still search both variants heavily, and the registration lookup intent is the same either way.",
      },
    ],
  },
  {
    slug: "mumbai-rto-codes",
    city: "Mumbai",
    stateCode: "MH",
    eyebrow: "Metro directory",
    title: "Mumbai RTO codes",
    description:
      "Browse Mumbai RTO codes in the MH family, including the central, western, eastern, and wider metro-belt series that matter most for Mumbai plate lookups.",
    intro:
      "Mumbai is one of the highest-value city queries because users often know the city first and only then want the exact MH office code. That makes a metro-specific page more useful than forcing everything through the generic state page.",
    readingTime: "3 min read",
    featuredCodes: ["MH-01", "MH-02", "MH-03", "MH-43", "MH-46", "MH-47", "MH-48"],
    sections: [
      {
        title: "What this page covers",
        body: [
          "The official-safe Maharashtra mapping groups Mumbai around the central, west, and east city offices, and also surfaces major metro-belt offices such as Vashi, Panvel, Borivali, and Vasai.",
          "That gives users a direct metro-focused explanation instead of making them scan the broader Maharashtra list first.",
        ],
      },
      {
        title: "Why Mumbai is commercially useful later",
        body: [
          "Mumbai combines very strong recognition with compliance and service intent, which makes it a good candidate for later HSRP, transfer, and insurance-adjacent content.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Mumbai-linked codes are on this page?",
        answer:
          "The page currently groups MH-01, MH-02, MH-03, MH-43, MH-46, MH-47, and MH-48 as the main Mumbai and wider metro-belt cluster.",
      },
      {
        question: "Why have a Mumbai page if Maharashtra already exists?",
        answer:
          "Because many users search for Mumbai specifically, not for Maharashtra in general, and the metro page answers that intent directly.",
      },
    ],
  },
  {
    slug: "chennai-rto-codes",
    city: "Chennai",
    stateCode: "TN",
    eyebrow: "Metro directory",
    title: "Chennai RTO codes",
    description:
      "Browse Chennai RTO codes across the dense TN office ladder, including central, suburban, and major cluster entries in the Chennai family.",
    intro:
      "Chennai is the strongest city-specific page in the current dataset because Tamil Nadu already contains a deep Chennai office sequence. That makes it a natural search-entry page for both metro users and TN-format researchers.",
    readingTime: "5 min read",
    featuredCodes: ["TN-01", "TN-02", "TN-03", "TN-04", "TN-05", "TN-06", "TN-07", "TN-09", "TN-10", "TN-11", "TN-12", "TN-13", "TN-14", "TN-18", "TN-22", "TN-85"],
    sections: [
      {
        title: "Why Chennai is a standout city page",
        body: [
          "The Chennai ladder is already dense enough that users often search the city first and then want the exact TN series for the local office or suburban cluster they have in mind.",
          "That makes Chennai one of the clearest examples of why city-heavy landing pages help the domain grow.",
        ],
      },
      {
        title: "How to use the Chennai sequence",
        body: [
          "Start with the specific TN code and then compare whether it belongs to central Chennai, a suburban belt, or a later Chennai-linked office cluster. This page gives a cleaner overview before users jump into individual code pages.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Chennai really have that many TN office codes?",
        answer:
          "Yes. Chennai is one of the densest metro clusters in the current dataset, which is exactly why it deserves a dedicated city page.",
      },
      {
        question: "Should users still check the Tamil Nadu state page?",
        answer:
          "Yes. The city page is the fastest entry point for Chennai-heavy searches, but the TN state page gives broader sequence context across Tamil Nadu.",
      },
    ],
  },
  {
    slug: "hyderabad-rto-codes",
    city: "Hyderabad",
    stateCode: "TS",
    eyebrow: "Metro directory",
    title: "Hyderabad RTO codes",
    description:
      "Browse Hyderabad RTO codes across the Telangana family, with both TS and TG context for the city-linked office ladder.",
    intro:
      "Hyderabad is one of the best metro pages for Telangana because it combines strong city recognition with the extra TS versus TG question that users already bring into the lookup.",
    readingTime: "4 min read",
    featuredCodes: ["TS-09", "TS-10", "TS-11", "TS-12", "TS-13"],
    sections: [
      {
        title: "Why Hyderabad needs a separate page",
        body: [
          "Users often search Hyderabad directly, not Telangana first. At the same time, the city is where the TS-versus-TG confusion becomes most visible because these codes show up so often in the real world.",
        ],
      },
      {
        title: "How to interpret the city ladder",
        body: [
          "The Hyderabad sequence in the current dataset is organized into central, east, north, south, and west entries. The metro page groups those together so users can understand the city family at a glance.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does this page still show TS if TG is now relevant too?",
        answer:
          "Because users still encounter TS on real vehicles, while TG matters for newer references. The city page keeps both in view so the lookup remains practical.",
      },
      {
        question: "Which Hyderabad codes are grouped here?",
        answer:
          "This page groups the Hyderabad-linked TS-09 through TS-13 office ladder in the current dataset.",
      },
    ],
  },
  {
    slug: "kolkata-rto-codes",
    city: "Kolkata",
    stateCode: "WB",
    eyebrow: "Metro directory",
    title: "Kolkata RTO codes",
    description:
      "A Kolkata-focused entry point into the West Bengal registration family, highlighting the PVD Kolkata registration series in the official-safe mapping.",
    intro:
      "Kolkata is still worth a metro landing page even with a lighter current mapping because users often search for the city explicitly and expect a direct answer rather than a generic West Bengal directory.",
    readingTime: "3 min read",
    featuredCodes: ["WB-01", "WB-02", "WB-03", "WB-04", "WB-05", "WB-06", "WB-07"],
    sections: [
      {
        title: "Why Kolkata is still a strong city page",
        body: [
          "Search behavior is city-first, and the official-safe West Bengal mapping actually groups a dedicated PVD Kolkata series rather than a single generic Kolkata district row.",
          "A dedicated page still captures that intent far better than burying the answer inside a broader state directory.",
        ],
      },
      {
        title: "What this page is best for",
        body: [
          "Use it as the shortest route from a Kolkata query into the wider West Bengal code family and then into code-specific pages.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which Kolkata code is surfaced here?",
        answer:
          "The current official-safe mapping groups Kolkata under the PVD Kolkata series from WB-01 through WB-07.",
      },
      {
        question: "Why is Kolkata lighter than Chennai or Delhi?",
        answer:
          "Because the current dataset remains denser and more city-segmented for Chennai and Delhi than it does for Kolkata, even after correcting the West Bengal office model.",
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
