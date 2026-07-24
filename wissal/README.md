# Happy Birthday, Wissal

An award-style interactive cinematic birthday experience built with Next.js 15, Framer Motion, GSAP, React Three Fiber, Lenis, and Howler.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize everything

Edit a single file:

```
src/data/content.ts
```

Update:

- Her name
- Photos (`public/images/...`)
- Letter, wishes, timeline, constellation messages
- Book pages
- Audio paths

Replace the SVG placeholders in `public/images/` with real photos (keep the same filenames, or update paths in `content.ts`).

Optional audio files in `public/sounds/`:

- `ambient.mp3`
- `celebration.mp3`
- `piano.mp3`
- `birds.mp3`
- `wind.mp3`

The site still runs if audio files are missing.

## Journey

1. Preloader
2. Cinematic intro (stars, moon, letter-by-letter text)
3. 3D gift world → confetti reveal
4. Portrait, letter, memories, wish tree
5. Constellation, timeline, garden, magical book
6. 3D birthday cake (blow candles)
7. Calm finale

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Stack

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · GSAP · R3F · Drei · Three.js · Lenis · Howler · Canvas Confetti · React Icons
