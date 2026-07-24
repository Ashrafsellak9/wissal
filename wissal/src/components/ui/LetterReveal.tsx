"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function LetterReveal({
  text,
  className,
  delay = 0,
  stagger = 0.04,
}: LetterRevealProps) {
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + i * stagger,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
