# Handoff: RAYLF Website (futuristic redesign)

## Overview
A 7-page marketing website for the **Royal African Young Leadership Forum (RAYLF)**, a programme of the Royal African Foundation of His Imperial Majesty, the 51st Ooni of Ife. The visual direction is an immersive, "futuristic" dark-violet site with oversized headlines, full-bleed photography, faint grid overlays and gold accents. It ships in **dark and light themes**, and the user can toggle between them.

Pages: Home, About, Programmes, Programme (single), Awards (single edition with year switcher), Awardee (single profile), Gallery.

RAYLF does **not** take public nominations, so the site has no nomination CTA or form.

## About the Design Files
The files in this bundle are **design references created in HTML**: prototypes that show the intended look and behaviour. They are not production code to copy directly. Recreate these designs in the target codebase's existing environment (e.g. Next.js/React, Astro, WordPress block theme) using its established patterns. If no environment exists yet, choose an appropriate framework; a static-first React framework such as Next.js or Astro is recommended.

Each `*.dc.html` file opens directly in a browser; serve the folder over a local static server so relative paths resolve. The template markup uses inline styles, `{{ }}` holes and `<sc-for>`/`<sc-if>` for loops and conditionals. The logic class at the bottom of each file holds the data arrays and state. `<x-import component-from-global-scope="RAYLFDesignSystem_f4d804.X">` mounts a component from the RAYLF design-system bundle in `_ds/`.

## Fidelity
**High-fidelity.** Colours, type, spacing, radii, imagery and interactions are final. Recreate them pixel-accurately. Copy marked **[PLACEHOLDER]** below is not final.

---

## Global Layout & Chrome

### Container
- Max width **1320px**, centred. Horizontal padding `var(--container-pad)` (24px).
- Section vertical padding: 120–140px on content sections, 64–72px at hero bottoms.

### Sticky Nav (`RAYLF Nav.dc.html`, shared)
- The wrapper is `position: sticky; top: 0; z-index: 50`, with 16px padding around a floating pill.
- The page root must use `overflow-x: clip`, **not** `overflow: hidden`, or the sticky nav breaks.
- Pill: full width up to 1320px, padding `10px 12px 10px 24px`, radius 999px, background `rgba(36,1,69,.88)`, border `1px solid rgba(255,243,168,.16)`, shadow `0 12px 40px rgba(10,0,25,.45)`. The nav stays dark in **both** themes.
- Left: white logo PNG, 40px tall, linking to Home.
- Centre: links Home / About / Programmes / Awards / Gallery. Poppins 500 14px, padding 10×16, pill radius.
  - Default: colour `rgba(255,255,255,.82)`.
  - Active: colour `#FFF3A8` on background `rgba(255,243,168,.1)`.
  - Hover: background `rgba(255,255,255,.08)`, colour `#FFF3A8`.
- Right:
  - Theme toggle: 40px circle, 1px `rgba(255,243,168,.35)` border, icon `#FFF3A8`. It shows `fa-sun` in dark mode and `fa-moon` in light mode. On hover it fills `#FFF3A8` with icon `#240145`.
  - Gold "Awardees" button (DS Button, variant `gold`, size `sm`, `fa-arrow-right`) linking to `Awards#awardees`.
- Heroes use `margin-top: -84px` so they slide under the nav.

### Page Hero pattern (inner pages)
Hero heights: About and Programmes 72–78vh; Programme 80vh; Awards 86vh. Awardee and Gallery heroes are padding-based rather than a fixed height. All heroes are content bottom-aligned on a `#240145` ground. Layers, bottom to top:
1. Full-bleed photo, `center/cover`.
2. Scrim `linear-gradient(180deg, rgba(36,1,69,.6) 0%, rgba(36,1,69,.45) 40%, rgba(36,1,69,.95) 85%, #240145 100%)`. The Programme page instead uses a left→right scrim `rgba(36,1,69,.94) → rgba(68,3,167,.6) → rgba(80,2,185,.15)`.
3. Optional magenta glow `radial-gradient(50% 50% at 80% 30%, rgba(180,73,220,.4), transparent 70%)`.
4. Grid overlay: 1px lines `rgba(255,243,168,.07)` every 88px, masked `linear-gradient(180deg, transparent, #000 40%, transparent)`.
5. Content (padding-top 200px), each item listed below.

Hero content:
- **Breadcrumb**: 13px, 600 weight, 0.14em tracking, uppercase, colour `rgba(255,255,255,.7)`. The current item is `#FFF3A8`. Separator is `fa-chevron-right` at 10px.
- **H1**: Poppins 700, `clamp(52px, 9vw, 132px)`, line-height .92, letter-spacing −0.04em, white. The last word(s) use the gold-foil gradient text treatment: `background: var(--gradient-gold); background-clip: text; color: transparent`.
- **Intro**: 19px, line-height 1.6, `rgba(255,255,255,.82)`, max-width 600–640px.

Heroes stay dark in both themes.

### Footer
DS `SiteFooter` (violet-950 ground, white logo, mission, Important Links, email).

---

## Screens

### 1. Home (`RAYLF Website.dc.html`)

**1. Hero**
- 100vh, photo `award-stage-01.jpg`.
- Scrim `180deg rgba(36,1,69,.55) 0% → .35 35% → .92 78% → #240145 100%`, plus a magenta radial at 78% 30%.
- Grid overlay; can be toggled off with the "showGrid" tweak.
- Pulsing ring: 360px circle at right 8% / top 18%, border `rgba(255,243,168,.3)`, inset and outer magenta glow. It runs a 6s ease-in-out infinite animation between opacity .55 and .9 and scale 1 and 1.06.
- **Pill label**: "Royal African Young Leadership Forum", with an 8px gold dot glowing `#F2B84B`. The pill has a 1px `rgba(255,243,168,.35)` border, 13px 600 uppercase text with 0.14em tracking, colour `#FFF3A8`.
- **H1**: "A place for Africa’s **young leaders.**" (the last two words in gold foil), `clamp(52px, 10vw, 148px)`.
- **Bottom row**: a top border `1px rgba(255,255,255,.16)`, then a 2-column auto-fit grid.
  - Left: the paragraph "RAYLF recognises and convenes the most outstanding 20 to 39-year olds across the globe, shaping, transforming and anchoring the future of the continent."
  - Right: buttons "RAYLF Awards" (gold, lg, links to Awards) and "About RAYLF" (outline-light, lg, links to About).

**2. Marquee** (can be toggled with the "showMarquee" tweak)
- Violet-900 band, 22px vertical padding, with 1px gold-alpha borders top and bottom.
- Content: Poppins 600 28px, alternating gold `#F2B84B` and white words, separated by 12px `fa-star` icons at `rgba(255,243,168,.5)`.
- Loops seamlessly: 40s linear, translateX 0 → −50%, with the content duplicated.
- Words: Shaping · Transforming · Anchoring · Young Leaders · 20 to 39 · RAYLF Awards · G2G Millionaires.

**3. About**
- 2-column grid, 72px gap.
- Left column:
  - Portrait `his-majesty-throne.jpg` at 4:5, 24px radius, with an offset gold 2px outline frame (inset 24px −24px −24px 24px).
  - Floating violet-700 card: "Royal Patron / His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II".
- Right column:
  - Eyebrow "About RAYLF".
  - H2 "The spirit, soul and memory of Africa."
  - Two paragraphs.
  - A 3-up stats strip: 1px gap on a line colour, cells on the page background, numbers Poppins 700 34px in the gold token. Values: 20–39 / 4 / 51st.

**4. Programmes**
- Background `var(--t-sec)`.
- Header: eyebrow "What We Do", H2 "Find your place.", plus a side paragraph.
- 3 tall photo cards (min-height 520px, 24px radius, 1px gold-alpha border):
  - Top: number and a rotated arrow in a circle.
  - Bottom: title (Poppins 700 32px) and body.
  - Hover: translateY(−6px) and border `rgba(242,184,75,.7)`, 350ms `cubic-bezier(.2,.7,.2,1)`.

**5. Quote** (always dark)
- Photo `royal-audience.jpg` under an `rgba(36,1,69,.88)` overlay.
- Two concentric decorative rings, 720px and 1040px.
- Gold `fa-quote-left` icon, then the italic Poppins 500 quote at `clamp(28px, 3.6vw, 48px)`.
- A 70×3 gold rule, then the attribution "His Imperial Majesty (H.I.M) Ooni of Ife".

**6. Awards**
- Eyebrow, H2 "Every edition, a new generation.", and an "Awardees" outline button.
- 4 edition tiles (3:4, scrim `var(--overlay-scrim)`):
  - Top-left pill tag: Latest / Edition III / II / I.
  - Year in Poppins 700 64px.

**7. Gallery teaser**
- 4-column grid, 220px rows: one 2×2 photo, two single photos, and a 2-wide tile.
- The 2-wide tile uses `var(--gradient-royal)` with "@royalafricanlyf" and DS `SocialLinks`.

**8. Global Mission** (**always dark, including in the light theme**)
- `#240145` ground, world-map image at .5 opacity.
- Scrim `90deg #240145 → rgba(36,1,69,.75) 55% → rgba(36,1,69,.35)`.
- H2 "From Ile-Ife to the world." plus a paragraph.

**9. Closing CTA**
- Panel: 32px radius, `var(--gradient-violet-sky)`, with a gold radial glow rising from the bottom.
- H2 "There’s a place for you.", then a paragraph.
- Buttons "Our Programmes" (gold) and "About RAYLF" (outline-light).

### 2. About (`About.dc.html`)
1. **Hero**: `royal-audience.jpg`. H1 "Our **History**".
2. **Who We Are**:
   - Left column (sticky, top 120px): heading.
   - Right column: lead paragraph (20px, fg colour), two body paragraphs, and a 16:10 photo.
3. **Our Mission**: background `--t-sec`, 3 pillar cells on a 1px-gap grid.
   - Pillars: Shaping / Transforming / Anchoring. **[PLACEHOLDER descriptions]**
   - Each cell: number in gold, H3 32px, body text.
4. **Royal Patron** (always dark):
   - Left: throne portrait with the gold offset frame.
   - Right: H2 with the full title, a paragraph, and DS `RoyalQuote` (tone dark, size lg).
5. **Milestones**: 4 columns (2020, 2021, 2022, 2024).
   - Each column: a gold glowing dot, a line, the year in Poppins 700 72px, and a label.
   - Each column links to Awards.
6. **CTA**: violet-sky panel "Explore our programmes." with a gold "Programmes" button.

### 3. Programmes (`Programmes.dc.html`)
1. **Hero**: H1 "Find your **place.**"
2. **List**: 3 rows, each divided by a 1px top border.
   - 2-column layout: 16:10 image, then text.
   - Text: "01 / Recognition" label in gold, H2 `clamp(36px, 4.5vw, 60px)`, body, and a "Read More" link with an arrow in a circle.
   - Rows link to Awards or Programme.
3. **Quote band** (always dark).

### 4. Programme single (`Programme.dc.html`, G2G Millionaires)
1. **Hero**: breadcrumb Home › Programmes › G2G Millionaires. H1 "G2G **Millionaires**".
2. **Overview**: grid `1.6fr / minmax(280px, 1fr)`.
   - Left: eyebrow, H2, and two paragraphs.
   - Right: sticky details card (card background token, 1px line, 24px radius, theme shadow).
     - Key/value rows. Keys are 12px uppercase gold; values are Poppins 600 18px.
     - Rows: For / Focus / Patronage.
     - Gold "Enquire" button, linking to a mailto. **[PLACEHOLDER email]**
3. **What the programme offers**: 3 cards, each with a 52px gold-gradient icon circle (`fa-chalkboard-user`, `fa-people-group`, `fa-crown`). **[PLACEHOLDER copy]**
4. **Moments**: 3-column photo mosaic with 280px rows.
5. **Other programmes**: 2 photo cards with a pale-gold arrow disc; they lift on hover.

### 5. Awards (`Awards.dc.html`)
1. **Hero**: the background image, H1 year, edition tag and intro all change with the selected year.
   - Year tabs (2024 / 2022 / 2021 / 2020): pill buttons.
     - Active: background `#FFF3A8`, text `#240145`.
     - Inactive: transparent, 1px `rgba(255,255,255,.35)` border.
2. **Awardees** (`#awardees`):
   - Header "Class of {year}".
   - Category filter chips: All / Entrepreneurship / Public Service / Creative Arts / Technology / Philanthropy. **[PLACEHOLDER categories]**
   - Grid `repeat(auto-fill, minmax(250px, 1fr))` of DS `AwardeeCard`. Each card links to Awardee and lifts 4px on hover.
3. **Ceremony** (always dark):
   - Left: text, `RoyalQuote` and a "Gallery" button.
   - Right: 2×2 photo mosaic.

### 6. Awardee (`Awardee.dc.html`)
1. **Profile hero** (always dark):
   - Left: portrait 4:5 with the gold offset frame, plus a 96px gold "award" badge showing an award icon and the year.
   - Right:
     - Breadcrumb RAYLF Awards › 2024 › Awardee.
     - Category eyebrow.
     - H1 name, `clamp(48px, 7vw, 104px)`.
     - Location and role meta (gold icons).
     - Bio.
     - `SocialLinks`.
   - **[PLACEHOLDER name/bio/role]**
2. **Award Citation**: max-width 1000px. Poppins 500 `clamp(26px, 3vw, 40px)`, then a gold rule. **[PLACEHOLDER]**
3. **Moments**: 3 photos at 4:3.
4. **More from the class**: background `--t-sec`, 4 `AwardeeCard`s.

### 7. Gallery (`Gallery.dc.html`)
1. **Hero** (no photo): glow and grid. H1 "Celebrate the **journey.**" Subline "Celebrate your people. …"
2. **Album chips**: All / Awards 2024 / Awards 2022 / Awards 2021 / Royal Audience. **[PLACEHOLDER album mapping]**
3. **Grid**: `auto-fill minmax(280px, 1fr)`, 260px rows, `grid-auto-flow: dense`.
   - Some tiles span 2 rows.
   - Each tile carries an album tag pill at bottom-left.
   - Hover: lift 4px plus the theme shadow.
4. **Lightbox**:
   - Fixed overlay `rgba(36,1,69,.92)`; the image has max 100% size and a 24px radius.
   - Close button (`fa-xmark`, top-right 48px circle).
   - Previous/next buttons: 52px pale-gold discs; navigation wraps around.
   - Clicking the backdrop closes it.
5. **Follow band**: `--gradient-royal` panel with "@royalafricanlyf" and DS `SocialLinks variant="pill"`.

---

## Interactions & Behaviour
- **Theme toggle** (nav): switches `data-theme` on the page root between `dark` and `light`. It persists in `localStorage['raylf-theme']` and is read on every page load, so the theme carries across pages. Background and colour transition over .4s `cubic-bezier(.2,.7,.2,1)`.
- **Awards**: selecting a year sets the year and resets the category to All. Chips filter the awardees client-side.
- **Gallery**: album chips filter the grid. Clicking a tile opens the lightbox at that index; previous/next wrap modulo the filtered length. Add Esc to close and ←/→ key support in production.
- **Hover**: cards lift 4–6px (350ms `cubic-bezier(.2,.7,.2,1)`). DS buttons handle their own hover: primary → gold, outline fills, gold brightens. Links go pale gold → gold.
- **Motion**: marquee 40s linear loop; hero ring pulse 6s. No bounce. Respect `prefers-reduced-motion` in production by disabling the marquee and pulse.
- **Responsive**: all grids use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`, so they collapse to one column on mobile. The nav needs a mobile menu (hamburger) in production; the prototype only wraps.

## State
- `theme: 'dark' | 'light'` (global, persisted).
- Awards: `year` (default '2024') and `cat` (default 'All').
- Gallery: `album` (default 'All') and `open` (lightbox index, −1 when closed).
- Content should come from a CMS: programmes, editions, awardees (name, category, country, year, photo, bio, citation, socials) and gallery photos (src, album).

## Design Tokens
Tokens come from the RAYLF design system (`_ds/.../tokens/*.css`). Key values are listed below.

**Brand colours**
- Violet: 950 `#240145`, 900 `#2E0258`, 800 `#3F028E`, 700 `#4403A7`, 600 `#5002B9`, 500 `#6F26CF`, 100 `#EFE6FB`
- Magenta `#B449DC`, plum `#6A0DA4`
- Gold: 700 `#A8761A`, 600 `#D29B29`, 500 `#DFA533`, 400 `#F2B84B`
- Pale gold `#FFF3A8`
- Ink: 900 `#16121D`, 700 `#3B3645`
- Paper `#FAF8F5`

**Gradients**
- Gold foil: `linear-gradient(100deg, #C48A1F 0%, #F2B84B 48%, #D29B29 100%)`
- Royal: `radial-gradient(110% 70% at 50% 70%, #B449DC 0%, #6F26CF 28%, #5002B9 55%, #3F028E 100%)`
- Violet sky: `linear-gradient(180deg, #4403A7, #5002B9 40%, #6F26CF 75%, #B449DC)`
- Midnight: `radial-gradient(90% 60% at 80% 35%, #6A0DA4, #47017E 40%, #240145)`
- Overlay scrim: `linear-gradient(180deg, rgba(36,1,69,0), rgba(36,1,69,.88))`

**Theme tokens** (set on `[data-theme]`)

| token | dark | light |
|---|---|---|
| --t-bg | #240145 | #FAF8F5 |
| --t-fg | #FFFFFF | #16121D |
| --t-muted | rgba(255,255,255,.78) | #3B3645 |
| --t-line | rgba(255,243,168,.18) | rgba(53,30,93,.14) |
| --t-gold | #F2B84B | #A8761A |
| --t-sec | midnight gradient | #EFE6FB |
| --t-card | #2E0258 | #FFFFFF |
| --t-chip | rgba(255,255,255,.06) | #FFFFFF |
| --t-shadow | 0 30px 80px rgba(10,0,25,.6) | 0 30px 80px rgba(30,15,56,.22) |

**Always-dark regions** (in both themes): nav, all heroes, marquee, quote bands, Royal Patron, Ceremony, Awardee hero, Global Mission, CTA panels, footer.

**Typography**
- Display: **Poppins** 600–700.
  - H1: `clamp(52px, 9–10vw, 132–148px)` / .92 / −0.04em.
  - H2: `clamp(38px, 5vw, 68px)` / 1 / −0.03em.
  - H3: 26–32px / −0.02em.
- Body: **Manrope** 400–500, 15–20px, line-height 1.6–1.7.
- Eyebrow: 13px / 700 / 0.18em / uppercase.
- Quote: Poppins italic 500.
- Use `text-wrap: balance` on headings and `pretty` on paragraphs.

**Radii**
- 999px: pills, buttons, chips, nav.
- 24px (`--radius-lg`): photos and cards.
- 16px (`--radius-md`): small cards.
- 32px: CTA panels.

**Rules**: 70×3px gold-foil rule with rounded ends.

## Assets (`assets/`)
- `logo/raylf-logo-white.png`: the logotype is custom lettering, so use the PNG only.
- `photos/`: `award-stage-01`, `award-presentation-01…04`, `award-certificate-01…03`, `award-greeting`, `his-majesty-throne`, `royal-audience`, `speaker-portrait` (all .jpg).
- `brand/africa-world-map.jpg`.
- Icons: Font Awesome 6.5.2 Free (CDN via `tokens/icons.css`): `fa-solid` for UI, `fa-brands` for socials.
- Fonts: Poppins and Manrope from Google Fonts (a substitution; no font files were supplied).

## Placeholders / Open Items
- Awardee names, bios, roles, citations and categories.
- Copy for the G2G Millionaires detail and the Leadership Forum description.
- About pillar descriptions and gallery album assignments.
- Real contact email.
- Mobile nav design.

## Files
- `RAYLF Website.dc.html`: Home
- `RAYLF Nav.dc.html`: shared sticky nav with theme toggle
- `About.dc.html`, `Programmes.dc.html`, `Programme.dc.html`, `Awards.dc.html`, `Awardee.dc.html`, `Gallery.dc.html`
- `support.js`: runtime for opening the prototypes in a browser (not for production)
- `_ds/raylf-design-system-…/`: RAYLF tokens (`tokens/*.css`) and component bundle (`_ds_bundle.js`). The DS components used are Button, Eyebrow, RoyalQuote, AwardeeCard, SocialLinks and SiteFooter.
- `assets/`: logo, photography and brand imagery
