# RAYLF Design System
**Royal African Young Leadership Forum** — a programme of the Royal African Foundation of His Imperial Majesty Oba Adeyeye Enitan Ogunwusi, Ojaja II, the 51st Ooni of Ife. RAYLF recognises and convenes young African leaders aged 20–39, chiefly through the **RAYLF Awards** (editions 2020, 2021, 2022, 2024…) and programmes such as **G2G Millionaires**. Its tone blends royal patronage with youth empowerment.

## Sources
- Website: https://raylf.org/ (Home, /about/, /awards) — WordPress + Elementor 4.0.3, Elementor Google Fonts + Font Awesome SVG icons. Copy fetched Sept 30 2026. No codebase or Figma supplied.
- Instagram: @royalafricanlyf (4 post screenshots in `assets/social/`)
- Uploaded logos, brand texture, world-map key art, history timeline graphic and awards-night photography (all in `assets/`).

## Products / surfaces
1. **Social campaign posts** (Instagram/Facebook/X) — the primary brand identity → `ui_kits/social/`, `SocialPost` component
2. **raylf.org marketing site** → `ui_kits/website/`

## Content fundamentals
- **Voice:** formal, ceremonial, aspirational. Long, clause-heavy sentences with grand nouns: "redefine centuries of the rich resilient spirit of African Kingdoms", "economic prosperity, blessings of natural resources, valuable inheritance of its creative culture".
- **Royal attribution is central.** Key statements are quoted and credited to "His Imperial Majesty (H.I.M) Ooni of Ife", with an en-dash: "…memory of Africa – His Imperial Majesty (H.I.M) Ooni of Ife".
- **Person:** institution speaks as "RAYLF" (third person) on the website; social posts switch to "we" and address the audience as "you" ("Today, we celebrate every father…", "You deserve it.").
- **Social is warmer and local.** Nigerian Pidgin appears in greetings: "Work no easy, but you dey try. Today, take a breather. You deserve it." Short sentence pairs: "Celebrate the journey. Celebrate your people."
- **Casing:** Title Case headings ("Our History", "Our Partners", "Global Mission"); acronym RAYLF always all-caps; honorifics capitalised (His Imperial Majesty, H.I.M, Ooni). Buttons are Title Case, 1–2 words: "About RAYLF", "Read More", "Awardees".
- **Recurring phrases:** "young leaders", "success stories", "20 to 39-year olds across the globe", "the spirit, soul and memory of Africa", "shaping, transforming, anchoring".
- **Spelling:** British ("recognising").
- **Emoji:** none in designed assets. Punctuation: curly apostrophes (Fathers’ Day), exclamation only for greetings ("Happy Eid Mubarak!").
- Preserve source copy verbatim — including its idiosyncrasies — when quoting the organisation.

## Visual foundations
- **Colour (social-led):** the Instagram campaigns (@royalafricanlyf) are the primary brand identity. Grounds are saturated **campaign violet** — #4403A7 → #5002B9 → #6F26CF sky gradients with a **magenta glow #B449DC**, or **midnight plum #240145 / #47017E** for night/festive posts. Headlines are white; closing lines are **pale gold #FFF3A8**; festive titles are **gold #EEA836**. The logo's own deep purple #351E5D and gold foil #D29B29→#F2B84B remain for the full-colour logo on white and the website. `--brand-primary` = violet-600.
- **Type:** greeting headlines are Manrope-style geometric sans with mixed weight in one line ("Happy **Fathers’ Day**", regular + bold, tight −0.025em). Statement words (e.g. "Ghana") in heavy Poppins; festive posts may swap in a seasonal script. Site/system: the site uses Elementor Google Fonts; social posts use a geometric grotesque (Manrope-like) for greetings and Poppins for statement type (e.g. "Ghana"). System: **Poppins** display/headings (600–700, −0.02em), **Manrope** body (400–500, 1.65 line-height). Eyebrows: 13px, 700, 0.18em tracking, uppercase, gold. Quotes: italic Poppins 500. Greeting lockups mix weights in one line ("Happy **Fathers’ Day**").
- **Backgrounds:** social posts are composited scenes — violet sky with soft clouds, flying birds, glowing moon/circle behind the subject, cityscapes tinted violet, lanterns and fairy lights for festive posts. Every post: white logo (top or bottom centre) and a white handle pill (`royalafricanlyf · raylf.org`) at the bottom. Also: purple marble texture with faint adinkra line patterns, sepia world map with glowing gold Africa, full-bleed event photos under violet scrims. Website sections alternate white / warm paper / violet.
- **Imagery:** warm, saturated stage lighting (magenta, purple, amber spots), regal traditional attire (agbada, fila, beads), award statuettes and certificates. People are the subject; rich colour, no B&W, no grain.
- **Gradients:** gold foil (logotype, rules, gold buttons) and royal radial violet. No bluish-purple UI gradients.
- **Corners:** soft and rounded throughout — pill buttons, pill nav highlight, pill social-handle bar and round social icons; 24px awardee tiles and feature photos, 16px cards, 8px small elements. Gold rules have rounded ends. Circular/arched photo crops in social posts.
- **Borders & rules:** short 70×3px gold rule under section headings; 4px rounded gold bar left of quotes; offset gold outline frame behind portrait photos.
- **Shadows:** soft purple-tinted (rgba(30,15,56,…)); gold glow reserved for award/Africa highlights.
- **Cards:** white or violet, 16px radius, shadow-md, no border; photo top; lifts 4px + shadow-lg on hover.
- **Hover:** primary purple buttons turn gold; outline buttons fill; links purple → gold; cards lift. Press: no shrink, colour change only.
- **Motion:** gentle 150–500ms fades/lifts on cubic-bezier(.2,.7,.2,1); gold bar sweep on awardee hover. No bounce.
- **Transparency/blur:** scrims over photos (left→right purple on heroes, top→bottom on tiles); lightbox on 92% deep purple. No glassmorphism.
- **Layout:** 1200px container, 24px gutters, 96px section padding; centred section headings; sticky white header with logo left, nav right.

## Iconography
- The site uses Elementor's **Font Awesome** SVG icons (social: Facebook, X-Twitter, Instagram; list chevrons). This system links **Font Awesome 6.5.2 Free** from cdnjs via `tokens/icons.css` — use `fa-brands` for socials, `fa-solid` for UI (arrow-right, chevron-right, globe, xmark).
- Social posts sign off with outlined circular icons (YouTube, Facebook, Instagram, globe) in a white pill — see `SocialLinks variant="pill"`.
- No emoji, no unicode icon glyphs, no custom illustration set. The Africa silhouette in the logo is the only brand pictogram — never redraw it; use the logo PNGs.

## Fonts — substitution flag
No font files were supplied. Poppins + Manrope are loaded from Google Fonts as the closest match to the website/social type. The logotype "RAYLF" is custom lettering — use the PNG only.

## Index
- `styles.css` — entry (imports only) → `tokens/` fonts, colors, typography, spacing, effects, icons, base
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/logo/` colour + white logos · `assets/brand/` textures, map, timeline · `assets/photos/` awards photography · `assets/social/` reference posts
- `components/` — see list below
- `ui_kits/website/` — raylf.org Home / About / Awards · `ui_kits/social/` — Instagram post layouts
- `SKILL.md` — agent skill entry · `thumbnail.html`

## Components
No component library exists in the source; this is an authored set sized to the site.
- core: **Button**, **Eyebrow**, **SectionHeading**
- content: **Hero**, **FeatureCard**, **AwardeeCard**, **RoyalQuote**, **PartnerStrip**
- navigation: **SiteHeader**, **SiteFooter**, **SocialLinks**
- social: **SocialPost** (greeting / photo / festive variants)

## Known gaps
Partner logos (4 unnamed on the site), real contact email (obfuscated), awardee names, exact Elementor font/colour settings.
