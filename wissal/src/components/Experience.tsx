"use client";

import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { JourneyProvider, useJourney } from "@/components/providers/JourneyProvider";
import { AudioProvider } from "@/components/providers/AudioProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Preloader } from "@/components/layout/Preloader";
import { MuteButton } from "@/components/layout/MuteButton";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { IntroScene } from "@/components/scenes/IntroScene";
import { JourneyBridge } from "@/components/scenes/JourneyBridge";
import { PortraitScene } from "@/components/scenes/PortraitScene";
import { LetterScene } from "@/components/scenes/LetterScene";
import { MemoriesScene } from "@/components/scenes/MemoriesScene";
import { WishTreeScene } from "@/components/scenes/WishTreeScene";
import { ConstellationScene } from "@/components/scenes/ConstellationScene";
import { TimelineScene } from "@/components/scenes/TimelineScene";
import { GardenScene } from "@/components/scenes/GardenScene";
import { BookScene } from "@/components/scenes/BookScene";
import { FinaleScene } from "@/components/scenes/FinaleScene";
import { AuroraBackground } from "@/components/effects/AuroraBackground";

const GiftScene = dynamic(
  () => import("@/components/scenes/GiftScene").then((m) => m.GiftScene),
  { ssr: false },
);

const CakeScene = dynamic(
  () => import("@/components/scenes/CakeScene").then((m) => m.CakeScene),
  { ssr: false },
);

function ExperienceInner() {
  const { phase } = useJourney();
  const showJourney = phase === "journey" || phase === "finale";

  return (
    <>
      <Preloader />
      <CustomCursor />
      <MuteButton />
      <ScrollProgress />

      <AnimatePresence mode="wait">
        {phase === "intro" && <IntroScene key="intro" />}
      </AnimatePresence>

      <AnimatePresence>
        {(phase === "gift" || phase === "reveal") && <GiftScene key="gift" />}
      </AnimatePresence>

      {showJourney && (
        <main className="relative z-10 bg-midnight">
          <AuroraBackground />
          <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.18),transparent_55%)]" />
          <JourneyBridge />
          <PortraitScene />
          <LetterScene />
          <MemoriesScene />
          <WishTreeScene />
          <ConstellationScene />
          <TimelineScene />
          <GardenScene />
          <BookScene />
          <CakeScene />
          <FinaleScene />
        </main>
      )}
    </>
  );
}

export function Experience() {
  return (
    <JourneyProvider>
      <AudioProvider>
        <SmoothScrollProvider>
          <ExperienceInner />
        </SmoothScrollProvider>
      </AudioProvider>
    </JourneyProvider>
  );
}
