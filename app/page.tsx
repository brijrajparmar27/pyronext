import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import CapabilitiesSection from "./components/CapabilitiesSection";

export const metadata: Metadata = {
  title: "Pyronite | Specialized Liferay DXP & Portal Solutions",
  description:
    "Sculpt your digital ecosystem natively with Pyronite's specialized Liferay DXP engineers. We deliver state-of-the-art Liferay enterprise portals, headless architectures, and immutable scalable infrastructure.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pyronite | Specialized Liferay DXP & Portal Solutions",
    description:
      "Sculpt your digital ecosystem natively with Pyronite's specialized Liferay DXP engineers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyronite | Specialized Liferay DXP & Portal Solutions",
    description:
      "Sculpt your digital ecosystem natively with Pyronite's specialized Liferay DXP engineers.",
  },
};

const partners = [
  { src: "/HP.webp", alt: "HP" },
  { src: "/Dubai_Chamber.webp", alt: "Dubai Chamber" },
  { src: "/iFad.webp", alt: "iFad" },
  { src: "/KWSP.webp", alt: "KWSP" },
  { src: "/Ooredoo.webp", alt: "Ooredoo" },
  { src: "/SCAD.webp", alt: "SCAD" },
  { src: "/United-nations.png", alt: "United Nations" },
  { src: "/Broadcom.webp", alt: "Broadcom" },
  { src: "/Uidai.webp", alt: "UIDAI" },
  { src: "/Orbis.webp", alt: "Orbis" },
  { src: "/Canopi.webp", alt: "Canopi" },
  { src: "/Torry-Harris-Private-Limited.webp", alt: "Torry Harris Private Limited" },
  { src: "/infogain.svg", alt: "Infogain" },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* Hero Section */}
      <section className="hero container reveal" style={{ paddingTop: 0, minHeight: "calc(100vh - 116px)" }}>
        <div className="hero-content">
          <div>
            <h1>
              Architecting <br />
              <span>Liferay</span> Solutions <br />
              For Industry.
            </h1>
          </div>
          <div className="hero-desc">
            <p>
              Sculpt your digital ecosystem natively with our specialized Liferay DXP engineers. We forge complex enterprise portals and immutable infrastructure from the ground up.
            </p>
            <span className="meta">Liferay DXP 7.4+ Certified / Enterprise Engineering</span>
          </div>
        </div>
      </section>

      {/* Partner Logo Marquee */}
      <section className="marquee-wrapper border-top">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="marquee-item">
                <img alt={p.alt} loading="lazy" width={203} height={54} className="object-contain" src={p.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="philosophy-grid" style={{ alignItems: "center" }}>
            <div className="philosophy-text">
              <span className="label">01 / The Platform</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "2rem", marginTop: "1rem" }}>
                One Platform.<br />Endless <span style={{ color: "var(--primary)" }}>Digital Possibilities</span><br />with Liferay DXP
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                Liferay DXP is a unified digital experience platform that empowers enterprises to build portals, intranets, websites, and customer solutions with speed and flexibility. With powerful out of the box features, strong security, seamless integrations, and low code tools, Liferay enables scalable experiences and long term digital transformation across the entire Liferay ecosystem while reducing complexity and enhancing operational efficiency.
              </p>
            </div>
            <div className="philosophy-image" style={{ border: "1px solid var(--border-light)", aspectRatio: "4/5" }}>
              <Image
                src="/liferay-summit.jpg"
                alt="Liferay Digital Experience Platform"
                fill
                style={{ objectFit: "cover", filter: "grayscale(1) contrast(1.2) brightness(0.6)", transition: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proven Implementations Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header">
            <span className="label">02 / Proven Implementations</span>
            <div className="line"></div>
          </div>
          <div className="projects">
            <article className="project-row">
              <div className="project-info">
                <span className="label">CLIENT_ID: LX-900_LOGISTICS</span>
                <h3>Global Logistics Portal</h3>
                <p>Architected a robust multi-tenant DXP deployment platform from scratch. Engineered to orchestrate 450+ service nodes with zero-downtime tolerance, weaving complexity into seamless performance.</p>
                <div className="project-tags">
                  <span>Kubernetes</span>
                  <span>OSGi Runtime</span>
                  <span>DXP Cloud</span>
                </div>
              </div>
              <div className="project-img">
                <Image src="/developers-working.jpg" alt="Dedicated Liferay Developers Working" fill style={{ objectFit: "cover" }} />
              </div>
            </article>
            <article className="project-row">
              <div className="project-info">
                <span className="label">CLIENT_ID: V6-B2B_COMMERCE</span>
                <h3>Industrial Headless Commerce</h3>
                <p>Our engineering division forged a bespoke Headless Liferay B2B commerce integration, laser-focused on massive transactional throughput and resilient performance under load.</p>
                <div className="project-tags">
                  <span>React-Headless</span>
                  <span>REST/GraphQL</span>
                  <span>Redis Cache</span>
                </div>
              </div>
              <div className="project-img">
                <Image src="/developers-working-2.jpg" alt="Liferay Headless Architecture Developers" fill style={{ objectFit: "cover" }} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Growth Metrics Section */}
      <section className="section border-top" style={{ background: "var(--bg-surface)" }}>
        <div className="container reveal">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <div>
              <span className="label">03 / Growth Metrics</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginTop: "1rem", marginBottom: "2rem" }}>
                Empowering Enterprises,<br /><span style={{ color: "var(--primary)" }}>Through Liferay First Thinking</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 500 }}>
                We deliver Liferay first digital solutions using best practice, OOTB driven implementations that maximise platform value and long term enterprise growth.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem 2rem" }}>
              {[
                { stat: "30+", title: "Delivered Solutions", desc: "Successfully delivered enterprise grade Liferay solutions across industries." },
                { stat: "30+", title: "Experts Onboard", desc: "Certified Liferay experts ensuring secure, scalable, and standards aligned delivery." },
                { stat: "98%", title: "Client Satisfaction", desc: "Earned through transparent collaboration and consistent Liferay delivery excellence." },
                { stat: "10+", title: "Years of Excellence", desc: "Over a decade delivering enterprise grade, future ready Liferay digital platforms." },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "4rem", color: "#fff", lineHeight: 1, marginBottom: "1rem", fontWeight: 700 }}>{item.stat}</div>
                  <div style={{ height: 1, width: "100%", background: "var(--border-light)", marginBottom: "1.5rem" }}></div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem", color: "var(--primary)" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header">
            <span className="label">04 / Liferay Core</span>
            <div className="line"></div>
          </div>
          <div style={{ marginBottom: "4rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Our Liferay <br /><span style={{ color: "var(--primary)" }}>Capabilities</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 600, fontWeight: 300 }}>
              We build scalable platforms and meaningful digital experiences on Liferay DXP, empowering enterprises with best practice implementation, performance, and future ready digital growth.
            </p>
          </div>
          <CapabilitiesSection />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container reveal" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", textTransform: "uppercase" }}>Engineer Your Liferay Future</h2>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/standard" className="btn btn-outline">Our Engineering Standard</Link>
            <Link href="/connect" className="btn">Initiate Build</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
