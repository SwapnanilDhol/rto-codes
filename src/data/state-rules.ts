export type StateRuleSection = {
  title: string;
  body: string[];
};

export type StateRuleFAQ = {
  question: string;
  answer: string;
};

export type StateRule = {
  stateCode: string;
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  readingTime: string;
  sections: StateRuleSection[];
  faqs: StateRuleFAQ[];
};

export const stateRules: StateRule[] = [
  {
    stateCode: "DL",
    slug: "delhi-registration-format",
    eyebrow: "Delhi rule page",
    title: "Delhi vehicle registration format",
    description:
      "Understand Delhi registration marks, zonal office codes, and why Delhi examples sometimes show vehicle-class letters like C or S.",
    intro:
      "Delhi is one of the most frequently searched state prefixes because people see DL plates constantly and then notice that the format can look slightly different from ordinary state examples. This page exists to explain that difference clearly.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why Delhi looks different to users",
        body: [
          "Delhi registrations are familiar enough that users often notice the variation inside the series itself. The common confusion is not the DL prefix; it is the letter segment that appears in example registrations.",
          "This is why Delhi deserves a dedicated rule page instead of being treated as just another state prefix list.",
        ],
      },
      {
        title: "The zonal code still matters",
        body: [
          "The numeric office block still anchors the local registration context, but Delhi searches often go one level deeper because users compare code examples directly from plates they have seen.",
          "For RTO.codes, Delhi is a strong query class because it blends lookup intent with format-explainer intent.",
        ],
      },
      {
        title: "What users usually want from this page",
        body: [
          "They want to understand what the letters mean, whether the format is valid, and how the DL family differs from a simpler state-office pattern.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do some Delhi examples show a letter like C or S?",
        answer:
          "Because Delhi examples often surface class-linked lettering in practical registration examples, which is one reason DL searches are more format-sensitive than many other state prefixes.",
      },
      {
        question: "Is DL still the main state family for Delhi vehicles?",
        answer:
          "Yes. DL remains the vehicle registration family for Delhi, with internal office and series distinctions underneath it.",
      },
    ],
  },
  {
    stateCode: "TS",
    slug: "telangana-ts-vs-tg",
    eyebrow: "Telangana rule page",
    title: "Telangana TS vs TG explained",
    description:
      "A focused explainer on Telangana registration marks, why TS and TG both appear, and how users should interpret the difference.",
    intro:
      "Telangana is one of the clearest rule-driven search topics for this project because users encounter both TS and TG and want to know whether one is old, one is current, or whether both remain relevant.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why both TS and TG appear",
        body: [
          "The confusion comes from change over time. Users see one code in newer discussions and another on real vehicles, which makes the registration family feel inconsistent unless the site explains it directly.",
          "This is exactly the kind of state-specific nuance that generic plate lookup sites miss.",
        ],
      },
      {
        title: "Why this matters for search",
        body: [
          "Some users search by the current code, some by the older or alternate code they saw on a vehicle, and some by the question itself. A dedicated Telangana rule page helps capture all three.",
        ],
      },
      {
        title: "How RTO.codes should treat it",
        body: [
          "The best UX is to show both references where relevant while making the state family itself unmistakably Telangana.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is TS or TG the current Telangana mark?",
        answer:
          "Users should treat Telangana as a family where both TS and TG may be relevant in lookups, especially when comparing older vehicles with newer references.",
      },
      {
        question: "Why does this need a dedicated page?",
        answer:
          "Because it is one of the few state registration topics where the rule change itself drives search intent.",
      },
    ],
  },
  {
    stateCode: "OD",
    slug: "odisha-or-vs-od",
    eyebrow: "Odisha rule page",
    title: "Odisha OR vs OD explained",
    description:
      "Understand why Odisha plates may show OR or OD, and how the renaming of the state changed the registration mark users see.",
    intro:
      "Odisha is a textbook example of why old and new registration marks can coexist in public memory. Users see OR on older vehicles and OD in newer references, then search to understand whether both are valid.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why OR and OD both appear",
        body: [
          "This is tied to the state's renaming from Orissa to Odisha. That kind of administrative change leaves a long tail of older real-world plates even after the newer mark becomes the reference standard.",
          "That makes Odisha a valuable search topic because it combines lookup intent with historical-format intent.",
        ],
      },
      {
        title: "What users actually need",
        body: [
          "They do not want a legal essay. They want a direct answer on why both marks exist and what they should treat as current versus legacy.",
        ],
      },
      {
        title: "Why this page matters for the domain",
        body: [
          "It creates a high-quality state-specific search entry point that also supports code pages and the broader format explainers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do some Odisha vehicles still show OR?",
        answer:
          "Because older registrations and public memory often preserve the legacy mark even after the state reference changed to OD.",
      },
      {
        question: "What should new Odisha lookups use?",
        answer:
          "Users should primarily expect OD in the current state-family context, while still recognizing OR as a legacy reference they may see on existing vehicles.",
      },
    ],
  },
  {
    stateCode: "MH",
    slug: "maharashtra-hsrp-and-rto-codes",
    eyebrow: "Maharashtra rule page",
    title: "Maharashtra HSRP and RTO code guide",
    description:
      "A Maharashtra-specific guide to MH registration codes, why the state has such a dense code network, and where HSRP-related intent fits in.",
    intro:
      "Maharashtra is one of the strongest traffic states for the domain because MH appears constantly in the wild and the code family is broad enough that users need both lookup help and compliance context.",
    readingTime: "5 min read",
    sections: [
      {
        title: "Why Maharashtra is high-value",
        body: [
          "MH is large, dense, and familiar. Users search Maharashtra because they need to decode a specific office code, compare city-level entries, or understand registration compliance questions tied to a major state.",
          "That gives Maharashtra both SEO depth and commercial relevance later.",
        ],
      },
      {
        title: "How the MH family behaves",
        body: [
          "The state prefix is simple, but the office network is extensive. That means the numeric segment does more of the practical work once users are inside the MH ladder.",
        ],
      },
      {
        title: "Why HSRP matters here",
        body: [
          "Maharashtra is a natural place to connect registration lookups with HSRP explainers because the user intent often shifts from code decoding into compliance or replacement questions.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does Maharashtra need a separate rule page?",
        answer:
          "Because MH is a large, high-recognition state family with both broad code coverage and strong compliance-related search intent.",
      },
      {
        question: "What should users focus on inside MH codes?",
        answer:
          "Once the MH prefix is known, the office number is the key part for practical identification.",
      },
    ],
  },
  {
    stateCode: "TN",
    slug: "tamil-nadu-rto-code-pattern",
    eyebrow: "Tamil Nadu rule page",
    title: "Tamil Nadu RTO code pattern",
    description:
      "A Tamil Nadu-specific guide to the TN registration ladder, major office density, and how users should interpret the sequence.",
    intro:
      "Tamil Nadu is one of the strongest structured code families in the dataset. Users often search TN prefixes because the ladder is long, busy, and strongly associated with major urban office clusters.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why TN is sequence-driven",
        body: [
          "Tamil Nadu searches are often about where a number sits inside the broader ladder rather than just what the state prefix means.",
          "That makes TN a good candidate for state-specific content because users need help interpreting the scale of the sequence.",
        ],
      },
      {
        title: "What makes TN useful for SEO",
        body: [
          "Users search for Chennai-related code blocks, early-series registrations, and office-heavy parts of the state. The structure itself creates many long-tail opportunities.",
        ],
      },
      {
        title: "How this supports future pages",
        body: [
          "TN can later branch into city-heavy code pages, HSRP pages, and office-specific explainers around the busiest clusters.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do Tamil Nadu code searches feel more detailed than some smaller states?",
        answer:
          "Because the TN family is long and dense enough that users often care about the internal office sequence, not just the state prefix.",
      },
      {
        question: "Is TN a good candidate for deeper city-level pages later?",
        answer:
          "Yes. Tamil Nadu naturally supports future content around the busier office clusters and major urban code groups.",
      },
    ],
  },
  {
    stateCode: "KA",
    slug: "karnataka-bengaluru-rto-codes",
    eyebrow: "Karnataka rule page",
    title: "Karnataka and Bengaluru RTO codes",
    description:
      "Understand Karnataka's KA registration family, why Bengaluru dominates searches, and how users should interpret the early KA office blocks.",
    intro:
      "Karnataka is a strong state-specific query cluster because many people first encounter the KA family through Bengaluru. That creates a mix of state-level and city-level search intent that deserves its own page.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why Bengaluru dominates KA searches",
        body: [
          "For many users, the Karnataka registration family is effectively introduced through Bengaluru. That means the state-level page has to explain both the broad KA prefix and the concentration of important early office blocks.",
          "This is a good example of where state pages can later branch into city-specific search pages.",
        ],
      },
      {
        title: "How users read the KA family",
        body: [
          "Once users recognize KA, the office number becomes the meaningful differentiator. That is where Karnataka behaves like a mature, high-traffic registration family rather than a simple single-code region.",
        ],
      },
      {
        title: "Why this page matters",
        body: [
          "Karnataka is valuable because the state-level page can capture broad queries while code pages absorb the more precise office-level searches.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is Bengaluru so important in Karnataka code searches?",
        answer:
          "Because many of the most familiar and frequently encountered KA registrations are associated with Bengaluru office clusters.",
      },
      {
        question: "What should users focus on after identifying KA?",
        answer:
          "The numeric office block is the next step, because that is what differentiates the specific registration office inside Karnataka.",
      },
    ],
  },
];

export function getRuleByStateCode(stateCode: string) {
  return stateRules.find((rule) => rule.stateCode === stateCode) ?? null;
}

export function getRuleBySlug(slug: string) {
  return stateRules.find((rule) => rule.slug === slug) ?? null;
}
