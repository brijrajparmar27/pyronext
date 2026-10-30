import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "Connect | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Let's Build Together"
        title="Connect With Pyronite Tech"
        description="Architect your enterprise Liferay DXP platform, microservices integration, and headless frontend with our engineering team."
      />
    ),
    { ...size }
  );
}
