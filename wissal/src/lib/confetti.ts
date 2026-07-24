import confetti from "canvas-confetti";

export function fireCelebration() {
  const duration = 4200;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 58,
      origin: { x: 0, y: 0.7 },
      colors: ["#d4af37", "#f8b4c4", "#c084fc", "#ffffff", "#60a5fa"],
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 58,
      origin: { x: 1, y: 0.7 },
      colors: ["#d4af37", "#f8b4c4", "#c084fc", "#ffffff", "#60a5fa"],
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  };

  frame();

  confetti({
    particleCount: 160,
    spread: 100,
    startVelocity: 45,
    origin: { y: 0.55 },
    colors: ["#d4af37", "#fbcfe8", "#a78bfa", "#93c5fd", "#ffffff"],
  });
}

export function fireSparkles(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 40,
    spread: 360,
    startVelocity: 18,
    gravity: 0.4,
    ticks: 90,
    origin: { x, y },
    colors: ["#d4af37", "#ffffff", "#f9a8d4"],
    shapes: ["circle"],
    scalar: 0.7,
  });
}
