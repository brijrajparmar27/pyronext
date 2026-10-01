"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FrameSequencePlayer } from "./FrameSequencePlayer";
import { HERO_FRAME_COUNT, getHeroFrameUrl } from "../hero/heroContent";

/**
 * Global fixed scroll-scrubbed background.
 *
 * - <canvas id="hero-canvas"> is pinned to the viewport (position: fixed,
 *   z-index: -1, pointer-events: none) behind every page section.
 * - A GSAP ScrollTrigger (scrub: 1.5) maps scroll progress across the
 *   `#scrollytelling-zone` wrapper (Hero + Industry Footprint sections in
 *   page.tsx) onto the frame index — the sequence plays once across that
 *   zone, then holds on its last frame as a static backdrop for the rest of
 *   the page (sections below it already paint opaque card/surface
 *   backgrounds, so nothing further is needed there).
 * - Frames preload in the background; the canvas itself stays visible from
 *   the start (its solid fallback colour matches the page's own dark base,
 *   so there's nothing to "flash in" — frames simply paint over it as they
 *   arrive).
 * - The canvas is scrubbed out entirely — opacity `1 → 0`, as an explicit
 *   `fromTo` so it is always well-defined and reverses cleanly when the user
 *   scrolls back up — across `#footprint-section` → `#bridging-governance-section`,
 *   so the footage is fully gone, not just dimmed, by the time static content
 *   sections begin.
 * - A separate scroll-scrubbed flat dark overlay (no gradient/vignette
 *   shape — just a plain solid fade, matching the site's own base colour)
 *   darkens over that same stretch so the hand-off from footage to flat
 *   content reads as a clean fade rather than a visible "box", and lifts
 *   again right as `#particles-zone-start` (ParticlesBackdrop's hand-off
 *   point) comes into view, so the particle scene reads bright.
 */
export default function BackgroundFrameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const [assetsFailed, setAssetsFailed] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Only the home page ships the video hero + #scrollytelling-zone. Every
    // other route keeps the ambient particle background (ParticlesBackdrop)
    // as its sole backdrop, exactly as it was before this video hero existed.
    if (!isHome) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add(
      { isMotionSafe: "(prefers-reduced-motion: no-preference)" },
      (context) => {
        const { isMotionSafe } = context.conditions as { isMotionSafe: boolean };
        const canvas = canvasRef.current;
        if (!canvas) return;

        const player = new FrameSequencePlayer({
          canvas,
          frameCount: HERO_FRAME_COUNT,
          getFrameUrl: getHeroFrameUrl,
          maxDpr: 2,
          lerpFactor: 0.12,
          zoom: 1.02,
          focalY: 0.28, // stronger upward bias from dead-center (0.5)
          onProgress: (loaded, total) => {
            const ratio = loaded / total;
            setLoadProgress(ratio);
            if (ratio >= 1) setAllLoaded(true);
          },
          onError: () => {
            setAssetsFailed(true);
            setAllLoaded(true); // stop gating the UI on a load that will never finish
          },
        });

        const zone = document.getElementById("scrollytelling-zone");
        if (!isMotionSafe || !zone) {
          player.setTargetProgress(0);
          return () => player.destroy();
        }

        const trigger = ScrollTrigger.create({
          trigger: zone,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          onUpdate: (self) => player.setTargetProgress(self.progress),
        });

        const vignette = vignetteRef.current;
        const footprintSection = document.getElementById("footprint-section");
        const bridgingSection = document.getElementById("bridging-governance-section");
        const particlesSentinel = document.getElementById("particles-zone-start");

        const canvasFadeTween =
          footprintSection && bridgingSection
            ? gsap.fromTo(
                canvas,
                { opacity: 1 },
                {
                  opacity: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footprintSection,
                    start: "bottom top",
                    endTrigger: bridgingSection,
                    end: "top top",
                    scrub: true,
                  },
                }
              )
            : undefined;

        // Darken: stays transparent through the hero, then scrubs to fully
        // dark across the stretch between the footprint section and the
        // "Bridging Governance" section.
        const darkenTween =
          vignette && footprintSection && bridgingSection
            ? gsap.fromTo(
                vignette,
                { opacity: 0 },
                {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: footprintSection,
                    start: "bottom top",
                    endTrigger: bridgingSection,
                    end: "top top",
                    scrub: true,
                  },
                }
              )
            : undefined;

        // Lift: fades the vignette back out right as the particle handoff
        // point scrolls into view, so ParticlesBackdrop reads at full
        // brightness instead of staying dimmed underneath it.
        const liftTween =
          vignette && particlesSentinel
            ? gsap.to(vignette, {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: particlesSentinel,
                  start: "top 85%",
                  end: "top 40%",
                  scrub: true,
                },
              })
            : undefined;

        return () => {
          trigger.kill();
          canvasFadeTween?.scrollTrigger?.kill();
          canvasFadeTween?.kill();
          darkenTween?.scrollTrigger?.kill();
          darkenTween?.kill();
          liftTween?.scrollTrigger?.kill();
          liftTween?.kill();
          player.destroy();
        };
      }
    );

    return () => mm.revert();
  }, [pathname, isHome]);

  if (!isHome) return null;

  return (
    <>
      <canvas
        id="hero-canvas"
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none",
          display: "block",
          backgroundColor: "#0a0a0a",
          opacity: 1,
        }}
      />

      {/* Plain flat dark overlay (no gradient/vignette shape) — starts fully
          transparent (bright hero footage), then GSAP scrubs it to fully
          opaque, flat, solid colour between the footprint and "Bridging
          Governance" sections so the hand-off to static content reads clean
          instead of a visible "box", and lifts it again at the particles
          hand-off. Sits above the canvas, below content. */}
      <div
        ref={vignetteRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundColor: "#0a0a0a",
          opacity: 0,
        }}
      />

      {assetsFailed && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: -1,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at 50% 30%, rgba(53, 230, 255, 0.18), transparent 55%), radial-gradient(circle at 70% 75%, rgba(236, 91, 19, 0.16), transparent 50%), #080b10",
          }}
        />
      )}

      {!allLoaded && !assetsFailed && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            left: "1.5rem",
            bottom: "1.5rem",
            zIndex: 2,
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "2px",
            color: "rgba(245, 245, 245, 0.55)",
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          Loading background — {Math.round(loadProgress * 100)}%
        </div>
      )}
    </>
  );
}

