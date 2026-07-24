"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { content, extendedNarratives } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import type { Memory } from "@/types/content";

function Polaroid({
  memory,
  onOpen,
}: {
  memory: Memory;
  onOpen: (m: Memory) => void;
}) {
  return (
    <motion.button
      type="button"
      data-cursor="hover"
      onClick={() => onOpen(memory)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -18,
        scale: 1.04,
        rotate: 0,
        boxShadow: "0 30px 60px rgba(212,175,55,0.25)",
      }}
      animate={{ rotate: memory.rotation }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative w-[200px] rounded-sm bg-[#f8f4ec] p-3 pb-14 text-left shadow-[0_16px_40px_rgba(0,0,0,0.35)] md:w-[240px]"
    >
      <div className="overflow-hidden">
        <Image
          src={memory.image}
          alt={memory.caption}
          width={400}
          height={400}
          className="aspect-[4/5] w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <p className="absolute right-3 bottom-3 left-3 font-serif text-[11px] leading-snug text-midnight/70 line-clamp-3 md:text-xs">
        {memory.caption}
      </p>
      <div className="pointer-events-none absolute inset-0 rounded-sm opacity-0 shadow-[inset_0_0_40px_rgba(212,175,55,0.35)] transition group-hover:opacity-100" />
    </motion.button>
  );
}

export function MemoriesScene() {
  const [active, setActive] = useState<Memory | null>(null);

  return (
    <section id="memories" className="relative min-h-screen px-6 py-28 md:px-12">
      <SectionHeading
        eyebrow="Scene V"
        title="Frames of You"
        subtitle="A few photographs, each one proof of how beautifully you exist."
      />

      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-10 md:gap-14">
        {content.memories.map((memory) => (
          <Polaroid key={memory.id} memory={memory} onOpen={setActive} />
        ))}
      </div>

      <p className="mx-auto mt-16 max-w-3xl text-center font-serif text-lg leading-relaxed text-white/65">
        {extendedNarratives.afterMemories}
      </p>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.45 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg"
            >
              <GlassCard className="overflow-hidden p-3">
                <Image
                  src={active.image}
                  alt={active.caption}
                  width={900}
                  height={900}
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                />
                <p className="px-4 py-5 text-center font-serif text-lg text-white/85">
                  {active.caption}
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
