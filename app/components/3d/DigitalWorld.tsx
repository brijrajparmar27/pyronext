"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export function DigitalWorld() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const nodesRef = useRef<THREE.Group>(null);
  const scrollY = useRef(0);

  // Set up data nodes
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 40,
          Math.random() * 20 - 10,
          (Math.random() - 0.5) * 40,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          0
        ],
        scale: Math.random() * 0.5 + 0.2,
      });
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    // Smoothly interpolate scroll
    const targetScroll = window.scrollY;
    scrollY.current = THREE.MathUtils.lerp(scrollY.current, targetScroll, delta * 2);

    // Move grid to simulate moving forward through the digital space
    if (gridRef.current) {
      gridRef.current.position.z = (scrollY.current * 0.01) % 10;
    }
    
    // Rotate and move data nodes
    if (nodesRef.current) {
      nodesRef.current.position.z = scrollY.current * 0.02;
      nodesRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * 0.2;
        child.rotation.y += delta * 0.3;
      });
    }
    
    // Slight camera bobbing
    state.camera.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + 2;
  });

  return (
    <group>
      {/* Infinite-looking Grid */}
      <gridHelper 
        ref={gridRef}
        args={[100, 100, "#ec5b13", "#2a2a2a"]} 
        position={[0, -5, 0]}
      />
      
      {/* Floating Digital Data Nodes */}
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh 
              position={node.position as [number, number, number]} 
              rotation={node.rotation as [number, number, number]}
              scale={node.scale}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial 
                color="#ec5b13" 
                wireframe 
                transparent 
                opacity={0.3} 
                emissive="#ec5b13"
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
}
