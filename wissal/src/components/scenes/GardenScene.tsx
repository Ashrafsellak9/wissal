"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useAudio } from "@/components/providers/AudioProvider";
import { useInView } from "react-intersection-observer";

function Petal({ delay, left }: { delay: number; left: string }) {
  return (
    <motion.span
      className="absolute top-[-10%] h-3 w-2 rounded-full bg-soft-pink/70"
      style={{ left }}
      animate={{ y: ["0vh", "120vh"], rotate: [0, 180, 360], opacity: [0, 1, 0.8, 0] }}
      transition={{ duration: 11, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

function Bloom({
  style,
  scale,
}: {
  style: React.CSSProperties;
  scale: ReturnType<typeof useTransform<number, number>>;
}) {
  return (
    <motion.div style={{ ...style, scale }} className="absolute">
      <div className="relative h-16 w-16">
        {[0, 60, 120, 180, 240, 300].map((rot) => (
          <span
            key={rot}
            className="absolute top-1/2 left-1/2 h-7 w-4 -translate-x-1/2 -translate-y-full rounded-full bg-gradient-to-t from-soft-pink to-white/80"
            style={{
              transform: `translate(-50%, -100%) rotate(${rot}deg)`,
              transformOrigin: "50% 100%",
            }}
          />
        ))}
        <span className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
      </div>
    </motion.div>
  );
}

export function GardenScene() {
  const ref = useRef<HTMLElement>(null);
  const { play, stop } = useAudio();
  const { ref: inViewRef, inView } = useInView({ threshold: 0.35 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bloomScale = useTransform(scrollYProgress, [0, 0.4, 1], [0.25, 1, 1.05]);

  useEffect(() => {
    if (inView) play("birds", { fade: 1500 });
    else stop("birds", 1200);
  }, [inView, play, stop]);

  return (
    <section
      ref={(node) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        inViewRef(node);
      }}
      id="garden"
      className="relative min-h-screen overflow-hidden px-6 py-28 md:px-12"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-purple/20 to-midnight/80" />
      <Petal delay={0} left="10%" />
      <Petal delay={2} left="30%" />
      <Petal delay={4} left="55%" />
      <Petal delay={1} left="75%" />
      <Petal delay={3} left="90%" />

      <Bloom style={{ left: "12%", bottom: "18%" }} scale={bloomScale} />
      <Bloom style={{ left: "28%", bottom: "28%" }} scale={bloomScale} />
      <Bloom style={{ left: "48%", bottom: "16%" }} scale={bloomScale} />
      <Bloom style={{ left: "66%", bottom: "30%" }} scale={bloomScale} />
      <Bloom style={{ left: "82%", bottom: "20%" }} scale={bloomScale} />

      <motion.div
        animate={{ x: [0, 40, -20, 60, 0], y: [0, -20, -10, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-[20%] h-8 w-10 rounded-full bg-soft-pink/40 blur-[1px]"
      />
      <motion.div
        animate={{ x: [0, -50, 20, -30, 0], y: [0, -15, -25, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-56 left-[18%] h-7 w-9 rounded-full bg-aurora/40 blur-[1px]"
      />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Scene IX"
          title={content.garden.headline}
          subtitle="Scroll, and the garden wakes: blossoms, butterflies, and birdsong."
        />
        <p className="mx-auto max-w-3xl text-center font-serif text-lg leading-relaxed whitespace-pre-line text-white/75 md:text-xl">
          {content.garden.body}
        </p>
      </div>
    </section>
  );
}
