import localFont from "next/font/local";
import "./google-fonts/google-fonts.css";

// The site's Google Fonts, self-hosted: the exact files, subsets, weights,
// preloads and size-adjusted fallbacks next/font/google fetched from Google
// at build time, copied into the repo so a build never depends on
// fonts.googleapis.com (vercel/next.js#99114: Google sometimes answers with
// URLs next/font cannot parse, and the build fails). Visitors get the same
// bytes and the same CSS as before.
//
// Each localFont() below is one of Google's unicode-range subsets; together
// they emit the family's @font-face rules. The exported objects are what the
// layout used before; their classes are in google-fonts/google-fonts.css.

const displayFaces1 = localFont({
  src: [
    { path: "./google-fonts/source-serif-4-20aee433927f7d4b-s.woff2", weight: "400", style: "normal" },
    { path: "./google-fonts/source-serif-4-20aee433927f7d4b-s.woff2", weight: "500", style: "normal" },
    { path: "./google-fonts/source-serif-4-20aee433927f7d4b-s.woff2", weight: "600", style: "normal" },
    { path: "./google-fonts/source-serif-4-20aee433927f7d4b-s.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    { prop: "unicode-range", value: "U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F" },
  ],
});

const displayFaces2 = localFont({
  src: [
    { path: "./google-fonts/source-serif-4-256e1f7f180674ba-s.woff2", weight: "400", style: "normal" },
    { path: "./google-fonts/source-serif-4-256e1f7f180674ba-s.woff2", weight: "500", style: "normal" },
    { path: "./google-fonts/source-serif-4-256e1f7f180674ba-s.woff2", weight: "600", style: "normal" },
    { path: "./google-fonts/source-serif-4-256e1f7f180674ba-s.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    { prop: "unicode-range", value: "U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116" },
  ],
});

const displayFaces3 = localFont({
  src: [
    { path: "./google-fonts/source-serif-4-be3bf58b83159894-s.woff2", weight: "400", style: "normal" },
    { path: "./google-fonts/source-serif-4-be3bf58b83159894-s.woff2", weight: "500", style: "normal" },
    { path: "./google-fonts/source-serif-4-be3bf58b83159894-s.woff2", weight: "600", style: "normal" },
    { path: "./google-fonts/source-serif-4-be3bf58b83159894-s.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    { prop: "unicode-range", value: "U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF" },
  ],
});

const displayFaces4 = localFont({
  src: [
    { path: "./google-fonts/source-serif-4-753b6407f468151f-s.woff2", weight: "400", style: "normal" },
    { path: "./google-fonts/source-serif-4-753b6407f468151f-s.woff2", weight: "500", style: "normal" },
    { path: "./google-fonts/source-serif-4-753b6407f468151f-s.woff2", weight: "600", style: "normal" },
    { path: "./google-fonts/source-serif-4-753b6407f468151f-s.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    { prop: "unicode-range", value: "U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB" },
  ],
});

const displayFaces5 = localFont({
  src: [
    { path: "./google-fonts/source-serif-4-292081311a6a8abc-s.woff2", weight: "400", style: "normal" },
    { path: "./google-fonts/source-serif-4-292081311a6a8abc-s.woff2", weight: "500", style: "normal" },
    { path: "./google-fonts/source-serif-4-292081311a6a8abc-s.woff2", weight: "600", style: "normal" },
    { path: "./google-fonts/source-serif-4-292081311a6a8abc-s.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    { prop: "unicode-range", value: "U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF" },
  ],
});

const displayFaces6 = localFont({
  src: [
    { path: "./google-fonts/source-serif-4-68d403cf9f2c68c5-s.woff2", weight: "400", style: "normal" },
    { path: "./google-fonts/source-serif-4-68d403cf9f2c68c5-s.woff2", weight: "500", style: "normal" },
    { path: "./google-fonts/source-serif-4-68d403cf9f2c68c5-s.woff2", weight: "600", style: "normal" },
    { path: "./google-fonts/source-serif-4-68d403cf9f2c68c5-s.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    { prop: "unicode-range", value: "U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" },
  ],
});

const bodyFaces1 = localFont({
  src: [
    { path: "./google-fonts/inter-2c55a0e60120577a-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+460-52F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F" },
  ],
});

const bodyFaces2 = localFont({
  src: [
    { path: "./google-fonts/inter-9c72aa0f40e4eef8-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+301,U+400-45F,U+490-491,U+4B0-4B1,U+2116" },
  ],
});

const bodyFaces3 = localFont({
  src: [
    { path: "./google-fonts/inter-ad66f9afd8947f86-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+1F??" },
  ],
});

const bodyFaces4 = localFont({
  src: [
    { path: "./google-fonts/inter-5476f68d60460930-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+370-377,U+37A-37F,U+384-38A,U+38C,U+38E-3A1,U+3A3-3FF" },
  ],
});

const bodyFaces5 = localFont({
  src: [
    { path: "./google-fonts/inter-2bbe8d2671613f1f-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+102-103,U+110-111,U+128-129,U+168-169,U+1A0-1A1,U+1AF-1B0,U+300-301,U+303-304,U+308-309,U+323,U+329,U+1EA0-1EF9,U+20AB" },
  ],
});

const bodyFaces6 = localFont({
  src: [
    { path: "./google-fonts/inter-1bffadaabf893a1e-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+100-2BA,U+2BD-2C5,U+2C7-2CC,U+2CE-2D7,U+2DD-2FF,U+304,U+308,U+329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF" },
  ],
});

const bodyFaces7 = localFont({
  src: [
    { path: "./google-fonts/inter-83afe278b6a6bb3c-s.woff2", weight: "100 900", style: "normal" },
  ],
  display: "swap",
  preload: true,
  adjustFontFallback: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    { prop: "unicode-range", value: "U+0000-00FF,U+131,U+152-153,U+2BB-2BC,U+2C6,U+2DA,U+2DC,U+304,U+308,U+329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" },
  ],
});

/** Source Serif 4: what next/font/google returned for it. */
export const display = {
  className: "google-font-source-serif-4",
  variable: "google-font-source-serif-4-variable",
  style: { fontFamily: "'Source Serif 4', 'Source Serif 4 Fallback'", fontStyle: "normal" },
  faces: [displayFaces1, displayFaces2, displayFaces3, displayFaces4, displayFaces5, displayFaces6],
} as const;

/** Inter: what next/font/google returned for it. */
export const body = {
  className: "google-font-inter",
  variable: "google-font-inter-variable",
  style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" },
  faces: [bodyFaces1, bodyFaces2, bodyFaces3, bodyFaces4, bodyFaces5, bodyFaces6, bodyFaces7],
} as const;
