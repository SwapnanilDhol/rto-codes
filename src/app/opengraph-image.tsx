import { ImageResponse } from "next/og";
import { renderSocialCard } from "@/lib/social-card";

export const alt = "RTO.codes preview card";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(renderSocialCard(), size);
}
