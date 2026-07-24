"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useJourney } from "@/components/providers/JourneyProvider";

export function ScrollProgress() {
  const { phase } = useJourney();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  if (phase !== "journey" && phase !== "finale") return null;

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-gradient-to-r from-soft-pink via-gold to-aurora"
      style={{ scaleX }}
    />
  );
}
