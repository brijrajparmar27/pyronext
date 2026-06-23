export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceTech {
  name: string;
  icon: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  icon: string; // Material symbols icon name
  metaDescription: string;
  metaKeywords: string;
  features: ServiceFeature[];
  technologies: ServiceTech[];
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    slug: "enterprise-development",
    title: "Enterprise Development",
    category: "System Engineering",
    shortDescription: "Robust and secure custom systems.",
    longDescription: "Sculpt a highly available, robust, and secure digital foundation for your enterprise. We specialize in designing and engineering custom enterprise solutions that integrate seamlessly with legacy infrastructures, automate mission-critical workflows, and handle heavy data traffic with zero downtime. From high-throughput APIs to relational/non-relational database clustering, we build platforms that scale along with your business growth.",
    icon: "domain",
    metaDescription: "Professional enterprise software development and system integration services. We build scalable, secure, and robust digital platforms for high-throughput enterprise workflows.",
    metaKeywords: "enterprise development, system integration, custom erp, api gateway, software engineering, digital transformation",
    features: [
      {
        title: "Enterprise Integration Patterns (EIP)",
        description: "Integrate distributed systems, message brokers, and legacy databases with reliable message routing and translation.",
        icon: "hub"
      },
      {
        title: "Robust Architecture",
        description: "Zero-single-point-of-failure architectures leveraging clustered databases, microservices, and failover routing.",
        icon: "schema"
      },
      {
        title: "Secure Enterprise APIs",
        description: "Build robust REST, GraphQL, and gRPC endpoints protected by OAuth2, JWT, and custom middleware.",
        icon: "vpn_key"
      },
      {
        title: "Legacy System Modernization",
        description: "Gradually replace legacy monoliths using the Strangler Fig pattern, minimizing operational risks.",
        icon: "settings_backup_restore"
      }
    ],
    technologies: [
      { name: "Java / Spring Boot", icon: "code" },
      { name: "Go Lang", icon: "terminal" },
      { name: "C# / .NET Core", icon: "terminal" },
      { name: "PostgreSQL / Oracle", icon: "database" },
      { name: "Apache Kafka", icon: "insights" },
      { name: "GraphQL & REST APIs", icon: "api" }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Auditing",
        description: "We map your existing application ecosystem, business dependencies, and database schemas."
      },
      {
        step: "02",
        title: "Architecture Design",
        description: "We structure the system blueprints, scalability patterns, and security mechanisms."
      },
      {
        step: "03",
        title: "Incremental Engineering",
        description: "Our team implements features using agile iterations, verified by rigorous continuous testing."
      }
    ]
  },
  {
    slug: "liferay-migration-upgrade",
    title: "Liferay Migration & Upgrade",
    category: "Liferay DXP Ecosystem",
    shortDescription: "Portal upgrades and legacy migrations.",
    longDescription: "Maximize your enterprise portal ROI by upgrading to modern Liferay DXP editions or migrating legacy Content Management Systems (like Sharepoint, Drupal, or WordPress) into Liferay DXP. Our specialists possess deep expertise in migrating database schemas, updating custom OSGi bundles, modernizing theme architectures, and transitioning custom portlets without losing data integrity or user settings.",
    icon: "upgrade",
    metaDescription: "Seamless Liferay upgrade and migration services. Modernize Liferay 6.2 or 7.x to DXP 7.4 and migrate legacy portals with zero data loss.",
    metaKeywords: "liferay upgrade, liferay migration, liferay dxp 7.4, osgi bundles, legacy portal migration, liferay cloud",
    features: [
      {
        title: "Liferay 6.2/7.x to DXP 7.4 Upgrades",
        description: "Upgrade complex portal configurations, custom hooks, and portlets to the latest DXP standard.",
        icon: "update"
      },
      {
        title: "Zero-Loss Database Migrations",
        description: "Safely execute database upgrade scripts, migrating millions of portal assets, files, and users.",
        icon: "storage"
      },
      {
        title: "Modern Theme Refactoring",
        description: "Convert legacy FTL templates and styling into modern, responsive React/Vue or Tailwind-based Liferay themes.",
        icon: "palette"
      },
      {
        title: "CMS Migration to DXP",
        description: "Consolidate scattered company websites and intranets (from AEM, Drupal, etc.) into one centralized Liferay site.",
        icon: "folder_shared"
      }
    ],
    technologies: [
      { name: "Liferay DXP 7.4", icon: "web" },
      { name: "OSGi / Java", icon: "code" },
      { name: "Gradle / Maven", icon: "construction" },
      { name: "PostgreSQL / MySQL", icon: "database" },
      { name: "Liferay Cloud (PaaS)", icon: "cloud" },
      { name: "Freemarker / React", icon: "javascript" }
    ],
    process: [
      {
        step: "01",
        title: "Assessment & Planning",
        description: "We audit all custom modules, hooks, and databases to estimate migration complexity."
      },
      {
        step: "02",
        title: "Schema Upgrade & Code Refactor",
        description: "We upgrade database tables and refactor custom Java code to compile under newer DXP APIs."
      },
      {
        step: "03",
        title: "Testing & Go-Live",
        description: "We perform full-scale regression testing and execute a production cutover strategy."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Web Engineering",
    shortDescription: "Fast, responsive web applications.",
    longDescription: "We design and develop high-performance web systems utilizing modern web standards. Whether you need a dynamic corporate portal, static site configurations, or custom SaaS frontends, we prioritize responsive layouts, fast rendering cycles, accessibility standards, and strict web security. We build systems that drive conversions and offer flawless user experiences across all devices.",
    icon: "web",
    metaDescription: "High-performance web development services. We build secure, interactive, and search-optimized custom web systems using modern frameworks.",
    metaKeywords: "web development, custom websites, responsive design, frontend engineering, web apps, jamstack",
    features: [
      {
        title: "Static Site Generation (SSG)",
        description: "Deliver static files instantly via global CDNs for rapid load speeds and enhanced security.",
        icon: "speed"
      },
      {
        title: "Responsive Web Engineering",
        description: "Ensure layout elements resize dynamically to deliver crisp visual experiences on mobile, tablet, and desktop.",
        icon: "devices"
      },
      {
        title: "SEO & Speed Optimization",
        description: "Implement perfect heading structures, meta tagging, and asset optimization to guarantee high lighthouse scores.",
        icon: "search"
      },
      {
        title: "API-First Web Platforms",
        description: "Integrate headless APIs, CMS platforms, and internal databases cleanly using modern client fetching mechanisms.",
        icon: "api"
      }
    ],
    technologies: [
      { name: "TypeScript / JS", icon: "javascript" },
      { name: "HTML5 / CSS3", icon: "css" },
      { name: "Next.js / React", icon: "deployed_code" },
      { name: "Node.js / Express", icon: "terminal" },
      { name: "REST / GraphQL", icon: "api" },
      { name: "Vercel / Netlify", icon: "cloud" }
    ],
    process: [
      {
        step: "01",
        title: "UX Wireframing",
        description: "We design intuitive UX layouts focusing on smooth user flow and accessibility."
      },
      {
        step: "02",
        title: "Frontend & API Integration",
        description: "We translate designs into pixel-perfect code and hook up backend API streams."
      },
      {
        step: "03",
        title: "Performance Optimization",
        description: "We minimize bundle sizes, optimize media assets, and deploy to worldwide edge servers."
      }
    ]
  },
  {
    slug: "ai-mcp",
    title: "AI & MCP",
    category: "Artificial Intelligence",
    shortDescription: "Secure LLM and custom MCP integrations.",
    longDescription: "Empower your business with tailored Artificial Intelligence implementations. We specialize in building secure integrations between Large Language Models (LLMs) and your corporate databases. Using the Model Context Protocol (MCP), we create standard interfaces that permit AI agents to safely read and write data, run commands, and execute complex business logic on your secure internal servers without exposing sensitive intellectual property.",
    icon: "psychology",
    metaDescription: "State-of-the-art AI integration and Model Context Protocol (MCP) server development. Connect LLMs securely to your internal databases and systems.",
    metaKeywords: "model context protocol, mcp servers, ai integration, llm integration, custom chatbots, ai agents, rag systems",
    features: [
      {
        title: "Custom MCP Server Development",
        description: "Expose filesystem tools, databases, and APIs securely to LLMs using standardized MCP protocol patterns.",
        icon: "robot"
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description: "Feed context-relevant company PDFs, databases, and files to LLMs to answer questions with zero hallucination.",
        icon: "find_in_page"
      },
      {
        title: "LLM Agent Automation",
        description: "Orchestrate agentic workflows where models call internal APIs, process outputs, and take autonomous actions.",
        icon: "dynamic_feed"
      },
      {
        title: "Enterprise AI Security Guardrails",
        description: "Establish robust monitoring and middleware to inspect prompt contents and filter sensitive customer data.",
        icon: "security"
      }
    ],
    technologies: [
      { name: "Model Context Protocol", icon: "settings_ethernet" },
      { name: "Python / TypeScript", icon: "terminal" },
      { name: "LangChain / LlamaIndex", icon: "schema" },
      { name: "OpenAI / Claude APIs", icon: "psychology" },
      { name: "ChromaDB / Pinecone", icon: "storage" },
      { name: "Hugging Face / PyTorch", icon: "science" }
    ],
    process: [
      {
        step: "01",
        title: "AI Strategy & Feasibility",
        description: "We identify automation bottlenecks and choose appropriate LLM/RAG integration techniques."
      },
      {
        step: "02",
        title: "MCP & Infrastructure Building",
        description: "We build custom MCP servers, construct vector embeddings, and connect internal APIs securely."
      },
      {
        step: "03",
        title: "Reinforcement & Safety Audits",
        description: "We perform context-injection testing, optimize system prompts, and deploy safety layers."
      }
    ]
  },
  {
    slug: "devops",
    title: "DevOps",
    category: "Cloud Operations",
    shortDescription: "Automated CI/CD and cloud scaling.",
    longDescription: "Accelerate your code-to-production lifecycle and elevate system uptime with our custom DevOps engineering services. We build automated CI/CD pipelines, containerize application components, design multi-tier cloud clusters on AWS/GCP, and define infrastructure using code scripts. By automating repetitive deployment tasks, we minimize manual errors and guarantee high availability.",
    icon: "settings_suggest",
    metaDescription: "Enterprise DevOps services. CI/CD pipelines, Infrastructure as Code, Kubernetes orchestration, cloud monitoring, and GitOps workflows.",
    metaKeywords: "devops, ci/cd pipelines, terraform, kubernetes, docker, aws devops, cloud automation, prometheus, grafana",
    features: [
      {
        title: "CI/CD Pipeline Automation",
        description: "Automate code compilation, lint checks, unit tests, and staging deployments on every push.",
        icon: "published_with_changes"
      },
      {
        title: "Infrastructure as Code (IaC)",
        description: "Provision AWS, GCP, or Azure services using declarative Terraform, Pulumi, or CloudFormation templates.",
        icon: "description"
      },
      {
        title: "Kubernetes Orchestration",
        description: "Deploy and manage large microservices setups using Kubernetes cluster structures, ensuring auto-scaling.",
        icon: "grid_view"
      },
      {
        title: "Observability & Alerting",
        description: "Implement metric trackers and logging dashboards (Prometheus, Grafana, ELK) with automatic alert routing.",
        icon: "monitoring"
      }
    ],
    technologies: [
      { name: "Terraform / Ansible", icon: "construction" },
      { name: "Docker / Kubernetes", icon: "grid_view" },
      { name: "AWS / Google Cloud / Azure", icon: "cloud" },
      { name: "GitHub Actions / GitLab CI", icon: "sync_alt" },
      { name: "Prometheus / Grafana", icon: "insights" },
      { name: "Helm / ArgoCD", icon: "sailing" }
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        description: "We review your current cloud setups, deployment procedures, and developer pain points."
      },
      {
        step: "02",
        title: "Pipeline & IaC Modeling",
        description: "We write Terraform manifests and script standard Github Actions or Gitlab pipelines."
      },
      {
        step: "03",
        title: "Continuous Observability",
        description: "We hook up error alerts, system metric monitors, and hand over control to your internal ops."
      }
    ]
  },
  {
    slug: "microservice-portal-development",
    title: "Microservice Portal Development",
    category: "System Engineering",
    shortDescription: "Decoupled, modular portal systems.",
    longDescription: "Avoid the constraints of monolithic systems. We design and build microservice portals that decouple your front-end presentation layers from backend business logic. By wrapping services in lightweight container scripts and managing them via central API gateways, we enable independent deployability, fault isolation, and specialized database setups for each business function.",
    icon: "widgets",
    metaDescription: "Scalable Microservice Portal development. Decouple monoliths into high-performance micro-frontends and robust, decentralized APIs.",
    metaKeywords: "microservices portal, micro-frontends, grpc, rabbitmq, spring cloud, system decoupling, api gateway",
    features: [
      {
        title: "Micro-Frontend Implementations",
        description: "Construct client portals where different modules (billing, support, profile) are deployed independently.",
        icon: "dashboard"
      },
      {
        title: "High-Speed Message Brokers",
        description: "Connect microservices asynchronously using RabbitMQ or Kafka, ensuring zero message loss.",
        icon: "quick_reference_all"
      },
      {
        title: "API Gateways & Service Discovery",
        description: "Route external client traffic cleanly using Kong, Spring Cloud Gateway, or Traefik with rate limiting.",
        icon: "router"
      },
      {
        title: "Database per Service Architecture",
        description: "Implement localized data structures to prevent shared-database bottlenecking and ensure fault isolation.",
        icon: "dns"
      }
    ],
    technologies: [
      { name: "Spring Cloud / Netflix OSS", icon: "cloud" },
      { name: "Docker / Kubernetes", icon: "grid_view" },
      { name: "gRPC / Protobuf", icon: "code" },
      { name: "Apache Kafka / RabbitMQ", icon: "compare_arrows" },
      { name: "Kong / Traefik Gateway", icon: "router" },
      { name: "Next.js / Module Federation", icon: "deployed_code" }
    ],
    process: [
      {
        step: "01",
        title: "Boundary Identification",
        description: "We analyze domain-driven design contexts to separate services into logical sub-domains."
      },
      {
        step: "02",
        title: "Gateway & Inter-Service Setup",
        description: "We configure the communication protocols (gRPC/REST), gateways, and service registries."
      },
      {
        step: "03",
        title: "Modular Deployment",
        description: "We establish individual pipelines to compile, package, and deploy services independently."
      }
    ]
  },
  {
    slug: "react-nextjs",
    title: "React/Next.js Development",
    category: "Frontend Engineering",
    shortDescription: "Next-gen frontends and rendering.",
    longDescription: "Elevate your web frontend by exploiting the full power of React 19 and Next.js. We specialize in building responsive user interfaces utilizing React Server Components (RSC) to minimize client-side JavaScript execution, streaming layouts for dynamic load rendering, and client-side optimizations that make page transition clicks load instantly. We build state-of-the-art web frontends that provide unmatched desktop and mobile performance.",
    icon: "deployed_code",
    metaDescription: "Next-gen React and Next.js development. We engineer blazing-fast, responsive frontends using Server Components, SSR, and Zustand.",
    metaKeywords: "react development, next.js app router, react 19, server components, client-side rendering, nextjs dev",
    features: [
      {
        title: "React Server Components (RSC)",
        description: "Compile and render components on the server to reduce the browser JS payload, accelerating initial page loads.",
        icon: "dns"
      },
      {
        title: "Streaming & Suspense",
        description: "Stream slow data-fetching widgets incrementally, keeping the rest of the layout immediately interactive.",
        icon: "hourglass_empty"
      },
      {
        title: "Advanced State Management",
        description: "Implement performant local and global stores (Zustand, React Context) without triggering redundant render cycles.",
        icon: "account_tree"
      },
      {
        title: "Client-Side Speed Tuning",
        description: "Incorporate image optimization, lazy loading, and code-splitting scripts to achieve perfect Core Web Vitals.",
        icon: "bolt"
      }
    ],
    technologies: [
      { name: "React 19", icon: "code" },
      { name: "Next.js 16 (App Router)", icon: "deployed_code" },
      { name: "TypeScript", icon: "javascript" },
      { name: "TailwindCSS / Vanilla CSS", icon: "palette" },
      { name: "Zustand / Redux Toolkit", icon: "schema" },
      { name: "Jest / React Testing Library", icon: "fact_check" }
    ],
    process: [
      {
        step: "01",
        title: "Component Planning",
        description: "We define the layout structures and classify components into Server vs. Client boundaries."
      },
      {
        step: "02",
        title: "API-Bound Frontend Building",
        description: "We write strongly-typed components, hook up data hooks, and integrate local styling systems."
      },
      {
        step: "03",
        title: "Optimization & Delivery",
        description: "We run bundle analysis, configure cache headers, and deploy optimized static files."
      }
    ]
  },
  {
    slug: "python",
    title: "Python Development",
    category: "System Engineering",
    shortDescription: "Backend APIs and data pipelines.",
    longDescription: "Unlock speed, clean maintainability, and scientific power with custom Python development. We construct rapid, asynchronous REST and GraphQL APIs using frameworks like FastAPI, design pipeline networks to extract and process bulk datasets, and build custom web scraping modules. Our clean, PEP8-compliant code structures ensure that your internal scripts remain extensible and easy to manage.",
    icon: "terminal",
    metaDescription: "Professional Python backend services. Custom FastAPI/Flask development, data pipelines, web scrapers, and automation scripts.",
    metaKeywords: "python backend, fastapi development, web scraping, data processing pipelines, python consulting, rest api",
    features: [
      {
        title: "Asynchronous APIs with FastAPI",
        description: "Build robust backend routers that execute concurrent IO operations, keeping response rates under 50ms.",
        icon: "rocket_launch"
      },
      {
        title: "Robust Data Processing Pipelines",
        description: "Parse, cleanse, and structure large datasets using industry-standard libraries like Pandas and NumPy.",
        icon: "view_list"
      },
      {
        title: "Custom Web Scraping & Parsers",
        description: "Extract unstructured HTML data from target websites cleanly using rotation proxy techniques.",
        icon: "javascript"
      },
      {
        title: "Script Automation & Cron Scheduling",
        description: "Automate recurring backend maintenance tasks, email alerts, and report generations.",
        icon: "schedule"
      }
    ],
    technologies: [
      { name: "Python 3.12+", icon: "code" },
      { name: "FastAPI / Flask / Django", icon: "terminal" },
      { name: "Pandas / NumPy", icon: "analytics" },
      { name: "BeautifulSoup / Playwright", icon: "find_in_page" },
      { name: "PostgreSQL / SQLite", icon: "database" },
      { name: "Celery / Redis", icon: "electric_bolt" }
    ],
    process: [
      {
        step: "01",
        title: "Requirement Gathering",
        description: "We define API schemas, database fields, or extraction targets depending on project scope."
      },
      {
        step: "02",
        title: "Fast Iterative Development",
        description: "We build APIs with automated Swagger docs or script scrapers with robust error retries."
      },
      {
        step: "03",
        title: "Performance Tuning",
        description: "We profile code bottlenecks, optimize database query indices, and containerize scripts."
      }
    ]
  },
  {
    slug: "e-commerce",
    title: "E-Commerce Solutions",
    category: "Web Engineering",
    shortDescription: "Scalable, high-conversion storefronts.",
    longDescription: "Drive web revenue with custom e-commerce engineering. We move businesses away from heavy, slow traditional storefronts toward headless e-commerce systems. By decoupling the checkout frontend from catalog management, we achieve instantaneous product loads, robust page search functionality, seamless mobile checkout paths, and stable integrations with Stripe, PayPal, and local shipping handlers.",
    icon: "shopping_cart",
    metaDescription: "Enterprise-grade headless e-commerce solutions. Build dynamic digital storefronts with Stripe/PayPal integration and fast load times.",
    metaKeywords: "headless ecommerce, shopify headless, nextjs commerce, stripe integration, catalog system, shopping cart",
    features: [
      {
        title: "Headless E-Commerce Frontends",
        description: "Construct storefronts that load in milliseconds using Next.js Commerce, communicating with backends via APIs.",
        icon: "bolt"
      },
      {
        title: "Stripe & Payment Gateways",
        description: "Configure multi-currency payment forms with perfect card validation, fraud filters, and webhooks.",
        icon: "credit_card"
      },
      {
        title: "Catalog & Multi-Filter Search",
        description: "Implement fast search bars (Algolia, Meilisearch) allowing clients to filter through products instantly.",
        icon: "manage_search"
      },
      {
        title: "Automated Order Operations",
        description: "Connect shop purchases directly to inventory monitors, email dispatchers, and external logistics APIs.",
        icon: "local_shipping"
      }
    ],
    technologies: [
      { name: "Liferay Commerce", icon: "deployed_code" },
      { name: "Stripe API / PayPal", icon: "credit_card" },
      { name: "Shopify Custom / Saleor", icon: "shopping_cart" },
      { name: "Algolia / Meilisearch", icon: "search" },
      { name: "Node.js / GraphQL", icon: "terminal" },
      { name: "PostgreSQL / Redis", icon: "database" }
    ],
    process: [
      {
        step: "01",
        title: "Checkout Flow Design",
        description: "We map catalog schemas, discount rules, checkout pathways, and email dispatch templates."
      },
      {
        step: "02",
        title: "Platform Setup & API Hooking",
        description: "We deploy the headless inventory engine and build the interactive checkout pages."
      },
      {
        step: "03",
        title: "Compliance & Security Audits",
        description: "We run security checks on checkout forms, test payment webhooks, and launch."
      }
    ]
  },
  {
    slug: "architecture-qa",
    title: "Architecture & QA",
    category: "System Engineering",
    shortDescription: "System audits and automated testing.",
    longDescription: "Ensure that your digital platforms remain robust under heavy user load and secure against malicious attacks. We offer dual services: structural system architecture planning (mapping out database replication, system boundaries, and security firewalls) and automated Quality Assurance (QA). We write automated test suites that inspect user actions on every deployment code push, catching bugs before they reach customers.",
    icon: "architecture",
    metaDescription: "Enterprise system architecture design and automated QA testing. We ensure high-availability systems with robust Playwright/Cypress test coverage.",
    metaKeywords: "system architecture, automation testing, playwright tests, load testing, security audit, cypress qa",
    features: [
      {
        title: "System Architecture Audits",
        description: "Identify database bottlenecks, cache leakage, and memory consumption issues in running applications.",
        icon: "fact_check"
      },
      {
        title: "End-to-End Automated Testing",
        description: "Write automated Playwright or Cypress scripts that simulate user log-ins, cart additions, and forms.",
        icon: "rule"
      },
      {
        title: "Performance & Load Testing",
        description: "Stress-test servers using JMeter/k6, simulating thousands of concurrent requests to identify breaking thresholds.",
        icon: "speed"
      },
      {
        title: "Security & Vulnerability Scans",
        description: "Inspect APIs and HTML frontends for cross-site scripting (XSS), SQL injections, and outdated library dependencies.",
        icon: "admin_panel_settings"
      }
    ],
    technologies: [
      { name: "Playwright / Cypress", icon: "fact_check" },
      { name: "k6 / Apache JMeter", icon: "bolt" },
      { name: "SonarQube", icon: "terminal" },
      { name: "OWASP ZAP", icon: "security" },
      { name: "Docker / GitLab", icon: "grid_view" },
      { name: "Lucid / Miro Blueprinting", icon: "draw" }
    ],
    process: [
      {
        step: "01",
        title: "Audit & Scenario Mapping",
        description: "We map out system boundaries and trace the most critical user navigation paths for automation."
      },
      {
        step: "02",
        title: "Test Engineering",
        description: "We write maintainable page-object testing scripts and hook them into CI pipeline runners."
      },
      {
        step: "03",
        title: "Continuous Quality Reporting",
        description: "We deliver code quality visual dashboards and configure automated build failures on testing regressions."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
