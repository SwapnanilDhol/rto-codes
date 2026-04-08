import { RTOGeoJSON, RTOFeature } from "@/types/rto";
import districtData from "./districts.json";

export function loadIndiaDistricts(): RTOGeoJSON {
  const datameet = districtData as { 
    type: string; 
    features: Array<{ 
      type: string; 
      properties: { 
        DISTRICT: string;
        ST_NM: string;
        ST_CEN_CD: number;
        DT_CEN_CD: number;
        censuscode: number;
      }; 
      geometry: any 
    }> 
  };

  const features: RTOFeature[] = [];

  for (const feature of datameet.features) {
    features.push({
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
    });
  }

  return {
    type: "FeatureCollection",
    features,
  };
}

export const indiaDistrictsGeoJSON = loadIndiaDistricts();
