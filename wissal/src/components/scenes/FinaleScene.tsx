"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { content, extendedNarratives } from "@/data/content";
import { useJourney } from "@/components/providers/JourneyProvider";
import { Starfield } from "@/components/effects/Starfield";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { LetterReveal } from "@/components/ui/LetterReveal";

export function FinaleScene() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.55 });
  const { setPhase } = useJourney();

  useEffect(() => {
    if (inView) setPhase("finale");
  }, [inView, setPhase]);

  return (
    <section
      ref={ref}
      id="finale"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center"
    >
      <AuroraBackground intensity={1.2} />
      <Starfield count={90} />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="mb-10 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff7e6,#e8d5a3_45%,#c9a227_80%)] shadow-[0_0_80px_rgba(212,175,55,0.45)] md:h-36 md:w-36"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative mb-10 overflow-hidden rounded-full border border-gold/40 p-1 shadow-[0_0_50px_rgba(212,175,55,0.25)]"
      >
        <Image
          src={content.photos.finale}
          alt={content.herName}
          width={200}
          height={200}
          className="h-36 w-36 rounded-full object-cover object-top md:h-44 md:w-44"
        />
      </motion.div>

      <h2 className="font-display text-5xl text-white md:text-7xl">
        <LetterReveal text={content.finale.title} stagger={0.06} />
      </h2>
      <p className="mt-3 font-display text-4xl text-gold md:text-5xl">
        {content.herName}
      </p>

      <div className="mt-10 max-w-2xl space-y-4">
        {content.finale.messages.map((msg, i) => (
          <motion.p
            key={msg}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.35, duration: 1 }}
            className="font-serif text-lg text-white/75 md:text-xl"
          >
            {msg}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 1.5 }}
        className="mt-10 font-serif text-base text-white/50 italic"
      >
        {content.finale.closing}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.8, duration: 1.5 }}
        className="mt-16 font-display text-xl tracking-wide text-soft-pink"
      >
        {content.finale.dedication}
      </motion.p>

      <p className="mt-16 max-w-2xl font-serif text-sm leading-relaxed text-white/40">
        {extendedNarratives.beforeFinale}
      </p>
    </section>
  );
}
