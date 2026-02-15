# Tasks — Minimal Theme Refresh (Silver on Black)

Reference: [PLAN.md](./PLAN.md) for full design spec and rationale.

---

## Task 1: Update color palette in `colors.scss`

**File:** `src/scss/colors.scss`

- Replace all existing color variables with the new silver-on-black palette defined in PLAN.md.
- Add base colors: `$black`, `$near-black`, `$silver`, `$silver-bright`, `$silver-muted`, `$accent-glow`.
- Add semantic tokens: `$bg-primary`, `$text-primary`, `$text-secondary`, `$border-default`.
- Remove old variables: `$background-color`, `$light-text-color`, `$card-background-color`, `$card-shadow-color`, `$accent-color-gold`, `$button-color-primary`, `$button-color-secondary`.

**Verify:** File compiles without errors (`npm run build`). Expect visual breakage — that's fine at this stage.

---

## Task 2: Update `main.scss` — Remove Google Fonts and add system font stack

**File:** `src/scss/main.scss`

- Remove the Google Fonts `@import` line (line 1).
- Replace `font-family: 'Merriweather', serif` on `body` with the system font stack:
  `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Update `body` background-color to use new `$bg-primary` variable.
- Update `body` color to use `$text-primary`.

**Verify:** `npm run build` succeeds. Page loads with system fonts, no external font requests in Network tab.

---

## Task 3: Update `main.scss` — Add fluid typography

**File:** `src/scss/main.scss`

- Update `h1` font-size to use `clamp(32px, 8vw, 52px)`.
- Add `p` font-size rule using `clamp(16px, 4vw, 18px)`.
- Set appropriate `font-weight` and `line-height` for both.

**Verify:** `npm run build` succeeds. Text scales fluidly between mobile and desktop widths.

---

## Task 4: Update `main.scss` — Add `.button-link` styles

**File:** `src/scss/main.scss`

- Add the `.button-link` class as specified in PLAN.md (inline-flex, silver border, hover glow, focus-visible ring, active press).
- Add a `.links` container style using `display: flex`, `flex-wrap: wrap`, `gap: 16px` for button layout.

**Verify:** `npm run build` succeeds. Styles are present in compiled CSS.

---

## Task 5: Update `main.scss` — Remove old card-based styles

**File:** `src/scss/main.scss`

- Remove all old styles that are no longer needed: `.card-container`, `.card-title`, `.cards-container`, `.card-project`, `.ribbon`, `.card-contents`, `.card-technologies`, `.card-blog`, `.card-contact-me`, `.card-title-contact`, `.card-title-project`.
- Remove old button styles: `.button`, `.project-button`, `.about-button`, `.secondary-button`.
- Remove old utility classes that are no longer used: `.float`, `.df`, `.contact`, `.flag`, `.experience`, `.light-text`, `.sub-title`, `.about-contents`, `.buttons-container`, `.vertical-buttons`, `.spacer-bottom`, `.description`, `.tags`, `.tag`, `.project-name`, `.pb18`, `a.nostyle`.
- Keep only: base reset (`body`, `a`, `main`), new typography, new `.button-link`, new `.links`, and any new layout styles.

**Verify:** `npm run build` succeeds. CSS output is significantly smaller.

---

## Task 6: Update `main.scss` — Add new layout styles

**File:** `src/scss/main.scss`

- Add `.container` style: `max-width: 720px`, `margin: 0 auto`, `padding` for comfortable spacing.
- Add vertical centering for larger screens using `min-height: 100vh` + flexbox on `main` or `body`.
- Add responsive padding adjustments (comfortable on mobile ~375px).

**Verify:** `npm run build` succeeds. Layout styles present in compiled CSS.

---

## Task 7: Restructure `index.html` — Replace body markup

**File:** `index.html`

- Replace entire `<body>` content with new minimal semantic structure:
  - `<main>` → `<div class="container">`
  - `<h1>Hi, my name is Vaibhav</h1>`
  - `<p>` with skills paragraph (2-3 sentences, ~40-60 words).
  - `<div class="links">` containing anchor buttons with class `button-link` for GitHub, LinkedIn, Medium.
- Keep existing SVG icon references (`src/images/github.svg`, `src/images/linkedin.svg`) inside button links.
- Add `rel="noopener"` and `target="_blank"` on all external links.

**Verify:** Page renders with new structure. All links work. Icons display.

---

## Task 8: Update `index.html` — Update `<head>` meta tags

**File:** `index.html`

- Update `<meta name="description">` to match new page copy.
- Update `<meta property="og:title">` and `<meta property="og:description">` to match.
- Update `<title>` if needed.
- Remove outdated `<meta name="keyword">` content and refresh it.
- Keep favicon link, OG URL, and stylesheet link unchanged.

**Verify:** View page source, confirm meta tags are accurate.

---

## Task 9: Remove `media-queries.scss` old rules and add new responsive rules

**File:** `src/scss/media-queries.scss`

- Remove old media query rules that reference removed classes.
- Add any new responsive adjustments if needed (e.g., container padding changes at breakpoints).
- If no media queries are needed (because `clamp()` and flexbox handle responsiveness), this file can be emptied or removed and its `@import` dropped from `main.scss`.

**Verify:** `npm run build` succeeds. Mobile and desktop layouts look correct.

---

## Task 10: Remove `spacing.scss` old rules

**File:** `src/scss/spacing.scss`

- Review contents — remove old spacing utility classes that are no longer used (e.g., `.mb1`, `.mb5`, `.pb3`, `.m0-5`, `.m5-0`).
- If file becomes empty, remove it and drop its `@import` from `main.scss`.

**Verify:** `npm run build` succeeds.

---

## Task 11: Build and verify locally

**No file changes — verification only.**

- Run `npm run dev`.
- Check:
  - Mobile width (~375px): buttons wrap, text readable.
  - Desktop width: content vertically centered.
  - Keyboard navigation: visible focus ring on buttons (Tab through links).
  - No console errors.
  - No external font requests.
  - Favicon loads.
- Document any issues found back into this file as sub-tasks.

---

## Task 12: Create GitHub Actions deploy workflow

**File:** `.github/workflows/deploy.yml`

- Create the workflow file as specified in PLAN.md.
- Triggers on push to `main`.
- Steps: checkout → setup Node 20 → `npm ci` → `npm run build` → upload pages artifact → deploy pages.

**Verify:** File is valid YAML. Workflow structure matches PLAN.md spec.

---

## Task 13: Update `.gitignore`

**File:** `.gitignore`

- Add `dist/css/main.css` to `.gitignore` so generated CSS is not committed.

**Verify:** `git status` no longer tracks `dist/css/main.css` after running `git rm --cached dist/css/main.css`.

---

## Task 14: cleanup — Remove Gulp

**Files:** `gulpfile.js`, `package.json`

- Delete `gulpfile.js`.
- Remove any Gulp-related devDependencies from `package.json` (if any remain).
- This is low priority and should only be done after the new page is stable.

**Verify:** `npm run build` still works. No references to Gulp remain.

---

## Task 15: Deploy and verify production

**No file changes — verification only.**

- Push to `main` to trigger GitHub Actions workflow.
- Verify live site at `https://vaibhavmande.com`:
  - Page loads correctly.
  - Silver-on-black theme is consistent.
  - All links work.
  - Lighthouse basics pass (contrast, performance).

---

## Future / Deferred

- Add a Medium SVG icon (currently no `medium.svg` in `src/images/`).
- Update skills paragraph copy if needed after initial launch.
- Consider adding subtle entrance animations.
- Consider dark/light mode toggle (currently silver-on-black only).
