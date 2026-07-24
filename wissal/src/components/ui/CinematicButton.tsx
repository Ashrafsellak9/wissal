"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface CinematicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "gold" | "ghost";
}

export function CinematicButton({
  children,
  onClick,
  className,
  variant = "gold",
}: CinematicButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group relative overflow-hidden rounded-full px-10 py-4 font-display text-sm tracking-[0.28em] uppercase transition-shadow duration-500",
        variant === "gold" &&
          "bg-gradient-to-r from-[#c9a227] via-[#f0d78c] to-[#c9a227] text-midnight shadow-[0_0_40px_rgba(212,175,55,0.35)]",
        variant === "ghost" &&
          "border border-white/30 bg-white/5 text-white backdrop-blur-md hover:border-gold/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </motion.button>
  );
}
