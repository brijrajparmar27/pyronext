import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

const values = ["Architecture-first", "Problem-led engineering", "Secure by design", "Build / Validate / Improve"];

const disciplines = [
  {
    icon: "domain",
    title: "Enterprise platforms & modernization",
    description: "Modernize existing platforms without losing the workflows your teams depend on. We work with Liferay DXP, Objects, OSGi, Java and Spring services, headless APIs, identity, enterprise integration, and performance.",
  },
  {
    icon: "auto_awesome",
    title: "AI agents & knowledge intelligence",
    description: "Connect AI assistants to the knowledge and tools they need. Bring together MCP, retrieval-augmented generation, embeddings, document search, and workflow automation with permissions and auditability in mind.",
  },
  {
    icon: "view_in_ar",
    title: "Web products & spatial experiences",
    description: "Build React and Next.js products with TypeScript, from responsive dashboards and cinematic web experiences to interactive property walkthroughs and spatial prototypes.",
  },
  {
    icon: "hub",
    title: "APIs, data, cloud & delivery",
    description: "Connect systems with Python and FastAPI, Elasticsearch, and data pipelines. Use Docker, Kubernetes, testing, diagnostics, and CI/CD to make the software easier to operate.",
  },
];

const stack = [
  { title: "Enterprise", tools: ["Liferay DXP 7.4+", "Liferay Objects", "OSGi", "Java & Spring Boot", "REST & GraphQL", "OAuth2"] },
  { title: "Intelligence", tools: ["Python & FastAPI", "MCP", "RAG & vector embeddings", "Elasticsearch & Chroma", "Model APIs"] },
  { title: "Web & interactive", tools: ["React & Next.js", "TypeScript & JavaScript", "Interactive 3D / WebGL"] },
  { title: "Cloud & engineering", tools: ["Docker & Kubernetes", "CI/CD", "Automated testing", "Observability", "Data integration"] },
];

const experiments = [
  "Agent orchestration", "Local LLMs", "AI-native storytelling", "Gaussian Splatting / 3D reconstruction",
  "Real-time speech & dubbing", "Computer-vision workflows",
];

export function AboutSection() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={`${styles.container} ${styles.split}`}>
        <SectionHeading id="about-heading" label="Who we are" title={<>Not just another <em>IT services</em> company.</>} />
        <div className={styles.manifesto}>
          <p>Pyronite is a technology engineering studio working at the intersection of enterprise software, applied artificial intelligence, and next-generation user experiences.</p>
          <p>Our foundation is deep enterprise platform engineering. Our direction is broader: give business systems intelligence, make complicated processes simpler, and turn ideas into experiences people can actually use.</p>
          <ul className={styles.tags} aria-label="Engineering values">
            {values.map((value) => <li key={value}>{value}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function DisciplinesSection() {
  return (
    <section id="expertise" className={styles.section} aria-labelledby="expertise-heading">
      <div className={styles.container}>
        <SectionHeading id="expertise-heading" label="Core disciplines" title={<>Four disciplines.<br /><em>One engineering mindset.</em></>} />
        <ul className={styles.disciplineGrid}>
          {disciplines.map(({ icon, title, description }, index) => (
            <li className={styles.panel} key={title}>
              <div className={styles.panelTop}>
                <span className={styles.eyebrow} aria-hidden="true">/ 0{index + 1}</span>
                <span className={`material-symbols-outlined ${styles.cardIcon}`} aria-hidden="true">{icon}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function StackSection() {
  return (
    <section id="stack" className={styles.section} aria-labelledby="stack-heading">
      <div className={styles.container}>
        <SectionHeading
          id="stack-heading"
          label="Technology stack"
          title={<>Different problems.<br /><em>The right tools for each.</em></>}
          description="We choose tools that fit the system, the team that will maintain it, and the people who will use it."
        />
        <div className={styles.stackGrid}>
          {stack.map(({ title, tools }) => (
            <div className={styles.panel} key={title}>
              <h3>{title}</h3>
              <ul className={styles.toolList}>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LabSection() {
  return (
    <section id="lab" className={styles.section} aria-labelledby="lab-heading">
      <div className={`${styles.container} ${styles.split}`}>
        <SectionHeading
          id="lab-heading"
          label="Pyronite Lab / Exploratory R&D"
          title={<>Curiosity is part of <em>the job.</em></>}
          description="Beyond commissioned systems, we explore technologies that may reshape how people work, visualize, and communicate. These experiments are not finished client products."
        />
        <div className={`${styles.panel} ${styles.labPanel}`}>
          <p className={styles.eyebrow}>Research interests</p>
          <ul className={styles.tags}>{experiments.map((experiment) => <li key={experiment}>{experiment}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className={`${styles.section} ${styles.experience}`} aria-labelledby="experience-heading">
      <div className={`${styles.container} ${styles.split}`}>
        <p className={styles.eyebrow}>Our engineering foundation</p>
        <SectionHeading
          id="experience-heading"
          label="Experience"
          title="Grounded in enterprise platform engineering."
          description="Our foundation is hands-on work with portal architecture, identity and access, integrations, and platform modernization. It informs how we design newer AI and immersive experiences around real operational needs."
        />
      </div>
    </section>
  );
}
