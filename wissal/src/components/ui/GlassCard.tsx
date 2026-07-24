"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl",
        glow && "before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/10 before:via-transparent before:to-soft-pink/10",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
