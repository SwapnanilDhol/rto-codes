"use client";

import { memo, useEffect, useMemo, useRef } from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import L, { LatLngBoundsExpression, Layer, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import { RTOFeature, RTOGeoJSON, RTOMultiPolygon } from "@/types/rto";
import { indiaStatesGeoJSON } from "@/data/loader";

interface RTOMapProps {
  data?: RTOGeoJSON;
  onRTOHover?: (
    rto: RTOFeature | null,
    pointer?: { x: number; y: number }
  ) => void;
  onRTOClick?: (rto: RTOFeature | null) => void;
  onRTOSelect?: (rto: RTOFeature | null) => void;
  selectedRTO?: RTOFeature | null;
  theme?: "dark" | "light";
}

const INDIA_BOUNDS: LatLngBoundsExpression = [
  [6.0, 68.0],
  [37.0, 97.0],
];

function getBoundsFromFeature(feature: RTOFeature): LatLngBoundsExpression | null {
  const { geometry } = feature;

  if (geometry.type === "Polygon") {
    return geometry.coordinates[0].map(([lng, lat]) => [lat, lng] as [number, number]);
  }

  const multiPolygon = geometry as RTOMultiPolygon;
  const primaryPolygon = multiPolygon.coordinates[0]?.[0];
  if (!primaryPolygon) return null;
  return primaryPolygon.map(([lng, lat]) => [lat, lng] as [number, number]);
}

function MapController({ selectedRTO }: { selectedRTO?: RTOFeature | null }) {
  const map = useMap();
  const hasFittedInitialBounds = useRef(false);

  useEffect(() => {
    if (hasFittedInitialBounds.current) return;
    map.fitBounds(INDIA_BOUNDS, {
      padding: [4, 4],
    });
    hasFittedInitialBounds.current = true;
  }, [map]);

  useEffect(() => {
    if (!selectedRTO) return;

    const bounds = getBoundsFromFeature(selectedRTO);
    if (!bounds) return;

    map.stop();
    map.fitBounds(bounds, {
      padding: [48, 48],
      maxZoom: 6,
    });
  }, [map, selectedRTO]);

  return null;
}

function RTOMap({
  data = indiaStatesGeoJSON,
  onRTOHover,
  onRTOClick,
  onRTOSelect,
  selectedRTO,
  theme = "dark",
}: RTOMapProps) {
  const tileUrl =
    theme === "dark"
      ? "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png";

  const geoJsonRef = useRef<L.GeoJSON | null>(null);
  const selectedFeatureIdRef = useRef<string | null>(selectedRTO?.properties.id ?? null);

  const featureStyle = useMemo(
    () => ({
      base:
        theme === "dark"
          ? {
              color: "#475569",
              weight: 1,
              opacity: 0.76,
              fillColor: "#0b1220",
              fillOpacity: 0.34,
            }
          : {
              color: "#cbd5e1",
              weight: 1,
              opacity: 0.86,
              fillColor: "#eef2f7",
              fillOpacity: 0.58,
            },
      hover:
        theme === "dark"
          ? {
              color: "#93c5fd",
              weight: 1.4,
              opacity: 0.96,
              fillColor: "#2563eb",
              fillOpacity: 0.2,
            }
          : {
              color: "#60a5fa",
              weight: 1.4,
              opacity: 0.92,
              fillColor: "#60a5fa",
              fillOpacity: 0.16,
            },
      selected:
        theme === "dark"
          ? {
              color: "#dbeafe",
              weight: 1.8,
              opacity: 0.98,
              fillColor: "#1d4ed8",
              fillOpacity: 0.28,
            }
          : {
              color: "#1e3a8a",
              weight: 1.8,
              opacity: 0.9,
              fillColor: "#3b82f6",
              fillOpacity: 0.18,
            },
    }),
    [theme]
  );

  const getFeatureStyle = (feature: RTOFeature, isHovered = false, isSelected = false) => {
    if (isSelected) return featureStyle.selected;
    if (isHovered) return featureStyle.hover;
    return featureStyle.base;
  };

  const isFeatureSelected = (feature: RTOFeature) =>
    selectedFeatureIdRef.current === feature.properties.id;

  useEffect(() => {
    selectedFeatureIdRef.current = selectedRTO?.properties.id ?? null;
  }, [selectedRTO]);

  useEffect(() => {
    const layerGroup = geoJsonRef.current;
    if (!layerGroup) return;

    layerGroup.eachLayer((layer) => {
      const feature = (layer as Layer & { feature?: RTOFeature }).feature;
      if (!feature) return;

      const path = layer as L.Path;
      const selected = isFeatureSelected(feature);
      path.setStyle(getFeatureStyle(feature, false, selected));

      if (selected) {
        path.bringToFront();
      }
    });
  }, [selectedRTO, featureStyle]);

  const onEachFeature = (feature: RTOFeature, layer: Layer) => {
    const path = layer as L.Path;
    const isSelected = isFeatureSelected(feature);
    path.setStyle(getFeatureStyle(feature, false, isSelected));
    if ("options" in path) {
      path.options.className = "cursor-pointer";
    }

    const updateHover = (event: LeafletMouseEvent) => {
      const selected = isFeatureSelected(feature);
      path.setStyle(getFeatureStyle(feature, true, selected));
      path.bringToFront();
      onRTOHover?.(feature, {
        x: event.originalEvent.clientX,
        y: event.originalEvent.clientY,
      });
    };

    layer.on({
      mouseover: updateHover,
      mousemove: updateHover,
      mouseout: () => {
        const selected = isFeatureSelected(feature);
        path.setStyle(getFeatureStyle(feature, false, selected));
        onRTOHover?.(null, undefined);
      },
      click: (event) => {
        L.DomEvent.stopPropagation(event);
        onRTOClick?.(feature);
        onRTOSelect?.(feature);
      },
    });
  };

  return (
    <MapContainer
      className="h-full w-full"
      zoom={5}
      center={[22.5, 79]}
      scrollWheelZoom
      zoomControl
      maxBounds={INDIA_BOUNDS}
      maxBoundsViscosity={1}
      style={{ minHeight: "100%", minWidth: "100%" }}
    >
      <TileLayer
        attribution=""
        url={tileUrl}
        subdomains="abcd"
        maxZoom={19}
        noWrap
        keepBuffer={8}
        updateWhenIdle
      />
      <MapController selectedRTO={selectedRTO} />
      <GeoJSON
        ref={geoJsonRef}
        key={theme}
        data={data}
        style={(feature) => {
          const currentFeature = feature as RTOFeature;
          const isSelected = isFeatureSelected(currentFeature);
          return getFeatureStyle(currentFeature, false, isSelected);
        }}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  );
}

export default memo(RTOMap);
