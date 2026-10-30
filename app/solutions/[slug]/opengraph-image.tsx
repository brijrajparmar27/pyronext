import { ImageResponse } from "next/og";
import { solutions } from "../../data/solutions";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../../utils/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Pyronite Tech Solution";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  return new ImageResponse(
    (
      <OgCard
        eyebrow={solution?.category ?? "Solutions"}
        title={solution?.title ?? "Pyronite Tech"}
        description={solution?.shortDescription}
      />
    ),
    { ...size }
  );
}
