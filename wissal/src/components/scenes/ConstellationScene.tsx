"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Starfield } from "@/components/effects/Starfield";

export function ConstellationScene() {
  const [active, setActive] = useState<string | null>(null);
  const stars = content.constellation;
  const starMap = useMemo(() => new Map(stars.map((s) => [s.id, s])), [stars]);

  const lines = useMemo(() => {
    const pairs: { x1: number; y1: number; x2: number; y2: number; key: string }[] =
      [];
    stars.forEach((star) => {
      star.connections.forEach((id) => {
        const target = starMap.get(id);
        if (!target) return;
        pairs.push({
          key: `${star.id}-${id}`,
          x1: star.x,
          y1: star.y,
          x2: target.x,
          y2: target.y,
        });
      });
    });
    return pairs;
  }, [stars, starMap]);

  const activeMessage = stars.find((s) => s.id === active)?.message;

  return (
    <section
      id="constellation"
      className="relative min-h-screen overflow-hidden px-6 py-28 md:px-12"
    >
      <Starfield count={50} />
      <SectionHeading
        eyebrow="Scene VII"
        title="Your Constellation"
        subtitle="Click a star. Watch lines of light connect. Each point holds a message."
      />

      <div className="relative mx-auto aspect-[16/10] max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b1c]/50 shadow-[0_0_80px_rgba(88,28,135,0.25)]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {lines.map((line, i) => (
            <motion.line
              key={line.key}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="rgba(212,175,55,0.45)"
              strokeWidth="0.15"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: i * 0.08 }}
            />
          ))}
        </svg>

        {stars.map((star, i) => (
          <motion.button
            key={star.id}
            type="button"
            data-cursor="hover"
            aria-label="Open star message"
            onClick={() => setActive(star.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.07 }}
            whileHover={{ scale: 1.5 }}
          >
            <span className="block h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)] md:h-3.5 md:w-3.5" />
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && activeMessage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <GlassCard className="max-w-md p-8 text-center">
              <p className="font-serif text-xl text-white/90">{activeMessage}</p>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
