import { ImageResponse } from "next/og";
import blogsData from "../../data/blogs.json";
import type { BlogPost } from "../../data/types";
import { OG_SIZE, OG_CONTENT_TYPE, OgCard } from "../../utils/og";

const blogs = blogsData as BlogPost[];

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Pyronite Tech Engineering Blog";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  return new ImageResponse(
    (
      <OgCard
        eyebrow={post?.category ?? "Engineering Blog"}
        title={post?.title ?? "Pyronite Tech"}
        description={post?.excerpt}
      />
    ),
    { ...size }
  );
}
