"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import type { Group } from "three";

interface GiftBoxProps {
  onOpen?: () => void;
  opened?: boolean;
}

export function GiftBox({ onOpen, opened = false }: GiftBoxProps) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!group.current || opened) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.35;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.12;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
      <group
        ref={group}
        scale={hovered && !opened ? 1.08 : 1}
        onClick={(e) => {
          e.stopPropagation();
          if (!opened) onOpen?.();
        }}
        onPointerOver={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        {/* Box body */}
        <mesh position={[0, -0.15, 0]} castShadow>
          <boxGeometry args={[1.4, 1.1, 1.4]} />
          <meshStandardMaterial
            color="#4c1d95"
            metalness={0.45}
            roughness={0.25}
            emissive="#2e1065"
            emissiveIntensity={0.35}
          />
        </mesh>

        {/* Lid */}
        <mesh
          position={opened ? [0.9, 0.85, 0.2] : [0, 0.55, 0]}
          rotation={opened ? [0.4, 0.5, 0.3] : [0, 0, 0]}
          castShadow
        >
          <boxGeometry args={[1.5, 0.28, 1.5]} />
          <meshStandardMaterial
            color="#7c3aed"
            metalness={0.5}
            roughness={0.2}
            emissive="#5b21b6"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Ribbon vertical */}
        <mesh position={[0, -0.15, 0.71]}>
          <boxGeometry args={[0.22, 1.12, 0.04]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0.71, -0.15, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.22, 1.12, 0.04]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Bow */}
        <mesh position={[0, 0.78, 0]}>
          <torusGeometry args={[0.22, 0.06, 12, 24]} />
          <meshStandardMaterial color="#f0d78c" metalness={0.85} roughness={0.15} />
        </mesh>

        {opened && (
          <>
            <pointLight position={[0, 0.4, 0]} color="#ffd700" intensity={4} distance={6} />
            <Sparkles count={60} scale={3} size={3} speed={0.8} color="#ffd700" />
          </>
        )}

        <Sparkles count={35} scale={4} size={2} speed={0.35} color="#f9a8d4" />
      </group>
    </Float>
  );
}
