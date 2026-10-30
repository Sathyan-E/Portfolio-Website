# Sathyan Elangovan — Portfolio

A modern, animated personal portfolio for **Sathyan Elangovan**, Mobile App Architect (iOS & Android · AI-Driven Mobile Solutions).

## Tech stack

- **Next.js 16** (App Router, React 19) + **TypeScript**
- **Tailwind CSS v4** with a custom dark design system
- **Framer Motion** for scroll reveals, the animated nav pill, and floating UI
- **lucide-react** icons (+ inline brand SVGs for GitHub / LinkedIn)

## Highlights

- Single-page experience: Hero · About · Skills · Experience timeline · Impact · Contact
- Glassmorphism cards with hover gradient-ring borders
- Ambient animated gradient background + masked grid
- Sticky blur navbar with scroll-spy active section + animated pill
- Fully responsive, accessible (`prefers-reduced-motion` respected), SEO metadata

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Editing content

All resume content lives in one file — [`src/data/resume.ts`](src/data/resume.ts).
Update profile, skills, experience, and impact metrics there; every section reads
from it.

> Note: the `github` and `leetcode` URLs in `profile.links` are placeholders —
> drop in the real profile links when you have them.
