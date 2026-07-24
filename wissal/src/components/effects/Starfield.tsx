"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface StarfieldProps {
  count?: number;
  className?: string;
}

export function Starfield({ count = 80, className }: StarfieldProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.2 + 0.6,
        delay: Math.random() * 4,
        duration: 2.5 + Math.random() * 3.5,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 8px rgba(255,255,255,0.55)",
          }}
          animate={{ opacity: [0.15, 1, 0.2], scale: [1, 1.35, 1] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
