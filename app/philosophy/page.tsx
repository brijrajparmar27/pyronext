import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "Explore Pyronite's philosophy on native Liferay DXP architectural precision. We build purpose-driven enterprise portals and low-latency headless implementations.",
  keywords: [
    "Pyronite Philosophy",
    "Liferay Architecture",
    "Headless Liferay",
    "Liferay DXP Solutions",
    "Purpose-Driven Engineering",
    "Enterprise Architecture",
    "Scalable Portals",
  ],
  alternates: { canonical: "/philosophy" },
  openGraph: {
    type: "website",
    url: "/philosophy",
    title: "Philosophy | Pyronite",
    description:
      "Explore Pyronite's philosophy on architectural precision and purpose-driven engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Philosophy | Pyronite",
    description:
      "Explore Pyronite's philosophy on architectural precision and purpose-driven engineering.",
  },
};

export default function PhilosophyPage() {
  return (
    <>
      <ScrollReveal />
      <main className="container section reveal" style={{ paddingTop: "6rem" }}>
        {/* Hero Header */}
        <div style={{ marginBottom: "6rem" }}>
          <span className="label" style={{ display: "block", marginBottom: "1rem" }}>LOG_FILE: 003_ARCH</span>
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              textTransform: "uppercase",
              borderLeft: "8px solid var(--primary)",
              paddingLeft: "2rem",
              marginBottom: "3rem",
            }}
          >
            OUR APPROACH
          </h1>
          <p style={{ fontSize: "1.5rem", color: "var(--text-muted)", fontStyle: "italic", maxWidth: 800 }}>
            &quot;Complexity requires uncompromising execution. We craft intricate Liferay digital solutions forged with absolute industrial precision.&quot;
          </p>
        </div>

        {/* Principle 01 */}
        <div className="philosophy-grid reveal" style={{ marginBottom: "8rem" }}>
          <div className="philosophy-text">
            <span className="label">// PRINCIPLE_01</span>
            <h2>Architectural Precision</h2>
            <p>
              We do not just write code; we architect elite digital foundations for your most rigorous industrial challenges. By defining the exact operational limits of a platform, we ensure absolute deterministic outcomes.
            </p>
            <div className="philosophy-quote" style={{ background: "rgba(236, 91, 19, 0.05)" }}>
              [SYS_STATUS]: IMMUTABLE_BOUNDS_SET<br />
              [RESULT]: SCALABLE_ROBUSTNESS_OPTIMIZED_BY_100%
            </div>
            <p>
              In an industrial environment, ambiguity is the primary vector for failure. We eliminate &quot;soft&quot; variables by enforcing rigid engineering protocols, ensuring our Liferay solutions effortlessly digest complexity to output predictable, frictionless experiences.
            </p>
          </div>
          <div className="philosophy-image">
            <Image
              src="/liferay-summit-board.jpg"
              alt="Liferay Architecture Planning"
              fill
              style={{ objectFit: "cover" }}
            />
            <span className="material-symbols-outlined" style={{ position: "relative", zIndex: 2, fontSize: "6rem", color: "var(--primary)", opacity: 0.8 }}>
              architecture
            </span>
          </div>
        </div>

        {/* Principle 02 */}
        <div className="philosophy-grid reveal">
          <div className="philosophy-text" style={{ order: 2 }}>
            <span className="label">// PRINCIPLE_02</span>
            <h2>Purpose-Driven Engineering</h2>
            <p>
              Every algorithm written, every API mapped, and every deployed feature must brutally justify its own existence. We reject the fragmented &quot;volume-over-quality&quot; approach of mass engineering in favor of surgical, unified architectural vision.
            </p>
            <div style={{ background: "var(--primary)", padding: "3rem", color: "#fff", marginTop: "2rem" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: "1rem", opacity: 0.8 }}>
                Logic Flow
              </span>
              <p style={{ fontSize: "1.5rem", fontWeight: 700, fontStyle: "italic", color: "#fff" }}>
                &quot;If it does not contribute to the kinetic efficiency of the system, it is friction. And friction is the enemy.&quot;
              </p>
            </div>
          </div>
          <div style={{ order: 1, paddingRight: "4rem" }}>
            <h3 style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", color: "var(--primary)", marginBottom: "3rem", fontSize: "0.9rem", letterSpacing: 2, borderBottom: "1px solid var(--border-light)", paddingBottom: "1rem" }}>
              Efficiency Metrics
            </h3>
            {[
              { val: "Best In Class", label: "Latency Tolerance" },
              { val: "100%", label: "Logic Justification" },
              { val: "∞", label: "Iterative Refinement" },
            ].map((m) => (
              <div key={m.label} style={{ marginBottom: "2.5rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "2rem", color: "var(--primary)", lineHeight: 1 }}>{m.val}</div>
                <div style={{ textTransform: "uppercase", fontWeight: 700, fontSize: "0.9rem", marginTop: "0.5rem", color: "var(--text-muted)" }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
