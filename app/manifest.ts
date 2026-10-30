import type { MetadataRoute } from "next";

// Web App Manifest — improves mobile "add to home screen" presentation
// and is a recognized mobile-friendliness/PWA signal for search ranking.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pyronite Tech | Enterprise Liferay DXP & Open-Source Systems",
    short_name: "Pyronite Tech",
    description:
      "Enterprise software engineering studio architecting Liferay DXP platforms, open-source microservices, and headless Next.js frontends.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
