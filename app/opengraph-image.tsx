import { ImageResponse } from "next/og";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "./utils/og";

export const alt = "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

// Sitewide default social card. Any route segment without its own
// opengraph-image.tsx (connect, philosophy, standard, faq, terms,
// hire-liferay-developers, the blogs/solutions index pages, etc.)
// automatically inherits this one, so every shareable link gets a
// branded preview instead of no image at all.
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
