"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function TimelineScene() {
  return (
    <section id="timeline" className="relative min-h-screen px-6 py-28 md:px-12">
      <SectionHeading
        eyebrow="Scene VIII"
        title="A Timeline of You"
        subtitle="Moments of admiration, arranged like chapters, each one still glowing."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-16">
          {content.timeline.map((event, index) => {
            const left = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: left ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col md:flex-row ${
                  left ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <span className="absolute top-8 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.8)] md:left-1/2" />
                <GlassCard
                  className={`ml-10 w-full max-w-md overflow-hidden p-0 md:ml-0 ${
                    left ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  {event.image && (
                    <div className="overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={640}
                        height={360}
                        className="aspect-[16/9] w-full object-cover object-top transition duration-700 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="font-sans text-xs tracking-[0.35em] text-gold uppercase">
                      {event.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white">
                      {event.title}
                    </h3>
                    <p className="mt-3 font-serif text-base leading-relaxed text-white/70">
                      {event.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
