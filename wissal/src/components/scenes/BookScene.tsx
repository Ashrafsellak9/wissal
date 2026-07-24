"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { content } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BookScene() {
  const pages = content.book.pages;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const page = pages[index];

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => Math.min(pages.length - 1, Math.max(0, i + dir)));
  };

  return (
    <section id="book" className="relative min-h-screen px-6 py-28 md:px-12">
      <SectionHeading
        eyebrow="Scene X"
        title={content.book.title}
        subtitle="Turn each page slowly. Every word was written to celebrate you."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/15 via-transparent to-deep-purple/30 blur-2xl" />
        <div className="relative rounded-[1.5rem] border border-gold/25 bg-gradient-to-br from-[#1a1430] to-[#0b1024] shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
            <p className="font-sans text-xs tracking-[0.35em] text-gold/80 uppercase">
              Page {index + 1} / {pages.length}
            </p>
            <p className="font-display text-lg text-white/90">{page.title}</p>
          </div>

          <div className="relative overflow-hidden perspective-[1600px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="px-6 pt-8 pb-4 md:px-12 md:pt-10"
              >
                {page.image && (
                  <Image
                    src={page.image}
                    alt={page.title}
                    width={640}
                    height={320}
                    className="mb-6 aspect-[16/9] max-h-[240px] w-full rounded-xl object-cover object-top md:max-h-[280px]"
                  />
                )}
                <p className="font-serif text-lg leading-[1.85] text-white md:text-xl">
                  {page.content}
                </p>
                {page.quote && (
                  <p className="mt-6 border-l-2 border-gold/60 pl-5 font-display text-xl leading-relaxed text-soft-pink italic md:text-2xl">
                    “{page.quote}”
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between px-6 pt-4 pb-6 md:px-8">
            <button
              type="button"
              aria-label="Previous page"
              disabled={index === 0}
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold/50 disabled:opacity-30"
            >
              <HiChevronLeft size={22} />
            </button>
            <button
              type="button"
              aria-label="Next page"
              disabled={index === pages.length - 1}
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold/50 disabled:opacity-30"
            >
              <HiChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
