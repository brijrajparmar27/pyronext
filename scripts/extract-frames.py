#!/usr/bin/env python3
"""
extract-frames.py
------------------
Converts a source .mp4 into a sequentially-numbered WebP frame sequence for
the Pyronite scroll-scrubbing background (app/components/background/BackgroundFrameCanvas.tsx).

No FFmpeg install required — video decoding is handled by OpenCV's bundled
codecs (shipped inside the `opencv-python` wheel).

SETUP (one-time):
    pip install opencv-python pillow

USAGE:
    python scripts/extract-frames.py --input "C:\\Users\\HP\\Downloads\\b_Cinematic_ultra-phot.mp4" --out public/hero-sequence

Common options:
    --fps 30        Target sampling rate (default 30). If this exceeds the
                     source video's native fps, frames are duplicated to hit
                     the requested timing — that's fine for scroll-scrubbing,
                     but you can pass --fps <source_fps> to avoid duplicates
                     and shrink the output folder.
    --width 1600    Resize output width in px, aspect ratio preserved
                     (0 = keep source resolution).
    --quality 72    WebP quality 0-100. 70-75 is a good size/clarity balance.
    --out DIR       Output folder (created if missing).

The script prints the final frame count — copy that into
HERO_FRAME_COUNT in app/components/hero/heroContent.ts.
"""

import argparse
import os
import sys

import cv2
from PIL import Image


def extract_frames(input_path: str, out_dir: str, target_fps: float, width: int, quality: int) -> int:
    if not os.path.isfile(input_path):
        sys.exit(f"ERROR: input video not found: {input_path}")

    os.makedirs(out_dir, exist_ok=True)

    cap = cv2.VideoCapture(input_path)
    if not cap.isOpened():
        sys.exit(f"ERROR: could not open video (missing codec?): {input_path}")

    source_fps = cap.get(cv2.CAP_PROP_FPS) or target_fps
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = (total_frames / source_fps) if source_fps else 0.0

    print(f"Source : {source_fps:.2f} fps | {total_frames} frames | {duration:.2f}s")
    if target_fps > source_fps + 0.01:
        print(
            f"NOTE   : requested --fps {target_fps:g} exceeds source fps "
            f"({source_fps:.2f}); some frames will be duplicated to preserve "
            f"timing. Pass --fps {source_fps:.0f} to avoid duplicates."
        )

    sample_interval = source_fps / target_fps  # in source-frame units
    saved = 0
    next_sample_at = 0.0
    read_idx = 0

    while True:
        ok, frame_bgr = cap.read()
        if not ok:
            break

        if read_idx >= next_sample_at:
            rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(rgb)

            if width and img.width > width:
                ratio = width / img.width
                img = img.resize((width, round(img.height * ratio)), Image.LANCZOS)

            saved += 1
            out_path = os.path.join(out_dir, f"frame_{saved:04d}.webp")
            img.save(out_path, "WEBP", quality=quality, method=6)
            next_sample_at += sample_interval

        read_idx += 1

    cap.release()

    print(f"\nDone   : {saved} frames written to {os.path.abspath(out_dir)}")
    print(f"Next   : set HERO_FRAME_COUNT = {saved} in app/components/hero/heroContent.ts")
    return saved


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract a video into a WebP frame sequence.")
    parser.add_argument("--input", required=True, help="Path to the source .mp4")
    parser.add_argument("--out", default="public/hero-sequence", help="Output folder")
    parser.add_argument("--fps", type=float, default=30, help="Target sampling fps (default 30)")
    parser.add_argument("--width", type=int, default=1600, help="Resize width in px (0 = keep original)")
    parser.add_argument("--quality", type=int, default=72, help="WebP quality 0-100 (default 72)")
    args = parser.parse_args()

    extract_frames(args.input, args.out, args.fps, args.width, args.quality)


if __name__ == "__main__":
    main()
