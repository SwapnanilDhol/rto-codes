export interface RTOCoordinates {
  lat: number;
  lng: number;
}

export interface RTOPolygon {
  type: "Polygon";
  coordinates: number[][][];
}

export interface RTOMultiPolygon {
  type: "MultiPolygon";
  coordinates: number[][][][];
}

export interface RTOProperties {
  id: string;
  name: string;
  state: string;
  description: string;
  code?: string;
  censusCode?: number;
  stateCenCode?: number;
  districtCenCode?: number;
}

export interface RTOFeature {
  type: "Feature";
  geometry: RTOPolygon | RTOMultiPolygon;
  properties: RTOProperties;
}

export interface RTOGeoJSON {
  type: "FeatureCollection";
  features: RTOFeature[];
}

// Raw GeoJSON from Subhash9325
export interface RawIndiaGeoJSON {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    properties: {
      ID_0: number;
      ISO: string;
      NAME_0: string;
      ID_1: number;
      NAME_1: string;
      NL_NAME_1?: string;
      VARNAME_1?: string;
      TYPE_1?: string;
      ENGTYPE_1?: string;
      filename?: string;
    };
    geometry: RTOPolygon | RTOMultiPolygon;
  }>;
}
