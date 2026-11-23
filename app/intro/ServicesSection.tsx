import { services } from "../data/services";
import CatalogSection from "./CatalogSection";

const featuredSlugs = new Set([
  "enterprise-development",
  "liferay-migration-upgrade",
  "ai-mcp",
  "devops",
  "react-nextjs",
  "seo-geo-optimization",
  "civil-infrastructure-3d-modeling",
]);

export default function ServicesSection() {
  return (
    <CatalogSection
      id="services"
      label="02 / Our services"
      title="What we do"
      description="We build and modernize digital platforms, integrate AI, and turn civil infrastructure designs into interactive 3D models and simulations."
      directoryHref="/services"
      directoryLabel="View all services"
      items={services.filter(({ slug }) => featuredSlugs.has(slug))}
    />
  );
}
