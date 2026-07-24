"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Environment, ContactShadows } from "@react-three/drei";
import { content } from "@/data/content";
import { useJourney } from "@/components/providers/JourneyProvider";
import { fireCelebration } from "@/lib/confetti";
import { Stars3D } from "@/components/3d/Stars3D";
import { Moon } from "@/components/3d/Moon";
import { GiftBox } from "@/components/3d/GiftBox";
import { FloatingCrystals } from "@/components/3d/FloatingCrystals";
import { GlassCard } from "@/components/ui/GlassCard";
import { CinematicButton } from "@/components/ui/CinematicButton";
import { Starfield } from "@/components/effects/Starfield";
import Image from "next/image";

const SceneCanvas = dynamic(
  () => import("@/components/3d/SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false },
);

export function GiftScene() {
  const { phase, setPhase, giftOpened, openGift } = useJourney();

  useEffect(() => {
    if (!giftOpened || phase !== "gift") return;
    setPhase("reveal");
    fireCelebration();
  }, [giftOpened, phase, setPhase]);

  if (phase !== "gift" && phase !== "reveal") return null;

  return (
    <motion.section className="fixed inset-0 z-30 overflow-hidden bg-[#050816]">
      <Starfield count={60} />
      <SceneCanvas className="absolute inset-0" camera={{ position: [0, 1.2, 5.5], fov: 42 }}>
        <color attach="background" args={["#050816"]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 2]} intensity={1.2} color="#ffe4f3" />
        <spotLight position={[-3, 5, 2]} intensity={1.5} color="#c084fc" angle={0.4} />
        <Stars3D />
        <Moon />
        <FloatingCrystals />
        <GiftBox opened={giftOpened} onOpen={openGift} />
        <ContactShadows opacity={0.35} scale={12} blur={2.5} far={6} />
        <Environment preset="night" />
      </SceneCanvas>

      <AnimatePresence>
        {phase === "gift" && !giftOpened && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 font-sans text-xs tracking-[0.45em] text-white/70 uppercase md:bottom-20"
          >
            {content.gift.instruction}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "reveal" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/35 px-4 backdrop-blur-[2px]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md"
            >
              <GlassCard className="p-4 md:p-5">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.25)]"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-white/10" />
                  <Image
                    src={content.photos.gift}
                    alt={content.herName}
                    width={720}
                    height={900}
                    className="aspect-[4/5] w-full object-cover object-top"
                    priority
                  />
                </motion.div>
                <p className="mt-5 px-2 text-center font-serif text-base leading-relaxed text-white/80 md:text-lg">
                  {content.gift.revealCaption}
                </p>
                <div className="mt-7 flex justify-center pb-2">
                  <CinematicButton onClick={() => setPhase("journey")}>
                    Continue Exploring
                  </CinematicButton>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}