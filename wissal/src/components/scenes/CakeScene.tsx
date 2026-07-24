"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Environment } from "@react-three/drei";
import { content } from "@/data/content";
import { useJourney } from "@/components/providers/JourneyProvider";
import { fireCelebration, fireSparkles } from "@/lib/confetti";
import { useAudio } from "@/components/providers/AudioProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BirthdayCake } from "@/components/3d/BirthdayCake";
import { Stars3D } from "@/components/3d/Stars3D";

const SceneCanvas = dynamic(
  () => import("@/components/3d/SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false },
);

export function CakeScene() {
  const { candlesBlown, blowCandles } = useJourney();
  const { play } = useAudio();

  const handleBlow = () => {
    if (candlesBlown) return;
    blowCandles();
    fireCelebration();
    fireSparkles(0.5, 0.45);
    play("celebration", { loop: false, fade: 300 });
  };

  return (
    <section id="cake" className="relative min-h-screen px-6 py-28 md:px-12">
      <SectionHeading
        eyebrow="Scene XI"
        title={content.cake.headline}
        subtitle={content.cake.instruction}
      />

      <div className="relative mx-auto h-[420px] max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080612] md:h-[520px]">
        <SceneCanvas camera={{ position: [0, 1.4, 4.2], fov: 40 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 5, 2]} intensity={1.3} />
          <spotLight position={[0, 4, 2]} angle={0.4} intensity={1.2} color="#fbcfe8" />
          <Stars3D count={1200} />
          <BirthdayCake blown={candlesBlown} onBlow={handleBlow} />
          <Environment preset="sunset" />
        </SceneCanvas>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: candlesBlown ? 1 : 0.55, y: 0 }}
        className="mx-auto mt-10 max-w-2xl text-center font-serif text-lg text-white/75"
      >
        {candlesBlown ? content.cake.celebration : content.cake.instruction}
      </motion.p>
    </section>
  );
}
