# `/public/hero-sequence/` — Scroll-Scrubbed Background Frame Sequence

Consumed by `app/components/background/BackgroundFrameCanvas.tsx` via
`FrameSequencePlayer` (`app/components/background/FrameSequencePlayer.ts`).

## Current asset

Generated with `scripts/extract-frames.py` from `b_Cinematic_ultra-phot.mp4`:

```
python scripts/extract-frames.py --input "c:\Users\HP\Downloads\b_Cinematic_ultra-phot.mp4" --out public\hero-sequence --fps 24 --width 1600 --quality 72
```

| Property | Value |
|---|---|
| Frame count | **243** (`HERO_FRAME_COUNT` in `app/components/hero/heroContent.ts`) |
| Sampling fps | 24 (matches source — no duplicate frames) |
| Resolution | 1600×900 |
| Format / quality | WebP, q72 |
| Total payload | ~13.6MB (~57KB/frame avg) |

Naming: 1-based, zero-padded to 4 digits — `frame_0001.webp` … `frame_0243.webp`.

## Regenerating

Re-run the extraction script any time you have a new source clip. Update
`HERO_FRAME_COUNT` in `heroContent.ts` to whatever count it prints. If the
first frame (`frame_0001.webp`) ever fails to load, `BackgroundFrameCanvas`
automatically falls back to a gradient backdrop instead of a blank canvas —
see its `onError` handler.
