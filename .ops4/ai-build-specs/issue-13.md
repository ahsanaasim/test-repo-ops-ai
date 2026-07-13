# AI Build Task

## Objective
Revert any recent changes that caused the UI to appear as a wireframe and restore the full premium SaaS visual style across all screens. Ensure all components, cards, tables, navigation, and modals use the correct shadcn/ui and Tailwind CSS classes, colors, typography, and spacing as defined in the locked design system. Do not alter the layout, navigation, or add/remove any pages.

## Context
## decision:approved
- id=7aa4cc65-17ba-49a6-a969-db3254e6ad1f title="Design patch: Workspace Dashboard" confidence=n/a description="Our UI is entirely ruined now. Our last patch made it look like a wireframe."
- id=1dc82e03-6673-4e41-963b-11942e2138e8 title="Design patch: Workspace Dashboard" confidence=n/a description="Error with Permissions-Policy header: Unrecognized feature: 'browsing-topics'.
281v73kt1cdtu.js:1 Uncaught Error: Minified React error #418; visit https://react.dev/errors/418?args[]=HTML&args[]= for "
- id=cea15d0c-f6fb-421c-b67f-dca4ac8ff2d3 title="Design patch: Workspace Dashboard" confidence=n/a description="based on my updated design system, update our UI"
- id=96a40057-faa1-42a0-8b6e-ed3c0c3a2901 title="Design patch: Workspace Dashboard" confidence=n/a description="only root url is loading
https://test-repo-ops-ai.vercel.app/

other urls are not loading. says 
404
This page could not be found.

forexample, https://test-repo-ops-ai.vercel.app/reporting"
## business_rule:approved
- id=e6a6fc5a-348a-4875-87bf-7b13710b3080 title="Doctors and clients do not have direct access for MVP" confidence=1.00 description="Client confirmed that only internal users (recruiters, managers, admins, reporting users) will access the platform in MVP."
- id=59664c38-90a2-48a9-88b6-7c647bd9105a title="Role-based access control" confidence=1.00 description="Explicitly required for MVP and security."
- id=14bd4291-1c57-4cc5-baec-eb40be9228a6 title="English-only for MVP" confidence=1.00 description="Explicitly stated as the only supported language for v1."
- id=3e0fe36d-f757-4244-b8bf-46f9451ba411 title="No offline access for MVP" confidence=1.00 description="Explicitly stated as not required."
- id=f9b33b7c-d8b6-4be6-bf1b-aef2f732a994 title="Accessibility: WCAG 2.1 AA principles where practical" confidence=1.00 description="Explicitly stated as a design goal."
- id=c8cefde2-e0e0-49ef-b7fe-6f729a4b0698 title="Authentication: Secure email/password with RBAC for MVP" confidence=1.00 description="Client confirmed secure login and RBAC are required, SSO is deferred."
- id=6e279e79-646e-40ba-a93c-76d0d954f032 title="Analytics provider to be decided during technical planning" confidence=1.00 description="Analytics implementation does not affect UI design."
- id=abfbd06f-1a78-466b-a03a-65db311f3d2c title="Primary platform: Desktop web, responsive for tablet/mobile" confidence=1.00 description="Explicitly stated as the main design priority, with responsive support for other devices."
- id=2fcd678d-b6d7-42f3-be89-917d712b2ebd title="Regulatory, privacy, and security requirements (Australian Privacy Principles, encryption, audit logs, consent, etc.)" confidence=1.00 description="Explicitly listed as MVP requirements."
- id=d0d19638-d6e9-47a2-b473-cb22db84a729 title="Reporting User data masking" confidence=1.00 description="Client specified which fields must be hidden from Reporting Users."
- id=1164ce40-61e7-40d5-8dbd-3740e626c076 title="Billing, invoicing, payroll, and revenue features out of scope for MVP" confidence=1.00 description="Client explicitly excluded all commercial/financial workflows from MVP."
- id=24594e12-5745-4e4d-87e2-b2257005c636 title="Data retention and deletion policies to comply with Australian privacy requirements" confidence=1.00 description="Client confirmed compliance details will be finalized during technical planning."
- id=7d0884a2-3eec-45f6-8d04-4951f63b58ac title="API keys and integration secrets managed securely (e.g., AWS Secrets Manager)" confidence=1.00 description="Standard implementation assumption, does not affect UI."
- id=4b969a6b-6447-4337-bf03-532e1be211ed title="Encryption, audit logging, and security controls per AWS/industry best practices" confidence=1.00 description="Client confirmed these are implementation details; UI only needs to expose relevant audit information."
## user_role:approved
- id=091bbfca-4dde-47d8-a7dc-0c04ef2ca123 title="Read-only or Reporting User" confidence=1.00 description="Can view reports and possibly candidate data, but cannot edit."
- id=82f1b9ea-661b-45a2-bf5a-83ba1225f4de title="Recruitment Manager" confidence=1.00 description="Client provided detailed tasks, screens, and permissions for this role."
- id=408530a6-9fe0-4d6d-9c4d-7516e922e1b5 title="Administrator" confidence=1.00 description="Client provided detailed tasks, screens, and permissions for this role."
- id=5f8813ff-6c8a-4537-9746-424bbab65933 title="Recruiter" confidence=1.00 description="Recruiters are the primary users, as indicated by 'recruiter dashboard' and workflow focus."
- id=7104516d-c5a6-4f68-a0d0-5fd277194883 title="Doctor" confidence=0.70 description="Doctors are the candidates being managed, may have limited or no direct access."
- id=9b8909cf-a9e0-4406-a001-b443a494c54c title="Client" confidence=0.70 description="Client brief management implies a client role, possibly with access to briefs or status."
## feature:approved
- id=891094fe-ba06-4c35-a7ec-a635b8fb330e title="Role-permission matrix (to be confirmed)" confidence=0.90 description="Client expects a confirmed role-permission matrix as output of requirements reconciliation."
- id=7f2550cf-6c63-472c-ae2c-bde2482771db title="Workflow diagrams (to be confirmed)" confidence=0.90 description="Client expects workflow diagrams as output of requirements reconciliation."
- id=4beab8b2-db04-4a57-bb21-5ea7c82ae220 title="AI-powered candidate matching (recommendations, not auto-add)" confidence=1.00 description="Client confirmed AI matching results are shown as recommendations for recruiter review, not auto-added to pipeline."
- id=fb10c77d-bf6b-412d-b1ee-4dc287fb1358 title="CV upload and AI parsing (review/edit before save)" confidence=1.00 description="Client confirmed recruiters must review and edit AI-parsed CV data before saving. The review screen must show both parsed fields and original CV, with visual indicators for AI-extracted data and confi"
- id=1faf8408-0219-4999-9265-729d577d31ad title="CSV import for legacy candidate data (conditional)" confidence=0.80 description="Client noted basic CSV import may be considered if legacy data migration is required."
- id=5fb537de-2db2-426f-8a49-d4d08c239fe1 title="Audit log for user/data activities" confidence=1.00 description="Explicitly required for privacy, security, and admin review."
- id=2d79617c-f69e-4bbf-9131-c7b4d9b7dec0 title="Candidate ownership: individual vs. shared" confidence=0.70 description="Client flagged uncertainty about whether candidate ownership is individual or shared."
- id=d85f92dc-6e20-4ca3-a268-853e5f2093e9 title="Export summary reports (CSV/PDF)" confidence=0.90 description="Reporting User may export summary reports if permitted."
- id=bd10cea0-851f-46ce-b1d6-51a349e4e80e title="Bulk candidate import (conditional)" confidence=0.80 description="Bulk import is out of scope unless confirmed in PRD."
- id=c2fe9987-89c8-4f06-aecd-8228f43da9a2 title="Communication activity logging" confidence=1.00 description="Platform should record communication activity in candidate timeline, even if sent via third-party."
- id=c8bbbe35-bb6f-4a4f-aff0-cd6518e7640b title="AHPRA verification workflow (hybrid: API + manual)" confidence=1.00 description="Client confirmed the MVP requires a hybrid workflow: attempt API verification, fallback to manual, with document upload and manager review for exceptions."
- id=8dcb0b78-2c0b-4cd2-8e15-cee6636cba8a title="Follow-up task assignment and notifications" confidence=1.00 description="Client clarified that follow-up tasks can be assigned to self or others, with in-app notifications, dashboard alerts, and overdue reminders. Email reminders are optional. Recurring tasks are deferred."
- id=e8d10b24-f96b-4ab1-9c82-0fa2d230804e title="Outreach composer: templates, free-form, personalization, send now/draft" confidence=1.00 description="Client confirmed all these options are required for the outreach composer UI."
- id=762f1608-6336-40ab-8d76-659c1423cbf6 title="Reporting dashboard: metrics, filters, exports, permissions" confidence=1.00 description="Client provided a clear list of required metrics, filters, and export permissions for the reporting dashboard."
- id=83ca6153-965e-4b80-b34a-f4227a4b64fd title="Secure login with role-based access" confidence=1.00 description="Explicitly listed as an MVP feature, impacts authentication screens and user roles."
## data_object:approved
- id=2c8948d0-b936-4d16-9563-e9338b86f4c0 title="AHPRA verification status" confidence=1.00 description="Explicit status field required for candidate verification workflow, with multiple possible values."
- id=b497076f-d33a-4af5-952c-c8b068ee6141 title="AHPRA registration number" confidence=1.00 description="Explicitly required for verification workflow; must be entered or extracted and used for API/manual checks."
- id=450feb7a-928c-43e4-a640-c48cb6f8d508 title="Verification supporting documents" confidence=1.00 description="Recruiters may upload supporting docs for manual verification."
- id=05087ee5-f4c9-4648-b7c4-e72ab475cd4f title="Verification notes" confidence=1.00 description="Internal notes can be added during verification."
- id=48332c6f-ff92-4378-8e48-3bd770c23924 title="Verification date" confidence=1.00 description="Date of verification must be recorded."
- id=670e265b-030c-40af-94fd-758783387477 title="Verification source" confidence=1.00 description="Source of verification (API/manual) must be recorded."
- id=cb2ccb55-43ed-42c6-a471-3cf1dbb720f0 title="Verification status" confidence=1.00 description="Status field with multiple possible values, as listed."
- id=d709080d-72df-40f8-b4f2-58e37b32ecc0 title="AI-extracted field indicator" confidence=1.00 description="Fields extracted by AI should be visually marked for recruiter review."
- id=add5a320-8aef-4376-839a-b93d97ef68c3 title="AI confidence indicator" confidence=1.00 description="Confidence indicators or flags for uncertain fields should be shown."
- id=71557648-6d59-4f31-8cfc-c32b4cdba2c5 title="Original CV file" confidence=1.00 description="Original uploaded CV must remain available after saving."
- id=9611460b-9d15-4a45-bd73-f724b8612653 title="Follow-up task due date" confidence=1.00 description="Explicitly required for follow-up management UI."
- id=52bb0a04-4063-4d84-b95e-e408af6f4875 title="Follow-up task priority" confidence=1.00 description="Explicitly required for follow-up management UI."
- id=f4c5ba5f-d991-4c62-9988-ef16235a13dc title="Follow-up task status" confidence=1.00 description="Explicitly required for follow-up management UI."
- id=9cbc2474-a33b-4589-8a4f-c19db662e76c title="Follow-up task notes" confidence=1.00 description="Explicitly required for follow-up management UI."
- id=4198ecae-c6cf-42c1-9edc-d9511f475415 title="Follow-up task assignee" confidence=1.00 description="Tasks can be assigned to self or others; assignment field required."

## Existing Design Rules
Variation: Workspace Dashboard
A workspace-centric, dashboard-first layout anchored on a persistent sidebar and modular main area, optimized for recruiters’ end-to-end workflow.
Screens: Login Screen, Login Loading State, Login Error State, Password Reset Request, Password Reset Confirmation, Permission Denied Screen, Recruiter Dashboard, Dashboard Empty State, Dashboard Loading State, Notification Drawer, Client Brief List, Brief List Empty State, Brief List Loading State, Client Brief Detail, Edit Brief Modal, Brief Activity Timeline Drawer, Add New Brief Modal, Doctor Database List, Doctor List Empty State, Doctor List Loading State, Add Doctor Modal, CV Upload Wizard: Upload Step, CV Upload Wizard: Upload Loading, CV Upload Wizard: AI Parsing Review, CV Upload Wizard: Parsing Error, CV Upload Wizard: Duplicate Detection, CV Upload Wizard: Finalize & Save, Doctor Candidate Profile, Edit Doctor Profile Modal, Candidate Activity Timeline Drawer, AHPRA Verification Modal, AHPRA Verification API Loading, AHPRA Verification API Error, AHPRA Manual Verification: Upload Docs, AHPRA Manual Verification: Add Notes, AHPRA Manual Verification: Submit for Review, AHPRA Manual Verification: Manager Review Modal, AI-Powered Candidate Matching, Matching Empty State, Matching Loading State, Matching Candidate Detail Drawer, Outreach Composer, Message Template Selector Modal, Personalization Fields Modal, Send Outreach Confirmation Modal, Outreach Composer Error State, Follow-Up Task List, Follow-Up List Empty State, Follow-Up List Loading State, Add Follow-Up Modal, Edit Follow-Up Modal, Overdue Follow-Ups Drawer, Reporting Dashboard, Reporting Dashboard Empty State, Admin Area
Design system: Modern, elegant, minimal premium SaaS
Components: Sidebar (collapsible, icon+label, role-aware), Topbar (breadcrumb, title, search Command, notifications Sheet, user DropdownMenu), Card (dashboard widgets, detail panels, summary cards), Table (shadcn/ui Table: sticky header, hairline dividers, comfortable row height, no zebra stripes, pagination), Badge (status, AI confidence, AHPRA, unread indicators), Tabs (detail/candidate/timeline navigation), Sheet/Drawer (notification drawer, timeline drawers, matching candidate detail, overdue follow-ups), Dialog/Modal (add/edit forms, confirmation, template/personalization selectors, AHPRA verification steps), Select (filters, dropdowns), Input (search, text, number, date, password), DropdownMenu (user menu, quick actions), Skeleton (loading placeholders for cards, tables, lists)
Full design guidelines are included in this task — follow them over generic aesthetics.
Colors: Neutral base: zinc/slate (light bg: #FFFFFF, dark bg: #09090B); Surface: bg-card, border-border (1px hairline border); Accent: indigo/violet hsl(243 75% 59%) for primary actions, active nav, focus rings, key metrics; No gradients or rainbow palettes; Text: text-foreground, text-muted-foreground for meta/labels
Typography: Font families: Inter, Geist (system fallback); Page title: text-2xl, font-semibold, tracking-tight; Section headings: text-base or text-lg, font-medium; Body: text-sm; Meta/labels: text-xs, text-muted-foreground, uppercase, tracking-wide
Spacing: 8px scale for all spacing; Page padding: p-6 (default), p-8 (desktop), p-4 (mobile/tablet); Card padding: p-4 (default), p-6 (dashboard widgets); Grid gap: gap-4, gap-6

## Design guidelines (source of truth)

Also in the repo: https://github.com/ahsanaasim/test-repo-ops-ai/blob/main/.ops4/design-system/DESIGN_SYSTEM.md
CSS tokens: https://github.com/ahsanaasim/test-repo-ops-ai/blob/main/.ops4/design-system/tokens.css
# Aperture — Design System Guidelines

**Source of truth for UI.** Coding agents (Cursor / Build Now) and humans must follow this file over generic aesthetics, invented palettes, or ad-hoc component styles.

| Item | Value |
|------|--------|
| System name | **Aperture** |
| Stack | React + Tailwind CSS + **shadcn/ui** patterns |
| Icons | **Phosphor Icons** (`@phosphor-icons/web`) |
| Themes | Light + Dark (`class` strategy) |
| Direction | LTR + RTL (`dir` on `<html>`) |
| Contrast | WCAG 2.1 AA |

---

## 1. Non‑negotiable rules

1. **Do not invent a new visual language.** Use Aperture tokens, zinc neutrals, and orange brand accents below.
2. **One primary action per view/region.** Prefer `primary` once; supporting actions use `secondary` / `ghost`.
3. **Never encode meaning by color alone.** Pair status with icon + text.
4. **Focus rings are mandatory.** Orange 2px ring + 2px offset — never remove without a visible replacement.
5. **Sentence case for actions;** Title Case for page/nav headers (see §8).
6. **Motion stays in the 150–200ms window** on named easing curves. Honor `prefers-reduced-motion`.
7. **Below 640px**, side **Sheet** becomes bottom **Drawer**.
8. Use **logical CSS** (`ms`/`me`, `border-s`, `start`/`end`) — no hard-coded left/right that breaks RTL.
9. Prefer existing **shadcn/ui** components over custom one-offs.
10. When this file conflicts with a generic “make it pretty” instinct, **this file wins**.

---

## 2. Brand & aesthetic

- **Look:** Clean product UI — zinc surfaces, subtle borders, restrained elevation, orange accent.
- **Not:** Purple gradients, glassmorphism noise, neon glow, heavy multi-layer shadows, random decorative cards.
- **Canvas:** Light `#fafafa` / Dark `#09090b`
- **Surfaces:** Light `#ffffff` / Dark `#18181b` (cards, panels)
- **Brand / primary fill:** `#f97316` (orange-500/600 family); hover darkens in light, lightens in dark
- **Destructive:** Rose (`#e11d48` light / `#fb7185` dark)
- **Fonts:** System UI sans (`ui-sans-serif`, system-ui, Segoe UI, Roboto, Helvetica, Arial); mono for code chips

### Shared shell primitives (Tailwind)

```
CARD = rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900
RING = focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
       focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950
```

---

## 3. Color tokens

### Semantic roles

| Token | Role | Light | Dark | Use |
|-------|------|-------|------|-----|
| `bg/canvas` | Page canvas | `#fafafa` | `#09090b` | Lowest layer; don’t put long-form text directly on canvas without a surface |
| `bg/surface` | Card / panel | `#ffffff` | `#18181b` | Default elevated container; pair with `border/subtle` |
| `bg/muted` | Inset fill | `#f4f4f5` | `#27272a` | Wells, code blocks, secondary rows |
| `fg/default` | Primary action fill | `#f97316` | `#f97316` | Primary buttons; **white** label/icons for AA |
| `fg/hover` | Primary hover | `#ea580c` | `#fb923c` | Darken in light; lighten in dark |
| `fg/neutral` | Secondary fill | `#e4e4e7` | `#3f3f46` | Secondary / ghost resting fill |
| `text/primary` | Body & headings | `#18181b` | `#fafafa` | ≥ 4.5:1 on surface |
| `text/secondary` | Supporting copy | `#52525b` | `#a1a1aa` | Metadata, helpers (≥ 4.5:1) |
| `text/disabled` | Disabled label | `#a1a1aa` | `#52525b` | Always pair with non-color disabled cues |
| `icon/interactive` | Actionable icon | `#ea580c` | `#fb923c` | ≥ 3:1 graphical contrast |
| `icon/neutral` | Informational icon | `#52525b` | `#a1a1aa` | ≥ 3:1; pair with text if status |
| `border/subtle` | Structural line | `#e4e4e7` | `#27272a` | Cards, dividers |
| `border/strong` | Input border | `#a1a1aa` | `#52525b` | Form affordance (~3:1 vs surface) |
| `border/focus` | Focus ring | `#f97316` | `#f97316` | Keyboard focus only — never structure |
| `status/success` | Success | `#059669` | `#34d399` | + check glyph |
| `status/info` | Info | `#2563eb` | `#60a5fa` | Tips, in-progress |
| `status/warning` | Warning | `#d97706` | `#fbbf24` | + warning glyph |
| `status/error` | Error | `#e11d48` | `#fb7185` | Blocking; announce with `aria-live` |

### Charts (Okabe–Ito–derived — color-blind safe)

| Token | Hex | Name |
|-------|-----|------|
| `charts/1` | `#0072b2` | Blue |
| `charts/2` | `#e69f00` | Orange |
| `charts/3` | `#009e73` | Green |
| `charts/4` | `#cc79a7` | Pink |
| `charts/5` | `#56b4e9` | Sky |
| `charts/6` | `#d55e00` | Vermillion |
| `charts/7` | `#f0e442` | Yellow |
| `charts/8` | `#525252` | Grey |

Always encode series with **color + label/pattern**, never hue alone.

### Badge / pill tones

`zinc` | `orange` | `emerald` | `rose` | `blue` | `amber` — soft filled pills with matching border; map to status semantics.

---

## 4. Typography

| Token | Desktop | Tablet | Mobile | Weight | Tracking | Rule |
|-------|---------|--------|--------|--------|----------|------|
| `display1` | 60/64 | 52/56 | 40/44 | 700 | -0.02em | Marketing heroes only — never dense product UI |
| `display2` | 48/52 | 40/44 | 34/38 | 700 | -0.02em | Secondary marketing splash |
| `h1` | 36/40 | 32/36 | 28/32 | 700 | -0.01em | **One per page/view** |
| `h2` | 28/34 | 26/32 | 24/30 | 600 | -0.01em | Module / major section titles |
| `title` | 20/28 | 18/26 | 18/26 | 600 | 0 | Card headers, dialog titles |
| `body` | 16/24 | 16/24 | 16/24 | 400 | 0 | Default reading size |
| `body-small` | 14/20 | 14/20 | 14/20 | 400 | 0 | Secondary metadata only |
| `label` | 13/16 | 13/16 | 13/16 | 500 | 0.01em | Form labels, buttons, chips — sentence case |
| `overline` | 11/16 | 11/16 | 11/16 | 600 | 0.12em | Eyebrows — uppercase + tracked |

Contrast: body/label ≥ **4.5:1**; large headings ≥ **3:1**.

---

## 5. Spacing, radius, elevation

### Spacing (4px rail)

| Token | px | Use |
|-------|-----|-----|
| `space-1` | 4 | Icon–label gap |
| `space-2` | 8 | Chip / badge padding |
| `space-3` | 12 | Compact control padding (S) |
| `space-4` | 16 | Default container / M control padding |
| `space-5` | 20 | Card internal padding |
| `space-6` | 24 | Section gaps / card gutters |
| `space-8` | 32 | Between grouped sections |
| `space-10` | 40 | Tablet region gaps |
| `space-12` | 48 | Page vertical rhythm |

### Radius

| Token | px | Tailwind | Use |
|-------|-----|----------|-----|
| `radius-sm` | 6 | `rounded-md` | Inputs, small buttons, checkboxes |
| `radius-md` | 8 | `rounded-lg` | Default buttons, menus, alerts |
| `radius-lg` | 12 | `rounded-xl` | Cards, dialogs, sheets, popovers |
| `radius-xl` | 16 | `rounded-2xl` | Large marketing / media |
| `radius-full` | 9999 | `rounded-full` | Pills, avatars, switch thumbs |

### Shadows

| Token | Use |
|-------|-----|
| `shadow-xs` / `shadow-sm` | Resting buttons, inputs, chips |
| `shadow` | Cards on canvas |
| `shadow-md` | Dropdowns, popovers, hover cards |
| `shadow-lg` | Menus, comboboxes, toasts |
| `shadow-xl` | Modals, sheets, drawers |

---

## 6. Iconography (Phosphor)

- Library: [phosphoricons.com](https://phosphoricons.com/)
- Weights: `thin` | `light` | `regular` | `bold` | `fill` | `duotone`
- Usage: **Regular** resting · **Bold/Fill** active/selected
- Sizes: **16 / 20 / 24 / 28** (4px steps)
- Custom icons: 24×24 grid, 2px stroke, 2px live padding, rounded terminals, optical center
- Roles:
  - **Actionable** — 3:1 + accessible name
  - **Informational** — pair with text
  - **Decorative** — `aria-hidden="true"`
- RTL: directional icons use `.flip-x` (`scaleX(-1)`)

---

## 7. Motion & interaction states

### Easing (Tailwind / CSS)

| Name | Curve | Typical duration |
|------|-------|------------------|
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | 150–200ms |
| `emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | 200ms |
| `decelerate` | `cubic-bezier(0, 0, 0, 1)` | 150ms |
| `accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | 150ms |

### Motion presets

| Preset | Duration | Behavior |
|--------|----------|----------|
| Press | 150ms | `scale(0.98)` on active |
| Fade | 150ms | Opacity 0→1 |
| Expand | 200ms | Height + chevron |
| Slide | 200ms | `translateY(8–12px)` + fade |
| Overlay | 200–300ms | Scrim fade + panel slide |
| Thumb | 150ms | Switch knob travel |
| Shimmer | 1400ms | Skeleton sweep (disable if reduced-motion) |
| Spin | 700ms linear | Spinner |

### Control states (all interactive controls)

`Default` · `Hover` · `Focus` · `Active` · `Disabled` · `Loading`

Sizes: **S** `h-8` · **M** `h-9` · **L** `h-11`

### Buttons

| Variant | Style |
|---------|--------|
| `primary` | Orange fill, white text |
| `secondary` | Surface + zinc border |
| `ghost` | Transparent, zinc text, muted hover |
| `destructive` | Rose fill, white text |
| `link` | Orange text, underline on hover |

Labels: sentence-case **verbs** (“Save changes”). Loading → spinner + `aria-busy` + disabled.

### Inputs

- Radius `rounded-md`, strong border; invalid → rose border + `aria-invalid`
- Always visible `<label>` — **never** placeholder-as-label
- Validate on blur for most fields; assertive live errors for blocking failures

### Overlays

- Scrim: `bg-black/50` + light blur
- Esc + outside click dismiss (except alert dialogs where Cancel is explicit)
- Focus trap; restore focus to trigger on close
- Toasts: bottom-end stack, `aria-live="polite"` (assertive for errors), max ~3, pause on hover

---

## 8. Editorial / copy

### Tone

| Do | Don’t |
|----|--------|
| Clear, direct, human (“Your changes are saved.”) | Robotic (“Operation completed successfully.”) |
| Confident, not boastful (“Deploy in one click.”) | Hype (“The world’s most powerful…”) |
| Blame-free errors (“We couldn’t reach the server.”) | Accusatory (“You entered an invalid value.”) |
| Concise active voice (“Add a member.”) | Passive padding |

### Capitalization

| Surface | Style | Example |
|---------|--------|---------|
| Buttons & actions | Sentence case | Save changes |
| Tooltips & helpers | Sentence case | Add to your library |
| Page & section headers | Title Case | Account Settings |
| Navigation labels | Title Case | Billing & Plans |
| Form labels | Sentence case | Email address |
| Toast / banner titles | Sentence case | Event created |

### Length limits

| Surface | Max chars |
|---------|-----------|
| Toast title | 60 |
| Banner body | 120 |
| Notification card | 90 |

---

## 9. Accessibility & i18n

- WCAG 2.1 AA contrast (see §3)
- Keyboard: Tab order intact; Esc closes top overlay; menus/tabs/radios follow WAI-ARIA patterns
- Icon-only controls need `aria-label`
- Status / errors: text + icon; errors use `role="alert"` / `aria-live="assertive"` when injected
- Charts: provide summary/`role="img"` + data table alternative when practical
- **RTL:** set `dir="rtl"`; mirror arrows/carets; sheets slide from logical end; pagination arrows flip
- Reduced motion: no infinite shimmer/pulse; prefer opacity fades

### Global keyboard expectations

| Context | Key | Behavior |
|---------|-----|----------|
| Global | Tab / Shift+Tab | Move focus |
| Global | Esc | Dismiss top overlay |
| Buttons | Enter / Space | Activate |
| Menus | ↑ ↓ · Home/End | Navigate items |
| Tabs | ← → | Move tabs |
| Radio | Arrows | Move selection |
| Combobox | Alt+↓ | Open listbox |
| Calendar/Grid | Arrows · PageUp/Down | Navigate |
| Slider | ← → · Home/End | Step / jump |
| Dialog | Tab | Cycle inside only |

---

## 10. Layout & responsive behavior

- App shell: often **sidebar nav** + main content; collapse to icons / off-canvas on narrow screens
- Cards: `radius-lg`, `space-5` padding, one clear primary action in footer (end-aligned)
- Tables: right-align numbers; use Data Table when sort/filter/paginate needed
- Empty states: icon in soft circle + title + why + **one recovery CTA**
- **Viewport rule:** `< 640px` → bottom Drawer; `≥ 640px` → side Sheet for secondary panels/filters

---

## 11. Component inventory

Prefer **shadcn/ui** docs for implementation. Use each component for its intended job.

### Core (shadcn)

Accordion · Alert · Alert Dialog · Aspect Ratio · Avatar · Badge · Breadcrumb · Button · Button Group · Calendar · Card · Carousel · Chart · Checkbox · Collapsible · Combobox · Command · Context Menu · Data Table · Date Picker · Dialog · Drawer · Dropdown Menu · Empty · Hover Card · Input · Input Group · Input OTP · Label · Menubar · Native Select · Navigation Menu · Pagination · Popover · Progress · Radio Group · Resizable · Scroll Area · Select · Separator · Sheet · Sidebar · Skeleton · Slider · Sonner (Toast) · Spinner · Switch · Table · Tabs · Textarea · Toggle · Toggle Group · Tooltip

### Brand / chat / media (Aperture)

| Component | When |
|-----------|------|
| Attachment | Inline file chip (type + name + size + action) |
| AttachmentNew | Post-upload confirmed / emphasized attachment |
| Bubble | Compact chat bubble (own = end, other = start) |
| BubbleNew | Emphasized bubble (ring/shadow) — sparingly |
| Message | Avatar + author + timestamp + body |
| MessageNew | Carded / pinned message |
| Message Scroller | Live thread `role="log"`; stick to bottom only if already at bottom |
| Message ScrollerNew | + typing indicator |
| Marker | Map/timeline annotation |
| MarkerNew | Live/now marker (pulse; respect reduced-motion) |

**Chat a11y:** message list = `aria-live="polite"` log; sender via alignment + label, not color alone; timestamps use `<time datetime>`.

### Component selection cheatsheet

| Need | Use | Avoid |
|------|-----|--------|
| Primary action | Button `primary` | Multiple primaries |
| Confirm destroy | Alert Dialog | Toast / plain Dialog |
| Transient feedback | Sonner | Blocking Alert Dialog |
| Persistent inline notice | Alert | Toast |
| Short text | Input | Textarea |
| Choices ≤ ~6 visible | Radio / Select | Combobox |
| Searchable long list | Combobox | Select |
| Instant setting | Switch | Checkbox + Save |
| Form multi-select | Checkbox | Switch |
| Side panel desktop | Sheet | Drawer |
| Side panel mobile | Drawer | Sheet |
| Page sections peers | Tabs | Accordion (unless stack needed) |
| Dense sort/filter data | Data Table | static Table |

---

## 12. Implementation checklist (for agents)

When building or changing UI:

- [ ] Zinc + orange Aperture palette (light/dark classes)
- [ ] Phosphor icons at 16/20/24/28; decorative icons `aria-hidden`
- [ ] Focus ring on all interactive controls
- [ ] Labels on every input; errors linked via `aria-describedby`
- [ ] Spacing on the 4px scale; cards `rounded-xl` + subtle border
- [ ] One primary CTA per region; sentence-case verbs
- [ ] Sheet↔Drawer breakpoint at 640px
- [ ] Logical properties for RTL
- [ ] Motion ≤ 200ms; reduced-motion safe
- [ ] Status colors always with icon + text
- [ ] Prefer shadcn components from §11 over custom widgets

---

## 13. Optional CSS variables (tokens.css)

Agents may commit a companion `tokens.css` mapping the semantic tokens above, e.g.:

```css
:root {
  --bg-canvas: #fafafa;
  --bg-surface: #ffffff;
  --bg-muted: #f4f4f5;
  --fg-default: #f97316;
  --fg-hover: #ea580c;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --border-subtle: #e4e4e7;
  --border-strong: #a1a1aa;
  --border-focus: #f97316;
  --status-success: #059669;
  --status-info: #2563eb;
  --status-warning: #d97706;
  --status-error: #e11d48;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --space-1: 4px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
}
.dark {
  --bg-canvas: #09090b;
  --bg-surface: #18181b;
  --bg-muted: #27272a;
  --fg-hover: #fb923c;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --border-subtle: #27272a;
  --border-strong: #52525b;
  --status-success: #34d399;
  --status-info: #60a5fa;
  --status-warning: #fbbf24;
  --status-error: #fb7185;
}
```

---

*Derived from the Aperture Design System Showroom (`design-system-showroom.html` / `.md`). Treat this document as the visual and behavioral contract for product UI.*

## Baseline / Cursor build prompt
This UI is for Web Application (responsive) — design all screens for desktop-first browser conventions with responsive breakpoints. Use pointer-first navigation, persistent collapsible left sidebar, and a slim top bar (breadcrumb/title left, search + user menu right). Content sits in a max-w-7xl container, never edge-to-edge text.

LOCKED DESIGN SYSTEM (apply to all screens):
- Color: Neutral base zinc/slate. Light bg #FFFFFF, dark bg #09090B. Surfaces use bg-card with a 1px hairline border (border-border). Accent: indigo/violet hsl(243 75% 59%) for primary actions, active nav, focus rings, and key metrics only. No rainbow palettes or gradients.
- Typography: Inter or Geist. Page title: text-2xl font-semibold tracking-tight. Section: text-base or text-lg font-medium. Body: text-sm. Meta/labels: text-xs text-muted-foreground uppercase tracking-wide.
- Spacing: 8px scale. Page padding p-6→p-8, card padding p-4→p-6, grid gap-4/gap-6.
- Radius: rounded-lg for cards/inputs, rounded-md for buttons, rounded-full for avatars/pills.
- Elevation: flat by default; shadow-sm on cards, shadow-md only for dialogs/popovers.
- Components: Use shadcn/ui (New York) + lucide-react. Button, Card, Table, Badge, Tabs, Dialog, Sheet, Select, Input, DropdownMenu, Skeleton, Alert, Avatar, Tooltip, Command, Separator. Data tables: hairline row dividers, sticky headers, comfortable row height, no zebra stripes.
- App shell: persistent collapsible left sidebar (icon + label, active item uses accent) + slim top bar (breadcrumb/title left, search + user menu right).
- Motion: subtle only — 150-200ms ease transitions on hover/expand. No bouncy or flashy animation.
- States: empty (friendly illustration/icon + primary CTA), loading (Skeleton placeholders), error (Alert), permission_denied and plan_limit (distinct on-system messaging).
- Accessibility: WCAG AA contrast, visible focus-visible rings, full keyboard navigation.

Build a working Next.js (App Router) app with TypeScript, Tailwind CSS, and shadcn/ui. Use realistic sample data for every field from the Page by Page Data Points. Implement every page and modal from the page list, with all documented filters, status variants, and edge cases. Use the following layout and navigation:

1. App Shell:
   - Persistent collapsible left sidebar with icons + labels for: Dashboard, Briefs, Doctors, Matching, Outreach, Follow-Ups, Reporting, Admin (role-aware; hide if not permitted).
   - Slim top bar: left = breadcrumb + page title; right = search (Command), notifications (Sheet/Drawer), user menu (DropdownMenu with profile, settings, logout).
   - Main content: max-w-7xl mx-auto, p-8 on desktop, p-4 on mobile/tablet.

2. Pages (implement all, with routes, layouts, and components):
   - /login: Modern minimal login form (email, password, show/hide, forgot password). Error, loading, plan_limit, and permission_denied states.
   - /login/reset: Password reset request modal (email input, submit/cancel, error/loading/plan_limit/permission_denied states).
   - /login/reset/confirm: Set new password modal (new/confirm, requirements tooltip, error/loading/plan_limit/permission_denied states).
   - /forbidden: Permission denied screen (headline, description, return to dashboard, contact support, error/plan_limit/loading states).
   - /dashboard: Recruiter dashboard with widgets: assigned briefs, open tasks, notifications, recent activity, quick links. Filters (reporting dashboard filters), CSV export (role-restricted). All status variants: empty (illustration + CTA), loading (Skeletons), error (Alert + retry), plan_limit (banner), permission_denied (message).
   - /dashboard/notifications: Notification drawer (Sheet) with filters (type, unread only), notification list (type badge, timestamp, content, mark as read, go to related item, unread indicator), empty/loading/error/plan_limit/permission_denied states.
   - /briefs: Client brief list (Table) with filters (search, status, assigned recruiter, date created), columns (title, client, status badge, assigned recruiter, date, open positions, AI match confidence, AHPRA verification status, quick actions, pagination). All status variants: empty (illustration + create new), loading (Skeleton), error (Alert + retry), plan_limit, permission_denied.
   - /briefs/:id: Brief detail (Tabs: Details, Candidates, Timeline). Header: title, client, location, specialty, status, assigned recruiter, open positions, created date. Panels: notes, edit/delete actions, AI-powered candidate match list (with status, assignment, AI-extracted indicator, original CV, AHPRA fields), follow-up task list, add follow-up, activity timeline. All status variants: loading (Skeletons), empty (no candidates/timeline, add candidate/follow-up), error (Alert + retry), plan_limit, permission_denied.
   - /briefs/:id/edit: Edit brief modal (all editable fields, save/cancel, error/loading/plan_limit/permission_denied).
   - /briefs/:id/timeline: Timeline drawer (Sheet) with filters (search, activity type, date range, user), activity log (type, timestamp, description, performed by, linked candidate/communication, status/AHPRA badges, note content, attachment icon, AI-generated note badge). All status variants.
   - /briefs/add: Add new brief modal (all required fields, save/cancel, error/loading/plan_limit/permission_denied).
   - /doctors: Doctor database list (Table) with advanced filters (specialty, location, AHPRA status, availability, geospatial if enabled), columns (name, specialty, location, AHPRA status, assignment, status, quick actions, pagination). All status variants.
   - /doctors/add: Add doctor modal (CV upload wizard: upload, AI parsing review with side-by-side original/parsed, duplicate detection, finalize & save). All error/loading/empty/plan_limit/permission_denied states.
   - /doctors/:id: Doctor candidate profile (Tabs: Profile, Documents, Timeline, Follow-Ups). Panels: all candidate data, AHPRA verification (status, source, date, supporting docs, notes), communication log, follow-ups, activity timeline. All status variants.
   - /doctors/:id/edit: Edit doctor profile modal (all editable fields, save/cancel, error/loading/plan_limit/permission_denied).
   - /doctors/:id/timeline: Candidate activity timeline drawer (Sheet) with filters, activity log, all status variants.
   - /doctors/:id/verify: AHPRA verification modal (API/manual, status, source, date, docs, notes, error/loading/plan_limit/permission_denied).
   - /doctors/:id/verify/manual-upload, /manual-notes, /manual-submit: Manual verification wizard steps (upload docs, add notes, submit for review, all status variants).
   - /doctors/:id/verify/manual-review: Manager review modal (approve/reject, review notes, all status variants).
   - /matching: AI-powered candidate matching screen (ranked list, confidence indicators, rationale, filters, all status variants: empty, loading, error, plan_limit, permission_denied).
   - /matching/:candidateId: Matching candidate detail drawer (Sheet) with actionable summary.
   - /outreach: Outreach composer (templates, free-form, personalization, channel selector, send now/draft, consent check, all status variants).
   - /outreach/templates: Message template selector modal (searchable, preview).
   - /outreach/personalize: Personalization fields modal (dynamic fields, validation).
   - /outreach/send-confirm: Send confirmation modal (consent/opt-out check).
   - /outreach/error: Outreach composer error state (Alert, retry).
   - /follow-ups: Follow-up task list (Table/list, filters by due date, priority, status, assignee, all status variants).
   - /follow-ups/add: Add follow-up modal (due date, priority, status, notes, assignee).
   - /follow-ups/:id/edit: Edit follow-up modal.
   - /follow-ups/overdue: Overdue follow-ups drawer (Sheet) with quick actions.
   - /reporting: Reporting dashboard (metrics, filters, export controls, role-aware data masking, all status variants).
   - /admin: Admin area (user/role management, audit log, data retention/deletion, system settings, all status variants).

3. Filters: Render every documented filter per page (multi-selects, search, date range, toggles, etc.) using shadcn/ui Select, Input, and custom filter components. Filters are always visible above tables/lists.

4. Status Variants: Implement all for every page:
   - Empty: Friendly illustration (lucide icon), concise message, primary CTA (e.g., add brief, add doctor).
   - Loading: Skeleton placeholders for all widgets/tables/cards.
   - Error: Alert component with error message and retry action.
   - Plan Limit: Banner or message with upgrade CTA, disables actions.
   - Permission Denied: Clear message, disables/hides content, return to dashboard/support options.

5. Data Tables: Use shadcn/ui Table with sticky headers, hairline row dividers, no zebra stripes, comfortable row height. All columns and badges as per data points.

6. Cards & Widgets: Use Card for dashboard widgets, candidate/brief summaries, and detail panels. Padding p-6, shadow-sm, rounded-lg.

7. Tabs: Use Tabs for detail/candidate/timeline navigation within detail pages.

8. Drawers/Sheets: Use Sheet for notification drawer, timeline drawers, matching candidate detail, overdue follow-ups.

9. Modals: Use Dialog for add/edit forms, confirmation, template/personalization selectors, AHPRA verification steps.

10. Accessibility: All interactive elements have visible focus rings, keyboard navigation, and WCAG AA contrast. Use aria-labels and roles as needed.

11. Motion: All transitions (hover, expand, open/close) use 150-200ms ease. No bouncy or flashy animation.

12. Sample Data: Populate all tables, cards, and widgets with realistic sample data for every field (e.g., brief title, client, specialty, AHPRA status, candidate name, AI confidence, verification status, etc.).

13. Role Awareness: Navigation and actions are hidden or disabled if not permitted by role. Reporting users see masked data where required.

14. Audit Logging: All actions (edit, export, verification, communication) are logged and visible in activity timelines and audit log screens.

15. Responsive: All layouts adapt for tablet/mobile breakpoints, with sidebar collapsing to a drawer and content stacking vertically.

Pages covered: Login Screen, Login Loading/Error, Password Reset, Permission Denied, Recruiter Dashboard (all states), Notification Drawer, Client Brief List (all states), Brief Detail (all states), Brief Edit/Add, Brief Timeline Drawer, Doctor Database List (all states), Add Doctor (CV upload wizard), Doctor Profile (all states), Doctor Edit, Candidate Timeline Drawer, AHPRA Verification Modal (all steps), Matching Screen (all states), Matching Candidate Drawer, Outreach Composer (all steps), Follow-Up List (all states), Add/Edit Follow-Up, Overdue Drawer, Reporting Dashboard (all states), Admin Area (all states).

Build every page, filter, and state variant as described above, using the locked design system and the Workspace Dashboard layout archetype.

## Page-by-page data points
Implement screens using this field-level inventory.

Summary: 64 pages, 840 data points, 77 filters.

### Login Screen (/login) [default]
Fields:
- Email (form-field · panel · required)
- Password (form-field · panel · required)
- Login Button (action · panel · required)
- Forgot Password Link (action · panel)
- Show Password Toggle (action · panel)
- Session Expiry Tooltip (tooltip · panel)
- Error Message (text · panel)
- Loading Spinner (badge · panel)
- Plan Limit Banner (badge · panel)
- Permission Denied Banner (badge · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Login Loading State (/login) [loading]
Fields:
- Email (form-field · panel · required)
- Password (form-field · panel · required)
- Login Button (action · panel · required)
- Forgot Password Link (action · panel)
- Show Password Toggle (action · panel)
- Loading Spinner (badge · panel · required)
Statuses: loading

### Login Error State (/login) [error]
Fields:
- Email (form-field · panel · required)
- Password (form-field · panel · required)
- Login Button (action · panel · required)
- Forgot Password Link (action · panel)
- Show Password Toggle (action · panel)
- Error Message (text · panel · required)
Statuses: error

### Password Reset Request (/login/reset) [default]
Fields:
- Email address (form-field · panel · required)
- Submit button (action · footer · required)
- Cancel button (action · footer · required)
- Loading spinner (badge · panel)
- Error message (text · panel)
- Plan limit message (text · panel)
- Permission denied message (text · panel)
- Success confirmation (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Password Reset Confirmation (/login/reset/confirm) [default]
Fields:
- New password (form-field · panel · required)
- Confirm new password (form-field · panel · required)
- Password requirements tooltip (tooltip · panel · required)
- Submit button (action · footer · required)
- Cancel button (action · footer · required)
- Loading spinner (badge · panel)
- Error message (text · panel)
- Plan limit message (text · panel)
- Permission denied message (text · panel)
- Success confirmation (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Permission Denied Screen (/forbidden) [error]
Fields:
- Permission denied headline (text · header · required)
- Permission denied description (text · panel · required)
- Return to dashboard button (action · footer · required)
- Contact support link (action · footer)
- Loading spinner (badge · panel)
- Error message (text · panel)
- Plan limit message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Recruiter Dashboard (/dashboard) [default]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Assigned briefs widget (panel · main · required)
- Open tasks widget (panel · main · required)
- Notifications widget (panel · main · required)
- Recent activity timeline (panel · main · required)
- Quick links panel (panel · main)
- Dashboard empty state illustration (text · main)
- Dashboard empty state call-to-action (action · main)
- Dashboard skeleton loaders (text · main)
- Dashboard error message (text · main)
- Dashboard retry button (action · main)
- Plan limit banner (badge · header)
- Permission denied message (text · main)
Filters:
- Reporting dashboard filters (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Dashboard Empty State (/dashboard) [empty]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Dashboard empty state illustration (text · main)
- Dashboard empty state call-to-action (action · main)
- Dashboard skeleton loaders (text · main)
- Dashboard error message (text · main)
- Dashboard retry button (action · main)
- Plan limit banner (badge · header)
- Permission denied message (text · main)
Filters:
- Reporting dashboard filters (multi-select)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Dashboard Loading State (/dashboard) [loading]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Dashboard skeleton loaders (text · main)
- Dashboard error message (text · main)
- Dashboard retry button (action · main)
- Plan limit banner (badge · header)
- Permission denied message (text · main)
Filters:
- Reporting dashboard filters (multi-select)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Notification Drawer (/dashboard/notifications) [default]
Fields:
- Notification List (list · panel · required)
- Notification Type Badge (badge · panel · required)
- Notification Timestamp (text · panel · required)
- Notification Content (text · panel · required)
- Mark as Read Action (action · panel · required)
- Go to Related Item Action (action · panel · required)
- Unread Indicator (badge · panel · required)
- Notification Type Filter (filter · filters)
- Unread Only Filter (filter · filters)
- Empty State Message (text · panel · required)
- Error Message (text · panel · required)
- Retry Action (action · panel · required)
- Plan Limit Message (text · panel · required)
- Permission Denied Message (text · panel · required)
- Notification List (Loading Skeleton) (text · panel)
Filters:
- Notification Type (multi-select)
- Unread Only (toggle)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Client Brief List (/briefs) [default]
Fields:
- Search Briefs (filter · filters)
- Brief Status Filter (filter · filters)
- Assigned Recruiter Filter (filter · filters)
- Date Created Filter (filter · filters)
- Brief Title (table-column · table · required)
- Client Name (table-column · table · required)
- Brief Status Badge (badge · table · required)
- Assigned Recruiter (table-column · table · required)
- Date Created (table-column · table · required)
- Open Positions (table-column · table · required)
- AI Match Confidence (badge · table)
- AHPRA Verification Status (badge · table)
- Quick Actions (action · table · required)
- Table Pagination (navigation-item · footer · required)
- Empty State Message (text · panel · required)
- Create New Brief Action (action · panel · required)
- Table Loading Skeleton (text · table)
- Error Message (text · panel · required)
- Retry Action (action · panel · required)
- Plan Limit Message (text · panel · required)
- Permission Denied Message (text · panel · required)
Filters:
- Search Briefs (search)
- Brief Status (multi-select)
- Assigned Recruiter (multi-select)
- Date Created (date-range)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Brief List Empty State (/briefs) [empty]
Fields:
- Search Briefs (filter · filters)
- Brief Status Filter (filter · filters)
- Assigned Recruiter Filter (filter · filters)
- Date Created Filter (filter · filters)
- Empty State Message (text · panel · required)
- Create New Brief Action (action · panel · required)
- Table Loading Skeleton (text · table)
- Error Message (text · panel · required)
- Retry Action (action · panel · required)
- Plan Limit Message (text · panel · required)
- Permission Denied Message (text · panel · required)
Filters:
- Search Briefs (search)
- Brief Status (multi-select)
- Assigned Recruiter (multi-select)
- Date Created (date-range)
Statuses: empty, loading, error, plan_limit, permission_denied

### Brief List Loading State (/briefs) [loading]
Fields:
- Brief list skeleton rows (table-column · table · required)
- Brief title (table-column · table · required)
- Client name (table-column · table · required)
- Location (table-column · table · required)
- Specialty (table-column · table · required)
- Status (table-column · table · required)
- Assigned recruiter (table-column · table · required)
- Open positions (table-column · table · required)
- Created date (table-column · table · required)
- Actions (action · table · required)
- Error message (text · panel · required)
- Retry action (action · panel · required)
- Empty state message (text · panel · required)
- Create new brief action (action · panel · required)
- Plan limit message (text · panel · required)
- Upgrade plan action (action · panel · required)
- Permission denied message (text · panel · required)
Statuses: loading, error, empty, plan_limit, permission_denied

### Client Brief Detail (/briefs/:id) [default]
Fields:
- Brief title (text · header · required)
- Client name (text · header · required)
- Location (text · header · required)
- Specialty (text · header · required)
- Status (badge · header · required)
- Assigned recruiter (text · header · required)
- Open positions (number · header · required)
- Created date (date · header · required)
- Brief notes (text · panel)
- Edit brief action (action · toolbar · required)
- Delete brief action (action · toolbar · required)
- Tab: Details (navigation-item · panel · required)
- Tab: Candidates (navigation-item · panel · required)
- Tab: Timeline (navigation-item · panel · required)
- AI-powered candidate match list (list · panel · required)
- Candidate status (badge · panel · required)
- Candidate assignment (text · panel · required)
- Candidate AI-extracted field indicator (badge · panel · required)
- Candidate original CV file (file · panel · required)
- AHPRA registration number (form-field · panel · required)
- Verification status (form-field · panel · required)
- Verification date (form-field · panel · required)
- Verification source (form-field · panel · required)
- Verification supporting documents (form-field · panel)
- Verification notes (form-field · panel)
- Follow-up task list (list · panel · required)
- Add follow-up task action (action · panel · required)
- Activity timeline (list · panel · required)
- Brief detail skeleton (text · panel · required)
- Tab skeletons (text · panel · required)
- Candidate list skeleton (text · panel · required)
- Empty candidate list message (text · panel · required)
- Empty timeline message (text · panel · required)
- Add candidate action (action · panel · required)
- Error message (text · panel · required)
- Retry action (action · panel · required)
- Plan limit message (text · panel · required)
- Upgrade plan action (action · panel · required)
- Permission denied message (text · panel · required)
Statuses: default, loading, empty, error, plan_limit, permission_denied

### Edit Brief Modal (/briefs/:id/edit) [default]
Fields:
- Brief title (form) (form-field · panel · required)
- Client name (form) (form-field · panel · required)
- Location (form) (form-field · panel · required)
- Specialty (form) (form-field · panel · required)
- Status (form) (form-field · panel · required)
- Assigned recruiter (form) (form-field · panel · required)
- Open positions (form) (form-field · panel · required)
- Brief notes (form) (form-field · panel)
- Save action (action · footer · required)
- Cancel action (action · footer · required)
- Loading spinner (text · panel · required)
- Error message (text · panel · required)
- Plan limit message (text · panel · required)
- Upgrade plan action (action · panel · required)
- Permission denied message (text · panel · required)
Statuses: default, loading, error, plan_limit, permission_denied

### Brief Activity Timeline Drawer (/briefs/:id/timeline) [default]
Fields:
- Search Activity (filter · filters)
- Activity Type (text · panel · required)
- Date Range (filter · filters)
- User (filter · filters)
- Activity Timestamp (date · panel · required)
- Activity Description (text · panel · required)
- Performed By (text · panel · required)
- Linked Candidate (text · panel)
- Linked Communication (text · panel)
- Status Change Badge (badge · panel)
- AHPRA Verification Badge (badge · panel)
- Note Content (text · panel)
- Attachment Icon (icon · panel)
- AI-Generated Note Badge (badge · panel)
Filters:
- Search Activity (search)
- Activity Type (multi-select)
- Date Range (date-range)
- User (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add New Brief Modal (/briefs/add) [default]
Fields:
- Client Name (form-field · form · required)
- Brief Title (form-field · form · required)
- Role Type (form-field · form · required)
- Specialty (form-field · form · required)
- Location (form-field · form · required)
- Start Date (form-field · form · required)
- End Date (form-field · form)
- Employment Type (form-field · form · required)
- Number of Positions (form-field · form · required)
- Brief Description (form-field · form)
- Requirements (form-field · form)
- Notes (form-field · form)
- Assigned Recruiter (form-field · form)
- Save Brief (action · footer · required)
- Cancel (action · footer · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Doctor Database List (/doctors) [default]
Fields:
- Search Doctors (filter · filters)
- Specialty (filter · filters)
- Location (filter · filters)
- AHPRA Verified (filter · filters)
- Employment Type (filter · filters)
- Availability (filter · filters)
- Duplicate Status (filter · filters)
- Geospatial Search (filter · filters)
- Saved Filters (filter · filters)
- Doctor Name (table-column · table · required)
- Specialty (Column) (table-column · table · required)
- Location (Column) (table-column · table · required)
- AHPRA Status (badge · table · required)
- Employment Type (Column) (table-column · table)
- Availability (Column) (table-column · table)
- Duplicate Badge (badge · table)
- Profile Actions (action · table · required)
- AI-Generated Notes Badge (badge · table)
Filters:
- Search Doctors (search)
- Specialty (multi-select)
- Location (multi-select)
- AHPRA Verified (toggle)
- Employment Type (multi-select)
- Availability (date-range)
- Duplicate Status (toggle)
- Geospatial Search (geometry)
- Saved Filters (saved-filter)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Doctor List Empty State (/doctors) [empty]
Fields:
- Search (filter · filters · required)
- Specialty (filter · filters · required)
- Location (filter · filters · required)
- AHPRA Status (filter · filters)
- Availability (filter · filters)
- Empty State Illustration (text · panel · required)
- Empty State Message (text · panel · required)
- Add Doctor Button (action · panel · required)
- Error Message (text · panel · required)
- Retry Button (action · panel · required)
- Plan Limit Message (text · panel · required)
- Upgrade Plan Button (action · panel · required)
- Permission Denied Message (text · panel · required)
- Doctor Table (table-column · table)
- Bulk Actions (action · toolbar)
- Export Button (action · toolbar)
Filters:
- Search (search)
- Specialty (multi-select)
- Location (multi-select)
- AHPRA Status (multi-select)
- Availability (multi-select)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Doctor List Loading State (/doctors) [loading]
Fields:
- Search (filter · filters · required)
- Specialty (filter · filters · required)
- Location (filter · filters · required)
- AHPRA Status (filter · filters)
- Availability (filter · filters)
- Doctor Table Skeleton (table-column · table · required)
- Loading Spinner (text · panel · required)
- Error Message (text · panel · required)
- Retry Button (action · panel · required)
- Plan Limit Message (text · panel · required)
- Upgrade Plan Button (action · panel · required)
- Permission Denied Message (text · panel · required)
- Add Doctor Button (action · panel)
- Bulk Actions (action · toolbar)
- Export Button (action · toolbar)
Filters:
- Search (search)
- Specialty (multi-select)
- Location (multi-select)
- AHPRA Status (multi-select)
- Availability (multi-select)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Add Doctor Modal (/doctors/add) [default]
Fields:
- Upload CV Field (form-field · panel)
- Manual Entry Toggle (action · panel)
- First Name (form-field · panel · required)
- Last Name (form-field · panel · required)
- Email (form-field · panel)
- Phone (form-field · panel)
- Specialty (form-field · panel · required)
- Location (form-field · panel · required)
- AHPRA Number (form-field · panel)
- Availability (form-field · panel)
- Upload Progress Bar (text · panel)
- Duplicate Detection Banner (badge · panel)
- Duplicate Resolution Modal (modal · panel)
- Continue Button (action · footer · required)
- Cancel Button (action · footer · required)
- Loading Spinner (text · panel)
- Error Message (text · panel)
- Retry Button (action · footer)
- Plan Limit Message (text · panel)
- Upgrade Plan Button (action · footer)
- Permission Denied Message (text · panel)
- Invalid Upload Message (text · panel)
Statuses: default, loading, error, plan_limit, permission_denied, invalid_upload, duplicate_detected

### CV Upload Wizard: Upload Step (/doctors/add/cv-upload) [default]
Fields:
- Step Indicator (navigation-item · header · required)
- Page Title (text · header · required)
- Upload Area (form-field · panel · required)
- File Requirements Tooltip (tooltip · panel · required)
- Supported File Types Badge (badge · panel · required)
- Max File Size Tooltip (tooltip · panel · required)
- Upload Button (action · footer · required)
- Cancel Button (action · footer · required)
- Progress Bar (metric · panel · required)
- Error Message (text · panel)
- Plan Limit Banner (badge · header)
- Permission Denied Banner (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### CV Upload Wizard: Upload Loading (/doctors/add/cv-upload) [loading]
Fields:
- Step Indicator (navigation-item · header · required)
- Page Title (text · header · required)
- Upload Area (form-field · panel · required)
- Progress Bar (metric · panel · required)
- Cancel Button (action · footer · required)
Statuses: loading

### CV Upload Wizard: AI Parsing Review (/doctors/add/cv-review) [default]
Fields:
- Step Indicator (navigation-item · header · required)
- Page Title (text · header · required)
- Extracted Fields Panel (form-field · panel · required)
- Original CV Preview Panel (panel · panel · required)
- AI Confidence Badge (badge · panel · required)
- Field Confidence Tooltip (tooltip · panel)
- Edit Field Action (action · panel · required)
- Accept All Button (action · footer · required)
- Reject All Button (action · footer)
- Next Button (action · footer · required)
- Back Button (action · footer · required)
- Loading Spinner (metric · panel)
- Error Message (text · panel)
- Empty State Message (text · panel)
- Plan Limit Banner (badge · header)
- Permission Denied Banner (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### CV Upload Wizard: Parsing Error (/doctors/add/cv-review) [error]
Fields:
- Parsing Error Message (text · panel · required)
- Retry Upload Action (action · panel · required)
- Manual Entry Action (action · panel · required)
- Uploaded CV File Name (text · header · required)
- Upload New CV Action (action · panel)
- Contact Support Tooltip (tooltip · panel)
- Parsing Loading Indicator (badge · panel · required)
- Plan Limit Reached Message (text · panel · required)
- Upgrade Plan Action (action · panel)
- Permission Denied Message (text · panel · required)
- Extracted CV Fields Panel (panel · panel)
- AI Parsing Confidence Badge (badge · panel)
Statuses: error, loading, plan_limit, permission_denied

### CV Upload Wizard: Duplicate Detection (/doctors/add/duplicates) [default]
Fields:
- Duplicate Candidates Table (table-column · table · required)
- Candidate Name (table-column · table · required)
- AHPRA Number (table-column · table)
- Email Address (table-column · table)
- Phone Number (table-column · table)
- Match Confidence Badge (badge · table)
- View Existing Profile Action (action · table · required)
- Merge Candidate Action (action · table · required)
- Confirm As New Action (action · table · required)
- No Duplicates Found Message (text · panel · required)
- Continue Action (action · footer · required)
- Duplicate Candidates Empty State Illustration (badge · panel)
- Duplicate Detection Loading Indicator (badge · panel · required)
- Duplicate Detection Error Message (text · panel · required)
- Retry Duplicate Detection Action (action · panel · required)
- Plan Limit Reached Message (text · panel · required)
- Upgrade Plan Action (action · panel)
- Permission Denied Message (text · panel · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### CV Upload Wizard: Finalize & Save (/doctors/add/confirm) [default]
Fields:
- Doctor Profile Summary Panel (panel · panel · required)
- Full Name (text · panel · required)
- AHPRA Number (text · panel)
- Specialty (text · panel)
- Contact Email (text · panel)
- Contact Phone (text · panel)
- CV File Name (text · panel)
- Audit Log Panel (panel · panel)
- Save Doctor Profile Action (action · footer · required)
- Back to Edit Action (action · footer · required)
- Finalize Empty State Illustration (badge · panel)
- Saving Loading Indicator (badge · panel · required)
- Save Error Message (text · panel · required)
- Retry Save Action (action · footer · required)
- Plan Limit Reached Message (text · panel · required)
- Upgrade Plan Action (action · panel)
- Permission Denied Message (text · panel · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Doctor Candidate Profile (/doctors/:id) [default]
Fields:
- Profile Tab (navigation-item · header · required)
- Documents Tab (navigation-item · header · required)
- Timeline Tab (navigation-item · header · required)
- Follow-Ups Tab (navigation-item · header · required)
- Doctor Name (text · panel · required)
- Profile Photo (image · panel)
- Primary Specialty (text · panel · required)
- Subspecialties (list · panel)
- AHPRA Registration Status (badge · panel · required)
- AHPRA Last Checked (date · panel)
- AHPRA Verification Action (action · panel · required)
- AHPRA Verification Badge (badge · panel)
- Contact Email (text · panel · required)
- Contact Phone (text · panel)
- Location (text · panel)
- Current Role (text · panel)
- Current Employer (text · panel)
- Years of Experience (number · panel)
- Education (list · panel)
- CV Upload (upload · panel)
- CV Parsing Status (badge · panel)
- Parsed CV Data (list · panel)
- Duplicate Candidate Warning (badge · panel)
- Candidate Status (badge · panel · required)
- Manual Notes (text · panel)
- AI-Generated Notes (text · panel)
- Communication Log Preview (list · panel)
- Follow-Up Tasks Preview (list · panel)
- Edit Profile Action (action · toolbar · required)
- Delete Candidate Action (action · toolbar)
- Timeline Drawer Action (action · toolbar)
- Tab Navigation (navigation-item · header · required)
- Candidate Status Badge (badge · header · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Edit Doctor Profile Modal (/doctors/:id/edit) [default]
Fields:
- Doctor Name (form) (form-field · panel · required)
- Primary Specialty (form) (form-field · panel · required)
- Subspecialties (form) (form-field · panel)
- Contact Email (form) (form-field · panel · required)
- Contact Phone (form) (form-field · panel)
- Location (form) (form-field · panel)
- Current Role (form) (form-field · panel)
- Current Employer (form) (form-field · panel)
- Years of Experience (form) (form-field · panel)
- Education (form) (form-field · panel)
- Candidate Status (form) (form-field · panel · required)
- Manual Notes (form) (form-field · panel)
- AI-Generated Notes (form) (form-field · panel)
- Save Action (action · footer · required)
- Cancel Action (action · footer · required)
- Error Message (text · panel)
- Permission Denied Message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Candidate Activity Timeline Drawer (/doctors/:id/timeline) [default]
Fields:
- Activity Type (filter · filters)
- Date Range (filter · filters)
- Search Activity (filter · filters)
- Timeline List (list · panel · required)
- Timeline Event Type Badge (badge · panel · required)
- Timeline Event Timestamp (date · panel · required)
- Timeline Event User (text · panel)
- Timeline Event Details (text · panel · required)
- Timeline Event Attachments (list · panel)
- Close Drawer Action (action · header · required)
- Empty State Message (text · panel)
- Error Message (text · panel)
- Permission Denied Message (text · panel)
Filters:
- Activity Type (multi-select)
- Date Range (date-range)
- Search Activity (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Verification Modal (/doctors/:id/verify) [default]
Fields:
- AHPRA Verification Status (badge · header · required)
- Verification Source (text · panel · required)
- Verification Date (date · panel · required)
- Supporting Documents (list · panel)
- Verification Notes (form-field · panel)
- Verified By (text · panel)
- AHPRA Registration Number (text · panel)
- AHPRA Registration Type (text · panel)
- AHPRA Registration Expiry (date · panel)
- AHPRA Registration Conditions (text · panel)
- AHPRA Registration History (list · panel)
- Start API Verification (action · footer · required)
- Switch to Manual Verification (action · footer · required)
- Upload Supporting Document (action · footer)
- Edit Verification Notes (action · footer)
- Close Modal (action · footer · required)
- API Verification Progress Indicator (badge · header)
- API Error Message (text · panel)
- Retry API Verification (action · footer)
- Plan Limit Message (text · panel)
- Permission Denied Message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Verification API Loading (/doctors/:id/verify) [loading]
Fields:
- API Verification Progress Indicator (badge · header · required)
- Close Modal (action · footer · required)
Statuses: loading

### AHPRA Verification API Error (/doctors/:id/verify) [error]
Fields:
- API Error Message (text · panel · required)
- Retry API Verification (action · footer · required)
- Switch to Manual Verification (action · footer · required)
- Close Modal (action · footer · required)
Statuses: error

### AHPRA Manual Verification: Upload Docs (/doctors/:id/verify/manual-upload) [default]
Fields:
- Step Indicator (navigation-item · header · required)
- Candidate Name & AHPRA Number (text · header · required)
- Upload Supporting Documents (form-field · panel · required)
- Document Type Selector (form-field · panel)
- Upload Requirements Tooltip (tooltip · panel · required)
- Uploaded Files List (list · panel)
- Remove File Action (action · panel)
- Upload Error Badge (badge · panel)
- Empty State Illustration (text · panel)
- Next Button (action · footer · required)
- Cancel Button (action · footer · required)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · header)
- Permission Denied Banner (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Manual Verification: Add Notes (/doctors/:id/verify/manual-notes) [default]
Fields:
- Step Indicator (navigation-item · header · required)
- Candidate Name & AHPRA Number (text · header · required)
- Verification Notes Field (form-field · panel · required)
- Notes Requirements Tooltip (tooltip · panel · required)
- Empty State Illustration (text · panel)
- Next Button (action · footer · required)
- Back Button (action · footer · required)
- Cancel Button (action · footer · required)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · header)
- Permission Denied Banner (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Manual Verification: Submit for Review (/doctors/:id/verify/manual-submit) [default]
Fields:
- Step Indicator (navigation-item · header · required)
- Candidate Name & AHPRA Number (text · header · required)
- Uploaded Files Summary (list · panel · required)
- Verification Notes Summary (text · panel · required)
- Submission Confirmation Text (text · panel · required)
- Audit Log Preview (text · panel)
- Submit Button (action · footer · required)
- Back Button (action · footer · required)
- Cancel Button (action · footer · required)
- Empty State Illustration (text · panel)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · header)
- Permission Denied Banner (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Manual Verification: Manager Review Modal (/doctors/:id/verify/manual-review) [default]
Fields:
- Doctor Name (text · header · required)
- AHPRA Registration Number (text · panel · required)
- Submitted Documents (list · panel · required)
- Submission Timestamp (date · panel · required)
- Submitted By (text · panel · required)
- Verification Notes (from submitter) (text · panel)
- Manager Review Notes (form-field · panel)
- Approve Action (action · footer · required)
- Reject Action (action · footer · required)
- Close Modal Action (action · footer · required)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · panel)
- Permission Denied Banner (badge · panel)
- Empty State Message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AI-Powered Candidate Matching (/matching) [default]
Fields:
- Candidate Name (table-column · table · required)
- Specialty (table-column · table · required)
- Location (table-column · table · required)
- AHPRA Registration Status (table-column · table · required)
- AI Match Confidence (metric · table · required)
- AI Match Rationale Tooltip (tooltip · table)
- Availability Dates (table-column · table)
- Years of Experience (table-column · table)
- Shortlist Action (action · table · required)
- View Profile Action (action · table · required)
- Contact Action (action · table)
- Pagination Controls (action · footer · required)
- Filters Panel (panel · filters · required)
- Empty State Message (text · panel)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · panel)
- Permission Denied Banner (badge · panel)
Filters:
- Specialty (multi-select)
- Location (multi-select)
- Availability Date Range (date-range)
- AHPRA Registration Status (multi-select)
- Confidence Threshold (numeric-range)
- Search Candidates (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Matching Empty State (/matching) [empty]
Fields:
- Empty State Message (text · panel · required)
- Adjust Filters Action (action · panel · required)
- Add Candidate Action (action · panel)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · panel)
- Permission Denied Banner (badge · panel)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Matching Loading State (/matching) [loading]
Fields:
- Matching candidate skeleton card (text · table · required)
- Matching header skeleton (text · header)
- Matching filters skeleton (text · filters)
- Matching error message (text · panel · required)
- Retry matching action (action · panel · required)
- Plan limit reached message (text · panel · required)
- Upgrade plan action (action · panel)
- Permission denied message (text · panel · required)
- No candidates found message (text · panel)
Statuses: loading, error, plan_limit, permission_denied, empty, default

### Matching Candidate Detail Drawer (/matching/:candidateId) [default]
Fields:
- Candidate name (text · header · required)
- Candidate photo/avatar (text · header)
- Specialty (text · panel · required)
- Location (text · panel · required)
- AHPRA status badge (badge · panel · required)
- Matching confidence score (metric · panel · required)
- Contact info (masked if restricted) (text · panel · required)
- View full profile action (action · footer · required)
- Send outreach action (action · footer · required)
- Add note action (action · footer)
- Close drawer action (action · header · required)
- Candidate detail skeleton (text · panel · required)
- Candidate detail error message (text · panel · required)
- Retry candidate detail action (action · panel)
- Plan limit reached message (text · panel · required)
- Upgrade plan action (action · panel)
- Permission denied message (text · panel · required)
- Candidate not found message (text · panel · required)
Statuses: default, loading, error, plan_limit, permission_denied, empty

### Outreach Composer (/outreach) [default]
Fields:
- Message template selector (form-field · table)
- Message personalization field (form-field · table)
- Send channel selector (Email/SMS/Both) (form-field · table · required)
- Send now / Save as draft option (form-field · table · required)
- Message body field (form-field · table · required)
- Recipient(s) field (form-field · table · required)
- Send action (action · footer · required)
- Save draft action (action · footer)
- Cancel action (action · footer · required)
- Empty state message (text · panel)
- Error message (text · panel · required)
- Retry action (action · panel)
- Plan limit reached message (text · panel · required)
- Upgrade plan action (action · panel)
- Permission denied message (text · panel · required)
Statuses: default, loading, empty, error, plan_limit, permission_denied

### Message Template Selector Modal (/outreach/templates) [default]
Fields:
- Message template selector (form-field · table)
- Message personalization field (form-field · table)
- Send channel selector (Email/SMS/Both) (form-field · table · required)
- Send now / Save as draft option (form-field · table · required)
- Template search (filter · filters)
- Template preview (panel · table)
- Select template action (action · footer · required)
- Close modal action (action · header · required)
- No templates found message (text · table)
- Loading spinner (badge · table)
- Error message (text · table)
- Plan limit message (text · table)
- Permission denied message (text · table)
Filters:
- Template search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Personalization Fields Modal (/outreach/personalize) [default]
Fields:
- Message template selector (form-field · table)
- Message personalization field (form-field · table)
- Send channel selector (Email/SMS/Both) (form-field · table · required)
- Send now / Save as draft option (form-field · table · required)
- Personalization validation tooltip (tooltip · table)
- Save personalization action (action · footer · required)
- Cancel action (action · footer · required)
- No personalization fields message (text · table)
- Loading spinner (badge · table)
- Error message (text · table)
- Plan limit message (text · table)
- Permission denied message (text · table)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Send Outreach Confirmation Modal (/outreach/send-confirm) [default]
Fields:
- Message template selector (form-field · table)
- Message personalization field (form-field · table)
- Send channel selector (Email/SMS/Both) (form-field · table · required)
- Send now / Save as draft option (form-field · table · required)
- Consent/opt-out checkbox (form-field · table · required)
- Send action (action · footer · required)
- Save as draft action (action · footer · required)
- Cancel action (action · footer · required)
- No message content message (text · table)
- Loading spinner (badge · table)
- Error message (text · table)
- Plan limit message (text · table)
- Permission denied message (text · table)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Outreach Composer Error State (/outreach) [error]
Fields:
- Message template selector (form-field · table)
- Message personalization field (form-field · table)
- Send channel selector (Email/SMS/Both) (form-field · table · required)
- Send now / Save as draft option (form-field · table · required)
- Error message banner (text · header · required)
- Retry send action (action · footer · required)
- Plan limit banner (text · header · required)
- Permission denied banner (text · header · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Follow-Up Task List (/follow-ups) [default]
Fields:
- Follow-up task due date (form-field · table · required)
- Follow-up task priority (form-field · table · required)
- Follow-up task status (form-field · table · required)
- Follow-up task notes (form-field · table)
- Follow-up task assignee (form-field · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Follow-Up List Empty State (/follow-ups) [empty]
Fields:
- Status (filter · filters)
- Assignee (filter · filters)
- Due date (filter · filters)
- Search (filter · filters)
- Follow-up table (table-column · table · required)
- Follow-up table skeleton (table-column · table)
- Empty state illustration (text · panel)
- Empty state prompt (text · panel · required)
- Add follow-up action (action · panel · required)
- Error message banner (text · header · required)
- Retry load action (action · header · required)
- Plan limit banner (text · header · required)
- Permission denied banner (text · header · required)
Filters:
- Status (multi-select)
- Assignee (multi-select)
- Due date (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Follow-Up List Loading State (/follow-ups) [loading]
Fields:
- Status (filter · filters)
- Assignee (filter · filters)
- Due date (filter · filters)
- Search (filter · filters)
- Follow-up table (table-column · table · required)
- Follow-up table skeleton (table-column · table)
- Empty state illustration (text · panel)
- Empty state prompt (text · panel · required)
- Add follow-up action (action · panel · required)
- Error message banner (text · header · required)
- Retry load action (action · header · required)
- Plan limit banner (text · header · required)
- Permission denied banner (text · header · required)
Filters:
- Status (multi-select)
- Assignee (multi-select)
- Due date (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add Follow-Up Modal (/follow-ups/add) [default]
Fields:
- Due Date (form-field · form · required)
- Priority (form-field · form · required)
- Status (form-field · form · required)
- Notes (form-field · form)
- Assignee (form-field · form · required)
- Related Candidate/Brief (form-field · form)
- Save (action · footer · required)
- Cancel (action · footer · required)
- Error Message (text · form)
- Plan Limit Message (text · form)
- Permission Denied Message (text · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Edit Follow-Up Modal (/follow-ups/:id/edit) [default]
Fields:
- Due Date (form-field · form · required)
- Priority (form-field · form · required)
- Status (form-field · form · required)
- Notes (form-field · form)
- Assignee (form-field · form · required)
- Related Candidate/Brief (form-field · form)
- Save Changes (action · footer · required)
- Cancel (action · footer · required)
- Error Message (text · form)
- Plan Limit Message (text · form)
- Permission Denied Message (text · form)
- Empty State Message (text · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Overdue Follow-Ups Drawer (/follow-ups/overdue) [default]
Fields:
- Assignee (filter · filters)
- Priority (filter · filters)
- Overdue Follow-Up Table (table-column · table · required)
- Mark as Completed (action · table)
- Edit (action · table)
- Dismiss (action · table)
- Drawer Close (action · footer · required)
- Error Message (text · panel)
- Plan Limit Message (text · panel)
- Permission Denied Message (text · panel)
- Empty State Message (text · panel)
Filters:
- Assignee (multi-select)
- Priority (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Reporting Dashboard (/reporting) [default]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · toolbar)
- Date range (filter · filters · required)
- Total placements (metric · panel · required)
- Active briefs (metric · panel · required)
- Candidates sourced (metric · panel · required)
- Candidates verified (metric · panel · required)
- Placements by specialty (chart) (chart-series · panel · required)
- Placements by location (chart) (chart-series · panel · required)
- Monthly placements (chart) (chart-series · panel · required)
- PDF export button (role-restricted) (action · toolbar)
- Data masking badge (if reporting user) (badge · header)
- Export tooltip (if export not permitted) (tooltip · toolbar)
- Empty state prompt (text · panel · required)
- Loading skeletons (panel · panel · required)
- Error message (text · panel · required)
- Plan limit banner (badge · header · required)
- Permission denied banner (badge · header · required)
Filters:
- Reporting dashboard filters (multi-select)
- Date range (date-range)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Reporting Dashboard Empty State (/reporting) [empty]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Date range (filter · filters · required)
- Empty state prompt (text · panel · required)
Filters:
- Reporting dashboard filters (multi-select)
- Date range (date-range)
Statuses: empty

### Reporting Dashboard Loading State (/reporting) [loading]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Date range (filter · filters · required)
- Loading skeletons (panel · panel · required)
Filters:
- Reporting dashboard filters (multi-select)
- Date range (date-range)
Statuses: loading

### Export Report Modal (/reporting/export) [default]
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · footer)
- PDF export button (role-restricted) (action · footer)
- Export format selector (form-field · panel · required)
- Include masked fields toggle (if Reporting User) (toggle · panel)
- Export summary (row count, columns, applied filters) (text · panel)
- Download link (post-export) (action · footer)
- Export in progress indicator (badge · footer)
- Export error message (text · footer)
- Plan limit reached message (text · footer)
- Permission denied message (text · footer)
Filters:
- Reporting dashboard filters (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Admin Area (/admin) [default]
Fields:
- Users tab (navigation-item · header · required)
- Roles tab (navigation-item · header · required)
- Audit Log tab (navigation-item · header · required)
- Data Retention tab (navigation-item · header · required)
- Workflow Diagrams tab (navigation-item · header)
- Tab content area (panel · panel · required)
- Empty state message (text · panel)
- Loading indicator (badge · panel)
- Error message (text · panel)
- Plan limit reached message (text · panel)
- Permission denied message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### User Management List (/admin/users) [default]
Fields:
- User search (filter · filters)
- Role filter (filter · filters)
- Status filter (filter · filters)
- User table: Name (table-column · table · required)
- User table: Email (table-column · table · required)
- User table: Role (table-column · table · required)
- User table: Status (table-column · table · required)
- User table: Last login (table-column · table)
- User table: Actions (action · table · required)
- Invite user button (action · toolbar · required)
- Empty state message (text · panel)
- Loading indicator (badge · panel)
- Error message (text · panel)
- Plan limit reached message (text · panel)
- Permission denied message (text · panel)
Filters:
- User search (search)
- Role filter (multi-select)
- Status filter (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add User Modal (/admin/users/add) [default]
Fields:
- Email Address (form-field · form · required)
- Full Name (form-field · form · required)
- Role (form-field · form · required)
- Send Invitation Email (form-field · form)
- Add User (Submit) (action · footer · required)
- Cancel (action · footer · required)
- Error Message (text · form)
- Plan Limit Message (text · form)
- Permission Denied Message (text · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Edit User Modal (/admin/users/:id/edit) [default]
Fields:
- Email Address (form-field · form · required)
- Full Name (form-field · form · required)
- Role (form-field · form · required)
- Account Status (form-field · form · required)
- Reset Password (action · footer)
- Delete User (action · footer)
- Save Changes (action · footer · required)
- Cancel (action · footer · required)
- Error Message (text · form)
- Plan Limit Message (text · form)
- Permission Denied Message (text · form)
- User Not Found Message (text · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Role-Permission Matrix Screen (/admin/roles) [default]
Fields:
- Role Name (Column) (table-column · table · required)
- Permission Name (Row) (table-column · table · required)
- Permission Category (Row Group) (table-column · table)
- Permission Toggle (Cell) (action · table · required)
- Save Changes (action · toolbar · required)
- Reset to Default (action · toolbar)
- Role (filter · filters)
- Permission Category (filter · filters)
- Search Permission (filter · filters)
- Loading Spinner (badge · panel)
- Error Message (text · panel)
- Plan Limit Message (text · panel)
- Permission Denied Message (text · panel)
- Empty State Message (text · panel)
Filters:
- Role (multi-select)
- Permission Category (multi-select)
- Search Permission (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Audit Log Screen (/admin/audit) [default]
Fields:
- User (filter · filters · required)
- Action (filter · filters · required)
- Date Range (filter · filters · required)
- Object (filter · filters · required)
- Search (filter · filters)
- Timestamp (table-column · table · required)
- User (Table) (table-column · table · required)
- Action (Table) (table-column · table · required)
- Object Type (table-column · table · required)
- Object Name/ID (table-column · table · required)
- Details (table-column · table)
- IP Address (table-column · table)
- Export CSV (action · toolbar · required)
- Pagination (action · footer · required)
- Compliance Badge (badge · header)
- Empty State Illustration (text · table)
- Loading Spinner (text · table)
- Error Message (text · table)
- Plan Limit Banner (badge · header)
- Permission Denied Message (text · table)
Filters:
- User (multi-select)
- Action (multi-select)
- Date Range (date-range)
- Object (multi-select)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Data Retention & Deletion Controls (/admin/retention) [default]
Fields:
- Data Type (filter · filters · required)
- Retention Period (filter · filters · required)
- Status (filter · filters)
- Retention Rule Name (table-column · table · required)
- Data Type (Table) (table-column · table · required)
- Retention Period (Table) (table-column · table · required)
- Auto-Delete Enabled (table-column · table)
- Next Scheduled Deletion (table-column · table)
- Last Deletion Run (table-column · table)
- Pending Deletion Count (table-column · table)
- Bulk Delete Action (action · toolbar · required)
- Compliance Warning (badge · header)
- Deletion Log Table (table-column · table · required)
- Export Deletion Log (action · toolbar · required)
- Pagination (action · footer · required)
- Empty State Illustration (text · table)
- Loading Spinner (text · table)
- Error Message (text · table)
- Plan Limit Banner (badge · header)
- Permission Denied Message (text · table)
Filters:
- Data Type (multi-select)
- Retention Period (numeric-range)
- Status (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Admin Permission Error State (/admin) [error]
Fields:
- Permission Denied Illustration (text · header · required)
- Permission Denied Message (text · header · required)
- Return to Dashboard Action (action · footer · required)
Statuses: permission_denied

## Requirements
- Revert all recent UI changes that stripped visual styling, color, card backgrounds, borders, shadows, and component treatments.
- Restore and enforce the locked design system: use bg-card, border-border (1px), shadow-sm, rounded-lg for cards/panels; correct accent color (hsl(243 75% 59%)) for primary actions, active nav, focus rings, and key metrics only.
- Ensure all typography matches: Inter/Geist, page titles (text-2xl font-semibold), section headings (text-base or text-lg font-medium), body (text-sm), meta/labels (text-xs text-muted-foreground uppercase tracking-wide).
- Apply correct spacing: 8px scale, page padding p-8 (desktop), p-4 (mobile/tablet), card padding p-6 (dashboard widgets), p-4 (default).
- Restore button styles: primary (accent bg, white text), secondary (neutral bg, accent border/text), ghost (transparent bg, accent text on hover), all rounded-md.
- Ensure all tables use sticky headers, hairline row dividers, no zebra stripes, and comfortable row height.
- Use lucide-react icons (stroke only, correct sizing) throughout.
- All interactive elements must have visible focus-visible rings and subtle motion (150-200ms ease transitions).
- Do not change the layout, navigation, or add/remove any pages or navigation items.
- Use only existing component patterns and design system tokens from the Design Memory.

## Design Continuity Rules
- Do not redesign the existing UI.
- Do not recreate the whole application.
- Only apply the requested change.
- Preserve current layout, theme, typography, spacing, colors, and components.
- Reuse existing components wherever possible.
- Only modify files required for this task.
- Do not change unrelated screens.
- Do not introduce a new design system.
- Do not change navigation except where explicitly required.

## Technical Rules
- Create a new branch from the repository default branch.
- Do not push directly to main/default branch.
- Run lint/build before opening PR.
- Follow existing project structure.
- Follow existing coding conventions.
- Keep files under 400 lines where possible.
- Use proper TypeScript interfaces/types.
- Base branch: main
- PR target: main
- Commit or merge tokens.css into the app theme (e.g. globals.css / Tailwind theme).

## Acceptance Criteria
- All screens, widgets, tables, cards, modals, and navigation match the locked premium SaaS visual style with no wireframe appearance.
- No layout, navigation, or page structure changes are introduced.
- All interactive elements have visible focus rings and correct motion.
- Lint passes
- Build passes
- PR opened to default branch
- Screens implement the page-by-page data points inventory (fields, filters, statuses) from this issue.
- UI follows the project design guidelines (DESIGN_SYSTEM.md / tokens.css when present); no inventing a new palette or shell.

## Agent Instructions
Create a new branch named:
`ai-build/issue-13-restore-premium-saas-visual-styling-to-workspace`

Base branch: `main`
PR target: `main`

Implement this issue only.
Open a Pull Request to the repository default branch.
PR title should be:
AI Build: Restore Premium SaaS Visual Styling to Workspace Dashboard UI

PR body should include:
- Summary
- Files changed
- Validation results
- Screenshots if UI was changed
- Closes #13

Do not redesign the existing UI.
Do not recreate the whole application.
Only apply the requested change.
Reuse the existing design system, components, layout, spacing, colors, typography, and interaction patterns.
When design guidelines are provided, treat them as the visual source of truth over any generic aesthetic.
When page-by-page data points are provided, use them as the source of truth for form fields, tables, filters, and statuses.