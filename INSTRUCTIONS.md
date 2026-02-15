# Agent Instructions — Portfolio Redesign

These instructions govern how any agent (AI or human) should work on the tasks defined in [TASKS.md](./TASKS.md). The design spec lives in [PLAN.md](./PLAN.md).

---

## 1. Task Workflow

- **Pick tasks in order.** Tasks in TASKS.md are sequenced so each builds on the previous one. Do not skip ahead.
- **One task at a time.** Complete and verify a task before moving to the next.
- **Keep changes small.** Each task is scoped for a short, reviewable diff. Do not combine multiple tasks into one commit.
- **Commit after each task.** Use a clear commit message referencing the task number, e.g. `Task 3: Add fluid typography to main.scss`.

---

## 2. Code Comments

- **Comment every change.** Add a brief inline comment explaining *what* changed and *why* this approach was chosen.
  ```scss
  // Replaced Google Fonts with system font stack — eliminates external font
  // request and improves load performance (see PLAN.md § Typography system)
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  ```
- **Explain design decisions.** If a choice isn't obvious (e.g., why `clamp()` over media queries, why a specific `max-width`), add a comment.
  ```scss
  // Using clamp() for fluid sizing — avoids breakpoint jumps and reduces
  // media query complexity (modern browser support is sufficient)
  font-size: clamp(32px, 8vw, 52px);
  ```
- **Reference the plan.** When a comment relates to a specific section of PLAN.md, cite it: `// see PLAN.md § Button styles specification`.
- **Mark removed code.** When deleting old styles or markup, add a brief comment in the commit message or nearby code noting what was removed and why.

---

## 3. Code Quality Standards

- **Use latest conventions.** Write modern, idiomatic SCSS and HTML:
  - Use `clamp()`, `gap`, `flex`, `focus-visible` — no legacy hacks.
  - Use semantic HTML elements (`<main>`, `<section>`, `<nav>` where appropriate).
  - Use CSS logical properties where they improve clarity.
- **Keep code readable.** Favor clarity over cleverness:
  - Descriptive variable names (the palette in `colors.scss` already follows this).
  - One declaration per line in SCSS.
  - Group related rules with blank lines between groups.
- **Follow existing file structure.** Don't reorganize the project unless a task explicitly calls for it.
- **No magic numbers.** Use variables from `colors.scss` for colors. Use named values or comments for spacing/sizing choices.
- **Accessibility matters.** Ensure:
  - Sufficient color contrast (silver text on near-black background).
  - Visible focus indicators (`:focus-visible`).
  - Proper `alt` attributes on images.
  - Semantic heading hierarchy.

---

## 4. Documenting Unfinished Work

- **Update TASKS.md** if you discover something that needs to be done but is outside the current task's scope. Add it as a sub-item under the relevant task, or to the `## Future / Deferred` section at the bottom.
- **Never silently skip something.** If a task can't be fully completed (e.g., missing asset, unclear requirement), document what's missing in TASKS.md and move on.

---

## 5. Handover Protocol

If your context window is getting full or you are about to stop working:

1. **Create a `HANDOVER.md` file** in the project root.
2. Include the following sections:
   - **Last completed task:** Task number and brief summary.
   - **Current task in progress:** What you were working on, what's done, what remains.
   - **Blockers or open questions:** Anything that needs human input or clarification.
   - **Files modified:** List of files changed since the last handover (or since the start).
   - **How to verify:** Steps to confirm the current state is correct (e.g., `npm run build`, visual checks).
   - **Next steps:** Which task to pick up next and any notes for the next agent.
3. **Keep it concise.** The next agent should be able to read HANDOVER.md in under 2 minutes and know exactly where to resume.

---

## 6. Verification

- **Build after every change:** Run `npm run build` to confirm SCSS compiles without errors.
- **Visual check:** Run `npm run dev` and inspect the page at desktop and mobile widths.
- **No regressions:** Ensure no console errors, no broken links, no missing assets.
- **Follow the verify step** listed at the bottom of each task in TASKS.md.

---

## 7. Reference Files

| File | Purpose |
|---|---|
| `PLAN.md` | Full design spec, color palette, typography, layout, acceptance criteria |
| `TASKS.md` | Ordered task list with per-task scope and verification steps |
| `INSTRUCTIONS.md` | This file — agent working guidelines |
| `HANDOVER.md` | Created by agent when handing off work (does not exist until needed) |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server with SCSS watch
npm run dev

# Build CSS only
npm run build
```

Then open the task list and begin with the first incomplete task.
