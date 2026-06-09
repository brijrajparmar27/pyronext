"use client";

import { useState } from "react";

interface TabData {
  index: string;
  category: string;
  description: string;
  icon: string;
  techStack: string[];
}

const spectrumData: TabData[] = [
  {
    index: "01",
    category: "Digital Experience & Portals",
    description: "Architecting secure, highly integrated, and multi-tenant digital experience platforms.",
    icon: "layers",
    techStack: [
      "Liferay DXP (7.4+)",
      "Liferay Objects",
      "Headless REST/GraphQL APIs",
      "Portlet MVC",
      "OSGi Core Architecture",
      "Theme Modernization",
    ],
  },
  {
    index: "02",
    category: "Full-Stack Engineering",
    description: "Building highly decoupled applications with enterprise backends and reactive frontends.",
    icon: "code",
    techStack: [
      "Java Enterprise / Jakarta EE",
      "Spring Boot",
      "React",
      "Next.js (SSR/SSG)",
      "Tailwind CSS",
      "Node.js",
      "Microservices Orchestration",
    ],
  },
  {
    index: "03",
    category: "Cloud & Immutable Infrastructure",
    description: "Automating zero-downtime environments and production-grade pipelines.",
    icon: "cloud_done",
    techStack: [
      "Kubernetes",
      "Docker",
      "AWS (Amazon Web Services)",
      "Liferay DXP Cloud",
      "GitHub Actions (CI/CD)",
      "Terraform",
      "Redis Enterprise Cache",
    ],
  },
  {
    index: "04",
    category: "Enterprise Identity & Security",
    description: "Enforcing zero-trust authentication and centralized governance across cross-border applications.",
    icon: "admin_panel_settings",
    techStack: [
      "OAuth 2.0 / SAML 2.0",
      "Okta Integration",
      "Keycloak IAM",
      "Spring Security",
      "Enterprise Access Control & Audit Logs",
    ],
  },
];

export default function TechSpectrum() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tech-spectrum-container">
      <style>{`
        .tech-spectrum-container {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 4rem;
          align-items: start;
        }
        .tech-tabs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .tech-tab-btn {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          border-left: 3px solid transparent;
          color: var(--text-muted);
          padding: 1.5rem 2rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .tech-tab-btn:hover {
          color: #fff;
          border-color: var(--border-light);
          background: rgba(255, 255, 255, 0.02);
        }
        .tech-tab-btn.active {
          background: var(--bg-panel);
          color: #fff;
          border-left-color: var(--primary);
          border-top-color: var(--border-light);
          border-right-color: var(--border-light);
          border-bottom-color: var(--border-light);
        }
        .tech-tab-btn .tab-index {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--primary);
          letter-spacing: 1.5px;
        }
        .tech-tab-btn .tab-title {
          font-size: 1.1rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .tech-content-pane {
          background: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 4rem;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          animation: pane-fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes pane-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tech-pane-desc {
          font-size: 1.25rem;
          color: var(--text-primary);
          line-height: 1.6;
          font-weight: 300;
          border-left: 2px solid var(--primary);
          padding-left: 1.5rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }

        .tech-micro-card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border-light);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-micro-card:hover {
          transform: scale(1.03);
          border-color: var(--primary);
          box-shadow: 0 0 15px rgba(236, 91, 19, 0.15);
          background: rgba(236, 91, 19, 0.02);
        }

        .tech-micro-card .tech-icon {
          color: var(--primary);
          font-size: 1.25rem;
        }

        .tech-micro-card .tech-name {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .tech-spectrum-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .tech-tabs {
            flex-direction: row;
            flex-wrap: wrap;
          }
          .tech-tab-btn {
            flex: 1 1 200px;
          }
        }
        @media (max-width: 768px) {
          .tech-content-pane {
            padding: 2rem;
          }
          .tech-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="tech-tabs">
        {spectrumData.map((tab, idx) => (
          <button
            key={tab.category}
            className={`tech-tab-btn ${activeTab === idx ? "active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            <span className="tab-index">[{tab.index}]</span>
            <span className="tab-title">{tab.category}</span>
          </button>
        ))}
      </div>

      <div key={activeTab} className="tech-content-pane">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span className="material-symbols-outlined tech-icon" style={{ fontSize: "2rem", color: "var(--primary)" }}>
            {spectrumData[activeTab].icon}
          </span>
          <span className="label" style={{ margin: 0 }}>
            [CATEGORY_SPECTRUM]
          </span>
        </div>

        <p className="tech-pane-desc">{spectrumData[activeTab].description}</p>

        <div className="tech-grid">
          {spectrumData[activeTab].techStack.map((tech) => (
            <div key={tech} className="tech-micro-card">
              <span className="material-symbols-outlined tech-icon">
                terminal
              </span>
              <span className="tech-name">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
