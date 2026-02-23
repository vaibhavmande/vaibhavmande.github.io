# Minimal Theme Refresh (Silver on Black)

Refresh the current static HTML+SASS portfolio into a single, centered, modern landing page with a silver-on-black aesthetic and button-style links.

## Stack recommendation (minimal, modern, low complexity)
- **Chosen direction**: keep SASS but drop Gulp.
  - Use **Dart Sass** (`sass`) with npm scripts for build and watch.
  - Use a minimal local preview server via an npm script (e.g. `npx serve`).
  - Keep GitHub Pages deploy trivial: commit generated `dist/css/*.css` and push.

## What exists today (current state)
- Static site with `index.html` referencing `dist/css/main.css`.
- Styling is authored in `src/scss/*.scss` and compiled via `gulp` into `dist/css/main.css`.
- Current homepage is card-based and content-heavy.
- Uses Google Fonts (Merriweather) - will be removed.

## Target design (new homepage)
- **Layout**
  - Single column, centered container.
  - Max width: ~680–760px.
  - Vertically centered (at least on larger screens) with comfortable top/bottom padding.
  - Responsive spacing for mobile.
  - Single column works naturally on both wide and narrow widths.

- **Content blocks**
  - Headline: `Hi, my name is Vaibhav` (top, most prominent).
  - One paragraph describing skills (2-3 sentences, ~40-60 words).
  - Link buttons row/wrap beneath paragraph.

- **Visual style (silver on black)**
  - Background: near-black (`#151515` - existing).
  - Text: primary "silver" (off-white / light gray), secondary muted gray.
  - Buttons: dark surface with silver border + subtle hover glow; accessible focus ring.
  - Typography: system sans-serif stack (no external fonts) with sensible sizes:
    - H1: ~40–52px desktop, ~32–38px mobile
    - Body: ~16–18px
  - **System font stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

- **Buttons / links**
  - At minimum: GitHub + LinkedIn.
  - Add: Medium (link placeholder; to be updated later).
  - All links are always enabled (no disabled state needed).
  - Buttons should support wrapping (flex + gap) and be clearly tappable on mobile.
  - Keep existing SVG icons for visual hierarchy.

## Typography system
- **Remove**: `@import url('https://fonts.googleapis.com/...')` from `main.scss:1`
- **Add**: System font stack as defined above
- **Approach**: Use `clamp()` for fluid typography:
  ```scss
  h1 { font-size: clamp(32px, 8vw, 52px); }
  p { font-size: clamp(16px, 4vw, 18px); }
  ```

## Color palette (silver on black theme)
Define in `colors.scss`:
```scss
// Base colors
$black: #0a0a0a;
$near-black: #151515;
$silver: #c0c0c0;
$silver-bright: #e8e8e8;
$silver-muted: #808080;
$accent-glow: rgba(192, 192, 192, 0.2);

// Semantic tokens
$bg-primary: $near-black;
$text-primary: $silver-bright;
$text-secondary: $silver-muted;
$border-default: $silver;
```

## Button styles specification
```scss
.button-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 2px solid $silver;
  color: $silver;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
    border-color: $silver-bright;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  // Modern focus-visible for keyboard navigation
  &:focus-visible {
    outline: 2px solid $silver-bright;
    outline-offset: 2px;
  }
  
  &:focus:not(:focus-visible) {
    outline: none;
  }
}
```

## Implementation approach (low-risk)
- **Primary path**: Update SASS source and compile with Dart Sass.
  - Keep `src/scss/` as the source of truth.
  - Compile into `dist/css/main.css` (keep current link in `index.html` unchanged).
  - npm scripts already exist in `package.json`:
    - `build`: `sass src/scss/main.scss dist/css/main.css --style=compressed` ✓
    - `watch:css`: `sass --watch src/scss/main.scss:dist/css/main.css --style=expanded` ✓
    - `serve`: `npx serve .` ✓
    - `dev`: `npm run watch:css & npm run serve` ✓
  - Defer optional cleanup:
    - Remove `gulpfile.js` and Gulp dependencies after the new page is stable (optional).

- **HTML changes**
  - Replace `index.html` body markup with minimal semantic structure:
    - `main` → `.container`
    - `h1`, `p`, `.links` containing anchor buttons
  - Keep meta tags / OG tags; update `description` to match new copy.
  - Update title if needed.

## Files expected to change
- `index.html` - complete body restructure
- `src/scss/main.scss` - remove Google Fonts, add system stack, new styles
- `src/scss/colors.scss` - add silver-on-black palette
- `dist/css/main.css` - generated build output
- `package.json` - already updated ✓

## Deployment pipeline (build CSS in CI, deploy to GitHub Pages)
- **Goal**: avoid committing generated CSS; instead compile `src/scss/main.scss` to `dist/css/main.css` in GitHub Actions and deploy the built artifact.
- **Assumptions**:
  - Repo is configured to deploy via **GitHub Pages → Source: GitHub Actions** (to be verified).
  - `CNAME` stays in the repository root and will be included in the deployed artifact.
- **Workflow file**: `.github/workflows/deploy.yml`
  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches: [main]

  permissions:
    contents: read
    pages: write
    id-token: write

  jobs:
    build-deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        
        - uses: actions/setup-node@v4
          with:
            node-version: '20'
            cache: 'npm'
        
        - run: npm ci
        - run: npm run build
        
        - uses: actions/upload-pages-artifact@v3
          with:
            path: '.'
        
        - uses: actions/deploy-pages@v4
  ```
- **Notes**:
  - Add `dist/css/main.css` to `.gitignore` to avoid committing generated files.
  - This site is static (no bundling), so the deploy artifact can simply be the repo root after the build step.
  - Verify default branch name is `main` (not `master`).

## Acceptance criteria
- Page loads with a clean centered layout (no cards).
- Headline reads: `Hi, my name is Vaibhav` (or agreed exact wording).
- A single skills paragraph is present (2-3 sentences).
- GitHub + LinkedIn + Medium appear as button links with hover/focus states.
- SVG icons are present and styled in silver.
- Silver-on-black theme is consistent and readable on mobile + desktop.
- System fonts load (no external font requests).

## Rollout / verification
- Run `npm run dev` to preview and auto-compile SASS.
- Quick checks:
  - Mobile width (~375px): buttons wrap nicely, text remains readable.
  - Desktop width: content is vertically centered.
  - Keyboard navigation: visible focus ring on buttons (Tab through links).
  - Lighthouse basics: adequate contrast.
  - No console errors.
  - Favicon loads correctly.

## Implementation sequence
1. **Update colors.scss** - Add silver-on-black palette
2. **Update main.scss** - Remove Google Fonts, add system stack, new button styles
3. **Update index.html** - Replace body with minimal structure, update meta tags
4. **Test locally** - Run `npm run dev` and verify
5. **Create GitHub Actions workflow** - Add `.github/workflows/deploy.yml`
6. **Update .gitignore** - Add `dist/css/main.css`
7. **Deploy** - Push to trigger workflow
8. **Verify production** - Check live site

## Questions resolved
- ✓ Keep SVG icons (GitHub, LinkedIn)
- ✓ All links always enabled (no disabled state)
- ✓ Single column layout works on all widths
- ✓ System fonts only (no external fonts)
- ✓ Focus-visible for modern keyboard navigation
