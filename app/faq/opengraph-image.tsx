import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "FAQ & Glossary | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="FAQ & Glossary"
        title="Liferay DXP, Java & Enterprise Architecture — Answered"
        description="Clear answers and definitions on Liferay DXP, Java enterprise architecture, headless commerce, microservices, and AI/MCP integration."
      />
    ),
    { ...size }
  );
}
