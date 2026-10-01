"use client";

import { HERO_CHECKPOINTS } from "./heroContent";
import * as gtag from "../../utils/gtag";

/**
 * Foreground hero copy. Pure normal-flow content — no canvas, no pin, no
 * scroll-jacking. The animated backdrop lives in
 * app/components/background/BackgroundFrameCanvas.tsx (a fixed, global
 * element) and is scrubbed by scrolling through this section plus the
 * Industry Footprint section right after it (see #scrollytelling-zone in
 * page.tsx). Each block below just fades up into view via the site-wide
 * `.gsap-reveal` IntersectionObserver animation (see GSAPScrollTrigger.tsx).
 */
export default function ScrollytellingHero() {
  return (
    <section className="pyro-hero" aria-label="Pyronite — Engineering the Future Internet">
      <div className="pyro-hero-scrollcue" aria-hidden="true">
        <span>SCROLL TO INITIATE</span>
        <span className="pyro-hero-scrollcue-line" />
      </div>

      {HERO_CHECKPOINTS.map((cp, i) => (
        <div key={cp.id} className="pyro-hero-checkpoint gsap-reveal">
          <span className="pyro-hero-eyebrow">{cp.eyebrow}</span>
          {i === 0 ? (
            <h1 className="pyro-hero-heading" dangerouslySetInnerHTML={{ __html: cp.heading }} />
          ) : (
            <h2 className="pyro-hero-heading" dangerouslySetInnerHTML={{ __html: cp.heading }} />
          )}
          <p className="pyro-hero-sub">{cp.sub}</p>
          {cp.cta && (
            <a
              href={cp.cta.href}
              className="pyro-hero-cta"
              onClick={() => gtag.event("cta_click", { event_label: "hero_initiate_project", event_category: "CTA" })}
            >
              {cp.cta.label}
            </a>
          )}
        </div>
      ))}

      <style>{`
        .pyro-hero {
          --hero-cyan: #35e6ff;
          --hero-amber: var(--primary, #ec5b13);
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 14rem;
          /* NOTE: <main> (layout.tsx) already applies padding-top:
             var(--nav-height) to clear the fixed navbar — don't add it
             again here, just a small breathing gap. */
          padding: 2.5rem 4rem 10rem;
        }

        .pyro-hero-checkpoint {
          position: relative;
          max-width: 760px;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-height: 48vh;
          justify-content: center;
        }

        .pyro-hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 3px;
          color: var(--hero-cyan);
          text-transform: uppercase;
        }

        .pyro-hero-heading {
          font-size: clamp(2.25rem, 4.6vw, 3.8rem);
          font-weight: 700;
          line-height: 1.05;
          text-transform: uppercase;
          letter-spacing: -1px;
          color: #f5f5f5;
        }

        .pyro-hero-heading span {
          color: var(--hero-amber);
          text-shadow: 0 0 24px rgba(236, 91, 19, 0.45);
        }

        .pyro-hero-sub {
          font-size: 1.1rem;
          font-weight: 300;
          max-width: 480px;
          color: rgba(245, 245, 245, 0.75);
          line-height: 1.7;
        }

        .pyro-hero-cta {
          margin-top: 0.5rem;
          align-self: flex-start;
          padding: 0.9rem 1.75rem;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #080b10;
          background: var(--hero-cyan);
          border: 1px solid var(--hero-cyan);
          transition: background 0.3s ease, color 0.3s ease;
        }

        .pyro-hero-cta:hover {
          background: transparent;
          color: var(--hero-cyan);
        }

        .pyro-hero-scrollcue {
          position: fixed;
          left: 2.5rem;
          bottom: 2.5rem;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          width: fit-content;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 3px;
          color: rgba(245, 245, 245, 0.6);
          pointer-events: none;
        }

        .pyro-hero-scrollcue-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(180deg, var(--hero-cyan), transparent);
          animation: pyro-hero-scrollcue-pulse 1.8s ease-in-out infinite;
        }

        @keyframes pyro-hero-scrollcue-pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        @media (max-width: 767px) {
          .pyro-hero {
            gap: 8rem;
            padding: 1.5rem 1.5rem 5rem;
          }
          .pyro-hero-checkpoint { min-height: 0; }
          .pyro-hero-heading { font-size: clamp(2rem, 7vw, 2.75rem); }
          .pyro-hero-scrollcue { display: none; }
        }
      `}</style>
    </section>
  );
}
