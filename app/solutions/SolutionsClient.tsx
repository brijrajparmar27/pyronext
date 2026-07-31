"use client";

import { useState } from "react";
import Link from "next/link";
import { Solution } from "../data/solutions";

interface SolutionsClientProps {
  solutions: Solution[];
}

type TabType = "all" | "dxp" | "workspaces" | "commerce";

const tabs = [
  { id: "all" as TabType, label: "All Solutions" },
  { id: "dxp" as TabType, label: "DXP & Portals" },
  { id: "workspaces" as TabType, label: "Workspaces & Collaboration" },
  { id: "commerce" as TabType, label: "Headless E-Commerce" },
];

export default function SolutionsClient({ solutions }: SolutionsClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filteredSolutions = solutions.filter((solution) => {
    if (activeTab === "all") return true;
    if (activeTab === "dxp") return solution.category === "Digital Experience Platforms" || solution.category === "B2B Ecosystems";
    if (activeTab === "workspaces") return solution.category === "Digital Workspaces";
    if (activeTab === "commerce") return solution.category === "B2B & B2C Digital Commerce";
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

      {/* Solutions Directory Grid with GSAP Stagger Animation */}
      <div className="services-directory-grid gsap-stagger-container">
        {filteredSolutions.map((solution) => (
          <div key={solution.slug} className="service-directory-card gsap-stagger-item">
            <div className="card-header-row">
              <span className="material-symbols-outlined card-icon">
                {solution.icon}
              </span>
              <span className="card-category">
                {solution.category}
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h3>{solution.title}</h3>
              <p style={{ minHeight: "3rem" }}>{solution.shortDescription}</p>
            </div>

            {/* Features Highlight */}
            {solution.features && solution.features.length > 0 && (
              <div className="card-highlights">
                {solution.features.slice(0, 2).map((feat, i) => (
                  <div key={i} className="highlight-item">
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>{feat.title}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech stack badges */}
            {solution.technologies && solution.technologies.length > 0 && (
              <div className="card-techs">
                {solution.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech.name}
                  </span>
                ))}
              </div>
            )}

            <div className="card-action">
              <Link href={`/solutions/${solution.slug}`} className="action-link">
                Explore Solution
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
