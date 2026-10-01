// FrameSequencePlayer
// A framework-agnostic canvas engine implementing the Apple-style
// scroll-scrubbed image-sequence technique, sized for a fixed, full-viewport
// background canvas:
//  - preloading with progress reporting (caller decides when to reveal)
//  - devicePixelRatio-aware 100vw x 100vh sizing (viewport-driven, not
//    parent-box-driven — this canvas is `position: fixed`, so its box can't
//    be used to infer size the way an in-flow element's could)
//  - lerp-smoothed playhead so rendering is decoupled from raw scroll events
//  - object-fit: cover drawImage so the sequence never stretches/distorts
//  - graceful failure flagging so the caller can swap to a fallback UI
//  - full teardown (rAF, listeners, image handles) to avoid leaks

export interface FrameSequenceOptions {
  canvas: HTMLCanvasElement;
  frameCount: number;
  getFrameUrl: (index: number) => string;
  /** Caps internal canvas resolution multiplier (perf safeguard on 3x+ displays) */
  maxDpr?: number;
  /** How quickly the rendered frame chases the scroll-driven target (0..1) */
  lerpFactor?: number;
  onProgress?: (loaded: number, total: number) => void;
  /** Fires once the first frame has painted (callers that want an early paint) */
  onReady?: () => void;
  /** Fires if the very first frame fails to load (treat as a hard asset failure) */
  onError?: () => void;
}

export class FrameSequencePlayer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private frameCount: number;
  private getFrameUrl: (index: number) => string;
  private maxDpr: number;
  private lerpFactor: number;

  private frames: (HTMLImageElement | undefined)[] = [];
  private loadedCount = 0;
  private currentFrame = 0;
  private targetFrame = 0;
  private dpr = 1;

  private rafId: number | null = null;
  private destroyed = false;
  private failed = false;

  private onProgress?: (loaded: number, total: number) => void;
  private onReady?: () => void;
  private onError?: () => void;
  private readyFired = false;

  constructor(opts: FrameSequenceOptions) {
    this.canvas = opts.canvas;
    this.frameCount = opts.frameCount;
    this.getFrameUrl = opts.getFrameUrl;
    this.maxDpr = opts.maxDpr ?? 2;
    this.lerpFactor = opts.lerpFactor ?? 0.12;
    this.onProgress = opts.onProgress;
    this.onReady = opts.onReady;
    this.onError = opts.onError;
    this.ctx = this.canvas.getContext("2d", { alpha: false });

    this.frames = new Array(this.frameCount);
    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);

    this.resize();
    this.observeResize();
    this.preloadFirstFrame();
    this.rafId = requestAnimationFrame(this.loop);
  }

  /** Called by the scroll driver (e.g. GSAP ScrollTrigger onUpdate) with 0..1 progress. */
  setTargetProgress(progress: number): void {
    const clamped = Math.min(1, Math.max(0, progress));
    this.targetFrame = clamped * (this.frameCount - 1);
  }

  hasFailed(): boolean {
    return this.failed;
  }

  destroy(): void {
    this.destroyed = true;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    window.removeEventListener("resize", this.resize);
    window.visualViewport?.removeEventListener("resize", this.resize);
    for (const img of this.frames) {
      if (img) {
        img.onload = null;
        img.onerror = null;
        img.src = "";
      }
    }
    this.frames = [];
  }

  // -- internals --------------------------------------------------------

  private observeResize() {
    // position: fixed covers the viewport directly, so we size off the
    // viewport itself rather than canvas.parentElement (which for a fixed
    // background is typically <body> — full document height, not 100vh).
    window.addEventListener("resize", this.resize);
    window.visualViewport?.addEventListener("resize", this.resize);
  }

  private resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr);

    const targetW = Math.round(width * this.dpr);
    const targetH = Math.round(height * this.dpr);
    if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
      this.canvas.width = targetW;
      this.canvas.height = targetH;
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
    }
    this.draw();
  }

  private preloadFirstFrame() {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (this.destroyed) return;
      this.frames[0] = img;
      this.loadedCount++;
      this.onProgress?.(this.loadedCount, this.frameCount);
      this.fireReadyOnce();
      this.draw();
      this.preloadRemainingFrames();
    };
    img.onerror = () => {
      if (this.destroyed) return;
      this.failed = true;
      this.onError?.();
    };
    img.src = this.getFrameUrl(0);
  }

  private preloadRemainingFrames() {
    const CONCURRENCY = 6;
    let nextIndex = 1;

    const loadNext = () => {
      if (this.destroyed || nextIndex >= this.frameCount) return;
      const i = nextIndex++;
      const img = new Image();
      img.decoding = "async";
      const settle = () => {
        if (this.destroyed) return;
        this.loadedCount++;
        this.onProgress?.(this.loadedCount, this.frameCount);
        loadNext();
      };
      img.onload = () => {
        if (!this.destroyed) this.frames[i] = img;
        settle();
      };
      img.onerror = settle; // skip missing frame, nearest-neighbor fallback covers it
      img.src = this.getFrameUrl(i);
    };

    for (let c = 0; c < CONCURRENCY; c++) loadNext();
  }

  private fireReadyOnce() {
    if (this.readyFired) return;
    this.readyFired = true;
    this.onReady?.();
  }

  private findNearestLoaded(idx: number): HTMLImageElement | undefined {
    for (let d = 0; d < this.frameCount; d++) {
      if (this.frames[idx - d]) return this.frames[idx - d];
      if (this.frames[idx + d]) return this.frames[idx + d];
    }
    return undefined;
  }

  private loop() {
    if (this.destroyed) return;
    const delta = this.targetFrame - this.currentFrame;
    if (Math.abs(delta) < 0.02) {
      this.currentFrame = this.targetFrame;
    } else {
      this.currentFrame += delta * this.lerpFactor;
    }
    this.draw();
    this.rafId = requestAnimationFrame(this.loop);
  }

  private draw() {
    if (this.failed || !this.ctx) return;
    const idx = Math.round(this.currentFrame);
    const img = this.frames[idx] ?? this.findNearestLoaded(idx);
    if (!img) return;

    const { width, height } = this.canvas;
    const canvasRatio = width / height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let sx = 0;
    let sy = 0;
    let sw = img.naturalWidth;
    let sh = img.naturalHeight;

    // object-fit: cover — crop the source so the frame always fills the
    // canvas without stretching, regardless of viewport aspect ratio.
    if (imgRatio > canvasRatio) {
      sw = sh * canvasRatio;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = sw / canvasRatio;
      sy = (img.naturalHeight - sh) / 2;
    }

    this.ctx.clearRect(0, 0, width, height);
    this.ctx.drawImage(img, sx, sy, sw, sh, 0, 0, width, height);
  }
}
