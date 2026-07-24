export type JourneyPhase =
  | "loading"
  | "intro"
  | "gift"
  | "reveal"
  | "journey"
  | "finale";

export interface Memory {
  id: string;
  image: string;
  caption: string;
  rotation: number;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface Wish {
  id: string;
  text: string;
}

export interface ConstellationStar {
  id: string;
  x: number;
  y: number;
  message: string;
  connections: string[];
}

export interface BookPage {
  id: string;
  title: string;
  content: string;
  image?: string;
  quote?: string;
}

export interface PortraitSection {
  headline: string;
  subheadline: string;
  body: string;
  image: string;
}

export interface LetterContent {
  greeting: string;
  lines: string[];
  signature: string;
}

export interface FinaleContent {
  title: string;
  messages: string[];
  closing: string;
  dedication: string;
}

export interface AudioTracks {
  ambient: string;
  celebration: string;
  piano: string;
  birds: string;
  wind: string;
}

export interface SiteContent {
  herName: string;
  tagline: string;
  seo: {
    title: string;
    description: string;
  };
  intro: {
    lines: string[];
    title: string;
    cta: string;
  };
  gift: {
    instruction: string;
    revealCaption: string;
  };
  portrait: PortraitSection;
  letter: LetterContent;
  memories: Memory[];
  wishes: Wish[];
  constellation: ConstellationStar[];
  timeline: TimelineEvent[];
  garden: {
    headline: string;
    body: string;
  };
  book: {
    title: string;
    pages: BookPage[];
  };
  cake: {
    headline: string;
    instruction: string;
    celebration: string;
  };
  finale: FinaleContent;
  audio: AudioTracks;
  photos: {
    hero: string;
    portrait: string;
    gift: string;
    finale: string;
  };
}
