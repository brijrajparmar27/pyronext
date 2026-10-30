import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "Enterprise Solutions | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Enterprise Solutions"
        title="Customer Portals, Intranets & Headless Commerce"
        description="Centralized customer portals, connected employee workspaces, and B2B supplier integration networks built on Liferay DXP and Next.js."
      />
    ),
    { ...size }
  );
}
