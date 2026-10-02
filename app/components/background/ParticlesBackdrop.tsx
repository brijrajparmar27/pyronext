"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scene } from "../3d/Scene";

/**
 * Secondary fixed background: the original ambient R3F scene (glowing
 * ring + particle tunnel, see app/components/3d/Scene.tsx).
 *
 * - On every page EXCEPT the home page, this is the default, always-on
 *   background exactly as it was before the video hero existed.
 * - On the home page, a sentinel element (`#particles-zone-start`, placed
 *   right after the "Bridging Governance..." section in page.tsx) drives a
 *   hand-off: once it scrolls into view the WebGL scene is mounted (lazily,
 *   so its cost is never paid on first paint) and cross-fades in over the
 *   frozen video backdrop from BackgroundFrameCanvas; scrolling back above
 *   it fades the particles back out.
 * - Scene's camera fly-through is driven by `scrollOffset` — the sentinel's
 *   own document-Y position — so it always starts its animation from the
 *   top of its own travel instead of inheriting the large raw scrollY of
 *   wherever it happens to appear on a long page (which would otherwise fly
 *   the camera straight through the rings and out of view).
 * - `scrollRange` — the scroll distance from that activation point down to
 *   just before the page's <footer> — is also computed and passed through,
 *   so Scene can spread the entire camera fly-through across however much
 *   page is actually left to scroll, instead of a fixed px-per-unit speed
 *   that would otherwise finish the zoom in the first ~1000px and leave the
 *   rest of a long page static.
 */
export default function ParticlesBackdrop() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollRange, setScrollRange] = useState<number | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // This component lives in the root layout and is never unmounted
    // across client-side navigation, so `mounted`/`visible` can leak from
    // whatever the previous route last set them to. Non-home routes have
    // no sentinel and reveal the scene immediately (handled below); the
    // home route is scroll-gated and must start hidden again here -
    // otherwise navigating back to "/" client-side (no full reload) carries
    // over a stale `visible: true` from a sentinel-less page and flashes
    // the particle scene in on top of the video hero instead of waiting
    // for the user to actually scroll down to its zone (only a hard
    // refresh resets React state, which is why this only showed up on
    // client-side navigation back to home, not after a reload).
    if (document.getElementById("particles-zone-start")) {
      setMounted(false);
      setVisible(false);
    }

    mm.add(
      { isMotionSafe: "(prefers-reduced-motion: no-preference)" },
      (context) => {
        const { isMotionSafe } = context.conditions as { isMotionSafe: boolean };
        if (!isMotionSafe) return;

        // Distance from `startDocY` (where the fly-through begins) down to
        // just before the footer enters the viewport — i.e. the footer's
        // document-Y minus one viewport height, so the zoom's last frame
        // lands right as the footer is about to appear rather than when
        // it's already scrolled fully into view.
        const computeScrollRange = (startDocY: number): number | undefined => {
          const footer = document.querySelector("footer");
          if (!footer) return undefined;
          const footerDocY = footer.getBoundingClientRect().top + window.scrollY;
          const range = footerDocY - window.innerHeight - startDocY;
          return Math.max(200, range);
        };

        const sentinel = document.getElementById("particles-zone-start");

        // Pages without the video hero (i.e. everywhere but "/") show this
        // ambient background immediately, same as the original site-wide
        // CanvasContainer.
        if (!sentinel) {
          setScrollOffset(0);
          setScrollRange(computeScrollRange(0));
          setMounted(true);
          setVisible(true);
          return;
        }

        const trigger = ScrollTrigger.create({
          trigger: sentinel,
          start: "top 85%",
          onEnter: () => {
            const offset = sentinel.getBoundingClientRect().top + window.scrollY;
            setScrollOffset(offset);
            setScrollRange(computeScrollRange(offset));
            setMounted(true);
            setVisible(true);
          },
          onEnterBack: () => setVisible(true),
          onLeaveBack: () => setVisible(false),
        });

        return () => trigger.kill();
      }
    );

    return () => mm.revert();
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        backgroundColor: "#050505",
        opacity: visible ? 1 : 0,
        transition: "opacity 1.2s ease",
      }}
    >
      {mounted && (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: false, alpha: false }} dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Scene scrollOffset={scrollOffset} scrollRange={scrollRange} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}

