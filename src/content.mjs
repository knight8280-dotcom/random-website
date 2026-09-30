// Every word on the site lives here. Edit this file, then run `npm run build`.
// Business details are placeholders for a concept site: the phone number uses the
// reserved 555-01xx range, and the address, people and reviews are fictional.

export const site = {
  name: "Red Stitch Card Co.",
  short: "Red Stitch",
  tagline: "Baseball card buying, grading and live breaks in Columbus, Ohio",
  description:
    "Free baseball card appraisals, same-day cash offers, PSA/SGC/BGS grading submissions, consignment and live box breaks at our Columbus, Ohio card shop.",
  phone: "(614) 555-0142",
  phoneHref: "tel:+16145550142",
  email: "hello@redstitchcards.com",
  address: {
    street: "1127 Linden Park Ave, Suite B",
    city: "Columbus",
    region: "OH",
    zip: "43214",
  },
  founded: 2012,
  // 0 = Sunday. Times are 24h, shop-local (America/New_York).
  hours: [
    { day: "Sunday", open: "12:00", close: "17:00" },
    { day: "Monday", open: null, close: null, note: "Shop closed, breaks live at 8 PM" },
    { day: "Tuesday", open: "11:00", close: "19:00" },
    { day: "Wednesday", open: "11:00", close: "19:00" },
    { day: "Thursday", open: "11:00", close: "19:00" },
    { day: "Friday", open: "11:00", close: "19:00" },
    { day: "Saturday", open: "10:00", close: "18:00" },
  ],
  timezone: "America/New_York",
  rating: { score: "4.9", count: 612 },
  social: [
    { label: "Instagram", handle: "@redstitchcards" },
    { label: "YouTube", handle: "Red Stitch Breaks" },
    { label: "eBay", handle: "redstitchcardco" },
  ],
};

export const nav = [
  { label: "Services", href: "services.html", match: ["services"] },
  { label: "Breaks", href: "breaks.html", match: ["breaks"] },
  { label: "Pricing", href: "pricing.html", match: ["pricing"] },
  { label: "About", href: "about.html", match: ["about"] },
  { label: "Contact", href: "contact.html", match: ["contact"] },
];

export const hero = {
  title: "Find out what your cards are really worth.",
  lead:
    "Free 15-minute appraisals at our Columbus counter, same-day cash offers, and PSA, SGC and BGS grading without the guesswork.",
  primary: { label: "Get a free appraisal", href: "sell.html" },
  proof: [
    { strong: "4.9", text: "from 612 Google reviews" },
    { strong: "Since 2012", text: "buying and grading" },
    { strong: "48,210", text: "cards sent for grading" },
  ],
};

export const ribbon = [
  "Breaking Friday: 2026 Topps Series 2 hobby case",
  "Fat packs back in stock: $6.99",
  "Just graded: 1989 Upper Deck #1 rookie, PSA 9",
  "Buying vintage 1952–1979 every day",
  "Donruss Elite mega boxes: $49.99",
  "Grading prep is free on 20+ cards",
  "Stadium Club blasters on the wall",
];

export const services = [
  {
    id: "buying",
    no: "01",
    name: "Collection Buying",
    short: "Buying",
    featured: true,
    badge: "Free",
    glyph: "tag",
    blurb:
      "Walk in with a shoebox or a binder, walk out with a written cash offer the same day.",
    lead:
      "Free, no-obligation appraisals on every baseball collection, from a single binder to a garage full of boxes, with a written cash offer before you leave.",
    details: [
      "Most collections that come through our door have been sitting in a closet for twenty years. Somebody’s dad kept every pack from 1987 to 1994, or a grandkid inherited three binders and a trunk of loose commons. The first question is always the same: is any of this worth anything? We answer that honestly and for free, and if you want to sell, we put a written cash offer in your hand before you leave.",
      "The appraisal happens at the counter where you can watch. We sort by era and set, pull the rookies, stars, errors and short prints, and price the key cards against recent sold comps rather than asking prices. Junk-wax commons from 1986–1994 are priced by the thousand-count box. Vintage, graded slabs and modern numbered parallels are priced card by card, and we show you the comp behind every number.",
      "Offers usually run 50–70% of current market value for raw singles and 75–85% for graded cards and sealed wax. We pay by cash, check or ACH the same day. If you take store credit instead, we add 15% on top. You can also sell only the good cards and keep the rest, and we’ll point out which ones are worth grading before you sell.",
      "This service suits estates, downsizing, and anyone who wants the collection sorted and sold in one afternoon. Collections over roughly 25,000 cards take longer than a walk-in allows, so call ahead. We’ll book a dedicated time or come to you anywhere within 60 miles of the shop.",
    ],
    includes: [
      "Free appraisal at the counter or by photos",
      "Written offer that holds for 7 days",
      "Same-day payment by cash, check or ACH",
      "15% bonus when you take store credit",
      "House calls for collections over 25,000 cards",
    ],
    specs: [
      ["Appraisal time", "15–45 minutes for most collections"],
      ["Typical payout", "50–85% of recent sold comps"],
      ["Payment", "Cash, check, ACH or store credit"],
      ["What we buy", "Baseball 1909–present, raw, graded and sealed"],
      ["Service area", "Walk-in, or house calls within 60 miles"],
      ["Cost", "Free, no obligation"],
    ],
    process: [
      ["You bring the cards", "Walk in during open hours, or email photos first if you’d like a ballpark before you drive over."],
      ["We sort and price", "Key cards get priced against recent sold comps at the counter, and we explain every number."],
      ["You leave with an offer", "Take the written offer home to think about it, or leave with cash that afternoon."],
    ],
    cta: "Get a free appraisal",
    ctaHref: "sell.html",
  },
  {
    id: "grading",
    no: "02",
    name: "Grading Submissions",
    short: "Grading",
    badge: "PSA · SGC",
    glyph: "slab",
    blurb:
      "We prescreen, prep and submit your cards to PSA, SGC and BGS at dealer rates.",
    lead:
      "Every card is prescreened under magnification before it ships, so you only pay to grade the cards that are likely to come back strong.",
    details: [
      "A PSA 10 and a PSA 8 of the same rookie can be a four-figure difference, and most of that is decided before the card ever ships. Collectors lose money grading cards that were never going to hit, or paying walk-through prices when a bulk tier would have done. We decide what’s worth sending, prepare it properly, and get it back to you for less than going it alone.",
      "Every card is prescreened on a lightbox under magnification. We measure centering with a template, check corners and edges under a loupe, and look for print lines, dimples and surface scratches. We remove fingerprints and dust with a microfiber cloth and never press, trim or alter a card. Each card then goes into a fresh semi-rigid, is logged in a sheet you can see, and ships insured.",
      "Because we submit in volume, you get dealer-level pricing that’s often below the grading company’s public tiers, with no membership fee. Our prep fee is $5 per card, and it’s free when you submit 20 or more. We track the order from arrival to posted grades and text you when grades post. You can pick the slabs up in the shop, or we ship them back insured.",
      "This is a good fit for modern rookies, vintage stars, and anything you pulled that looked perfect coming out of the pack. Turnaround is set by the grading companies, not by us. Value tiers are running 45–65 business days right now, and no one can promise a grade. What we can promise is an honest read before you spend the money.",
    ],
    includes: [
      "Prescreen of every card with centering measurements",
      "Surface cleaning without pressing or alterations",
      "Semi-rigid holders and all submission paperwork",
      "Insured shipping to the grader and back",
      "Text alert the day grades post",
    ],
    specs: [
      ["Grading companies", "PSA, SGC, BGS and CGC"],
      ["Prep fee", "$5 per card, free at 20+ cards"],
      ["Turnaround", "20–65 business days by tier"],
      ["Insurance", "Full declared value, both directions"],
      ["Minimum order", "None"],
    ],
    process: [
      ["You drop off the cards", "Tell us your goal: keep, sell or build a registry set. We note it on every card."],
      ["We prescreen and submit", "We recommend what to send and at which tier, then prep, log and ship the order."],
      ["You get slabs back", "Pick them up, have them shipped, or consign them straight from our case."],
    ],
    cta: "Start a grading order",
    ctaHref: "contact.html#grading",
  },
  {
    id: "consignment",
    no: "03",
    name: "Consignment",
    short: "Consignment",
    badge: "9–15%",
    glyph: "camera",
    blurb:
      "We photograph, list and sell your cards. You set the floor price, and we never go under it.",
    lead:
      "Get full market price without the photos, listings, buyer messages or shipping. You set the floor, and we handle everything else.",
    details: [
      "Selling cards yourself is a second job: photos, listings, buyer questions, returns, shipping supplies, and the occasional buyer who never pays. Consignment hands all of that to us. You keep the upside of selling at market price, we do the work, and you never deal with a buyer directly.",
      "Every card worth $25 or more is scanned front and back at 600 dpi and listed on our eBay store, shown in our display case, and offered to our regulars and social followers. For high-end cards we manage the submission to a major auction house. You set a floor price on anything you want protected, and we never sell below it.",
      "Commission is tiered: 15% on cards that sell under $250, 12% from $250 to $1,000, and 9% above $1,000, with marketplace fees already included. There are no listing fees and no photography charges. Payouts go out every other Friday by ACH or check, with a statement that shows every sale, fee and date.",
      "Consignment works best for graded cards and for vintage and modern singles worth $25 or more. For lower-value cards, selling to us outright is usually faster and puts more money in your pocket. We’ll tell you which path makes more sense card by card, and the 90-day agreement can be cancelled at any time.",
    ],
    includes: [
      "Front and back scans with written listings",
      "Floor-price protection on every card",
      "Storage in our insured, alarmed vault",
      "Payouts every other Friday with a full statement",
      "Auction-house placement for high-end cards",
    ],
    specs: [
      ["Commission", "9–15% tiered, marketplace fees included"],
      ["Minimum value", "$25 per card"],
      ["Payouts", "Every other Friday, by ACH or check"],
      ["Sales channels", "eBay, in-store case and auction partners"],
      ["Agreement", "90 days, cancel anytime"],
    ],
    process: [
      ["You drop off or ship cards", "Sign a one-page 90-day agreement and set floor prices on anything you want protected."],
      ["We list and sell", "We handle the scans, listings, buyer questions and insured shipping."],
      ["You get paid", "Money lands every other Friday with a statement for every card sold."],
    ],
    cta: "Talk about consigning",
    ctaHref: "contact.html#consignment",
  },
  {
    id: "breaks",
    no: "04",
    name: "Live Box Breaks",
    short: "Breaks",
    badge: "Live",
    glyph: "box",
    blurb:
      "Claim a team spot, watch us open the sealed case live, and every card for your team ships to you.",
    lead:
      "Get every card for your team from a sealed hobby case, opened live on camera, for a fraction of the case price.",
    details: [
      "A hobby case of the newest flagship release costs more than most people want to spend on a Tuesday night. A break splits that case into spots, usually one for each of the 30 MLB teams. You get every card for your team at a fraction of the price, and you get to watch it opened live.",
      "We run breaks four nights a week on our stream and in the shop. Every case is sealed and shown on camera from the shrink-wrap to the last pack. Team spots are either picked by the buyer or assigned by a live randomizer. Recent products include 2026 Topps Series 2 hobby, Panini Donruss Elite, Topps Stadium Club and Panini Prizm.",
      "Spots are priced per product, usually $15–$60 for a hobby box break and $90–$400 for a case break, depending on the team. Every card for your team is sleeved, top-loaded and shipped weekly in a tracked bubble mailer for $5, or held for free in-store pickup. Base cards ship too, and we keep nothing.",
      "Breaks suit collectors chasing one team or one player without buying whole cases. Spots are claimed by phone, by email or at the counter, first come first served, and must be paid before the break starts. You must be 18 or older to buy a spot, and a replay link goes out after every break.",
    ],
    includes: [
      "Sealed product opened start to finish on camera",
      "Every card for your team, base included",
      "Sleeve and top-loader on every hit",
      "Weekly tracked shipping or free pickup",
      "Replay link after every break",
    ],
    specs: [
      ["Schedule", "Mon, Wed and Fri at 8 PM; Sat at 2 PM"],
      ["Formats", "Pick-your-team, random team, divisional"],
      ["Spot prices", "$12–$400 depending on product"],
      ["Shipping", "$5 per week, tracked"],
      ["Eligibility", "18+ only"],
    ],
    process: [
      ["You claim a spot", "Call, email or stop by the counter. Spots are first come, first served."],
      ["We open it live", "The sealed case is opened on camera, and every card is sorted by team as it comes out."],
      ["Your cards ship Friday", "They arrive sleeved and top-loaded, or wait at the counter for pickup."],
    ],
    cta: "See the break schedule",
    ctaHref: "breaks.html",
  },
  {
    id: "appraisals",
    no: "05",
    name: "Insurance & Estate Appraisals",
    short: "Appraisals",
    badge: "Written",
    glyph: "report",
    blurb:
      "Written, itemized valuations for insurance riders, estates, divorces and donations.",
    lead:
      "A signed, itemized valuation that insurers, attorneys and families can rely on, researched card by card against real sales.",
    details: [
      "Homeowner’s policies often cap collectibles at a few thousand dollars, and estates stall when nobody knows what the cards in the basement are worth. When a number has to satisfy an insurer, an attorney or a family, a quick counter estimate isn’t enough. You need it on paper, itemized and dated.",
      "Our appraiser inventories the collection card by card for anything valued over $20, and by lot for the rest. Each line lists the year, set, card number, player, condition or grade, and fair market value based on at least three recent sold comparables. Every graded card is checked against the grading company’s certification database.",
      "You receive a signed PDF report with photos of key items, a written methodology, and a summary that’s ready for an insurance schedule or probate inventory. Pricing is flat: $150 for collections up to 500 itemized cards, then $0.25 for each additional itemized card. On-site visits within 60 miles add $75. If you sell to us within 30 days, we refund the appraisal fee.",
      "This is the right service for insurance riders, estate settlements, dividing a collection in a divorce, and most charitable donations. We aren’t an IRS qualified appraiser for non-cash donations over $5,000, and we’ll refer you to one for those. For everything else, our report is what agents and attorneys ask for.",
    ],
    includes: [
      "Itemized inventory spreadsheet",
      "Signed PDF report with photos of key cards",
      "Certification checks on every graded card",
      "Three sold comparables for every itemized line",
      "Fee refunded if you sell to us within 30 days",
    ],
    specs: [
      ["Flat fee", "$150 for up to 500 itemized cards"],
      ["Additional cards", "$0.25 per itemized card"],
      ["On-site visit", "+$75 within 60 miles"],
      ["Delivery", "5–10 business days"],
      ["Format", "Signed PDF plus spreadsheet"],
    ],
    process: [
      ["You tell us the purpose", "Insurance, estate, divorce or donation, plus a rough card count so we can quote a flat fee."],
      ["We inventory and research", "Done in our shop or at your home, card by card for anything over $20."],
      ["You get a signed report", "It arrives within 10 business days, ready to hand to your agent or attorney."],
    ],
    cta: "Request an appraisal",
    ctaHref: "contact.html#appraisal",
  },
  {
    id: "sorting",
    no: "06",
    name: "Bulk Sorting & Set Building",
    short: "Sorting",
    badge: "$20/1k",
    glyph: "stack",
    blurb:
      "Hand us the 2,500-card lot. We sort it, pull the keepers and fill the holes in your sets.",
    lead:
      "We turn a box of mystery cards into labeled, numbered sets, with the rookies and stars pulled out and priced.",
    details: [
      "Bulk lots are the cheapest cards in the hobby and the most time-consuming. That 2,500-card box from a yard sale might hide a rookie or two, or it might be 2,480 commons, and sorting it by hand takes a weekend. We do it in a day, and we know what to look for.",
      "We sort by year, brand and set, then by card number. Rookies, Hall of Famers, errors, short prints, parallels and serial-numbered inserts are pulled into a separate stack with estimated values. Everything comes back in labeled 800-count boxes. For set builders, we check your want list against our inventory of roughly 400,000 commons and fill the gaps from stock.",
      "Sorting costs $20 per 1,000 cards with a $20 minimum, and it’s free if you sell the pulled keepers to us. Set fills from our inventory are priced per card, usually 25¢ to $1 for commons. Anything we don’t have in stock goes onto a want list that we work for you.",
      "This is ideal for inherited lots, flea-market boxes, and anyone chasing a complete 1987 Topps or 2026 Topps Series 2 base set. We sort baseball only, not other sports or non-sports cards. If a lot isn’t worth the sorting fee, we’ll tell you before we start.",
    ],
    includes: [
      "Sort by year, brand, set and card number",
      "Keeper stack with estimated values",
      "Labeled 800-count storage boxes",
      "Checklist report showing what’s missing from each set",
      "Set fills from our commons inventory",
    ],
    specs: [
      ["Price", "$20 per 1,000 cards"],
      ["Minimum", "$20"],
      ["Turnaround", "3–7 days"],
      ["Set fills", "25¢–$1 per common"],
      ["Scope", "Baseball only"],
    ],
    process: [
      ["You drop off the lot", "Bring the box, the binder or just your set checklist."],
      ["We sort and pull keepers", "Everything is ordered by set and number, and the valuable cards are pulled and priced."],
      ["You pick up organized boxes", "They come with a report of what you have and what’s still missing."],
    ],
    cta: "Book a sort",
    ctaHref: "contact.html#sorting",
  },
  {
    id: "card-hunting",
    no: "07",
    name: "Want-List Card Hunting",
    short: "Card Hunting",
    badge: "No fee",
    glyph: "target",
    blurb:
      "Tell us the card you’ve been chasing. We find it, check that it’s real, and hold it for you.",
    lead:
      "Send us the card you’ve been chasing. We search our inventory, dealer network and shows, and check every find before you pay.",
    details: [
      "Some cards never show up at a Saturday card show: a specific numbered parallel, a short-print variation of the player you collect, your birth-year rookie in a PSA 8. Hunting them means watching auctions, shows and dealer networks for months. We already do that every day.",
      "Give us a want list with the year, set, card number, parallel and grade range, plus a target price. We search our own inventory first, then our dealer network, regional shows and online marketplaces. Before we buy anything, we check the photos for trimming, recoloring and counterfeits, and we verify slab certifications with the grading company.",
      "Starting a want list is free. When we find a card, we send you photos and a price: our cost plus a 10% finder’s fee, with a $10 minimum. You decide from there. Nothing is bought without your approval, and we hold approved cards for up to 14 days while you arrange pickup or payment.",
      "This service is for player collectors, registry-set builders, and anyone shopping for a very specific gift. Very rare cards can take months to surface, and some aren’t available at any price. We’ll give you an honest read on the odds before we start looking.",
    ],
    includes: [
      "Free want-list setup",
      "Searches of our inventory, dealer network and shows",
      "Authenticity and certification checks before purchase",
      "Photos and a price before you commit",
      "14-day hold on cards you approve",
    ],
    specs: [
      ["Setup fee", "None"],
      ["Finder’s fee", "10% over cost, $10 minimum"],
      ["Hold", "Up to 14 days"],
      ["Updates", "Every two weeks by email"],
      ["Scope", "Baseball, 1909–present"],
    ],
    process: [
      ["You send your want list", "Include the year, set, number, parallel, grade range and your target price."],
      ["We search and verify", "When we find a match, you get photos, the cert check and our price."],
      ["You approve it", "The card waits at the counter, or we ship it insured."],
    ],
    cta: "Start a want list",
    ctaHref: "contact.html#hunting",
  },
];

// "On the shelf" — sealed wax and singles on the wall this week (hold by phone).
export const shelf = [
  { id: "s2-blaster", name: "2026 Topps Series 2 Baseball Blaster", art: "s2", line1: "2026", line2: "Series 2", tag: "Blaster", price: "$25.00", unit: "$0.35/card", note: "Exclusive holiday parallels" },
  { id: "elite-blaster", name: "2026 Panini Donruss Elite Blaster", art: "elite", line1: "2026", line2: "Elite", tag: "Blaster", price: "$24.99", unit: "24 cards", note: "Blaster-exclusive inspirations" },
  { id: "bulk-lot", name: "Lot of 2,500 Baseball Cards", art: "bulk", line1: "2,500", line2: "Card lot", tag: "Pre-sorted", price: "$39.75", unit: "1.6¢/card", note: "Mixed years, hand-checked for creases" },
  { id: "elite-mega", name: "2026 Panini Donruss Elite Mega Box", art: "elite-mega", line1: "2026", line2: "Elite", tag: "Mega box", price: "$49.99", unit: "$1.25/card", note: "12 inserts or parallels" },
  { id: "s2-fat", name: "2026 Topps Series 2 Fat Pack", art: "fat", line1: "2026", line2: "Series 2", tag: "Fat pack", price: "$6.99", was: "$10.00", unit: "36 cards", note: "Retail-exclusive foil parallels", flag: "Low price" },
  { id: "stadium", name: "2025 Topps Stadium Club Blaster", art: "stadium", line1: "2025", line2: "Stadium", tag: "Blaster", price: "$34.99", unit: "4 exclusive parallels", note: "Lime green parallels" },
  { id: "prizm", name: "2025 Panini Prizm Baseball Blaster", art: "prizm", line1: "2025", line2: "Prizm", tag: "Blaster", price: "$39.99", unit: "30 cards", note: "Blue Ice Prizms" },
  { id: "archives", name: "2025 Topps Archives Baseball Blaster", art: "archives", line1: "2025", line2: "Archives", tag: "Blaster", price: "$29.99", unit: "Throwback designs", note: "4 black parallels per box" },
];

export const stats = {
  bio: [
    ["Ht", "1,800 sq ft"],
    ["Wt", "400,000 commons"],
    ["Bats", "Left"],
    ["Throws", "Fair offers"],
    ["Home", "Columbus, Ohio"],
    ["Est.", "2012"],
  ],
  columns: ["Graded", "Bought", "Breaks", "Consigned", "Rating"],
  rows: [
    ["2021", 5210, 214, 96, 1480, "4.8"],
    ["2022", 6340, 251, 142, 1910, "4.8"],
    ["2023", 7015, 268, 171, 2260, "4.9"],
    ["2024", 7890, 297, 188, 2745, "4.9"],
    ["2025", 8460, 312, 204, 3120, "4.9"],
    ["2026*", 6185, 241, 163, 2390, "4.9"],
  ],
  career: ["Career", 48210, 2160, 964, 16940, "4.9"],
  footnote:
    "*2026 through September. “Bought” counts whole collections, and “Consigned” counts individual cards sold for customers.",
  trivia:
    "The same rookie card can sell for thirty times more in a PSA 10 than in a PSA 8. That’s why we prescreen every card before it ships.",
};

export const bases = [
  { base: "First base", title: "Bring it in", text: "Walk in during open hours with the binder, the box or the shoebox. No appointment needed for most collections." },
  { base: "Second base", title: "We sort it in front of you", text: "Rookies, stars and errors get pulled, and bulk commons get counted by the box." },
  { base: "Third base", title: "We show you the comps", text: "Every key card is priced against recent sold listings, not asking prices." },
  { base: "Home", title: "You get paid", text: "Cash, check or ACH the same day, or 15% more in store credit." },
];

export const testimonials = [
  {
    quote:
      "My dad’s binders sat in the garage for 25 years. They sorted the whole thing at the counter, showed me the sold comps on every card over $10, and I left with a check the same afternoon.",
    name: "Renee T.",
    where: "Worthington",
    service: "Collection Buying",
    for: "buying",
  },
  {
    quote:
      "I brought in 32 cards for grading and they talked me out of 11 of them, which saved me real money. Of the 21 they sent, 14 came back a PSA 9 or 10.",
    name: "Jordan M.",
    where: "Dublin",
    service: "Grading",
    for: "grading",
  },
  {
    quote:
      "The Monday night breaks are the best part of my week. Every card for my team shows up sleeved and top-loaded, base cards included, and the replay link is always there the next morning.",
    name: "Chris A.",
    where: "Hilliard",
    service: "Live Breaks",
    for: "breaks",
  },
  {
    quote:
      "We needed an itemized valuation for my father’s estate. The report was clear enough that the attorney didn’t have a single follow-up question.",
    name: "Angela P.",
    where: "Westerville",
    service: "Estate Appraisal",
    for: "appraisals",
  },
];

// Upcoming breaks are generated from the build date so the schedule stays current.
export const breakRotation = [
  { product: "2026 Topps Series 2 Hobby Case", detail: "12 hobby boxes", format: "Pick your team", spots: 30, price: "$45–$320", where: "Stream + shop" },
  { product: "2025 Topps Stadium Club Hobby Box", detail: "16 packs", format: "Random team", spots: 30, price: "$22", where: "In the shop" },
  { product: "2026 Panini Donruss Elite Mega Box ×6", detail: "72 inserts/parallels", format: "Random team", spots: 30, price: "$18", where: "Stream" },
  { product: "2025 Panini Prizm Baseball Hobby Box", detail: "12 packs", format: "Pick your team", spots: 30, price: "$15–$95", where: "Stream" },
  { product: "2026 Topps Series 2 Jumbo Box ×2", detail: "20 packs each", format: "Divisional", spots: 6, price: "$120", where: "Stream + shop" },
  { product: "2025 Topps Archives Blaster Mixer", detail: "10 blasters", format: "Random team", spots: 30, price: "$12", where: "In the shop" },
  { product: "2026 Bowman Chrome Hobby Box", detail: "12 packs", format: "Pick your team", spots: 30, price: "$20–$140", where: "Stream" },
  { product: "Vintage Wax Mixer, 1985–1992", detail: "24 unopened packs", format: "Random team", spots: 30, price: "$20", where: "Stream + shop" },
];

export const breakRules = [
  ["Sealed on camera", "Every box and case is shown sealed and opened on stream from the shrink-wrap to the last pack."],
  ["Spots are paid before we start", "Claim by phone, email or at the counter. An unpaid spot goes back on the board 30 minutes before start."],
  ["Every card ships", "Base, inserts, parallels and hits for your team all ship. We keep nothing from a break."],
  ["Randomizer on screen", "Random-team breaks use a live, on-screen randomizer after the last spot sells."],
  ["18 and older", "You must be 18 or older to buy a spot. We’ll ask for a date of birth on your first break."],
  ["Shipping every Friday", "Your cards go out Friday in a tracked bubble mailer for $5 a week, however many breaks you were in."],
];

export const pricing = [
  {
    id: "buying",
    title: "Selling to us",
    note: "Appraisals are always free. Offers are written and hold for 7 days.",
    rows: [
      ["Counter appraisal", "Free"],
      ["Raw singles", "50–70% of recent sold comps"],
      ["Graded cards and sealed wax", "75–85% of recent sold comps"],
      ["Junk-wax commons (1986–1994)", "$5–$15 per 1,000 cards"],
      ["Store credit bonus", "+15% on any offer"],
      ["House call (25,000+ cards)", "Free within 60 miles"],
    ],
  },
  {
    id: "grading",
    title: "Grading submissions",
    note: "Grading company fees are passed through at our dealer rate and change often. We confirm the exact fee at drop-off.",
    rows: [
      ["Prescreen and prep", "$5 per card (free at 20+)"],
      ["Value tier (declared value up to $499)", "from $19 per card"],
      ["Regular tier (up to $1,499)", "from $45 per card"],
      ["Express tier (up to $2,499)", "from $95 per card"],
      ["Return shipping, insured", "$15 per order"],
    ],
  },
  {
    id: "consignment",
    title: "Consignment",
    note: "Marketplace fees are included. No listing fees and no photo fees.",
    rows: [
      ["Card sells for under $250", "15% commission"],
      ["$250 to $1,000", "12% commission"],
      ["Over $1,000", "9% commission"],
      ["Minimum card value", "$25"],
      ["Payouts", "Every other Friday"],
    ],
  },
  {
    id: "breaks",
    title: "Live breaks",
    note: "Spot prices depend on the product and the team. The live board is on the breaks page.",
    rows: [
      ["Blaster and mixer breaks", "$12–$25 per spot"],
      ["Hobby box breaks", "$15–$140 per spot"],
      ["Case breaks", "$45–$400 per spot"],
      ["Weekly shipping, tracked", "$5 per week"],
      ["In-store pickup", "Free"],
    ],
  },
  {
    id: "appraisals",
    title: "Written appraisals",
    note: "The fee is refunded if you sell the collection to us within 30 days.",
    rows: [
      ["Up to 500 itemized cards", "$150 flat"],
      ["Each additional itemized card", "$0.25"],
      ["On-site visit (within 60 miles)", "+$75"],
      ["Rush delivery (3 business days)", "+$60"],
    ],
  },
  {
    id: "sorting",
    title: "Sorting and hunting",
    note: "Sorting is free if you sell us the keepers it turns up.",
    rows: [
      ["Bulk sorting", "$20 per 1,000 cards ($20 minimum)"],
      ["Set fills from our stock", "25¢–$1 per common"],
      ["Want-list setup", "Free"],
      ["Finder’s fee on a hunted card", "10% over cost ($10 minimum)"],
    ],
  },
];

export const faqs = [
  {
    group: "Selling",
    items: [
      ["Do I need an appointment for an appraisal?", "Not for most collections. Walk in during open hours with up to a few thousand cards or a stack of binders. For 25,000 cards or more, call ahead and we’ll book a dedicated time or come to you."],
      ["What do you buy?", "Baseball cards from 1909 to today, whether raw, graded or sealed. We also buy supplies in good shape, such as binders, top-loaders and graded-card cases. We pass on reprints, custom cards, and heavily damaged commons."],
      ["How do you price my cards?", "Key cards are priced against recent sold listings, not asking prices, and we show you the comps at the counter. Bulk commons from the same era are priced by the box, because that’s how they resell."],
      ["Are my 1980s and ’90s cards worth anything?", "Honestly, most base cards from 1986–1994 are worth $5–$15 per thousand, because the hobby printed so many. The exceptions are high-grade rookies of Hall of Famers, error cards and certain inserts. We look through every box, because that’s where the surprises are."],
      ["What should I bring when I sell?", "Bring the cards as they are. Don’t pull them out of sleeves, and don’t clean or press them. Bring a photo ID. Payouts over $600 also need a completed W-9 for our records."],
    ],
  },
  {
    group: "Grading",
    items: [
      ["Should I grade my cards before I sell?", "Only when the grade is likely to add more value than the fee costs. For most raw cards under $30, it won’t. Our prescreen tells you which cards are worth it before you spend anything."],
      ["How long does grading take?", "It depends on the grading company and the tier. Right now value tiers are running 45–65 business days and express tiers 10–20. Add about a week for our prep and shipping."],
      ["Is my collection safe with you?", "Every card is photographed and logged at intake, stored in an insured, alarmed vault, and shipped insured at full declared value. You get a copy of the intake log."],
    ],
  },
  {
    group: "Breaks",
    items: [
      ["How does a break work?", "A sealed box or case is split into spots, usually one per MLB team. You buy a spot, we open the product live, and every card for your team is yours. On the random-team format, teams are assigned by an on-screen randomizer after the last spot sells."],
      ["Do I have to watch live?", "No. Every break is recorded, and a replay link goes out the next morning. Your cards ship on Friday either way."],
      ["Is there an age limit?", "Yes. You must be 18 or older to buy a break spot."],
    ],
  },
  {
    group: "The shop",
    items: [
      ["Do you sell sealed boxes online?", "No. Sealed wax is in-store only. Call and we’ll hold a box for you for 48 hours. Singles are listed on our eBay store."],
      ["Do you do house calls?", "Yes, for collections over 25,000 cards or for anyone who can’t easily get to the shop. House calls are free within 60 miles."],
      ["Where do I park?", "There’s free parking in the rear lot. Our door is the one with the red stitch painted on it, next to the barber shop."],
    ],
  },
];

export const team = [
  { name: "Marcus Hale", role: "Founder and head buyer", bio: "Started Red Stitch from a folding table at a Sunday card show in 2012. He has priced more than 2,000 collections and still gets excited about a crease-free ’80s wax box.", initials: "MH", pc: "Collects 1970s Reds" },
  { name: "Dana Okafor", role: "Grading and authentication", bio: "Runs every prescreen and the trimming checks on anything vintage. Dana has sent more than 40,000 cards to PSA, SGC and BGS.", initials: "DO", pc: "Collects Ken Griffey Jr." },
  { name: "Luis Ferreira", role: "Breaks host", bio: "Hosts four nights a week on the stream and runs the Saturday in-store breaks. He also keeps the randomizer honest and the team sorting fast.", initials: "LF", pc: "Collects Guardians prospects" },
  { name: "Priya Shah", role: "Consignment and appraisals", bio: "Writes our insurance and estate reports and manages every consigned card from scan to payout.", initials: "PS", pc: "Collects 1952–1959 Topps" },
];

export const timeline = [
  ["2012", "A folding table at a Sunday card show, with three binders and a cash box."],
  ["2015", "Our first storefront on Linden Park Ave, 600 square feet and one display case."],
  ["2018", "Started grading submissions, sending 212 cards in the first year."],
  ["2021", "Launched live breaks and ran 96 of them in the first season."],
  ["2024", "Moved into Suite B, tripling the floor space and adding a break studio."],
  ["2026", "Passed 48,000 cards sent for grading and 2,000 collections bought."],
];

export const values = [
  ["We show you the comps", "Every offer comes with the sold listings behind it. If we can’t explain a number, we don’t use it."],
  ["Your cards never leave your sight", "Appraisals happen at the counter, not in a back room."],
  ["We’ll tell you when not to grade", "More than a third of the cards we prescreen come back with the advice to keep them raw."],
  ["Insured from drop-off to pickup", "Every consigned or submitted card is logged, photographed and covered at full value."],
];
