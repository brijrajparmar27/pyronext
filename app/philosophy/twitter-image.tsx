import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "Philosophy | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Our Approach"
        title="Architectural Precision & Purpose-Driven Engineering"
        description="Pyronite's philosophy on enterprise Liferay DXP and open-source architectural precision."
      />
    ),
    { ...size }
  );
}
