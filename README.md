# RAYLF — Royal African Young Leadership Forum

Marketing website for the Royal African Young Leadership Forum (RAYLF), a programme of the
Royal African Foundation of His Imperial Majesty, the 51st Ooni of Ife. Built from the
Claude Design handoff in [`docs/design_handoff_raylf_website/`](docs/design_handoff_raylf_website/).

- **Live site:** https://raylf.stanforteedge.workers.dev
- **CMS admin:** https://raylf.stanforteedge.workers.dev/admin → redirects to `/_emdash/admin/`

## Stack

| Layer     | Choice |
|-----------|--------|
| Framework | [Astro](https://astro.build) (server-rendered) + [EmDash CMS](https://emdashcms.com) |
| Hosting   | Cloudflare Workers + D1 (`raylf` database, Stanforte Edge account) |
| Styling   | Hand-authored design-system CSS (`src/src/styles/globals.css`) — no Tailwind |
| Fonts     | Poppins (display) + Manrope (body) via Google Fonts |
| Icons     | Font Awesome 6 (`@fortawesome/fontawesome-free`) |

## Structure

```
src/
├── astro.config.mjs        # Astro + emdash integration (D1, admin branding, /admin redirect)
├── wrangler.jsonc          # Worker: raylf @ Stanforte Edge, D1 binding DB, cron scheduler
├── seed/seed.json          # Full schema + content (77 entries) — applied on first request
├── src/
│   ├── live.config.ts      # EmDash live collections loader
│   ├── worker.ts           # Cloudflare worker entry (EmDash scheduled handler)
│   ├── styles/globals.css  # Design tokens, themes, components
│   ├── layouts/Base.astro  # Head, theme-init script, nav/footer shell
│   ├── components/         # SiteNav, SiteFooter, PageHero, Eyebrow, RoyalQuote, AwardeeCard
│   └── pages/              # index, about, programmes[/slug], awards[/year],
│                           # awardee/[slug], gallery
└── public/                 # Photography, logo, awardee announcement cards, favicon
docs/
├── design_handoff_raylf_website/   # Claude Design source (.dc.html prototypes + design system)
└── awardees/                       # Awardee announcement cards + preliminary list
```

## Content model (EmDash)

| Collection      | Used for |
|-----------------|----------|
| `programmes`    | RAYLF Awards, G2G Millionaires, Leadership Forum (cards, detail pages) |
| `editions`      | Award editions 2020–2026 (year tabs, edition pages, milestones, home rail) |
| `awardees`      | Awardee profiles (59 entries; 2022 has real photos/roles from announcement cards) |
| `gallery_photos`| Gallery tiles + lightbox |

Taxonomy: `category` on awardees. Menus: `primary` (nav), `footer` (important links).
Everything is editable from `/_emdash/admin` — no code changes needed for content.

## Local development

```bash
cd src
npm install
npm run dev          # http://localhost:4321 (wrangler emulates D1 locally)
```

First run applies `seed/seed.json` automatically. The admin is at `/_emdash/admin`
(a dev-bypass link in the terminal output skips passkey setup locally).

To re-apply seed data to the local SQLite-free D1 emulator, delete `.wrangler/state`
and restart.

## Deploy

```bash
cd src
npm run build
npx wrangler deploy   # deploys worker "raylf" to the Stanforte Edge account
```

Requires `wrangler login` with access to the Stanforte Edge account
(`account_id` is pinned in `wrangler.jsonc`).

### First deploy to a fresh D1

The runtime applies the seed's **schema** on the first request. Sample **content** is
applied when you choose "Sample content" in the setup wizard at `/admin`, or run
`npx emdash seed seed/seed.json` against a local database.

## Known notes

- **R2 media storage** is not bound yet (R2 isn't enabled on the account). All imagery is
  served from static files via `url` fields; enable R2 and add
  `storage: r2({ binding: "MEDIA" })` in `astro.config.mjs` to use the media library.
- **Mobile horizontal scroll** is guarded by `overflow-x: clip` on `html`/`body` plus
  `overflow: hidden` on hero/quote/CTA panels (decorative rings extend past the viewport).
- The sticky nav floats as a pill at the top and becomes a full-width header on scroll.
- Old prototypes: the Next.js conversion and the first EmDash deployment
  (`raylf-website`, `raylf-emdash` @ EDGD Media) are superseded by this worker and can be
  deleted when you're done comparing.
