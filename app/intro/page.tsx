import type { Metadata } from "next";
import ApproachSection from "./ApproachSection";
import ConnectSection from "./ConnectSection";
import CustomersSection from "./CustomersSection";
import IntroHero from "./IntroHero";
import ServicesSection from "./ServicesSection";
import SolutionsSection from "./SolutionsSection";
import styles from "./intro.module.css";

export const metadata: Metadata = {
  title: "Meet Pyronite",
  description:
    "Meet Pyronite Tech and explore our work across AI and automation, full-stack software, cloud infrastructure, and 3D modeling and simulation.",
  robots: { index: false, follow: false },
  alternates: null,
  openGraph: null,
  twitter: null,
};

export default function IntroPage() {
  return (
    <div className={styles.page}>
      <IntroHero />
      <CustomersSection />
      <ServicesSection />
      <SolutionsSection />
      <ApproachSection />
      <ConnectSection />
    </div>
  );
}
