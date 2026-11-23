import Image from "next/image";
import styles from "./intro.module.css";

const outcomes = [
  { title: "Enterprise systems", detail: "Platforms / Cloud" },
  { title: "AI intelligence", detail: "Agents / RAG / MCP" },
  { title: "Digital experiences", detail: "Web / Spatial 3D" },
];

export default function IntroHero() {
  return (
    <header className={styles.hero}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Introducing Pyronite / Engineering Studio</p>
            <h1>Ideas are easy.<br />Building them is <span>our craft.</span></h1>
            <p className={styles.lead}>
              We turn complex business challenges into intelligent, working systems&mdash;from enterprise
              platforms and AI-driven workflows to immersive digital experiences.
            </p>
            <div className={styles.actions}>
              <a href="#work" className={styles.primaryButton}>Explore our work <span aria-hidden="true">&rarr;</span></a>
              <a href="#about" className={styles.secondaryButton}>Discover Pyronite <span aria-hidden="true">&darr;</span></a>
            </div>
          </div>
          <div className={styles.orbit}>
            <svg viewBox="0 0 480 420" className={styles.orbitLines} aria-hidden="true">
              <circle cx="240" cy="210" r="177" className={styles.orbitOuter} />
              <circle cx="240" cy="210" r="144" strokeDasharray="2 7" />
              <circle cx="240" cy="210" r="105" />
              <ellipse cx="240" cy="210" rx="190" ry="76" transform="rotate(-32 240 210)" />
              <ellipse cx="240" cy="210" rx="187" ry="68" transform="rotate(58 240 210)" />
              <path d="M92 101h55l93 109 88-65h74M240 210l-91 109H92" />
              <circle cx="147" cy="101" r="4" className={styles.orbitNode} />
              <circle cx="328" cy="145" r="4" className={styles.orbitNode} />
              <circle cx="149" cy="319" r="4" className={styles.orbitNode} />
            </svg>
            <div className={styles.orbitCore}>
              <Image src="/logo.png" width={60} height={60} alt="" loading="eager" />
              <span>Pyronite / Core</span>
            </div>
            <ul className={styles.outcomes} aria-label="Engineering disciplines">
              {outcomes.map(({ title, detail }) => (
                <li key={title}><strong>{title}</strong><span>{detail}</span></li>
              ))}
            </ul>
          </div>
      </div>
    </header>
  );
}
