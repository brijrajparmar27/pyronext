import Image from "next/image";
import { customerLogos } from "../data/customer-logos";
import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

export default function CustomersSection() {
  return (
    <section id="customers" className={styles.section} aria-labelledby="customers-heading">
      <div className={styles.container}>
        <SectionHeading
          id="customers-heading"
          label="01 / Our customers"
          title="Who we work with"
          description="Our work spans financial services, government technology, logistics, and commerce across Asia-Pacific, Europe, the Middle East, and Africa."
        />
        <ul className={styles.logoGrid} aria-label="Featured customers and partners">
          {customerLogos.map(({ src, alt }) => (
            <li className={styles.logoTile} key={src}>
              <div className={styles.logoMark}>
                <Image src={src} alt="" fill sizes="100px" />
              </div>
              <span>{alt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
