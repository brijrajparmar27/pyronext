"use client";

import { useState } from "react";

const capabilities = [
  { icon: "domain", label: "Liferay DXP & Enterprise Portals", desc: "Orchestrate unified, multi-tenant digital experience platforms and enterprise portals with scalable content delivery systems and role-based access." },
  { icon: "hub", label: "Open-Source Microservices & API Integration", desc: "Establish resilient communication pathways across distributed services using decoupled, high-performance API gateways, REST, and GraphQL schemas." },
  { icon: "devices", label: "Headless Web & Frontend Modernization (React/Next.js)", desc: "Build modern, decoupled storefronts and web applications using React and Next.js integrated seamlessly with core backend systems." },
  { icon: "dns", label: "Cloud-Native Deployments & Immutable Infrastructure", desc: "Deploy highly available platforms leveraging container orchestration, GitOps workflows, and automated, infrastructure-as-code configuration." },
  { icon: "security", label: "Identity Management, Security & Governance", desc: "Enforce zero-trust architectures, single sign-on (SSO), comprehensive role-based access controls (RBAC), and robust regulatory compliance." },
  { icon: "psychology", label: "Intelligent Automation & AI Workflows", desc: "Embed machine learning models, search vectors, and automated processing agents directly into business applications to drive operational efficiency." },
];

export default function CapabilitiesSection() {
  const [desc, setDesc] = useState(
    "Hover over a capability module parameter to inspect its configuration and deployment specifications."
  );

  return (
    <div className="cap-interactive-container">
      <div className="cap-tags">
        {capabilities.map((cap) => (
          <div
            key={cap.label}
            className="cap-tag"
            onMouseEnter={() => setDesc(cap.desc)}
          >
            <span className="material-symbols-outlined">{cap.icon}</span>
            {cap.label}
          </div>
        ))}
      </div>
      <div className="cap-readout">
        <span className="readout-label">[CAPABILITY_DEF]</span>
        <p className="readout-text">{desc}</p>
      </div>
    </div>
  );
}
