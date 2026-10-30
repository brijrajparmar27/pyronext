import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "Services & Capabilities | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Services & Capabilities"
        title="Liferay DXP, Microservices, AI/MCP & Growth Engineering"
        description="Enterprise software development, Liferay DXP upgrades, microservices, AI MCP servers, and SEO & GEO growth engineering."
      />
    ),
    { ...size }
  );
}
