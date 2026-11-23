import { solutions } from "../data/solutions";
import CatalogSection from "./CatalogSection";

export default function SolutionsSection() {
  return (
    <CatalogSection
      id="solutions"
      label="03 / Our solutions"
      title="What you can build with us"
      description="Build focused digital experiences for customers, employees, and partners, from self-service hubs and internal workspaces to supplier networks and headless storefronts."
      directoryHref="/solutions"
      directoryLabel="View all solutions"
      items={solutions}
    />
  );
}
