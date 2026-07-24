"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/data/content";
import { useJourney } from "@/components/providers/JourneyProvider";
import { LetterReveal } from "@/components/ui/LetterReveal";
import { CinematicButton } from "@/components/ui/CinematicButton";
import { Starfield } from "@/components/effects/Starfield";
import { FloatingParticles } from "@/components/effects/FloatingParticles";
import { AuroraBackground } from "@/components/effects/AuroraBackground";

export function IntroScene() {
  const { phase, startJourney } = useJourney();
  const [lineIndex, setLineIndex] = useState(-1);
  const [showTitle, setShowTitle] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const [showMoon, setShowMoon] = useState(false);

  useEffect(() => {
    if (phase !== "intro") return;

    const timers = [
      window.setTimeout(() => setShowMoon(true), 1200),
      window.setTimeout(() => setLineIndex(0), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  useEffect(() => {
    if (phase !== "intro" || lineIndex < 0) return;

    if (lineIndex < content.intro.lines.length - 1) {
      const t = window.setTimeout(() => setLineIndex((i) => i + 1), 2200);
      return () => window.clearTimeout(t);
    }

    const titleTimer = window.setTimeout(() => setShowTitle(true), 1800);
    const ctaTimer = window.setTimeout(() => setShowCta(true), 3200);
    return () => {
      window.clearTimeout(titleTimer);
      window.clearTimeout(ctaTimer);
    };
  }, [lineIndex, phase]);

  if (phase !== "intro") return null;

  return (
    <motion.section
      className="fixed inset-0 z-40 overflow-hidden bg-midnight"
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
      transition={{ duration: 1.4 }}
    >
      <AuroraBackground />
      <Starfield count={100} />
      <FloatingParticles count={20} />

      <AnimatePresence>
        {showMoon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[12%] right-[14%] h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff7e6,#e8d5a3_45%,#c9a227_80%)] shadow-[0_0_80px_rgba(212,175,55,0.45)] md:h-40 md:w-40"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="min-h-[10rem] max-w-3xl">
          <AnimatePresence mode="wait">
            {lineIndex >= 0 && lineIndex < content.intro.lines.length && (
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.9 }}
                className="font-serif text-2xl text-white/90 md:text-4xl"
              >
                <LetterReveal text={content.intro.lines[lineIndex]} stagger={0.035} />
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="mt-4"
            >
              <p className="font-sans text-xs tracking-[0.5em] text-gold uppercase">
                {content.intro.title}
              </p>
              <h1 className="mt-3 font-display text-6xl text-white md:text-8xl">
                <LetterReveal text={content.herName} delay={0.2} stagger={0.08} />
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-12"
            >
              <CinematicButton onClick={startJourney}>
                {content.intro.cta}
              </CinematicButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
