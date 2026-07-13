<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

### What this project is
A single Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui web app: an internal medical-recruitment workspace (MedRecruit). The full product spec lives in `.ops4/ai-build-specs/issue-3.md`; only a foundational scaffold (landing page, app shell, dashboard) is implemented so far.

### Commands (single service)
- Dev server: `npm run dev` (Next.js on http://localhost:3000; Turbopack).
- Lint: `npm run lint`. Build: `npm run build`. Typecheck: `npx tsc --noEmit`.
- Dependencies are installed automatically by the startup update script (`npm install`); no manual install needed at session start.

### Non-obvious notes
- shadcn/ui is configured manually via `components.json` (New York style, zinc base, lucide icons). The interactive `shadcn init` CLI hangs on prompts in this environment — add components with `npx shadcn@latest add <name> -y`, or hand-author them under `src/components/ui/`. Do not rely on `shadcn init`.
- Tailwind v4 has no `tailwind.config.*`; design tokens (zinc base + indigo primary `hsl(243 75% 59%)`) live as CSS variables in `src/app/globals.css`. Add new theme colors there and mirror them in the `@theme inline` block.
- `next/font/google` (Geist) fetches fonts at build time, so `npm run build` needs network access.
- Path alias `@/*` maps to `src/*`.
