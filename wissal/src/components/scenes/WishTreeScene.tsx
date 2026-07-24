"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

interface LeafPos {
  id: string;
  x: number;
  y: number;
  wishIndex: number;
  hue: number;
}

export function WishTreeScene() {
  const [activeWish, setActiveWish] = useState<string | null>(null);
  const [spent, setSpent] = useState<Record<string, number>>({});

  const leaves = useMemo<LeafPos[]>(() => {
    return content.wishes.slice(0, 22).map((wish, i) => {
      const angle = (i / 22) * Math.PI * 2;
      const radius = 28 + (i % 5) * 7;
      return {
        id: wish.id,
        x: 50 + Math.cos(angle) * radius * 0.85,
        y: 38 + Math.sin(angle) * radius * 0.55 - (i % 3) * 3,
        wishIndex: i,
        hue: 280 + (i % 6) * 12,
      };
    });
  }, []);

  const openLeaf = (leaf: LeafPos) => {
    setActiveWish(content.wishes[leaf.wishIndex].text);
    setSpent((prev) => ({ ...prev, [leaf.id]: Date.now() }));
    window.setTimeout(() => {
      setSpent((prev) => {
        const next = { ...prev };
        delete next[leaf.id];
        return next;
      });
    }, 2800);
  };

  return (
    <section id="wish-tree" className="relative min-h-screen px-6 py-28 md:px-12">
      <SectionHeading
        eyebrow="Scene VI"
        title="The Wish Tree"
        subtitle="Every leaf holds a birthday wish. Touch one, then watch it return, glowing again."
      />

      <div className="relative mx-auto h-[520px] max-w-3xl md:h-[640px]">
        {/* Trunk */}
        <div className="absolute bottom-0 left-1/2 h-[45%] w-10 -translate-x-1/2 rounded-t-full bg-gradient-to-t from-[#3b2a1a] via-[#5c4030] to-[#7a5235]" />
        <div className="absolute bottom-[40%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-deep-purple/30 blur-3xl md:h-80 md:w-80" />
        <div className="absolute bottom-[38%] left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-b from-deep-purple/50 to-soft-pink/20 blur-2xl md:h-72 md:w-72" />

        {leaves.map((leaf) => {
          const hidden = Boolean(spent[leaf.id]);
          return (
            <motion.button
              key={leaf.id}
              type="button"
              data-cursor="hover"
              aria-label="Open birthday wish"
              onClick={() => openLeaf(leaf)}
              className="absolute"
              style={{ left: `${leaf.x}%`, top: `${leaf.y}%` }}
              animate={
                hidden
                  ? { opacity: 0, scale: 0, y: -20 }
                  : {
                      opacity: [0.65, 1, 0.7],
                      scale: [1, 1.12, 1],
                      y: [0, -4, 0],
                    }
              }
              transition={
                hidden
                  ? { duration: 0.45 }
                  : { duration: 3.2, repeat: Infinity, delay: leaf.wishIndex * 0.1 }
              }
            >
              <span
                className="block h-5 w-8 -translate-x-1/2 -translate-y-1/2 rounded-[100%_0_100%_0] shadow-[0_0_16px_rgba(212,175,55,0.35)] md:h-6 md:w-10"
                style={{
                  background: `linear-gradient(135deg, hsl(${leaf.hue} 70% 65%), hsl(${leaf.hue + 30} 80% 55%))`,
                  transform: `rotate(${leaf.wishIndex * 17}deg)`,
                }}
              />
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {activeWish && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveWish(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="max-w-md p-8 text-center">
                <p className="font-sans text-xs tracking-[0.4em] text-gold uppercase">
                  A wish for you
                </p>
                <p className="mt-5 font-serif text-xl leading-relaxed text-white/90">
                  {activeWish}
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
