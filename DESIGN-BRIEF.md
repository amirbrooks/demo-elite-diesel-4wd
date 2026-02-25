# Design Brief — Elite Diesel 4WD & Performance V4.1

## Creative Direction

### What does walking into this business FEEL like?
A serious diesel workshop. Not a sterile dealership — a working space that smells like turbo oil and hot exhaust. Tools everywhere, a dyno in the back, scan tools hooked up to a D-Max. Karl's the guy other mechanics in the Wangaratta region send their hard jobs to.

### What is the ONE thing someone would remember?
Karl — the diesel specialist other mechanics recommend when they can't figure it out. 123 five-star reviews in a regional town. That's word-of-mouth dominance.

### Design reference
Land Rover Build & Price configurator meets an automotive magazine feature. Editorial layout with strong photography and typography — NOT a tech dashboard with icons.

---

## Color System (WARM diesel workshop palette)
```css
@theme {
  --color-soot: #1a1210;      /* near-black with warm brown undertone */
  --color-forge: #2a2018;      /* dark workshop brown */
  --color-iron: #3d3530;       /* tool steel grey-brown */
  --color-rust: #c45a2c;       /* primary accent — like iron oxide */
  --color-ember: #e87040;      /* warm highlight — glowing element */
  --color-ash: #a09080;        /* muted text */
  --color-bone: #f0e8e0;       /* warm off-white body text */
  --color-smoke: #d0c8c0;      /* secondary text */
}
```

## Typography
- **Display:** Teko — condensed, industrial, reads like a workshop parts manual
- **Body:** Outfit — clean geometric sans, good readability at small sizes

## Layout DNA
**Editorial split composition** — NOT card grids. Signature services use full-width alternating image/text blocks (magazine feature style). Additional services are a minimal list. Hero is split left (text) / right (image bleed). Sections vary between tight and spacious.

## Section Composition (Home)
1. **Hero** — Split layout. Text left with tagline + proof strip. Image right bleeding to edge. `bg-gradient-to-r from-soot via-soot/95 to-transparent`
2. **Signature Services** — 3 editorial blocks, alternating image/text sides, each with inline review quote
3. **Image Break** — Full-bleed workshop photo, NO gradient overlay, just subtle bottom fade
4. **Additional Services** — Simple 2-column text list with rust left-border accents
5. **Reviews** — 2-3 featured quotes with large pull-quote typography, NOT a carousel
6. **Partners** — Brand name strip (text, not logos)
7. **CTA** — Frosted glass over vehicle image. `bg-soot/80 backdrop-blur-sm`
8. **Footer**

## Bespoke CSS Effect
`.dyno-lines` — subtle horizontal lines reminiscent of a dynamometer readout chart. Applied sparingly as a section background texture.

## Image Strategy
All Unsplash — specific diesel/4WD/workshop imagery. 7 images provided:
- Hero: diesel engine close-up
- Engine bay detail
- Workshop interior
- 4WD vehicle on road
- Vehicle profile shot
- Diesel/mechanical detail
- Tools close-up

## Service Display Strategy
- **3 Signature services** → Full-width editorial blocks with photo + detailed text + inline customer quote. Alternating left/right.
- **9 Additional services** → Simple list: name + one-line description, colored left-border. NO icons, NO card boxes.

## Stats Display
Static inline proof strip near hero:
"4.9★ from 123 Google reviews · 860 Facebook followers · 12 specialist services"
NO animated counters. NO big number section.

## AI-Pattern Checklist (pre-build verification)
- [x] NO Lucide icon-in-colored-box on service cards
- [x] Signature services look different from additional services
- [x] Numbers are static text, not animated from 0
- [x] At least 3 different gradient/overlay treatments
- [x] NOT every container uses rounded-2xl (mix rounded-lg + sharp)
- [x] Typography + photography carry visual weight, not icons
- [x] Lucide icons only in nav/footer
