"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

export function Moon({
  position = [2.2, 1.6, -4] as [number, number, number],
  scale = 0.55,
}) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.08;
  });

  return (
    <group position={position}>
      <mesh ref={ref} scale={scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial
          color="#f5f0e6"
          emissive="#d4af37"
          emissiveIntensity={0.18}
          roughness={0.85}
          metalness={0.05}
        />
      </mesh>
      <pointLight color="#ffe9b0" intensity={1.2} distance={12} decay={2} />
    </group>
  );
}
