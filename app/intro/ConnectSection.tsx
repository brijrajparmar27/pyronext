import Link from "next/link";
import TrackedLink from "../components/TrackedLink";
import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

export default function ConnectSection() {
  return (
    <section id="contact" className={`${styles.section} ${styles.contactSection}`} aria-labelledby="contact-heading">
      <div className={styles.container}>
        <div className={styles.contactPanel}>
          <SectionHeading
            id="contact-heading"
            label="05 / Connect"
            title="Let's talk about your project."
            description="Tell us what you're building, upgrading, or looking to improve. We'll help you work out where to start."
          />
          <div className={styles.actions}>
            <TrackedLink href="/connect" className={styles.primaryButton} eventLabel="Intro Connect: Contact Pyronite">
              Contact us <span aria-hidden="true">&rarr;</span>
            </TrackedLink>
            <a className={styles.textLink} href="mailto:business@pyronite.in">business@pyronite.in</a>
          </div>
          <div className={styles.resourceLinks}>
            <Link href="/blogs">Engineering blog <span aria-hidden="true">&rarr;</span></Link>
            <Link href="/faq">FAQ <span aria-hidden="true">&rarr;</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
