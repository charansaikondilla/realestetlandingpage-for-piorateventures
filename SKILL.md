---
name: piorate-ventures-design
description: Use this skill to generate well-branded interfaces and assets for Piorate Ventures, an AI automation company for real estate. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Aesthetic — premium, dark, cyber-tech luxury, AI-native.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key files:
- `README.md` — Brand context, content fundamentals, visual foundations, iconography.
- `colors_and_type.css` — All design tokens (colors, type scale, spacing, radii, shadows, motion).
- `assets/` — Logo variants. Always use `logo-mark-white.png` on dark surfaces; `logo-mark.png` on light.
- `preview/` — Reference cards showing every token in use.
- `ui_kits/landing/` — Composable React components for the landing page; copy into new work.

Hard rules:
- Never use purple-blue gradients.
- Never use emoji as iconography. Use Lucide icons (CDN: `https://unpkg.com/lucide-static/icons/<name>.svg`) at 1.6px stroke.
- Background is always `var(--bg-0)` (#05070D) — light surfaces only for inverted blocks.
- Cyan accent (`#5EE7FF`) only on live/active states and primary CTAs — not as a fill color for arbitrary text.
- Headlines are Title Case; sub-copy is Sentence case. Service names are TitleCased and trademarked.
- No exclamation marks, no "synergy / leverage / unlock / supercharge".
