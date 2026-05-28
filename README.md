# Mandarin Atlas

Mandarin Atlas is a premium English-language comparison site for international learners choosing Mandarin Chinese apps, websites, courses, graded readers and tutor marketplaces.

## What is included

- Next.js App Router project with TypeScript and Tailwind CSS
- AI-generated editorial imagery in `public/images/ai/`
- Interactive resource filtering by level, skill, platform and price
- Side-by-side comparison board for 2-4 resources
- Resource detail pages with source links, QR access and last-checked dates
- App download matrix with mobile-first store actions
- Methodology page explaining how public data and third-party estimates should be treated

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Data policy

The seed data is intentionally cautious. Traffic, ratings and download figures are written as public or third-party signals rather than exact claims. Before publishing commercially, update each resource with live store data and current third-party traffic estimates, then update `lastChecked`.

