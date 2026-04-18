import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://pyronite.codealchemy.tech/sitemap.xml",
    host: "https://pyronite.codealchemy.tech",
  };
}
