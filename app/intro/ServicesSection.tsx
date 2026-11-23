import CatalogSection from "./CatalogSection";

const featuredServices = [
  {
    slug: "ai-mcp",
    title: "AI & Workflow Automation",
    icon: "auto_awesome",
    shortDescription: "Build AI assistants and automate workflows with models connected to your business data and tools.",
  },
  {
    slug: "react-nextjs",
    title: "Web & Digital Products",
    icon: "web",
    shortDescription: "Build fast, accessible web apps and digital experiences with React and Next.js.",
  },
  {
    slug: "enterprise-development",
    title: "Custom Software & Modernization",
    icon: "domain",
    shortDescription: "Build custom applications, connect existing systems, and modernize legacy software with tools like Java and Spring Boot.",
  },
  {
    slug: "python",
    title: "APIs & Data Engineering",
    icon: "data_object",
    shortDescription: "Build Python and FastAPI backends, data pipelines, and integrations.",
  },
  {
    slug: "devops",
    title: "Cloud & DevOps",
    icon: "cloud",
    shortDescription: "Deploy and operate software with CI/CD, Docker, Kubernetes, and cloud infrastructure.",
  },
  {
    slug: "civil-infrastructure-3d-modeling",
    title: "Civil Infrastructure 3D Modeling & Simulation",
    icon: "view_in_ar",
    shortDescription: "Turn CAD and BIM designs into site-scale 3D models, walkthroughs, and construction simulations.",
  },
  {
    slug: "e-commerce",
    title: "Commerce & Integrations",
    icon: "shopping_cart",
    shortDescription: "Connect storefronts, catalogs, payments, and order workflows into a single shopping experience.",
  },
  {
    slug: "seo-geo-optimization",
    title: "Search & AI Discovery",
    icon: "travel_explore",
    shortDescription: "Help people find your products and content in traditional search and AI-generated answers.",
  },
];

export default function ServicesSection() {
  return (
    <CatalogSection
      id="services"
      label="02 / Our services"
      title="What we do"
      description="We work across the full stack, from the interface people use to the models, data, and infrastructure that power it."
      directoryHref="/services"
      directoryLabel="View all services"
      items={featuredServices}
    />
  );
}
