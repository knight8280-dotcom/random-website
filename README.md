# Red Stitch Card Co. — concept website

A full example service website for a fictional baseball trading card shop in Columbus, Ohio. It covers collection buying, grading submissions, consignment, live box breaks, insurance appraisals, bulk sorting, and want-list card hunting.

It's a static site with no framework and no dependencies. Every word lives in one content file, and a small Node build script renders it to plain HTML in `docs/`, ready for GitHub Pages or any static host.

> **Everything is placeholder.** The phone number is in the reserved `555-01xx` range. The address, email, team, reviews and stats are invented. The footer on every page says so.

## Pages (17)

| Page | What it does |
|---|---|
| `index.html` | Hero with a fanned hand of service "trading cards", a scoreboard ribbon, all 7 services, the "around the bases" selling process, a card-back stat table that counts up, the sealed-wax shelf, the next 3 breaks, reviews, a FAQ preview, and hours |
| `services.html` | All services plus a "which service do I need?" picker |
| `services/*.html` (7) | Long-form detail pages for each service: 4 paragraphs, how it works, at-a-glance specs, what's included, a related review, and other services |
| `breaks.html` | The next 8 breaks (generated from the build date), formats, and house rules |
| `pricing.html` | Every fee in six tables |
| `sell.html` | Cash-offer request form, what we buy and pass on, the selling process, and selling FAQs |
| `about.html` | Story, timeline, four promises, the team, and the stat line |
| `contact.html` | Contact form (the `?topic=` query preselects the topic), phone, email, hours with today highlighted, and a map |
| `faq.html` | 14 questions in 4 groups, with FAQPage structured data |
| `privacy.html`, `404.html` | The basics |

## Editing

```
src/content.mjs      ← all copy, prices, hours, services, FAQs, team (edit this)
src/render.mjs       ← page templates
src/assets/          ← styles.css, main.js, favicon.svg (copied as-is)
src/build.mjs        ← renders everything into docs/
docs/                ← built site (committed, served by GitHub Pages)
DESIGN.md            ← palette, type and motion rationale
```

```bash
npm run build   # regenerate docs/
npm run serve   # preview at http://localhost:4173
npm run dev     # both
```

Node 18+ is required, with no `npm install` needed. Rebuild after any edit. The break schedule is regenerated from the current date on every build.

## Deploying

**GitHub Pages:** go to Settings → Pages → Build and deployment → *Deploy from a branch* → choose the branch and the `/docs` folder. All links are relative, so the site works under `username.github.io/repo/`.

**Any other static host** (Netlify, Vercel, Cloudflare Pages): set the publish directory to `docs` and the build command to `npm run build`.

## Making it real

- **Business details:** change `site` at the top of `src/content.mjs` (name, phone, email, address, hours, rating), then rebuild.
- **Forms:** both forms are demo forms (`data-demo-form`). They validate and show a thank-you panel, but send nothing. To connect one, give the `<form>` an `action` (Formspree, Basin, Netlify Forms and so on) and `method="post"`, and remove `data-demo-form` in `src/render.mjs`.
- **Photos:** there are none. The product boxes, trading cards and team portraits are drawn in CSS and SVG. To use real shop photos, drop them into `src/assets/` and reference them from the templates.
- **Product names:** Topps, Panini, Donruss, Prizm, Stadium Club, Bowman and Upper Deck are named only as the products a shop like this would sell. No logos or product photography are used.

## Built-in behavior

- The open/closed status in the top bar is calculated live in the shop's time zone.
- A scroll progress bar, a header that tightens on scroll, staggered section reveals, and count-up stats.
- The hero cards tilt toward the pointer, with a holo sheen.
- The mobile menu closes on Escape. FAQs use native `<details>`.
- `prefers-reduced-motion` turns off all motion. The site works without JavaScript.
- LocalBusiness and FAQPage JSON-LD, plus Open Graph tags on every page.
