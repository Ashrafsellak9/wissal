"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/data/content";
import { useMousePosition } from "@/hooks/useMousePosition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FloatingParticles } from "@/components/effects/FloatingParticles";

function Butterfly({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 30, -10, 40, 0],
        y: [0, -25, -10, -40, 0],
        rotate: [0, 12, -8, 5, 0],
      }}
      transition={{ duration: 12, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
        <ellipse cx="10" cy="14" rx="9" ry="12" fill="rgba(249,168,212,0.55)" />
        <ellipse cx="26" cy="14" rx="9" ry="12" fill="rgba(192,132,252,0.5)" />
        <rect x="17" y="4" width="2" height="20" rx="1" fill="#f0d78c" />
      </svg>
    </motion.div>
  );
}

export function PortraitScene() {
  const ref = useRef<HTMLElement>(null);
  const mouse = useMousePosition();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const glowX = (mouse.x - 0.5) * 40;
  const glowY = (mouse.y - 0.5) * 40;

  return (
    <section
      ref={ref}
      id="portrait"
      className="relative min-h-screen overflow-hidden px-6 py-28 md:px-12"
    >
      <FloatingParticles count={16} />
      <Butterfly className="absolute top-28 left-[12%]" />
      <Butterfly className="absolute top-48 right-[18%]" delay={2} />
      <Butterfly className="absolute bottom-40 left-[30%]" delay={4} />

      <div
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-soft-pink/20 blur-[100px]"
        style={{
          left: `calc(50% + ${glowX}px)`,
          top: `calc(40% + ${glowY}px)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <SectionHeading
        eyebrow="Scene III"
        title={content.portrait.headline}
        subtitle={content.portrait.subheadline}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div style={{ y }} className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/20 via-soft-pink/10 to-deep-purple/30 blur-2xl" />
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            style={{
              transform: `perspective(1000px) rotateY(${(mouse.x - 0.5) * 6}deg) rotateX(${(0.5 - mouse.y) * 6}deg)`,
            }}
          >
            <Image
              src={content.portrait.image}
              alt={`Portrait of ${content.herName}`}
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-white/10" />
            {/* Light rays */}
            <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
              <div className="absolute top-0 left-1/3 h-full w-px rotate-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
              <div className="absolute top-0 left-1/2 h-full w-px -rotate-6 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1 }}
          className="font-serif text-lg leading-relaxed whitespace-pre-line text-white/75 md:text-xl"
        >
          {content.portrait.body}
        </motion.div>
      </div>
    </section>
  );
}
