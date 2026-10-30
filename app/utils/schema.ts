// Shared schema.org JSON-LD builders. Keeping these centralized avoids
// re-typing @context/@type boilerplate per page and keeps brand facts
// (name, URL, logo, social) consistent across every structured-data block
// on the site.

export const SITE_URL = "https://pyronite.in";
export const SITE_NAME = "Pyronite Tech";
export const SITE_LOGO = `${SITE_URL}/logo.png`;
export const SOCIAL_LINKS = ["https://in.linkedin.com/company/pyronite-tech"];

// Stable node IDs so every page's JSON-LD can reference the same
// Organization/WebSite entities by @id instead of re-declaring them —
// this is what turns disconnected JSON-LD blocks into one linked
// Knowledge Graph for search + AI answer engines.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Topics Pyronite is a recognized authority on — a strong topical-authority
// signal (entity SEO / GEO) for both classic search and generative engines.
export const KNOWS_ABOUT = [
  "Liferay DXP",
  "Liferay Portal",
  "Java",
  "Spring Boot",
  "Enterprise Java (J2EE)",
  "Microservices Architecture",
  "Headless CMS",
  "React",
  "Next.js",
  "Kubernetes",
  "DevOps & CI/CD",
  "AI & Model Context Protocol (MCP)",
  "Cloud-Native Architecture",
  "Digital Experience Platforms (DXP)",
  "Python",
  "Headless Commerce",
  "SEO & Generative Engine Optimization (GEO)",
];

/**
 * Sitewide Organization schema — the canonical entity record search engines
 * and AI answer/generative engines use to identify who Pyronite is, so it's
 * mounted once, globally, in app/layout.tsx. Every other page-level schema
 * (author/publisher/provider) should reference this by `{"@id": ORG_ID}`
 * rather than re-declaring the Organization object.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    alternateName: "Pyronite",
    url: SITE_URL,
    logo: SITE_LOGO,
    image: SITE_LOGO,
    description:
      "Pyronite Tech architects production-ready Liferay DXP platforms, headless commerce integrations, and cloud-native enterprise portals for regulated industries.",
    email: "business@pyronite.in",
    knowsAbout: KNOWS_ABOUT,
    sameAs: SOCIAL_LINKS,
    // India-based, serving global enterprise clients — a real, stated
    // company fact (not fabricated) that gives search/AI engines a
    // concrete geographic anchor for local + international GEO queries.
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "business@pyronite.in",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "CodeAlchemy",
      url: "https://codealchemy.tech/",
    },
  };
}

/** Sitewide WebSite schema — pairs with Organization for entity clarity. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
  };
}

export interface WebPageSchemaInput {
  /** schema.org page type, e.g. "AboutPage", "ContactPage", "CollectionPage", "WebPage". */
  type: "AboutPage" | "ContactPage" | "CollectionPage" | "WebPage";
  name: string;
  description: string;
  /** Site-relative path, e.g. "/connect". */
  url: string;
}

/**
 * Generic WebPage-family schema (AboutPage/ContactPage/CollectionPage/etc)
 * for pages that aren't a Service, Article, or FAQ — philosophy, standard,
 * connect, terms. Links back to the sitewide WebSite/Organization nodes
 * so every page contributes to the same Knowledge Graph.
 */
export function webPageSchema({ type, name, description, url }: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export interface ItemListEntry {
  name: string;
  /** Site-relative path, e.g. "/services/enterprise-development". */
  url: string;
  description?: string;
}

/**
 * ItemList schema for directory/index pages (services, solutions, blog
 * index). Enumerating every entry explicitly — rather than relying on
 * engines to crawl-discover them — is a core GEO/AEO technique: it gives
 * answer engines a ready-made, authoritative list to cite or summarize.
 */
export function itemListSchema(name: string, description: string, url: string, items: ItemListEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: `${SITE_URL}${url}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export interface BlogPostingEntry {
  title: string;
  slug: string;
  dateISO: string;
  updatedISO?: string;
  description: string;
}

/** Blog schema wrapping every post as a BlogPosting — mounted on /blogs. */
export function blogSchema(posts: BlogPostingEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blogs#blog`,
    name: "Pyronite Tech Engineering Blog",
    url: `${SITE_URL}/blogs`,
    publisher: { "@id": ORG_ID },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blogs/${post.slug}`,
      datePublished: post.dateISO,
      dateModified: post.updatedISO ?? post.dateISO,
      description: post.description,
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  /** Absolute or site-relative (leading "/") URL. */
  url: string;
}

/** BreadcrumbList schema for any hierarchical page (blog post, service, solution, etc). */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage schema — used by blog posts whose content includes an FAQ section. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface HowToStepInput {
  title: string;
  description: string;
}

/**
 * HowTo schema — built from a service's real `process` array (the same
 * steps rendered in its "Delivery Framework" section), so the schema always
 * matches visible page content exactly.
 */
export function howToSchema(name: string, steps: HowToStepInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}
