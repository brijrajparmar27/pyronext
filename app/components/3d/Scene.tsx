"use client";

import { Particles } from "./Particles";
import { Effects } from "./Effects";
import { Environment, Float, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Scene() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <Particles count={300} />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[2, 64, 64]} position={[0, 0, -10]}>
          <meshStandardMaterial color="#ff4500" wireframe transparent opacity={0.3} />
        </Sphere>
      </Float>

      <Effects />
    </group>
  );
}
