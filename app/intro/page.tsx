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
    "Meet the team behind Pyronite Tech. Explore our enterprise customers, Liferay DXP and open-source services, and ways to work with us.",
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
