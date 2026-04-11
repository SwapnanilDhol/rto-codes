import { RTOGeoJSON, RTOFeature } from "@/types/rto";
import rawData from "./india-states-lite.json";

export function loadIndiaStates(): RTOGeoJSON {
  const datameet = rawData as { type: string; features: Array<{ type: string; properties: { ST_NM: string }; geometry: any }> };

  const features: RTOFeature[] = [];

  // Normalize state name variations between DataMeet and RTO codes
  const stateNameMap: Record<string, string> = {
    "Arunanchal Pradesh": "Arunachal Pradesh",
    "NCT of Delhi": "Delhi",
    "Jammu & Kashmir": "Jammu and Kashmir",
    "Dadra and Nagar Haveli and Daman and Diu": "Dadra and Nagar Haveli and Daman and Diu",
    "Andaman & Nicobar Island": "Andaman and Nicobar",
    "Dadara & Nagar Havelli": "Dadra and Nagar Haveli",
    "Daman & Diu": "Dadra and Nagar Haveli and Daman and Diu",
  };

  const codeMap: Record<string, string> = {
    "Andaman and Nicobar": "AN",
    "Andaman & Nicobar": "AN",
    "Andhra Pradesh": "AP",
    "Arunachal Pradesh": "AR",
    "Assam": "AS",
    "Bihar": "BR",
    "Chandigarh": "CH",
    "Chhattisgarh": "CG",
    "Dadra and Nagar Haveli and Daman and Diu": "DN",
    "Daman & Diu": "DD",
    "Delhi": "DL",
    "Goa": "GA",
    "Gujarat": "GJ",
    "Haryana": "HR",
    "Himachal Pradesh": "HP",
    "Jammu and Kashmir": "JK",
    "Jharkhand": "JH",
    "Karnataka": "KA",
    "Kerala": "KL",
    "Ladakh": "LA",
    "Lakshadweep": "LD",
    "Madhya Pradesh": "MP",
    "Maharashtra": "MH",
    "Manipur": "MN",
    "Meghalaya": "ML",
    "Mizoram": "MZ",
    "Nagaland": "NL",
    "Odisha": "OD",
    "Puducherry": "PY",
    "Punjab": "PB",
    "Rajasthan": "RJ",
    "Sikkim": "SK",
    "Tamil Nadu": "TN",
    "Telangana": "TS",
    "Tripura": "TR",
    "Uttar Pradesh": "UP",
    "Uttarakhand": "UK",
    "West Bengal": "WB",
  };

  for (const feature of datameet.features) {
    let stateName = feature.properties.ST_NM;
    // Normalize DataMeet name to standard name
    const normalizedName = stateNameMap[stateName] || stateName;
    const stateCode = codeMap[normalizedName];

    if (!stateCode) {
      console.warn(`No RTO code found for state: ${stateName} (normalized: ${normalizedName})`);
      continue;
    }

    features.push({
      type: "Feature",
      geometry: feature.geometry,
      properties: {
        id: stateCode,
        name: `${stateCode} - ${normalizedName}`,
        state: normalizedName,
        description: "State in India",
        code: stateCode,
      },
    });
  }

  return {
    type: "FeatureCollection",
    features,
  };
}

export const indiaStatesGeoJSON = loadIndiaStates();
