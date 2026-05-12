# Piorate Ventures — Landing Page UI Kit

A high-fidelity recreation of the Piorate Ventures landing page as composable React components.

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Full landing page assembled from the components below. Open this. |
| `Primitives.jsx` | Logo, eyebrow, button, badge, glass card, circuit background. |
| `Header.jsx` | Sticky nav with brand mark + links + CTA pair. |
| `Hero.jsx` | Hero section: headline, subhead, CTAs, floating glass mockups, trust strip. |
| `Services.jsx` | 3-up service cards (AI Voice Closers, RevenueFlow, AI Content Engine). |
| `WhyUs.jsx` | "Built for real estate teams" feature grid. |
| `HowItWorks.jsx` | 3-step horizontal timeline. |
| `Results.jsx` | Before / After two-column comparison. |
| `Testimonials.jsx` | Quote cards row. |
| `CTASection.jsx` | Final CTA block + contact form. |
| `Footer.jsx` | Footer with brand, links, contact. |

## Loading order

The components export themselves to `window` at the end of each file. Load order in `index.html`:
1. React + ReactDOM + Babel
2. `Primitives.jsx`
3. Section files (any order)
4. App mount script

All components consume tokens from `../../colors_and_type.css` — no hardcoded colors.

## Notes

- This is a **visual recreation**, not production code. Forms don't submit. Buttons don't navigate.
- Imagery: glass cards in the hero use mock dashboard / chat / lead-feed UIs drawn in CSS — no external images required.
- No icon font; Lucide-style icons are inlined as small SVGs.
