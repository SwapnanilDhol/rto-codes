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
      "A practical guide to HSRP plates in India, including what they are, why they matter, and what vehicle owners should check before ordering or replacing one.",
    readingTime: "5 min read",
    intro:
      "High Security Registration Plates are the standard tamper-resistant registration plates used for modern vehicle registration in India. In practice, most owners are not looking for the acronym alone. They want to know whether their vehicle needs an HSRP, how state-wise booking works, and what details must match the registration certificate before a plate is issued.",
    sections: [
      {
        title: "What an HSRP is",
        body: [
          "An HSRP is a standardized number plate issued with traceable manufacturing and tamper-resistant installation. It is designed to make registration plates harder to duplicate or alter and to ensure that plate details match the vehicle record.",
          "In ordinary user terms, the important point is simple: an HSRP is meant to be an official, machine-made plate issued through an approved process rather than a locally fabricated replacement.",
        ],
      },
      {
        title: "Why HSRP booking is state-specific",
        body: [
          "The registration format is national in broad structure, but plate ordering and replacement are usually administered through state transport departments or their approved vendors. That is why owners often need both the state code and the local registration office context before taking the next step.",
          "If the registration details on the RC do not match the application details, the order can be delayed or rejected. The most common checks are the registration number, chassis number, engine number, and owner details.",
        ],
      },
      {
        title: "What to check before ordering or replacing an HSRP",
        body: [
          "Confirm that the registration mark on the vehicle exactly matches the RC. If the vehicle has an older plate, damaged plate, or mismatched lettering, verify the official record first rather than ordering against assumptions.",
          "Owners should also check whether their state asks for a fresh booking, a duplicate plate request, or an appointment-based fitment process. That difference is administrative, but it affects what the owner needs to do next.",
        ],
      },
    ],
    faqs: [
      {
        question: "What does HSRP stand for?",
        answer:
          "HSRP stands for High Security Registration Plate, the standardized tamper-resistant registration plate used in India.",
      },
      {
        question: "Can an HSRP order be placed without checking the RC details first?",
        answer:
          "It is not advisable. The registration number and vehicle details should match the official record exactly before an HSRP request is placed.",
      },
    ],
  },
  {
    slug: "bh-series-number-plate-explained",
    eyebrow: "Special series",
    title: "BH series number plate explained",
    description:
      "Understand what the Bharat Series is, who it is meant for, and how a BH registration differs from an ordinary state-wise vehicle registration number.",
    readingTime: "4 min read",
    intro:
      "The Bharat Series, usually seen as BH on a number plate, was introduced to make interstate vehicle movement easier for eligible vehicle owners. That is why BH registrations look different from ordinary state-wise plates and why they generate confusion the first time a user sees one.",
    sections: [
      {
        title: "What makes the BH series different",
        body: [
          "A regular registration number starts with a state or union territory prefix such as DL, MH, or KA and then narrows into a local office code. A BH plate does not work the same way because it is designed around interstate portability rather than a single long-term state allocation.",
          "This is the main reason people search for BH. The format looks familiar enough to recognize as an Indian registration mark, but different enough that it clearly does not belong to the usual state-office ladder.",
        ],
      },
      {
        title: "Why people choose or ask about BH registration",
        body: [
          "The BH series is most relevant to people whose work or service conditions make state-to-state movement common. The attraction is not style or novelty; it is reduced friction when a vehicle has to remain practical across more than one state.",
          "For users comparing a BH plate with an ordinary registration number, the right question is usually not which one looks unusual. The right question is whether the vehicle owner falls within the eligible category and whether interstate portability matters in practice.",
        ],
      },
      {
        title: "How to read a BH registration",
        body: [
          "The BH series still uses a structured registration format, but it should not be interpreted as a normal state code plus RTO office ladder. When users see BH, they should treat it as a separate registration family rather than trying to map it to a single state transport office.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is BH a state code?",
        answer:
          "No. BH refers to the Bharat Series and should be treated as a distinct registration family, not as a conventional state prefix.",
      },
      {
        question: "Why does a BH plate matter on an RTO code site?",
        answer:
          "Because users often see BH alongside ordinary state prefixes and want to understand why it follows a different administrative logic.",
      },
    ],
  },
  {
    slug: "how-to-find-rto-from-vehicle-number",
    eyebrow: "Utility guide",
    title: "How to find the RTO from a vehicle number",
    description:
      "Learn how to decode an Indian vehicle registration number so you can identify the state family and the local registering authority behind the plate.",
    readingTime: "4 min read",
    intro:
      "Most vehicle number lookups begin with a simple question: which RTO issued this plate? The quickest way to answer that is to break the registration mark into its basic parts and then match the state prefix and office code correctly.",
    sections: [
      {
        title: "Start with the state or union territory prefix",
        body: [
          "The first letters of the registration number identify the broader state or union territory family. For example, DL points to Delhi, MH to Maharashtra, and KA to Karnataka.",
          "This first step does not usually identify the exact office. It narrows the vehicle into the correct administrative family so the office code can be interpreted accurately.",
        ],
      },
      {
        title: "Use the numeric block to identify the office",
        body: [
          "After the state prefix, the next number block usually identifies the local registering authority, regional transport office, zonal office, or sub-regional office. This part is the practical key to the lookup.",
          "It is also where many users go wrong. In several states, the number maps to an office or transport authority rather than to a district name in the ordinary geographic sense.",
        ],
      },
      {
        title: "Then read the series letters and final number",
        body: [
          "Once the state family and office code are understood, the remaining letter series and final number distinguish the vehicle record within that office's registration sequence.",
          "Those later characters are useful for identifying the full plate, but they do not usually change which state family or office issued the registration.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can the RTO be identified from the first two letters alone?",
        answer:
          "Usually no. The first letters identify the state or union territory family, while the following numeric block is what narrows the plate to a specific office or authority.",
      },
      {
        question: "Why does a code sometimes map to an office instead of a district?",
        answer:
          "Because many registration systems are structured around transport authorities, zonal offices, or sub-regional offices rather than simple district boundaries.",
      },
    ],
  },
  {
    slug: "vehicle-registration-format-india",
    eyebrow: "Format guide",
    title: "Vehicle registration format in India",
    description:
      "A clear guide to the standard Indian vehicle registration format, including what each segment means and where exceptions appear.",
    readingTime: "5 min read",
    intro:
      "Indian vehicle registration numbers follow a recognizable pattern, but the format makes more sense once each segment is read separately. Understanding the format first makes state pages, code pages, and office lookups much easier to use.",
    sections: [
      {
        title: "The basic structure",
        body: [
          "A standard registration number typically contains four parts: the state or union territory prefix, the local office code, the series letters, and the final number block. A familiar example is a number such as MH 01 AA 1234.",
          "The state prefix tells you the family. The office code tells you where within that family the registration belongs. The letters and final number distinguish the individual registration within the office sequence.",
        ],
      },
      {
        title: "Why the same pattern still needs explanation",
        body: [
          "The basic format is consistent enough to be recognizable across India, but the underlying office structure is not identical in every state. Some states are office-heavy, some have legacy or alternate marks, and some have special categories such as BH that should not be read as ordinary state codes.",
          "That is why a good reference page should explain the pattern clearly without pretending that every registration family behaves the same way in practice.",
        ],
      },
      {
        title: "Where users usually get confused",
        body: [
          "The most common confusion is assuming that the numeric block always equals a district name. In many states it instead points to a transport authority, zonal office, or sub-regional office.",
          "A second common confusion is treating special or legacy registrations as if they followed the exact same logic as standard state-family plates.",
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
        question: "Does every registration number in India follow exactly the same logic?",
        answer:
          "The broad format is similar, but office structures, legacy prefixes, and special categories can change how a specific registration should be interpreted.",
      },
    ],
  },
  {
    slug: "special-number-plates-in-india",
    eyebrow: "Reference guide",
    title: "Special number plates in India",
    description:
      "A practical overview of special registration categories in India, including BH, temporary, trade, and other plate families that do not behave like ordinary state-wise registrations.",
    readingTime: "6 min read",
    intro:
      "Not every number plate on the road belongs to the standard state-plus-office pattern. Some registrations are temporary, some are trade-related, and some, such as BH, exist for a different administrative purpose altogether. A useful reference page should help users recognize those categories quickly.",
    sections: [
      {
        title: "Why special plate categories matter",
        body: [
          "A user who sees an unfamiliar plate is usually trying to answer one of three questions: what category is this, is it legitimate, and does it follow the normal state-wise format. Special categories deserve separate treatment because the answer is often no.",
          "These plates are still part of the registration ecosystem, but they should not be decoded as if every unfamiliar mark belongs to an ordinary state RTO ladder.",
        ],
      },
      {
        title: "Common categories users encounter",
        body: [
          "The most commonly discussed categories are BH registrations, temporary registrations, and trade-related registrations. Each exists for a separate administrative purpose, and each should be understood on its own terms rather than treated as a variation of a standard city or state code.",
          "Some of these categories are short-lived, such as temporary registration, while others exist precisely to support a different usage pattern, such as the Bharat Series.",
        ],
      },
      {
        title: "How to use this page correctly",
        body: [
          "Use this page to recognize when a plate is part of a special category. Then move to the specific explainer for that category rather than trying to force the plate into the ordinary state-directory model.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are all Indian number plates state-code based?",
        answer:
          "No. Many registrations are state-code based, but some special categories such as BH or temporary registrations follow a different administrative logic.",
      },
      {
        question: "Why should a lookup site cover special plates as well?",
        answer:
          "Because users often discover a registration question through an unfamiliar plate category, and those searches still belong to the same registration-reference problem space.",
      },
    ],
  },
  {
    slug: "state-wise-rto-code-directory",
    eyebrow: "Directory guide",
    title: "State-wise RTO code directory",
    description:
      "An overview of how RTO code families are organized across Indian states and union territories, with practical guidance on how to browse them efficiently.",
    readingTime: "4 min read",
    intro:
      "A state-wise directory is useful because most lookups begin broadly. Users first recognize the state family, then narrow into the office code, and only after that move to the specific registration sequence. A good directory page helps users navigate that order without overwhelming them.",
    sections: [
      {
        title: "How the directory is organized",
        body: [
          "Each state or union territory begins with a prefix family such as DL, MH, OD, or UK. Within that family, the meaningful detail usually comes from the office code rather than from the prefix alone.",
          "That is why the most practical way to browse the directory is to start with the state family and then move into the office list, rather than trying to scan all codes nationally in one pass.",
        ],
      },
      {
        title: "Why some states look denser than others",
        body: [
          "Large states and office-heavy systems can have long registration ladders with regional, zonal, or sub-regional variation. Smaller states or union territories can be much more compact.",
          "This difference is administrative, not cosmetic. It affects how users should interpret the code family and how quickly a code can be matched to an actual office.",
        ],
      },
      {
        title: "When to use the directory instead of search",
        body: [
          "The directory is most useful when the user wants context: comparing states, understanding how a code family is structured, or exploring a registration family before searching for one exact code. Search is faster for a known code; the directory is better for orientation.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a state-wise RTO directory?",
        answer:
          "It is a structured list of vehicle registration families grouped by state or union territory, usually followed by the local office codes within each family.",
      },
      {
        question: "Why use a directory if the site already has search?",
        answer:
          "Because many users want context before they search a single code, especially when they are comparing states or trying to understand how a large registration family is organized.",
      },
    ],
  },
];

export const featuredGuides = guides.slice(0, 4);

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug) ?? null;
}
