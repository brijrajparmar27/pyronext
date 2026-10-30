import { ImageResponse } from "next/og";
import { services } from "../../data/services";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../../utils/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Pyronite Tech Service";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  return new ImageResponse(
    (
      <OgCard
        eyebrow={service?.category ?? "Services"}
        title={service?.title ?? "Pyronite Tech"}
        description={service?.shortDescription}
      />
    ),
    { ...size }
  );
}
