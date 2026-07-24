"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";

interface BirthdayCakeProps {
  blown?: boolean;
  onBlow?: () => void;
}

function Candle({
  position,
  blown,
}: {
  position: [number, number, number];
  blown: boolean;
}) {
  const flame = useRef<Mesh>(null);

  useFrame((state) => {
    if (!flame.current || blown) return;
    const t = state.clock.elapsedTime;
    flame.current.scale.setScalar(0.85 + Math.sin(t * 12 + position[0] * 5) * 0.2);
    flame.current.position.y = 0.55 + Math.sin(t * 10) * 0.02;
  });

  return (
    <group position={position}>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.5, 12]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.4} />
      </mesh>
      {!blown && (
        <mesh ref={flame} position={[0, 0.55, 0]}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshStandardMaterial
            color="#ffb703"
            emissive="#ff9f1c"
            emissiveIntensity={2.2}
            transparent
            opacity={0.95}
          />
        </mesh>
      )}
      {!blown && (
        <pointLight position={[0, 0.6, 0]} color="#ffb703" intensity={0.55} distance={2} />
      )}
    </group>
  );
}

export function BirthdayCake({ blown = false, onBlow }: BirthdayCakeProps) {
  const group = useRef<Group>(null);
  const candles = useMemo(
    () =>
      [
        [0.35, 0.55, 0.1],
        [-0.3, 0.55, 0.15],
        [0.05, 0.55, -0.32],
        [0.05, 0.55, 0.35],
        [-0.05, 0.55, 0],
      ] as [number, number, number][],
    [],
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.2;
  });

  return (
    <Float speed={1.1} floatIntensity={0.25} rotationIntensity={0.08}>
      <group
        ref={group}
        onClick={(e) => {
          e.stopPropagation();
          if (!blown) onBlow?.();
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        {/* Bottom tier */}
        <mesh position={[0, -0.35, 0]} castShadow>
          <cylinderGeometry args={[1.15, 1.25, 0.55, 48]} />
          <meshStandardMaterial color="#fbcfe8" roughness={0.35} metalness={0.1} />
        </mesh>
        {/* Top tier */}
        <mesh position={[0, 0.15, 0]} castShadow>
          <cylinderGeometry args={[0.75, 0.85, 0.45, 48]} />
          <meshStandardMaterial color="#fce7f3" roughness={0.3} metalness={0.12} />
        </mesh>
        {/* Frosting ring */}
        <mesh position={[0, 0.38, 0]}>
          <torusGeometry args={[0.78, 0.06, 12, 48]} />
          <meshStandardMaterial color="#ffffff" roughness={0.25} />
        </mesh>
        {/* Gold plate */}
        <mesh position={[0, -0.65, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.45, 48]} />
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.2} />
        </mesh>

        {candles.map((pos, i) => (
          <Candle key={i} position={pos} blown={blown} />
        ))}

        {blown && (
          <>
            <Sparkles count={80} scale={3.5} size={3} speed={1.2} color="#ffd700" />
            <pointLight position={[0, 1.2, 0]} color="#ffd700" intensity={2.5} distance={8} />
          </>
        )}
      </group>
    </Float>
  );
}
