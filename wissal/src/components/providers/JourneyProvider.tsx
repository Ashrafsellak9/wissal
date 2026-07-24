"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { JourneyPhase } from "@/types/content";

interface JourneyContextValue {
  phase: JourneyPhase;
  setPhase: (phase: JourneyPhase) => void;
  giftOpened: boolean;
  openGift: () => void;
  candlesBlown: boolean;
  blowCandles: () => void;
  progress: number;
  setProgress: (value: number) => void;
  muted: boolean;
  toggleMute: () => void;
  journeyStarted: boolean;
  startJourney: () => void;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<JourneyPhase>("loading");
  const [giftOpened, setGiftOpened] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [journeyStarted, setJourneyStarted] = useState(false);

  const openGift = useCallback(() => setGiftOpened(true), []);
  const blowCandles = useCallback(() => setCandlesBlown(true), []);
  const toggleMute = useCallback(() => setMuted((m) => !m), []);
  const startJourney = useCallback(() => {
    setJourneyStarted(true);
    setPhase("gift");
  }, []);

  const value = useMemo(
    () => ({
      phase,
      setPhase,
      giftOpened,
      openGift,
      candlesBlown,
      blowCandles,
      progress,
      setProgress,
      muted,
      toggleMute,
      journeyStarted,
      startJourney,
    }),
    [
      phase,
      giftOpened,
      openGift,
      candlesBlown,
      blowCandles,
      progress,
      muted,
      toggleMute,
      journeyStarted,
      startJourney,
    ],
  );

  return (
    <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney must be used within JourneyProvider");
  return ctx;
}
