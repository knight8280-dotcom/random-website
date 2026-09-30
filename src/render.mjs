import {
  site, nav, hero, ribbon, services, shelf, stats, bases, testimonials,
  breakRules, pricing, faqs, team, timeline, values,
} from "./content.mjs";

/* ---------- helpers ---------- */

export const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const fmt = (n) => (typeof n === "number" ? n.toLocaleString("en-US") : n);
const addr = site.address;
const addrLine = `${addr.street}, ${addr.city}, ${addr.region} ${addr.zip}`;
const year = new Date().getFullYear();

// Headline words wrapped for the load-in rise.
const words = (text) =>
  text
    .split(" ")
    .map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`)
    .join(" ");

const to12 = (t) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hh = ((h + 11) % 12) + 1;
  return m ? `${hh}:${String(m).padStart(2, "0")} ${suffix}` : `${hh} ${suffix}`;
};

const hoursRows = () =>
  // Week starting Monday reads more naturally in a table.
  [1, 2, 3, 4, 5, 6, 0]
    .map((d) => {
      const h = site.hours[d];
      const val = h.open ? `${to12(h.open)} – ${to12(h.close)}` : "Closed";
      return `<tr data-day="${d}"><th scope="row">${h.day}</th><td>${val}${h.note ? `<small>${esc(h.note.replace(/^Shop closed, /, ""))}</small>` : ""}</td></tr>`;
    })
    .join("");

/* ---------- icons ---------- */

const svg = (body, cls = "i") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icon = {
  phone: svg('<path d="M5 3h3.5l1.8 4.6-2.3 1.5a12 12 0 0 0 6 6l1.5-2.3L21 14.5V18a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  pin: svg('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  clock: svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  check: svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
  star: '<svg class="i i--star" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>',
  menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  calendar: svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
};

// Service illustrations (64×64, drawn to sit inside a card "photo" window).
const G = (body) =>
  `<svg class="glyph" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const glyphs = {
  tag: G('<path d="M34 8h20v20L30 52 12 34z"/><circle cx="45" cy="17" r="4"/><path d="M38 25c-1.2-1.6-3-2.5-5-2.5-2.8 0-5 1.6-5 4s2.2 3.3 5 4 5 1.6 5 4-2.2 4-5 4c-2.2 0-4-.9-5.2-2.6M33 19.5v3M33 38.5v3"/>'),
  slab: G('<rect x="16" y="5" width="32" height="54" rx="3"/><rect x="20" y="9" width="24" height="10" rx="1.5"/><path d="M24 14h10M38 14h2"/><rect x="21" y="24" width="22" height="30" rx="1.5"/><path d="M26 44l4-6 4 4 4-7"/>'),
  camera: G('<rect x="7" y="18" width="50" height="34" rx="4"/><circle cx="32" cy="35" r="10"/><circle cx="32" cy="35" r="4"/><path d="M22 18l4-7h12l4 7M49 25h2"/>'),
  box: G('<path d="M9 22 32 11l23 11v24L32 57 9 46z"/><path d="m9 22 23 11 23-11M32 33v24"/><path d="m20 16.5 23 11v8"/>'),
  report: G('<rect x="9" y="7" width="32" height="46" rx="3"/><path d="M16 17h18M16 25h18M16 33h10"/><circle cx="42" cy="42" r="9"/><path d="m48.5 48.5 7 7"/>'),
  stack: G('<rect x="10" y="22" width="26" height="36" rx="3"/><path d="M18 16h22a3 3 0 0 1 3 3v31"/><path d="M26 9h22a3 3 0 0 1 3 3v31"/><path d="M16 30h14M16 36h10"/>'),
  target: G('<circle cx="32" cy="32" r="21"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="3"/><path d="M32 4v8M32 52v8M4 32h8M52 32h8"/>'),
};

const logoMark = `<svg class="logo" viewBox="0 0 40 40" aria-hidden="true">
  <circle cx="20" cy="20" r="18" fill="#fff" stroke="currentColor" stroke-width="2"/>
  <path d="M10 6.5c4.6 3.6 6.8 8 6.8 13.5S14.6 29.9 10 33.5M30 6.5c-4.6 3.6-6.8 8-6.8 13.5s2.2 9.9 6.8 13.5" fill="none" stroke="#C41E3A" stroke-width="1.4"/>
  <path d="M10 6.5c4.6 3.6 6.8 8 6.8 13.5S14.6 29.9 10 33.5M30 6.5c-4.6 3.6-6.8 8-6.8 13.5s2.2 9.9 6.8 13.5" fill="none" stroke="#C41E3A" stroke-width="4.4" stroke-dasharray="1.1 2.6"/>
</svg>`;

// Chalk-line diamond used behind hero blocks.
const diamond = `<svg class="diamond" viewBox="0 0 800 800" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
  <g fill="none" stroke="currentColor" stroke-width="2">
    <path d="M400 720 120 440 400 160 680 440z"/>
    <path d="M400 720 20 340M400 720l380-380" stroke-dasharray="6 10"/>
    <circle cx="400" cy="450" r="46"/>
    <path d="M40 300c140-190 580-190 720 0" stroke-dasharray="2 12"/>
    <rect x="388" y="428" width="24" height="6" rx="1"/>
  </g>
  <g fill="currentColor">
    <rect x="390" y="150" width="20" height="20" transform="rotate(45 400 160)"/>
    <rect x="110" y="430" width="20" height="20" transform="rotate(45 120 440)"/>
    <rect x="670" y="430" width="20" height="20" transform="rotate(45 680 440)"/>
    <path d="M388 708h24v12l-12 10-12-10z"/>
  </g>
</svg>`;

/* ---------- shared chrome ---------- */

function utilBar(b) {
  const hoursJson = esc(JSON.stringify({ tz: site.timezone, hours: site.hours.map(({ open, close }) => [open, close]) }));
  return `<div class="util">
  <div class="wrap util__in">
    <p class="util__status" data-hours="${hoursJson}"><span class="dot" aria-hidden="true"></span><span data-status>Open Tue–Sun · Breaks live Mon 8 PM</span></p>
    <p class="util__addr">${icon.pin}<span>${esc(addr.street)}, ${esc(addr.city)}</span></p>
    <a class="util__phone" href="${site.phoneHref}">${icon.phone}<span>${site.phone}</span></a>
  </div>
</div>`;
}

function header(b, current) {
  const links = nav
    .map((n) => {
      const on = n.match.includes(current);
      return `<li><a href="${b}${n.href}"${on ? ' aria-current="page"' : ""}>${n.label}</a></li>`;
    })
    .join("");
  return `<header class="hdr" data-header>
  <div class="wrap hdr__in">
    <a class="brand" href="${b}index.html" aria-label="${esc(site.name)}, home">${logoMark}<span class="brand__name">Red Stitch<small>Card Co.</small></span></a>
    <nav class="nav" aria-label="Primary"><ul>${links}</ul></nav>
    <div class="hdr__cta">
      <a class="btn btn--accent btn--sm hdr__offer" href="${b}sell.html">Get an offer</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mnav" data-menu>
        <span class="menu-btn__open">${icon.menu}</span><span class="menu-btn__close">${icon.close}</span><span class="sr">Menu</span>
      </button>
    </div>
  </div>
  <div class="mnav" id="mnav" data-mnav>
    <ul>${links}<li><a href="${b}sell.html">Sell your cards</a></li><li><a href="${b}faq.html">FAQ</a></li></ul>
    <div class="mnav__contact">
      <a class="btn btn--accent btn--block" href="${site.phoneHref}">${icon.phone} Call ${site.phone}</a>
      <a class="btn btn--line btn--block" href="mailto:${site.email}">${icon.mail} ${site.email}</a>
    </div>
  </div>
</header>`;
}

function footer(b) {
  return `<footer class="ftr">
  <div class="wrap">
    <div class="ftr__top">
      <div class="ftr__brand">
        <a class="brand brand--light" href="${b}index.html">${logoMark}<span class="brand__name">Red Stitch<small>Card Co.</small></span></a>
        <p>${esc(site.tagline)}. Free appraisals, fair cash offers and honest grading advice since ${site.founded}.</p>
        <p class="ftr__rating">${icon.star.repeat(5)}<span><strong>${site.rating.score}</strong> from ${site.rating.count} Google reviews</span></p>
        <ul class="ftr__social">${site.social.map((s) => `<li><span>${s.label}</span> ${esc(s.handle)}</li>`).join("")}</ul>
      </div>
      <div class="ftr__col">
        <h2>Services</h2>
        <ul>${services.map((s) => `<li><a href="${b}services/${s.id}.html">${esc(s.name)}</a></li>`).join("")}</ul>
      </div>
      <div class="ftr__col">
        <h2>The shop</h2>
        <ul>
          <li><a href="${b}sell.html">Sell your cards</a></li>
          <li><a href="${b}breaks.html">Break schedule</a></li>
          <li><a href="${b}pricing.html">Pricing</a></li>
          <li><a href="${b}about.html">About us</a></li>
          <li><a href="${b}faq.html">FAQ</a></li>
          <li><a href="${b}contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="ftr__col ftr__visit">
        <h2>Visit</h2>
        <address>${esc(addr.street)}<br>${esc(addr.city)}, ${addr.region} ${addr.zip}</address>
        <p><a href="${site.phoneHref}">${site.phone}</a><br><a href="mailto:${site.email}">${site.email}</a></p>
        <table class="hours hours--compact"><tbody>${hoursRows()}</tbody></table>
      </div>
    </div>
    <div class="ftr__bottom">
      <p>© ${year} ${esc(site.name)} · <a href="${b}privacy.html">Privacy</a></p>
      <p class="ftr__note">Concept site. The business, people, reviews and contact details are fictional. Product names belong to their respective owners.</p>
    </div>
  </div>
</footer>`;
}

export function layout({ title, description, depth = 0, current = "", body, bodyClass = "", head = "" }) {
  const b = "../".repeat(depth);
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | Baseball Card Shop in Columbus, OH`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description || site.description)}">
<meta name="theme-color" content="#0E1B2E">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description || site.description)}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="${b}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Big+Shoulders+Display:wght@700;800;900&display=swap">
<link rel="stylesheet" href="${b}assets/styles.css">
<script>document.documentElement.classList.add("js")</script>
${head}
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
<div class="progress" aria-hidden="true"><span data-progress></span></div>
${utilBar(b)}
${header(b, current)}
<main id="main">
${body}
</main>
${footer(b)}
<script src="${b}assets/main.js" defer></script>
</body>
</html>
`;
}

/* ---------- shared sections ---------- */

function secHead({ kicker, title, lead, align = "", id }) {
  return `<header class="sec-head ${align} reveal"${id ? ` id="${id}"` : ""}>
  ${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ""}
  <h2 class="sec-title">${esc(title)}</h2>
  ${lead ? `<p class="sec-lead">${esc(lead)}</p>` : ""}
</header>`;
}

function pageHero({ b, crumbs = [], kicker, title, lead, actions = "", aside = "", cls = "" }) {
  const trail = crumbs.length
    ? `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="${b}index.html">Home</a></li>${crumbs
        .map((c, i) =>
          i === crumbs.length - 1
            ? `<li aria-current="page">${esc(c.label)}</li>`
            : `<li><a href="${b}${c.href}">${esc(c.label)}</a></li>`,
        )
        .join("")}</ol></nav>`
    : "";
  return `<section class="phero ${cls}">
  ${diamond}
  <div class="wrap phero__in${aside ? " phero__in--split" : ""}">
    <div class="phero__copy">
      ${trail}
      ${kicker ? `<p class="kicker kicker--light">${esc(kicker)}</p>` : ""}
      <h1 class="phero__title words">${words(title)}</h1>
      ${lead ? `<p class="phero__lead">${esc(lead)}</p>` : ""}
      ${actions ? `<div class="phero__actions">${actions}</div>` : ""}
    </div>
    ${aside}
  </div>
</section>`;
}

// A single trading card. Used in the hero fan and on service pages.
function tradingCard(s, b, { tag = "a", extra = "", style = "" } = {}) {
  const inner = `<span class="tc__frame">
      <span class="tc__top"><span class="tc__no">#${s.no}</span><span class="tc__badge">${esc(s.badge)}</span></span>
      <span class="tc__photo">${glyphs[s.glyph]}</span>
      <span class="tc__plate"><span class="tc__name">${esc(s.short)}</span><span class="tc__pos">${esc(site.short)} · Svc</span></span>
    </span>
    <span class="tc__holo" aria-hidden="true"></span>`;
  if (tag === "a") {
    return `<a class="tc tc--${s.glyph} ${extra}" href="${b}services/${s.id}.html" style="${style}" aria-label="${esc(s.name)}">${inner}</a>`;
  }
  return `<div class="tc tc--${s.glyph} ${extra}" style="${style}" aria-hidden="true">${inner}</div>`;
}

function serviceCard(s, b, i, { compact = false } = {}) {
  const featured = s.featured && !compact;
  return `<article class="svc svc--${s.glyph}${featured ? " svc--featured" : ""}${compact ? " svc--compact" : ""} reveal" style="--i:${i}">
  <a class="svc__link" href="${b}services/${s.id}.html">
    <span class="svc__top"><span class="svc__no">#${s.no}</span><span class="svc__badge">${esc(s.badge)}</span></span>
    <span class="svc__glyph">${glyphs[s.glyph]}</span>
    <span class="svc__body">
      <h3 class="svc__name">${esc(s.name)}</h3>
      <span class="svc__blurb">${esc(s.blurb)}</span>
      ${featured ? `<span class="svc__list">${s.includes.slice(0, 4).map((x) => `<span>${icon.check}${esc(x)}</span>`).join("")}</span>` : ""}
      <span class="svc__more">Pricing and process</span>
    </span>
    <span class="svc__rule" aria-hidden="true"></span>
  </a>
</article>`;
}

function ribbonBlock() {
  const list = (hidden) =>
    `<ul${hidden ? ' aria-hidden="true"' : ""}>${ribbon.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`;
  return `<div class="ribbon" role="region" aria-label="This week at the shop"><div class="ribbon__track">${list(false)}${list(true)}</div></div>`;
}

function basesBlock() {
  return `<ol class="bases">
  ${bases
    .map(
      (s, i) => `<li class="base reveal" style="--i:${i}">
    <span class="base__mark" aria-hidden="true"><span></span></span>
    <p class="base__label">${esc(s.base)}</p>
    <h3 class="base__title">${esc(s.title)}</h3>
    <p class="base__text">${esc(s.text)}</p>
  </li>`,
    )
    .join("")}
</ol>`;
}

function cardBack() {
  const head = `<tr><th scope="col">Year</th><th scope="col">Club</th>${stats.columns.map((c) => `<th scope="col">${c}</th>`).join("")}</tr>`;
  const rows = stats.rows
    .map(
      (r, i) =>
        `<tr class="reveal-row" style="--i:${i}"><th scope="row">${r[0]}</th><td>COL</td>${r
          .slice(1)
          .map((v) => `<td>${fmt(v)}</td>`)
          .join("")}</tr>`,
    )
    .join("");
  const c = stats.career;
  const career = `<tr><th scope="row">${c[0]}</th><td>—</td>${c
    .slice(1)
    .map((v) =>
      typeof v === "number"
        ? `<td><span data-count="${v}">${fmt(v)}</span></td>`
        : `<td>${v}</td>`,
    )
    .join("")}</tr>`;
  return `<div class="cardback reveal">
  <div class="cardback__head">
    <span class="cardback__num">No. 212</span>
    <div class="cardback__id">
      <h3 class="cardback__name">${esc(site.name)}</h3>
      <p class="cardback__pos">Card shop · Columbus, Ohio</p>
    </div>
    <dl class="cardback__bio">${stats.bio.map(([k, v]) => `<div><dt>${k}:</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
  </div>
  <div class="cardback__scroll" role="region" aria-label="Shop stats by year" tabindex="0">
    <table class="cardback__table">
      <caption class="sr">Red Stitch Card Co. yearly totals</caption>
      <thead>${head}</thead>
      <tbody>${rows}</tbody>
      <tfoot>${career}</tfoot>
    </table>
  </div>
  <div class="cardback__foot">
    <p class="cardback__trivia"><strong>Did you know?</strong> ${esc(stats.trivia)}</p>
    <p class="cardback__note">${esc(stats.footnote)}</p>
  </div>
</div>`;
}

function shelfGrid() {
  return `<div class="shelf">
  ${shelf
    .map(
      (p, i) => `<article class="prod reveal" style="--i:${i % 4}">
    <div class="prod__art art--${p.art}">
      ${p.flag ? `<span class="prod__flag">${esc(p.flag)}</span>` : ""}
      <span class="pkg" aria-hidden="true">
        <span class="pkg__yr">${esc(p.line1)}</span>
        <span class="pkg__line">${esc(p.line2)}</span>
        <span class="pkg__tag">${esc(p.tag)}</span>
      </span>
      <span class="prod__stock">${icon.pin}In store</span>
    </div>
    <h3 class="prod__name">${esc(p.name)}</h3>
    <p class="prod__price"><strong${p.was ? ' class="is-deal"' : ""}>${p.price}</strong>${p.was ? ` <s>${p.was}</s>` : ""} <span>${esc(p.unit)}</span></p>
    <p class="prod__note">${esc(p.note)}</p>
    <a class="prod__hold" href="${site.phoneHref}">Call to hold</a>
  </article>`,
    )
    .join("")}
</div>`;
}

function quoteCard(t, i = 0) {
  return `<figure class="quote reveal" style="--i:${i}">
  <p class="quote__stars" aria-label="5 out of 5 stars">${icon.star.repeat(5)}</p>
  <blockquote><p>${esc(t.quote)}</p></blockquote>
  <figcaption><strong>${esc(t.name)}</strong><span>${esc(t.where)} · ${esc(t.service)}</span></figcaption>
</figure>`;
}

function faqList(items) {
  return `<div class="faq">${items
    .map(
      ([q, a]) => `<details class="faq__item">
    <summary><span>${esc(q)}</span><span class="faq__icon" aria-hidden="true">${icon.plus}</span></summary>
    <div class="faq__a"><p>${esc(a)}</p></div>
  </details>`,
    )
    .join("")}</div>`;
}

function ctaBand(b, { title = "Bring your cards in this week.", text } = {}) {
  return `<section class="cta">
  ${diamond}
  <div class="wrap cta__in">
    <div class="cta__copy reveal">
      <h2 class="cta__title">${esc(title)}</h2>
      <p>${esc(text || `No appointment needed for most collections. Find us at ${addr.street} in ${addr.city}, with free parking out back.`)}</p>
      <div class="cta__actions">
        <a class="btn btn--accent btn--lg" href="${b}sell.html">Get a free appraisal</a>
        <a class="btn btn--ghost btn--lg" href="${site.phoneHref}">${icon.phone} Call ${site.phone}</a>
      </div>
    </div>
    <div class="cta__hours reveal" style="--i:1">
      <p class="cta__label">${icon.clock} Shop hours</p>
      <table class="hours"><tbody>${hoursRows()}</tbody></table>
    </div>
  </div>
</section>`;
}

/* ---------- break schedule ---------- */

export function upcomingBreaks(from, rotation, count = 8) {
  // Mon, Wed, Fri 8 PM · Sat 2 PM, starting the day after `from`.
  const slots = { 1: "20:00", 3: "20:00", 5: "20:00", 6: "14:00" };
  const out = [];
  const d = new Date(from);
  d.setHours(12, 0, 0, 0);
  let n = 0;
  while (out.length < count) {
    d.setDate(d.getDate() + 1);
    const t = slots[d.getDay()];
    if (!t) continue;
    const r = rotation[n % rotation.length];
    const left = Math.max(1, r.spots - ((n * 7 + 5) % r.spots) - (n < 2 ? r.spots / 2 : 0));
    out.push({
      ...r,
      date: new Date(d),
      time: to12(t),
      left: Math.round(left),
    });
    n++;
  }
  return out;
}

const dayFmt = (d) => d.toLocaleDateString("en-US", { weekday: "short" });
const monFmt = (d) => d.toLocaleDateString("en-US", { month: "short" });

function breakCard(br, i) {
  const pct = Math.round(((br.spots - br.left) / br.spots) * 100);
  return `<article class="brk reveal" style="--i:${i}">
  <div class="brk__date"><span>${dayFmt(br.date)}</span><strong>${br.date.getDate()}</strong><span>${monFmt(br.date)}</span></div>
  <div class="brk__body">
    <p class="brk__meta"><span class="live-dot" aria-hidden="true"></span>${br.time} · ${esc(br.where)}</p>
    <h3 class="brk__product">${esc(br.product)}</h3>
    <p class="brk__detail">${esc(br.detail)} · ${esc(br.format)}</p>
    <div class="brk__fill" role="img" aria-label="${br.left} of ${br.spots} spots left"><span style="--p:${pct / 100}"></span></div>
    <p class="brk__left"><strong>${br.left}</strong> of ${br.spots} spots left</p>
  </div>
  <div class="brk__buy">
    <p class="brk__price">${esc(br.price)}<small>per spot</small></p>
    <a class="btn btn--accent btn--sm" href="${site.phoneHref}">Claim a spot</a>
  </div>
</article>`;
}

/* ============================================================
   Pages
   ============================================================ */

export function homePage(breaks) {
  const b = "";
  // Left to right: #02, #03, #01 (center, on top), #04, #05.
  const fan = [1, 2, 0, 3, 4]
    .map((idx, i) => tradingCard(services[idx], b, { extra: `tc--fan tc--f${i}`, style: `--f:${i}` }))
    .join("");
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: addr.street,
      addressLocality: addr.city,
      addressRegion: addr.region,
      postalCode: addr.zip,
      addressCountry: "US",
    },
    openingHours: ["Tu-Fr 11:00-19:00", "Sa 10:00-18:00", "Su 12:00-17:00"],
    foundingDate: String(site.founded),
  };

  const body = `
<section class="hero">
  ${diamond}
  <div class="wrap hero__in">
    <div class="hero__copy">
      <p class="hero__kicker"><span class="live-dot" aria-hidden="true"></span>Free appraisals, no appointment needed</p>
      <h1 class="hero__title words">${words(hero.title)}</h1>
      <p class="hero__lead">${esc(hero.lead)}</p>
      <div class="hero__actions">
        <a class="btn btn--accent btn--lg" href="${hero.primary.href}">${hero.primary.label}</a>
        <a class="btn btn--ghost btn--lg" href="${site.phoneHref}">${icon.phone} Call ${site.phone}</a>
      </div>
      <ul class="hero__proof">
        ${hero.proof.map((p) => `<li><strong>${esc(p.strong)}</strong><span>${esc(p.text)}</span></li>`).join("")}
      </ul>
    </div>
    <div class="hero__fan" data-fan>
      <div class="fan">${fan}</div>
      <p class="hero__fan-cap">Pick a card to see how each service works</p>
    </div>
  </div>
</section>
${ribbonBlock()}

<section class="section" id="services">
  <div class="wrap">
    ${secHead({ kicker: "What we do", title: "Seven ways we help collectors", lead: "Whether you’re selling a collection, grading a pull or hunting a card for your PC, you work with the same four people at the same counter every time." })}
    <div class="svc-grid">
      ${services.map((s, i) => serviceCard(s, b, i)).join("")}
    </div>
  </div>
</section>

<section class="section section--line">
  <div class="wrap">
    ${secHead({ kicker: "How selling works", title: "Around the bases in one visit", lead: "Most collections go from the box on our counter to a written offer in under 45 minutes." })}
    ${basesBlock()}
    <p class="center reveal"><a class="btn btn--ink btn--lg" href="sell.html">Start with a free appraisal</a></p>
  </div>
</section>

<section class="section section--navy cb-sec">
  <div class="wrap cb-sec__in">
    ${secHead({ kicker: "Flip the card over", title: "Our numbers, printed on the back", lead: "Every trading card tells its story in a stat line. This is ours, updated every season.", align: "sec-head--light" })}
    ${cardBack()}
  </div>
</section>

<section class="section" id="shelf">
  <div class="wrap">
    <div class="split-head">
      ${secHead({ kicker: "On the wall this week", title: "Fresh wax and bulk lots", lead: "Sealed product is sold in the store only. Call and we’ll hold anything for 48 hours." })}
      <a class="btn btn--line reveal" href="${site.phoneHref}">${icon.phone} Hold a box</a>
    </div>
    ${shelfGrid()}
  </div>
</section>

<section class="section section--tint">
  <div class="wrap">
    <div class="split-head">
      ${secHead({ kicker: "Live breaks", title: "Next up on the break table", lead: "Every case is sealed on camera, and every card for your team ships to you, base included." })}
      <a class="btn btn--line reveal" href="breaks.html">Full schedule</a>
    </div>
    <div class="brk-list">${breaks.slice(0, 3).map(breakCard).join("")}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${secHead({ kicker: "From the counter", title: "What collectors say after a visit", lead: `Rated ${site.rating.score} out of 5 from ${site.rating.count} Google reviews.` })}
    <div class="quotes">${testimonials.slice(0, 3).map(quoteCard).join("")}</div>
  </div>
</section>

<section class="section section--line">
  <div class="wrap faq-split">
    <div>
      ${secHead({ kicker: "Questions", title: "Answers before you drive over", lead: "Still wondering about something? Call us. A person picks up during shop hours." })}
      <p class="reveal"><a class="btn btn--line" href="faq.html">Read every question</a></p>
    </div>
    <div class="reveal">${faqList([faqs[0].items[0], faqs[0].items[3], faqs[1].items[0], faqs[2].items[0], faqs[3].items[0]])}</div>
  </div>
</section>

${ctaBand(b)}
`;
  return layout({
    title: "",
    description: site.description,
    current: "home",
    body,
    head: `<script type="application/ld+json">${JSON.stringify(localBusiness)}</script>`,
  });
}

export function servicesPage() {
  const b = "";
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "Services" }],
  kicker: "Services",
  title: "Everything your cards need, under one roof.",
  lead: "From a first appraisal to grading, consignment and a Friday night case break, every service is run by the same four people at our Linden Park counter.",
  actions: `<a class="btn btn--accent btn--lg" href="sell.html">Get a free appraisal</a><a class="btn btn--ghost btn--lg" href="pricing.html">See all pricing</a>`,
})}
<section class="section">
  <div class="wrap">
    <div class="svc-grid">${services.map((s, i) => serviceCard(s, b, i)).join("")}</div>
  </div>
</section>
<section class="section section--line">
  <div class="wrap help">
    <div class="help__copy reveal">
      <h2 class="sec-title">Not sure which service you need?</h2>
      <p class="sec-lead">Most people start with a free appraisal. We’ll look at what you have and tell you honestly whether to sell, grade, consign or keep it in the binder.</p>
    </div>
    <ul class="help__list">
      ${[
        ["I want to sell everything", "Collection Buying", "buying"],
        ["I pulled something that looks perfect", "Grading Submissions", "grading"],
        ["I want full price for a few big cards", "Consignment", "consignment"],
        ["I collect one team", "Live Box Breaks", "breaks"],
        ["I need a number on paper", "Insurance & Estate Appraisals", "appraisals"],
        ["I inherited a mystery box", "Bulk Sorting & Set Building", "sorting"],
        ["I’ve been chasing one card for years", "Want-List Card Hunting", "card-hunting"],
      ]
        .map(
          ([q, a, id], i) =>
            `<li class="reveal" style="--i:${i}"><a href="services/${id}.html"><span>${esc(q)}</span><strong>${esc(a)}</strong></a></li>`,
        )
        .join("")}
    </ul>
  </div>
</section>
${ctaBand(b)}
`;
  return layout({
    title: "Services",
    description:
      "Collection buying, PSA/SGC/BGS grading submissions, consignment, live box breaks, insurance appraisals, bulk sorting and want-list card hunting in Columbus, Ohio.",
    current: "services",
    body,
  });
}

export function servicePage(s) {
  const b = "../";
  const others = services.filter((o) => o.id !== s.id);
  const quote = testimonials.find((t) => t.for === s.id);
  const aside = `<div class="phero__card" data-fan>${tradingCard(s, b, { tag: "div", extra: "tc--solo" })}</div>`;
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "Services", href: "services.html" }, { label: s.name }],
  kicker: `Service #${s.no}`,
  title: s.name,
  lead: s.lead,
  actions: `<a class="btn btn--accent btn--lg" href="${b}${s.ctaHref}">${esc(s.cta)}</a><a class="btn btn--ghost btn--lg" href="${site.phoneHref}">${icon.phone} ${site.phone}</a>`,
  aside,
  cls: "phero--service",
})}
<section class="section">
  <div class="wrap detail">
    <article class="detail__main">
      <div class="prose reveal">
        ${s.details.map((p, i) => `<p${i === 0 ? ' class="prose__lead"' : ""}>${esc(p)}</p>`).join("\n        ")}
      </div>
      <h2 class="detail__h reveal">How it works</h2>
      <ol class="steps">
        ${s.process
          .map(
            ([t, d], i) => `<li class="step reveal" style="--i:${i}">
          <span class="step__n" aria-hidden="true">${i + 1}</span>
          <h3>${esc(t)}</h3>
          <p>${esc(d)}</p>
        </li>`,
          )
          .join("")}
      </ol>
      ${quote ? `<div class="detail__quote">${quoteCard(quote)}</div>` : ""}
    </article>
    <aside class="detail__aside">
      <div class="panel reveal">
        <h2 class="panel__h">At a glance</h2>
        <dl class="specs">${s.specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      </div>
      <div class="panel reveal" style="--i:1">
        <h2 class="panel__h">What’s included</h2>
        <ul class="checks">${s.includes.map((x) => `<li>${icon.check}<span>${esc(x)}</span></li>`).join("")}</ul>
      </div>
      <div class="panel panel--navy reveal" style="--i:2">
        <h2 class="panel__h">Talk to a person</h2>
        <p>Call during shop hours, or email and we’ll reply within one business day.</p>
        <a class="btn btn--accent btn--block" href="${site.phoneHref}">${icon.phone} Call ${site.phone}</a>
        <a class="btn btn--ghost btn--block" href="mailto:${site.email}?subject=${encodeURIComponent(s.name)}">${icon.mail} Email us</a>
      </div>
    </aside>
  </div>
</section>
<section class="section section--line">
  <div class="wrap">
    ${secHead({ kicker: "More from the shop", title: "Other services" })}
    <div class="svc-grid svc-grid--compact">${others.map((o, i) => serviceCard(o, b, i, { compact: true })).join("")}</div>
  </div>
</section>
${ctaBand(b)}
`;
  return layout({
    title: s.name,
    description: `${s.lead} ${site.name}, Columbus, Ohio.`,
    depth: 1,
    current: "services",
    body,
  });
}

export function breaksPage(breaks, rotation) {
  const b = "";
  const formats = [
    ["Pick your team", "You choose the team you want. Prices vary by team, because the stars and top prospects cost more. It’s first come, first served, so popular teams go fast."],
    ["Random team", "Every spot costs the same. When the last spot sells, the on-screen randomizer assigns the teams. It’s the cheapest way in and the most fun to watch."],
    ["Divisional", "Six spots, one for each MLB division. You get every card for five teams, which makes it the best value on big jumbo and case breaks."],
  ];
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "Breaks" }],
  kicker: "Live box breaks",
  title: "Claim a team. Watch the case open.",
  lead: "Breaks run on the stream Monday, Wednesday and Friday at 8 PM, and at the shop counter Saturday at 2 PM. Every card for your team ships to you, base cards included.",
  actions: `<a class="btn btn--accent btn--lg" href="${site.phoneHref}">${icon.phone} Claim a spot by phone</a><a class="btn btn--ghost btn--lg" href="mailto:${site.email}?subject=Break%20spot">${icon.mail} Email for a spot</a>`,
})}
${ribbonBlock()}
<section class="section">
  <div class="wrap">
    <div class="split-head">
      ${secHead({ kicker: "Schedule", title: "The next eight breaks", lead: "Spot counts are updated at the counter all day. Call to check a team before you claim it." })}
      <p class="legend reveal"><span class="live-dot" aria-hidden="true"></span> Streamed live on YouTube and Instagram</p>
    </div>
    <div class="brk-list">${breaks.map(breakCard).join("")}</div>
  </div>
</section>
<section class="section section--tint">
  <div class="wrap">
    ${secHead({ kicker: "Formats", title: "Three ways to get in" })}
    <div class="formats">
      ${formats.map(([t, d], i) => `<article class="format reveal" style="--i:${i}"><span class="format__n">0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join("")}
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    ${secHead({ kicker: "House rules", title: "How we keep breaks honest" })}
    <div class="rules">
      ${breakRules.map(([t, d], i) => `<article class="rule reveal" style="--i:${i % 3}">${icon.check}<div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></article>`).join("")}
    </div>
  </div>
</section>
<section class="section section--line">
  <div class="wrap faq-split">
    <div>${secHead({ kicker: "Break questions", title: "New to breaks?", lead: "Here’s the short version. Luis is happy to walk you through it on the phone." })}</div>
    <div class="reveal">${faqList(faqs.find((g) => g.group === "Breaks").items)}</div>
  </div>
</section>
${ctaBand(b, { title: "Want a spot on Friday’s case?", text: "Call the shop and we’ll hold your team for 30 minutes while you pay by phone. Must be 18 or older." })}
`;
  return layout({
    title: "Live Box Breaks",
    description:
      "Weekly live baseball card box and case breaks: 2026 Topps Series 2, Donruss Elite, Stadium Club, Prizm and more. Pick-your-team, random team and divisional formats.",
    current: "breaks",
    body,
  });
}

export function pricingPage() {
  const b = "";
  const month = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "Pricing" }],
  kicker: "Pricing",
  title: "Every fee, printed plainly.",
  lead: "No membership, no listing fees and no surprise charges at pickup. Appraisals are always free, and we’ll quote anything else before we start.",
  actions: `<a class="btn btn--accent btn--lg" href="sell.html">Get a free appraisal</a>`,
})}
<section class="section">
  <div class="wrap">
    <div class="price-grid">
      ${pricing
        .map(
          (p, i) => `<article class="price reveal" style="--i:${i % 3}" id="${p.id}">
        <h2 class="price__title">${esc(p.title)}</h2>
        <table class="price__table"><tbody>${p.rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>
        <p class="price__note">${esc(p.note)}</p>
        <a class="price__link" href="services/${p.id}.html">${esc(services.find((x) => x.id === p.id).name)} details</a>
      </article>`,
        )
        .join("")}
    </div>
    <p class="fine reveal">Prices as of ${month}. Grading company fees are set by PSA, SGC and BGS and passed through at our dealer rate, so we confirm them at drop-off.</p>
  </div>
</section>
${ctaBand(b, { title: "Want a quote on your collection?", text: "Bring it in, or email a few photos and a rough card count. The appraisal is free either way." })}
`;
  return layout({
    title: "Pricing",
    description:
      "Transparent pricing for card appraisals, grading prep, consignment commission, live break spots, written appraisals and bulk sorting.",
    current: "pricing",
    body,
  });
}

function field({ id, label, type = "text", required = false, auto = "", placeholder = "", hint = "" }) {
  return `<div class="field">
  <label for="${id}">${label}${required ? "" : ' <span class="opt">optional</span>'}</label>
  <input id="${id}" name="${id}" type="${type}"${required ? " required" : ""}${auto ? ` autocomplete="${auto}"` : ""}${placeholder ? ` placeholder="${esc(placeholder)}"` : ""}>
  ${hint ? `<p class="hint">${esc(hint)}</p>` : ""}
</div>`;
}

function formDone(msg) {
  return `<div class="form__done" hidden tabindex="-1" data-done>
  <span class="form__done-icon">${icon.check}</span>
  <h3>Thanks<span data-done-name></span>. We’ve got it.</h3>
  <p>${esc(msg)}</p>
  <p class="form__demo">This is a concept site, so the form isn’t connected to an inbox yet.</p>
</div>`;
}

export function sellPage() {
  const b = "";
  const eras = ["Pre-1970 vintage", "1970s", "1980s–early ’90s", "1995–2010", "2011–today"];
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "Sell your cards" }],
  kicker: "Sell your cards",
  title: "Get a written cash offer, free.",
  lead: "Tell us a little about the collection and we’ll call you back within one business day. Or just walk in. Most appraisals take under 45 minutes.",
})}
<section class="section">
  <div class="wrap form-split">
    <form class="form reveal" data-demo-form>
      <h2 class="form__title">Tell us about your cards</h2>
      <div class="form__row">
        ${field({ id: "name", label: "Your name", required: true, auto: "name" })}
        ${field({ id: "phone", label: "Phone", type: "tel", required: true, auto: "tel", placeholder: "(614) 555-0100" })}
      </div>
      <div class="form__row">
        ${field({ id: "email", label: "Email", type: "email", required: true, auto: "email" })}
        ${field({ id: "city", label: "City", auto: "address-level2" })}
      </div>
      <div class="field">
        <label for="size">About how many cards?</label>
        <select id="size" name="size" required>
          <option value="">Choose one</option>
          <option>Under 500 (a binder or two)</option>
          <option>500 – 5,000 (a few boxes)</option>
          <option>5,000 – 25,000 (a closet)</option>
          <option>Over 25,000 (we should come to you)</option>
          <option>Just a few key cards</option>
        </select>
      </div>
      <fieldset class="field">
        <legend>What years are in it? <span class="opt">check all that apply</span></legend>
        <div class="chips">${eras.map((e, i) => `<label class="chip"><input type="checkbox" name="eras" value="${esc(e)}"><span>${esc(e)}</span></label>`).join("")}</div>
      </fieldset>
      <fieldset class="field">
        <legend>Any graded cards or sealed wax?</legend>
        <div class="chips">
          <label class="chip"><input type="radio" name="graded" value="Graded cards" required><span>Graded cards</span></label>
          <label class="chip"><input type="radio" name="graded" value="Sealed wax"><span>Sealed wax</span></label>
          <label class="chip"><input type="radio" name="graded" value="Both"><span>Both</span></label>
          <label class="chip"><input type="radio" name="graded" value="Neither"><span>Neither</span></label>
          <label class="chip"><input type="radio" name="graded" value="Not sure"><span>Not sure</span></label>
        </div>
      </fieldset>
      <div class="field">
        <label for="notes">Anything we should know? <span class="opt">optional</span></label>
        <textarea id="notes" name="notes" rows="4" placeholder="For example: my dad’s collection from 1985–1995, mostly Topps and Donruss, a few Griffey rookies."></textarea>
        <p class="hint">Have photos? Reply to our email with them and we can give you a ballpark before you visit.</p>
      </div>
      <button class="btn btn--accent btn--lg btn--block" type="submit">Request my offer</button>
      <p class="form__fine">We reply within one business day. Your details are only used to respond to you.</p>
      ${formDone("Expect a call or email from Marcus within one business day. In the meantime, keep the cards in their sleeves and away from direct sun.")}
    </form>
    <aside class="form-aside">
      <div class="panel reveal">
        <h2 class="panel__h">What we buy</h2>
        <ul class="checks">${["Baseball, 1909 to today", "Raw cards, graded slabs and sealed wax", "Complete sets and team lots", "Autographs and memorabilia cards", "Binders, top-loaders and cases in good shape"].map((x) => `<li>${icon.check}<span>${x}</span></li>`).join("")}</ul>
      </div>
      <div class="panel reveal" style="--i:1">
        <h2 class="panel__h">What we pass on</h2>
        <ul class="xs">${["Reprints and custom cards", "Water-damaged or moldy cards", "Loose commons with heavy creases", "Other sports and non-sports cards"].map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="panel panel--navy reveal" style="--i:2">
        <h2 class="panel__h">Before you come in</h2>
        <ul class="xs xs--light">${["Leave cards in their sleeves and binders", "Don’t clean, press or flatten anything", "Bring a photo ID for payment", "Payouts over $600 need a W-9"].map((x) => `<li>${x}</li>`).join("")}</ul>
      </div>
    </aside>
  </div>
</section>
<section class="section section--line">
  <div class="wrap">
    ${secHead({ kicker: "What happens next", title: "Around the bases in one visit" })}
    ${basesBlock()}
  </div>
</section>
<section class="section section--tint">
  <div class="wrap faq-split">
    <div>${secHead({ kicker: "Selling questions", title: "Before you sell" })}${quoteCard(testimonials[0])}</div>
    <div class="reveal">${faqList(faqs[0].items)}</div>
  </div>
</section>
`;
  return layout({
    title: "Sell Your Baseball Cards",
    description:
      "Get a free, written cash offer for your baseball card collection in Columbus, Ohio. Same-day payment by cash, check or ACH, or 15% more in store credit.",
    current: "sell",
    body,
  });
}

export function aboutPage() {
  const b = "";
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "About" }],
  kicker: "About the shop",
  title: "A card shop that shows its math.",
  lead: `Red Stitch started in ${site.founded} with three binders on a folding table. We still run it the same way: we price every card in front of you, we tell you when not to grade, and the same four people answer the phone.`,
})}
<section class="section">
  <div class="wrap about">
    <div class="prose reveal">
      <p class="prose__lead">Marcus Hale opened Red Stitch because he got tired of watching people sell their childhood collections to buyers who wouldn’t explain their offers. The first rule of the shop was simple: show the comps. It’s still the first rule.</p>
      <p>Today we’re a 1,800-square-foot shop on Linden Park Avenue with a grading prep bench, a break studio and roughly 400,000 commons sorted by set and number. We buy collections most days of the week, send thousands of cards a year to PSA, SGC and BGS, and run live breaks four nights a week.</p>
      <p>What hasn’t changed is the counter. Appraisals happen in front of you, not in a back room. If a card isn’t worth grading, we’ll say so. If your collection is mostly 1990 Donruss, we’ll tell you that too, and then we’ll look through every box anyway, because that’s where the surprises are.</p>
    </div>
    <ol class="timeline">
      ${timeline.map(([y, t], i) => `<li class="reveal" style="--i:${i}"><span class="timeline__y">${y}</span><p>${esc(t)}</p></li>`).join("")}
    </ol>
  </div>
</section>
<section class="section section--navy">
  <div class="wrap">
    ${secHead({ kicker: "House rules", title: "Four promises at the counter", align: "sec-head--light" })}
    <div class="values">
      ${values.map(([t, d], i) => `<article class="value reveal" style="--i:${i}"><span class="value__n">0${i + 1}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></article>`).join("")}
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    ${secHead({ kicker: "The roster", title: "Who you’ll meet at the counter" })}
    <div class="team">
      ${team
        .map(
          (m, i) => `<article class="member reveal" style="--i:${i}">
        <div class="member__card"><span class="member__init">${m.initials}</span><span class="member__pc">${esc(m.pc)}</span></div>
        <h3>${esc(m.name)}</h3>
        <p class="member__role">${esc(m.role)}</p>
        <p>${esc(m.bio)}</p>
      </article>`,
        )
        .join("")}
    </div>
  </div>
</section>
<section class="section section--line cb-sec cb-sec--light">
  <div class="wrap cb-sec__in">
    ${secHead({ kicker: "By the numbers", title: "Our stat line, so far" })}
    ${cardBack()}
  </div>
</section>
${ctaBand(b, { title: "Come say hi at the counter.", text: `We’re at ${addr.street}, next to the barber shop, with free parking in the rear lot.` })}
`;
  return layout({
    title: "About",
    description:
      "Red Stitch Card Co. is a Columbus, Ohio baseball card shop founded in 2012. Meet the team, see our history, and learn how we price collections.",
    current: "about",
    body,
  });
}

export function contactPage() {
  const b = "";
  const topics = [
    ["selling", "Selling a collection"],
    ["grading", "Grading submissions"],
    ["consignment", "Consignment"],
    ["breaks", "Live breaks"],
    ["appraisal", "Insurance or estate appraisal"],
    ["sorting", "Bulk sorting and set building"],
    ["hunting", "Want-list card hunting"],
    ["other", "Something else"],
  ];
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "Contact" }],
  kicker: "Contact",
  title: "Call, email or stop by.",
  lead: "A real person answers during shop hours. Emails get a reply within one business day, usually sooner.",
})}
<section class="section">
  <div class="wrap form-split form-split--contact">
    <form class="form reveal" data-demo-form>
      <h2 class="form__title">Send us a message</h2>
      <div class="form__row">
        ${field({ id: "c-name", label: "Your name", required: true, auto: "name" })}
        ${field({ id: "c-email", label: "Email", type: "email", required: true, auto: "email" })}
      </div>
      <div class="form__row">
        ${field({ id: "c-phone", label: "Phone", type: "tel", auto: "tel" })}
        <div class="field">
          <label for="c-topic">What’s it about?</label>
          <select id="c-topic" name="topic" required data-topic>
            <option value="">Choose a topic</option>
            ${topics.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="field">
        <label for="c-msg">Message</label>
        <textarea id="c-msg" name="message" rows="6" required placeholder="What can we help with?"></textarea>
      </div>
      <fieldset class="field">
        <legend>Best way to reach you</legend>
        <div class="chips">
          <label class="chip"><input type="radio" name="reach" value="email" checked><span>Email</span></label>
          <label class="chip"><input type="radio" name="reach" value="call"><span>Phone call</span></label>
          <label class="chip"><input type="radio" name="reach" value="text"><span>Text</span></label>
        </div>
      </fieldset>
      <button class="btn btn--accent btn--lg btn--block" type="submit">Send my message</button>
      ${formDone("We’ll reply within one business day. If it’s about a break spot tonight, call the shop instead so we can hold it.")}
    </form>
    <aside class="form-aside">
      <div class="panel reveal">
        <ul class="contact-list">
          <li>${icon.phone}<div><span>Call or text</span><a href="${site.phoneHref}">${site.phone}</a></div></li>
          <li>${icon.mail}<div><span>Email</span><a href="mailto:${site.email}">${site.email}</a></div></li>
          <li>${icon.pin}<div><span>Shop</span><address>${esc(addr.street)}<br>${esc(addr.city)}, ${addr.region} ${addr.zip}</address></div></li>
        </ul>
      </div>
      <div class="panel reveal" style="--i:1">
        <h2 class="panel__h">${icon.clock} Hours</h2>
        <table class="hours hours--panel"><tbody>${hoursRows()}</tbody></table>
      </div>
      <div class="map reveal" style="--i:2" role="img" aria-label="Map: the shop is on Linden Park Ave, with parking behind the building">
        <svg viewBox="0 0 400 240" aria-hidden="true">
          <rect width="400" height="240" fill="#E3E8EE"/>
          <g fill="#D2DAE3">
            <rect x="20" y="20" width="110" height="70" rx="4"/><rect x="160" y="20" width="90" height="70" rx="4"/><rect x="280" y="20" width="100" height="70" rx="4"/>
            <rect x="20" y="150" width="110" height="70" rx="4"/><rect x="280" y="150" width="100" height="70" rx="4"/>
          </g>
          <rect x="160" y="150" width="90" height="70" rx="4" fill="#fff" stroke="#0E1B2E" stroke-width="2"/>
          <rect x="172" y="198" width="66" height="16" rx="2" fill="#E3E8EE" stroke="#51607A" stroke-dasharray="3 3"/>
          <text x="205" y="210" font-size="9" text-anchor="middle" fill="#51607A" font-family="Barlow, sans-serif">Parking</text>
          <g stroke="#fff" stroke-width="18"><path d="M0 120h400"/><path d="M145 0v240M265 0v240"/></g>
          <path d="M0 120h400" stroke="#C9D2DC" stroke-width="1.5" stroke-dasharray="10 8"/>
          <text x="12" y="114" font-size="11" fill="#51607A" font-family="Barlow, sans-serif" font-weight="600">Linden Park Ave</text>
          <g transform="translate(205 150)">
            <path d="M0 0c-12-16-18-24-18-32a18 18 0 0 1 36 0c0 8-6 16-18 32z" fill="#C41E3A"/>
            <circle cx="0" cy="-32" r="7" fill="#fff"/>
          </g>
        </svg>
        <p>Park in the rear lot. Our door is the one with the red stitch, next to the barber shop.</p>
      </div>
    </aside>
  </div>
</section>
`;
  return layout({
    title: "Contact",
    description: `Call ${site.phone}, email ${site.email}, or visit us at ${addrLine}. Shop hours, directions and a contact form.`,
    current: "contact",
    body,
  });
}

export function faqPage() {
  const b = "";
  const body = `
${pageHero({
  b,
  crumbs: [{ label: "FAQ" }],
  kicker: "Questions",
  title: "Straight answers about your cards.",
  lead: "Can’t find what you’re looking for? Call the shop. We’d rather answer a question on the phone than have you drive over for nothing.",
})}
<section class="section">
  <div class="wrap faq-page">
    <nav class="faq-nav reveal" aria-label="FAQ sections">
      <ul>${faqs.map((g) => `<li><a href="#${g.group.toLowerCase().replace(/\s+/g, "-")}">${esc(g.group)}</a></li>`).join("")}</ul>
    </nav>
    <div class="faq-groups">
      ${faqs
        .map(
          (g) => `<section class="faq-group reveal" id="${g.group.toLowerCase().replace(/\s+/g, "-")}">
        <h2 class="faq-group__h">${esc(g.group)}</h2>
        ${faqList(g.items)}
      </section>`,
        )
        .join("")}
    </div>
  </div>
</section>
${ctaBand(b)}
`;
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((g) =>
      g.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    ),
  };
  return layout({
    title: "FAQ",
    description:
      "Answers about selling baseball cards, grading turnaround, consignment, live breaks, house calls and shop hours at Red Stitch Card Co.",
    current: "faq",
    body,
    head: `<script type="application/ld+json">${JSON.stringify(ld)}</script>`,
  });
}

export function privacyPage() {
  const b = "";
  const body = `
${pageHero({ b, crumbs: [{ label: "Privacy" }], title: "Privacy policy", lead: `How ${site.name} handles the details you share with us.` })}
<section class="section">
  <div class="wrap narrow prose">
    <p class="prose__lead">We collect only what we need to answer you, buy your cards or run your order, and we never sell it.</p>
    <h2>What we collect</h2>
    <p>When you use a form on this site, we receive your name, contact details and anything you write in the message. When you sell to us, we record a photo ID with the purchase, and payouts over $600 also need a W-9 for tax reporting.</p>
    <h2>How we use it</h2>
    <p>We use your information to reply to you, make and pay offers, ship cards from breaks and consignment, and keep the records the law requires. We don’t send marketing emails unless you sign up for them.</p>
    <h2>Who we share it with</h2>
    <p>We share it only with the services needed to do the job: grading companies (for submissions), shipping carriers, and our payment processor. We never sell or rent your information.</p>
    <h2>Cookies</h2>
    <p>This site doesn’t use tracking or advertising cookies.</p>
    <h2>Questions</h2>
    <p>Email <a href="mailto:${site.email}">${site.email}</a> or call <a href="${site.phoneHref}">${site.phone}</a>, and we’ll tell you what we have on file or delete it where the law allows.</p>
  </div>
</section>
`;
  return layout({ title: "Privacy", description: `Privacy policy for ${site.name}.`, current: "privacy", body });
}

export function notFoundPage() {
  const b = "";
  const body = `
<section class="phero phero--404">
  ${diamond}
  <div class="wrap phero__in">
    <div class="phero__copy">
      <p class="kicker kicker--light">Error 404</p>
      <h1 class="phero__title words">${words("Swing and a miss.")}</h1>
      <p class="phero__lead">That page isn’t in the binder. It may have moved, or the link had a typo.</p>
      <div class="phero__actions">
        <a class="btn btn--accent btn--lg" href="${b}index.html">Back to the home page</a>
        <a class="btn btn--ghost btn--lg" href="${b}services.html">See our services</a>
      </div>
    </div>
  </div>
</section>`;
  return layout({ title: "Page not found", description: "Page not found.", body });
}
