import { RTOFeature, RTOGeoJSON } from "@/types/rto";
import rawData from "./up-districts.json";

type RawUPFeature = {
  type: "Feature";
  geometry: RTOFeature["geometry"];
  properties: {
    DISTRICT: string;
    ST_NM: string;
    ST_CEN_CD: number;
    DT_CEN_CD: number;
    censuscode: number;
  };
};

export function loadUPDistricts(): RTOGeoJSON {
  const data = rawData as {
    type: "FeatureCollection";
    features: RawUPFeature[];
  };

  return {
    type: "FeatureCollection",
    features: data.features.map((feature) => ({
      type: "Feature",
      geometry: feature.geometry,
      properties: {
        id: `dist-${feature.properties.censuscode}`,
        name: feature.properties.DISTRICT,
        state: feature.properties.ST_NM,
        description: `District in ${feature.properties.ST_NM}`,
        code: feature.properties.DISTRICT,
        censusCode: feature.properties.censuscode,
        stateCenCode: feature.properties.ST_CEN_CD,
        districtCenCode: feature.properties.DT_CEN_CD,
      },
    })),
  };
}

export const upDistrictsGeoJSON = loadUPDistricts();
