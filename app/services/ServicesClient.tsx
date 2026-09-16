"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";
import * as gtag from "../utils/gtag";

export default function ServicesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(services.map((s) => s.category)));
    return ["All", ...cats];
  }, []);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.longDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some((f) => f.title.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <ScrollReveal />
      <main
        className="section reveal"
        style={{ paddingTop: "6.5rem", flex: 1, minHeight: "calc(100vh - 116px - 8rem)" }}
      >
        <div className="container">
          {/* Header */}
          <div style={{ maxWidth: "850px", marginBottom: "3rem" }}>
            <span className="label">{"// TECHNICAL SERVICES CATALOG"}</span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                lineHeight: 1.1,
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Enterprise Systems &amp; <br />
              <span style={{ color: "var(--primary)" }}>Digital Growth Services</span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Explore our end-to-end capabilities spanning Liferay DXP platforms, decoupled microservices, high-performance web frontends, secure AI &amp; MCP protocols, and cutting-edge SEO &amp; Generative Engine Optimization (GEO).
            </p>
          </div>

          {/* Controls: Search & Category Filter */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              marginBottom: "3rem",
              background: "var(--bg-surface)",
              border: "1px solid var(--border-light)",
              padding: "1.5rem",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Search Input */}
            <div style={{ position: "relative", width: "100%" }}>
              <span
                className="material-symbols-outlined"
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-muted)",
                  fontSize: "1.2rem",
                }}
              >
                search
              </span>
              <input
                type="text"
                placeholder="Search services by keyword, tech stack, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem 0.85rem 2.75rem",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-light)",
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  outline: "none",
                  borderRadius: 0,
                  boxSizing: "border-box",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "var(--text-muted)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "1.1rem" }}>
                    close
                  </span>
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginRight: "0.5rem",
                }}
              >
                Category:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      gtag.event("filter_service_category", { category: cat });
                    }}
                    style={{
                      background: isActive ? "var(--primary)" : "rgba(255, 255, 255, 0.03)",
                      color: isActive ? "#fff" : "var(--text-muted)",
                      border: isActive ? "1px solid var(--primary)" : "1px solid var(--border-light)",
                      padding: "0.4rem 0.85rem",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      letterSpacing: "0.5px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            <span>
              SHOWING [{filteredServices.length}] OF [{services.length}] SERVICES
            </span>
            {selectedCategory !== "All" || searchQuery !== "" ? (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--primary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  textDecoration: "underline",
                  padding: 0,
                }}
              >
                Reset Filters
              </button>
            ) : null}
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
                marginBottom: "5rem",
              }}
            >
              {filteredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="services-home-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    textDecoration: "none",
                    boxSizing: "border-box",
                  }}
                  onClick={() =>
                    gtag.event("service_card_click", { slug: service.slug, title: service.title })
                  }
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "1rem",
                      }}
                    >
                      <span className="material-symbols-outlined service-icon">{service.icon}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--primary)",
                          border: "1px solid rgba(236, 91, 19, 0.3)",
                          background: "rgba(236, 91, 19, 0.05)",
                          padding: "0.2rem 0.5rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {service.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "0.75rem" }}>
                      {service.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                      {service.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Top 2 Features Preview */}
                    <div
                      style={{
                        borderTop: "1px dashed var(--border-light)",
                        paddingTop: "0.85rem",
                        marginTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                      }}
                    >
                      {service.features.slice(0, 2).map((feat, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "0.85rem", color: "var(--primary)" }}
                          >
                            check_circle
                          </span>
                          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {feat.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        marginTop: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--primary)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      View Architecture Specifications
                      <span className="material-symbols-outlined" style={{ fontSize: "0.9rem" }}>
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                border: "1px dashed var(--border-light)",
                background: "var(--bg-surface)",
                marginBottom: "5rem",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "3rem", color: "var(--text-muted)", marginBottom: "1rem" }}
              >
                search_off
              </span>
              <h3 style={{ textTransform: "uppercase", marginBottom: "0.5rem" }}>No Services Found</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                No services matched &quot;{searchQuery}&quot; in &quot;{selectedCategory}&quot;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="btn btn-outline"
                style={{ fontSize: "0.8rem" }}
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Bottom CTA Block */}
          <section
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border-light)",
              padding: "3rem 2.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div style={{ maxWidth: "650px" }}>
              <span className="label">{"// COLLABORATION"}</span>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  lineHeight: 1.1,
                }}
              >
                Need a Custom Digital Architecture?
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6 }}>
                Our senior engineering division designs tailored solutions combining enterprise core portals, microservice gateways, and AI-driven growth telemetry.
              </p>
            </div>
            <Link href="/connect" className="btn">
              Initiate Consultation
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
