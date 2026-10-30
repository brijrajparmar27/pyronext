import type { Metadata } from "next";
import ConnectClient from "./ConnectClient";
import JsonLd from "../components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "../utils/schema";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Pyronite Tech. We specialize in architecting enterprise Liferay DXP platforms, robust microservices integrations, headless frontends, and scalable web solutions.",
  keywords: [
    "Contact Pyronite",
    "Liferay DXP Consultants",
    "Open-Source Systems",
    "Enterprise Portals",
    "Microservices Integration",
    "Scalable Web Infrastructure",
  ],
  alternates: { canonical: "/connect" },
  openGraph: {
    type: "website",
    url: "/connect",
    title: "Connect | Pyronite Tech",
    description:
      "Connect with Pyronite Tech to architect your complex enterprise Liferay & open-source systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect | Pyronite Tech",
    description: "Connect with Pyronite Tech to architect your complex enterprise Liferay & open-source systems.",
  },
};

export default function ConnectPage() {
  const jsonLd = webPageSchema({
    type: "ContactPage",
    name: "Connect | Pyronite Tech",
    description:
      "Connect with Pyronite Tech to architect your complex enterprise Liferay & open-source systems.",
    url: "/connect",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Connect", url: "/connect" },
  ]);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbs} />
      <ConnectClient />
    </>
  );
}
