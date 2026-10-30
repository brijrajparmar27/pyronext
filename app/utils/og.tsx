// Shared Open Graph / Twitter card renderer, built with `next/og`'s
// ImageResponse. Centralized here so every route's opengraph-image.tsx /
// twitter-image.tsx produces a consistent, on-brand 1200x630 social card
// instead of every page reusing the same flat /logo.png placeholder —
// this is one of the highest-leverage levers for social CTR ("reach and
// engagement") since link previews are what get clicked/shared.
//
// Deliberately text/CSS only (no embedded raster logo): ImageResponse has
// an 500KB total bundle cap and the PNG logo alone exceeds that, so the
// brand mark is recreated with the same flat orange-accent, mono-label
// visual language already used across the site (see globals.css / the
// `label` + `borderLeft: var(--primary)` treatment on every page hero).

const PRIMARY = "#ec5b13";
const BG = "#0a0a0a";
const TEXT_MUTED = "#a1a1a1";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export interface OgCardProps {
  /** Small uppercase mono label above the title, e.g. a category or section name. */
  eyebrow: string;
  /** Main headline — wraps automatically, so long titles are safe. */
  title: string;
  /** Optional one-line supporting description shown under the title. */
  description?: string;
}

export function OgCard({ eyebrow, title, description }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: BG,
        backgroundImage:
          "linear-gradient(135deg, rgba(236,91,19,0.16) 0%, rgba(10,10,10,0) 55%)",
        padding: "72px 88px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Top: wordmark */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 14,
            height: 44,
            backgroundColor: PRIMARY,
            marginRight: 20,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 2,
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          Pyronite&nbsp;<span style={{ color: PRIMARY }}>Tech</span>
        </div>
      </div>

      {/* Middle: eyebrow + title + description */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: PRIMARY,
            marginBottom: 24,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 52 : 64,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.5,
              color: TEXT_MUTED,
              marginTop: 24,
              maxWidth: 880,
            }}
          >
            {description}
          </div>
        )}
      </div>

      {/* Bottom: footer rule */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "2px solid rgba(255,255,255,0.12)",
          paddingTop: 28,
          fontSize: 22,
          color: TEXT_MUTED,
          letterSpacing: 1,
        }}
      >
        <div style={{ display: "flex" }}>pyronite.in</div>
        <div style={{ display: "flex" }}>Enterprise Liferay DXP &amp; Open-Source Systems</div>
      </div>
    </div>
  );
}
