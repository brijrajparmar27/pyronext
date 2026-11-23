import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

const steps = [
  { title: "Understand", description: "Define the problem, users, workflows, and constraints before committing to a solution." },
  { title: "Architect", description: "Map the data, integrations, roles, and permissions. Agree on what to test and how to operate the system." },
  { title: "Build & test", description: "Build in small increments and validate with realistic data, actual integrations, and feedback from users." },
  { title: "Improve", description: "Review what works in practice. Refine performance, usability, and operational fit as we learn." },
];

export default function ApproachSection() {
  return (
    <section id="approach" className={styles.section} aria-labelledby="approach-heading">
      <div className={styles.container}>
        <SectionHeading
          id="approach-heading"
          label="Engineering method"
          title={<>From a clear scope<br /><em>to a system you can test.</em></>}
          description="We test assumptions early, work with real integrations, and design for the team that will operate the system."
        />
        <ol className={styles.stackGrid} aria-label="Engineering steps">
          {steps.map(({ title, description }, index) => (
            <li className={styles.panel} key={title}>
              <p className={styles.eyebrow} aria-hidden="true">Step 0{index + 1}</p>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
