export interface SolutionFeature {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionTech {
  name: string;
  icon: string;
}

export interface SolutionUseCase {
  title: string;
  description: string;
}

export interface Solution {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  metaDescription: string;
  metaKeywords: string;
  features: SolutionFeature[];
  benefits: SolutionBenefit[];
  technologies: SolutionTech[];
  useCases: SolutionUseCase[];
}

export const solutions: Solution[] = [
  {
    slug: "customer-portal",
    title: "Customer Portals",
    category: "Digital Experience Platforms",
    shortDescription: "Centralized self-service customer hubs.",
    longDescription: "Architect a secure and unified digital touchpoint for your clients. Our Liferay-powered customer portals consolidate fragmented service channels, legacy account dashboards, support ticketing, and knowledge assets into a single cohesive interface. Empower your users with robust self-service tools, reducing support overhead while delivering context-aware, personalized client experiences on any device.",
    icon: "supervised_user_circle",
    metaDescription: "Centralized customer portals and self-service hubs. Consolidate account management, dynamic support desks, and client touchpoints with Liferay DXP.",
    metaKeywords: "customer portal, customer experience, self-service portal, liferay customer dashboard, identity management, client portal",
    features: [
      {
        title: "Unified Single Sign-On (SSO)",
        description: "Integrate SAML, OIDC, Active Directory, or Keycloak to allow secure, seamless guest credentials across all customer systems.",
        icon: "badge"
      },
      {
        title: "Dynamic Customer Dashboard",
        description: "Show real-time account balances, active contracts, billing summaries, and order statuses pulled via microservices.",
        icon: "dashboard"
      },
      {
        title: "Self-Service Support Hub",
        description: "Empower users with deep search capabilities, AI-driven ticket matching, and collaborative live chat options.",
        icon: "support_agent"
      },
      {
        title: "Document Management System",
        description: "Secure folder trees allowing customers to download invoices, dynamic reports, and sign digital contracts with audit log trails.",
        icon: "folder_zip"
      }
    ],
    benefits: [
      {
        title: "Reduced Support Costs",
        description: "Self-service options divert up to 45% of recurring tier-1 support tickets and operational inquiries.",
        icon: "savings"
      },
      {
        title: "Improved Retention (NPS)",
        description: "Delivering instant access to billing and technical documentation boosts overall customer experience indexes.",
        icon: "insights"
      },
      {
        title: "Secured Enterprise Access",
        description: "Protect sensitive user profiles and customer records with strict role-based access control (RBAC).",
        icon: "verified_user"
      }
    ],
    technologies: [
      { name: "Liferay DXP / OSGi", icon: "web" },
      { name: "React.js / TypeScript", icon: "javascript" },
      { name: "Keycloak / OAuth2", icon: "security" },
      { name: "Elasticsearch", icon: "search" },
      { name: "REST & GraphQL", icon: "api" }
    ],
    useCases: [
      {
        title: "B2B Telecom Client Center",
        description: "A single client dashboard handling enterprise billing, subscription details, and automated ticket delegation for 2M+ users."
      },
      {
        title: "Healthcare Patient Portal",
        description: "HIPAA-compliant portal allowing secure medical report access, scheduling integration, and doctor messaging frameworks."
      }
    ]
  },
  {
    slug: "employee-intranet",
    title: "Employee Intranets",
    category: "Digital Workspaces",
    shortDescription: "Connected corporate workspaces.",
    longDescription: "Unify your globally distributed workforce with a secure, highly collaborative corporate intranet. Built on enterprise-class Content Management Systems (CMS), our intranets merge corporate communications, document governance, team collaboration spaces, and custom internal application workflows. Foster connection, streamline document sharing, and empower employees with instant access to the files and resources they need.",
    icon: "groups",
    metaDescription: "Dynamic employee intranets and collaborative workspaces. Drive employee engagement, optimize internal file sharing, and centralize communication.",
    metaKeywords: "employee intranet, digital workspace, corporate portal, internal communications, document governance, collaboration site",
    features: [
      {
        title: "Personalized Content Delivery",
        description: "Deliver regional corporate announcements, department alerts, and policy changes tailored to user location and roles.",
        icon: "newspaper"
      },
      {
        title: "Collaborative Team Workspaces",
        description: "Create private and public virtual workspaces for project teams, complete with wikis, message boards, and task trackers.",
        icon: "forum"
      },
      {
        title: "Document Governance & Approval",
        description: "Enforce policy updates and standard operating procedures with automated multi-tier approval workflows.",
        icon: "assignment_turned_in"
      },
      {
        title: "Corporate Search Engine",
        description: "Search corporate guidelines, employee directories, and departmental assets using natural language querying.",
        icon: "travel_explore"
      }
    ],
    benefits: [
      {
        title: "Enhanced Productivity",
        description: "Connecting employees with centralized file access saves up to 4 hours per week searching for templates.",
        icon: "bolt"
      },
      {
        title: "Streamlined Internal PR",
        description: "Disseminate top-down news instantly, replacing static email newsletters with interactive communication threads.",
        icon: "campaign"
      },
      {
        title: "Knowledge Retention",
        description: "Preserve institutional knowledge by encouraging documentation and structured wiki collaboration.",
        icon: "menu_book"
      }
    ],
    technologies: [
      { name: "Liferay DXP / Objects", icon: "web" },
      { name: "Elasticsearch", icon: "search" },
      { name: "Java / Spring Boot", icon: "code" },
      { name: "Tailwind CSS", icon: "css" },
      { name: "Active Directory / LDAP", icon: "security" }
    ],
    useCases: [
      {
        title: "Global Logistics Intranet",
        description: "Centralized internal hub for 45,000 global logistics agents, integrating shift planners, standard operating wikis, and company news."
      },
      {
        title: "Financial Institution Hub",
        description: "A secure intranet portal serving bank employees with multi-level approval stages for financial audits and documentation compliance."
      }
    ]
  },
  {
    slug: "partner-portal",
    title: "Partner & Supplier Portals",
    category: "B2B Ecosystems",
    shortDescription: "Secure distributor and supplier portals.",
    longDescription: "Orchestrate your external business network with a dedicated partner portal. We design high-security dealer, distributor, and supplier portals that coordinate supply chains, simplify resource distribution, track partner metrics, and automate order bookings. Bring transparency to your partner operations, streamline inventory coordination, and reduce friction in B2B channel distribution.",
    icon: "handshake",
    metaDescription: "Secure dealer, supplier, and distributor portals. Automate order bookings, align supply chain workflows, and share files with business partners.",
    metaKeywords: "partner portal, dealer portal, supplier network, b2b portal, distributor portal, supply chain tool",
    features: [
      {
        title: "Lead & Deal Registration",
        description: "Provide distributors with secure dashboards to submit new deals, track pipeline stages, and request assistance.",
        icon: "monetization_on"
      },
      {
        title: "Supplier Inventory Tracker",
        description: "Enable real-time coordination of inventory lists, bulk product pricing, and delivery milestones via database bridges.",
        icon: "inventory_2"
      },
      {
        title: "B2B Co-Branded Asset Hub",
        description: "Distribute marketing guidelines, vector assets, and whitepapers with user-based watermarking and download audits.",
        icon: "photo_library"
      },
      {
        title: "Distributor Performance KPI",
        description: "Track performance ratios, sales rankings, and compliance metrics dynamically via unified BI dashboard panels.",
        icon: "analytics"
      }
    ],
    benefits: [
      {
        title: "Faster Order Operations",
        description: "B2B portal automation speeds up supplier verification cycles and deal registrations by up to 60%.",
        icon: "speed"
      },
      {
        title: "Clear Operations Visibility",
        description: "Provide suppliers and dealers with real-time insight into orders, avoiding dispute cycles.",
        icon: "visibility"
      },
      {
        title: "Minimized Data Ingestion Errors",
        description: "Automate form inputs and database writes to avoid typos in supply chain coordinates.",
        icon: "fact_check"
      }
    ],
    technologies: [
      { name: "Liferay DXP / Extensions", icon: "web" },
      { name: "PostgreSQL / DB Clustered", icon: "database" },
      { name: "Apache Kafka", icon: "insights" },
      { name: "GraphQL API", icon: "api" },
      { name: "OAuth2 Client Credentials", icon: "security" }
    ],
    useCases: [
      {
        title: "Automotive Dealer Network",
        description: "Dealer portal connecting 800+ franchise dealerships to inventory ordering, warranty registrations, and parts availability grids."
      },
      {
        title: "Global Supply Chain Nexus",
        description: "A secure procurement workspace matching 2,500 suppliers with automated RFQ (Request for Quote) pipelines and contracts."
      }
    ]
  },
  {
    slug: "headless-commerce",
    title: "Headless Commerce",
    category: "B2B & B2C Digital Commerce",
    shortDescription: "Decoupled transactional commerce engines.",
    longDescription: "Build ultra-fast, highly customizable digital shopping networks. By separating your backend transactional APIs (like Liferay Commerce, Shopify, or custom ERPs) from your frontend layer (Next.js, React), we deliver sub-second page rendering, flawless search visibility, and maximum checkout speeds. Scale your catalog to millions of variants and process high volumes of simultaneous transactions with zero platform lag.",
    icon: "shopping_cart",
    metaDescription: "High-performance headless commerce integrations. Scale catalogs and handle high transactional throughput using Next.js and Liferay Commerce.",
    metaKeywords: "headless commerce, nextjs commerce, liferay commerce, decoupled e-commerce, shopping api, storefront",
    features: [
      {
        title: "Blazing Fast Next.js Frontends",
        description: "Prerender static PDPs and PLPs to achieve near-instant loads, boosting SEO and user retention.",
        icon: "speed"
      },
      {
        title: "Advanced B2B Price Matrix",
        description: "Implement tier-based prices, custom account contracts, tax regulations, and dynamic discount structures.",
        icon: "payments"
      },
      {
        title: "Decoupled Checkout Pipelines",
        description: "Isolate high-load checkouts into secure serverless nodes connected with Stripe, PayPal, or global payment gateways.",
        icon: "credit_card"
      },
      {
        title: "Unified Catalog Sync",
        description: "Synchronize thousands of SKU catalog details, stock numbers, and images from ERP systems (SAP, Oracle) via Kafka streams.",
        icon: "sync_alt"
      }
    ],
    benefits: [
      {
        title: "Sub-Second Load Times",
        description: "Decreasing page load by 500ms increases average e-commerce checkout conversions by 15-20%.",
        icon: "flash_on"
      },
      {
        title: "Flexible Frontend Control",
        description: "Modify designs and product interfaces instantly without redeploying heavy backend portal modules.",
        icon: "dashboard_customize"
      },
      {
        title: "Uncapped Catalog Scale",
        description: "Handle massive product listings (over 1M variants) and high-load sale events with elastic servers.",
        icon: "expand"
      }
    ],
    technologies: [
      { name: "Next.js Storefront / React", icon: "deployed_code" },
      { name: "Liferay Commerce API", icon: "web" },
      { name: "Redis Caching", icon: "database" },
      { name: "Stripe SDK", icon: "payments" },
      { name: "Apache Kafka", icon: "insights" }
    ],
    useCases: [
      {
        title: "Industrial Parts Storefront",
        description: "Headless Next.js portal processing 15,000 wholesale catalog items, custom customer contracts, and real-time ERP pricing."
      },
      {
        title: "Global Apparel Commerce",
        description: "Global e-commerce storefront with multi-currency handling, CDN caching, and serverless payment processors handling high sales spikes."
      }
    ]
  }
];
