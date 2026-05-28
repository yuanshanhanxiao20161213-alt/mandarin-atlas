# AGENTS.md

## Project Overview

This repository contains **Mandarin Atlas**, an English-language premium comparison website for international learners choosing Mandarin Chinese apps, websites, courses, graded readers, dictionaries, and tutor marketplaces.

The product goal is not a generic link directory. It should feel like a refined education media product plus a practical resource search tool:

- Curated Mandarin learning resources
- Filtering by level, skill, platform, and price
- Side-by-side comparison
- App download QR codes and store links
- Source links, public-data notes, and `lastChecked` dates
- High-end AI-generated editorial imagery

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- lucide-react icons

Run locally:

```bash
npm.cmd install
npm.cmd run build
npm.cmd run start -- --hostname 127.0.0.1 --port 3000
```

Use `npm.cmd` on Windows to avoid PowerShell script execution policy issues with `npm.ps1`.

## Key Paths

- `app/`: Next.js routes and pages
- `components/`: shared UI components
- `lib/resources.ts`: structured resource data
- `public/images/ai/`: project image assets
- `docs/image-prompts.md`: AI image prompt notes
- `README.md`: project summary and run instructions

## Design Direction

Maintain a high-end international editorial feel. The visual reference is closer to Apple, Monocle, Bloomberg, and Stripe than to a course-ad landing page.

Design rules:

- Use English UI copy for the public site.
- Keep the site useful on the first screen; do not turn it into a pure marketing hero.
- Use strong grid systems, generous but controlled spacing, clear hierarchy, and restrained motion.
- Prefer ivory/off-white, ink black, muted jade, restrained cinnabar, deep blue, and brass accents.
- Avoid generic purple gradients, template SaaS visuals, cartoonish education graphics, or cheap stock-photo styling.
- Do not use large rounded “bubble” UI unless the whole design system changes intentionally.
- Use lucide icons where possible.
- Ensure mobile layouts do not overflow, overlap, or hide key actions.

## Image Rules

The site intentionally uses AI-generated premium editorial images. Keep assets in:

```text
public/images/ai/
```

When adding or replacing images:

- Do not use real brand logos.
- Do not create fake screenshots that imply official app UI.
- Do not include readable fake company names.
- Keep the palette consistent with the current visual system.
- Prefer human teaching scenes, refined study desks, app-learning contexts, data/research still lifes, and Chinese learning materials.
- Avoid reusing the same image for multiple resource cards unless there is a deliberate reason.
- After adding an image, update `lib/resources.ts` or the relevant component reference.

Current resource-card images should remain unique across the 12 seed resources.

## Data Rules

All resource data lives in `lib/resources.ts`.

Each resource should include:

- `name`
- `slug`
- `kind`
- `tagline`
- `bestFor`
- `levels`
- `skills`
- `platforms`
- `priceModel`
- `websiteUrl`
- optional `iosUrl`
- optional `androidUrl`
- `image`
- `coreStrengths`
- `limitations`
- `trafficEstimate`
- `trafficSource`
- `appRating`
- `downloads`
- `lastChecked`
- `sourceLinks`

Traffic, rating, ranking, and download data must be cautious and source-aware:

- Treat traffic as public or third-party estimates, not official truth.
- Do not invent exact numbers unless verified from a cited source.
- Prefer official websites, App Store pages, Google Play pages, and reputable third-party traffic tools.
- Update `lastChecked` whenever data claims are materially changed.

## Pages

Core routes:

- `/`: homepage with hero, resource explorer, editorial sections, skill cards, and download matrix
- `/websites`: website/course/tutor resource listing
- `/apps`: app-focused listing and download matrix
- `/compare`: side-by-side comparison board
- `/methodology`: data methodology and publishing rules
- `/resources/[slug]`: resource detail pages

When adding a route, also consider metadata and mobile behavior.

## Verification

Before handing off changes:

```bash
npm.cmd run build
```

If running the site locally for user preview, prefer production mode:

```bash
npm.cmd run start -- --hostname 127.0.0.1 --port 3000
```

Development mode may be less reliable in this Windows Chinese-path workspace because Next dev tooling can produce manifest/dev-overlay issues. Production build and start are the preferred preview path.

## Git / Workspace Notes

The workspace path contains Chinese characters:

```text
C:\Users\Administrator\Documents\聚合中文学习站
```

If Git reports dubious ownership, use command-local safe directory flags rather than changing unrelated global config:

```bash
git -c safe.directory=C:/Users/Administrator/Documents/聚合中文学习站 status --short
```

Do not delete generated images, screenshots, or project files unless explicitly asked.
