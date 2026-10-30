import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "./utils/og";

export const alt = "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Mirrors app/opengraph-image.tsx for X/Twitter's dedicated twitter:image
// tag (its crawler does not reliably fall back to og:image), so
// summary_large_image cards render correctly when shared there too.
export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Enterprise Engineering Studio"
        title="Architecting Enterprise Liferay & Open-Source Systems"
        description="Production-ready Liferay DXP platforms, microservices integration, and high-performance headless frontends."
      />
    ),
    { ...size }
  );
}
