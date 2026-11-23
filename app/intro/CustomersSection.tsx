import Image from "next/image";
import { introCustomerLogos } from "./customer-logos";
import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

export default function CustomersSection() {
  return (
    <section id="customers" className={`${styles.section} ${styles.existingSection}`} aria-labelledby="customers-heading">
      <div className={styles.container}>
        <SectionHeading
          id="customers-heading"
          label="01 / Industry experience"
          title="Who we work with"
          description="Our work spans financial services, government technology, logistics, and commerce across Asia-Pacific, Europe, the Middle East, and Africa."
        />
        <ul className={styles.logoGrid} aria-label="Organizations represented in the portfolio" aria-describedby="logo-context">
          {introCustomerLogos.map(({ file, name }) => (
            <li className={styles.logoTile} key={file}>
              <div className={styles.logoMark}>
                <Image src={`/intro-logos/${file}`} alt="" fill sizes="100px" />
              </div>
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <p className={styles.logoNote} id="logo-context">Logos are shown for context and do not imply a direct contract or endorsement.</p>
      </div>
    </section>
  );
}
