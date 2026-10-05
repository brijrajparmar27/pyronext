import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { breadcrumbSchema } from "../utils/schema";

export const metadata: Metadata = {
  title: "Services & Capabilities | Pyronite Tech",
  description:
    "Explore Pyronite's comprehensive technical services: Liferay DXP platforms, open-source microservices, React/Next.js engineering, AI & MCP integrations, and SEO & Generative Engine Optimization (GEO).",
  keywords: [
    "Pyronite Services",
    "Liferay DXP Development",
    "Microservices Architecture",
    "Next.js Engineering",
    "AI MCP Integration",
    "SEO & GEO Optimization",
    "Performance Ads Marketing",
    "Enterprise Growth Engineering",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Services & Capabilities | Pyronite Tech",
    description:
      "Enterprise software development, Liferay DXP upgrades, microservices, AI MCP servers, and SEO & GEO growth engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Capabilities | Pyronite Tech",
    description:
      "Enterprise software development, Liferay DXP upgrades, microservices, AI MCP servers, and SEO & GEO growth engineering.",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Pyronite Technical Services",
    "description": "Full directory of enterprise system engineering, Liferay DXP, AI, and digital growth services provided by Pyronite Tech.",
    "url": "https://pyronite.in/services"
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ServicesClient />
    </>
  );
}
