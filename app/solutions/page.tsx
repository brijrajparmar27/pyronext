import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import SolutionsClient from "./SolutionsClient";
import { solutions } from "../data/solutions";

export const metadata: Metadata = {
  title: "Enterprise Solutions | Customer Portals, Intranets & Headless Commerce",
  description:
    "Sculpt your enterprise operations with centralized customer self-service portals, collaborative employee intranets, supplier networks, and high-performance headless commerce integrations.",
  keywords: [
    "Enterprise Portals",
    "Customer Portal DXP",
    "Employee Intranet Solution",
    "Dealer Portal",
    "Supplier Integration Platform",
    "Headless Commerce Next.js",
    "Liferay DXP Portal Solutions",
    "B2B E-Commerce Systems",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    url: "/solutions",
    title: "Enterprise Solutions | Pyronite Tech",
    description:
      "Centralized customer portals, connected employee workspaces, and B2B supplier integration networks built on Liferay DXP and Next.js.",
    images: [{ url: "/logo.png", alt: "Pyronite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Solutions | Pyronite Tech",
    description:
      "Centralized customer portals, connected employee workspaces, and B2B supplier integration networks built on Liferay DXP and Next.js.",
    images: ["/logo.png"],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <ScrollReveal />
      <div className="container service-layout" style={{ paddingTop: "3.5rem" }}>
        {/* Hero Section */}
        <section style={{ marginBottom: "3rem" }}>
          <span className="label">{"// ENTERPRISE SOLUTIONS"}</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.2rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Outcome-Driven <br />Digital <span style={{ color: "var(--primary)" }}>Solutions</span>
          </h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "800px", fontWeight: 300 }}>
            We orchestrate corporate digital ecosystems by connecting secure, high-availability core platforms with modern decoupled storefronts, dealer portals, and intranets. Streamline communication, automate supplier pipelines, and boost customer retention.
          </p>
        </section>

        {/* Client Interactive Solutions Catalog */}
        <SolutionsClient solutions={solutions} />
      </div>
    </>
  );
}
