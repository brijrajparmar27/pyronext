import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "The Standard | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Our Engineering"
        title="Zero-Downtime, API-First Enterprise Standards"
        description="Zero-downtime tolerance, modular OSGi architecture, headless API-first integration, and top-tier systems engineering."
      />
    ),
    { ...size }
  );
}
