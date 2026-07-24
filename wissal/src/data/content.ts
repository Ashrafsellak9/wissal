import type { SiteContent } from "@/types/content";

/**
 * Final content: compliments first.
 * School is mentioned only once, lightly, where it belongs.
 */
export const content: SiteContent = {
  herName: "Wissal",
  tagline: "A cinematic birthday made to celebrate one extraordinary girl",
  seo: {
    title: "Happy Birthday, Wissal",
    description:
      "A luxurious interactive birthday journey written for Wissal, full of light, admiration, and quiet love.",
  },

  photos: {
    hero: "/images/wissal1.jpeg",
    portrait: "/images/wissal1.jpeg",
    gift: "/images/wissal2.jpeg",
    finale: "/images/wissal3.jpeg",
  },

  intro: {
    lines: [
      "Today...",
      "isn't just another day...",
      "Because today...",
      "someone truly radiant...",
      "was born.",
    ],
    title: "Happy Birthday",
    cta: "Begin the Journey",
  },

  gift: {
    instruction: "Click the gift",
    revealCaption:
      "There you are: grace, warmth, and a beauty that feels effortless. Even a single glimpse of you is enough to soften an entire sky.",
  },

  portrait: {
    headline: "You, exactly as you are",
    subheadline: "Elegant. Luminous. Impossible to forget.",
    body: `Some people are beautiful in photographs. You are beautiful in presence: in the way light finds your face, in the calm of your smile, in that quiet confidence that never needs to raise its voice.

You move through the world with a kind of soft power. Soft, but never small. There is elegance in your stillness, poetry in your expression, and a rare warmth that makes everything around you feel more alive.

Looking at you feels like watching a film still that somehow kept breathing. You are cinematic without trying. Timeless without effort. The kind of person the heart remembers in high definition, even when days turn into distance.

This portrait is my way of saying what admiration always knew: you are stunning, inside and out. And the world is luckier every time you walk through it.`,
    image: "/images/wissal1.jpeg",
  },

  letter: {
    greeting: "My dearest Wissal,",
    lines: [
      "If beauty were only what the eyes can hold, you would already be unforgettable. But you are more than that. You are atmosphere. You are the pause in a noisy day. You are the kind of presence that makes people want to become gentler without knowing why.",
      "I have always seen something rare in you: a grace that does not perform, a smile that feels like sunlight arriving quietly, a soul that seems both soft and strong at once. You are the definition of quietly breathtaking.",
      "We once crossed paths in the same chapter of life, spoke less than I wished, and met rarely as years unfolded, and still my admiration never faded. If anything, time made it clearer. Some people leave noise behind them. You left light.",
      "I hope this birthday wraps itself around you like gold-hour air. I hope you feel celebrated not only for how you look, though heaven knows you are beautiful, but for your spirit, your calm, your depth, your way of making ordinary moments feel meaningful.",
      "You deserve mornings that begin kindly, friends who protect your softness, dreams that finally catch up to your worth, and a year that treats you with the same elegance you give the world without even trying.",
      "Happy birthday, Wissal. May every good thing find you, loudly, gently, and endlessly. You are cherished more deeply than these words can carry.",
    ],
    signature: "With all my admiration, and a love that stayed",
  },

  memories: [
    {
      id: "m1",
      image: "/images/wissal2.jpeg",
      caption:
        "That smile: warm, real, and bright enough to turn any ordinary second into something I never wanted to forget.",
      rotation: -5,
    },
    {
      id: "m2",
      image: "/images/wissal1.jpeg",
      caption:
        "Looking away, wrapped in sky and style. Proof that elegance can be effortless, and beauty can feel like poetry.",
      rotation: 4,
    },
    {
      id: "m3",
      image: "/images/wissal3.jpeg",
      caption:
        "Night, sea, and you. A black-and-white kind of magic. Even rare meetings feel unforgettable when it is you.",
      rotation: -3,
    },
  ],

  wishes: [
    {
      id: "w1",
      text: "May your year glitter softly, full of beauty, peace, and everything your heart has earned.",
    },
    {
      id: "w2",
      text: "May every mirror remind you that you are already extraordinary.",
    },
    {
      id: "w3",
      text: "May your mornings feel light, and your evenings feel like velvet.",
    },
    {
      id: "w4",
      text: "May people treat your kindness as something precious, because it is.",
    },
    {
      id: "w5",
      text: "May your softness never be mistaken for weakness. It is your luxury.",
    },
    {
      id: "w6",
      text: "May your dreams rise as gracefully as you do.",
    },
    {
      id: "w7",
      text: "May distance never convince you that you are easy to forget. You are unforgettable.",
    },
    {
      id: "w8",
      text: "May laughter visit you often, the bright kind that suits your smile.",
    },
    {
      id: "w9",
      text: "May your name always be spoken like something golden.",
    },
    {
      id: "w10",
      text: "May life give back to you every ounce of beauty you silently give away.",
    },
    {
      id: "w11",
      text: "May every rare reunion feel warm, and every goodbye feel unfinished in the best way.",
    },
    {
      id: "w12",
      text: "May you trust your own light. It has always been breathtaking.",
    },
    {
      id: "w13",
      text: "May your joy be deep, elegant, and entirely yours.",
    },
    {
      id: "w14",
      text: "May you bloom in every season, loudly in spirit, softly in grace.",
    },
    {
      id: "w15",
      text: "May your heart stay open, protected, and deeply valued.",
    },
    {
      id: "w16",
      text: "May music, travel, art, and quiet nights keep refilling your soul.",
    },
    {
      id: "w17",
      text: "May you feel special on your birthday, and on every ordinary day after.",
    },
    {
      id: "w18",
      text: "May opportunity recognize your brilliance the moment you enter a room.",
    },
    {
      id: "w19",
      text: "May those who love you never run out of reasons to be proud of you.",
    },
    {
      id: "w20",
      text: "May this birthday open the softest, brightest chapter of your life so far.",
    },
    {
      id: "w21",
      text: "May moonlight always remind you how luminous you already are.",
    },
    {
      id: "w22",
      text: "May you always know someone out here still admires you, completely.",
    },
  ],

  constellation: [
    {
      id: "s1",
      x: 18,
      y: 22,
      message: "You are the kind of star people notice even in a crowded sky.",
      connections: ["s2", "s3"],
    },
    {
      id: "s2",
      x: 34,
      y: 18,
      message: "Your smile could rearrange an entire evening.",
      connections: ["s4"],
    },
    {
      id: "s3",
      x: 28,
      y: 38,
      message: "Grace looks natural on you, as if the universe practiced with you in mind.",
      connections: ["s5"],
    },
    {
      id: "s4",
      x: 52,
      y: 24,
      message: "Beauty like yours does not ask for attention. It simply arrives.",
      connections: ["s6"],
    },
    {
      id: "s5",
      x: 44,
      y: 48,
      message: "Even rare moments with you feel richer than long chapters with anyone else.",
      connections: ["s7"],
    },
    {
      id: "s6",
      x: 68,
      y: 30,
      message: "You are elegance without effort, warmth without noise, magic without needing proof.",
      connections: ["s8"],
    },
    {
      id: "s7",
      x: 60,
      y: 55,
      message: "Some souls shine softly, and somehow outshine everything.",
      connections: ["s9"],
    },
    {
      id: "s8",
      x: 78,
      y: 42,
      message: "If the night had a favorite face, it would look a little like yours.",
      connections: ["s10"],
    },
    {
      id: "s9",
      x: 72,
      y: 68,
      message: "Happy birthday to a girl made of light, mystery, and quiet wonder.",
      connections: ["s10"],
    },
    {
      id: "s10",
      x: 86,
      y: 58,
      message: "Wherever you are tonight, may the sky celebrate with you.",
      connections: [],
    },
  ],

  timeline: [
    {
      id: "t1",
      year: "First light",
      title: "When I Noticed You",
      description:
        "Before anything was spoken, something was already certain: you had a presence that rearranged the air. Beauty, calm, and a kind of quiet brilliance I could not ignore.",
      image: "/images/wissal2.jpeg",
    },
    {
      id: "t2",
      year: "Admiration",
      title: "A Feeling That Grew Softly",
      description:
        "No grand confessions. No loud story. Just a deep, steady admiration for your smile, your elegance, your way of existing like poetry that never needs to explain itself.",
    },
    {
      id: "t3",
      year: "Distance",
      title: "Rare Meetings, Same Wonder",
      description:
        "Life made our meetings rare. And somehow, every time still felt familiar, as if my heart recognized you instantly, with the same warmth, the same wonder, the same quiet yes.",
      image: "/images/wissal1.jpeg",
    },
    {
      id: "t4",
      year: "Still",
      title: "What Never Faded",
      description:
        "I still think you are extraordinary. Still hope life is gentle with you. Still believe you deserve a world that celebrates your softness and your strength in equal measure.",
      image: "/images/wissal3.jpeg",
    },
    {
      id: "t5",
      year: "Today",
      title: "Your Birthday",
      description:
        "Today is for you: for your light, your beauty, your becoming. Happy birthday, Wissal. May this year be as radiant as the way you already shine.",
    },
  ],

  garden: {
    headline: "A garden grown for you",
    body: `If affection could bloom, it would look like this: soft petals, floating light, and a sky that somehow knows your name.

You are the kind of person who makes beauty feel natural, in a glance, in a smile, in the calm you carry without trying. This garden is my thank-you for that. For the warmth. For the elegance. For the way you stay unforgettable even from afar.

May your life keep flowering, richly, gently, and in every color that suits a soul as rare as yours.`,
  },

  book: {
    title: "A Book of You",
    pages: [
      {
        id: "p1",
        title: "Prologue",
        content:
          "Some people enter a life loudly. You entered mine like moonlight: soft, unforgettable, impossible to ignore once seen. Wissal: a name that still feels like light.",
        quote: "True beauty does not shout. It simply stays.",
      },
      {
        id: "p2",
        title: "On Your Beauty",
        content:
          "You are stunning in a way that feels effortless, the kind of beauty that belongs in cinema and still somehow feels intimate. Every photo of you looks like a moment the world wanted to keep.",
        quote: "Elegance is your natural language.",
      },
      {
        id: "p3",
        title: "On Your Presence",
        content:
          "It is not only how you look. It is how you make a space feel warmer just by being in it. Your smile softens things. Your calm steadies them. Your spirit leaves a glow behind.",
        quote: "You are presence, not performance.",
      },
      {
        id: "p4",
        title: "On Distance",
        content:
          "Even when we meet only once in a long while, nothing about my admiration cools. Rare does not mean forgotten. Far does not mean faded. You remain vivid, beautifully, completely.",
        quote: "Some feelings become clearer with time.",
      },
      {
        id: "p5",
        title: "On What I See in You",
        content:
          "I see grace. I see kindness. I see a girl who carries both softness and strength like they were always meant to live together. You are rare, and the world is better for having you in it.",
        quote: "To admire you is the easiest honesty I know.",
      },
      {
        id: "p6",
        title: "Birthday Vow",
        content:
          "On your birthday, I hope joy finds you with open arms. I hope you feel as celebrated as you deserve. You were seen. You were remembered. You were, and still are, deeply cherished.",
        quote: "Happy birthday, Wissal. Made with love, especially for you.",
      },
    ],
  },

  cake: {
    headline: "Make a wish",
    instruction: "Click the cake to blow out the candles",
    celebration:
      "If the candles could listen, they would hear this wish: may your year be as beautiful as you already are.",
  },

  finale: {
    title: "Happy Birthday",
    messages: [
      "You are beautiful in light, in silence, in every way that matters.",
      "Thank you for being someone the heart cannot forget.",
      "I hope today wraps you in endless happiness.",
      "Wherever life takes you, may it always treat you like the rare soul you are.",
    ],
    closing: "With quiet love, and endless admiration.",
    dedication: "Made with ❤️ especially for you, Wissal.",
  },

  audio: {
    ambient: "/sounds/ambient.mp3",
    celebration: "/sounds/celebration.mp3",
    piano: "/sounds/piano.mp3",
    birds: "/sounds/birds.mp3",
    wind: "/sounds/wind.mp3",
  },
};

export const extendedNarratives = {
  journeyBridge: `This journey was built for one reason: to celebrate you.

Not with noise, with care. Not with empty phrases, with the kind of admiration that stays honest. Walk slowly. Every light, every word, every scene was placed here to say what you deserve to hear: you are extraordinary.`,

  afterMemories: `Only a few photographs, and somehow each one still feels endless.

Because you are not easy to summarize. You are smile and sky and midnight calm. You are elegance without trying. These frames are small, but the feeling behind them is not.`,

  beforeFinale: `Before the last light fades, let this remain:

You are admired. You are celebrated. You are worth every careful word in this place.

Happy birthday, Wissal. May your next chapter shine.`,
};
