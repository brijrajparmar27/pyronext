import type { Metadata } from "next";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Standard",
  description:
    "Discover Pyronite's engineering standards for Liferay DXP. We enforce zero-downtime tolerance, OSGi modularization, headless API-first integration, and top-tier Liferay capability.",
  keywords: [
    "Pyronite Standards",
    "Liferay DXP",
    "Headless Architecture",
    "OSGi Modularization",
    "API-First Liferay",
    "Enterprise Portals",
    "Zero-Downtime Tolerant Infrastructure",
  ],
  alternates: { canonical: "/standard" },
  openGraph: {
    type: "website",
    url: "/standard",
    title: "The Standard | Pyronite",
    description:
      "Discover Pyronite's engineering standards and Liferay DXP expertise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Standard | Pyronite",
    description: "Discover Pyronite's engineering standards and Liferay DXP expertise.",
  },
};

export default function StandardPage() {
  return (
    <>
      <ScrollReveal />
      <section className="section container reveal" style={{ paddingTop: "6rem" }}>
        {/* Hero Title */}
        <div style={{ borderLeft: "8px solid var(--primary)", paddingLeft: "2rem", marginBottom: "5rem" }}>
          <h1 style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 0.9, textTransform: "uppercase" }}>
            OUR ENGINEERING
          </h1>
          <p style={{ color: "var(--primary)", fontFamily: "var(--font-mono)", fontSize: "0.9rem", marginTop: "2rem", letterSpacing: 2 }}>
            DOCUMENT REF: ENG-ARCHITECT-2026
          </p>
        </div>

        {/* Engineering Standards */}
        <div className="section-header">
          <h2>Engineering Standards</h2>
          <div className="line"></div>
          <span className="label">[SECTION_01]</span>
        </div>

        <div className="grid-cards" style={{ marginBottom: "6rem" }}>
          {[
            { icon: "emergency_home", title: "Zero-Downtime", desc: "Continuous availability protocols ensuring no disruption during operational cycles." },
            { icon: "grid_guides", title: "Strict Isolation", desc: "Hard-siloed architecture preventing cross-system contamination or failure propagation." },
            { icon: "developer_board", title: "Liferay DXP Experts", desc: "Our bespoke engineering units are deeply specialized in building native Liferay ecosystems and low-latency OSGi abstractions." },
            { icon: "hub", title: "API-First", desc: "Headless-first methodology for seamless integration across the industrial stack." },
          ].map((card) => (
            <div key={card.title} className="card">
              <div className="icon block">
                <span className="material-symbols-outlined" style={{ fontSize: "3rem" }}>{card.icon}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Deployment Rigor */}
        <div className="section-header reveal">
          <h2>Deployment Rigor</h2>
          <div className="line"></div>
          <span className="label">[SECTION_02]</span>
        </div>

        <div className="grid-cards reveal" style={{ gridTemplateColumns: "1fr 1fr", marginBottom: "6rem" }}>
          <div className="card" style={{ borderLeft: "4px solid var(--primary)" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ width: 8, height: 8, background: "var(--primary)", display: "inline-block" }}></span>
              Blue/Green Strategies
            </h3>
            <p style={{ marginBottom: "2rem" }}>
              Eliminating deployment risk through parallel environment routing and instant rollback capabilities. Traffic remains stable while new code undergoes final thermal validation.
            </p>
            <ul style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", lineHeight: 2 }}>
              <li><span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--primary)" }}>check_circle</span> Parallel Cluster Sync</li>
              <li><span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--primary)" }}>check_circle</span> Atomic Traffic Switch</li>
            </ul>
          </div>
          <div className="card" style={{ borderLeft: "4px solid var(--primary)" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ width: 8, height: 8, background: "var(--primary)", display: "inline-block" }}></span>
              Automated Verification
            </h3>
            <p style={{ marginBottom: "2rem" }}>
              Continuous health check cycles that autonomously validate system integrity. If metrics deviate from established baselines, deployment is automatically sequestered.
            </p>
            <ul style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", lineHeight: 2 }}>
              <li><span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--primary)" }}>check_circle</span> Threshold Monitoring</li>
              <li><span className="material-symbols-outlined" style={{ fontSize: "1rem", color: "var(--primary)" }}>check_circle</span> Auto-Remediation Hooks</li>
            </ul>
          </div>
        </div>

        {/* Code Authorship */}
        <div className="section-header reveal">
          <h2>Code Authorship</h2>
          <div className="line"></div>
          <span className="label">[SECTION_03]</span>
        </div>

        <div className="reveal" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-light)", padding: "4rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h3 style={{ fontSize: "2.5rem", textTransform: "uppercase", marginBottom: "2rem" }}>
              OSGi <br /><span style={{ color: "var(--primary)" }}>Modularization</span>
            </h3>
            <p className="philosophy-quote" style={{ margin: "0 0 3rem 0", padding: "1rem", borderLeft: "2px solid var(--primary)", background: "transparent" }}>
              &quot;The complexity of a system is proportional to its coupling. We architect for decoupling.&quot;
            </p>
          </div>
          <div className="code-block">
            <div className="code-block-header">Module: pyro-core-api / version: 2.1.0</div>
            <pre>
              <span className="string">@Component</span>({"\n"}
              {"    "}immediate = <span className="keyword">true</span>,{"\n"}
              {"    "}property = {"{"}  {"\n"}
              {"        "}<span className="string">&quot;service.ranking:Integer=100&quot;</span>{"\n"}
              {"    "}{"}"},  {"\n"}
              {"    "}service = <span className="string">PyroniteStandard.class</span>{"\n"}
              {")"}{"\n"}
              <span className="keyword">public class</span> <span className="function">StandardImplementation</span> {"{"}
              {"\n"}
              {"    "}<span style={{ color: "#64748b" }}>// Initialize architectural constraints</span>{"\n"}
              {"    "}<span className="string">@Activate</span>{"\n"}
              {"    "}<span className="keyword">protected void</span> <span className="function">activate</span>() {"{"}  {"\n"}
              {"        "}Log.<span className="function">info</span>(<span className="string">&quot;PYRO: SYSTEM RIGOR ENGAGED&quot;</span>);{"\n"}
              {"    "}{"}"}{"\n"}
              {"}"}
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
