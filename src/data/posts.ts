export type PostStat = {
  label: string;
  value: string;
};

export type PostDataItem = {
  label: string;
  value: string;
};

export type PostDataSection = {
  category: string;
  color?: "emerald" | "blue" | "violet" | "amber" | "rose" | "cyan";
  items: PostDataItem[];
};

export type PostTimeline = {
  year: string;
  event: string;
};

export type PostSection = {
  title: string;
  body: string[];
  data?: PostDataSection;
};

export type PostFAQ = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  category: "guide" | "service" | "state-rule";
  stateCode?: string;
  readingTime: string;
  intro: string;
  date: string;
  stats?: PostStat[];
  plateFormat?: string;
  data?: PostDataSection[];
  timeline?: PostTimeline[];
  sections: PostSection[];
  faqs: PostFAQ[];
};

export const posts: Post[] = [
  // ── Guides ──────────────────────────────────────────────────────────────────
  {
    slug: "hsrp-number-plate-guide-india",
    eyebrow: "Compliance guide",
    title: "HSRP number plate guide for India",
    description:
      "A practical guide to HSRP plates in India, including what they are, why they matter, and what vehicle owners should check before ordering or replacing one.",
    category: "guide",
    readingTime: "5 min read",
    date: "2026-01-15",
    intro:
      "High Security Registration Plates are the standard tamper-resistant registration plates used for modern vehicle registration in India.",
    stats: [
      { label: "Mandatory since", value: "2011" },
      { label: "Applies to", value: "All new vehicles" },
      { label: "Plates per vehicle", value: "2" },
      { label: "Color", value: "Blue/Yellow" },
    ],
    plateFormat: "XX 00 AA 0000",
    timeline: [
      { year: "2011", event: "HSRP mandate introduced for new vehicles" },
      { year: "2014", event: "Retrofit deadline for older vehicles expired" },
      { year: "2019", event: "BS-VI emission norms introduced" },
      { year: "2023", event: "High security plate standards revised" },
    ],
    data: [
      {
        category: "Plate Components",
        color: "blue",
        items: [
          { label: "Rivets", value: "Snap-lock, non-removable" },
          { label: "Stamping", value: "Laser-etched registration number" },
          { label: "Hologram", value: "Ashoka Chakra+CRDA mark" },
          { label: "Third strip", value: "Reflective tape on plate edge" },
          { label: "Font", value: "Modified Luminuous" },
        ],
      },
      {
        category: "Booking Methods",
        color: "emerald",
        items: [
          { label: "Online", value: "State transport portal" },
          { label: "Third-party", value: "Authorized vendors (Real Mazor, Rosmerta)" },
          { label: "At RTO", value: "Fitment at office premises" },
          { label: "Turnaround", value: "3-7 working days" },
        ],
      },
    ],
    sections: [
      {
        title: "What an HSRP is",
        body: [
          "An HSRP is a standardized number plate issued with traceable manufacturing and tamper-resistant installation. Designed to make plates harder to duplicate or alter.",
          "The plate must be issued through an approved vendor and fitted with snap-lock rivets at an authorized center.",
        ],
      },
      {
        title: "Why booking is state-specific",
        body: [
          "Plate ordering and replacement are administered through state transport departments or their approved vendors.",
          "The most common rejection reasons: mismatched registration number, chassis number, or engine number on the RC.",
        ],
      },
      {
        title: "What to check before ordering",
        body: [
          "Confirm the registration mark on the vehicle exactly matches the RC before placing an order.",
          "Check whether your state requires a fresh booking, a duplicate plate request, or an appointment-based fitment process.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does HSRP stand for?",
        answer:
          "High Security Registration Plate — a standardized, tamper-resistant plate with laser-etched numbers and snap-lock rivets.",
      },
      {
        question: "Can an HSRP order be placed without checking the RC details first?",
        answer:
          "No — the registration number and vehicle details must match the official RC record exactly before ordering.",
      },
    ],
  },
  {
    slug: "bh-series-number-plate-explained",
    eyebrow: "Special series",
    title: "BH series number plate explained",
    description:
      "Understand what the Bharat Series is, who it is meant for, and how a BH registration differs from an ordinary state-wise vehicle registration number.",
    category: "guide",
    readingTime: "4 min read",
    date: "2026-01-20",
    intro:
      "The Bharat Series (BH) was introduced to make interstate vehicle movement easier for eligible vehicle owners.",
    stats: [
      { label: "Series", value: "Bharat" },
      { label: "Prefix", value: "BH" },
      { label: "Format", value: "BH 00 XX 0000" },
      { label: "Portable", value: "Interstate" },
    ],
    plateFormat: "BH 00 XX 0000",
    data: [
      {
        category: "Eligibility",
        color: "emerald",
        items: [
          { label: "Central Govt employees", value: "All states" },
          { label: "State Govt employees", value: "Transferable posts" },
          { label: "PSU employees", value: "All states" },
          { label: "Private sector", value: "Multi-state operations" },
          { label: "Minimum employees", value: "10+ vehicles" },
        ],
      },
      {
        category: "Key Differences from State RTO",
        color: "blue",
        items: [
          { label: "Assignment", value: "Central (NOT via state RTO)" },
          { label: "Portability", value: "Automatic interstate" },
          { label: "Tax", value: "One-time lump sum" },
          { label: "Transfer", value: "No re-registration needed" },
          { label: "Allocation", value: "Parivahan portal" },
        ],
      },
    ],
    sections: [
      {
        title: "What makes the BH series different",
        body: [
          "A regular registration starts with a state prefix (DL, MH, KA) and narrows into a local office code. A BH plate is designed around interstate portability rather than a single state allocation.",
          "The format: BH 00 XX 0000 — where XX is a series letter assigned centrally.",
        ],
      },
      {
        title: "Who is eligible",
        body: [
          "BH registration is available to Central/State Government employees in transferable posts, PSU employees, and private companies with operations in multiple states (minimum 10 vehicles).",
          "The vehicle owner does not need to pay road tax separately in each state — this is the main practical advantage.",
        ],
      },
      {
        title: "How to read a BH registration",
        body: [
          "The BH series should not be interpreted as a normal state code plus RTO office ladder. Treat it as a separate registration family.",
          "The second block (00) is a sequential series number, not a state or district code.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is BH a state code?",
        answer:
          "No. BH refers to the Bharat Series and should be treated as a distinct registration family, not a conventional state prefix.",
      },
      {
        question: "Can a private individual get BH registration?",
        answer:
          "Only if they meet eligibility criteria (e.g., employee of organization meeting the multi-state operation requirement).",
      },
    ],
  },
  {
    slug: "how-to-find-rto-from-vehicle-number",
    eyebrow: "Utility guide",
    title: "How to find the RTO from a vehicle number",
    description:
      "Learn how to decode an Indian vehicle registration number so you can identify the state family and the local registering authority behind the plate.",
    category: "guide",
    readingTime: "4 min read",
    date: "2026-01-25",
    intro:
      "Most vehicle number lookups begin with a simple question: which RTO issued this plate? Break the registration mark into its basic parts and match the state prefix and office code correctly.",
    stats: [
      { label: "States + UTs", value: "36" },
      { label: "Total RTO offices", value: "1,200+" },
      { label: "Format parts", value: "4" },
      { label: "Lookup method", value: "Code prefix" },
    ],
    plateFormat: "XX 00 AA 0000",
    data: [
      {
        category: "Registration Format Parts",
        color: "blue",
        items: [
          { label: "Part 1", value: "State/UT prefix (2 letters)" },
          { label: "Part 2", value: "Office code (2 digits)" },
          { label: "Part 3", value: "Series letters (1-2 letters)" },
          { label: "Part 4", value: "Registration number (1-4 digits)" },
        ],
      },
      {
        category: "Example Breakdown: MH 01 AA 1234",
        color: "emerald",
        items: [
          { label: "MH", value: "Maharashtra state" },
          { label: "01", value: "Mumbai (Central) RTO" },
          { label: "AA", value: "Series sequence" },
          { label: "1234", value: "Vehicle number" },
        ],
      },
    ],
    sections: [
      {
        title: "Start with the state prefix",
        body: [
          "The first letters identify the broader state or union territory family: DL → Delhi, MH → Maharashtra, KA → Karnataka.",
          "This narrows the vehicle into the correct administrative family.",
        ],
      },
      {
        title: "Use the numeric block to identify the office",
        body: [
          "After the state prefix, the next number block identifies the local registering authority, regional transport office, or zonal office.",
          "In several states, this maps to an office or transport authority rather than a district name.",
        ],
      },
      {
        title: "Read the series letters and final number",
        body: [
          "Once the state family and office code are understood, the remaining letter series and final number distinguish the vehicle record within that office's sequence.",
          "These later characters identify the full plate but do not change which office issued the registration.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the RTO be identified from the first two letters alone?",
        answer:
          "No. The first letters identify the state/UT family. The following numeric block is what narrows it to a specific office.",
      },
      {
        question: "Why does a code sometimes map to an office instead of a district?",
        answer:
          "Because many registration systems are structured around transport authorities or zonal offices, not simple district boundaries.",
      },
    ],
  },
  {
    slug: "vehicle-registration-format-india",
    eyebrow: "Format guide",
    title: "Vehicle registration format in India",
    description:
      "A clear guide to the standard Indian vehicle registration format, including what each segment means and where exceptions appear.",
    category: "guide",
    readingTime: "5 min read",
    date: "2026-02-01",
    intro:
      "Indian vehicle registration numbers follow a recognizable pattern. Understanding each segment separately makes state pages and code lookups much easier to use.",
    stats: [
      { label: "Format type", value: "4-part" },
      { label: "State prefixes", value: "36" },
      { label: "Special series", value: "BH, WH, CG" },
      { label: "Year introduced", value: "1989" },
    ],
    plateFormat: "XX 00 AA 0000",
    data: [
      {
        category: "Standard Format Breakdown",
        color: "blue",
        items: [
          { label: "XX", value: "State/UT code (2 letters)" },
          { label: "00", value: "RTO office code (2 digits, 01-99)" },
          { label: "AA", value: "Series letters (A-Z)" },
          { label: "0000", value: "Registration number (0001-9999)" },
        ],
      },
      {
        category: "Special Series Variations",
        color: "violet",
        items: [
          { label: "BH Series", value: "BH 00 XX 0000 (interstate portable)" },
          { label: "CG/DP", value: "Diplomatic vehicles" },
          { label: "WH", value: "West Bengal government" },
          { label: "OR", value: "Odisha (OR/OD dual usage)" },
        ],
      },
      {
        category: "Union Territory Codes",
        color: "amber",
        items: [
          { label: "DL", value: "Delhi" },
          { label: "CH", value: "Chandigarh" },
          { label: "JK", value: "Jammu & Kashmir" },
          { label: "PY", value: "Puducherry" },
          { label: "LD", value: "Lakshadweep" },
        ],
      },
    ],
    sections: [
      {
        title: "The basic structure",
        body: [
          "A standard registration number contains four parts: state prefix, local office code, series letters, and final number block. Example: MH 01 AA 1234.",
          "The state prefix tells you the family. The office code tells you where within that family. The letters and final number distinguish the individual registration.",
        ],
      },
      {
        title: "Why exceptions matter",
        body: [
          "The basic format is consistent across India, but the underlying office structure varies. Some states have legacy marks, alternate codes, or special categories like BH.",
          "Telangana uses both TS (current) and TG (legacy). Odisha uses OR and OD interchangeably.",
        ],
      },
    ],
    faqs: [
      {
        question: "What do the first letters on an Indian number plate mean?",
        answer:
          "They identify the state or union territory registration family, such as DL for Delhi or MH for Maharashtra.",
      },
      {
        question: "Does every registration number follow exactly the same logic?",
        answer:
          "The broad format is similar, but office structures, legacy prefixes, and special categories can change interpretation.",
      },
    ],
  },
  {
    slug: "special-number-plates-in-india",
    eyebrow: "Reference guide",
    title: "Special number plates in India",
    description:
      "A practical overview of special registration categories in India, including BH, temporary, trade, and other plate families that do not behave like ordinary state-wise registrations.",
    category: "guide",
    readingTime: "6 min read",
    date: "2026-02-10",
    intro:
      "Not every number plate belongs to the standard state-plus-office pattern. Some are temporary, some are trade-related, and some exist for different administrative purposes.",
    stats: [
      { label: "Special categories", value: "6+" },
      { label: "BH eligible entities", value: "4 types" },
      { label: "Temp registration", value: "30 days" },
      { label: "Trade plates valid", value: "1 year" },
    ],
    data: [
      {
        category: "Special Registration Categories",
        color: "blue",
        items: [
          { label: "Bharat Series (BH)", value: "Interstate portable, central allocation" },
          { label: "Temporary", value: "30-day max, non-renewable" },
          { label: "Trade Certificate", value: "Unregistered vehicles in transit" },
          { label: "Diplomatic (CD/CF)", value: "Embassies and foreign consulates" },
          { label: "Army (IA)", value: "Indian Army vehicles" },
          { label: "Navy (IN)", value: "Indian Navy vehicles" },
        ],
      },
      {
        category: "Format Reference",
        color: "violet",
        items: [
          { label: "BH 00 XX 0000", value: "Bharat Series" },
          { label: "XX-TEMP-0000", value: "Temporary" },
          { label: "XX-TR-00000", value: "Trade" },
          { label: "CD 00 XXX 000", value: "Diplomatic Corps" },
          { label: "CF 00 XXX 000", value: "Consular Foreign" },
          { label: "IA 00 XXX 000", value: "Indian Army" },
        ],
      },
    ],
    sections: [
      {
        title: "Why special plate categories matter",
        body: [
          "A user who sees an unfamiliar plate is usually trying to answer: what category is this, is it legitimate, and does it follow normal state-wise format?",
          "These plates are part of the registration ecosystem but should not be decoded as ordinary state RTO codes.",
        ],
      },
      {
        title: "Common categories users encounter",
        body: [
          "BH registrations — for interstate portability (central allocation, not state RTO).",
          "Temporary registrations — short-lived (30 days max), for vehicles in transit to a new registration location.",
          "Trade certificates — for unregistered vehicles being moved between places (showroom to buyer, workshop, etc.)",
        ],
      },
    ],
    faqs: [
      {
        question: "Are all Indian number plates state-code based?",
        answer:
          "No. Some categories like BH or temporary registrations follow a different administrative logic.",
      },
      {
        question: "How long is a temporary registration valid?",
        answer:
          "Temporary registration is valid for 30 days and cannot be renewed. The vehicle must be registered permanently before it expires.",
      },
    ],
  },
  {
    slug: "state-wise-rto-code-directory",
    eyebrow: "Directory guide",
    title: "State-wise RTO code directory",
    description:
      "An overview of how RTO code families are organized across Indian states and union territories, with practical guidance on how to browse them efficiently.",
    category: "guide",
    readingTime: "4 min read",
    date: "2026-02-15",
    intro:
      "A state-wise directory is useful because most lookups begin broadly. Users first recognize the state family, then narrow into the office code, and only then move to the specific registration sequence.",
    stats: [
      { label: "States", value: "29" },
      { label: "Union Territories", value: "7" },
      { label: "Total RTO offices", value: "1,200+" },
      { label: "Largest state", value: "TN (91 RTOs)" },
    ],
    data: [
      {
        category: "Top States by RTO Count",
        color: "emerald",
        items: [
          { label: "Tamil Nadu", value: "91 RTOs" },
          { label: "Karnataka", value: "77 RTOs" },
          { label: "Maharashtra", value: "63 RTOs" },
          { label: "Rajasthan", value: "70 RTOs" },
          { label: "Uttar Pradesh", value: "80 RTOs" },
        ],
      },
      {
        category: "Smallest UTs",
        color: "blue",
        items: [
          { label: "Lakshadweep", value: "1 RTO" },
          { label: "Ladakh", value: "2 RTOs" },
          { label: "Daman & Diu", value: "2 RTOs" },
          { label: "Andaman & Nicobar", value: "3 RTOs" },
          { label: "Puducherry", value: "4 RTOs" },
        ],
      },
    ],
    sections: [
      {
        title: "How the directory is organized",
        body: [
          "Each state or union territory begins with a prefix family (DL, MH, OD, UK). Within that family, the meaningful detail comes from the office code.",
          "Browse by state family first, then move into the office list — not the other way around.",
        ],
      },
      {
        title: "Why some states look denser",
        body: [
          "Large states with regional or zonal office variation have long registration ladders. Smaller UTs can be much more compact.",
          "This is an administrative difference, not cosmetic. It affects how the code family should be interpreted.",
        ],
      },
      {
        title: "When to use the directory vs search",
        body: [
          "Use the directory when you want context: comparing states, understanding how a code family is structured, or exploring before searching.",
          "Search is faster for a known code. The directory is better for orientation.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a state-wise RTO directory?",
        answer:
          "A structured list of vehicle registration families grouped by state or union territory, with local office codes within each family.",
      },
      {
        question: "Why use a directory if the site has search?",
        answer:
          "Because many users want context before searching a single code — comparing states or understanding how a large registration family is organized.",
      },
    ],
  },

  // ── Services ────────────────────────────────────────────────────────────────
  {
    slug: "hsrp-by-state",
    eyebrow: "Compliance utility",
    title: "HSRP by state in India",
    description:
      "A state-aware guide to HSRP booking and replacement, including what owners should check before using a state transport portal or approved plate vendor.",
    category: "service",
    readingTime: "4 min read",
    date: "2026-02-20",
    intro:
      "HSRP implementation is standardized in principle but operationally state-specific. Vehicle owners usually need the same three things before starting: the exact registration mark, the RC details, and the correct state booking path. This page is designed to help users prepare for that process properly.",
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
    category: "service",
    readingTime: "5 min read",
    date: "2026-02-25",
    intro:
      "Ownership transfer and re-registration are among the most common next-step questions after a plate lookup. Once a user knows the registration family and office, the next issue is usually procedural: transfer to another owner, update the record, or handle movement to another state correctly.",
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
    category: "service",
    readingTime: "4 min read",
    date: "2026-03-01",
    intro:
      "Vehicle administration does not stop at the registration number. For many owners, the next practical questions involve toll-readiness, FASTag status, and whether the core vehicle documents are in order before a long trip.",
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
    category: "service",
    readingTime: "4 min read",
    date: "2026-03-05",
    intro:
      "A vehicle can have the correct registration number and still create problems for the owner if the supporting documents are not current. Insurance, PUC, and other routine vehicle records sit next to the registration in everyday compliance and road-use decisions.",
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

  // ── State Rules ─────────────────────────────────────────────────────────────
  {
    slug: "delhi-registration-format",
    stateCode: "DL",
    eyebrow: "Delhi rule",
    title: "Delhi vehicle registration format",
    description:
      "A practical guide to Delhi registration numbers, zonal office codes, and the format patterns that make DL plates more noticeable than many other state families.",
    category: "state-rule",
    readingTime: "4 min read",
    date: "2026-03-10",
    intro:
      "Delhi registration numbers are widely recognized, but they also create more format-related questions than many other state families. The reason is simple: Delhi uses zonal office codes, and the examples people see on real vehicles often make them notice the internal series structure more closely.",
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
    slug: "telangana-ts-vs-tg",
    stateCode: "TS",
    eyebrow: "Telangana rule",
    title: "Telangana TS vs TG explained",
    description:
      "Understand why Telangana plates may appear as TS or TG and how users should interpret both marks in real-world vehicle lookups.",
    category: "state-rule",
    readingTime: "4 min read",
    date: "2026-03-10",
    intro:
      "Telangana is one of the clearest examples of a state registration question being driven by a rule change rather than by the office code itself. Users see TS on existing vehicles, TG in newer references, and naturally want to know whether one is current, one is old, or both remain relevant in practice.",
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
    slug: "odisha-or-vs-od",
    stateCode: "OD",
    eyebrow: "Odisha rule",
    title: "Odisha OR vs OD explained",
    description:
      "A practical guide to the OR versus OD question, including why older Odisha plates may still show OR and why current references use OD.",
    category: "state-rule",
    readingTime: "4 min read",
    date: "2026-03-10",
    intro:
      "Odisha is one of the clearest legacy-prefix questions in Indian vehicle registration. Users still encounter OR on older vehicles, while current references use OD. The confusion is understandable because both marks remain visible in public life even though they do not belong to the same administrative moment.",
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
    slug: "maharashtra-hsrp-and-rto-codes",
    stateCode: "MH",
    eyebrow: "Maharashtra rule",
    title: "Maharashtra HSRP and RTO code guide",
    description:
      "A practical guide to Maharashtra registration numbers, office-heavy MH code structure, and why HSRP questions are common for this state family.",
    category: "state-rule",
    readingTime: "5 min read",
    date: "2026-03-10",
    intro:
      "Maharashtra is one of the largest and most heavily searched registration families in the country. Users regularly search MH numbers to identify a city or office, and just as often they move from the code question into an HSRP or plate-compliance question. That makes Maharashtra a natural state for a combined rule page.",
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
    slug: "tamil-nadu-rto-code-pattern",
    stateCode: "TN",
    eyebrow: "Tamil Nadu rule",
    title: "Tamil Nadu RTO code pattern",
    description:
      "A guide to how the TN registration family is structured, why Chennai occupies so many familiar office codes, and how users should interpret the wider sequence.",
    category: "state-rule",
    readingTime: "4 min read",
    date: "2026-03-10",
    intro:
      "Tamil Nadu is one of the most sequence-heavy registration families in the dataset. Users often recognize the TN prefix immediately, but what they really need is help understanding where the office number sits in the broader state ladder and why Chennai dominates so many familiar entries.",
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
    slug: "karnataka-bengaluru-rto-codes",
    stateCode: "KA",
    eyebrow: "Karnataka rule",
    title: "Karnataka and Bengaluru RTO codes",
    description:
      "A practical guide to Karnataka registration numbers, with a focus on why Bengaluru dominates user searches and how KA office codes should be interpreted.",
    category: "state-rule",
    readingTime: "4 min read",
    date: "2026-03-10",
    intro:
      "Karnataka registration lookups are often city-led. Many users first encounter the KA family through Bengaluru and only then move outward into the wider state structure. That makes Karnataka one of the clearest cases where state-level and city-level search intent overlap.",
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

export const featuredPosts = posts.slice(0, 4);

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getPostsByCategory(category: Post["category"]) {
  return posts.filter((post) => post.category === category);
}

export function getPostsByState(stateCode: string) {
  return posts.filter((post) => post.stateCode === stateCode);
}
