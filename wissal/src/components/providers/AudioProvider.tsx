"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { Howl } from "howler";
import { content } from "@/data/content";
import { useJourney } from "./JourneyProvider";

type TrackKey = keyof typeof content.audio;

interface AudioContextValue {
  play: (track: TrackKey, opts?: { fade?: number; loop?: boolean }) => void;
  stop: (track: TrackKey, fade?: number) => void;
  crossfade: (from: TrackKey, to: TrackKey) => void;
}

const AudioContext = createContext<AudioContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const { muted, phase } = useJourney();
  const tracks = useRef<Partial<Record<TrackKey, Howl>>>({});
  const unlocked = useRef(false);

  const ensureTrack = useCallback((key: TrackKey) => {
    if (tracks.current[key]) return tracks.current[key]!;
    const howl = new Howl({
      src: [content.audio[key]],
      loop: key === "ambient" || key === "piano" || key === "birds" || key === "wind",
      volume: 0,
      html5: true,
      preload: true,
      onloaderror: () => {
        /* Placeholder audio may be missing; experience continues silently */
      },
    });
    tracks.current[key] = howl;
    return howl;
  }, []);

  const play = useCallback(
    (track: TrackKey, opts?: { fade?: number; loop?: boolean }) => {
      if (muted) return;
      const howl = ensureTrack(track);
      if (opts?.loop !== undefined) howl.loop(opts.loop);
      if (!howl.playing()) howl.play();
      const fade = opts?.fade ?? 1200;
      howl.fade(howl.volume(), track === "celebration" ? 0.45 : 0.28, fade);
    },
    [ensureTrack, muted],
  );

  const stop = useCallback(
    (track: TrackKey, fade = 800) => {
      const howl = tracks.current[track];
      if (!howl) return;
      howl.fade(howl.volume(), 0, fade);
      window.setTimeout(() => howl.stop(), fade);
    },
    [],
  );

  const crossfade = useCallback(
    (from: TrackKey, to: TrackKey) => {
      stop(from, 1400);
      play(to, { fade: 1600 });
    },
    [play, stop],
  );

  useEffect(() => {
    Object.values(tracks.current).forEach((howl) => {
      if (!howl) return;
      howl.mute(muted);
    });
  }, [muted]);

  useEffect(() => {
    const unlock = () => {
      if (unlocked.current) return;
      unlocked.current = true;
      if (phase !== "loading") play("ambient");
    };
    window.addEventListener("pointerdown", unlock, { once: true });
    return () => window.removeEventListener("pointerdown", unlock);
  }, [phase, play]);

  useEffect(() => {
    if (phase === "intro" || phase === "gift") play("ambient");
    if (phase === "reveal") {
      stop("ambient", 1000);
      play("celebration", { loop: false, fade: 400 });
    }
    if (phase === "journey") {
      stop("celebration", 800);
      play("ambient");
    }
    if (phase === "finale") {
      stop("ambient", 1200);
      stop("birds", 800);
      play("piano", { fade: 2000 });
    }
  }, [phase, play, stop]);

  const value = useMemo(() => ({ play, stop, crossfade }), [play, stop, crossfade]);

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
