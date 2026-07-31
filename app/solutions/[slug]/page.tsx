import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import { solutions } from "../../data/solutions";

// Pre-generate all solutions pages at build time
export function generateStaticParams() {
  return solutions.map((sol) => ({ slug: sol.slug }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return {
    title: `${solution.title} Solution`,
    description: solution.metaDescription,
    keywords: solution.metaKeywords,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      type: "website",
      url: `/solutions/${solution.slug}`,
      title: `${solution.title} | Pyronite Tech`,
      description: solution.metaDescription,
      images: [{ url: "/logo.png", alt: "Pyronite" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.title} | Pyronite Tech`,
      description: solution.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return notFound();
  }

  // Schema markup for structured search engine data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": solution.title,
    "description": solution.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "Pyronite Tech",
      "url": "https://pyronite.in"
    },
    "genre": solution.category
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />

      <div className="container service-layout">
        {/* Back Navigation */}
        <div style={{ paddingTop: "2rem" }}>
          <Link
            href="/solutions"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "0.9rem",
                border: "1px solid var(--border-light)",
                padding: 4,
              }}
            >
              arrow_back
            </span>
            Back to Solutions
          </Link>
        </div>

        {/* Hero Section with Entrance Animations */}
        <section className="service-hero-grid gsap-reveal">
          <div className="service-intro">
            <span className="service-meta-badge">{solution.category}</span>
            <h1>{solution.title}</h1>
            <p className="service-desc-lead">{solution.longDescription}</p>
          </div>
          <div className="service-hero-visual">
            <span className="material-symbols-outlined">{solution.icon}</span>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="service-grid-section gsap-reveal">
          <div className="section-header">
            <h2>Core Features</h2>
            <div className="line"></div>
          </div>
          <div className="service-features-grid gsap-stagger-container">
            {solution.features.map((feature, i) => (
              <div key={i} className="service-feature-card gsap-stagger-item">
                <span className="material-symbols-outlined feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Business Benefits Stagger Reveal */}
        <section className="service-grid-section gsap-reveal">
          <div className="section-header">
            <h2>Business Benefits</h2>
            <div className="line"></div>
          </div>
          <div className="service-features-grid gsap-stagger-container">
            {solution.benefits.map((benefit, i) => (
              <div
                key={i}
                className="service-feature-card gsap-stagger-item"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  background: "rgba(255, 255, 255, 0.01)"
                }}
              >
                <span
                  className="material-symbols-outlined feature-icon"
                  style={{ color: "var(--primary)" }}
                >
                  {benefit.icon}
                </span>
                <h3 style={{ textTransform: "none", color: "var(--primary)", letterSpacing: "0px" }}>{benefit.title}</h3>
                <p style={{ fontSize: "0.95rem" }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="service-grid-section gsap-reveal">
          <div className="section-header">
            <h2>Technology Stack</h2>
            <div className="line"></div>
          </div>
          <div className="service-tech-grid">
            {solution.technologies.map((tech, i) => (
              <div key={i} className="service-tech-card">
                <span className="material-symbols-outlined tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="service-grid-section gsap-reveal">
          <div className="section-header">
            <h2>Proven Use Cases</h2>
            <div className="line"></div>
          </div>
          <div className="service-features-grid gsap-stagger-container">
            {solution.useCases.map((useCase, i) => (
              <div
                key={i}
                className="service-feature-card gsap-stagger-item"
                style={{
                  borderLeft: "2px solid var(--primary)",
                  borderRadius: "0px 8px 8px 0px"
                }}
              >
                <h3 style={{ textTransform: "none", color: "#fff", letterSpacing: "1px" }}>{useCase.title}</h3>
                <p style={{ marginTop: "0.75rem", fontSize: "0.92rem", color: "var(--text-muted)" }}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="service-cta-block gsap-reveal">
          <div className="service-cta-text">
            <h2>Let&apos;s build a customized solution</h2>
            <p>
              Work with our Liferay DXP &amp; Next.js team to design customer portals, 
              workspaces, and decoupled storefronts engineered for performance.
            </p>
          </div>
          <Link href="/connect" className="btn">
            Connect With Us
          </Link>
        </section>
      </div>
    </>
  );
}
