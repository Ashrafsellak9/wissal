"use client";

import { Stars } from "@react-three/drei";

export function Stars3D({ count = 2500 }: { count?: number }) {
  return (
    <Stars
      radius={80}
      depth={50}
      count={count}
      factor={3.5}
      saturation={0.2}
      fade
      speed={0.4}
    />
  );
}
