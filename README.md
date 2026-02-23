# Vaibhav Mande

## About Me

Senior Full Stack Developer with 13+ years building scalable web applications across the full stack — from pixel-perfect UIs to cloud-deployed backends. I specialize in taking products from concept to production (0→1), with a track record of delivering fast without cutting corners on quality. I've led teams, mentored engineers, and worked hands-on across React, Node.js, TypeScript, C#, and cloud infrastructure on both AWS and Azure.

## Tech Stack

**Frontend** - React · Next.js · TypeScript · JavaScript · Redux · Vite · Web Accessibility (WCAG 2.1 AA)

**Backend** - Node.js · C# · REST APIs · PostgreSQL · MySQL · MongoDB · PHP

**Testing & Quality** - Playwright · Jest · React Testing Library · WebdriverIO

**DevOps & Cloud** - Azure DevOps Pipelines · Azure Functions · Azure Data Factory · AWS Lambda · AWS CodePipeline · S3 · GitHub Actions

## Links

- [vaibhavmande.com](https://vaibhavmande.com/)
- [LinkedIn](https://www.linkedin.com/in/vaibhavmande/)
- [GitHub](https://github.com/vaibhavmande)
- [Medium](https://medium.com/@vaibhavmande)

---

# This repository

This repository contains the source code for my personal website. It is a minimal, single-page landing page with a silver-on-black aesthetic.

## Stack

- **HTML** — semantic, minimal markup
- **SASS** — compiled via Dart Sass (`sass` npm package); no Gulp
- **npm scripts** — `build`, `watch:css`, `dev`, `build:prod`
- **GitHub Actions** — builds CSS in CI and deploys to GitHub Pages

## Local development

```sh
npm install
npm run dev
```

Runs a file watcher for SASS and a local preview server concurrently.

## Build & deploy

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Compiles `src/scss/main.scss` → `dist/css/main.css`
2. Copies production files (`index.html`, `main.css`, `CNAME`, `favicon.ico`) to `build/`
3. Deploys `build/` to GitHub Pages

```sh
npm run build:prod  # local production build
```
