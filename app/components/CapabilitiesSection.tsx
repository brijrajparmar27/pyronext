"use client";

import { useState } from "react";

const capabilities = [
  { icon: "fact_check", label: "Platform Selection", desc: "Evaluate whether Liferay is the right platform to meet your requirements." },
  { icon: "devices", label: "Omni channel", desc: "Deliver seamless, consistent experiences across web, mobile, and digital platforms." },
  { icon: "update", label: "Platform upgrades", desc: "Upgrade to the newest Liferay DXP version for improved performance, stability, and long term security." },
  { icon: "edit_document", label: "CMS", desc: "Empower teams with flexible, intuitive Liferay CMS capabilities for efficient, effortless content management." },
  { icon: "person_search", label: "Personalization", desc: "Deliver tailored, context aware Liferay experiences driven by user behaviour, platform intelligence, and insight." },
  { icon: "search", label: "Search", desc: "Enhance content discovery and user experience with advanced Liferay search and indexing." },
  { icon: "shopping_cart", label: "Commerce", desc: "Build seamless, integrated Liferay Commerce experiences that elevate digital shopping and purchasing journeys." },
  { icon: "perm_media", label: "DAM", desc: "Manage and distribute digital assets efficiently with Liferay DAM tools and features." },
  { icon: "account_tree", label: "Workflow Automation", desc: "Automate processes, strengthen governance, and enhance efficiency using Liferay's powerful and enterprise grade workflow capabilities." },
  { icon: "domain", label: "Multisite Management", desc: "Manage multiple sites effortlessly through Liferay's centralised, streamlined platform controls for enterprises." },
  { icon: "hub", label: "Integrations", desc: "Connect enterprise systems and tools seamlessly with Liferay DXP integration capabilities." },
  { icon: "api", label: "Headless Architecture", desc: "Deliver flexible, API driven experiences through Liferay's modern, scalable headless architecture." },
  { icon: "code_blocks", label: "Lowcode", desc: "Build faster using Liferay's object based low code features and streamlined workflow automation tools." },
  { icon: "security", label: "Security & Governance", desc: "Ensure robust security, compliance, and governance through Liferay's enterprise grade capabilities." },
  { icon: "psychology", label: "Artificial Intelligence", desc: "Leverage Liferay's AI capabilities to deliver smarter, adaptive, and insight driven digital experiences." },
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
