"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    // Register the ScrollTrigger plugin on client side
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Standard Fade Up Reveal
      const reveals = gsap.utils.toArray(".gsap-reveal");
      reveals.forEach((element: unknown) => {
        const el = element as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Grid Cards Stagger Reveal
      const staggers = gsap.utils.toArray(".gsap-stagger-container");
      staggers.forEach((container: unknown) => {
        const cEl = container as HTMLElement;
        const items = cEl.querySelectorAll(".gsap-stagger-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cEl,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // 3. Side Slide-In (Left to Right / Right to Left)
      const slidesLeft = gsap.utils.toArray(".gsap-slide-left");
      slidesLeft.forEach((element: unknown) => {
        const el = element as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      const slidesRight = gsap.utils.toArray(".gsap-slide-right");
      slidesRight.forEach((element: unknown) => {
        const el = element as HTMLElement;
        gsap.fromTo(
          el,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    // Cleanup scroll triggers and timelines on route change or unmount
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // Re-initialize animations when route changes

  return null;
}
