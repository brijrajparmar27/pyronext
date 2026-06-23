import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import CapabilitiesSection from "./components/CapabilitiesSection";
import TechSpectrum from "./components/TechSpectrum";
import AnimatedCounter from "./components/AnimatedCounter";
import ServicesCarousel from "./components/ServicesCarousel";
import { services } from "./data/services";

export const metadata: Metadata = {
  title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
  description:
    "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends. We forge complex enterprise portals and scalable web infrastructure from the ground up.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    description:
      "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pyronite Tech | Architecting Enterprise Liferay & Open-Source Systems",
    description:
      "Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends.",
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
      <style>{`
        /* Workflow Section */
        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .workflow-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 2rem 1.75rem;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .workflow-card:hover {
          border-color: var(--primary);
          background: rgba(236, 91, 19, 0.02);
        }
        .workflow-step-num {
          font-family: var(--font-mono);
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        .workflow-step-title {
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
        }
        .workflow-step-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Engagement Grid */
        .engagement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .engagement-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 2.5rem 2rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .engagement-card:hover {
          border-color: var(--primary);
          box-shadow: 0 0 15px rgba(236, 91, 19, 0.15);
          background: rgba(236, 91, 19, 0.02);
        }
        .engagement-icon {
          font-size: 2.5rem;
          color: var(--primary);
          opacity: 0.8;
        }
        .engagement-title {
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
        }
        .engagement-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .engagement-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .workflow-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .engagement-card {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
      <ScrollReveal />

      {/* Hero Section */}
      <section className="hero container reveal">
        <div className="hero-content">
          <div>
            <h1>
              Architecting <br />
              Enterprise <span>Liferay</span> &amp; <br />
              Open-Source Systems
            </h1>
          </div>
          <div className="hero-desc">
            <p>
              Sculpt your corporate ecosystem with production-ready Liferay DXP platforms, robust microservices integration, and high-performance headless frontends. We forge complex enterprise portals and scalable web infrastructure from the ground up.
            </p>
            <span className="meta">Enterprise Liferay &amp; Open-Source Architecture</span>
          </div>
        </div>
      </section>

      {/* Industry Footprint Context */}
      <section className="section border-top" style={{ paddingBottom: "2rem", paddingTop: "3.5rem" }}>
        <div className="container reveal">
          <div style={{ maxWidth: "800px" }}>
            <span className="label">// REGULATED INDUSTRIES</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Enterprise Footprint Across Regulated Industries
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
              We engineer resilient solutions, scalable web portals, and secure architectures for Global Logistics, Gov-Tech Platforms, and High-Throughput E-Commerce ecosystems across APAC and EMEA regions.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Logo Marquee */}
      <section className="marquee-wrapper border-top">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="marquee-item">
                <Image
                  alt={p.alt}
                  src={p.src}
                  width={203}
                  height={54}
                  className="object-contain"
                  style={{
                    filter: "grayscale(1) brightness(0.8)",
                  }}
                  sizes="(max-width: 768px) 100px, 203px"
                />
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
              <span className="label">01 / The Architecture</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginBottom: "2rem", marginTop: "1rem" }}>
                Bridging Governance<br />with <span style={{ color: "var(--primary)" }}>Open-Source Agility</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                We bridge enterprise-grade governance (like Liferay DXP) with agile open-source stacks. Through full-stack synergy, we connect secure core platforms with decoupled microservice layers and dynamic headless frontends to achieve ultra-fast load times, flawless indexing, and zero-downtime performance. By minimizing infrastructure friction and leveraging open standards, we maximize long-term digital growth and cross-platform scalability.
              </p>
            </div>
            <div className="philosophy-image" style={{ border: "1px solid var(--border-light)", aspectRatio: "4/5" }}>
                <Image
                  src="/liferay-summit.jpg"
                  alt="Liferay Digital Experience Platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header" style={{ justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <span className="label">02 / Technical Services</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, margin: 0 }}>
                Innovative Services <br />for Your <span style={{ color: "var(--primary)" }}>Enterprise</span>
              </h2>
            </div>
            <div>
              <Link href="/services" className="btn btn-outline" style={{ padding: "0.8rem 2rem", fontSize: "0.8rem" }}>
                View All Services
              </Link>
            </div>
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "800px", marginBottom: "3rem", fontWeight: 300, lineHeight: 1.7 }}>
            Unlock the full potential of your business with our comprehensive range of expert services. We engineer next-generation platforms tailored for high scalability, robustness, and security.
          </p>

          <ServicesCarousel services={services} />
        </div>
      </section>

      {/* Modernization Workflow Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header">
            <span className="label">03 / The Modernization Workflow</span>
            <div className="line"></div>
          </div>
          
          <div className="workflow-grid">
            {[
              {
                step: "01",
                title: "Assess & Decouple",
                desc: "Comprehensive code audits of legacy enterprise frameworks to isolate architectural bottlenecks.",
              },
              {
                step: "02",
                title: "Microservices Split",
                desc: "Migrating heavy monolith structures into decoupled, secure, and production-ready API nodes.",
              },
              {
                step: "03",
                title: "Headless Acceleration",
                desc: "Deploying globally distributed Next.js and React frontends optimized for maximum Core Web Vitals and instant indexing.",
              },
            ].map((item) => (
              <div key={item.step} className="workflow-card">
                <div className="workflow-step-num">{item.step}</div>
                <h3 className="workflow-step-title">{item.title}</h3>
                <p className="workflow-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Implementations Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header">
            <span className="label">04 / Proven Implementations</span>
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
                <Image
                  src="/developers-working.jpg"
                  alt="Dedicated Liferay Developers Working"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
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
                <Image
                  src="/developers-working-2.jpg"
                  alt="Liferay Headless Architecture Developers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
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
              <span className="label">05 / Growth Metrics</span>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, marginTop: "1rem", marginBottom: "2rem" }}>
                Empowering Enterprises,<br /><span style={{ color: "var(--primary)" }}>Engineered on Enterprise Standards</span>
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 500 }}>
                We deliver robust, high-performance digital solutions using best practices that combine secure core infrastructure with modular open-source architectures to maximize value.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem 1.5rem" }}>
              {[
                { val: 100, suffix: "+", title: "Delivered Solutions", desc: "Successfully delivered enterprise grade Liferay solutions across industries." },
                { val: 30, suffix: "+", title: "Experts Onboard", desc: "Certified Liferay experts ensuring secure, scalable, and standards aligned delivery." },
                { val: 98, suffix: "%", title: "Client Satisfaction", desc: "Earned through transparent collaboration and consistent Liferay delivery excellence." },
                { val: 10, suffix: "+", title: "Years of Excellence", desc: "Over a decade delivering enterprise grade, future ready Liferay digital platforms." },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "3.25rem", color: "#fff", lineHeight: 1, marginBottom: "1rem", fontWeight: 700 }}>
                    <AnimatedCounter target={item.val} suffix={item.suffix} />
                  </div>
                  <div style={{ height: 1, width: "100%", background: "var(--border-light)", marginBottom: "1.5rem" }}></div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.5rem", color: "var(--primary)" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.desc}</p>
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
            <span className="label">06 / Core Capabilities</span>
            <div className="line"></div>
          </div>
          <div style={{ marginBottom: "2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Core Technical <br /><span style={{ color: "var(--primary)" }}>Capabilities</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: 600, fontWeight: 300 }}>
              We build scalable platforms and modern digital experiences, combining the enterprise governance of Liferay DXP with decoupled, agile open-source engineering.
            </p>
          </div>
          <CapabilitiesSection />
        </div>
      </section>

      {/* Tech Spectrum Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header">
            <span className="label">07 / Tech Spectrum</span>
            <div className="line"></div>
          </div>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1, margin: 0 }}>
              Enterprise Integration &amp; <br /><span style={{ color: "var(--primary)" }}>Modern Infrastructure</span>
            </h2>
          </div>
          <TechSpectrum />
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="section border-top">
        <div className="container reveal">
          <div className="section-header">
            <span className="label">08 / Engagement Models</span>
            <div className="line"></div>
          </div>
          
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 700, textTransform: "uppercase", lineHeight: 1.1, margin: 0 }}>
              Flexible Outcome-Driven <br /><span style={{ color: "var(--primary)" }}>Alignment Models</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", marginTop: "1.5rem", maxWidth: "600px", fontWeight: 300 }}>
              Flexible, outcome-driven alignment tailored to enterprise project timelines and scaling requirements.
            </p>
          </div>

          <div className="engagement-grid">
            {[
              {
                title: "Staff Augmentation",
                desc: "Instantly plug pre-vetted, senior-level Liferay, Java Microservices, and React engineers directly into your internal delivery team to accelerate sprints.",
              },
              {
                title: "Dedicated Engineering Squads",
                desc: "A fully autonomous, cross-functional team of technical architects, lead developers, and QA engineers managed entirely by Pyronite to deliver end-to-end products.",
              },
              {
                title: "Fixed-Scope Modernization",
                desc: "Perfect for defined milestone execution, milestone upgrades, headless migrations, and architectural transformations with guaranteed delivery timelines.",
              },
            ].map((model) => (
              <div key={model.title} className="engagement-card">
                <span className="material-symbols-outlined engagement-icon">
                  handshake
                </span>
                <h3 className="engagement-title">{model.title}</h3>
                <p className="engagement-desc">{model.desc}</p>
              </div>
            ))}
          </div>
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
    </>
  );
}
