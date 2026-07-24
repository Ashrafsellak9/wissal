"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-sans text-xs tracking-[0.4em] text-gold/80 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl leading-tight text-white md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 font-serif text-lg leading-relaxed text-white/70 md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
