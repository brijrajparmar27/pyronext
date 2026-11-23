import Image from "next/image";
import TrackedLink from "../components/TrackedLink";
import styles from "./intro.module.css";

const sections = [
  { id: "customers", label: "Customers" },
  { id: "services", label: "Services" },
  { id: "solutions", label: "Solutions" },
  { id: "approach", label: "How we work" },
];

export default function IntroHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>AI &middot; Software &middot; Simulation</p>
            <h1>Meet <span>Pyronite.</span></h1>
            <p className={styles.heroTagline}>We build intelligent products and the systems behind them.</p>
            <p className={styles.lead}>
              From AI assistants and custom software to cloud infrastructure and interactive 3D
              simulations, we choose the right tools for what you need to build.
            </p>
            <div className={styles.actions}>
              <TrackedLink href="/connect" className={styles.primaryButton} eventLabel="Intro Hero: Contact Pyronite">
                Contact us <span aria-hidden="true">&rarr;</span>
              </TrackedLink>
              <a className={styles.textLink} href="#services">
                Explore our services <span aria-hidden="true">&darr;</span>
              </a>
            </div>
          </div>
          <div className={styles.heroBanner}>
            <Image
              src="/intro-tech-banner.svg"
              alt=""
              fill
              sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1320px) 40vw, 480px"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
        <nav className={styles.sectionNav} aria-label="On this page">
          <p>On this page</p>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
