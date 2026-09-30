# Red Stitch Card Co. — design plan

**Subject & job.** A collector with a shoebox, a binder, or a fresh blaster pull lands here wanting to know what their cards are worth. The site has to get them to call, email, or bring the cards in for a free appraisal.

**Palette** (taken from hobby box art and the ball itself)
| token | hex | use |
|---|---|---|
| bg | `#EEF1F4` | cool card-stock white (not cream) |
| surface | `#FFFFFF` | panels, forms |
| ink | `#0E1B2E` | text and the navy of box-art hero blocks (15.9:1 on bg) |
| muted | `#51607A` | secondary text (5.6:1 on bg) |
| line | `#D3D9E2` | rules, borders |
| accent | `#C41E3A` | stitch red: buttons, rules, ribbon (white on it = 5.8:1) |
| foil | `#E0B23A` | used sparingly for grade labels and the "RC" shields |

**Type.** *Big Shoulders Display* (800/900) for headlines, card nameplates, and the scoreboard ribbon. It's a condensed sports face that reads like a card nameplate. *Barlow* (400–700) for body text, with tabular numerals for stat lines and prices.

**Hero concept.** A navy hero block with a fanned hand of five trading cards, one per service, each with a holo sheen that follows the pointer. The copy says what we do, and the card fan shows that we're a card shop.

**Motion.** A chalk-line baseball diamond backdrop (the "lines" feel, drawn thin). Headline words rise in on load, sections reveal with a stagger, and a scroll-progress bar and tightening header run throughout. **The one bespoke moment is the "Career stats" card back**: the shop's numbers are laid out like the stat table on the back of a card, and the totals count up when it scrolls into view. A red scoreboard ribbon under the hero scrolls what's being broken this week. Motion uses only transform and opacity, and everything respects `prefers-reduced-motion`.

**Generic check.** A default AI card-shop page would use a black background, neon-green accents, glassmorphism cards, stock photos of slabs, and "Elevate your collection." Instead, the cards here are real trading-card frames with card numbers (#01–#07) in place of eyebrow labels. The sell process runs around the bases (first, second, third, home). The stats are a card back, not three floating numbers. Buttons say what happens ("Get a free appraisal", "Claim a spot"). There are no ALL-CAPS eyebrows, no arrow buttons, and no one-word color accents in headlines.
