"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

interface SceneCanvasProps {
  children: React.ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
}

export function SceneCanvas({
  children,
  className,
  camera = { position: [0, 0, 6], fov: 45 },
}: SceneCanvasProps) {
  return (
    <div className={className ?? "absolute inset-0"}>
      <Canvas
        dpr={[1, 1.75]}
        camera={camera}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
