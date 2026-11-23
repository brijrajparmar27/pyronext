"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import TrackedLink from "../components/TrackedLink";
import { getMaturityLabel, projectFilters, projects, type ProjectFilter } from "./projects";
import SectionHeading from "./SectionHeading";
import styles from "./intro.module.css";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const { id, title, maturity, description, details, tags, category, imageDescription } = project;
  const status = getMaturityLabel(maturity);

  function openDetails() {
    dialog.current?.showModal();
    closeButton.current?.focus();
  }

  function keepTabInDialog(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "Tab") return;
    const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, a[href]");
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <article className={styles.project} aria-labelledby={`${id}-heading`}>
      <figure className={styles.projectFigure}>
        <Image
          src={`/intro-work/${id}.webp`}
          width={1120}
          height={630}
          sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1270px) 48vw, 600px"
          alt={imageDescription}
        />
        <figcaption className={styles.imageCaption}>Project illustration</figcaption>
      </figure>
      <div className={styles.projectBody}>
        <div className={styles.projectMeta}>
          <span className={styles.maturity} data-maturity={maturity}>{status}</span>
          <span>{projectFilters.find((filter) => filter.id === category)?.label}</span>
        </div>
        <h3 id={`${id}-heading`}>{title}</h3>
        <p>{description}</p>
        <ul className={styles.tags} aria-label="Technology and scope">
          {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <button
          type="button"
          className={styles.detailButton}
          aria-haspopup="dialog"
          aria-label={`View project details: ${title}`}
          onClick={openDetails}
          ref={trigger}
        >
          View project details <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={`${id}-dialog-title`}
        aria-describedby={`${id}-dialog-description`}
        onKeyDown={keepTabInDialog}
        onClose={() => trigger.current?.focus()}
      >
        <button type="button" className={styles.closeButton} ref={closeButton} onClick={() => dialog.current?.close()} aria-label="Close project details">
          <span aria-hidden="true">&times;</span>
        </button>
        <span className={styles.maturity} data-maturity={maturity}>{status}</span>
        <h2 id={`${id}-dialog-title`}>{title}</h2>
        <p id={`${id}-dialog-description`}>{description}</p>
        <ul className={styles.toolList}>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
        <div className={styles.actions}>
          <TrackedLink className={styles.primaryButton} href="/connect" eventLabel={`Intro work: Discuss ${title}`}>
            Discuss a related project <span aria-hidden="true">&rarr;</span>
          </TrackedLink>
        </div>
      </dialog>
    </article>
  );
}

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const visible = projects.filter(({ category }) => activeFilter === "all" || category === activeFilter);

  return (
    <section id="work" className={`${styles.section} ${styles.work}`} aria-labelledby="work-heading">
      <div className={styles.container}>
        <SectionHeading
          id="work-heading"
          label="Selected work"
          title={<>Technology is more convincing<br /><em>when you can see it.</em></>}
          description="See what we're building, what runs as a browser demonstration, and what we're proposing for a pilot."
        />
        <div className={styles.filters} role="group" aria-label="Filter selected work">
          {projectFilters.map(({ id, label }) => (
            <button type="button" key={id} aria-pressed={id === activeFilter} onClick={() => setActiveFilter(id)}>
              {label}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">{visible.length} {visible.length === 1 ? "project" : "projects"} shown</p>
        <div className={styles.projectGrid}>
          {visible.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
