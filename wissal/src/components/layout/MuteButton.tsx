"use client";

import { motion } from "framer-motion";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useJourney } from "@/components/providers/JourneyProvider";

export function MuteButton() {
  const { muted, toggleMute, phase } = useJourney();

  if (phase === "loading") return null;

  return (
    <motion.button
      type="button"
      aria-label={muted ? "Unmute audio" : "Mute audio"}
      onClick={toggleMute}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:border-gold/50 hover:shadow-[0_0_24px_rgba(212,175,55,0.3)] md:right-8 md:bottom-8"
    >
      {muted ? <HiSpeakerXMark size={20} /> : <HiSpeakerWave size={20} />}
    </motion.button>
  );
}
