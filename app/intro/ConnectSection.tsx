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
            label="Start a conversation"
            title={<>Have a complex idea?<br /><em>Let&apos;s make it real.</em></>}
            description="Whether it's an enterprise portal, an AI workflow, a new digital product, or an interactive experience, bring the challenge. We'll discuss a practical starting point."
          />
          <div className={styles.actions}>
            <TrackedLink href="/connect" className={styles.primaryButton} eventLabel="Intro Connect: Contact Pyronite">
              Discuss your project <span aria-hidden="true">&rarr;</span>
            </TrackedLink>
            <a className={styles.secondaryButton} href="mailto:business@pyronite.in">Email Pyronite</a>
          </div>
        </div>
      </div>
    </section>
  );
}
