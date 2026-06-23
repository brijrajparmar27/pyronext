import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Hire Liferay Developers | Certified DXP Engineers",
  description:
    "Plug certified senior Liferay DXP backend, OSGi modular development, headless Next.js frontend, and DXP Cloud migration specialists directly into your agile delivery squads.",
  keywords: [
    "Hire Liferay Developers",
    "Liferay DXP Experts",
    "OSGi Java Developers",
    "Headless Liferay Frontend",
    "Liferay Migration Upgrade",
    "Liferay DXP Cloud DevOps",
    "Dedicated Liferay Team",
  ],
  alternates: { canonical: "/hire-liferay-developers" },
  openGraph: {
    type: "website",
    url: "/hire-liferay-developers",
    title: "Hire Dedicated Liferay DXP Developers | Pyronite Tech",
    description:
      "Commission certified senior Liferay DXP and headless engineers. Scale your enterprise squads with 48-hour onboarding.",
    images: [{ url: "/logo.png", alt: "Pyronite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Dedicated Liferay DXP Developers | Pyronite Tech",
    description:
      "Commission certified senior Liferay DXP and headless engineers. Scale your enterprise squads with 48-hour onboarding.",
    images: ["/logo.png"],
  },
};

export default function HireDevelopersPage() {
  const roles = [
    {
      code: "LCP_CORE_DEV",
      title: "Liferay Certified Professional",
      desc: "Architects of core portal functionality. Deeply specialized in OSGi modularization, custom service architectures via Service Builder, workflow engines, security schemas, and custom API endpoints.",
      skills: ["Liferay DXP / Portal 7.4", "OSGi Services", "Java Enterprise / Spring", "Liferay Security (SAML/OAuth)"],
      icon: "developer_board",
    },
    {
      code: "HEADLESS_FE_ENG",
      title: "Headless & React Integrator",
      desc: "Engineers specialized in modern decoupled portal design. They build ultra-fast, responsive frontend systems using React and Next.js, bridging custom frontends to Liferay via headless REST/GraphQL endpoints.",
      skills: ["Next.js / React / Angular", "REST & GraphQL APIs", "Tailwind CSS / CSS Grid", "Core Web Vitals Tuning"],
      icon: "hub",
    },
    {
      code: "UPGRADE_MIGRATE_SPEC",
      title: "Upgrade & Migration Specialist",
      desc: "Experts at legacy code modernization. They audit, decouple, and refactor heavy monolith Liferay 6.2/7.0 portal setups to clean modular DXP 7.4 structures on DXP Cloud with zero data loss.",
      skills: ["Database Schema Upgrades", "Legacy Code Auditing", "OSGi Migration Hooks", "Liferay DXP Cloud Sync"],
      icon: "settings_backup_restore",
    },
    {
      code: "OPS_PERF_ENGINEER",
      title: "DevOps & Performance Engineer",
      desc: "System optimizers focused on throughput and availability. Experts in JVM tuning, garbage collection profiling, database indexing, Elasticsearch clustering, and Jenkins-based DXP deployment pipelines.",
      skills: ["JVM / Garbage Collection", "Elasticsearch Clustering", "Docker & Kubernetes", "Jenkins CI/CD Pipelines"],
      icon: "speed",
    },
  ];

  const models = [
    {
      name: "Staff Augmentation",
      badge: "RAPID_SCALING",
      description: "Directly embed individual senior Liferay/Java engineers into your existing scrum teams.",
      pricing: "Hourly Rate Basis",
      timeline: "48-Hour Matching SLA",
      metrics: ["Direct Developer Access", "Standard Daily Standups", "Client-Managed Backlog"],
    },
    {
      name: "Dedicated Squads",
      badge: "CO-MANAGED_POD",
      description: "A complete autonomous squad of Liferay architects, frontend engineers, and QA lead by a PM.",
      pricing: "Monthly Sprint Retainer",
      timeline: "1-2 Weeks Mobilization",
      metrics: ["Autonomous Scope Delivery", "Pyronite Architectural Oversight", "Comprehensive Deliverable Guarantees"],
    },
    {
      name: "Fixed-Scope Modernization",
      badge: "MILESTONE_DELIVERY",
      description: "Perfect for discrete upgrades, headless migrations, or integrating search clusters.",
      pricing: "Fixed Price Milestones",
      timeline: "Defined Project Scope",
      metrics: ["Guaranteed Delivery Bounds", "Strict SOW Compliance", "Comprehensive Transition Testing"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Technical Scoping",
      desc: "We analyze your existing Liferay platform footprint, codebase version, and target resource profiles to define required capabilities.",
    },
    {
      step: "02",
      title: "Rigor Screening",
      desc: "Candidates pass through Pyronite's architectural screening, verifying deep OSGi compliance, Java patterns, and headless integration skills.",
    },
    {
      step: "03",
      title: "Live Coding / Vetting",
      desc: "You review and run live code evaluations to confirm alignment, technical depth, and overall squad chemistry.",
    },
    {
      step: "04",
      title: "Sprint Integration",
      desc: "Developers are introduced directly into your Slack, Jira, Git, and CI/CD pipelines, starting active delivery in under 48 hours.",
    },
  ];

  return (
    <>
      <ScrollReveal />
      <main className="section reveal" style={{ paddingTop: "6.5rem" }}>
        <div className="container">
          {/* Page Hero Header */}
        <div style={{ borderLeft: "8px solid var(--primary)", paddingLeft: "2rem", marginBottom: "5rem" }}>
          <span className="label" style={{ display: "block", marginBottom: "1rem" }}>
            // COGNITIVE_RESOURCE_ACQUISITION
          </span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Commission Certified <br />
            Liferay DXP Architects
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.25rem", marginTop: "2rem", maxWidth: "800px" }}>
            Scale your engineering division with senior specialists deeply vetted in the OSGi modular framework, custom core portal customization, Liferay headless DXP, and zero-downtime cloud migration strategies.
          </p>
        </div>

        {/* Hero Performance Metrics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "6rem",
          }}
        >
          {[
            { val: 15, suffix: "+ Years", label: "Liferay Architecture Combined" },
            { val: 100, suffix: "%", label: "Strict OSGi & Standards Compliance" },
            { val: 48, suffix: " Hours", label: "Developer Matching & Onboarding SLA" },
          ].map((m, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-light)",
                padding: "2.5rem 2rem",
                borderTop: "3px solid var(--primary)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "3.5rem",
                  color: "#fff",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <AnimatedCounter target={m.val} suffix={m.suffix} />
              </div>
              <div
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "1px",
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Roles Specialties Matrix */}
        <div className="section-header reveal">
          <h2>Specialist Engineering Roles</h2>
          <div className="line"></div>
          <span className="label">[SQUAD_PROFILES]</span>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginBottom: "6rem",
          }}
        >
          {roles.map((role) => (
            <div
              key={role.code}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-light)",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "2.5rem", color: "var(--primary)", opacity: 0.8 }}
                >
                  {role.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--primary)",
                    border: "1px solid var(--primary)",
                    padding: "0.3rem 0.6rem",
                    textTransform: "uppercase",
                  }}
                >
                  {role.code}
                </span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
                {role.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, flexGrow: 1, margin: 0 }}>
                {role.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  borderTop: "1px solid var(--border-light)",
                  paddingTop: "1.5rem",
                }}
              >
                {role.skills.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-primary)",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-light)",
                      padding: "0.3rem 0.6rem",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models Comparison */}
        <div className="section-header reveal">
          <h2>Engagement Models</h2>
          <div className="line"></div>
          <span className="label">[ALIGNMENT_MODELS]</span>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
            marginBottom: "6rem",
          }}
        >
          {models.map((model) => (
            <div
              key={model.name}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-light)",
                padding: "3.5rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--primary)",
                    letterSpacing: "1px",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  // {model.badge}
                </span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
                  {model.name}
                </h3>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                {model.description}
              </p>
              <div
                style={{
                  padding: "1.25rem 0",
                  borderTop: "1px solid var(--border-light)",
                  borderBottom: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Billing Basis:</span>
                  <span style={{ fontWeight: 600 }}>{model.pricing}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                  <span style={{ color: "var(--text-muted)" }}>Timeline:</span>
                  <span style={{ fontWeight: 600 }}>{model.timeline}</span>
                </div>
              </div>
              <ul
                style={{
                  margin: 0,
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  flexGrow: 1,
                }}
              >
                {model.metrics.map((metric, k) => (
                  <li
                    key={k}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-primary)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "1.1rem", color: "var(--primary)" }}
                    >
                      check_circle
                    </span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vetting & Onboarding Pipeline */}
        <div className="section-header reveal">
          <h2>Rigor Pipeline</h2>
          <div className="line"></div>
          <span className="label">[ONBOARDING_PROCESS]</span>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginBottom: "6rem",
          }}
        >
          {processSteps.map((p) => (
            <div
              key={p.step}
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border-light)",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {p.step}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
                {p.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call To Action Banner */}
        <section
          className="reveal"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border-light)",
            borderLeft: "4px solid var(--primary)",
            padding: "4rem 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2.5rem",
          }}
        >
          <div style={{ maxWidth: "650px" }}>
            <h2 style={{ fontSize: "2rem", textTransform: "uppercase", margin: "0 0 1rem 0" }}>
              Secure Your Squad Allocation
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
              Initiate standard technical scoping audits with our senior architects to identify, vet, and match certified developers customized for your Liferay platform setup.
            </p>
          </div>
          <Link href="/connect" className="btn" style={{ whiteSpace: "nowrap" }}>
            Initiate scoping build
          </Link>
        </section>
        </div>
      </main>
    </>
  );
}
