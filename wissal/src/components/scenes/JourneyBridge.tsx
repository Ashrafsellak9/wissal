"use client";

import { motion } from "framer-motion";
import { extendedNarratives } from "@/data/content";

export function JourneyBridge() {
  return (
    <section className="relative px-6 py-24 md:px-12">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2 }}
        className="mx-auto max-w-3xl text-center font-serif text-xl leading-relaxed whitespace-pre-line text-white/70 md:text-2xl"
      >
        {extendedNarratives.journeyBridge}
      </motion.p>
    </section>
  );
}
