"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

function Crystal({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.2;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.45}
          metalness={0.7}
          roughness={0.15}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
}

export function FloatingCrystals() {
  return (
    <>
      <Crystal position={[-2.2, 0.8, -1]} color="#c084fc" speed={0.5} />
      <Crystal position={[2.4, -0.2, -0.5]} color="#f9a8d4" speed={0.65} />
      <Crystal position={[-1.5, -1, 0.5]} color="#d4af37" speed={0.4} />
      <Crystal position={[1.6, 1.2, -1.5]} color="#93c5fd" speed={0.55} />
    </>
  );
}
