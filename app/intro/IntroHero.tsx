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
            <p className={styles.eyebrow}>Enterprise engineering &middot; Liferay DXP</p>
            <h1>Meet <span>Pyronite.</span></h1>
            <p className={styles.heroTagline}>We build and modernize enterprise digital platforms.</p>
            <p className={styles.lead}>
              We bring together Liferay DXP, Next.js, and open-source engineering to build portals,
              modernize legacy systems, and connect the applications your business relies on.
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
          <div className={styles.heroPhoto}>
            <Image
              src="/liferay-summit.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) calc(100vw - 2.5rem), (max-width: 1320px) 40vw, 480px"
              loading="eager"
              fetchPriority="high"
            />
            <div className={styles.photoCaption}>Liferay community summit</div>
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
