"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/data/content";
import { useJourney } from "@/components/providers/JourneyProvider";

export function Preloader() {
  const { phase, setPhase, setProgress } = useJourney();
  const [local, setLocal] = useState(0);

  useEffect(() => {
    if (phase !== "loading") return;

    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      setLocal((p) => {
        const next = Math.min(100, p + (frame < 20 ? 3 : 1.4));
        setProgress(next);
        if (next >= 100) {
          window.clearInterval(id);
          window.setTimeout(() => setPhase("intro"), 600);
        }
        return next;
      });
    }, 40);

    return () => window.clearInterval(id);
  }, [phase, setPhase, setProgress]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-midnight"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aurora-veils absolute inset-0 opacity-40" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 mb-8 font-display text-3xl tracking-[0.35em] text-white/90 uppercase md:text-4xl"
          >
            {content.herName}
          </motion.p>
          <div className="relative z-10 h-[2px] w-48 overflow-hidden rounded-full bg-white/10 md:w-72">
            <motion.div
              className="h-full bg-gradient-to-r from-soft-pink via-gold to-aurora"
              style={{ width: `${local}%` }}
            />
          </div>
          <p className="relative z-10 mt-5 font-sans text-xs tracking-[0.35em] text-white/50 uppercase">
            Preparing your sky · {Math.round(local)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
