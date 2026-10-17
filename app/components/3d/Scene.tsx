"use client";

import { Effects } from "./Effects";
import { Environment, Float, Torus } from "@react-three/drei";
import { Particles } from "./Particles";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface SceneProps {
  /**
   * Document-Y (px) to subtract from window.scrollY before driving the
   * camera. Lets this scene be reactivated partway down a long page (e.g.
   * after the home page's video hero) and still start its fly-through from
   * camera.z = 10 instead of inheriting however many thousand px of scroll
   * already happened above it — which would otherwise fly the camera clean
   * past the rings/particles and out of the view frustum. Defaults to 0,
   * which reproduces the original whole-page-scroll-driven behavior.
   */
  scrollOffset?: number;
  /**
   * Scroll distance (px), measured from `scrollOffset`, across which the
   * entire camera fly-through (z: 10 → -50, the full depth of the particle
   * tunnel + rings) should play out. When provided, the zoom speed adapts
   * to the page's actual remaining length so the animation keeps going
   * right up to just before the footer instead of finishing in the first
   * ~1000px and sitting static for the rest of a long page. Falls back to
   * a fixed px-per-unit speed when omitted/undetermined.
   */
  scrollRange?: number;
}

const CAMERA_START_Z = 10;
const CAMERA_TOTAL_DEPTH = 60; // 10 -> -50, spans the full particle/ring field
const LEGACY_PX_PER_UNIT = 0.05;

export function Scene({ scrollOffset = 0, scrollRange }: SceneProps) {
  const scrollY = useRef(0);
  const targetScroll = useRef(0);
  const ringsGroup = useRef<THREE.Group>(null);

  useEffect(() => {
    // Passive scroll listener avoids layout thrashing inside requestAnimationFrame
    targetScroll.current = window.scrollY;
    const onScroll = () => {
      targetScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state, delta) => {
    // Smoothly interpolate scroll using the passive-listener-fed memory ref
    // (no DOM layout queries inside the render loop), offset so a scene
    // reactivated partway down a long page still starts its fly-through
    // from z = CAMERA_START_Z instead of inheriting scroll that already
    // happened above it.
    const targetScrollPx = Math.max(0, targetScroll.current - scrollOffset);
    scrollY.current = THREE.MathUtils.lerp(scrollY.current, targetScrollPx, delta * 2);

    // Move camera through the tunnel based on scroll. When scrollRange is
    // known, the whole CAMERA_TOTAL_DEPTH traversal is spread evenly across
    // it (so a long remaining page = a slow, sustained zoom); otherwise
    // fall back to the original fixed px-per-unit speed.
    if (scrollRange && scrollRange > 0) {
      const progress = Math.min(1, scrollY.current / scrollRange);
      state.camera.position.z = CAMERA_START_Z - progress * CAMERA_TOTAL_DEPTH;
    } else {
      state.camera.position.z = CAMERA_START_Z - scrollY.current * LEGACY_PX_PER_UNIT;
    }

    // Rotate rings
    if (ringsGroup.current) {
      ringsGroup.current.rotation.x = state.clock.elapsedTime * 0.2;
      ringsGroup.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <Particles count={1500} />
      
      {/* Abstract Glowing Rings from the video */}
      <group ref={ringsGroup} position={[0, 0, -20]}>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Torus args={[4, 0.2, 16, 100]}>
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} wireframe />
          </Torus>
          <Torus args={[3, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#ec5b13" emissive="#ec5b13" emissiveIntensity={1} />
          </Torus>
        </Float>
      </group>

      <Effects />
    </>
  );
}


