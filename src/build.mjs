// Renders every page into docs/ (the folder GitHub Pages serves). No dependencies.
import { mkdir, rm, writeFile, copyFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { services, breakRotation } from "./content.mjs";
import {
  homePage, servicesPage, servicePage, breaksPage, pricingPage, sellPage,
  aboutPage, contactPage, faqPage, privacyPage, notFoundPage, upcomingBreaks,
} from "./render.mjs";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const out = join(root, "docs");

const breaks = upcomingBreaks(new Date(), breakRotation, 8);

const pages = {
  "index.html": homePage(breaks),
  "services.html": servicesPage(),
  "breaks.html": breaksPage(breaks, breakRotation),
  "pricing.html": pricingPage(),
  "sell.html": sellPage(),
  "about.html": aboutPage(),
  "contact.html": contactPage(),
  "faq.html": faqPage(),
  "privacy.html": privacyPage(),
  "404.html": notFoundPage(),
  ...Object.fromEntries(services.map((s) => [`services/${s.id}.html`, servicePage(s)])),
};

await rm(out, { recursive: true, force: true });
for (const [path, html] of Object.entries(pages)) {
  const file = join(out, path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

const assetsSrc = join(root, "src", "assets");
await mkdir(join(out, "assets"), { recursive: true });
for (const f of await readdir(assetsSrc)) await copyFile(join(assetsSrc, f), join(out, "assets", f));
await writeFile(join(out, ".nojekyll"), "");

console.log(`Built ${Object.keys(pages).length} pages into docs/`);
