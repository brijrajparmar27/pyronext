import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../utils/og";

export const alt = "Engineering Blogs & Insights | Pyronite Tech";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Insights & Articles"
        title="Engineering Blogs on Liferay DXP, AI & Headless Architecture"
        description="Advanced Liferay DXP implementations, open-source systems, headless architecture, and AI integrations."
      />
    ),
    { ...size }
  );
}
