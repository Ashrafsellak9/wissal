"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { content } from "@/data/content";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LetterScene() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleLines(i);
      if (i >= content.letter.lines.length + 2) window.clearInterval(id);
    }, 1400);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="letter"
      className="relative min-h-screen px-6 py-28 md:px-12"
    >
      <SectionHeading
        eyebrow="Scene IV"
        title="A letter, written slowly"
        subtitle="Words that arrive the way handwriting does: patient, personal, meant only for you."
      />

      <GlassCard className="mx-auto max-w-3xl p-8 md:p-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: visibleLines > 0 ? 1 : 0 }}
          className="font-serif text-2xl text-gold md:text-3xl"
        >
          {content.letter.greeting}
        </motion.p>

        <div className="mt-8 space-y-6">
          {content.letter.lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={
                visibleLines > index + 1
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 12, filter: "blur(6px)" }
              }
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-lg leading-[1.9] text-white/80 md:text-xl"
              style={{
                backgroundImage:
                  visibleLines > index + 1
                    ? "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.15) 50%, transparent 100%)"
                    : undefined,
              }}
            >
              <span className="handwriting-reveal">{line}</span>
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: visibleLines > content.letter.lines.length + 1 ? 1 : 0,
          }}
          transition={{ duration: 1.2 }}
          className="mt-12 text-right font-display text-xl tracking-wide text-soft-pink"
        >
          {content.letter.signature}
        </motion.p>
      </GlassCard>
    </section>
  );
}
