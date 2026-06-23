"use client";

import { useState } from "react";
import Link from "next/link";
import { Service } from "../data/services";

interface ServicesClientProps {
  services: Service[];
}

type TabType = "all" | "liferay" | "system" | "web" | "ai-ops";

const tabs = [
  { id: "all" as TabType, label: "All" },
  { id: "liferay" as TabType, label: "Liferay Ecosystem" },
  { id: "system" as TabType, label: "System Engineering" },
  { id: "web" as TabType, label: "Web & Frontend" },
  { id: "ai-ops" as TabType, label: "AI & DevOps" },
];

export default function ServicesClient({ services }: ServicesClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredServices = services.filter((service) => {
    if (activeTab === "all") return true;
    if (activeTab === "liferay") return service.category === "Liferay DXP Ecosystem";
    if (activeTab === "system") return service.category === "System Engineering";
    if (activeTab === "web") return service.category === "Web Engineering" || service.category === "Frontend Engineering";
    if (activeTab === "ai-ops") return service.category === "Artificial Intelligence" || service.category === "Cloud Operations";
    return true;
  });

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="filter-tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`filter-tab ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Directory Grid */}
      <div className="services-directory-grid">
        {filteredServices.map((service) => (
          <div key={service.slug} className="service-directory-card">
            <div className="card-header-row">
              <span className="material-symbols-outlined card-icon">
                {service.icon}
              </span>
              <span className="card-category">
                {service.category}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h3>{service.title}</h3>
              <p style={{ minHeight: "3rem" }}>{service.shortDescription}</p>
            </div>

            {/* Features Highlight */}
            {service.features && service.features.length > 0 && (
              <div className="card-highlights">
                {service.features.slice(0, 2).map((feat, i) => (
                  <div key={i} className="highlight-item">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>{feat.title}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech stack badges */}
            {service.technologies && service.technologies.length > 0 && (
              <div className="card-techs">
                {service.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech.name}
                  </span>
                ))}
              </div>
            )}

            <div className="card-action">
              <Link href={`/services/${service.slug}`} className="action-link">
                Explore Service
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
