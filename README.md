# Senior SDET Portfolio — Next.js 15

Production-grade portfolio for a Senior SDET / QE Architect built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.local.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

All content lives in `/data/` — no touching component code needed:

| File | Controls |
|------|---------|
| `data/site.ts` | Name, title, stats, nav links, social URLs |
| `data/experience.ts` | Work history, achievements, tech stacks |
| `data/skills.ts` | Skill categories, proficiency levels, tool lists |
| `data/projects.ts` | Open source projects, GitHub links, stars |
| `data/articles.ts` | Medium articles, tags, view counts |

## Design System

- **Colors**: Zinc-950 base, Indigo-600 accent, Cyan secondary
- **Font**: Geist Sans (display) + Geist Mono (code)
- **Animations**: Framer Motion — scroll-triggered, spring physics
- **Dark mode**: Forced dark, CSS variables throughout

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Geist (via `geist` package)

## Deployment

```bash
# Vercel (recommended)
npx vercel

# Or build for any Node host
npm run build && npm run start
```

Add your `resume.pdf` to the `/public/` directory before deploying.

## SEO

- Full `Metadata` API configuration in `app/layout.tsx`
- JSON-LD Person schema for Google rich results
- Open Graph + Twitter card images
- Static generation — all pages prerendered at build time

## Performance

- **163 kB** first load JS (well within Lighthouse budget)
- Static prerendering — zero server-side computation on request
- `next/image` optimized images
- `optimizePackageImports` for Framer Motion and Lucide
