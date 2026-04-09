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
      "A state-aware guide to HSRP booking and replacement, including what owners should check before using a state transport portal or approved plate vendor.",
    intro:
      "HSRP implementation is standardized in principle but operationally state-specific. Vehicle owners usually need the same three things before starting: the exact registration mark, the RC details, and the correct state booking path. This page is designed to help users prepare for that process properly.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why HSRP processes vary by state",
        body: [
          "The plate format itself is standardized, but booking, appointment, fitment, and duplicate-plate workflows are usually handled through state transport systems or approved vendors. That is why HSRP searches often become state-specific very quickly.",
          "An owner who has identified the registration family correctly is already in a better position to use the correct booking path and avoid mismatch errors.",
        ],
      },
      {
        title: "What to keep ready before using a state portal",
        body: [
          "The most important details are the registration number exactly as it appears on the RC, the chassis and engine details where required, and the owner information recorded in the vehicle record.",
          "If the plate is damaged, replaced, or visibly inconsistent with the RC, it is better to verify the record first rather than proceeding on assumption.",
        ],
      },
      {
        title: "How to use this page with the lookup",
        body: [
          "Use the lookup to confirm the state family and office context first. Then use that information to move into the correct state HSRP workflow. That sequence is more reliable than starting from an uncertain registration number or an unofficial local plate vendor.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why have an HSRP-by-state page if there is already a general HSRP guide?",
        answer:
          "Because most real HSRP decisions are state-specific. Owners usually need the state booking path and a clear understanding of what details must match the registration record.",
      },
      {
        question: "Does this page replace the main lookup?",
        answer:
          "No. The lookup helps identify the registration family. This page explains how that registration context becomes useful when an owner needs to order or replace an HSRP.",
      },
    ],
  },
  {
    slug: "vehicle-transfer-and-reregistration-guide",
    eyebrow: "Ownership utility",
    title: "Vehicle transfer and re-registration guide",
    description:
      "A practical guide to ownership transfer and re-registration questions, including why the original registration office still matters when a vehicle changes hands or moves across states.",
    intro:
      "Ownership transfer and re-registration are among the most common next-step questions after a plate lookup. Once a user knows the registration family and office, the next issue is usually procedural: transfer to another owner, update the record, or handle movement to another state correctly.",
    readingTime: "5 min read",
    sections: [
      {
        title: "Where the original registration still matters",
        body: [
          "The original registration family and office remain important because vehicle records, historical registration details, and ownership-change paperwork are tied to that official record. The plate does not become irrelevant just because the vehicle is being sold or moved.",
          "That is why the first step in a transfer workflow is often not a form. It is confirming the existing registration correctly.",
        ],
      },
      {
        title: "When re-registration questions usually arise",
        body: [
          "Users most often look for re-registration guidance when a vehicle moves to another state for long-term use or when they are trying to understand whether the existing record needs to be changed after a transfer.",
          "The exact workflow depends on the legal and administrative facts of the case, but the recurring operational question is always the same: which office issued the registration and what record needs to be updated next.",
        ],
      },
      {
        title: "How to use this guide properly",
        body: [
          "Treat this page as a preparation guide. Confirm the existing registration details, identify the office family, and then move into the appropriate official transport workflow with the correct documents and expectations.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why include transfer content on an RTO code site?",
        answer:
          "Because a registration lookup is often the first step in a broader ownership or relocation workflow. Users need the existing registration context before they can handle the transfer correctly.",
      },
      {
        question: "Is this page only for interstate movement?",
        answer:
          "No. It is useful for ordinary ownership transfer as well as for questions that arise when a vehicle is moved to another state.",
      },
    ],
  },
  {
    slug: "fastag-toll-and-road-trip-readiness",
    eyebrow: "Road-use utility",
    title: "FASTag, toll, and road-trip readiness guide",
    description:
      "A practical guide to FASTag, toll-readiness, and the vehicle admin checks owners usually make before long-distance travel.",
    intro:
      "Vehicle administration does not stop at the registration number. For many owners, the next practical questions involve toll-readiness, FASTag status, and whether the core vehicle documents are in order before a long trip.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why FASTag belongs in this workflow",
        body: [
          "FASTag is part of day-to-day vehicle readiness rather than a separate technical topic. Once a vehicle is registered and road-ready, toll handling becomes part of ordinary use, especially for intercity travel.",
          "That is why users often move from a registration question into a travel-readiness question in the same session.",
        ],
      },
      {
        title: "What owners should check before a long drive",
        body: [
          "The essential checks are straightforward: registration details, FASTag status, insurance validity, PUC where applicable, and any other documents the owner expects to rely on during travel.",
          "This is not about creating paperwork for its own sake. It is about reducing avoidable friction once the vehicle is already on the road.",
        ],
      },
      {
        title: "How this page should be used",
        body: [
          "Use it as a readiness checklist. The goal is not to replace an official toll or transport portal. The goal is to make sure the basic vehicle administration questions have already been handled before the trip begins.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why combine FASTag and road-trip readiness?",
        answer:
          "Because they belong to the same practical moment. Users preparing a vehicle for travel usually need both toll-readiness and document readiness at the same time.",
      },
      {
        question: "Does this page depend on a specific state code?",
        answer:
          "Not always, but knowing the registration family still helps when an owner wants to verify that the vehicle record itself is correct before travel.",
      },
    ],
  },
  {
    slug: "insurance-puc-and-vehicle-documents",
    eyebrow: "Document utility",
    title: "Insurance, PUC, and vehicle documents guide",
    description:
      "A practical guide to the core vehicle documents owners usually need to keep in order alongside the registration itself.",
    intro:
      "A vehicle can have the correct registration number and still create problems for the owner if the supporting documents are not current. Insurance, PUC, and other routine vehicle records sit next to the registration in everyday compliance and road-use decisions.",
    readingTime: "4 min read",
    sections: [
      {
        title: "Why the registration number is only one part of compliance",
        body: [
          "The registration identifies the vehicle, but everyday road use also depends on document readiness. Insurance, emission compliance where applicable, and core vehicle papers are part of the same practical compliance picture.",
          "This is why a user often starts with a plate lookup and then immediately needs the surrounding document context as well.",
        ],
      },
      {
        title: "What owners typically keep ready",
        body: [
          "At a practical level, owners usually need to keep the registration details, insurance status, and pollution certificate status aligned with the actual vehicle. The exact legal requirements can vary by vehicle type and situation, but the principle is consistent: the record should be current and usable when needed.",
        ],
      },
      {
        title: "How to use this page",
        body: [
          "Use this guide as a document-readiness reference. It is meant to help users think clearly about what belongs next to the registration in ordinary ownership and travel workflows.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why cover insurance and PUC on this site?",
        answer:
          "Because registration, insurance, and emissions paperwork usually belong to the same real-world ownership workflow. Users often need all three answers together.",
      },
      {
        question: "Is this a substitute for official government or insurer guidance?",
        answer:
          "No. It is a practical reference page meant to help users understand the document landscape before they move to the relevant official or provider workflow.",
      },
    ],
  },
];

export const featuredServices = servicePages.slice(0, 3);

export function getServiceBySlug(slug: string) {
  return servicePages.find((servicePage) => servicePage.slug === slug) ?? null;
}
