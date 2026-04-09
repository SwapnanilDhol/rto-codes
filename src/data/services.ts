export type ServiceSection = {
  title: string;
  body: string[];
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  readingTime: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "hsrp-by-state",
    eyebrow: "Compliance utility",
    title: "HSRP by state in India",
    description:
      "Understand how to think about HSRP ordering, compliance, and state-level variation when you already know the registration family you are dealing with.",
    intro:
      "HSRP intent is one of the strongest adjacent use cases for this domain because users who decode a registration mark often want the next practical answer: whether the vehicle plate is compliant and where state-level ordering differences show up.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why HSRP belongs next to the lookup",
        body: [
          "A plate lookup answers where a registration sits. HSRP content answers whether the physical plate itself is current, compliant, or due for replacement. Those two journeys are closely linked, which makes HSRP one of the best utility layers for the site.",
        ],
      },
      {
        title: "How users should use this page",
        body: [
          "Start by identifying the state prefix and local office family, then use that context to interpret state-specific ordering and compliance guidance. The lookup and the HSRP page should reinforce each other rather than compete.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why have an HSRP-by-state page if there is already a generic HSRP guide?",
        answer:
          "Because users quickly move from general understanding into state-specific action questions, and that intent is stronger than generic information intent.",
      },
      {
        question: "Does this replace the main lookup?",
        answer:
          "No. The lookup helps identify the registration family; the HSRP page helps users act on the compliance side of that information.",
      },
    ],
  },
  {
    slug: "vehicle-transfer-and-reregistration-guide",
    eyebrow: "Ownership utility",
    title: "Vehicle transfer and re-registration guide",
    description:
      "A practical guide to the questions users ask when moving a vehicle between owners or between states, and where RTO code lookups fit into that process.",
    intro:
      "Transfer and re-registration are natural expansion areas because the user already has a vehicle identity problem in hand. They know the number plate, they know the state, and now they need process clarity.",
    readingTime: "5 min read",
    sections: [
      {
        title: "Why transfer intent is valuable",
        body: [
          "Transfer and re-registration pages capture users who are much closer to action than generic plate-curiosity traffic. That is valuable for both product usefulness and future monetization.",
        ],
      },
      {
        title: "Where the lookup helps",
        body: [
          "Knowing the originating state family and office series helps users orient themselves before they start dealing with document, transfer, or relocation questions. The lookup is the first layer, not the whole journey.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why include transfer content on an RTO code site?",
        answer:
          "Because users often decode a plate as the first step in a broader ownership or movement workflow.",
      },
      {
        question: "Is this only for interstate moves?",
        answer:
          "No. It is useful both for ownership transfers and for state-to-state registration changes.",
      },
    ],
  },
  {
    slug: "fastag-toll-and-road-trip-readiness",
    eyebrow: "Road-use utility",
    title: "FASTag, toll, and road-trip readiness guide",
    description:
      "A utility page for the practical vehicle-readiness topics that often sit next to registration, including toll-readiness and travel paperwork.",
    intro:
      "This page broadens the domain from pure registration lookup into vehicle-readiness intent. That matters because many users do not think in category terms; they think in tasks like buying a used car, renewing documents, or preparing for a long drive.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why this topic belongs here",
        body: [
          "A registration lookup site does not have to stop at decoding. Once users trust the site for plate-related reference work, adjacent travel and toll-readiness content becomes a natural extension.",
        ],
      },
      {
        title: "How this can monetize later",
        body: [
          "FASTag and road-trip readiness content create cleaner affiliate opportunities than generic display ads because the user intent is immediately practical.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why combine FASTag and road-trip readiness?",
        answer:
          "Because the same user often needs both kinds of answers in the same session, and both are adjacent to registration-driven vehicle admin.",
      },
      {
        question: "Does this depend on a specific state code?",
        answer:
          "Not always, but it benefits from the registration context users already bring into the site.",
      },
    ],
  },
  {
    slug: "insurance-puc-and-vehicle-documents",
    eyebrow: "Document utility",
    title: "Insurance, PUC, and vehicle documents guide",
    description:
      "A document-readiness guide for the recurring questions users have about insurance, PUC, and the paperwork that sits next to registration.",
    intro:
      "Insurance and PUC content sits close to the same problem space as RTO codes: the user is trying to understand whether a vehicle is current, compliant, and administratively in order. That makes this a strong utility layer for the site.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why document-readiness is a good expansion layer",
        body: [
          "It keeps the site adjacent to real vehicle administration rather than drifting into unrelated automotive content. That is the right expansion pattern if the goal is trust plus monetizable intent.",
        ],
      },
      {
        title: "How users arrive here",
        body: [
          "Users often start with a plate lookup, then realize they need the surrounding compliance context too: insurance status, emission checks, or document validity. This page is designed for that second step.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why cover insurance and PUC on this site?",
        answer:
          "Because they are part of the same practical ownership and compliance workflow that begins with the registration itself.",
      },
      {
        question: "Is this meant to replace official government guidance?",
        answer:
          "No. It is meant to orient the user so they understand the problem space and can move into the right official or provider workflow next.",
      },
    ],
  },
];

export const featuredServices = servicePages.slice(0, 3);

export function getServiceBySlug(slug: string) {
  return servicePages.find((servicePage) => servicePage.slug === slug) ?? null;
}
