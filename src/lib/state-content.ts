import { indiaStatesWithDistricts, type State } from "@/data/districts";

export const WIKI_TITLE_MAP: Record<string, string> = {
  AN: "Andaman_and_Nicobar_Islands",
  AP: "Andhra_Pradesh",
  AR: "Arunachal_Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CH: "Chandigarh",
  CG: "Chhattisgarh",
  DN: "Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
  DL: "Delhi",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal_Pradesh",
  JH: "Jharkhand",
  JK: "Jammu_and_Kashmir_(union_territory)",
  KA: "Karnataka",
  KL: "Kerala",
  LA: "Ladakh",
  LD: "Lakshadweep",
  MH: "Maharashtra",
  ML: "Meghalaya",
  MN: "Manipur",
  MP: "Madhya_Pradesh",
  MZ: "Mizoram",
  NL: "Nagaland",
  OD: "Odisha",
  PB: "Punjab,_India",
  PY: "Puducherry_(union_territory)",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil_Nadu",
  TR: "Tripura",
  TS: "Telangana",
  UK: "Uttarakhand",
  UP: "Uttar_Pradesh",
  WB: "West_Bengal",
};

export type StateNote = {
  eyebrow: string;
  text: string;
};

export function getStateChipLabel(code: string) {
  return code === "TS" ? "TG/TS" : code;
}

export function getStateSlug(state: Pick<State, "name">) {
  return state.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getStateUrl(state: Pick<State, "name">) {
  return `/states/${getStateSlug(state)}`;
}

export function getStateBySlug(slug: string) {
  return indiaStatesWithDistricts.find((state) => getStateSlug(state) === slug) ?? null;
}

export function getStateByCode(code: string) {
  return indiaStatesWithDistricts.find((state) => state.code === code) ?? null;
}

export type CodeRecord = {
  state: State;
  district: State["districts"][number];
};

export function getCodeSlug(rtoCode: string) {
  return rtoCode.toLowerCase();
}

export function getCodeUrl(rtoCode: string) {
  return `/codes/${getCodeSlug(rtoCode)}`;
}

export function getAllCodeRecords(): CodeRecord[] {
  return indiaStatesWithDistricts.flatMap((state) =>
    state.districts.map((district) => ({
      state,
      district,
    }))
  );
}

export function getCodeBySlug(slug: string): CodeRecord | null {
  const normalized = slug.toUpperCase();

  for (const state of indiaStatesWithDistricts) {
    const district = state.districts.find((entry) => entry.rtoCode.toUpperCase() === normalized);
    if (district) {
      return { state, district };
    }
  }

  return null;
}

export function getStateNote(state: { code: string; name: string; entries: { length: number } } | undefined): StateNote | null {
  if (!state) return null;

  const specialNotes: Record<string, StateNote> = {
    AN: {
      eyebrow: "Territory note",
      text: "AN is a short island code family in this dataset, split across South Andaman, North and Middle Andaman, and Nicobar.",
    },
    AP: {
      eyebrow: "Prefix note",
      text: "Andhra Pradesh kept the AP registration mark after Telangana was carved out as a separate state in 2014.",
    },
    AS: {
      eyebrow: "Metro split",
      text: "Assam separates Kamrup Metropolitan from Kamrup in this dataset, so Guwahati gets its own code block instead of sharing one district series.",
    },
    CH: {
      eyebrow: "Single-city code",
      text: "Chandigarh is both a city and a union territory, so the same CH family covers the whole territory.",
    },
    CG: {
      eyebrow: "Statehood note",
      text: "CG is a newer state prefix that appeared after Chhattisgarh was formed out of Madhya Pradesh in 2000.",
    },
    DD: {
      eyebrow: "Merged UT note",
      text: "DD is the newer registration mark for the merged union territory of Dadra & Nagar Haveli and Daman & Diu; it took effect in January 2020.",
    },
    DL: {
      eyebrow: "Delhi quirk",
      text: "In Delhi, the letter after the zonal code can denote vehicle class too: the Delhi Transport Department shows C for cars and S for two-wheelers in examples like DL-04-C-1969.",
    },
    DN: {
      eyebrow: "Legacy prefix",
      text: "DN is the older Dadra & Nagar Haveli mark. Newer registrations in the merged union territory now use DD, but DN still matters for older vehicles.",
    },
    GA: {
      eyebrow: "Compact code map",
      text: "Goa stays unusually compact in this dataset: GA-01 and GA-02 cover North Goa and South Goa.",
    },
    JK: {
      eyebrow: "Reorganisation note",
      text: "JK continues as the vehicle mark for the Union Territory of Jammu and Kashmir even after the 2019 split that created Ladakh.",
    },
    JH: {
      eyebrow: "Statehood note",
      text: "JH is another post-2000 prefix, introduced after Jharkhand was carved out as a separate state.",
    },
    KA: {
      eyebrow: "Metro note",
      text: "KA is one of the most recognizable prefixes in the country because Bengaluru occupies several of the earliest and busiest code blocks.",
    },
    KL: {
      eyebrow: "Dense network",
      text: "Kerala packs a dense registration network into the KL family, with many district and sub-regional offices for a relatively narrow state.",
    },
    LA: {
      eyebrow: "New UT code",
      text: "LA was assigned after Ladakh became a separate union territory in 2019, giving it a distinct vehicle mark from JK.",
    },
    MH: {
      eyebrow: "Large code set",
      text: `Maharashtra has ${state.entries.length} code blocks in this dataset, making MH one of the larger registration families on the map.`,
    },
    OD: {
      eyebrow: "Renamed-state note",
      text: "Odisha switched new registrations from OR to OD in 2012 after the state's official name changed from Orissa to Odisha; older OR plates can still exist.",
    },
    PB: {
      eyebrow: "Tricity note",
      text: "PB and CH often appear together around the Chandigarh tricity, but Punjab keeps its own district-wise PB ladder.",
    },
    PY: {
      eyebrow: "Shared UT prefix",
      text: "Puducherry's enclaves are geographically separate, but they still sit under the same PY registration family.",
    },
    SK: {
      eyebrow: "Smallest ladder",
      text: "Sikkim has one of the shortest code ladders in the dataset, which makes SK one of the cleanest prefixes to scan quickly.",
    },
    TN: {
      eyebrow: "Long sequence",
      text: "Tamil Nadu uses a long TN number sequence, with Chennai and the major regional offices occupying many early blocks in the ladder.",
    },
    TR: {
      eyebrow: "Small-state pattern",
      text: "Tripura stays compact enough that the TR family covers only a small set of transport office regions.",
    },
    TS: {
      eyebrow: "Code change",
      text: "Telangana's registration mark was changed from TS to TG by a central notification in March 2024. Older TS plates still remain valid, which is why both show up.",
    },
    UK: {
      eyebrow: "Current prefix",
      text: "Uttarakhand's transport department now uses UK as the state prefix, so registrations read like UK-07 for Dehradun.",
    },
    UP: {
      eyebrow: "Massive grid",
      text: `UP is one of the biggest code networks in the app, with ${state.entries.length} registration offices listed in this dataset.`,
    },
    WB: {
      eyebrow: "Metro-heavy early series",
      text: "West Bengal's early WB blocks are Kolkata-heavy, but the family stretches much further once you move beyond the first urban offices.",
    },
  };

  const specialNote = specialNotes[state.code];
  if (specialNote) return specialNote;

  if (state.entries.length === 1) {
    return {
      eyebrow: "Single-code territory",
      text: `${state.name} only uses one code block in this dataset, so the state prefix does almost all of the visual work on the plate.`,
    };
  }

  if (state.entries.length === 2) {
    return {
      eyebrow: "Two-code split",
      text: `${state.name} is represented by just two transport office codes here, which keeps the prefix family unusually easy to scan.`,
    };
  }

  if (state.entries.length >= 25) {
    return {
      eyebrow: "Wide network",
      text: `${state.name} has ${state.entries.length} code blocks in this dataset, so the numeric segment matters far more than the state prefix once you are inside the state.`,
    };
  }

  return {
    eyebrow: "Dataset note",
    text: `${state.name} uses ${state.entries.length} code blocks in this dataset; the prefix stays fixed while the numeric segment points to the local registering authority.`,
  };
}
