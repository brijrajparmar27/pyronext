import Link from "next/link";
import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

const engagements = [
  { title: "Extend your team", description: "Bring in software, AI, data, or cloud engineers to work alongside your team." },
  { title: "Build with a dedicated squad", description: "Work with a cross-functional team that can take a project from design through delivery." },
  { title: "Deliver a defined project", description: "Agree on the scope and milestones up front for a new build, integration, or modernization." },
];

export default function ApproachSection() {
  return (
    <section id="approach" className={styles.section} aria-labelledby="approach-heading">
      <div className={styles.container}>
        <SectionHeading
          id="approach-heading"
          label="04 / Our approach"
          title="How we work with you"
          description="We start with the problem, not a preferred stack. We choose tools that fit your team and systems, then use open interfaces and automated checks to keep the result maintainable."
        />
        <ul className={styles.engagementGrid} aria-label="Ways to work with Pyronite">
          {engagements.map(({ title, description }, index) => (
            <li key={title}>
              <span className={styles.eyebrow} aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <Link className={styles.textLink} href="/connect">Talk about your project <span aria-hidden="true">&rarr;</span></Link>
          <Link className={styles.textLink} href="/standard">Engineering standards <span aria-hidden="true">&rarr;</span></Link>
          <Link className={styles.textLink} href="/philosophy">Our philosophy <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </section>
  );
}
