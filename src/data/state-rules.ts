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
      "A practical guide to Delhi registration numbers, zonal office codes, and the format patterns that make DL plates more noticeable than many other state families.",
    intro:
      "Delhi registration numbers are widely recognized, but they also create more format-related questions than many other state families. The reason is simple: Delhi uses zonal office codes, and the examples people see on real vehicles often make them notice the internal series structure more closely.",
    readingTime: "4 min read",
    sections: [
      {
        title: "How Delhi registration numbers are structured",
        body: [
          "Delhi uses the DL prefix, followed by a zonal office code and then the remaining registration series. That means the office number immediately after DL is not just decorative. It is the part that places the registration within the Delhi office structure.",
          "For practical lookup, this is the most important difference between a Delhi plate and a casual reading of a generic state-plus-district model.",
        ],
      },
      {
        title: "Why Delhi examples often look different",
        body: [
          "Users frequently notice Delhi examples because the series letters are more visible in everyday discussion and on-road examples. As a result, Delhi searches often become format questions rather than simple 'which state is this' lookups.",
        ],
      },
      {
        title: "What users should focus on",
        body: [
          "The correct approach is to identify the zonal office code first and then read the remaining series in context. That gives a more accurate answer than treating the plate as if it followed a simpler district-style structure.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do Delhi plates often attract format-related searches?",
        answer:
          "Because users see Delhi registrations frequently and notice the internal series structure more readily than they do in many other state families.",
      },
      {
        question: "What matters most after identifying the DL prefix?",
        answer:
          "The zonal office code is the next meaningful part because it locates the registration within the Delhi transport office structure.",
      },
    ],
  },
  {
    stateCode: "TS",
    slug: "telangana-ts-vs-tg",
    eyebrow: "Telangana rule page",
    title: "Telangana TS vs TG explained",
    description:
      "Understand why Telangana plates may appear as TS or TG and how users should interpret both marks in real-world vehicle lookups.",
    intro:
      "Telangana is one of the clearest examples of a state registration question being driven by a rule change rather than by the office code itself. Users see TS on existing vehicles, TG in newer references, and naturally want to know whether one is current, one is old, or both remain relevant in practice.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why both TS and TG appear",
        body: [
          "The coexistence of TS and TG is the result of a change in the state mark over time. That means the confusion is real rather than cosmetic. Users are comparing what they see on actual vehicles with what they now see in newer references and notifications.",
        ],
      },
      {
        title: "How users should read Telangana numbers now",
        body: [
          "For practical lookup purposes, Telangana should be treated as one registration family with both TS and TG remaining relevant to real-world interpretation. A site that hides one of them entirely will produce avoidable confusion for users who are comparing older and newer references.",
        ],
      },
      {
        title: "Why this matters more in Hyderabad and major city traffic",
        body: [
          "The state-mark question becomes especially visible in high-traffic urban settings because users see more registrations, compare more examples, and therefore notice the difference more quickly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is TS or TG the current Telangana mark?",
        answer:
          "For lookup purposes, users should understand Telangana through both TS and TG because real-world plates and current references can surface either mark depending on timing and context.",
      },
      {
        question: "Why does Telangana need a separate rule page?",
        answer:
          "Because the rule change itself drives user confusion and search behavior in a way that ordinary office-code pages do not fully solve.",
      },
    ],
  },
  {
    stateCode: "OD",
    slug: "odisha-or-vs-od",
    eyebrow: "Odisha rule page",
    title: "Odisha OR vs OD explained",
    description:
      "A practical guide to the OR versus OD question, including why older Odisha plates may still show OR and why current references use OD.",
    intro:
      "Odisha is one of the clearest legacy-prefix questions in Indian vehicle registration. Users still encounter OR on older vehicles, while current references use OD. The confusion is understandable because both marks remain visible in public life even though they do not belong to the same administrative moment.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why OR and OD both exist",
        body: [
          "The change is tied to the renaming of the state from Orissa to Odisha. Once the official state name changed, the current registration reference also changed, but older vehicles and public memory did not disappear overnight.",
        ],
      },
      {
        title: "How users should interpret old and new plates",
        body: [
          "OD should be treated as the current family in modern references, while OR remains a legacy mark that may still be seen on existing vehicles or older discussions. In other words, the old mark still appears in the world, but it should not be mistaken for the current naming standard.",
        ],
      },
      {
        title: "Why this matters in a lookup",
        body: [
          "Without this explanation, users often assume one of the two marks must be invalid. The actual position is simpler: one is current, and the other remains visible because vehicle registration history persists in everyday traffic.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do some Odisha vehicles still show OR?",
        answer:
          "Because older registrations and older plates can still remain on vehicles even after the state-family reference moved to OD.",
      },
      {
        question: "What should new Odisha lookups use?",
        answer:
          "Current Odisha lookups should primarily use OD while still recognizing OR as a legacy mark that may appear on older vehicles.",
      },
    ],
  },
  {
    stateCode: "MH",
    slug: "maharashtra-hsrp-and-rto-codes",
    eyebrow: "Maharashtra rule page",
    title: "Maharashtra HSRP and RTO code guide",
    description:
      "A practical guide to Maharashtra registration numbers, office-heavy MH code structure, and why HSRP questions are common for this state family.",
    intro:
      "Maharashtra is one of the largest and most heavily searched registration families in the country. Users regularly search MH numbers to identify a city or office, and just as often they move from the code question into an HSRP or plate-compliance question. That makes Maharashtra a natural state for a combined rule page.",
    readingTime: "5 min read",
    sections: [
      {
        title: "How the MH family is organized",
        body: [
          "The Maharashtra registration family is office-heavy. Once the MH prefix is identified, the office code becomes the meaningful part of the interpretation because the state spans a large number of active registration offices.",
          "This is why a generic 'MH means Maharashtra' answer is rarely enough for users who are trying to decode a real vehicle number.",
        ],
      },
      {
        title: "Why Maharashtra often leads to HSRP questions",
        body: [
          "Maharashtra has high registration volume, wide urban visibility, and frequent practical questions around plate replacement, compliance, and vehicle documentation. As a result, users often move from an MH code lookup into an HSRP or document-readiness question almost immediately.",
        ],
      },
      {
        title: "How users should read an MH plate",
        body: [
          "Start with the office code, not the city guess. Large cities such as Mumbai and Pune generate strong search intent, but the reliable interpretation still comes from the office number in the registration itself.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does Maharashtra need a separate rule page?",
        answer:
          "Because MH is a large, office-dense registration family and users often need both code-level interpretation and plate-compliance context.",
      },
      {
        question: "What should users focus on inside MH registrations?",
        answer:
          "After identifying MH, the office code is the most useful part of the plate because it narrows the registration to the issuing office family.",
      },
    ],
  },
  {
    stateCode: "TN",
    slug: "tamil-nadu-rto-code-pattern",
    eyebrow: "Tamil Nadu rule page",
    title: "Tamil Nadu RTO code pattern",
    description:
      "A guide to how the TN registration family is structured, why Chennai occupies so many familiar office codes, and how users should interpret the wider sequence.",
    intro:
      "Tamil Nadu is one of the most sequence-heavy registration families in the dataset. Users often recognize the TN prefix immediately, but what they really need is help understanding where the office number sits in the broader state ladder and why Chennai dominates so many familiar entries.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why the TN sequence matters",
        body: [
          "Tamil Nadu is not a state where the prefix alone gives enough practical information. The office sequence is long and well populated, which means the office number is often the real key to useful interpretation.",
        ],
      },
      {
        title: "Why Chennai appears so prominently",
        body: [
          "Chennai and its surrounding suburban belt occupy a large number of the best-known TN office codes. That is why many users first learn the Tamil Nadu registration family through Chennai-related examples rather than through a statewide overview.",
        ],
      },
      {
        title: "How to approach a TN lookup",
        body: [
          "Treat TN as a structured office ladder. Identify the exact code, then place it within the city cluster or the wider state sequence. That is more accurate than trying to interpret the plate from the prefix alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do TN searches feel more detailed than many other states?",
        answer:
          "Because Tamil Nadu uses a long, recognizable office ladder, so users often care about the exact office sequence rather than just the state prefix.",
      },
      {
        question: "Why does Chennai show up so often in TN-related searches?",
        answer:
          "Because Chennai occupies a substantial and familiar portion of the Tamil Nadu office ladder, making it central to how users experience TN registrations.",
      },
    ],
  },
  {
    stateCode: "KA",
    slug: "karnataka-bengaluru-rto-codes",
    eyebrow: "Karnataka rule page",
    title: "Karnataka and Bengaluru RTO codes",
    description:
      "A practical guide to Karnataka registration numbers, with a focus on why Bengaluru dominates user searches and how KA office codes should be interpreted.",
    intro:
      "Karnataka registration lookups are often city-led. Many users first encounter the KA family through Bengaluru and only then move outward into the wider state structure. That makes Karnataka one of the clearest cases where state-level and city-level search intent overlap.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why Bengaluru dominates KA searches",
        body: [
          "For many users, Karnataka registrations are visually associated with Bengaluru before they are associated with the rest of the state. That makes Bengaluru the practical gateway into the KA family for a large portion of search traffic.",
        ],
      },
      {
        title: "How users should read the KA family",
        body: [
          "The KA prefix identifies Karnataka, but the office code is what turns the registration into a useful lookup. Users should therefore treat KA as the family and the following number as the actual office signal.",
        ],
      },
      {
        title: "Why the state page still matters",
        body: [
          "Even when city searches dominate, the wider Karnataka page remains important because it gives context around the broader office structure. A city page can answer the fast query; the state page explains the family.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is Bengaluru so important in Karnataka registration searches?",
        answer:
          "Because many of the best-known KA registrations are associated with Bengaluru, so city-level recognition drives a large share of user curiosity.",
      },
      {
        question: "What should users focus on after identifying the KA prefix?",
        answer:
          "The office code is the next meaningful step because it determines where within Karnataka the registration belongs.",
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
