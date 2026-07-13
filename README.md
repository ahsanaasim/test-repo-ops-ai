# RecruitMed

Medical recruitment platform MVP built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Workspace dashboard layout with collapsible sidebar and top bar
- Role-aware navigation (Recruiter, Manager, Admin, Reporting User)
- Client briefs, doctor database, AI matching, outreach, follow-ups, reporting, and admin areas
- AHPRA verification workflow (API + manual)
- CV upload wizard with AI parsing review
- Locked design system: zinc/slate neutral base with indigo accent

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## State Variants

Append `?state=loading|error|empty|plan_limit|permission_denied` to any page URL to preview state variants.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint
