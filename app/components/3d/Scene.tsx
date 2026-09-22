"use client";

import { Effects } from "./Effects";
import { Float, Torus } from "@react-three/drei";
import { Particles } from "./Particles";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Scene() {
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
    // Smoothly interpolate scroll using memory ref (no DOM layout queries)
    scrollY.current = THREE.MathUtils.lerp(scrollY.current, targetScroll.current, delta * 2);

    // Move camera through the tunnel based on scroll
    state.camera.position.z = 10 - scrollY.current * 0.05;

    // Rotate rings
    if (ringsGroup.current) {
      ringsGroup.current.rotation.x = state.clock.elapsedTime * 0.2;
      ringsGroup.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.5} />
      
      <Particles count={800} />
      
      {/* Abstract Glowing Rings */}
      <group ref={ringsGroup} position={[0, 0, -20]}>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Torus args={[4, 0.2, 16, 64]}>
            <meshBasicMaterial color="#ffffff" wireframe />
          </Torus>
          <Torus args={[3, 0.1, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color="#ec5b13" />
          </Torus>
        </Float>
      </group>

      <Effects />
    </>
  );
}

