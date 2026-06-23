import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import { services } from "../../data/services";

// Pre-generate all service pages at build time
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

// Generate dynamic metadata for search engines (SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} Services`,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `/services/${service.slug}`,
      title: `${service.title} | Pyronite Tech`,
      description: service.metaDescription,
      images: [{ url: "/logo.png", alt: "Pyronite" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Pyronite Tech`,
      description: service.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  // Schema markup for structured SEO data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "Pyronite Tech",
      "url": "https://pyronite.in"
    },
    "category": service.category
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />

      <div className="container service-layout">
        {/* Back navigation */}
        <div style={{ paddingTop: "2rem" }}>
          <Link
            href="/"
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
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <section className="service-hero-grid">
          <div className="service-intro">
            <span className="service-meta-badge">{service.category}</span>
            <h1>{service.title}</h1>
            <p className="service-desc-lead">{service.longDescription}</p>
          </div>
          <div className="service-hero-visual">
            <span className="material-symbols-outlined">{service.icon}</span>
          </div>
        </section>

        {/* Core Offerings Grid */}
        <section className="service-grid-section">
          <div className="section-header">
            <h2>Core Offerings</h2>
            <div className="line"></div>
          </div>
          <div className="service-features-grid">
            {service.features.map((feature, i) => (
              <div key={i} className="service-feature-card">
                <span className="material-symbols-outlined feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="service-grid-section">
          <div className="section-header">
            <h2>Technology Stack</h2>
            <div className="line"></div>
          </div>
          <div className="service-tech-grid">
            {service.technologies.map((tech, i) => (
              <div key={i} className="service-tech-card">
                <span className="material-symbols-outlined tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Pipeline */}
        <section className="service-grid-section">
          <div className="section-header">
            <h2>Delivery Framework</h2>
            <div className="line"></div>
          </div>
          <div className="service-process-grid">
            {service.process.map((step, i) => (
              <div key={i} className="service-process-card">
                <span className="service-process-num">{step.step}</span>
                <h3 className="service-process-title">{step.title}</h3>
                <p className="service-process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="service-cta-block">
          <div className="service-cta-text">
            <h2>Ready to architect your platform?</h2>
            <p>
              Collaborate with our senior engineering team to craft modern enterprise solutions. 
              Let's build a secure, high-performance, and scalable digital ecosystem.
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
