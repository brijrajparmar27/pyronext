import { services } from "../data/services";
import CatalogSection from "./CatalogSection";

const featuredSlugs = new Set([
  "enterprise-development",
  "liferay-migration-upgrade",
  "ai-mcp",
  "devops",
  "react-nextjs",
  "seo-geo-optimization",
]);

export default function ServicesSection() {
  return (
    <CatalogSection
      id="services"
      label="02 / Our services"
      title="What we do"
      description="From Liferay upgrades and React builds to AI integrations, cloud operations, and search optimization, we help teams build new platforms and improve the ones they already run."
      directoryHref="/services"
      directoryLabel="View all services"
      items={services.filter(({ slug }) => featuredSlugs.has(slug))}
    />
  );
}
