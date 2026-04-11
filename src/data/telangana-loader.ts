import { RTOFeature, RTOGeoJSON } from "@/types/rto";
import rawData from "./telangana-districts.json";

type RawTelanganaFeature = {
  type: "Feature";
  geometry: {
    type: "Polygon";
    coordinates: number[][][];
  };
  properties: {
    district: string;
    districtLgdCode: number;
    census2011Code: string;
    abbreviation: string;
  };
};

export function loadTelanganaDistricts(): RTOGeoJSON {
  const data = rawData as {
    type: "FeatureCollection";
    features: RawTelanganaFeature[];
  };

  const features: RTOFeature[] = data.features.map((feature) => ({
    type: "Feature",
    geometry: feature.geometry,
    properties: {
      id: `ts-dist-${feature.properties.districtLgdCode}`,
      name: feature.properties.district,
      state: "Telangana",
      description: `District in Telangana`,
      code: "TS",
      censusCode: Number(feature.properties.census2011Code),
    },
  }));

  return {
    type: "FeatureCollection",
    features,
  };
}

export const telanganaDistrictsGeoJSON = loadTelanganaDistricts();
