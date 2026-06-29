"use client";

import { Effects } from "./Effects";
import { Environment, Float, Sphere, Torus } from "@react-three/drei";
import { Particles } from "./Particles";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Scene() {
  const scrollY = useRef(0);
  const ringsGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Interpolate scroll for smooth camera movement
    const targetScroll = window.scrollY;
    scrollY.current = THREE.MathUtils.lerp(scrollY.current, targetScroll, delta * 2);

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
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <Particles count={1500} />
      
      {/* Abstract Glowing Rings from the video */}
      <group ref={ringsGroup} position={[0, 0, -20]}>
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Torus args={[4, 0.2, 16, 100]}>
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} wireframe />
          </Torus>
          <Torus args={[3, 0.1, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#ec5b13" emissive="#ec5b13" emissiveIntensity={2} />
          </Torus>
        </Float>
      </group>

      <Effects />
    </>
  );
}
