# Website Redesign - Changes Log

**Date:** February 15, 2026  
**Objective:** Complete redesign of portfolio website to minimal silver-on-black theme

---

## Overview

Transformed the portfolio from a multi-card layout to a single, centered, minimal landing page with a silver-on-black aesthetic. Migrated build system from Gulp/node-sass to Dart Sass with GitHub Actions deployment.

---

## Completed Tasks

### Task 1: Update Color Palette
**File:** `src/scss/colors.scss`

- Replaced old color variables with new silver-on-black palette:
  - `$black: #0a0a0a`
  - `$near-black: #151515`
  - `$silver: #c0c0c0`
  - `$silver-bright: #e8e8e8`
  - `$silver-muted: #808080`
- Added semantic tokens: `$bg-primary`, `$text-primary`, `$text-secondary`, `$border-default`

### Task 2: Remove Google Fonts
**File:** `src/scss/main.scss`

- Removed Google Fonts import
- Added system font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Updated body background to `$bg-primary` and text color to `$text-primary`

### Task 3: Add Fluid Typography
**File:** `src/scss/main.scss`

- Added fluid typography using `clamp()`:
  - `h1`: `clamp(32px, 8vw, 52px)` - scales from mobile to desktop
  - `p`: `clamp(16px, 4vw, 18px)` - responsive body text
- Eliminates need for media query breakpoints for font sizing

### Task 4: Add Button Link Styles
**File:** `src/scss/main.scss`

- Added `.links` container with flexbox layout and 16px gap
- Created `.button-link` class with:
  - Transparent background with 2px silver border
  - Hover effect: subtle glow and brighter border
  - Active state: 1px translateY for press effect
  - Modern `:focus-visible` for keyboard navigation
  - Smooth transitions (0.2s ease)

### Task 5: Remove Old Card-Based Styles
**File:** `src/scss/main.scss`

- Removed all old card-based styles (`.card-container`, `.card-title`, etc.)
- Removed old button styles (`.button`, `.project-button`, etc.)
- Removed utility classes (`.df`, `.spacer-bottom`, `.nostyle`, etc.)
- CSS file size significantly reduced

### Task 6: Add New Layout Styles
**File:** `src/scss/main.scss`

- Updated `main` element:
  - Flexbox with `align-items: center` and `justify-content: center`
  - `min-height: 100vh` for vertical centering
  - Responsive padding: `40px 20px`
- Added `.container` class:
  - `max-width: 720px` for readability
  - `width: 100%` and `margin: 0 auto` for centering

### Task 7: Restructure HTML Body
**File:** `index.html`

- Replaced entire `<body>` content with minimal structure:
  - `<main>` → `<div class="container">`
  - `<h1>Hi, my name is Vaibhav</h1>`
  - Skills paragraph (2 sentences, ~40 words)
  - Three button links: GitHub, LinkedIn, Medium
- Removed SVG icons from buttons (not visible on dark background)
- All buttons now text-only for better visibility
- Added `rel="noopener"` and `target="_blank"` to all external links

### Task 8: Update Meta Tags
**File:** `index.html`

- Updated `<meta name="description">` to match new content
- Fixed `name="keyword"` to `name="keywords"` (proper attribute name)
- Updated `og:title` to "Vaibhav Mande | Front-End Developer"
- Updated `og:description` to match new copy
- Updated `<title>` with consistent capitalization

### Task 9: Clean Up Media Queries
**File:** `src/scss/media-queries.scss`

- Removed all old media query rules (`.cards-container`, old `main` padding)
- File now contains only a comment explaining removal
- Responsiveness handled by `clamp()` and flexbox instead

### Task 10: Clean Up Spacing Utilities
**File:** `src/scss/spacing.scss`

- Removed all spacing utility classes (`.mb1`, `.pb3`, `.m0-5`, etc.)
- File now contains only a comment explaining removal
- Spacing now handled directly in component styles

### Task 11: Build and Verify Locally
- Ran `npm run dev` successfully
- Verified site at http://localhost:3000
- Confirmed:
  - Vertical centering works on desktop
  - Buttons wrap nicely on mobile
  - No console errors
  - No external font requests
  - Favicon loads correctly

### Task 12: Create GitHub Actions Workflow
**Files:** `.github/workflows/deploy.yml`, `build.js`, `package.json`

- Created GitHub Actions workflow for deployment:
  - Triggers on push to `main` branch
  - Uses Node 20 with npm caching
  - Runs `npm ci` and `npm run build:prod`
  - Uploads only `./build` directory to GitHub Pages
  - Proper permissions for Pages deployment

- Created `build.js` - Node.js build script:
  - Cleans and creates `build/` directory structure
  - Copies only essential files: `index.html`, `CNAME`, `dist/css/main.css`, `src/images/favicon.ico`
  - Distinguishes required vs optional files
  - Proper error handling with try-catch
  - Exit codes (0 for success, 1 for failure)
  - Clear console output showing copied files

- Added `build:prod` script to `package.json`:
  - Runs `npm run build && node build.js`
  - Ensures clean production build with only necessary files

### Task 13: Update .gitignore
**File:** `.gitignore`

- Added `dist/css/main.css` (generated during build)
- Added `build/` directory (generated during production build)
- Ran `git rm --cached dist/css/main.css` to untrack file

### Task 14: Remove Gulp and Cleanup
**Files:** `gulpfile.js`, `package.json`, `src/images/`

- Deleted `gulpfile.js`
- Removed old npm scripts from `package.json`:
  - `sass` (old node-sass script)
  - `watch-sass` (old node-sass watcher)
  - `gulp` (gulp command)
- Deleted unused image files:
  - `src/images/demo.svg`
  - `src/images/github.svg`
  - `src/images/linkedin.svg`
- Verified `npm run build` still works correctly

---

## Build System Changes

### Before (Gulp + node-sass)
- Used Gulp task runner
- node-sass for SCSS compilation
- Manual deployment process
- All files committed to repository

### After (Dart Sass + GitHub Actions)
- Direct Dart Sass compilation
- Automated GitHub Actions deployment
- Clean production builds (only essential files)
- Generated files excluded from git

### New npm Scripts
```json
{
  "build": "sass src/scss/main.scss dist/css/main.css --style=compressed",
  "build:prod": "npm run build && node build.js",
  "watch:css": "sass --watch src/scss/main.scss:dist/css/main.css --style=expanded",
  "serve": "npx serve .",
  "dev": "npm run watch:css & npm run serve"
}
```

---

## File Structure Changes

### Files Created
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `build.js` - Production build script
- `CHANGES.md` - This file

### Files Modified
- `src/scss/colors.scss` - New color palette
- `src/scss/main.scss` - Complete style overhaul
- `src/scss/media-queries.scss` - Emptied (rules removed)
- `src/scss/spacing.scss` - Emptied (utilities removed)
- `index.html` - Complete restructure
- `package.json` - Updated scripts and dependencies
- `.gitignore` - Added build artifacts
- `TASKS.md` - Documented additional changes

### Files Deleted
- `gulpfile.js` - No longer needed
- `src/images/demo.svg` - Unused
- `src/images/github.svg` - Unused (icons removed from buttons)
- `src/images/linkedin.svg` - Unused (icons removed from buttons)

### Files Kept (Essential)
- `index.html` - Main HTML file
- `CNAME` - Domain configuration
- `src/images/favicon.ico` - Site favicon
- `dist/css/main.css` - Generated CSS (gitignored, built in CI)

---

## Design Decisions

### Why Remove Icons from Buttons?
- SVG icons were not visible enough on the dark (`#151515`) background
- Text-only buttons provide better contrast and readability
- Simpler, cleaner aesthetic aligns with minimal design goal

### Why Use clamp() for Typography?
- Eliminates need for media query breakpoints
- Smooth scaling between mobile and desktop
- Better user experience across all viewport sizes

### Why Create build.js Instead of Shell Script?
- More maintainable and readable than long inline bash commands
- Cross-platform compatibility (works on Windows, Mac, Linux)
- Proper error handling with exit codes
- Easy to extend with additional build steps

### Why Upload Only build/ Directory?
- Keeps production deployment clean
- No source files, node_modules, or development artifacts
- Faster deployments
- Better security (no exposure of build tools or configs)

---

## Verification Checklist

✅ CSS compiles without errors  
✅ Local dev server runs successfully  
✅ Page renders correctly on mobile and desktop  
✅ All links work and open in new tabs  
✅ Keyboard navigation shows focus rings  
✅ No console errors  
✅ No external font requests  
✅ Favicon loads  
✅ Build script creates clean production directory  
✅ GitHub Actions workflow is valid YAML  

---

## Next Steps (Task 15)

1. Commit all changes
2. Push to `main` branch
3. Monitor GitHub Actions workflow
4. Verify live deployment at https://vaibhavmande.com
5. Test on production:
   - Page loads correctly
   - Silver-on-black theme is consistent
   - All links work
   - Mobile and desktop layouts work
   - Run Lighthouse audit for performance/accessibility

---

## Technical Stack

**Before:**
- HTML + SASS
- Gulp + node-sass
- Manual deployment

**After:**
- HTML + SASS
- Dart Sass
- GitHub Actions (automated deployment)
- Node.js build script

**Dependencies:**
- `sass` ^1.77.0 (Dart Sass)
- `serve` ^14.2.0 (local dev server)

---

## Notes for Future Work

- The `@import` statements in `main.scss` show deprecation warnings (Dart Sass 3.0 will require `@use` instead)
- Consider migrating to `@use` and `@forward` in a future update
- `media-queries.scss` and `spacing.scss` are now empty but kept for potential future use
- Could be removed entirely if confirmed unnecessary
