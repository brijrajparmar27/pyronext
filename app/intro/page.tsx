import type { Metadata } from "next";
import ApproachSection from "./ApproachSection";
import ConnectSection from "./ConnectSection";
import CustomersSection from "./CustomersSection";
import IntroHero from "./IntroHero";
import ServicesSection from "./ServicesSection";
import { AboutSection, DisciplinesSection, ExperienceSection, LabSection, StackSection } from "./StudioSections";
import WorkSection from "./WorkSection";
import styles from "./intro.module.css";

export const metadata: Metadata = {
  title: "Meet Pyronite | Engineering Studio",
  description:
    "Meet Pyronite, an engineering studio for enterprise platforms, applied AI, and interactive digital experiences. Explore selected work, demos, and research.",
  robots: { index: false, follow: false },
  alternates: null,
  openGraph: null,
  twitter: null,
};

export default function IntroPage() {
  return (
    <div className={styles.page}>
      <IntroHero />
      <AboutSection />
      <DisciplinesSection />
      <WorkSection />
      <StackSection />
      <ApproachSection />
      <LabSection />
      <ExperienceSection />
      <CustomersSection />
      <ServicesSection />
      <ConnectSection />
    </div>
  );
}
