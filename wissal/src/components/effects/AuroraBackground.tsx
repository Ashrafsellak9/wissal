"use client";

import { motion } from "framer-motion";

export function AuroraBackground({ intensity = 1 }: { intensity?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/3 left-[-10%] h-[70%] w-[60%] rounded-full bg-deep-purple/40 blur-[120px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 18 * intensity, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] right-[-15%] h-[55%] w-[50%] rounded-full bg-soft-pink/20 blur-[110px]"
        animate={{ x: [0, -30, 20, 0], y: [0, 40, 10, 0] }}
        transition={{ duration: 22 * intensity, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[20%] h-[50%] w-[55%] rounded-full bg-aurora/25 blur-[130px]"
        animate={{ x: [0, 25, -35, 0], y: [0, -25, 15, 0] }}
        transition={{ duration: 26 * intensity, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
