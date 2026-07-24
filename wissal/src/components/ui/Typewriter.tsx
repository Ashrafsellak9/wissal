"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function Typewriter({
  text,
  className,
  speed = 42,
  delay = 0,
  onComplete,
}: TypewriterProps) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    setVisible("");
    let i = 0;
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        i += 1;
        setVisible(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(id);
          onComplete?.();
        }
      }, speed);
      return () => window.clearInterval(id);
    }, delay);

    return () => window.clearTimeout(start);
  }, [text, speed, delay, onComplete]);

  return (
    <motion.span className={cn("inline-block", className)} aria-label={text}>
      {visible}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-gold align-middle" />
    </motion.span>
  );
}
