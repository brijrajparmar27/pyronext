import type { Metadata } from "next";
import ConnectClient from "./ConnectClient";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Pyronite's Liferay DXP experts. We specialize in building complex enterprise portals, seamless headless integration, and high-availability digital solutions.",
  keywords: [
    "Contact Pyronite",
    "Liferay DXP Consultants",
    "Liferay Development Service",
    "Liferay Architects",
    "Portal Infrastructure",
    "Enterprise Solutions",
  ],
  alternates: { canonical: "/connect" },
  openGraph: {
    type: "website",
    url: "/connect",
    title: "Connect | Pyronite",
    description:
      "Connect with Pyronite to architect your complex Liferay digital solution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect | Pyronite",
    description: "Connect with Pyronite to architect your complex Liferay digital solution.",
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}
