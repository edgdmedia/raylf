# RAYLF — Royal African Young Leadership Forum

Marketing website for the Royal African Young Leadership Forum (RAYLF), a programme of the
Royal African Foundation of His Imperial Majesty, the 51st Ooni of Ife. Built from the
Claude Design handoff in [`docs/design_handoff_raylf_website/`](docs/design_handoff_raylf_website/).

- **Live site:** https://raylf.stanforteedge.workers.dev

## Stack

| Layer     | Choice |
|-----------|--------|
| Framework | [Astro](https://astro.build) (fully static, 73 pages) |
| Hosting   | Cloudflare Workers static assets (Stanforte Edge account) — no Worker script, no database |
| Content   | TypeScript data files in `app/src/data/` — edit, build, deploy |
| Styling   | Hand-authored design-system CSS (`app/src/styles/globals.css`) — no Tailwind |
| Fonts     | Poppins (display) + Manrope (body) via Google Fonts |
| Icons     | Font Awesome 6 (`@fortawesome/fontawesome-free`) |

## Structure

```
app/
├── astro.config.mjs        # Static Astro + Cloudflare adapter
├── wrangler.jsonc          # Assets-only deploy config (raylf @ Stanforte Edge)
├── src/
│   ├── data/               # ← ALL SITE CONTENT LIVES HERE
│   │   ├── programmes.ts   # Programme cards + detail pages
│   │   ├── editions.ts     # Award editions 2020–2026
│   │   ├── awardees.ts     # Awardee profiles (59)
│   │   ├── gallery-photos.ts
│   │   ├── menus.ts        # Header + footer navigation
│   │   ├── site-settings.ts# Head metadata + Google Analytics ID
│   │   └── types.ts        # Shared content types
│   ├── styles/globals.css  # Design tokens, themes, components
│   ├── layouts/Base.astro  # Head, theme-init script, GA, nav/footer shell
│   ├── components/         # SiteNav, SiteFooter, PageHero, Eyebrow, RoyalQuote,
│   │                       # AwardeeCard, PortableText
│   └── pages/              # index, about, programmes[/slug], awards[/year],
│                           # awardee/[slug], gallery, 404
└── public/                 # Photography, logo, awardee announcement cards, favicon
docs/
├── design_handoff_raylf_website/   # Claude Design source (.dc.html prototypes + design system)
└── awardees/                       # Awardee announcement cards + preliminary list
```

## Editing content

Everything is a plain TypeScript array in `app/src/data/` — no CMS, no admin.

- **Add an awardee:** append an entry to `awardees.ts`. `id` is the URL slug
  (e.g. `"njideka-agbo"` → `/awardee/njideka-agbo/`).
- **Add an edition:** append to `editions.ts` — the year page, home rail, awards
  tabs and About milestones all pick it up automatically.
- **Rich text** (`overview`/`summary`) uses minimal Portable Text blocks:
  `[{ "_type": "block", "style": "normal", "children": [{ "_type": "span", "text": "…" }] }]`
  (the renderer also supports `h2`–`h4`, `blockquote`, `bullet`/`numbered` and
  `strong`/`em`/`code` marks).
- **Navigation:** `menus.ts`. **Metadata / analytics:** `site-settings.ts`.

After editing: `npm run build && npx wrangler deploy` (or just push, if CI is added).

## Google Analytics

1. Create the property at https://analytics.google.com (Admin → Create Property →
   GA4, Web stream) to get a Measurement ID like `G-1Z2ABC3DEF`.
2. Set `googleAnalyticsId: "G-1Z2ABC3DEF"` in `app/src/data/site-settings.ts`.
3. Rebuild and deploy. The gtag snippet in `Base.astro` renders only when the ID
   is non-empty.

## Local development

```bash
cd app
npm install
npm run dev            # http://localhost:4321
```

## Deploy

```bash
cd app
npm run build
npx wrangler deploy    # uploads static assets to the raylf worker
```

Requires `wrangler login` with access to the Stanforte Edge account
(`account_id` is pinned in `wrangler.jsonc`).

## Known notes

- Awardee/programme URLs use slugs; Cloudflare serves `/about` → `/about/` via a
  307 to the directory index — this is normal static-assets behaviour.
- **Mobile horizontal scroll** is guarded by `overflow-x: clip` on `html`/`body` plus
  `overflow: hidden` on hero/quote/CTA panels (decorative rings extend past the viewport).
- The sticky nav floats as a pill and stays inside the content width on scroll;
  the theme toggle lives in the footer bar.
- The site was converted from EmDash CMS (D1 + admin) to pure static Astro on
  2026-10-03; the D1 database, KV cache and admin were decommissioned with it.
