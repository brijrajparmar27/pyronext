"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function Particles({ count = 2000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      // Create a tunnel effect
      const radius = 5 + Math.random() * 15;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 100;
      
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      const speed = 0.01 + Math.random() * 0.02;
      const scale = Math.random() * 0.5 + 0.1;
      
      temp.push({ x, y, z, speed, angle, radius, scale });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      // Slowly rotate the tunnel
      particle.angle += delta * particle.speed;
      
      dummy.position.set(
        Math.cos(particle.angle) * particle.radius,
        Math.sin(particle.angle) * particle.radius,
        particle.z
      );
      
      dummy.scale.set(particle.scale, particle.scale, particle.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ec5b13" 
        emissiveIntensity={0.8} 
        transparent 
        opacity={0.6} 
      />
    </instancedMesh>
  );
}
