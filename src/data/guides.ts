export type GuideSection = {
  title: string;
  body: string[];
};

export type GuideFAQ = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  readingTime: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFAQ[];
};

export const guides: Guide[] = [
  {
    slug: "hsrp-number-plate-guide-india",
    eyebrow: "Compliance guide",
    title: "HSRP number plate guide for India",
    description:
      "Understand what an HSRP number plate is, where it matters, and what owners should verify before ordering or replacing one.",
    readingTime: "5 min read",
    intro:
      "High Security Registration Plates are now the baseline reference point for most modern vehicle registration conversations in India. Users rarely want the acronym alone; they want to know whether their plate is compliant, when to replace it, and which details should match the vehicle records.",
    sections: [
      {
        title: "What HSRP means in practice",
        body: [
          "An HSRP is a standardized registration plate with tamper-resistant installation and traceable issuance. For end users, the practical question is less about the spec sheet and more about whether the plate on the vehicle matches the registered vehicle details.",
          "When people search for HSRP, they usually need one of three things: a compliance check, a replacement route, or state-specific ordering guidance. That makes HSRP content a strong expansion area for RTO.codes.",
        ],
      },
      {
        title: "What vehicle owners typically verify",
        body: [
          "The registration mark, chassis-linked issuance, and installation quality matter more than decorative appearance. Users want to know whether the format is correct, whether the plate looks official, and whether older plates need replacement.",
          "A useful product surface here is a checklist: registered number, plate condition, state policy, and current enforcement risk.",
        ],
      },
      {
        title: "Good next steps for this domain",
        body: [
          "This topic can expand into state-specific HSRP ordering pages, common rejection or mismatch issues, and a provider directory. It also creates clean commercial intent for partnerships later.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does HSRP stand for?",
        answer:
          "HSRP stands for High Security Registration Plate, the standardized tamper-resistant vehicle plate format used across India.",
      },
      {
        question: "Why would users look up HSRP information on RTO.codes?",
        answer:
          "Because they often need to verify whether a plate is compliant, understand current plate formats, or find state-specific guidance linked to a registration code.",
      },
    ],
  },
  {
    slug: "bh-series-number-plate-explained",
    eyebrow: "Special series",
    title: "BH series number plate explained",
    description:
      "A simple explainer for the Bharat Series, where it fits in India registration formats, and why it matters for people who move across states.",
    readingTime: "4 min read",
    intro:
      "BH plates are one of the clearest expansion topics because they combine high search demand, regulatory curiosity, and interstate-use intent. They also fit naturally with an RTO lookup product because users are already trying to decode registration marks.",
    sections: [
      {
        title: "Why the BH series matters",
        body: [
          "The BH series exists for a very different reason than conventional state-wise codes: it is about portability. Users discovering it are usually trying to understand why the format looks different and whether it changes tax or re-registration expectations.",
          "That makes BH content useful both as a primer and as a bridge into transfer, relocation, and compliance guides.",
        ],
      },
      {
        title: "Where it differs from standard state prefixes",
        body: [
          "A normal plate lookup starts with the state code and then drills into the local authority. BH is different because the series is designed around movement rather than geographic permanence.",
          "From a product perspective, BH pages should link to transfer guides, vehicle registration format explainers, and FAQs on who qualifies.",
        ],
      },
      {
        title: "How this becomes a traffic engine",
        body: [
          "The BH topic can later branch into eligibility explainers, comparison pages versus state registration, and practical move-state checklists.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the BH series?",
        answer:
          "BH refers to the Bharat Series, a registration format designed for easier interstate vehicle movement compared with ordinary state-wise registration marks.",
      },
      {
        question: "Why is BH relevant on an RTO code website?",
        answer:
          "Because users trying to decode number plates often encounter BH alongside normal state prefixes and need a plain-language explanation.",
      },
    ],
  },
  {
    slug: "how-to-find-rto-from-vehicle-number",
    eyebrow: "Utility guide",
    title: "How to find the RTO from a vehicle number",
    description:
      "Learn how India registration marks are structured so you can identify the state prefix and local RTO office behind a vehicle number.",
    readingTime: "4 min read",
    intro:
      "This is one of the cleanest evergreen content pieces for RTO.codes because it directly matches user intent. People rarely search for abstract code theory; they search because they saw a plate and want to decode it.",
    sections: [
      {
        title: "Start with the state prefix",
        body: [
          "The first part of the registration mark identifies the state or union territory family. That is the fastest first cut when decoding a number plate.",
          "RTO.codes already solves this well, which means this guide can funnel users directly into state and code pages.",
        ],
      },
      {
        title: "Then look at the office code",
        body: [
          "The numeric block after the state prefix usually identifies the local registering authority or transport office series. That is where most practical lookups become useful.",
          "Users care about what the code maps to, whether the state has special cases, and whether legacy marks still circulate.",
        ],
      },
      {
        title: "Why the lookup is not always district-perfect",
        body: [
          "Registration systems often follow transport-office or authority structures rather than clean district boundaries. That is one of the core reasons this project moved away from district-first mapping.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you identify an RTO from just the first two letters?",
        answer:
          "You can identify the state or union territory family from the prefix, but the following numeric block is usually needed to narrow it to a specific office.",
      },
      {
        question: "Why do some states have unusual legacy or alternate marks?",
        answer:
          "Because state reorganisations, renamings, and notification changes can leave older prefixes or alternate series visible on existing vehicles.",
      },
    ],
  },
  {
    slug: "vehicle-registration-format-india",
    eyebrow: "Format guide",
    title: "Vehicle registration format in India",
    description:
      "A plain-language breakdown of how Indian registration marks are structured, what each segment means, and where exceptions show up.",
    readingTime: "5 min read",
    intro:
      "Before users can understand code-level pages, they need the format itself explained clearly. This page is foundational SEO content because it supports every later code, state, and compliance page.",
    sections: [
      {
        title: "The structure most users recognize",
        body: [
          "A modern registration mark usually combines a state prefix, a numeric office code, a letter series, and the final number block. That structure is simple on the surface but differs once you add special registrations, merged territories, and legacy marks.",
          "For RTO.codes, this page should function as the explanation layer that supports the lookup interface.",
        ],
      },
      {
        title: "Where the format changes",
        body: [
          "Some states have legacy prefixes, some territories were reorganised, and some special series like BH do not behave like ordinary state ladders.",
          "That means the format page should always point users to follow-up explainers instead of pretending one rigid pattern covers every real-world case.",
        ],
      },
      {
        title: "Why this guide matters for discovery",
        body: [
          "Users who search for registration format questions are often at the top of the funnel. This page helps capture them before they know a specific state or office code.",
        ],
      },
    ],
    faqs: [
      {
        question: "What do the first letters on an Indian number plate mean?",
        answer:
          "They usually identify the state or union territory family, such as MH for Maharashtra or DL for Delhi.",
      },
      {
        question: "Does every state follow the exact same format?",
        answer:
          "The broad format is similar, but practical exceptions appear because of administrative changes, special series, and legacy registrations.",
      },
    ],
  },
  {
    slug: "special-number-plates-in-india",
    eyebrow: "Reference guide",
    title: "Special number plates in India",
    description:
      "A reference overview of special Indian registration categories such as BH, temporary, trade, vintage, and government or service-linked formats.",
    readingTime: "6 min read",
    intro:
      "A lookup product grows faster when it also explains the exceptions. Special plate categories are where user curiosity and monetisable intent often overlap, because these searches tend to carry action or compliance intent.",
    sections: [
      {
        title: "Why special plates deserve their own content",
        body: [
          "Users regularly encounter temporary, BH, trade, and vintage formats that do not look like ordinary state-office registrations. If the site only handles standard prefixes, it leaves a large chunk of curiosity unanswered.",
          "These categories are also natural entry points for future guides and commercial pages.",
        ],
      },
      {
        title: "What users usually want to know",
        body: [
          "They want to know what the plate means, who gets it, whether it changes ownership or movement rules, and whether the format is legitimate.",
          "That means the best content here is not abstract legal prose. It is concise explanations with links into deeper pages.",
        ],
      },
      {
        title: "Expansion routes from this page",
        body: [
          "This topic can later split into dedicated pages for temporary registration, trade certificates, vintage vehicles, government fleets, and BH registration.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are all Indian number plates state-code based?",
        answer:
          "No. Most are state-code based, but some special categories such as BH or temporary registrations follow different logic.",
      },
      {
        question: "Why should an RTO lookup site cover special plates too?",
        answer:
          "Because users often need context for unfamiliar plate styles, and those searches are tightly related to the same registration-intent audience.",
      },
    ],
  },
  {
    slug: "state-wise-rto-code-directory",
    eyebrow: "Directory guide",
    title: "State-wise RTO code directory",
    description:
      "A directory-style overview of how India RTO codes are organized across states and union territories, and how to navigate them efficiently.",
    readingTime: "4 min read",
    intro:
      "This page is the bridge between editorial content and the core product. It frames the lookup in directory terms, which is good both for users and for search discoverability.",
    sections: [
      {
        title: "How the directory is organized",
        body: [
          "The state prefix gets users to the right family first. After that, the local numeric office code becomes the real lookup surface.",
          "This is why the app emphasizes the state family first and then lets users drill into office codes rather than treating the map as a district-only explorer.",
        ],
      },
      {
        title: "What makes some states more complex",
        body: [
          "Large states, reorganised territories, and states with legacy or alternate marks can look denser and more confusing than the compact states.",
          "A good directory page prepares users for those differences instead of implying every state is equally simple.",
        ],
      },
      {
        title: "Best use of this page",
        body: [
          "Use it as an entry point into the live lookup, state code notes, and future code-level pages.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a state-wise RTO directory?",
        answer:
          "It is a structured view of registration prefixes and office codes grouped by state or union territory so users can decode a plate systematically.",
      },
      {
        question: "Why is a directory useful if the site already has search?",
        answer:
          "Because many users browse first, compare states, or want context before searching a specific code.",
      },
    ],
  },
];

export const featuredGuides = guides.slice(0, 4);

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug) ?? null;
}
