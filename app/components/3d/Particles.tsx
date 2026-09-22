"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
}

export function Particles({ count = 1000 }: ParticlesProps) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!mesh.current) return;
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 100;
      const scale = Math.random() * 0.4 + 0.1;

      dummy.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        z
      );
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0
      );
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Rotate the particle tunnel smoothly with zero per-frame CPU matrix math or GPU bus transfers
    groupRef.current.rotation.z += delta * 0.03;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.03;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={mesh} args={[undefined, undefined, count]} frustumCulled={false}>
        <octahedronGeometry args={[0.2, 0]} />
        <meshBasicMaterial 
          color="#ec5b13" 
          transparent 
          opacity={0.7} 
        />
      </instancedMesh>
    </group>
  );
}

