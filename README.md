# MedRecruit — Doctor Recruitment Platform

An internal recruitment workspace for medical recruiters, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui** (New York style).

The full product specification (screens, fields, filters, and states) lives in [`.ops4/ai-build-specs/issue-3.md`](.ops4/ai-build-specs/issue-3.md). This repository currently contains a foundational scaffold — landing page, collapsible app shell (sidebar + top bar), and a dashboard with a live-filtered briefs table — that establishes the design system and toolchain.

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:3000
```

Then open [http://localhost:3000](http://localhost:3000). Click **Open Dashboard** to view the workspace shell.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server (http://localhost:3000). |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |
| `npx tsc --noEmit` | Type-check the project. |

## Design system

Zinc neutral base with an indigo/violet primary accent (`hsl(243 75% 59%)`). Tailwind v4 exposes tokens as CSS variables in `src/app/globals.css`; there is no `tailwind.config` file. UI primitives live under `src/components/ui/`.
