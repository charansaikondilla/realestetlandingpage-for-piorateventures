# Piorate Ventures Design System

> Premium AI automation systems for real estate. Cyber-tech luxury aesthetic.

## Brand at a glance

**Piorate Ventures** sells AI automation systems to real estate businesses (agencies, builders, sales teams, luxury property firms). Core promise: *Save time. Close more deals. Scale without hiring more staff.*

The brand visual identity comes from the uploaded logo — a **shield mark** with interlocking **P** and **V** letterforms threaded through a **circuit-board pattern** in **metallic dark navy**. Sharp futuristic geometry, AI circuitry detailing, minimal but powerful.

The aesthetic target is **Apple-clean × Linear/Vercel-premium × luxury dark UI**. Avoid generic agency layouts, gradient-purple SaaS clichés, and template-looking sections.

### Source materials

- `uploads/piorate ventures logo .jpeg` — original logo (381×453 JPEG, white bg) provided by the client. Processed variants are in `assets/`.
- Brand brief, voice, services, and section copy — provided inline by the user; transcribed throughout this README.

No codebase, Figma file, or existing site was provided — visual direction is derived from the logo and the written brand brief.

---

## Index

| File | Purpose |
| --- | --- |
| `README.md` | This file — brand context, content & visual foundations, iconography. |
| `SKILL.md` | Cross-compatible skill manifest for downstream use. |
| `colors_and_type.css` | CSS custom properties for color, type, spacing, radii, shadows. |
| `assets/` | Logo variants, favicon, brand marks. |
| `fonts/` | (Empty — using Google Fonts via CDN; see Type below.) |
| `preview/` | Design system preview cards (rendered in the Design System tab). |
| `ui_kits/landing/` | High-fidelity recreation of the landing page with reusable JSX components. |

---

## CONTENT FUNDAMENTALS

**Tone.** Confident. Sharp. Results-driven. Premium without being showy. Reads like a high-ticket consultancy that knows it's good — not like a marketing agency. Minimal corporate jargon. No exclamation marks except sparingly. No emoji.

**Person.** "You" (the operator) and "we / our" (Piorate). Never "I". Never refer to the reader as "users" or "clients" — they are *real estate teams*, *agencies*, *builders*, *sales teams*.

**Casing.** Headlines use **Title Case** for impact lines ("Stop Losing Real Estate Leads.") and **Sentence case** for sub-copy. Service names are TitleCased and trademarked: *AI Voice Closers™*, *RevenueFlow Automation™*, *AI Content Engine™*. Buttons are Title Case ("Book a Free Strategy Call").

**Structure.** Two-line hero pattern: a short *pain* sentence followed by a longer *promise* sentence ending in a benefit phrase.

> Stop Losing Real Estate Leads.
> Let AI Handle Sales, Follow-Ups & Marketing 24/7.

**Numbers and time.** Lean on concrete time signals: *24/7*, *instantly*, *in minutes*, *within the first month*, *while you sleep*. Avoid vague claims ("a lot faster") — always anchor in a measurable phrasing.

**Vocabulary patterns** (use freely):
- "Automate / automation / automated"
- "Premium AI systems"
- "Lead handling, follow-ups, content, workflows"
- "Sales machine", "growth system", "AI-powered"
- "Capture / qualify / convert / close"

**Avoid:** "synergy", "solutions", "leverage", "unlock", "supercharge", "game-changing", emoji, !!, ALL CAPS shouting, AI-generated em-dashy filler.

**Sample microcopy.**
- CTA primary: *Book a Free Strategy Call*
- CTA secondary: *See How Automation Works*
- Trust strip: *24/7 AI Lead Response · Faster Lead Conversion · Automated Client Follow-Ups*
- Section header: *Built For Real Estate Teams That Want To Scale Faster.*
- Outcome line (per service): a single short sentence ending in a period — e.g. *Never miss a high-intent property lead again.*

---

## VISUAL FOUNDATIONS

### Color

The palette is mined directly from the logo: a **deep navy obsidian** ground, a **steel-blue / gunmetal** mid, and **silver-platinum** for highlights. A single **electric cyan** accent stands in for the "live circuit" lines.

| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Obsidian (canvas) | `--bg-0` | `#05070D` | Page background, hero void |
| Navy ink | `--bg-1` | `#0A0E1A` | Primary surfaces |
| Navy raised | `--bg-2` | `#10172A` | Cards, panels |
| Gunmetal | `--bg-3` | `#1A2238` | Hover surface, raised card |
| Steel | `--line-1` | `#2A3550` | Hairline borders |
| Steel bright | `--line-2` | `#3D4D70` | Active borders |
| Platinum | `--fg-0` | `#EAF1FF` | Headlines |
| Silver | `--fg-1` | `#B8C4DB` | Body text |
| Silver dim | `--fg-2` | `#7A88A6` | Captions, meta |
| Cyan circuit | `--accent` | `#5EE7FF` | Live indicators, links, key CTAs |
| Cyan glow | `--accent-glow` | `rgba(94,231,255,0.35)` | Aura around accents |
| Success | `--ok` | `#3DDC97` | Automation-on states |
| Warn | `--warn` | `#FFB454` | "Before automation" pain states |

Backgrounds skew **cool and dark** at all times. Light surfaces are reserved for inverted blocks (e.g. testimonial card on platinum) and used sparingly.

### Type

- **Display / headlines:** *Space Grotesk* (700, tight tracking). Geometric, slightly mechanical — pairs with the circuit motif.
- **Body / UI:** *Inter Tight* (400/500/600).
- **Mono / data / code-feel labels:** *JetBrains Mono* (500, uppercase, +0.16em tracking).

> **Substitution flag.** No font files were provided. Space Grotesk, Inter Tight, and JetBrains Mono are pulled from Google Fonts. If the brand has licensed display faces (Aeonik, Söhne, Neue Haas Grotesk Display), please drop the `.woff2` files into `fonts/` and update `colors_and_type.css`.

Display sizes are aggressive (clamp 48–88px). Body is 16/24. Mono is used as the **eyebrow label** above section headers — uppercase, letter-spaced, accent-colored.

### Spacing & layout

- 4px base unit. Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- Page max width: 1280px, with 96px section vertical rhythm on desktop.
- Hero is full-bleed; content sections center on a 1200px column.
- Cards never touch — minimum 24px gap between sibling cards.

### Backgrounds

The signature backdrop is a **deep navy field with a faint circuit-grid pattern** (1px hairlines at 8% opacity, 96px grid). Layered on top: a soft **radial spotlight** in cyan at 6–10% opacity behind hero focal points. Never use purple gradients. Never use stock photography full-bleed — when imagery is needed, use **product mockups** (CRM dashboards, chat threads, automation flow diagrams) rendered as glass cards.

### Borders, radii, shadow

- **Radii:** `--r-sm: 6px`, `--r-md: 12px`, `--r-lg: 18px`, `--r-xl: 28px`, `--r-pill: 999px`. Cards use 18px; buttons use 10px or pill.
- **Borders:** 1px solid `--line-1` is the default hairline. Cards layer a `linear-gradient` border (top: silver 10%, bottom: cyan 0%) for the "etched" look.
- **Shadow / elevation:** elevation comes from *inner light* + *outer glow*, not drop shadows. Three tokens:
  - `--shadow-card`: `inset 0 1px 0 rgba(255,255,255,0.04), 0 24px 48px -24px rgba(0,0,0,0.6)`
  - `--shadow-glow`: `0 0 0 1px rgba(94,231,255,0.18), 0 0 60px -10px rgba(94,231,255,0.35)` (CTA hover, live nodes)
  - `--shadow-deep`: `0 80px 120px -40px rgba(0,0,0,0.8)` (hero card lift)

### Glassmorphism

Cards on the hero use `backdrop-filter: blur(20px) saturate(140%)` over `rgba(16, 23, 42, 0.6)` with a 1px `--line-1` border. Use sparingly — only for floating mockups over the hero, not in dense grids.

### Animation

- Default easing: `cubic-bezier(0.2, 0.8, 0.2, 1)` (out-quart-ish).
- Default duration: 240ms (UI), 500ms (entrance), 1200ms (ambient).
- **Hover:** opacity goes UP not down (cards reveal a subtle cyan ring; text brightens from `--fg-1` to `--fg-0`). Buttons gain `--shadow-glow`. No scale on hover — this is luxury, not bouncy.
- **Press:** translate-y 1px, no scale.
- **Ambient motion:** circuit lines have a slow dash-offset animation (linear, 8s) to feel "alive". Live-lead notifications fade in from below + 8px, 320ms.
- **No bounces.** No cartoonish springs. Motion is precise, smooth, and brief.

### Imagery

- Color vibe: cool, blue-tinged, slightly desaturated. No warm filters. No grain.
- Real estate photography (when used) is masked into rounded cards with a 30% navy multiply overlay so it sits in-system.
- Product UI mockups are the primary "imagery" — render them as small glass cards in the hero.

### Layout rules

- Sticky header (64px, blurred navy) with a thin 1px bottom border that brightens on scroll.
- CTAs always right-aligned in nav, always primary cyan + ghost neutral pair in hero.
- Section eyebrows are mono uppercase; always present above section headlines.
- Trust strip uses a single horizontal row of icon + 12px mono caps labels separated by `·` dividers.

### Transparency & blur

- Header: `rgba(5,7,13,0.6)` + blur(16px).
- Hero glass cards: `rgba(16,23,42,0.55)` + blur(20px).
- Modals: `rgba(5,7,13,0.85)` + blur(24px).

Otherwise surfaces are opaque. Don't blur for blur's sake.

---

## ICONOGRAPHY

**System:** [Lucide](https://lucide.dev) icons via CDN — 1.5px stroke, 24×24 default. Rationale: Lucide's geometric stroke style matches the circuit-board geometry of the logo. Outline-only — never filled icons.

> **Substitution flag.** No icon set was provided. Lucide is the closest match to the logo's stroke aesthetic. If you have a specific set in mind (Phosphor, Tabler, custom), swap the CDN tag in `ui_kits/landing/index.html` and update this section.

**Usage rules.**
- Icon stroke color is `--fg-1` by default; switches to `--accent` for "active" or "live" states.
- Icons in service cards sit inside a 56×56 rounded-square (`--r-md`) with a subtle gunmetal gradient and 1px steel border.
- The **circuit-node dot** (a 6px disc with a cyan halo) is a brand-specific motif used at line endpoints in any custom diagrams — see `assets/circuit-node.svg`.
- **Logo as icon:** the shield mark crops cleanly to 32×32; use it for favicons, app marks, loading spinners.
- **No emoji.** No unicode-as-icon (no ✓ characters in lists — use a Lucide `check` instead).

**Available logo variants in `assets/`:**
- `logo-original.jpeg` — exact source, 381×453, white background.
- `logo-mark.png` — transparent background, original colors. Use on light surfaces.
- `logo-mark-light.png` — silver/platinum tint, transparent. Use on dark surfaces.
- `logo-on-dark.png` — pre-composited on `#0A0E1A`. Use as a fallback when transparency isn't an option.
