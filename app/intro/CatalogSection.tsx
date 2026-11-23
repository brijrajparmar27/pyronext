import Link from "next/link";
import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

interface CatalogSectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  directoryHref: string;
  directoryLabel: string;
  items: ReadonlyArray<{
    slug: string;
    title: string;
    icon: string;
    shortDescription: string;
  }>;
}

export default function CatalogSection({
  id, label, title, description, directoryHref, directoryLabel, items,
}: CatalogSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <div className={styles.container}>
        <SectionHeading id={headingId} label={label} title={title} description={description} />
        <ul className={styles.cardGrid}>
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={`${directoryHref}/${item.slug}`} prefetch={false} className={styles.cardLink}>
                <span className={`material-symbols-outlined ${styles.cardIcon}`} aria-hidden="true">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                </div>
                <span className={styles.cardArrow} aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href={directoryHref} className={styles.textLink}>
          {directoryLabel} <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
