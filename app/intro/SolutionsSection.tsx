import { solutions } from "../data/solutions";
import CatalogSection from "./CatalogSection";

export default function SolutionsSection() {
  return (
    <CatalogSection
      id="solutions"
      label="03 / Our solutions"
      title="What you can build with us"
      description="Give customers, employees, and partners one place to do what they came to do, whether that's managing an account, sharing information, or placing an order."
      directoryHref="/solutions"
      directoryLabel="View all solutions"
      items={solutions}
    />
  );
}
