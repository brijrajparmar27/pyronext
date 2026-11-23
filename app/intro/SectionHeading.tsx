import styles from "./intro.module.css";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description: string;
}

export default function SectionHeading({ id, label, title, description }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{label}</p>
      <h2 id={id}>{title}</h2>
      <p className={styles.lead}>{description}</p>
    </div>
  );
}
