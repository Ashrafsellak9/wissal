"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export function FloatingParticles({ count = 28 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 6,
        color:
          i % 3 === 0
            ? "rgba(212,175,55,0.55)"
            : i % 3 === 1
              ? "rgba(248,180,196,0.45)"
              : "rgba(167,139,250,0.45)",
      })),
    [count],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{ y: ["0vh", "-110vh"], opacity: [0, 0.9, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
