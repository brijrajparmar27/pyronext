// Hero copy + frame-sequence config.
// The background (app/components/background/BackgroundFrameCanvas.tsx) and the
// foreground copy (app/components/hero/ScrollytellingHero.tsx) are decoupled:
// the canvas scrubs across the #scrollytelling-zone wrapper in page.tsx while
// these blocks simply reveal in normal document flow via `.gsap-reveal`.

export interface HeroCheckpoint {
  id: string;
  /** Monospace eyebrow label, e.g. "00 / NEURAL GENESIS" */
  eyebrow: string;
  /** Heading markup — inline <span> is used for the accent word(s) */
  heading: string;
  sub: string;
  cta?: { label: string; href: string };
}

// Covers the five brief themes: AI, the Future Internet, Enterprise
// Digitization, Cloud Architecture, and Neural Data.
export const HERO_CHECKPOINTS: HeroCheckpoint[] = [
  {
    id: "neural-genesis",
    eyebrow: "00 / NEURAL GENESIS — AI",
    heading: "Where <span>Artificial Intelligence</span><br />Becomes Infrastructure",
    sub: "Pyronite architects self-learning, self-healing cores at the center of modern enterprise systems.",
  },
  {
    id: "future-internet",
    eyebrow: "01 / FIBER HIGHWAY — THE FUTURE INTERNET",
    heading: "Data Doesn't Travel.<br />It <span>Flows</span>.",
    sub: "Real-time, decentralized, always-on — we build the rails of the next internet.",
  },
  {
    id: "enterprise-cloud",
    eyebrow: "02 / CLOUD ARCHITECTURE — ENTERPRISE DIGITIZATION",
    heading: "Legacy, <span>Reforged</span><br />for Cloud-Native Scale",
    sub: "From monoliths to microservices — enterprises re-architected for a cloud-first future.",
  },
  {
    id: "digital-landscape",
    eyebrow: "03 / NEURAL DATA — THE ARCHITECTURE OF TOMORROW",
    heading: "Enter the<br /><span>Digital</span> Enterprise",
    sub: "Pyronite Tech — engineering the invisible infrastructure behind intelligent organizations.",
    cta: { label: "Initiate a Project →", href: "/connect" },
  },
];

// Matches the real sequence extracted via scripts/extract-frames.py from
// b_Cinematic_ultra-phot.mp4 (24fps source, 10.12s, 1600x900 webp q72).
export const HERO_FRAME_COUNT = 243;
export const HERO_FRAME_BASE_PATH = "/hero-sequence";

/** 1-based frame filenames on disk: frame_0001.webp ... frame_0243.webp */
export function getHeroFrameUrl(index: number): string {
  const n = String(index + 1).padStart(4, "0");
  return `${HERO_FRAME_BASE_PATH}/frame_${n}.webp`;
}
