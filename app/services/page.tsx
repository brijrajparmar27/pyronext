import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import ServicesClient from "./ServicesClient";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Innovative Services for Your Enterprise",
  description:
    "Unlock the full potential of your business with our comprehensive range of expert services. We combine Liferay DXP platforms, modern cloud operations, and cutting-edge artificial intelligence to engineer next-generation platforms.",
  keywords: [
    "Pyronite Tech Services",
    "Liferay DXP Consulting",
    "Liferay Migration",
    "Liferay Upgrade Services",
    "Enterprise Portals",
    "Next.js Frontend Development",
    "AI MCP Integration",
    "DevOps Automation",
    "System Engineering",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    title: "Innovative Services for Your Enterprise | Pyronite Tech",
    description:
      "Unlock the full potential of your business with our comprehensive range of expert services. From Liferay DXP to AI-driven microservices.",
    images: [{ url: "/logo.png", alt: "Pyronite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovative Services for Your Enterprise | Pyronite Tech",
    description:
      "Unlock the full potential of your business with our comprehensive range of expert services. From Liferay DXP to AI-driven microservices.",
    images: ["/logo.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />
      <div className="container service-layout" style={{ paddingTop: "3.5rem" }}>
        {/* Hero Section */}
        <section style={{ marginBottom: "2rem" }}>
          <span className="label">// TECHNICAL SERVICES</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Innovative Services <br />for Your <span style={{ color: "var(--primary)" }}>Enterprise</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", fontWeight: 300 }}>
            Unlock the full potential of your business with our comprehensive range of expert services. 
            We bridge enterprise-grade architecture with modern open-source stacks, AI automation, and agile ops.
          </p>
        </section>

        {/* Client Interactive Services Directory */}
        <ServicesClient services={services} />
      </div>
    </>
  );
}
