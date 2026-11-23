import Image from "next/image";
import { introCustomerLogos } from "./customer-logos";
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
          {introCustomerLogos.map(({ file, name }) => (
            <li className={styles.logoTile} key={file}>
              <div className={styles.logoMark}>
                <Image src={`/intro-logos/${file}`} alt="" fill sizes="100px" />
              </div>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
