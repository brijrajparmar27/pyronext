import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";
import { breadcrumbSchema, faqSchema } from "../utils/schema";

export const metadata: Metadata = {
  title: "FAQ & Glossary — Liferay DXP, Java & Enterprise Architecture",
  description:
    "Clear answers and definitions for Liferay DXP, Java enterprise architecture, headless commerce, microservices, and AI/MCP integration — curated by Pyronite Tech's engineering team.",
  keywords: [
    "Liferay DXP FAQ",
    "What is Liferay DXP",
    "Liferay Portal vs DXP",
    "Java Enterprise Architecture",
    "Headless Liferay",
    "Model Context Protocol",
    "Liferay Glossary",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    url: "/faq",
    title: "FAQ & Glossary | Pyronite Tech",
    description:
      "Clear answers and definitions for Liferay DXP, Java enterprise architecture, headless commerce, microservices, and AI/MCP integration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ & Glossary | Pyronite Tech",
    description:
      "Clear answers and definitions for Liferay DXP, Java enterprise architecture, headless commerce, microservices, and AI/MCP integration.",
  },
};

interface FaqEntry {
  question: string;
  answer: string;
}

const FAQ_GROUPS: { heading: string; items: FaqEntry[] }[] = [
  {
    heading: "Liferay DXP",
    items: [
      {
        question: "What is Liferay DXP?",
        answer:
          "Liferay DXP (Digital Experience Platform) is a Java-based enterprise platform for building portals, intranets, customer self-service sites, and headless commerce experiences. It bundles identity management, content management, personalization, and an OSGi module system into one deployable runtime.",
      },
      {
        question: "What's the difference between Liferay Portal and Liferay DXP?",
        answer:
          "Liferay Portal Community Edition (CE) is the free, open-source core. Liferay DXP is the commercially licensed edition built on that same core, adding enterprise features such as analytics, advanced personalization, clustering support, SLA-backed support, and long-term release tracks — which is why most regulated enterprises run DXP rather than CE in production.",
      },
      {
        question: "Is Liferay open source?",
        answer:
          "Yes, at its foundation. Liferay Portal CE is released under the LGPL license and is fully open source. Liferay DXP extends that open core with proprietary enterprise modules and commercial support, so it is source-available to licensees rather than fully open source.",
      },
      {
        question: "What is Liferay's OSGi module system?",
        answer:
          "OSGi (Open Services Gateway initiative) is the modular runtime Liferay DXP is built on. Each feature — themes, portlets, APIs, services — is packaged as an independently deployable bundle, which lets teams hot-deploy, version, and isolate customizations without restarting or destabilizing the whole platform.",
      },
      {
        question: "How long does a Liferay migration or upgrade typically take?",
        answer:
          "It depends on customization depth and data volume, but a structured upgrade generally follows three phases: assessment & planning, schema upgrade & code refactor, and testing & go-live. Straightforward portals can move in a matter of weeks; heavily customized DXP 6.2-era platforms with custom OSGi bundles and legacy themes take longer and benefit from a phased, zero-downtime migration plan.",
      },
      {
        question: "Can Liferay DXP run headless?",
        answer:
          "Yes. Liferay DXP exposes its content, users, and commerce data through REST and GraphQL headless APIs, so teams can keep Liferay as the system of record for content/identity while rendering the frontend in React or Next.js — decoupling the editorial experience from the presentation layer.",
      },
    ],
  },
  {
    heading: "Java & Enterprise Architecture",
    items: [
      {
        question: "Why do enterprises still choose Java for large-scale systems?",
        answer:
          "Java's mature tooling (Spring Boot, OSGi, JVM observability), strong backward compatibility, and proven concurrency model make it a dependable choice for systems that must run for a decade without a full rewrite — which is exactly the lifespan expected of core enterprise portals, banking systems, and healthcare platforms.",
      },
      {
        question: "What is a microservices architecture, and why pair it with Liferay?",
        answer:
          "Microservices split a system into independently deployable services communicating over APIs or message brokers (e.g. Kafka), instead of one large monolith. Pairing this with Liferay lets the portal stay the stable experience layer while surrounding business logic — pricing engines, order management, AI agents — scales and deploys independently.",
      },
      {
        question: "What's the difference between Liferay DXP and platforms like Adobe AEM or Salesforce Experience Cloud?",
        answer:
          "All three are enterprise DXPs, but Liferay is distinguished by its Java/OSGi foundation (deep backend customization without vendor lock-in), a genuinely open-source core, and first-class support for complex B2B portal use cases (partner, supplier, and customer self-service) alongside content management — where AEM leans content/marketing-first and Salesforce leans CRM-first.",
      },
    ],
  },
  {
    heading: "AI, MCP & GEO",
    items: [
      {
        question: "What is MCP (Model Context Protocol)?",
        answer:
          "MCP is an open protocol that lets AI models and agents securely call tools and query live data from external systems. In a Liferay context, an MCP server exposes DXP content, users, and workflows as callable tools, so an LLM-based agent can read or act on real portal data instead of hallucinating answers.",
      },
      {
        question: "Can Liferay DXP integrate with AI agents and LLMs?",
        answer:
          "Yes. Through custom MCP servers and retrieval-augmented generation (RAG) over DXP content, Liferay can power AI assistants that answer questions from your actual knowledge base, automate workflows, and act as agents within DXP — with guardrails scoping exactly what the AI is permitted to read or change.",
      },
      {
        question: "What is Generative Engine Optimization (GEO)?",
        answer:
          "GEO is the practice of structuring a website — schema markup, clear entity facts, llms.txt, quotable statements — so that AI answer engines (ChatGPT, Perplexity, Google AI Overviews) can accurately parse, cite, and recommend it, the same way classic SEO optimizes for traditional search rankings.",
      },
    ],
  },
];

export default function FaqPage() {
  const allItems = FAQ_GROUPS.flatMap((g) => g.items);
  const faq = faqSchema(allItems.map((i) => ({ question: i.question, answer: i.answer })));
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ & Glossary", url: "/faq" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ScrollReveal />
      <main className="section reveal" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <div style={{ marginBottom: "4rem" }}>
            <span className="label" style={{ display: "block", marginBottom: "1rem" }}>
              LOG_FILE: 004_FAQ
            </span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 0.9,
                textTransform: "uppercase",
                borderLeft: "8px solid var(--primary)",
                paddingLeft: "2rem",
                marginBottom: "2rem",
              }}
            >
              FAQ &amp; Glossary
            </h1>
            <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", maxWidth: 800, paddingLeft: "2rem" }}>
              Straight answers on Liferay DXP, Java enterprise architecture, and AI/MCP integration — the terms and
              questions our clients ask most.
            </p>
          </div>

          {FAQ_GROUPS.map((group) => (
            <section key={group.heading} style={{ marginBottom: "4rem" }}>
              <h2 style={{ marginBottom: "1.5rem" }}>{group.heading}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    style={{
                      border: "1px solid var(--border-light, rgba(255,255,255,0.08))",
                      background: "rgba(255,255,255,0.02)",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <summary
                      style={{
                        cursor: "pointer",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        listStyle: "none",
                      }}
                    >
                      {item.question}
                    </summary>
                    <p style={{ marginTop: "1rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
