import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "Hire Liferay Developers | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Cognitive Resource Acquisition"
        title="Hire Certified Liferay DXP Developers"
        description="Plug certified senior Liferay DXP, OSGi, headless Next.js, and migration specialists into your delivery squads in 48 hours."
      />
    ),
    { ...size }
  );
}
