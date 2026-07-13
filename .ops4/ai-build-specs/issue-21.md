# AI Build Task

## Objective
Update every screen and modal to fully surface all required data points, filters, columns, badges, and status variants as specified in the latest Page by Page Data Points and Design Brain guidelines. Preserve the existing layout, navigation, and component patterns, enriching each screen to match the updated requirements without redesigning or altering the app shell.

## Context
## decision:approved
- id=beb9c4f6-e7c1-4dc0-93d6-4f7147dd4845 title="Design patch: Workspace Dashboard" confidence=n/a description="Enrich every screen to match the updated page-by-page data points and updated design guidelines"
- id=9240d763-d94d-439a-aa5e-6395e94b2504 title="Design patch: Workspace Dashboard" confidence=n/a description="Based on the new page by page data points and updated design guidelines, update our app ui entirely."
- id=a07f483e-f20b-4313-88b0-8b6180252f6f title="Discovery feedback: Page by Page Data Points" confidence=n/a description="review and regenerate the Page by Page Data Points again"
- id=99c5f4cc-ba4b-4ec2-8191-439cf5aef7a9 title="Design patch: Workspace Dashboard" confidence=n/a description="i dont like the flow. 

Lets create a landing page. it will have link to login and register page. from login/registration page we will go inside the application.

Take idea from the application idea t"
- id=80e97b5c-f61e-4fa9-acd2-147c9e5ed26e title="Design patch: Workspace Dashboard" confidence=n/a description="based on the updated design system, update our ui/ux"
- id=5b86e07c-0477-4be2-bca7-a186060112ce title="Design patch: Workspace Dashboard" confidence=n/a description="based on the 14 guidelines in Design Brain — Workspace Dashboard, update our UI/UX"
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
- id=c8cefde2-e0e0-49ef-b7fe-6f729a4b0698 title="Authentication: Secure email/password with RBAC for MVP" confidence=1.00 description="Client confirmed secure login and RBAC are required, SSO is deferred."
- id=6e279e79-646e-40ba-a93c-76d0d954f032 title="Analytics provider to be decided during technical planning" confidence=1.00 description="Analytics implementation does not affect UI design."
- id=abfbd06f-1a78-466b-a03a-65db311f3d2c title="Primary platform: Desktop web, responsive for tablet/mobile" confidence=1.00 description="Explicitly stated as the main design priority, with responsive support for other devices."
- id=2fcd678d-b6d7-42f3-be89-917d712b2ebd title="Regulatory, privacy, and security requirements (Australian Privacy Principles, encryption, audit logs, consent, etc.)" confidence=1.00 description="Explicitly listed as MVP requirements."
- id=d0d19638-d6e9-47a2-b473-cb22db84a729 title="Reporting User data masking" confidence=1.00 description="Client specified which fields must be hidden from Reporting Users."
- id=1164ce40-61e7-40d5-8dbd-3740e626c076 title="Billing, invoicing, payroll, and revenue features out of scope for MVP" confidence=1.00 description="Client explicitly excluded all commercial/financial workflows from MVP."
- id=24594e12-5745-4e4d-87e2-b2257005c636 title="Data retention and deletion policies to comply with Australian privacy requirements" confidence=1.00 description="Client confirmed compliance details will be finalized during technical planning."
- id=7d0884a2-3eec-45f6-8d04-4951f63b58ac title="API keys and integration secrets managed securely (e.g., AWS Secrets Manager)" confidence=1.00 description="Standard implementation assumption, does not affect UI."
- id=4b969a6b-6447-4337-bf03-532e1be211ed title="Encryption, audit logging, and security controls per AWS/industry best practices" confidence=1.00 description="Client confirmed these are implementation details; UI only needs to expose relevant audit information."
- id=e6a6fc5a-348a-4875-87bf-7b13710b3080 title="Doctors and clients do not have direct access for MVP" confidence=1.00 description="Client confirmed that only internal users (recruiters, managers, admins, reporting users) will access the platform in MVP."
- id=59664c38-90a2-48a9-88b6-7c647bd9105a title="Role-based access control" confidence=1.00 description="Explicitly required for MVP and security."
- id=14bd4291-1c57-4cc5-baec-eb40be9228a6 title="English-only for MVP" confidence=1.00 description="Explicitly stated as the only supported language for v1."
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
## user_role:approved
- id=82f1b9ea-661b-45a2-bf5a-83ba1225f4de title="Recruitment Manager" confidence=1.00 description="Client provided detailed tasks, screens, and permissions for this role."
- id=408530a6-9fe0-4d6d-9c4d-7516e922e1b5 title="Administrator" confidence=1.00 description="Client provided detailed tasks, screens, and permissions for this role."
- id=5f8813ff-6c8a-4537-9746-424bbab65933 title="Recruiter" confidence=1.00 description="Recruiters are the primary users, as indicated by 'recruiter dashboard' and workflow focus."
- id=7104516d-c5a6-4f68-a0d0-5fd277194883 title="Doctor" confidence=0.70 description="Doctors are the candidates being managed, may have limited or no direct access."
- id=9b8909cf-a9e0-4406-a001-b443a494c54c title="Client" confidence=0.70 description="Client brief management implies a client role, possibly with access to briefs or status."
- id=091bbfca-4dde-47d8-a7dc-0c04ef2ca123 title="Read-only or Reporting User" confidence=1.00 description="Can view reports and possibly candidate data, but cannot edit."
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
Screens: Login Error State, Password Reset Request, Password Reset Confirmation, Permission Denied Screen, Dashboard Loading State, Notification Drawer, Brief List Loading State, Client Brief Detail, Edit Brief Modal, Brief Activity Timeline Drawer, Add New Brief Modal, Doctor List Loading State, Add Doctor Modal, CV Upload Wizard: Upload Loading, CV Upload Wizard: Parsing Error, CV Upload Wizard: Duplicate Detection, CV Upload Wizard: Finalize & Save, Doctor Candidate Profile, Edit Doctor Profile Modal, Candidate Activity Timeline Drawer, AHPRA Verification API Error, AHPRA Manual Verification: Upload Docs, AHPRA Manual Verification: Add Notes, AHPRA Manual Verification: Submit for Review, AHPRA Manual Verification: Manager Review Modal, Matching Loading State, Matching Candidate Detail Drawer, Outreach Composer Error State, Message Template Selector Modal, Personalization Fields Modal, Send Outreach Confirmation Modal, Follow-Up List Loading State, Add Follow-Up Modal, Edit Follow-Up Modal, Overdue Follow-Ups Drawer, Reporting Dashboard Empty State, Admin Area, Landing Page, Registration Page
Design system: Modern, elegant, minimal premium SaaS
Components: Sidebar (collapsible, icon+label, role-aware), Topbar (breadcrumb, title, search Command, notifications Sheet, user DropdownMenu), Card (dashboard widgets, detail panels, summary cards), Table (shadcn/ui Table: sticky header, hairline dividers, comfortable row height, no zebra stripes, pagination), Badge (status, AI confidence, AHPRA, unread indicators), Tabs (detail/candidate/timeline navigation), Sheet/Drawer (notification drawer, timeline drawers, matching candidate detail, overdue follow-ups), Dialog/Modal (add/edit forms, confirmation, template/personalization selectors, AHPRA verification steps), Select (filters, dropdowns), Input (search, text, number, date, password), DropdownMenu (user menu, quick actions), Skeleton (loading placeholders for cards, tables, lists)
Fourteen Aperture UI/UX guideline documents are included for tokens/a11y — locked build prompt + screen blueprints win for composition.
Colors: Neutral base: zinc/slate (light bg: #FFFFFF, dark bg: #09090B); Surface: bg-card, border-border (1px hairline border); Accent: indigo/violet hsl(243 75% 59%) for primary actions, active nav, focus rings, key metrics; No gradients or rainbow palettes; Text: text-foreground, text-muted-foreground for meta/labels
Typography: Font families: Inter, Geist (system fallback); Page title: text-2xl, font-semibold, tracking-tight; Section headings: text-base or text-lg, font-medium; Body: text-sm; Meta/labels: text-xs, text-muted-foreground, uppercase, tracking-wide
Spacing: 8px scale for all spacing; Page padding: p-6 (default), p-8 (desktop), p-4 (mobile/tablet); Card padding: p-4 (default), p-6 (dashboard widgets); Grid gap: gap-4, gap-6

## 1. Locked Design Brain build prompt (PRIMARY — implement verbatim)
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

## 2. Screen composition blueprints

Screen composition blueprints (REQUIRED layouts — do not collapse):
- `.ops4/design-system/screens/login-screen.md`
- `.ops4/design-system/screens/login-loading-state.md`
- `.ops4/design-system/screens/login-error-state.md`
- `.ops4/design-system/screens/password-reset-request.md`
- `.ops4/design-system/screens/password-reset-confirmation.md`
- `.ops4/design-system/screens/permission-denied-screen.md`
- `.ops4/design-system/screens/recruiter-dashboard.md`
- `.ops4/design-system/screens/dashboard-loading-state.md`
- `.ops4/design-system/screens/dashboard-empty-state.md`
- `.ops4/design-system/screens/notification-drawer.md`
- `.ops4/design-system/screens/client-brief-list.md`
- `.ops4/design-system/screens/brief-list-loading-state.md`
- `.ops4/design-system/screens/brief-list-empty-state.md`
- `.ops4/design-system/screens/client-brief-detail.md`
- `.ops4/design-system/screens/edit-brief-modal.md`
- `.ops4/design-system/screens/brief-activity-timeline-drawer.md`
- `.ops4/design-system/screens/add-new-brief-modal.md`
- `.ops4/design-system/screens/doctor-database-list.md`
- `.ops4/design-system/screens/doctor-list-loading-state.md`
- `.ops4/design-system/screens/doctor-list-empty-state.md`
- `.ops4/design-system/screens/add-doctor-modal.md`
- `.ops4/design-system/screens/cv-upload-wizard-upload-step.md`
- `.ops4/design-system/screens/cv-upload-wizard-upload-loading.md`
- `.ops4/design-system/screens/cv-upload-wizard-parsing-error.md`
- `.ops4/design-system/screens/cv-upload-wizard-duplicate-detection.md`
- `.ops4/design-system/screens/cv-upload-wizard-finalize-save.md`
- `.ops4/design-system/screens/doctor-candidate-profile.md`
- `.ops4/design-system/screens/edit-doctor-profile-modal.md`
- `.ops4/design-system/screens/candidate-activity-timeline-drawer.md`
- `.ops4/design-system/screens/ahpra-verification-api-error.md`
- `.ops4/design-system/screens/ahpra-manual-verification-upload-docs.md`
- `.ops4/design-system/screens/ahpra-manual-verification-add-notes.md`
- `.ops4/design-system/screens/ahpra-manual-verification-submit-for-review.md`
- `.ops4/design-system/screens/ahpra-manual-verification-manager-review-modal.md`
- `.ops4/design-system/screens/matching-loading-state.md`
- `.ops4/design-system/screens/matching-candidate-detail-drawer.md`
- `.ops4/design-system/screens/outreach-composer.md`
- `.ops4/design-system/screens/message-template-selector-modal.md`
- `.ops4/design-system/screens/personalization-fields-modal.md`
- `.ops4/design-system/screens/send-outreach-confirmation-modal.md`
- `.ops4/design-system/screens/outreach-composer-error-state.md`
- `.ops4/design-system/screens/follow-up-list-loading-state.md`
- `.ops4/design-system/screens/add-follow-up-modal.md`
- `.ops4/design-system/screens/edit-follow-up-modal.md`
- `.ops4/design-system/screens/overdue-follow-ups-drawer.md`
- `.ops4/design-system/screens/reporting-dashboard-empty-state.md`
- `.ops4/design-system/screens/admin-area.md`
- `.ops4/design-system/screens/landing-page.md`
- `.ops4/design-system/screens/registration-page.md`
# Screen blueprint: Login Screen

Route: `/login`
Layout: **single-column-form**

## Required regions
- **centered-panel**: Primary authentication form region — components: LogoHeader, EmailInput, PasswordInput, ShowPasswordToggle, LoginButton, ForgotPasswordLink, SessionExpiryTooltip, ErrorAlert, PlanLimitBanner, PermissionDeniedBanner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
|   [Logo]      |
| [Email]       |
| [Password]    |
| [Show/Hide]   |
| [Login Btn]   |
| [Forgot?]     |
| [Error/Plan]  |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Login Loading State

Route: `/login`
Layout: **single-column-form**

## Required regions
- **centered-panel**: Primary authentication form region (disabled) with loading spinner overlay — components: LogoHeader, EmailInput (disabled), PasswordInput (disabled), ShowPasswordToggle (disabled), LoginButton (disabled), ForgotPasswordLink (disabled), LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
|   [Logo]      |
| [Email] (d)   |
| [Password](d) |
| [Show/Hide](d)|
| [Login Btn](d)|
| [Forgot?](d)  |
| [Spinner]     |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Login Error State

Route: `/login`
Layout: **single-column-form**

## Required regions
- **centered-panel**: Primary authentication form region with error alert — components: LogoHeader, EmailInput, PasswordInput, ShowPasswordToggle, LoginButton, ForgotPasswordLink, ErrorAlert

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
|   [Logo]      |
| [Email]       |
| [Password]    |
| [Show/Hide]   |
| [Login Btn]   |
| [Forgot?]     |
| [ErrorAlert]  |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Password Reset Request

Route: `/login/reset`
Layout: **single-column-form**

## Required regions
- **panel**: Main modal content for password reset request — components: PasswordResetInstructions, EmailInput
- **footer**: Action buttons for modal — components: SubmitButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Instructions]|
| [Email]       |
|───────────────|
| [Submit][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Password Reset Confirmation

Route: `/login/reset/confirm`
Layout: **single-column-form**

## Required regions
- **panel**: Main modal content for password reset confirmation — components: NewPasswordInput, ConfirmNewPasswordInput, PasswordRequirementsTooltip
- **footer**: Action buttons for modal — components: SubmitButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [NewPassword] |
| [ConfirmPwd]  |
| [PwdReqsTip]  |
|───────────────|
| [Submit][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Permission Denied Screen

Route: `/forbidden`
Layout: **single-column-form**

## Required regions
- **header**: Branded error headline — components: PermissionDeniedHeadline
- **panel**: Error description and guidance — components: PermissionDeniedDescription, PlanLimitMessage, ErrorMessage, LoadingSpinner
- **footer**: Action buttons for navigation/support — components: ReturnToDashboardButton, ContactSupportLink

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Denied Head] |
| [Desc/Msg]    |
| [Plan/Error]  |
| [Spinner]     |
|───────────────|
| [Return][Help]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Recruiter Dashboard

Route: `/dashboard`
Layout: **dashboard-grid**

## Required regions
- **sidebar**: Navigation and workspace context — components: SidebarNav (role-aware, collapsible), ActiveNavHighlight
- **topbar**: Page title, search, user menu — components: Breadcrumbs, PageTitle, SearchInput, UserAvatarMenu
- **main**: Dashboard widgets and content — components: ReportingDashboardFilters, PlanLimitBanner, AssignedBriefsWidget, OpenTasksWidget, NotificationsWidget, RecentActivityTimeline, QuickLinksPanel, UnreadNotificationsBadge, OverdueTasksBadge, DashboardEmptyStateIllustration, DashboardEmptyStateCTA, DashboardSkeletonLoaders, DashboardErrorMessage, DashboardRetryButton, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌────sidebar────┬────────────dashboard grid────────────┐
| [nav]        | [title][search][user]                |
|              | [widgets: briefs|tasks|notifs|links] |
|              | [timeline]                            |
└───────────────┴──────────────────────────────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Dashboard Loading State

Route: `/dashboard`
Layout: **dashboard-grid**

## Required regions
- **sidebar**: Navigation and workspace context — components: SidebarNav (role-aware, collapsible)
- **topbar**: Page title, search, user menu — components: Breadcrumbs, PageTitle, SearchInput, UserAvatarMenu
- **main**: Dashboard widgets and content — components: ReportingDashboardFilters, PlanLimitBanner, DashboardSkeletonLoaders, DashboardErrorMessage, DashboardRetryButton, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌────sidebar────┬────────────dashboard grid────────────┐
| [nav]        | [title][search][user]                |
|              | [skeleton widgets]                   |
└───────────────┴──────────────────────────────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Dashboard Empty State

Route: `/dashboard`
Layout: **dashboard-grid**

## Required regions
- **sidebar**: Navigation and workspace context — components: SidebarNav (role-aware, collapsible)
- **topbar**: Page title, search, user menu — components: Breadcrumbs, PageTitle, SearchInput, UserAvatarMenu
- **main**: Dashboard widgets and content — components: ReportingDashboardFilters, PlanLimitBanner, DashboardEmptyStateIllustration, DashboardEmptyStateCTA, DashboardSkeletonLoaders, DashboardErrorMessage, DashboardRetryButton, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌────sidebar────┬────────────dashboard grid────────────┐
| [nav]        | [title][search][user]                |
|              | [empty illustration + CTA]           |
└───────────────┴──────────────────────────────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Notification Drawer

Route: `/dashboard/notifications`
Layout: **drawer**

## Required regions
- **drawer-header**: Drawer title, close button, and filters — components: DrawerTitle, DrawerCloseButton, NotificationTypeFilter, UnreadOnlyFilter
- **drawer-content**: Scrollable notification list, grouped by date/type — components: NotificationGroupHeader, NotificationList, NotificationTypeBadge, NotificationTimestamp, NotificationContent, UnreadIndicator, MarkAsReadAction, GoToRelatedItemAction, NotificationTooltip
- **drawer-status**: Status banners/messages for empty, error, plan limit, or permission denied states — components: EmptyStateMessage, ErrorMessage, RetryAction, PlanLimitMessage, PermissionDeniedMessage, NotificationListSkeleton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌─────────────main─────────────┬─notif drawer─┐
|                             | [header]     |
|                             | [filters]    |
|                             | [notif list] |
|                             | [status]     |
└─────────────────────────────┴──────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Client Brief List

Route: `/briefs`
Layout: **two-column-main-rail**

## Required regions
- **main-content**: Table of client briefs with filters and actions — components: SearchBriefsInput, BriefStatusFilter, AssignedRecruiterFilter, DateCreatedFilter, BriefTable, TablePagination
- **table**: Briefs data table with columns and quick actions — components: BriefTitle, ClientName, BriefStatusBadge, AssignedRecruiter, DateCreated, OpenPositions, AIMatchConfidence, AHPRAStatus, QuickActions, BriefTooltip
- **status-panel**: Status banners/messages for empty, error, plan limit, or permission denied states — components: EmptyStateMessage, CreateNewBriefAction, TableLoadingSkeleton, ErrorMessage, RetryAction, PlanLimitMessage, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters + table | status panel |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Brief List Loading State

Route: `/briefs`
Layout: **two-column-main-rail**

## Required regions
- **main**: Display brief list table or state variant (skeleton, empty, error, plan limit, permission denied). — components: BriefListSkeletonRows, BriefTable, EmptyStateMessage, ErrorMessage, PlanLimitMessage, PermissionDeniedMessage
- **toolbar**: Table-level actions and filters (when not loading/empty/plan limit/permission denied). — components: CreateNewBriefAction, RetryAction, UpgradePlanAction

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| skeleton table | toolbar |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Brief List Empty State

Route: `/briefs`
Layout: **two-column-main-rail**

## Required regions
- **main-content**: Empty state panel with filters and create action — components: EmptyStateMessage, CreateNewBriefAction, SearchBriefsInput, BriefStatusFilter, AssignedRecruiterFilter, DateCreatedFilter
- **status-panel**: Status banners/messages for loading, error, plan limit, or permission denied states — components: TableLoadingSkeleton, ErrorMessage, RetryAction, PlanLimitMessage, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| empty panel | status panel |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Client Brief Detail

Route: `/briefs/:id`
Layout: **master-detail**

## Required regions
- **main**: Display brief header, details, and tabbed content (details, candidates, timeline). — components: BriefHeaderCard, BriefTitle, ClientName, Location, Specialty, StatusBadge, AssignedRecruiter, OpenPositions, CreatedDate, BriefNotes, EditBriefAction, DeleteBriefAction, Tabs: Details|Candidates|Timeline
- **tab-content**: Show tab-specific content: details, candidate list, or activity timeline. — components: AICandidateMatchList, CandidateStatus, CandidateAssignment, CandidateAIExtractedFieldIndicator, CandidateOriginalCVFile, AHPRARegistrationNumber, VerificationStatus, VerificationDate, VerificationSource, VerificationSupportingDocs, VerificationNotes, FollowUpTaskList, AddFollowUpTaskAction, ActivityTimeline, EmptyCandidateListMessage, EmptyTimelineMessage, AddCandidateAction
- **state-variant**: Display skeletons, error, plan limit, or permission denied messages as overlays or in main region. — components: BriefDetailSkeleton, TabSkeletons, CandidateListSkeleton, ErrorMessage, RetryAction, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| brief header | tab content |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Edit Brief Modal

Route: `/briefs/:id/edit`
Layout: **single-column-form**

## Required regions
- **form-panel**: Edit brief details, requirements, and assignment. — components: BriefTitleInput, ClientNameInput, LocationInput, SpecialtyInput, StatusSelect, AssignedRecruiterSelect, OpenPositionsInput, BriefNotesTextarea
- **footer**: Form actions. — components: SaveAction, CancelAction
- **state-variant**: Display loading spinner, error, plan limit, or permission denied messages. — components: LoadingSpinner, ErrorMessage, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Edit Fields] |
|───────────────|
| [Save][Cancel]|
| [Status Msgs] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Brief Activity Timeline Drawer

Route: `/briefs/:id/timeline`
Layout: **drawer**

## Required regions
- **filters**: Filter and search activity timeline — components: SearchActivityInput, ActivityTypeSelect, DateRangePicker, UserSelect
- **timeline-list**: Chronological activity log — components: ActivityTimestamp, ActivityType, ActivityDescription, PerformedBy, LinkedCandidate, LinkedCommunication, StatusChangeBadge, AHPRAStatusBadge, NoteContent, AttachmentIcon, AIGeneratedNoteBadge, DownloadActivityLog

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | timeline drawer (filters + log) |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Add New Brief Modal

Route: `/briefs/add`
Layout: **single-column-form**

## Required regions
- **form**: Input fields for new brief — components: ClientNameInput, BriefTitleInput, RoleTypeSelect, SpecialtyInput, LocationInput, StartDatePicker, EndDatePicker, EmploymentTypeSelect, NumberOfPositionsInput, BriefDescriptionTextarea, RequirementsTextarea, NotesTextarea, AssignedRecruiterSelect
- **footer**: Form actions — components: SaveBriefButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Add Fields]  |
|───────────────|
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Doctor Database List

Route: `/doctors`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Advanced search and filtering — components: SearchDoctorsInput, SpecialtySelect, LocationSelect, AHPRAStatusSelect, EmploymentTypeSelect, AvailabilitySelect, DuplicateStatusToggle, GeospatialSearchToggle, SavedFiltersDropdown
- **table**: Doctor candidate list — components: DoctorName, SpecialtyColumn, LocationColumn, AHPRAStatusBadge, EmploymentTypeColumn, AvailabilityColumn, DuplicateBadge, AIGeneratedNotesBadge, ProfileActions, BulkSelect, ExportListAction

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | doctor table |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Doctor List Loading State

Route: `/doctors`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Always-visible contextual filters for doctor search (disabled during loading) — components: SearchInput (disabled), SpecialtySelect (disabled), LocationSelect (disabled), AHPRAStatusSelect (disabled), AvailabilitySelect (disabled)
- **main-panel**: Loading skeleton for doctor table and spinner — components: DoctorTableSkeleton, LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters (d) | skeleton table |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Doctor List Empty State

Route: `/doctors`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Always-visible contextual filters for doctor search — components: SearchInput, SpecialtySelect, LocationSelect, AHPRAStatusSelect, AvailabilitySelect
- **main-panel**: Empty state illustration, message, and primary action — components: EmptyStateIllustration, EmptyStateMessage, AddDoctorButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | empty illustration + CTA |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Add Doctor Modal

Route: `/doctors/add`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Add doctor via CV upload or manual entry, with duplicate detection and error handling — components: UploadCVField, ManualEntryToggle, FirstNameInput, LastNameInput, EmailInput, PhoneInput, SpecialtyInput, LocationInput, AHPRAInput, AvailabilitySelect, UploadProgressBar, DuplicateDetectionBanner, DuplicateResolutionModal, ContinueButton, CancelButton, LoadingSpinner, ErrorMessage, RetryButton, PlanLimitMessage, UpgradePlanButton, PermissionDeniedMessage, InvalidUploadMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [CV/Manual]   |
| [Fields]      |
| [Progress]    |
| [Dup/Error]   |
| [Continue][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: CV Upload Wizard: Upload Step

Route: `/doctors/add/cv-upload`
Layout: **single-column-form**

## Required regions
- **header**: Wizard navigation and context — components: StepIndicator, PageTitle, PlanLimitBanner, PermissionDeniedBanner
- **panel**: File upload interaction and requirements — components: UploadArea, FileRequirementsTooltip, SupportedFileTypesBadge, MaxFileSizeTooltip, ProgressBar, ErrorMessage, FileNamePreview, RemoveFileAction
- **footer**: Primary and secondary actions — components: UploadButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Step][Title] |
| [UploadArea]  |
| [Progress]    |
| [File Info]   |
|───────────────|
| [Upload][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: CV Upload Wizard: Upload Loading

Route: `/doctors/add/cv-upload`
Layout: **single-column-form**

## Required regions
- **header**: Wizard navigation and context — components: StepIndicator, PageTitle
- **panel**: File upload progress — components: UploadArea, ProgressBar, FileNamePreview
- **footer**: Secondary action — components: CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Step][Title] |
| [UploadArea]  |
| [Progress]    |
| [File Info]   |
|───────────────|
| [Cancel]      |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: CV Upload Wizard: Parsing Error

Route: `/doctors/add/cv-review`
Layout: **two-column-main-rail**

## Required regions
- **header**: Wizard navigation and context — components: StepIndicator, PageTitle, PlanLimitBanner, PermissionDeniedBanner
- **main**: Parsing error message and manual entry fallback — components: ParsingErrorAlert, ManualEntryFields, RetryUploadButton
- **rail**: Original CV preview for reference — components: OriginalCVPreviewPanel

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| error/manual fields | CV preview |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: CV Upload Wizard: Duplicate Detection

Route: `/doctors/add/duplicates`
Layout: **two-column-main-rail**

## Required regions
- **main**: Duplicate candidates review and resolution — components: DuplicateCandidatesList, DuplicateResolutionActions, ContinueButton, CancelButton
- **rail**: Selected duplicate candidate detail — components: CandidateDetailCard

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| duplicates list | candidate detail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: CV Upload Wizard: Finalize & Save

Route: `/doctors/add/confirm`
Layout: **two-column-main-rail**

## Required regions
- **main**: Review and confirm new doctor profile — components: ProfileSummaryCard, EditFieldsButton, SaveProfileButton, CancelButton
- **rail**: Original CV preview — components: OriginalCVPreviewPanel

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| profile summary | CV preview |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Doctor Candidate Profile

Route: `/doctors/:id`
Layout: **master-detail**

## Required regions
- **main**: Candidate profile header and tabbed content — components: CandidateHeaderCard, CandidateName, Specialty, Location, AHPRAStatusBadge, EmploymentType, Availability, EditProfileAction, Tabs: Profile|Documents|Timeline|Follow-Ups
- **tab-content**: Tab-specific content: profile data, docs, timeline, follow-ups — components: ProfileFieldsPanel, DocumentsList, AHPRAStatusPanel, VerificationSource, VerificationDate, SupportingDocsList, VerificationNotes, CommunicationLog, FollowUpTaskList, AddFollowUpTaskAction, ActivityTimeline, EmptyTimelineMessage
- **state-variant**: Display skeletons, error, plan limit, or permission denied messages as overlays or in main region. — components: ProfileSkeleton, TabSkeletons, ErrorMessage, RetryAction, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| candidate header | tab content |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Edit Doctor Profile Modal

Route: `/doctors/:id/edit`
Layout: **single-column-form**

## Required regions
- **form-panel**: Edit candidate data, status, notes. — components: FirstNameInput, LastNameInput, EmailInput, PhoneInput, SpecialtyInput, LocationInput, AHPRAInput, AvailabilitySelect, StatusSelect, NotesTextarea
- **footer**: Form actions. — components: SaveAction, CancelAction
- **state-variant**: Display loading spinner, error, plan limit, or permission denied messages. — components: LoadingSpinner, ErrorMessage, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Edit Fields] |
|───────────────|
| [Save][Cancel]|
| [Status Msgs] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Candidate Activity Timeline Drawer

Route: `/doctors/:id/timeline`
Layout: **drawer**

## Required regions
- **filters**: Filter and search activity timeline — components: SearchActivityInput, ActivityTypeSelect, DateRangePicker, UserSelect
- **timeline-list**: Chronological activity log — components: ActivityTimestamp, ActivityType, ActivityDescription, PerformedBy, LinkedBrief, LinkedCommunication, StatusChangeBadge, AHPRAStatusBadge, NoteContent, AttachmentIcon, AIGeneratedNoteBadge, DownloadActivityLog

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | timeline drawer (filters + log) |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: AHPRA Verification API Error

Route: `/doctors/:id/verify`
Layout: **single-column-form**

## Required regions
- **panel**: AHPRA verification error and manual fallback — components: APIErrorAlert, ManualVerificationButton, RetryButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [API Error]   |
| [Manual Btn]  |
| [Retry]       |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: AHPRA Manual Verification: Upload Docs

Route: `/doctors/:id/verify/manual-upload`
Layout: **single-column-form**

## Required regions
- **panel**: Upload supporting documents for manual verification — components: UploadDocsField, DocsListPreview, RemoveDocAction, UploadProgressBar
- **footer**: Form actions — components: ContinueButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Upload Docs] |
| [Docs List]   |
| [Progress]    |
|───────────────|
| [Continue][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: AHPRA Manual Verification: Add Notes

Route: `/doctors/:id/verify/manual-notes`
Layout: **single-column-form**

## Required regions
- **panel**: Add internal verification notes — components: VerificationNotesTextarea
- **footer**: Form actions — components: ContinueButton, BackButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Notes]       |
|───────────────|
| [Continue][Back][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: AHPRA Manual Verification: Submit for Review

Route: `/doctors/:id/verify/manual-submit`
Layout: **single-column-form**

## Required regions
- **panel**: Submit manual verification for manager review — components: SummaryCard, SubmitForReviewButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Summary]     |
| [Submit][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: AHPRA Manual Verification: Manager Review Modal

Route: `/doctors/:id/verify/manual-review`
Layout: **single-column-form**

## Required regions
- **panel**: Manager reviews manual verification submission — components: VerificationSummaryCard, ApproveButton, RejectButton, ReviewNotesTextarea

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Summary]     |
| [Approve][Reject] |
| [Notes]       |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Matching Loading State

Route: `/matching`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Candidate matching filters — components: SpecialtySelect, LocationSelect, AHPRAStatusSelect, AvailabilitySelect
- **main-panel**: AI results loading skeleton — components: MatchingListSkeleton, LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | skeleton list |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Matching Candidate Detail Drawer

Route: `/matching/:candidateId`
Layout: **drawer**

## Required regions
- **drawer-header**: Candidate summary and close — components: CandidateName, CloseButton
- **drawer-content**: Candidate actionable summary — components: Specialty, Location, AHPRAStatusBadge, AIConfidenceScore, MatchRationale, ContactActions, AssignToBriefAction, ViewFullProfileLink

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | candidate drawer |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Outreach Composer

Route: `/outreach`
Layout: **two-column-main-rail**

## Required regions
- **main**: Compose and send outreach messages — components: RecipientCard, ChannelToggle, SubjectInput, MessageBodyTextarea, TemplateSelectorButton, PersonalizationFieldsButton, ConsentCheckbox, SendNowButton, SaveAsDraftButton, ErrorAlert, LoadingSpinner
- **context-rail**: Related context for outreach — components: RelatedBriefCard, PreviousContactList, CandidateProfileMiniCard, ConsentStatusBadge

## Forbidden collapses
- Do not replace context-rail with nothing
- Do not use a single Card form for the whole page

## ASCII wireframe
```
| main composer | context rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Message Template Selector Modal

Route: `/outreach/templates`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Select predefined message template — components: SearchTemplatesInput, TemplateList, TemplatePreviewPanel, SelectTemplateButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Search]      |
| [List]        |
| [Preview]     |
| [Select][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Personalization Fields Modal

Route: `/outreach/personalize`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Edit personalization fields for message — components: DynamicFieldsList, FieldValidationIndicators, SaveButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
| [Validation]  |
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Send Outreach Confirmation Modal

Route: `/outreach/send-confirm`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Confirm send now or save as draft — components: ConsentCheckSummary, SendNowButton, SaveAsDraftButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Consent]     |
| [Send][Draft][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Outreach Composer Error State

Route: `/outreach/error`
Layout: **two-column-main-rail**

## Required regions
- **main**: Show outreach send error and retry — components: ErrorAlert, RetryButton
- **context-rail**: Related context for outreach — components: RelatedBriefCard, PreviousContactList

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| error + retry | context rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Follow-Up List Loading State

Route: `/follow-ups`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Follow-up filters — components: DueDateFilter, PriorityFilter, StatusFilter, AssigneeFilter
- **main-panel**: Loading skeleton for follow-up list — components: FollowUpListSkeleton, LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | skeleton list |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Add Follow-Up Modal

Route: `/follow-ups/add`
Layout: **single-column-form**

## Required regions
- **form-panel**: Create new follow-up task — components: DueDatePicker, PrioritySelect, StatusSelect, NotesTextarea, AssigneeSelect
- **footer**: Form actions — components: SaveButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
|───────────────|
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Edit Follow-Up Modal

Route: `/follow-ups/:id/edit`
Layout: **single-column-form**

## Required regions
- **form-panel**: Edit follow-up task details — components: DueDatePicker, PrioritySelect, StatusSelect, NotesTextarea, AssigneeSelect
- **footer**: Form actions — components: SaveButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
|───────────────|
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Overdue Follow-Ups Drawer

Route: `/follow-ups/overdue`
Layout: **drawer**

## Required regions
- **drawer-header**: Drawer title and close — components: DrawerTitle, DrawerCloseButton
- **drawer-content**: List of overdue follow-ups with quick actions — components: OverdueFollowUpList, MarkCompleteAction, RescheduleAction, ContactAssigneeAction

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | overdue drawer |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Reporting Dashboard Empty State

Route: `/reporting`
Layout: **dashboard-grid**

## Required regions
- **sidebar**: Navigation and workspace context — components: SidebarNav (role-aware, collapsible)
- **topbar**: Page title, search, user menu — components: Breadcrumbs, PageTitle, SearchInput, UserAvatarMenu
- **main**: Reporting dashboard widgets and content — components: ReportingFilters, ExportControls, EmptyStateIllustration, EmptyStateMessage, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌────sidebar────┬────────────dashboard grid────────────┐
| [nav]        | [title][search][user]                |
|              | [filters][empty illustration]         |
└───────────────┴──────────────────────────────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Admin Area

Route: `/admin`
Layout: **dashboard-grid**

## Required regions
- **sidebar**: Navigation and workspace context — components: SidebarNav (admin only, collapsible)
- **topbar**: Page title, search, user menu — components: Breadcrumbs, PageTitle, SearchInput, UserAvatarMenu
- **main**: Admin widgets and content — components: UserManagementPanel, RoleManagementPanel, AuditLogTable, DataRetentionSettings, SystemSettingsPanel, AdminEmptyStateIllustration, AdminErrorAlert, AdminLoadingSkeleton, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌────sidebar────┬────────────admin grid───────────────┐
| [nav]        | [title][search][user]               |
|              | [admin panels/widgets]              |
└───────────────┴────────────────────────────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Landing Page

Route: `/`
Layout: **single-column-form**

## Required regions
- **hero-panel**: Public entry point introducing the platform — components: PlatformLogo, HeroTitle, HeroDescription, LoginButton, RegisterButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Logo]        |
| [HeroTitle]   |
| [Desc]        |
| [Login][Reg]  |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

---

# Screen blueprint: Registration Page

Route: `/register`
Layout: **single-column-form**

## Required regions
- **form-panel**: Allow new internal users to register for access — components: FirstNameInput, LastNameInput, EmailInput, PasswordInput, ConfirmPasswordInput, RegisterButton, CancelButton, ErrorAlert

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
| [Register][Cancel] |
| [Error]       |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).

## 3. Page-by-page data points
Implement screens using this field-level inventory.

Summary: 64 pages, 915 data points, 82 filters.

### Login Screen (/login) [default] layout=single-column-form
Regions:
- centered-panel — Primary authentication form region
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

### Login Loading State (/login) [loading] layout=single-column-form
Regions:
- centered-panel — Primary authentication form region (disabled) with loading spinner overlay
Fields:
- Email (form-field · panel · required)
- Password (form-field · panel · required)
- Login Button (action · panel · required)
- Forgot Password Link (action · panel)
- Show Password Toggle (action · panel)
- Loading Spinner (badge · panel · required)
Statuses: loading

### Login Error State (/login) [error] layout=single-column-form
Regions:
- centered-panel — Primary authentication form region with error alert
Fields:
- Email (form-field · panel · required)
- Password (form-field · panel · required)
- Login Button (action · panel · required)
- Forgot Password Link (action · panel)
- Show Password Toggle (action · panel)
- Error Message (text · panel · required)
Statuses: error

### Password Reset Request (/login/reset) [default] layout=single-column-form
Regions:
- panel — Main modal content for password reset request
- footer — Action buttons for modal
Fields:
- Email address (form-field · panel · required)
- Submit button (action · footer · required)
- Cancel button (action · footer · required)
- Loading spinner (badge · panel)
- Error message (text · panel)
- Plan limit message (text · panel)
- Permission denied message (text · panel)
- Success confirmation (text · panel)
- Password reset instructions (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Password Reset Confirmation (/login/reset/confirm) [default] layout=single-column-form
Regions:
- panel — Main modal content for password reset confirmation
- footer — Action buttons for modal
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

### Permission Denied Screen (/forbidden) [error] layout=single-column-form
Regions:
- header — Branded error headline
- panel — Error description and guidance
- footer — Action buttons for navigation/support
Fields:
- Permission denied headline (text · header · required)
- Permission denied description (text · panel · required)
- Return to dashboard button (action · footer · required)
- Contact support link (action · footer)
- Loading spinner (badge · panel)
- Error message (text · panel)
- Plan limit message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Recruiter Dashboard (/dashboard) [default] layout=dashboard-grid
Regions:
- sidebar — Navigation and workspace context
- topbar — Page title, search, user menu
- main — Dashboard widgets and content
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
- Unread notifications badge (badge · header)
- Overdue tasks badge (badge · header)
- User avatar menu (navigation-item · header)
Filters:
- Reporting dashboard filters (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Dashboard Empty State (/dashboard) [empty] layout=dashboard-grid
Regions:
- sidebar — Navigation and workspace context
- topbar — Page title, search, user menu
- main — Dashboard widgets and content
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

### Dashboard Loading State (/dashboard) [loading] layout=dashboard-grid
Regions:
- sidebar — Navigation and workspace context
- topbar — Page title, search, user menu
- main — Dashboard widgets and content
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

### Notification Drawer (/dashboard/notifications) [default] layout=drawer
Regions:
- drawer-header — Drawer title, close button, and filters
- drawer-content — Scrollable notification list, grouped by date/type
- drawer-status — Status banners/messages for empty, error, plan limit, or permission denied states
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
- Notification Group Header (text · panel)
- Notification Tooltip (tooltip · panel)
Filters:
- Notification Type (multi-select)
- Unread Only (toggle)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Client Brief List (/briefs) [default] layout=two-column-main-rail
Regions:
- main-content — Table of client briefs with filters and actions
- table — Briefs data table with columns and quick actions
- status-panel — Status banners/messages for empty, error, plan limit, or permission denied states
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
- Brief Tooltip (tooltip · table)
Filters:
- Search Briefs (search)
- Brief Status (multi-select)
- Assigned Recruiter (multi-select)
- Date Created (date-range)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Brief List Empty State (/briefs) [empty] layout=two-column-main-rail
Regions:
- main-content — Empty state panel with filters and create action
- status-panel — Status banners/messages for loading, error, plan limit, or permission denied states
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

### Brief List Loading State (/briefs) [loading] layout=two-column-main-rail
Regions:
- main — Display brief list table or state variant (skeleton, empty, error, plan limit, permission denied).
- toolbar — Table-level actions and filters (when not loading/empty/plan limit/permission denied).
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

### Client Brief Detail (/briefs/:id) [default] layout=master-detail
Regions:
- main — Display brief header, details, and tabbed content (details, candidates, timeline).
- tab-content — Show tab-specific content: details, candidate list, or activity timeline.
- state-variant — Display skeletons, error, plan limit, or permission denied messages as overlays or in main region.
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

### Edit Brief Modal (/briefs/:id/edit) [default] layout=single-column-form
Regions:
- form-panel — Edit brief details, requirements, and assignment.
- footer — Form actions.
- state-variant — Display loading spinner, error, plan limit, or permission denied messages.
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

### Brief Activity Timeline Drawer (/briefs/:id/timeline) [default] layout=drawer
Regions:
- filters — Filter and search activity timeline
- timeline-list — Chronological activity log
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
- Download Activity Log (action · panel)
Filters:
- Search Activity (search)
- Activity Type (multi-select)
- Date Range (date-range)
- User (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add New Brief Modal (/briefs/add) [default] layout=single-column-form
Regions:
- form — Input fields for new brief
- footer — Form actions
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

### Doctor Database List (/doctors) [default] layout=two-column-main-rail
Regions:
- filters — Advanced search and filtering
- table — Doctor candidate list
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
- Bulk Select (action · table)
- Export List (action · table)
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

### Doctor List Empty State (/doctors) [empty] layout=two-column-main-rail
Regions:
- filters — Always-visible contextual filters for doctor search
- main-panel — Empty state illustration, message, and primary action
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

### Doctor List Loading State (/doctors) [loading] layout=two-column-main-rail
Regions:
- filters — Always-visible contextual filters for doctor search (disabled during loading)
- main-panel — Loading skeleton for doctor table and spinner
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

### Add Doctor Modal (/doctors/add) [default] layout=single-column-form
Regions:
- modal-panel — Add doctor via CV upload or manual entry, with duplicate detection and error handling
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

### CV Upload Wizard: Upload Step (/doctors/add/cv-upload) [default] layout=single-column-form
Regions:
- header — Wizard navigation and context
- panel — File upload interaction and requirements
- footer — Primary and secondary actions
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
- File Name Preview (text · panel)
- Remove File Action (action · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### CV Upload Wizard: Upload Loading (/doctors/add/cv-upload) [loading] layout=single-column-form
Regions:
- header — Wizard navigation and context
- panel — File upload progress
- footer — Secondary action
Fields:
- Step Indicator (navigation-item · header · required)
- Page Title (text · header · required)
- Upload Area (form-field · panel · required)
- Progress Bar (metric · panel · required)
- Cancel Button (action · footer · required)
- File Name Preview (text · panel)
Statuses: loading

### CV Upload Wizard: AI Parsing Review (/doctors/add/cv-review) [default] layout=two-column-main-rail
Regions:
- header — Wizard navigation and context
- main — Extracted fields review and editing
- rail — Original CV preview for reference
- footer — Navigation and batch actions
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
- Field-Level Warning Icon (badge · panel)
- Field-Level Edit Tooltip (tooltip · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### CV Upload Wizard: Parsing Error (/doctors/add/cv-review) [error] layout=single-column-form
Regions:
- main — Display error, loading, plan, or permission state for CV parsing step.
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
- Empty State Illustration (badge · panel)
Statuses: error, loading, plan_limit, permission_denied, empty

### CV Upload Wizard: Duplicate Detection (/doctors/add/duplicates) [default] layout=two-column-main-rail
Regions:
- main — Display duplicate candidates table or empty/error/loading/plan/permission state.
- footer — Primary actions for resolving duplicates or continuing.
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

### CV Upload Wizard: Finalize & Save (/doctors/add/confirm) [default] layout=two-column-main-rail
Regions:
- main — Display doctor profile summary, audit log, and actions to save or edit.
- footer — Primary actions for saving or editing doctor profile.
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

### Doctor Candidate Profile (/doctors/:id) [default] layout=two-column-main-rail
Regions:
- main — Candidate profile details and tabbed content
- context-rail — Quick actions, status, and meta info
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
- Profile Last Updated (date · meta)
- Profile Created By (text · meta)
- Profile Created At (date · meta)
- Error Message (text · panel)
- Retry Load Action (action · panel)
- Permission Denied Message (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Edit Doctor Profile Modal (/doctors/:id/edit) [default] layout=single-column-form
Regions:
- modal-form — Edit doctor profile fields
- modal-footer — Form actions
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

### Candidate Activity Timeline Drawer (/doctors/:id/timeline) [default] layout=drawer-panel
Regions:
- drawer-header — Timeline filters and close action
- drawer-content — Timeline event list and details
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

### AHPRA Verification Modal (/doctors/:id/verify) [default] layout=single-column-form
Regions:
- header — Status and progress indicators
- panel — Verification details and supporting information
- footer — Action controls
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

### AHPRA Verification API Loading (/doctors/:id/verify) [loading] layout=single-column-form
Regions:
- header — Progress indicator
- panel — Status messages
- footer — Action controls
Fields:
- API Verification Progress Indicator (badge · header · required)
- Close Modal (action · footer · required)
- Plan Limit Message (text · panel)
- Permission Denied Message (text · panel)
Statuses: loading, plan_limit, permission_denied

### AHPRA Verification API Error (/doctors/:id/verify) [error] layout=single-column-form
Regions:
- panel — Error and status messages
- footer — Action controls
Fields:
- API Error Message (text · panel · required)
- Retry API Verification (action · footer · required)
- Switch to Manual Verification (action · footer · required)
- Close Modal (action · footer · required)
- Plan Limit Message (text · panel)
- Permission Denied Message (text · panel)
Statuses: error, plan_limit, permission_denied

### AHPRA Manual Verification: Upload Docs (/doctors/:id/verify/manual-upload) [default] layout=single-column-form
Regions:
- header — Wizard step navigation and candidate context
- panel — Document upload and validation
- footer — Wizard navigation actions
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
- File Upload Progress Bar (badge · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Manual Verification: Add Notes (/doctors/:id/verify/manual-notes) [default] layout=single-column-form
Regions:
- header — Wizard step navigation and candidate context
- panel — Notes entry and validation
- footer — Wizard navigation actions
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
- Notes Character Counter (badge · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Manual Verification: Submit for Review (/doctors/:id/verify/manual-submit) [default] layout=single-column-form
Regions:
- header — Wizard step navigation and candidate context
- panel — Review and confirmation
- footer — Wizard navigation actions
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
- Submission Timestamp Preview (text · panel)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AHPRA Manual Verification: Manager Review Modal (/doctors/:id/verify/manual-review) [default] layout=single-column-form
Regions:
- header — Display doctor identity and current verification status
- panel — Show verification submission details and review fields
- footer — Primary and secondary actions
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
- Verification Status Badge (badge · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### AI-Powered Candidate Matching (/matching) [default] layout=two-column-main-rail
Regions:
- filters — Candidate search and filter controls
- main — AI-matched candidate table with actions and status
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
- Candidate Status Badge (badge · table)
Filters:
- Specialty (multi-select)
- Location (multi-select)
- Availability Date Range (date-range)
- AHPRA Registration Status (multi-select)
- Confidence Threshold (numeric-range)
- Search Candidates (search)
- Brief (select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Matching Empty State (/matching) [empty] layout=single-column-form
Regions:
- panel — Display empty state messaging and actions
Fields:
- Empty State Message (text · panel · required)
- Adjust Filters Action (action · panel · required)
- Add Candidate Action (action · panel)
- Loading Spinner (badge · panel)
- Error Message (badge · panel)
- Plan Limit Banner (badge · panel)
- Permission Denied Banner (badge · panel)
Statuses: empty, default, loading, error, plan_limit, permission_denied

### Matching Loading State (/matching) [loading] layout=two-column-main-rail
Regions:
- main — Display skeleton cards for candidate matching results
- filters — Show skeletons for filters above results
- panel — Display error, plan, or permission messages
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

### Matching Candidate Detail Drawer (/matching/:candidateId) [default] layout=drawer
Regions:
- drawer-header — Candidate identity and close action
- drawer-main — Candidate core details and match info
- drawer-footer — Candidate actions
- drawer-status — Status overlays (loading, error, plan, permission, empty)
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

### Outreach Composer (/outreach) [default] layout=single-column-form
Regions:
- composer-form — Main outreach composition form
- composer-footer — Primary and secondary actions
- composer-status — Status overlays (empty, error, plan, permission)
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

### Message Template Selector Modal (/outreach/templates) [default] layout=single-column-form
Regions:
- modal-header — Title and close action
- modal-body — Template search, list, and preview
- modal-footer — Primary actions
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
- Template description tooltip (tooltip · table)
Filters:
- Template search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Personalization Fields Modal (/outreach/personalize) [default] layout=single-column-form
Regions:
- modal-header — Title and close/cancel action
- modal-body — Personalization fields and validation
- modal-footer — Primary actions
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
- Personalization field info tooltip (tooltip · table)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Send Outreach Confirmation Modal (/outreach/send-confirm) [default] layout=single-column-form
Regions:
- modal-header — Title and cancel action
- modal-body — Confirmation details and consent
- modal-footer — Primary actions
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
- Consent/opt-out info tooltip (tooltip · table)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Outreach Composer Error State (/outreach) [error] layout=single-column-form
Regions:
- header — Display error or plan/permission banners
- composer-form — Main outreach composition fields
- footer — Action controls for retry or dismiss
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

### Follow-Up Task List (/follow-ups) [default] layout=two-column-main-rail
Regions:
- filters-rail — Always-visible filters for follow-up tasks
- main-table — Table of follow-up tasks
Fields:
- Follow-up task due date (form-field · table · required)
- Follow-up task priority (form-field · table · required)
- Follow-up task status (form-field · table · required)
- Follow-up task notes (form-field · table)
- Follow-up task assignee (form-field · table · required)
- Status (filter · filters)
- Assignee (filter · filters)
- Due date (filter · filters)
- Search (filter · filters)
Filters:
- Status (multi-select)
- Assignee (multi-select)
- Due date (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Follow-Up List Empty State (/follow-ups) [empty] layout=two-column-main-rail
Regions:
- filters-rail — Always-visible filters for follow-up tasks
- main-panel — Empty state illustration, prompt, and add action
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

### Follow-Up List Loading State (/follow-ups) [loading] layout=two-column-main-rail
Regions:
- main — Primary follow-up list and filters
- context-rail — Status banners, empty/error/plan limit/permission states
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
- Table pagination (action · table)
- Table row status badge (badge · table)
- Table row overdue badge (badge · table)
- Table row tooltip (due date) (tooltip · table)
Filters:
- Status (multi-select)
- Assignee (multi-select)
- Due date (date-range)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add Follow-Up Modal (/follow-ups/add) [default] layout=single-column-form
Regions:
- modal-form — Add follow-up task form
- modal-footer — Form actions and status
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
- Form Loading Spinner (action · form)
- Field-level validation tooltip (tooltip · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Edit Follow-Up Modal (/follow-ups/:id/edit) [default] layout=single-column-form
Regions:
- modal-form — Edit follow-up task form
- modal-footer — Form actions and status
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
- Form Loading Spinner (action · form)
- Field-level validation tooltip (tooltip · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Overdue Follow-Ups Drawer (/follow-ups/overdue) [default] layout=drawer-main
Regions:
- drawer-header — Drawer title and close action
- drawer-filters — Filter overdue follow-ups by assignee and priority
- drawer-content — Main content: table of overdue follow-ups or state messages
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
- Loading Spinner (panel · panel)
Filters:
- Assignee (multi-select)
- Priority (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Reporting Dashboard (/reporting) [default] layout=dashboard-grid
Regions:
- dashboard-header — Page title, data masking badge, and plan/permission banners
- dashboard-filters-toolbar — Filters and export actions
- dashboard-metrics — Key metrics and charts
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

### Reporting Dashboard Empty State (/reporting) [empty] layout=dashboard-grid
Regions:
- dashboard-header — Page title and banners (none visible in empty state)
- dashboard-filters-toolbar — Filters and (disabled) export actions
- dashboard-metrics — Empty state prompt
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Date range (filter · filters · required)
- Empty state prompt (text · panel · required)
Filters:
- Reporting dashboard filters (multi-select)
- Date range (date-range)
Statuses: empty

### Reporting Dashboard Loading State (/reporting) [loading] layout=dashboard-grid
Regions:
- filters-bar — Always-visible filters for dashboard metrics
- metrics-row — Key metric cards (placements, briefs, sourced, verified)
- charts-row — Visual charts for specialty, location, and monthly trends
- actions-bar — Export actions and tooltips
- status-panel — Status overlays (loading skeletons, empty/error/plan/permission banners)
Fields:
- Reporting dashboard filters (filter · filters · required)
- CSV export button (role-restricted) (action · table)
- Date range (filter · filters · required)
- Loading skeletons (panel · panel · required)
- Total placements (metric · metrics)
- Active briefs (metric · metrics)
- Candidates sourced (metric · metrics)
- Candidates verified (metric · metrics)
- Placements by specialty (chart) (chart-series · charts)
- Placements by location (chart) (chart-series · charts)
- Monthly placements (chart) (chart-series · charts)
- PDF export button (role-restricted) (action · table)
- Data masking badge (badge · metrics)
- Export tooltip (tooltip · actions)
- Empty state prompt (text · panel)
- Error alert (text · panel)
- Plan limit banner (text · panel)
- Permission denied banner (text · panel)
Filters:
- Reporting dashboard filters (multi-select)
- Date range (date-range)
Statuses: loading, default, empty, error, plan_limit, permission_denied

### Export Report Modal (/reporting/export) [default] layout=single-column-form
Regions:
- modal-header — Title and close/cancel action
- modal-body — Export configuration and summary
- modal-footer — Export actions and status
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

### Admin Area (/admin) [default] layout=two-column-main-rail
Regions:
- admin-tabs-header — Tab navigation for admin sections
- admin-main-panel — Main content area for selected tab
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

### User Management List (/admin/users) [default] layout=two-column-main-rail
Regions:
- main — User table and filters [User search (Input), Role filter (MultiSelect), Status filter (MultiSelect), Invite user button (Primary), User table (sticky header, columns: Name, Email, Role, Status, Last login, Actions, Status badge, Invite sent badge, MFA enabled badge, Email tooltip)]
- context-rail — Contextual help, plan status, or audit log [Plan limit reached message (Banner), Permission denied message (Banner), Error message (Alert), Empty state message (Illustration + Text), Loading indicator (Skeleton/Table spinner)]
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
- User table: Status badge (badge · table)
- User table: Invite sent badge (badge · table)
- User table: MFA enabled badge (badge · table)
- User table: Email tooltip (tooltip · table)
Filters:
- User search (search)
- Role filter (multi-select)
- Status filter (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Add User Modal (/admin/users/add) [default] layout=single-column-form
Regions:
- modal-form — Add user form [Email Address (Input, required), Full Name (Input, required), Role (Dropdown, required), Send Invitation Email (Toggle), Add User (Submit, Primary Button), Cancel (Secondary Button), Error Message (Alert), Plan Limit Message (Banner)]
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
- Loading spinner (badge · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Edit User Modal (/admin/users/:id/edit) [default] layout=single-column-form
Regions:
- modal-form — Edit user form [Email Address (Input, read-only if primary identifier), Full Name (Input, editable), Role (Dropdown, editable), Account Status (Toggle/Dropdown), Reset Password (Button), Delete User (Button), Save Changes (Primary Button), Cancel (Secondary Button)]
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
- Loading spinner (badge · form)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Role-Permission Matrix Screen (/admin/roles) [default] layout=two-column-main-rail
Regions:
- main — Matrix table and controls [Role-Permission Matrix Table, Permission Description Tooltip, Unsaved Changes Badge]
- filters-rail — Filter matrix by role/category/search [Role Filter, Permission Category Filter, Search Permission Filter]
- toolbar — Matrix actions [Save Changes Button, Reset to Default Button]
- status-panel — Status, alerts, and messages [Loading Spinner, Error Message, Plan Limit Message, Permission Denied Message, Empty State Message]
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
- Permission Description Tooltip (tooltip · table)
- Unsaved Changes Badge (badge · table)
Filters:
- Role (multi-select)
- Permission Category (multi-select)
- Search Permission (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Audit Log Screen (/admin/audit) [default] layout=two-column-main-rail
Regions:
- main — Audit log table and actions [Audit Log Table, Row Details Tooltip]
- filters-rail — Filter audit log by user/action/date/object/search [User Filter, Action Filter, Date Range Filter, Object Filter, Search Filter]
- toolbar — Audit log actions [Export CSV Button]
- footer — Pagination controls [Pagination]
- header — Compliance and plan status [Compliance Badge, Plan Limit Banner]
- status-panel — Status, alerts, and messages [Loading Spinner, Error Message, Empty State Illustration, Permission Denied Message]
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
- Row Details Tooltip (tooltip · table)
Filters:
- User (multi-select)
- Action (multi-select)
- Date Range (date-range)
- Object (multi-select)
- Search (search)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Data Retention & Deletion Controls (/admin/retention) [default] layout=two-column-main-rail
Regions:
- main — Retention rules and deletion log tables [Retention Rules Table, Deletion Log Table, Rule Description Tooltip]
- filters-rail — Filter retention rules/logs [Data Type Filter, Retention Period Filter, Status Filter]
- toolbar — Bulk and export actions [Bulk Delete Action Button, Export Deletion Log Button]
- header — Compliance and plan status [Compliance Warning, Plan Limit Banner]
- footer — Pagination controls [Pagination]
- status-panel — Status, alerts, and messages [Loading Spinner, Error Message, Empty State Illustration, Permission Denied Message]
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
- Rule Description Tooltip (tooltip · table)
Filters:
- Data Type (multi-select)
- Retention Period (numeric-range)
- Status (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Admin Permission Error State (/admin) [error] layout=single-column-form
Regions:
- main — Display permission error or relevant state to user.
Fields:
- Permission Denied Illustration (illustration · header · required)
- Permission Denied Message (text · header · required)
- Return to Dashboard Action (action · footer · required)
- Loading Skeleton Illustration (skeleton · header)
- Loading Spinner (spinner · body)
- Error Alert Banner (banner · header)
- Plan Limit Banner (banner · header)
Statuses: default, empty, loading, error, plan_limit, permission_denied

## 4. Design guidelines (tokens / UX validation — secondary to §1–§2)

Guideline files in the repo under `.ops4/design-system/` (validation / tokens / a11y — do NOT override screen composition in the locked build prompt):
- `.ops4/design-system/01_design_system.md` — Design system
- `.ops4/design-system/02_ux_principles.md` — UX principles
- `.ops4/design-system/03_screen_composition.md` — Screen composition
- `.ops4/design-system/04_form_patterns.md` — Form patterns
- `.ops4/design-system/05_table_patterns.md` — Table patterns
- `.ops4/design-system/06_dashboard_patterns.md` — Dashboard patterns
- `.ops4/design-system/07_navigation_patterns.md` — Navigation patterns
- `.ops4/design-system/08_feedback_patterns.md` — Feedback patterns
- `.ops4/design-system/09_layout_patterns.md` — Layout patterns
- `.ops4/design-system/10_responsive_patterns.md` — Responsive patterns
- `.ops4/design-system/11_accessibility_rules.md` — Accessibility rules
- `.ops4/design-system/12_content_guidelines.md` — Content guidelines
- `.ops4/design-system/13_interaction_patterns.md` — Interaction patterns
- `.ops4/design-system/14_ai_validation_rules.md` — AI validation rules
Also: `.ops4/design-system/README.md` (conflict priority) and `.ops4/design-system/DESIGN_SYSTEM.md` (index).
Index URL: https://github.com/ahsanaasim/test-repo-ops-ai/blob/main/.ops4/design-system/DESIGN_SYSTEM.md
# Aperture UI/UX guideline pack

This file concatenates all guideline slots for the coding agent.
Prefer individual files under `.ops4/design-system/` when available.

## Conflict priority (README)

# UI / UX guidelines (Aperture Design Governance)

Version: 1.1

These files are the **default** source of truth for Design Brain / Build Now / Cursor.

## Design Brain

Each project Design Brain shows **14 slots** (one per file below).

- If a slot has **no upload**, the matching default file from this folder is used.
- If a user **uploads** a `.md`/`.txt` file for a slot, that override is stored on the project baseline and used instead.
- **Preview** always shows the *effective* content (override or default).
- Build Now / Cursor always receives all 14 effective documents under `.ops4/design-system/`.

## File index

| File | Role |
|------|------|
| `01_design_system.md` | Visual tokens, components, motion, casing matrix |
| `02_ux_principles.md` | UX philosophy (when other docs are silent) |
| `03_screen_composition.md` | Page anatomy (header, filters, content, footer) |
| `04_form_patterns.md` | Forms, fields, validation timing |
| `05_table_patterns.md` | Tables / data tables (when features are required) |
| `06_dashboard_patterns.md` | Dashboard structure & KPI patterns |
| `07_navigation_patterns.md` | App nav, breadcrumbs, wayfinding |
| `08_feedback_patterns.md` | Loading, toasts, empty, confirm, undo |
| `09_layout_patterns.md` | Grid, widths, spacing, placement |
| `10_responsive_patterns.md` | Breakpoints & device adaptations |
| `11_accessibility_rules.md` | WCAG 2.1 AA, keyboard, ARIA |
| `12_content_guidelines.md` | Copy tone, labels, microcopy |
| `13_interaction_patterns.md` | States, gestures, animation behavior |
| `14_ai_validation_rules.md` | Pre-ship checklist (must not invent new policy) |

Optional companion: `tokens.css` (CSS variables mirroring `01`).

## Conflict priority (highest wins)

When two files disagree, apply in this order:

1. **`11_accessibility_rules.md`** — accessibility blockers always win  
2. **`01_design_system.md`** — tokens, components, Sheet/Drawer, casing matrix  
3. **Domain patterns** — `04` forms · `05` tables · `06` dashboards · `07` nav · `08` feedback  
4. **Structure** — `03` composition · `09` layout · `10` responsive  
5. **`12_content_guidelines.md`** — copy (must match `01` casing matrix)  
6. **`13_interaction_patterns.md`** — interaction polish  
7. **`02_ux_principles.md`** — philosophy only when others are silent  
8. **`14_ai_validation_rules.md`** — checklist only; never overrides higher docs  

## Canonical reconciled rules (v1.1)

Agents must treat these as authoritative:

### Primary CTA
- Exactly **one** orange `primary` button in the **page header** (page chrome).
- Nested cards/panels use `secondary` / `ghost`.
- **Exception:** a focused task surface (dialog, sheet/drawer body, or empty-state recovery) may contain **one** primary.
- Never show two or more primary fills in the same viewport.

### Sheet vs Drawer
- **≥ 640px:** edge panel = shadcn **Sheet** (desktop/tablet secondary panels, filters, details).
- **&lt; 640px:** same pattern = shadcn **Drawer** (bottom sheet).
- Do not put full multi-step workflows inside Sheet/Drawer.
- “Right drawer” in older wording means **Sheet** on desktop.

### Destructive actions
- **Recoverable** (soft delete, archive, dismiss) → perform action + **Undo toast** (~10s). No modal.
- **Irreversible / high-impact** (permanent delete, purge, cancel subscription) → **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

### Validation timing (forms)
1. Do **not** validate aggressively on every keystroke before first blur.
2. After a field is touched/blurred → validate that field on subsequent changes.
3. On submit → validate all; move focus to first invalid; announce errors accessibly.
4. Success → toast or inline confirmation.

### Capitalization
Follow the matrix in `01` §8 (mirrored in `12`):
- Actions, form labels, toasts → **sentence case** (`Email address`, `Save changes`)
- Page titles, section headers, nav labels → **Title Case** (`Account Settings`)

### Motion
- Interactive transitions: **150–200ms** on named easings.
- Overlay enter/exit: up to **300ms** allowed.
- Continuous indicators (spinner ~700ms loop, skeleton shimmer) are exempt; honor `prefers-reduced-motion`.

### Spacing
Use the 4px rail in `01`. Mapped common values:
- 8 / 16 / 24 / 32 / 48 → `space-2` / `space-4` / `space-6` / `space-8` / `space-12`
- Page section-to-section = **48px** (`space-12`), not invented values.

### Typography floor
- Primary reading body ≥ **16px**.
- `body-small` **14px** = metadata/captions only.
- `label` **13px** = form labels, chips, button text — OK.

### Error feedback
- Recoverable / non-blocking → toast (assertive OK) with retry when useful.
- Critical / blocking → persistent Alert or modal — **never toast-only**.

---

## 01_design_system — Design system

Source: custom (design-system-showroom.md)

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

---

## 02_ux_principles — UX principles

Source: default (02_ux_principles.md)

# 02_ux_principles.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory User Experience (UX) principles that govern every interface generated within the Aperture ecosystem.

Unlike the Design System, which defines visual appearance, this document defines how interfaces should behave, communicate, and guide users.

Every generated page, component, workflow, and interaction must comply with these principles.

These principles are mandatory.

If any UX principle conflicts with aesthetics, animations, or personal preference, the UX principle always wins.

---

# UX Philosophy

Software exists to help people complete tasks.

Users should spend their time solving business problems—not learning how to use the interface.

Every screen should reduce friction.

Every interaction should increase confidence.

Every workflow should minimize effort.

Good UX is invisible.

The best interface is one that users barely notice because everything feels obvious.

---

# Core Objectives

Every interface must optimize for:

- Clarity
- Simplicity
- Speed
- Predictability
- Consistency
- Learnability
- Accessibility
- Error Prevention
- Confidence
- Efficiency

Never optimize for visual complexity.

---

# UX-001 — Clarity Above Everything

## Objective

The purpose of every screen must be obvious within three seconds.

Users should never wonder:

- Where am I?
- What is this page for?
- What should I do next?

## Rules

- Every page must have one clear purpose.
- Every page must have a descriptive title.
- Primary content must appear before secondary content.
- Decorative elements must never compete with functional elements.
- Every important action must be visible.

## AI MUST

- Prioritize clarity over aesthetics.
- Remove unnecessary visual elements.
- Keep labels simple and descriptive.

## AI MUST NEVER

- Hide primary actions.
- Use vague labels.
- Add decorative components without purpose.

---

# UX-002 — One Primary Goal Per Screen

Every page should help users complete one primary objective.

Examples

Good

Customer Details

Goal:
Manage customer information.

Bad

Customer Details

Analytics

Reports

Calendar

Marketing

Invoices

Support

Everything mixed together.

## Rules

- One dominant workflow.
- One dominant call-to-action.
- Secondary actions must support the primary workflow.

---

# UX-003 — Reduce Cognitive Load

Users should think about their work.

Not the interface.

## Rules

- Show only necessary information.
- Group related information.
- Hide advanced options until needed.
- Break complex workflows into smaller steps.
- Remove unnecessary decisions.

## AI MUST

Ask before adding every component:

Does this help complete the primary task?

If not,

Remove it.

---

# UX-004 — Recognition Over Recall

Interfaces should help users recognize information.

Never require memory.

Examples

Good

Autocomplete

Recent searches

Recent projects

Breadcrumbs

Current filters

Bad

Remember IDs

Remember commands

Remember previous page values

---

# UX-005 — Progressive Disclosure

Complexity should appear only when necessary.

Rules

- Show essential information first.
- Hide advanced settings behind expansion panels.
- Reveal complexity gradually.
- Default experience should be beginner-friendly.

---

# UX-006 — Visual Hierarchy

Users should know what deserves attention first.

Hierarchy

1. Page Title

2. Primary Action

3. Primary Content

4. Supporting Content

5. Metadata

6. Footer

Never create competing visual focal points.

---

# UX-007 — Information Hierarchy

Information should appear in this order.

Overview

↓

Current Task

↓

Important Information

↓

Supporting Information

↓

History

↓

Metadata

Never reverse this order.

---

# UX-008 — Consistency

Users should never relearn the interface.

Everything should behave consistently.

Including:

- Buttons
- Colors
- Icons
- Terminology
- Navigation
- Dialogs
- Forms
- Tables
- Error Messages

Example

Never rename the same action.

Delete

Remove

Erase

Discard

Choose one.

Use it everywhere.

---

# UX-009 — User Control

Users should always feel in control.

Provide

- Cancel
- Back
- Undo
- Retry
- Close

Never trap users.

Always allow recovery whenever possible.

---

# UX-010 — Feedback

Every user action deserves feedback.

Loading

Saving

Success

Failure

Empty

Retry

Progress

Users should never wonder whether something happened.

---

# UX-011 — Error Prevention

Prevent mistakes instead of reporting mistakes.

Examples

Disable impossible actions.

Validate before submission (and per-field after blur — see `04` / README).

Warn before irreversible destructive actions (Alert Dialog). Prefer Undo for recoverable deletes.

Autosave drafts.

Suggest corrections.

Good UX prevents errors.

---

# UX-012 — Forgiveness

Humans make mistakes.

Software should help recover.

Examples

Undo

Restore

Version History

Draft Recovery

Confirmation Dialogs

Never punish mistakes.

---

# UX-013 — Trust

Interfaces should always explain what is happening.

Users should understand

- Why something happened.
- Why something failed.
- What changed.
- What will happen next.

Never perform destructive actions silently.

Never surprise users.

---

# UX-014 — Accessibility

Accessibility is mandatory.

Every interface must support:

- Keyboard navigation
- Screen readers
- Color blindness
- Low vision
- Motor impairments
- Reduced motion

Accessibility failures block release.

---

# UX-015 — Perceived Performance

Fast interfaces feel trustworthy.

Rules

Always prefer

- Skeleton loading
- Progressive loading
- Optimistic updates
- Lazy loading
- Background refresh

Never show blank screens while waiting.

---

# UX-016 — Decision Economy

Reduce unnecessary decisions.

Software should remember:

- Previous selections
- Recent searches
- Filters
- Sorting
- Preferred views
- Default values

Never ask users the same question repeatedly.

---

# UX-017 — Discoverability

Important functionality should be easy to discover.

Users should not need documentation to complete common tasks.

Frequently used actions should always remain visible.

Rare actions may be hidden behind menus.

---

# UX-018 — Predictability

Interfaces should behave exactly as users expect.

Buttons should look clickable.

Links should look like links.

Menus should open consistently.

Dialogs should close consistently.

Never surprise users.

---

# UX-019 — Task Efficiency

Optimize for completing tasks quickly.

Reduce:

- Clicks
- Typing
- Navigation
- Waiting
- Scrolling

Never increase interaction count without clear value.

---

# UX-020 — Simplicity

Simple interfaces outperform complicated ones.

Whenever multiple solutions exist,

Choose the simplest solution that solves the problem.

Simple does not mean fewer features.

Simple means fewer unnecessary decisions.

---

# AI Decision Rules

Before generating any screen, AI must answer:

1. What is the user's primary goal?

2. What information is required?

3. What information can be removed?

4. What information can be hidden?

5. What action should be primary?

6. Can anything be automated?

7. Can defaults be inferred?

8. Can the workflow be simplified?

If yes,

Simplify before generating the interface.

---

# AI Anti-Patterns

Never:

- Create multiple primary buttons.
- Add decorative cards without purpose.
- Mix different interaction styles.
- Use inconsistent spacing.
- Overcrowd dashboards.
- Hide important actions.
- Use placeholder text as labels.
- Depend on color alone.
- Require horizontal scrolling for normal workflows.
- Invent custom components when existing components exist.
- Create unnecessary clicks.
- Duplicate information.
- Display advanced settings by default.

---

# UX Validation Checklist

Every screen must satisfy all of the following.

## Purpose

✓ Screen purpose immediately obvious.

✓ Primary task clearly identifiable.

---

## Content

✓ Only necessary information displayed.

✓ Information grouped logically.

✓ No redundant content.

---

## Actions

✓ One primary action.

✓ Secondary actions clearly differentiated.

✓ Destructive actions separated.

---

## Navigation

✓ User knows current location.

✓ Navigation predictable.

✓ Back navigation available.

---

## Feedback

✓ Loading state.

✓ Empty state.

✓ Success state.

✓ Error state.

---

## Accessibility

✓ Keyboard accessible.

✓ Screen reader friendly.

✓ WCAG AA compliant.

✓ Touch targets large enough.

---

## Performance

✓ No unnecessary rendering.

✓ Loading feedback visible.

✓ Responsive interactions.

---

## Overall

The interface should feel:

- Obvious
- Predictable
- Trustworthy
- Fast
- Simple

If any of these qualities are missing, the design should be revised before implementation.

---

# Final Principle

The goal of UX is not to impress users.

The goal is to help users accomplish meaningful work with the least possible effort.

If removing an element improves the experience,

remove it.

---

## 03_screen_composition — Screen composition

Source: default (03_screen_composition.md)

# 03_screen_composition.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every application screen should be structured.

The goal is to ensure every generated interface follows a predictable, consistent and user-friendly layout regardless of feature or module.

This document does **not** define colors, typography or component styling. Those are covered in the Design System.

This document defines **where things belong**.

---

# Design Philosophy

Users should never spend time figuring out where information is located.

Every page should follow familiar patterns.

Layouts should feel predictable across the entire application.

Every section must have a purpose.

Every component must support the primary workflow.

---

# Core Principles

Every screen should:

- Have one clear purpose
- Have one primary workflow
- Follow a predictable reading order
- Minimize scrolling
- Prioritize important information
- Group related information
- Maintain visual balance
- Be responsive across all devices

---

# Standard Reading Flow

Every screen should follow this hierarchy.

```

Header
↓

Page Information

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Footer (optional)

```

Never reverse this order unless a documented pattern explicitly requires it.

---

# Standard Page Anatomy

Every application page should contain the following sections when applicable.

## 1. Global Navigation

Purpose

Provide application-wide navigation.

Examples

- Sidebar
- Top Navigation
- Workspace Switcher

Rules

- Always accessible.
- Current page clearly highlighted.
- Never hide navigation unexpectedly.

---

## 2. Page Header

Purpose

Introduce the current page.

Contains

- Page Title
- Description (optional)
- Primary Action
- Secondary Actions

Rules

- Exactly one page title.
- Exactly one primary CTA in the page header (orange `primary`).
- Nested content actions use secondary/ghost — see README Primary CTA rule.
- Keep descriptions concise.

---

## 3. Filters / Search

Only display if content can be filtered.

Contains

- Search
- Filters
- Sort
- View Options

Rules

- Place above content.
- Preserve previous selections.
- Allow quick reset.

---

## 4. Main Content

Purpose

Primary task area.

Examples

- Table
- Form
- Dashboard
- Cards
- Timeline
- Editor

Rules

- Occupies most of the viewport.
- Must remain visually dominant.
- Never compete with side content.

---

## 5. Supporting Information

Examples

- Statistics
- Related Items
- Notes
- Activity
- Comments

Rules

Support—not replace—the primary content.

---

## 6. Footer

Optional.

Only include if additional actions or legal information are required.

Never place important actions exclusively in the footer.

---

# Screen Types

Every generated screen should belong to one of the following categories.

---

# Dashboard

Purpose

Provide a high-level overview.

Structure

```

Header

↓

KPI Cards

↓

Charts

↓

Primary Workflow

↓

Recent Activity

↓

Supporting Information

```

Rules

- KPIs always appear before charts.
- Recent activity near bottom.
- Maximum six KPI cards.
- Maximum three charts.
- Never overload dashboards.

---

# List Page

Purpose

Browse multiple records.

Structure

```

Header

↓

Search

↓

Filters

↓

Bulk Actions

↓

Table / Cards

↓

Pagination

```

Rules

- Search always before filters.
- Bulk actions appear only when items are selected.
- Pagination always below content.

---

# Detail Page

Purpose

Display one entity.

Structure

```

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

```

Rules

Keep primary information visible before supporting information.

---

# Create / Edit Page

Purpose

Create or modify data.

Structure

```

Header

↓

Instructions (optional)

↓

Grouped Form Sections

↓

Validation

↓

Primary Actions

```

Rules

Never present one long unstructured form.

Group related fields.

---

# Settings

Purpose

Configure application behavior.

Structure

```

Category Navigation

↓

Section

↓

Settings

↓

Save Bar

```

Rules

Always group settings.

Never mix unrelated settings.

---

# Wizard

Purpose

Guide users through complex tasks.

Structure

```

Progress Indicator

↓

Current Step

↓

Navigation Buttons

```

Rules

- Clearly indicate progress.
- One step at a time.
- Preserve entered information.

---

# Empty State

Purpose

Guide users when no data exists.

Contains

- Illustration/Icon
- Title
- Explanation
- Primary CTA

Rules

Always explain why the page is empty.

Always provide a recovery action.

---

# Error State

Purpose

Recover from failures.

Contains

- Error Message
- Explanation
- Retry Button

Rules

Never expose technical errors.

Always explain what users can do next.

---

# Loading State

Purpose

Communicate progress.

Rules

- Use skeletons whenever possible.
- Preserve layout during loading.
- Avoid layout shifts.

---

# Section Rules

Every page section must have:

- Clear heading
- Related content
- Consistent spacing
- Visual separation
- Logical grouping

Never create sections without purpose.

---

# Visual Balance

Content should feel balanced.

Avoid:

- Large empty spaces
- Uneven columns
- Floating buttons
- Random card sizes
- Misaligned content

---

# White Space

Whitespace improves readability.

Rules

- Separate unrelated sections.
- Avoid excessive compression.
- Avoid excessive spacing.

Whitespace should communicate structure.

---

# CTA Placement

Primary CTA

Top-right of page header.

Secondary Actions

Beside primary action.

Destructive Actions

Separated from primary actions.

Never place destructive actions beside Save.

---

# Sticky Elements

Allowed

- Navigation
- Filters
- Table Header
- Save Bar
- Wizard Navigation

Avoid excessive sticky elements.

---

# Responsive Composition

Desktop

Multiple columns allowed.

Tablet

Reduce secondary panels.

Mobile

Single-column layout.

Stack vertically.

Never require horizontal scrolling.

---

# AI MUST

- Follow the appropriate page template.
- Use consistent reading flow.
- Prioritize primary workflows.
- Group related content.
- Remove unnecessary sections.

---

# AI MUST NEVER

- Invent page layouts.
- Mix multiple screen types.
- Create multiple primary workflows.
- Scatter actions randomly.
- Create visually unbalanced layouts.

---

# Validation Checklist

Every generated screen must satisfy:

✓ One page purpose

✓ One page title

✓ One primary workflow

✓ One primary CTA

✓ Logical reading order

✓ Related information grouped

✓ Appropriate screen template used

✓ Proper empty state

✓ Proper loading state

✓ Proper error state

✓ Responsive layout

✓ Balanced spacing

✓ Consistent section hierarchy

✓ No unnecessary components

---

# Final Principle

Users should never have to learn where information is located.

If two screens perform similar jobs, they should have similar layouts.

Consistency is more valuable than creativity.

---

## 04_form_patterns — Form patterns

Source: default (04_form_patterns.md)

# 04_form_patterns.md

Version: 1.1

Part of: Aperture Design Governance

---

# Purpose

This document defines how forms should be designed, structured, validated, and generated.

Forms are the primary interaction pattern in enterprise software.

Every generated form must minimize user effort, reduce errors, and maximize completion rate.

Whenever this document conflicts with aesthetics, this document wins.

---

# Design Philosophy

Forms exist to collect information.

They should never feel like paperwork.

Users should always understand:

• What information is needed.

• Why it is needed.

• Which fields are required.

• What happens after submission.

A good form reduces effort.

A great form feels effortless.

---

# Core Principles

Every form must be

• Easy to scan

• Easy to complete

• Easy to validate

• Easy to recover

• Easy to edit

---

# Form Anatomy

Every form should follow this structure.

Header

↓

Description (optional)

↓

Section 1

↓

Section 2

↓

Section 3

↓

Review (optional)

↓

Primary Actions

---

# Form Header

Contains

• Form Title

• Short description (optional)

Rules

One title only.

Descriptions should explain purpose—not implementation.

Good

Create Customer

Bad

Customer Creation Interface

---

# Form Sections

Large forms must be divided into logical sections.

Examples

Personal Information

Contact Information

Billing Information

Emergency Contact

Employment

Preferences

Never create one long list of fields.

---

# Field Ordering

Fields should appear in the same order users naturally think.

Example

Name

↓

Email

↓

Phone

↓

Address

↓

Notes

Never ask for detailed information before basic identity.

---

# Labels

Every input requires a visible label.

Never use placeholders as labels.

Good

Email address

[text field]

Bad

[text field]

Placeholder:
Email address

---

# Required Fields

Only require information that is absolutely necessary.

Mark required fields clearly.

Avoid making every field required.

---

# Optional Fields

Optional fields should be labeled.

Example

Company (optional)

Middle name (optional)

---

# Helper Text

Use helper text only when necessary.

Explain

• Expected format

• Restrictions

• Why information is needed

Never duplicate labels.

---

# Validation

Prefer inline validation.

Validate

• Required

• Format

• Length

• Range

• Duplicate values

**Timing (canonical — matches README / `01`):**

1. Do not validate aggressively on every keystroke before the field is first blurred.
2. After the field is touched or blurred → validate that field on subsequent changes.
3. On submit → validate all fields; move focus to the first invalid control; announce errors accessibly (`aria-invalid`, `aria-describedby`, assertive live region for blocking failures).
4. On success → toast or inline confirmation.

Show helpful errors as soon as the user has finished with a field—not while they are still typing the first character.

---

# Error Messages

Good

Email address is required.

Password must contain at least 8 characters.

Bad

Invalid Input

Error 5002

---

# Input Types

Always use the correct control.

Short text

Input

Long text

Textarea

Date

Date Picker

Boolean

Switch

One choice

Radio

Many choices

Checkbox

Large searchable list

Combobox

Never substitute incorrect controls.

---

# Default Values

Pre-fill information whenever safe.

Examples

Country

Timezone

Current User

Today's Date

Remember previous choices.

---

# Grouping

Related fields belong together.

Never mix unrelated topics.

Good

Address

City

State

ZIP

Bad

Address

Phone

ZIP

Email

---

# Long Forms

If more than 15 fields

Group into sections.

If more than 30 fields

Consider multi-step wizard.

---

# Multi-step Forms

Use only when complexity requires it.

Every step should contain one logical group.

Always show progress.

Never lose entered information.

---

# Save Behaviour

Support

Auto Save (where appropriate)

Save Draft

Cancel

Reset

Warn before leaving with unsaved changes.

---

# Primary Actions

Preferred

Save

Create

Submit

Update

Secondary

Cancel

Back

Reset

Destructive actions must remain separated.

---

# Mobile Behaviour

Fields stack vertically.

Minimum touch target 44px.

Avoid side-by-side inputs unless necessary.

Keyboard should never hide focused fields.

---

# Accessibility

Every field requires

Visible Label

Keyboard Access

Focus Indicator

ARIA Labels

Error Association

Screen Reader Support

---

# AI MUST

Use the correct input type.

Group related fields.

Use inline validation.

Generate clear labels.

Generate meaningful errors.

Support keyboard navigation.

Preserve entered values.

---

# AI MUST NEVER

Create placeholder-only labels.

Create giant ungrouped forms.

Use generic error messages.

Require unnecessary information.

Reset completed forms after validation errors.

---

# Validation Checklist

✓ Visible title

✓ Logical grouping

✓ Correct input types

✓ Labels

✓ Helper text

✓ Validation

✓ Error handling

✓ Mobile friendly

✓ Accessible

✓ Clear primary action

✓ Unsaved change protection

✓ Consistent spacing

---

# Final Principle

The best form is not the one with the fewest fields.

The best form is the one that feels the easiest to complete.

---

## 05_table_patterns — Table patterns

Source: default (05_table_patterns.md)

# 05_table_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines when and how tables should be generated.

Tables display comparable records. They are not a default layout for every screen.

If this document conflicts with aesthetics, this document wins.
For visual tokens and components, follow `01_design_system.md`.
For conflict priority across all guidelines, follow `README.md`.

---

# Design Philosophy

Users scan tables to compare, find, and act on records.

Every column must earn its place.

Every interactive table feature (search, sort, filter, pagination) must match the dataset size and task—not be added by default.

---

# Choose the right control

| Need | Use |
|------|-----|
| Read-only comparable data, few rows, no sort/filter | **Table** (static) |
| Sort, filter, search, selection, or pagination | **Data Table** |
| Precise values matter more than shape | Table / Data Table over Chart |
| Card list on mobile when columns collapse poorly | Stacked rows / card list (see Responsive) |

Never use tables for page layout.

---

# Static Table (simple)

Required

- Native `<table>` semantics (`th` with scope, optional `<caption>`)
- Clear column headers
- Numbers right-aligned
- Status via badge + text (never color alone)

Optional

- Row actions as secondary/ghost icon buttons with labels

Do **not** require search, sort, filters, or pagination on small static tables (e.g. &lt; ~20 rows of reference data).

---

# Data Table (interactive)

Use when any of the following are true:

- More than ~20 rows expected
- Users need to find a specific record quickly
- Users need to compare by sorting a column
- Users need to narrow the set (filters)
- Server- or client-paginated datasets

When a Data Table is used, include the features the task needs:

| Feature | Required when |
|---------|----------------|
| Column sort | Users compare or rank by a field |
| Search | Directory/list of many named entities |
| Filters | Multiple facets (status, owner, date) |
| Pagination or virtualization | Large datasets |
| Row selection | Bulk actions exist |
| Empty state | Zero rows possible |
| Loading skeleton | Async fetch |

Automatic failure for Data Tables only:

- Unsortable columns when comparison is the primary task
- No search on large entity directories
- Pagination without totals / position when paginated
- Missing empty or loading states

---

# Column rules

- Prefer 4–7 visible columns on desktop; hide secondary columns on tablet/mobile.
- Pin identity column (name/id) when horizontal space is tight.
- Truncate long text with title/tooltip; never clip without affordance.
- Put primary row action at end (secondary button or menu); never multiple primary fills in a row.

---

# Toolbar pattern

Place above the table:

Search (if needed) → Filters → View options → Primary create action (page header preferred; table toolbar uses secondary unless this is a focused embedded task surface—see README Primary CTA rule).

Allow clear/reset of filters.

Preserve filter/sort state when returning to the page when practical.

---

# Row actions

- Single common action → icon button or text button (`ghost` / `secondary`)
- Multiple actions → Dropdown Menu
- Destructive row action → follow Destructive actions policy in README:
  - Recoverable → Undo toast
  - Irreversible → Alert Dialog

Never hide the only path to a critical action inside an unlabeled icon.

---

# Responsive behaviour

Desktop

- Full columns + toolbar

Tablet

- Hide lowest-priority columns; keep identity + status + actions

Mobile (&lt; 640px)

- Prefer stacked row cards or horizontally scrollable table with sticky first column
- Move filters into Sheet→Drawer pattern (bottom Drawer)
- Keep search reachable without horizontal scroll

Never rely on tiny unreadable multi-column grids on small screens.

---

# Accessibility

- Use real table markup for tabular data
- Sort controls expose `aria-sort`
- Select-all and row checkboxes have accessible names
- Keyboard reaches sort headers and row actions
- Announce loading and empty states

---

# Content

- Header labels: Title Case for column names that act as headings (`Status`, `Created At`)
- Cell values: sentence case for prose; preserve proper nouns and IDs
- Empty: “No [entities] yet” + recovery CTA (see `08_feedback_patterns.md`)

---

# Do

✓ Prefer Data Table only when interaction is needed  
✓ Right-align numeric columns  
✓ Pair status color with label  
✓ Provide empty + loading states for async tables  
✓ Match features to dataset size  

# Don’t

✗ Force search/sort/pagination on tiny static tables  
✗ Use layout tables  
✗ Encode status by color alone  
✗ Overflow without a mobile strategy  
✗ Put multiple primary buttons in each row  

---

# Final Principle

Tables exist to help users decide and act on records.

Add power features when the task needs them—not because tables “usually” have them.

---

## 06_dashboard_patterns — Dashboard patterns

Source: default (06_dashboard_patterns.md)

# 06_dashboard_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how dashboards should be designed and structured.

Dashboards exist to help users quickly understand the current state of a system, identify problems, monitor progress, and take action.

Dashboards are not reports.

Dashboards are not data dumps.

Every dashboard must prioritize clarity, actionability, and decision making.

---

# Design Philosophy

Users should understand the health of the system within five seconds.

The dashboard should answer:

• What is happening?

• Is everything okay?

• What needs my attention?

• What should I do next?

If a dashboard cannot answer these questions immediately, it should be redesigned.

---

# Core Principles

Every dashboard should be

- Actionable
- Focused
- Scannable
- Real-time
- Role-specific
- Minimal
- Prioritized

Never build dashboards that simply display data.

---

# Dashboard Anatomy

Every dashboard should follow this structure.

Page Header

↓

Primary KPI Summary

↓

Alerts & Important Notifications

↓

Primary Business Metrics

↓

Supporting Analytics

↓

Recent Activity

↓

Quick Actions

---

# Page Header

Contains

- Dashboard Title
- Date Range
- Filters
- Refresh Action

Optional

- Export
- Share

Rules

Keep filters close to the title.

Do not overload the header.

---

# KPI Summary

Purpose

Provide an instant overview.

Rules

Display the most important business metrics first.

Examples

Revenue

Active Users

Orders

Open Tickets

System Health

Pending Approvals

Rules

Maximum six KPI cards.

Never display more than two rows of KPIs.

Every KPI must include

Current Value

↓

Trend

↓

Comparison

↓

Status

Example

1,245 Orders

↑ 12%

Compared to last week

---

# Alerts

Critical information appears immediately after KPIs.

Examples

Payment failures

System outage

Pending approvals

Security issues

Inventory shortage

Rules

Critical alerts first.

Warnings second.

Informational messages last.

Do not mix alerts with analytics.

---

# Charts

Charts answer questions.

They do not decorate pages.

Every chart must answer one business question.

Example

Revenue by Month

Orders by Region

New Users per Week

Support Resolution Time

Bad

Random Pie Chart

Random Line Graph

No context.

---

# Chart Selection

Use

Line Chart

Trends

Bar Chart

Comparison

Stacked Bar

Composition

Area Chart

Growth

Donut

Simple proportions

Table

Detailed information

Avoid

3D Charts

Decorative Charts

Gauge Charts

Radar Charts

Unless explicitly required.

---

# Supporting Analytics

Examples

Top Customers

Top Products

Recent Sales

Conversion Funnel

Team Performance

These should support the primary KPIs.

Never compete with them.

---

# Recent Activity

Purpose

Show what happened recently.

Examples

Recent Orders

Recent Logins

Recent Tickets

Recent Payments

Rules

Newest first.

Provide quick access.

Allow navigation to details.

---

# Quick Actions

Frequently used actions should appear near the bottom or side.

Examples

Create Customer

Add User

Generate Report

Create Invoice

Approve Request

Rules

Maximum six quick actions.

Never replace navigation.

---

# Dashboard Layout

Preferred layout

Desktop

```

KPI Row

↓

Charts

↓

Tables

↓

Activity

```

Tablet

```

KPIs

↓

Charts

↓

Activity

```

Mobile

```

KPIs

↓

Alerts

↓

Charts

↓

Activity

```

---

# Visual Priority

Highest

Critical Alerts

↓

KPIs

↓

Charts

↓

Tables

↓

Activity

↓

Supporting Information

Never reverse this order.

---

# Refresh Behaviour

Support

Manual Refresh

Auto Refresh (where appropriate)

Last Updated timestamp

Loading indicators

Never refresh unexpectedly while users interact.

---

# Empty Dashboard

Display

Illustration

↓

Explanation

↓

Primary Action

↓

Helpful Resources

Never show empty widgets.

---

# Loading Dashboard

Use skeleton cards.

Preserve layout.

Load critical metrics first.

Progressively load charts.

Avoid layout shifting.

---

# Error Handling

Dashboard failures should clearly explain

What failed.

What still works.

How users can recover.

Never display technical errors.

---

# Personalization

Allow users to

Choose date ranges.

Save filters.

Remember layout preferences.

Choose density.

Pin favorite widgets.

Do not require personalization for usability.

---

# Performance

Load KPIs first.

Lazy load charts.

Cache previous results.

Load secondary widgets after primary information.

Never block the entire dashboard.

---

# Accessibility

Every chart requires

Title

Description

Keyboard access

Data summary

Accessible colors

Charts must not depend only on color.

---

# AI MUST

Prioritize business decisions.

Display KPIs before analytics.

Separate alerts from reports.

Group related widgets.

Keep dashboards focused.

Use meaningful chart types.

Support loading states.

Support empty states.

Support error states.

---

# AI MUST NEVER

Create dashboards with random widgets.

Display more than six KPI cards.

Place charts before critical alerts.

Mix unrelated business metrics.

Use decorative charts.

Duplicate information.

Display unnecessary statistics.

Overwhelm users.

---

# Validation Checklist

✓ Clear dashboard purpose

✓ Maximum six KPI cards

✓ Alerts separated

✓ Meaningful charts

✓ Recent activity visible

✓ Quick actions available

✓ Loading state

✓ Empty state

✓ Error state

✓ Responsive

✓ Accessible

✓ Fast initial loading

✓ Logical visual hierarchy

✓ Business-focused metrics

---

# Final Principle

A dashboard should help users make decisions.

If users have to search for important information, the dashboard has failed.

---

## 07_navigation_patterns — Navigation patterns

Source: default (07_navigation_patterns.md)

# 07_navigation_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how navigation should be designed throughout the application.

Navigation exists to help users move between workflows with the least possible effort.

Navigation should always feel predictable.

Users should never wonder:

- Where am I?
- Where can I go?
- How do I go back?

---

# Design Philosophy

Navigation is not decoration.

Navigation is a map.

Users should always understand their current location and available destinations.

Navigation should disappear mentally.

Users should focus on their work—not on finding pages.

---

# Core Principles

Every navigation system must be

- Predictable
- Consistent
- Discoverable
- Minimal
- Scalable
- Responsive
- Accessible

---

# Navigation Hierarchy

Every application should follow this hierarchy.

Application

↓

Module

↓

Page

↓

Section

↓

Component

Never exceed four navigation levels.

---

# Primary Navigation

Purpose

Move between major application modules.

Examples

Dashboard

Customers

Orders

Reports

Settings

Rules

- Always visible on desktop.
- Highlight current module.
- Use icons with labels.
- Sort modules by importance.
- Keep names short.

Maximum recommended items:

8

If more than eight,

group related modules.

---

# Secondary Navigation

Purpose

Navigate inside a module.

Examples

Profile

Security

Notifications

Billing

Rules

Keep navigation contextual.

Never mix unrelated sections.

---

# Breadcrumbs

Purpose

Show current location.

Structure

Home

>

Customers

>

John Smith

Rules

Show only when navigation depth exceeds one level.

Breadcrumbs should always be clickable.

Current page should not be clickable.

---

# Sidebar

Preferred for desktop applications.

Contains

- Logo
- Navigation
- Workspace Switcher
- Collapse Button
- User Profile

Rules

Support collapse.

Collapsed state shows icons.

Expanded state shows icons and labels.

Remember user preference.

---

# Top Navigation

Use for

Global search

Notifications

Help

Profile

Workspace switching

Do not place page-specific actions in global navigation.

---

# Mobile Navigation

Preferred

Bottom Navigation

or

Drawer Navigation

Maximum bottom navigation items

5

Additional pages belong in the drawer.

---

# Search

Global search should always remain accessible.

Search should locate

Pages

Users

Projects

Reports

Settings

Commands

Support keyboard shortcut.

Ctrl + K

or

⌘ + K

---

# Quick Navigation

Frequently used actions should be accessible.

Examples

Recent Pages

Favorites

Pinned Items

Recent Searches

Never require users to repeatedly navigate deep hierarchies.

---

# Navigation Labels

Labels should describe destinations.

Good

Customers

Invoices

Projects

Bad

Manage

Open

Start

Module

Keep labels noun-based whenever possible.

---

# Current Location

Users must always know where they are.

Highlight

Current module

Current page

Current tab

Current section

Never allow multiple active items.

---

# Tabs

Use tabs only for sibling content.

Good

Overview

Activity

Documents

History

Bad

Customers

Reports

Settings

Orders

Those belong in navigation.

---

# Back Navigation

Support

Browser Back

Back Button

Breadcrumbs

Cancel

Never trap users inside workflows.

---

# External Links

Always indicate when users leave the application.

Examples

Documentation

Support Portal

Company Website

Open external links in new tabs when appropriate.

---

# Icons

Icons support labels.

Icons never replace labels.

Exception

Collapsed sidebar.

---

# Notifications

Notifications belong in the global navigation.

Never interrupt workflows unless necessary.

Critical notifications should appear separately from standard notifications.

---

# Workspace Switching

For multi-tenant applications,

workspace switching should remain accessible from every page.

Switching workspaces should clearly indicate the active workspace.

---

# Responsive Navigation

Desktop

Persistent Sidebar

Tablet

Collapsed Sidebar

Mobile

Bottom Navigation

+

Drawer

Never force horizontal scrolling.

---

# Accessibility

Navigation must support

Keyboard navigation

Screen readers

Focus indicators

ARIA landmarks

Skip Navigation links

Visible active states

---

# AI MUST

Use consistent navigation across every page.

Keep navigation shallow.

Highlight current location.

Use descriptive labels.

Remember navigation preferences.

Support keyboard navigation.

---

# AI MUST NEVER

Invent different navigation systems.

Mix unrelated modules.

Hide important pages.

Use icons without labels.

Nest navigation excessively.

Create dead-end pages.

---

# Validation Checklist

✓ Current page highlighted

✓ Maximum four navigation levels

✓ Sidebar consistent

✓ Breadcrumbs where appropriate

✓ Global search available

✓ Mobile navigation supported

✓ Keyboard accessible

✓ Icons paired with labels

✓ Responsive

✓ Workspace clearly identified

✓ No dead ends

---

# Final Principle

Users should never think about navigation.

If users stop to figure out where to click next, the navigation has failed.

---

## 08_feedback_patterns — Feedback patterns

Source: default (08_feedback_patterns.md)

# 08_feedback_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how applications communicate with users.

Every user action should receive appropriate feedback.

Users should always know:

- What is happening.
- What has happened.
- What will happen next.
- Whether an action succeeded or failed.

Feedback should reduce uncertainty.

Never leave users guessing.

---

# Design Philosophy

Silence creates confusion.

Every interaction deserves a response.

Feedback should be:

- Immediate
- Clear
- Contextual
- Helpful
- Actionable

Never interrupt users unless absolutely necessary.

---

# Core Principles

Every interface must provide feedback for:

- Loading
- Success
- Failure
- Warning
- Progress
- Empty State
- Confirmation
- Background Processing
- Validation

---

# Feedback Hierarchy

Use the least disruptive feedback possible.

Information

↓

Success

↓

Warning

↓

Error

↓

Blocking Confirmation

Never interrupt users unnecessarily.

---

# Loading States

Users should immediately know that work is in progress.

Preferred order

1. Skeleton Loading
2. Inline Spinner
3. Progress Indicator
4. Full Page Loading (last resort)

Rules

- Preserve layout during loading.
- Never show blank pages.
- Never hide existing content while refreshing.
- Show loading immediately.

---

# Skeleton Loading

Use for

- Cards
- Tables
- Dashboards
- Lists
- Forms

Rules

Skeleton should closely resemble final layout.

Avoid flashing between loading and loaded states.

---

# Spinner

Use only for

- Small actions
- Inline loading
- Button loading

Avoid fullscreen spinners whenever possible.

---

# Progress Indicators

Use for operations longer than three seconds.

Examples

File Upload

Data Import

Report Generation

Export

Migration

Display

Current Progress

↓

Estimated Time (optional)

↓

Cancel (if possible)

---

# Success Feedback

Users should know when actions complete successfully.

Preferred methods

Toast

↓

Inline Success

↓

Success Screen

Rules

Success messages should be brief.

Example

Customer created.

Profile updated.

Invoice sent.

Avoid

Operation completed successfully.

---

# Error Feedback

Errors should help users recover.

Every error must answer

What happened?

Why?

How can I fix it?

Never expose

Stack traces

Technical IDs

Database errors

API messages

---

# Warning Feedback

Warnings communicate risk.

Examples

Unsaved changes

Low inventory

Expiring subscription

Delete confirmation

Warnings should not block users unless necessary.

---

# Empty States

Never display empty tables or blank pages.

Every empty state should include

Illustration or Icon

↓

Title

↓

Explanation

↓

Primary Action

Example

No customers yet.

Create your first customer to get started.

[Create customer]

---

# Confirmation Dialogs

Use **Alert Dialog** only for

Irreversible actions

High-impact actions that cannot be undone easily

Examples

Permanent delete / purge

Cancel subscription

Wipe data

Never confirm simple or easily reversible actions.

---

# Undo

For **recoverable** destructive actions, prefer Undo over a confirmation modal.

Examples

Soft delete

Archive

Dismiss

Flow

Action completes

↓

Toast with Undo (~10 seconds)

Do not use Undo-only for irreversible/high-impact actions — those require Alert Dialog (see README Destructive actions).

---

# Notifications

Notification types

Information

Success

Warning

Error

Rules

Keep notifications concise.

Automatically dismiss success messages.

Persistent errors require user action.

---

# Toasts

Use for

Short-lived feedback.

Examples

Saved

Copied

Updated

Sent

Rules

Maximum three visible.

Disappear automatically.

Pause on hover.

Never use toasts for irreversible or blocking critical failures (use Alert Dialog or persistent Alert).

Recoverable errors may use an assertive toast with retry when useful.

---

# Inline Feedback

Use inside forms.

Examples

Email available.

Password strength.

Invalid date.

Keep messages close to the related field.

---

# Background Processing

Long-running operations should continue in the background.

Users should be informed

Work started.

↓

Work in progress.

↓

Completed.

Allow users to continue working.

---

# Offline Feedback

Applications should detect connectivity changes.

Display

Offline

↓

Reconnecting

↓

Connected

Queue user actions when possible.

---

# Auto Save Feedback

When autosave exists,

display

Saving...

↓

Saved

↓

Last saved 2 minutes ago

Users should never wonder if data is safe.

---

# Retry

Whenever possible,

provide Retry.

Examples

Failed Upload

Network Error

Sync Failure

Never require users to restart workflows.

---

# AI MUST

Provide feedback for every user action.

Use skeleton loading.

Generate meaningful errors.

Generate meaningful success messages.

Support retry.

Support undo where possible.

Generate empty states.

Generate loading states.

---

# AI MUST NEVER

Leave users waiting silently.

Display blank pages while loading.

Expose technical errors.

Use generic messages.

Interrupt users unnecessarily.

Require page refreshes after actions.

---

# Validation Checklist

✓ Loading state exists

✓ Empty state exists

✓ Error state exists

✓ Success state exists

✓ Warning state exists

✓ Retry supported

✓ Undo supported where applicable

✓ Progress shown for long tasks

✓ Autosave feedback

✓ Background tasks communicated

✓ Notifications concise

✓ Feedback contextual

---

# Final Principle

Every user action should receive an immediate and meaningful response.

If users wonder whether the application is working,

the interface has failed.

---

## 09_layout_patterns — Layout patterns

Source: default (09_layout_patterns.md)

# 09_layout_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how content should be arranged across every page of the application.

Good layouts reduce cognitive load, improve readability, and make applications feel professional.

Every generated interface must follow these layout standards.

This document defines **where components should be placed**, **how much space they require**, and **how content should flow**.

---

# Design Philosophy

Layout is communication.

Users should understand page structure before reading any content.

Good layouts create rhythm.

Good layouts create balance.

Good layouts naturally guide attention.

Users should never feel lost because of poor positioning.

---

# Core Principles

Every layout must be

- Predictable
- Balanced
- Consistent
- Responsive
- Spacious
- Readable
- Purposeful

---

# Layout Hierarchy

Every page follows this order.

Application Shell

↓

Navigation

↓

Page Header

↓

Page Content

↓

Supporting Content

↓

Footer (Optional)

Never change this hierarchy without good reason.

---

# Page Width

Use consistent maximum content widths.

Recommended

Small Content

640px

Forms

768px

Standard Pages

1280px

Analytics

1440px

Never stretch content across the entire monitor.

Large screens should improve readability—not increase line length.

---

# Grid System

Use a 12-column grid.

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

All layouts should align to the grid.

Never position components arbitrarily.

---

# Containers

Every page should use containers.

Container responsibilities

- Alignment
- Padding
- Responsive resizing
- Visual consistency

Never place content directly against browser edges.

---

# Page Padding

Desktop

32px

Tablet

24px

Mobile

16px

Maintain consistent page padding.

---

# Section Spacing

Separate sections using the 4px spacing rail from `01_design_system.md`.

Recommended (token-mapped)

Section to Section

48px (`space-12`)

Section Heading to Content

24px (`space-6`)

Cards inside section

24px (`space-6`)

Related Components

16px (`space-4`)

Small Controls

8px (`space-2`)

Desktop page padding

32px (`space-8`)

Never invent spacing values outside the rail.

---

# Alignment

Align everything to the same vertical grid.

Examples

Good

Titles

↓

Cards

↓

Buttons

↓

Tables

All share the same left edge.

Bad

Floating cards.

Random margins.

Misaligned buttons.

Uneven columns.

---

# Reading Direction

Users naturally scan

Desktop

Top Left

↓

Top Right

↓

Middle

↓

Bottom

Mobile

Top

↓

Bottom

Place important information accordingly.

---

# White Space

Whitespace is intentional.

Whitespace separates meaning.

Do not fill empty areas simply because space exists.

Never sacrifice readability to reduce whitespace.

---

# Visual Balance

Every screen should feel balanced.

Avoid

Large empty regions

↓

Crowded regions

↓

Uneven component sizes

↓

Misaligned sections

Balance is more important than symmetry.

---

# Cards

Cards should group related information.

Use cards only when they create meaning.

Do not wrap everything in cards.

Avoid nested cards.

Maximum nesting

2 Levels

---

# Columns

Multiple columns should only exist when they improve readability.

Examples

Dashboard

2–4 columns

Form

1–2 columns

Settings

1–2 columns

Detail Page

2 columns

Mobile

1 column

Never create narrow unreadable columns.

---

# Sidebar Width

Expanded

280px

Collapsed

72px

Never resize sidebar unpredictably.

---

# Content Density

Support three density modes.

Comfortable

Default

Compact

Remember user preference.

Do not mix densities on the same page.

---

# Section Headers

Every major section requires

Title

Optional Description

Optional Action

Never place unrelated actions inside section headers.

---

# Dividers

Use dividers sparingly.

Prefer whitespace before borders.

Borders should reinforce structure—not replace spacing.

---

# Sticky Layouts

Allowed

Navigation

Table Header

Filter Bar

Save Bar

Wizard Footer

Avoid excessive sticky regions.

---

# Modals

Small

Confirmation

Medium

Standard Forms

Large

Complex Forms

Extra Large

Advanced Workflows

Never use fullscreen modals on desktop unless the task truly requires it.

On mobile (&lt; 640px), dialogs may go fullscreen for usability (see `10_responsive_patterns.md`).

---

# Sheets & Drawers

Use the Sheet / Drawer pattern for

Filters

Secondary editing

Quick details

**Breakpoint rule (canonical):**

- **≥ 640px** → shadcn **Sheet** (edge panel; “right drawer” means Sheet)
- **&lt; 640px** → shadcn **Drawer** (bottom)

Avoid placing entire multi-step workflows inside sheets or drawers.

---

# Master-Detail Layout

Preferred

List

↓

Details

Desktop

Side-by-side

Tablet

Adjustable

Mobile

Navigate between screens

---

# Dashboard Layout

Preferred order

KPIs

↓

Alerts

↓

Charts

↓

Tables

↓

Activity

↓

Quick Actions

Never reverse importance.

---

# Form Layout

Preferred

One column

↓

Grouped Sections

↓

Actions

Use two columns only when fields are naturally related.

---

# Table Layout

Toolbar

↓

Filters

↓

Table

↓

Pagination

↓

Bulk Actions

Bulk actions appear only after selection.

---

# Detail Layout

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

---

# Responsive Layout

Desktop

Multiple columns.

Tablet

Reduce secondary panels.

Mobile

Single column.

Stack vertically.

No horizontal scrolling.

---

# Accessibility

Layouts must support

200% Zoom

Keyboard Navigation

Screen Readers

Reduced Motion

Large Text

No layout should break under accessibility settings.

---

# Performance

Avoid rendering hidden content.

Lazy load secondary panels.

Load above-the-fold content first.

Prevent layout shifts.

---

# AI MUST

Use the 12-column grid.

Maintain consistent spacing.

Align components.

Keep layouts balanced.

Use whitespace intentionally.

Group related information.

Optimize for readability.

Support all breakpoints.

---

# AI MUST NEVER

Create floating components.

Invent spacing values.

Stretch content edge-to-edge.

Nest unnecessary cards.

Mix layout patterns.

Create inconsistent alignments.

Depend on absolute positioning.

Create visually unbalanced pages.

---

# Validation Checklist

✓ Uses standard grid

✓ Consistent page padding

✓ Proper section spacing

✓ Balanced layout

✓ Logical reading flow

✓ Appropriate column usage

✓ Responsive

✓ Accessible

✓ Proper whitespace

✓ Components aligned

✓ No unnecessary cards

✓ No layout shifts

---

# Final Principle

Layout should disappear.

Users should notice the information—not the arrangement.

If the layout distracts users from completing their work, it has failed.

---

## 10_responsive_patterns — Responsive patterns

Source: default (10_responsive_patterns.md)

# 10_responsive_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every interface must adapt across different screen sizes and devices.

Responsive design is not about shrinking a desktop interface.

Responsive design is about delivering the best possible experience for every device.

Every generated interface must work equally well on desktop, laptop, tablet, and mobile.

---

# Design Philosophy

Content is constant.

Presentation changes.

The user's task remains the same regardless of screen size.

Layouts should adapt.

Workflows should not.

Never remove critical functionality simply because the screen becomes smaller.

---

# Supported Breakpoints

Small Mobile

320px – 479px

Mobile

480px – 639px

Tablet

640px – 1023px

Laptop

1024px – 1439px

Desktop

1440px+

Every generated interface must support every breakpoint.

---

# Core Principles

Every responsive layout must be

- Readable
- Touch Friendly
- Consistent
- Accessible
- Efficient

Never create a mobile version with fewer capabilities unless technically necessary.

---

# Responsive Priority

When screen space decreases, preserve information in this order.

Primary Task

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Decorative Elements

Decorative elements disappear first.

Never remove primary workflows.

---

# Navigation

Desktop

Persistent Sidebar

Tablet

Collapsible Sidebar

Mobile

Bottom Navigation

+

Drawer

Rules

Desktop navigation should never appear on mobile unchanged.

---

# Page Width

Desktop

Centered Container

Tablet

Fluid Container

Mobile

Full Width

Always maintain consistent page padding.

---

# Columns

Desktop

2–4 Columns

Tablet

1–2 Columns

Mobile

Single Column

Never create narrow unreadable columns.

---

# Cards

Desktop

Grid Layout

Tablet

2 Columns

Mobile

Single Column

Cards should expand vertically instead of shrinking horizontally.

---

# Forms

Desktop

Two-column layout where appropriate.

Tablet

Reduce to one or two columns.

Mobile

Single column only.

Never place multiple unrelated inputs on the same row on mobile.

---

# Tables

Desktop

Full Table

Tablet

Hide low-priority columns

Mobile

Convert to cards

or

Horizontal scroll only when absolutely necessary.

Never require horizontal scrolling for standard CRUD workflows.

---

# Dashboard

Desktop

KPIs

↓

Charts

↓

Tables

↓

Activity

Tablet

KPIs

↓

Charts

↓

Activity

Mobile

KPIs

↓

Alerts

↓

Charts

↓

Activity

↓

Actions

---

# Sidebar

Desktop

Expanded

Tablet

Collapsed

Mobile

Drawer

Remember previous state on larger devices.

---

# Dialogs

Desktop

Centered Modal

Tablet

Large Modal

Mobile

Fullscreen Dialog

Avoid tiny dialogs on mobile.

---

# Drawers / Sheets

Canonical overlay pattern for secondary panels (filters, details, quick edit):

Desktop / Tablet (≥ 640px)

**Sheet** (edge panel). Older docs may say “Right Drawer” — that means Sheet.

Mobile (&lt; 640px)

**Drawer** (bottom)

Never put full multi-step workflows in Sheet/Drawer.

---

# Buttons

Desktop

Standard Size

Mobile

Minimum Height

44px

Minimum Width

44px

Buttons should stretch full width only when it improves usability.

---

# Touch Targets

Minimum

44 × 44 px

Recommended

48 × 48 px

Never place interactive controls too close together.

---

# Typography

Never reduce body text below

16px

Headings may scale.

Body text should remain readable.

---

# Images

Scale proportionally.

Never crop important content.

Lazy load large images.

---

# Charts

Desktop

Full Charts

Tablet

Simplified Legends

Mobile

Prioritize readability over detail.

Provide table alternative when needed.

---

# Search

Desktop

Full Search Bar

Mobile

Expandable Search

Search should remain available on every device.

---

# Filters

Desktop

Sidebar or toolbar

Tablet / Desktop secondary panel (≥ 640px)

**Sheet**

Mobile (&lt; 640px)

**Drawer** (bottom)

Never permanently hide filters.

---

# Sticky Elements

Desktop

Allowed

Mobile

Use sparingly.

Too many sticky regions reduce usable space.

---

# Keyboard

When the mobile keyboard opens,

Focused fields must remain visible.

Never hide primary actions behind the keyboard.

---

# Orientation

Portrait

Default

Landscape

Improve content density

Do not require landscape mode.

---

# Performance

Load only visible content.

Lazy load secondary sections.

Optimize images.

Avoid unnecessary animations.

Reduce network requests on mobile.

---

# Accessibility

Support

Zoom

Screen Readers

Keyboard Navigation

Voice Control

Reduced Motion

High Contrast

Responsive layouts must remain accessible.

---

# AI MUST

Generate layouts for every breakpoint.

Maintain one primary workflow.

Stack content logically.

Prioritize readability.

Convert layouts—not simply resize them.

Use touch-friendly controls.

Optimize performance.

---

# AI MUST NEVER

Scale desktop layouts directly.

Hide critical functionality.

Create unreadable tables.

Reduce touch targets.

Break navigation.

Require horizontal scrolling unnecessarily.

Reduce accessibility on mobile.

---

# Validation Checklist

✓ Desktop supported

✓ Laptop supported

✓ Tablet supported

✓ Mobile supported

✓ Navigation adapts

✓ Forms adapt

✓ Tables adapt

✓ Dashboards adapt

✓ Touch targets ≥44px

✓ Body text ≥16px for primary reading (14px metadata / 13px labels OK)

✓ No unnecessary horizontal scrolling

✓ Performance optimized

✓ Accessibility preserved

---

# Final Principle

Responsive design is adaptation—not reduction.

Users should feel that the application was designed specifically for the device they are using.

---

## 11_accessibility_rules — Accessibility rules

Source: default (11_accessibility_rules.md)

# 11_accessibility_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the accessibility standards that every generated interface must follow.

Accessibility is not a feature.

Accessibility is a minimum quality requirement.

Every user, regardless of ability, should be able to successfully complete every supported workflow.

All generated interfaces must meet WCAG 2.1 AA standards at minimum.

---

# Design Philosophy

Accessible software is better software.

Accessibility improves usability for everyone.

Interfaces should never assume users:

- Can see perfectly
- Can hear perfectly
- Can use a mouse
- Can distinguish colors
- Can use a touchscreen precisely
- Can process information quickly

Design for everyone.

---

# Core Principles

Every interface must be

- Perceivable
- Operable
- Understandable
- Robust

Accessibility is mandatory.

Accessibility issues block release.

---

# Keyboard Navigation

Every feature must be usable without a mouse.

Users must be able to

- Navigate
- Select
- Submit
- Close dialogs
- Open menus
- Switch tabs
- Complete forms

using only the keyboard.

---

# Focus Management

Keyboard focus must always be visible.

Rules

- Never remove focus outlines.
- Focus order must match visual order.
- Focus should never become trapped.
- Focus returns to the triggering element when dialogs close.

Every interactive component requires a visible focus state.

---

# Focus Order

Focus should move logically.

Preferred order

Header

↓

Navigation

↓

Primary Content

↓

Secondary Content

↓

Footer

Never create random focus jumps.

---

# Skip Navigation

Every application should provide

Skip to Content

at the beginning of the page.

Keyboard users should bypass repeated navigation quickly.

---

# Touch Targets

Minimum size

44 × 44 px

Recommended

48 × 48 px

Interactive elements should never overlap.

Spacing between touch targets should prevent accidental taps.

---

# Color Contrast

All text must satisfy WCAG AA.

Minimum contrast

Normal Text

4.5 : 1

Large Text

3 : 1

Icons

3 : 1

Never reduce contrast for aesthetic purposes.

---

# Color Usage

Never communicate meaning using color alone.

Every status should include

Color

+

Icon

+

Text

Good

✓ Success

Bad

Green text only

---

# Typography

Minimum **primary reading** body text

16px

Secondary metadata may use 14px (`body-small`). Form labels/control text may use 13px (`label`) per `01_design_system.md`.

Maintain comfortable line height.

Avoid decorative fonts.

Never justify paragraphs.

Keep line lengths readable.

---

# Images

Every meaningful image requires alternative text.

Decorative images

aria-hidden

or

empty alt text.

Never use images to display important text.

---

# Icons

Decorative icons

aria-hidden="true"

Action icons

Accessible label required.

Icons should support text.

Icons should not replace text.

---

# Links

Links should clearly describe their destination.

Good

Download Invoice

Bad

Click Here

Never rely on surrounding context.

---

# Buttons

Every button should describe its action.

Good

Save Changes

Delete User

Generate Report

Bad

OK

Yes

Continue

---

# Forms

Every input requires

Visible Label

Associated Label

Helper Text (when needed)

Error Message

Accessible Description

Never use placeholders as labels.

---

# Form Validation

Errors should

- Identify the field.
- Explain the problem.
- Explain how to fix it.

Follow validation timing in `04_form_patterns.md` / README (blur-after-touch, then submit-all).

Focus should move to the first invalid field after a failed submission.

---

# Error Messages

Error messages should be announced to screen readers.

Never rely on color.

Good

Email address is required.

Bad

Red border only.

---

# Tables

Tables require

Column Headers

Row Headers (when appropriate)

Scope attributes

Captions (when helpful)

Screen readers must understand relationships.

---

# Charts

Charts require

Title

Summary

Alternative data table

Never rely only on visual interpretation.

---

# Dialogs

Dialogs must

Trap keyboard focus.

Close using Escape.

Return focus to the triggering element.

Announce themselves properly.

---

# Notifications

Important notifications should be announced.

Use

aria-live

Appropriate urgency

Success

Polite

Errors

Assertive

---

# Motion

Respect

prefers-reduced-motion

Disable

Large animations

Parallax

Continuous motion

Flashing effects

Never trigger seizures or discomfort.

---

# Timing

Users should have enough time.

Never automatically log users out without warning.

Allow users to extend timeouts whenever possible.

---

# Language

Every page must define its language.

Example

lang="en"

Changes in language should also be identified.

---

# Reading Order

Screen readers should encounter content in the same order that visual users do.

Never create different logical and visual hierarchies.

---

# Zoom

Every page must remain usable at

200%

Zoom

without loss of functionality.

No horizontal scrolling should occur for normal content.

---

# Responsive Accessibility

Accessibility requirements remain identical on

Desktop

Tablet

Mobile

Never reduce accessibility because of screen size.

---

# Performance

Accessibility should not significantly reduce application performance.

Optimize

ARIA usage

Screen reader announcements

Keyboard interactions

Avoid excessive live regions.

---

# AI MUST

Generate semantic HTML.

Generate accessible labels.

Generate keyboard support.

Generate visible focus states.

Generate meaningful alt text.

Generate accessible error messages.

Support screen readers.

Maintain sufficient color contrast.

Support reduced motion.

Support zoom.

---

# AI MUST NEVER

Remove focus indicators.

Depend only on color.

Generate inaccessible forms.

Use placeholder-only labels.

Use generic button labels.

Hide content from assistive technology unnecessarily.

Ignore keyboard navigation.

Generate inaccessible custom components.

---

# Validation Checklist

✓ Keyboard accessible

✓ Visible focus indicators

✓ Proper tab order

✓ Skip navigation available

✓ Touch targets ≥44px

✓ WCAG AA contrast

✓ Images have alt text

✓ Buttons have meaningful labels

✓ Inputs have associated labels

✓ Errors announced

✓ Dialogs trap focus

✓ Reduced motion supported

✓ Zoom to 200% supported

✓ Screen reader compatible

✓ No accessibility blockers

---

# Accessibility Blockers

The following issues automatically fail accessibility validation.

✗ Missing form labels

✗ Missing keyboard navigation

✗ Invisible keyboard focus

✗ Insufficient color contrast

✗ Color-only status indicators

✗ Missing alternative text

✗ Inaccessible dialogs

✗ Broken tab order

✗ Keyboard traps

✗ Unreachable interactive elements

Accessibility blockers must be fixed before release.

---

# Final Principle

Accessibility is not about accommodating a minority of users.

Accessibility is about ensuring every user can successfully complete every task with confidence and independence.

---

## 12_content_guidelines — Content guidelines

Source: default (12_content_guidelines.md)

# 12_content_guidelines.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every piece of text inside the application should be written.

Good content reduces confusion.

Good content reduces support requests.

Good content builds trust.

Every word should help users complete their task.

---

# Design Philosophy

Interfaces should speak like a knowledgeable colleague.

Not like a machine.

Not like a legal document.

Not like a developer.

Writing should always be

- Clear
- Short
- Friendly
- Professional
- Action-oriented

---

# Core Principles

Every piece of content must be

- Easy to understand
- Easy to scan
- Consistent
- Helpful
- Human

---

# Tone of Voice

The application should sound

Professional

Helpful

Confident

Respectful

Calm

Never sound

Robotic

Passive aggressive

Sarcastic

Overly technical

Marketing focused

---

# Writing Style

Prefer

Short sentences.

Active voice.

Simple words.

Common vocabulary.

Avoid

Long paragraphs.

Buzzwords.

Technical jargon.

Complex grammar.

---

# Page Titles

Titles should describe the page.

Good

Customers

Orders

Reports

Account Settings

Bad

Customer Management Interface

Report Administration Portal

---

# Page Descriptions

Only include descriptions when they add value.

Good

Manage your customer information and activity.

Bad

This page allows users to manage customer information within the system.

---

# Button Labels

Buttons describe actions.

Always begin with a verb.

Good

Save Changes

Create Customer

Generate Report

Approve Request

Invite Member

Bad

OK

Go

Continue

Click Here

Yes

---

# Navigation Labels

Navigation describes destinations.

Use nouns.

Good

Customers

Invoices

Projects

Reports

Bad

Manage

Go

Open

View

---

# Form Labels

Labels describe information. Use **sentence case** (see `01` casing matrix).

Good

Email address

Phone number

Billing address

Bad

Email

Input

Information

(Do not Title Case form labels. Page titles and nav use Title Case.)

---

# Placeholder Text

Placeholder text provides examples.

Never replace labels.

Good

example@email.com

Bad

Enter your email address here

---

# Helper Text

Use helper text only when necessary.

Explain

Accepted format

Restrictions

Why information is required

Keep helper text short.

---

# Required Fields

Mark only truly required fields.

Example

Email address *

Optional fields should say

(optional)

Never make every field required.

---

# Empty States

Every empty state should include

Title

Explanation

Action

Good

No invoices yet.

Create your first invoice to get started.

[Create Invoice]

Bad

No Data

---

# Success Messages

Keep success messages short.

Good

Customer created.

Profile updated.

Changes saved.

Bad

The operation completed successfully.

---

# Error Messages

Explain

What happened.

How to fix it.

Good

Password must contain at least 8 characters.

Bad

Validation Error.

---

# Warning Messages

Warn users before risky actions.

Good

Deleting this customer cannot be undone.

Bad

Warning!

---

# Confirmation Dialogs

Title

Action

Consequence

Primary Action

Cancel

Example

Delete Customer

This action cannot be undone.

Delete

Cancel

---

# Notifications

Keep notifications concise.

Good

Invoice sent.

Bad

Your invoice has been successfully processed and delivered.

---

# Search

Search placeholders should explain what can be searched.

Good

Search customers...

Search invoices...

Bad

Search...

---

# Filters

Labels should be obvious.

Good

Status

Department

Date Range

Bad

Options

Category

---

# Dates

Use consistent formats.

Prefer

12 Jul 2026

or

Jul 12, 2026

Never mix formats.

---

# Numbers

Use thousands separators.

Good

12,450

Bad

12450

Display currency appropriately.

Example

$12,450.00

---

# Time

Display relative time when useful.

Examples

5 minutes ago

Yesterday

Today

Display exact timestamps when precision matters.

---

# Tables

Column names should be short.

Good

Customer

Status

Amount

Created

Bad

Customer Full Name Information

---

# Tooltips

Explain

Why

Not

What

Good

Only administrators can edit this setting.

Bad

Admin Button

---

# Links

Link text should describe the destination.

Good

View Customer Details

Bad

Click Here

---

# Loading Text

Good

Loading customers...

Saving changes...

Generating report...

Bad

Loading...

---

# Login

Be welcoming.

Good

Welcome back.

Sign in to continue.

Bad

Authentication Required

---

# Logout

Good

You have signed out successfully.

Bad

Session terminated.

---

# Permissions

Explain why users cannot perform an action.

Good

Only administrators can delete projects.

Bad

Permission denied.

---

# Validation Messages

Explain exactly what needs to change.

Good

Phone number must contain 10 digits.

Bad

Invalid value.

---

# AI Writing Rules

AI MUST

Follow the capitalization matrix in `01_design_system.md` / README:

- Actions, form labels, toasts → sentence case (`Save changes`, `Email address`)
- Page titles, section headers, nav → Title Case (`Account Settings`)

Use active voice.

Keep sentences under 20 words when possible.

Write at approximately Grade 8 reading level.

Prefer verbs for actions.

Prefer nouns for navigation.

Be concise.

---

# AI MUST NEVER

Use technical jargon.

Write robotic messages.

Use exclamation marks excessively.

Use ALL CAPS.

Blame the user.

Use vague wording.

Duplicate information.

Write paragraphs longer than four lines inside the interface.

---

# Validation Checklist

✓ Sentence case for actions, labels, toasts

✓ Title Case for page titles and navigation

✓ Active voice

✓ Clear actions

✓ Short labels

✓ Helpful errors

✓ Helpful empty states

✓ Helpful success messages

✓ Consistent terminology

✓ Professional tone

✓ Human language

✓ Accessible reading level

---

# Final Principle

Users should never stop to understand the wording.

Good interface copy disappears into the experience.

If users notice the writing, it should be because it helped them—not because it confused them.

---

## 13_interaction_patterns — Interaction patterns

Source: default (13_interaction_patterns.md)

# 13_interaction_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how users interact with every component in the application.

Interactions should feel predictable, responsive, and effortless.

Every interaction should provide immediate feedback and reinforce user confidence.

Users should never wonder whether an interaction worked.

---

# Design Philosophy

Interfaces should feel alive.

Every interaction should have a clear beginning, response, and completion.

Interactions should reduce effort—not increase it.

Animations exist to explain changes, not decorate the interface.

---

# Core Principles

Every interaction should be

- Predictable
- Responsive
- Consistent
- Accessible
- Forgiving
- Fast

---

# Interaction Lifecycle

Every interaction follows this sequence.

User Action

↓

Immediate Feedback

↓

Processing

↓

Completion

↓

Next Available Action

Never skip any stage.

---

# Click Interactions

Buttons should immediately indicate interaction.

Rules

- Show hover state.
- Show pressed state.
- Show loading when processing.
- Disable repeated submissions while processing.
- Restore normal state after completion.

Never leave buttons unchanged after clicking.

---

# Hover States

Use hover only to indicate interactivity.

Examples

- Buttons
- Links
- Cards
- Table Rows
- Menu Items

Never hide critical information behind hover.

Hover effects should never be required on touch devices.

---

# Focus States

Keyboard focus must always be visible.

Every interactive element requires a focus state.

Focus styling should be consistent across the application.

Never remove focus indicators.

---

# Active States

Selected items must remain visually distinct.

Examples

- Active Navigation
- Selected Card
- Selected Row
- Active Tab
- Selected Filter

Users should always know what is selected.

---

# Disabled States

Disabled controls must clearly communicate they are unavailable.

Rules

- Reduce emphasis.
- Maintain readability.
- Explain why when appropriate.

Never disable controls without explanation if the reason is not obvious.

---

# Loading Interactions

During processing

- Disable duplicate actions.
- Display progress.
- Preserve layout.
- Keep users informed.

Never freeze the interface.

---

# Optimistic Updates

Use optimistic updates when operations are highly likely to succeed.

Examples

- Like
- Favorite
- Archive
- Mark Complete

If an operation fails

Restore previous state

Display explanation

Offer retry

---

# Inline Editing

Allow inline editing only for simple changes.

Examples

- Name
- Status
- Tags

Complex editing should open a dedicated form.

Always support

Save

Cancel

Keyboard shortcuts

---

# Selection

Selection should always be visible.

Support

Single Selection

Multi Selection

Range Selection (Shift)

Select All

Never lose selections unexpectedly.

---

# Drag and Drop

Use only when it significantly improves productivity.

Examples

- Kanban Boards
- File Upload
- Reordering Lists

Always provide

Visual placeholder

Drop indicator

Success feedback

Alternative keyboard interaction

---

# Context Menus

Use for secondary actions.

Never hide primary actions inside context menus.

Keep menus concise.

Group related actions.

Separate destructive actions.

---

# Keyboard Shortcuts

Support shortcuts for frequently used actions.

Examples

Ctrl/Cmd + K

Search

Ctrl/Cmd + S

Save

Esc

Close

Enter

Submit

Delete

Delete Selected

Display shortcuts where appropriate.

---

# Undo

For **recoverable** actions (soft delete, archive, dismiss):

Prefer Undo over a confirmation modal.

Good

Delete customer

↓

Undo available for 10 seconds

For **irreversible / high-impact** actions (permanent delete, purge, cancel subscription):

Require **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

---

# Confirmations

Require confirmation (Alert Dialog) only for

Irreversible

High-risk / high-impact

actions.

Do not confirm recoverable soft deletes when Undo is available.

Avoid confirmation fatigue.

---

# Auto Save

Where appropriate

Save automatically.

Communicate status.

Saving...

↓

Saved

Never make users wonder whether work has been lost.

---

# Refresh

Refreshing should preserve

Scroll position

Selection

Filters

Sorting

Expanded sections

Avoid resetting user context.

---

# Search Interaction

Search should

Respond immediately.

Debounce requests.

Highlight matches.

Remember recent searches.

Never require explicit search buttons unless necessary.

---

# Filter Interaction

Changing filters should

Update results quickly.

Display active filters.

Support clearing filters.

Remember preferences.

---

# Pagination

Users should remain oriented.

Preserve

Sorting

Filters

Search

Selection where possible

---

# Notifications

Do not interrupt users unnecessarily.

Success

Toast

Error

Persistent

Critical

Modal only if required

Choose the least disruptive feedback possible.

---

# Animations

Animations should explain

Movement

Expansion

Loading

State changes

Never animate for decoration.

Duration

Interactive transitions: 150–200ms

Overlay enter/exit: up to 300ms allowed

Continuous indicators (spinner, skeleton shimmer): exempt; honor prefers-reduced-motion

---

# Accessibility

Every interaction must support

Keyboard

Screen Readers

Reduced Motion

Touch

Mouse

No interaction should depend on only one input method.

---

# Performance

Interactions should feel immediate.

Target

Visual Response

<100ms

Loading Feedback

<200ms

Long Operations

Progress Indicator

Never leave users without feedback.

---

# AI MUST

Generate hover states.

Generate focus states.

Generate active states.

Generate loading states.

Generate disabled states.

Support keyboard interaction.

Support touch interaction.

Generate meaningful animations.

Support undo where possible.

Support retry where appropriate.

---

# AI MUST NEVER

Hide primary actions.

Require hover to reveal critical functionality.

Create inconsistent interaction patterns.

Remove keyboard accessibility.

Use excessive animations.

Interrupt users unnecessarily.

Reset user context unexpectedly.

Ignore loading states.

---

# Validation Checklist

✓ Hover states

✓ Focus states

✓ Active states

✓ Disabled states

✓ Loading states

✓ Success feedback

✓ Error feedback

✓ Keyboard support

✓ Touch support

✓ Accessible interactions

✓ Animation duration appropriate

✓ Context preserved

✓ Undo where applicable

✓ Retry where applicable

---

# Final Principle

Users should feel confident interacting with the interface.

Every interaction should be predictable, immediate, and reassuring.

If users hesitate before clicking, the interaction design has failed.

---

## 14_ai_validation_rules — AI validation rules

Source: default (14_ai_validation_rules.md)

# 14_ai_validation_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory validation process that every AI-generated interface must pass before it is considered complete.

Generating an interface is only the first step.

Every generated screen must validate itself, identify problems, automatically fix problems where possible, and only then present the final result.

Never consider the first generated UI to be the final UI.

Generation → Validation → Improvement is mandatory.

Validation criteria must follow the reconciled rules in `README.md` and must not invent policies that contradict higher-priority docs (`11` → `01` → domain patterns → …).

---

# AI Design Review Process

Every generated screen follows this workflow.

Requirements

↓

Generate Initial UI

↓

Run Validation

↓

Identify Issues

↓

Fix Issues

↓

Run Validation Again

↓

Repeat Until Score ≥ 95

↓

Return Final UI

---

# Validation Categories

Every screen must be evaluated in the following areas.

1. UX

2. Layout

3. Visual Design

4. Accessibility

5. Content

6. Interaction

7. Responsive Design

8. Performance

9. Technical Quality

No category may fail.

---

# UX Validation

Validate

✓ Purpose obvious

✓ Primary workflow obvious

✓ One primary CTA in page header (no stacked primaries in viewport)

✓ Logical information hierarchy

✓ Low cognitive load

✓ Related information grouped

✓ Navigation predictable

✓ Error prevention exists

✓ Recovery exists

Automatic Failure

✗ Multiple primary workflows

✗ Multiple orange primary buttons in the same viewport

✗ Confusing layout

✗ Missing primary action

---

# Layout Validation

Validate

✓ Proper spacing

✓ Consistent alignment

✓ Grid respected

✓ Balanced layout

✓ No floating elements

✓ Proper section spacing

Automatic Failure

✗ Misaligned content

✗ Random spacing

✗ Broken layout

---

# Design Validation

Validate

✓ Design System followed

✓ Correct typography

✓ Proper colors

✓ Proper icons

✓ Proper shadows

✓ Proper radius

✓ Proper elevation

Automatic Failure

✗ Custom colors

✗ Inconsistent typography

✗ Mixed component styles

---

# Component Validation

Validate

✓ Correct component used

✓ Proper component hierarchy

✓ Existing component reused

✓ Proper variants used

Automatic Failure

✗ Reinventing components

✗ Incorrect controls

---

# Content Validation

Validate

✓ Good page title

✓ Clear labels

✓ Helpful helper text

✓ Meaningful buttons

✓ Good error messages

✓ Professional wording

Automatic Failure

✗ Placeholder labels

✗ Generic errors

✗ Technical jargon

---

# Form Validation

Validate

✓ Labels

✓ Validation

✓ Required fields

✓ Helper text

✓ Logical grouping

✓ Correct input types

Automatic Failure

✗ Placeholder-only labels

✗ Giant forms

✗ Missing validation

---

# Table Validation

Follow `05_table_patterns.md`.

For **static Table** (small read-only sets):

✓ Semantic headers

✓ Status with text (not color alone)

✓ Numbers right-aligned when numeric

Do **not** fail static tables for missing search/sort/pagination.

For **Data Table** (when task needs interaction / large sets):

✓ Search when browsing many named entities

✓ Sorting when comparison is required

✓ Filters when facets exist

✓ Pagination or virtualization for large datasets

✓ Empty / loading / error states for async data

Automatic Failure (Data Table only)

✗ Unsortable columns when comparison is the primary task

✗ No search on large entity directories

✗ Missing empty or loading states for async tables

---

# Dashboard Validation

Validate

✓ KPIs

✓ Alerts

✓ Charts

✓ Activity

✓ Quick Actions

✓ Proper hierarchy

Automatic Failure

✗ Too many widgets

✗ Decorative charts

✗ No business focus

---

# Navigation Validation

Validate

✓ Current location

✓ Breadcrumbs

✓ Search

✓ Responsive navigation

✓ Logical hierarchy

Automatic Failure

✗ Dead ends

✗ Hidden navigation

✗ Deep nesting

---

# Interaction Validation

Validate

✓ Hover

✓ Focus

✓ Active

✓ Loading

✓ Disabled

✓ Success

✓ Error

✓ Retry

✓ Undo

Automatic Failure

✗ No loading

✗ No focus

✗ Missing feedback

---

# Accessibility Validation

Validate

✓ Keyboard support

✓ Focus indicators

✓ Color contrast

✓ Alt text

✓ Labels

✓ ARIA

✓ Screen reader support

Automatic Failure

✗ Accessibility blocker

---

# Responsive Validation

Validate

Desktop

Tablet

Mobile

Landscape

Portrait

Automatic Failure

✗ Horizontal scrolling

✗ Broken layout

✗ Hidden functionality

---

# Performance Validation

Validate

✓ Lazy loading

✓ Skeletons

✓ Optimized images

✓ Progressive loading

✓ Efficient rendering

Automatic Failure

✗ Blank loading screens

✗ Large layout shifts

---

# Visual Inspection

AI should inspect

Text clipping

↓

Component overlap

↓

Broken alignment

↓

Overflow

↓

Uneven spacing

↓

Visual balance

↓

Empty space

↓

Crowding

Every issue should be corrected automatically.

---

# Content Inspection

AI should inspect

Grammar

↓

Consistency

↓

Terminology

↓

Tone

↓

Capitalization

↓

Readability

↓

Accessibility

---

# UX Inspection

AI should inspect

Can users understand this page?

↓

Can users finish their task?

↓

Can users recover from mistakes?

↓

Can users find important actions?

↓

Can users navigate easily?

---

# Automatic Improvements

AI should automatically fix

Spacing

Alignment

Typography

Button hierarchy

Missing labels

Missing loading states

Missing empty states

Missing errors

Missing helper text

Responsive issues

Accessibility issues

Poor wording

Do not require human approval for these fixes.

---

# AI MUST

Run every validation category.

Automatically fix detected issues.

Revalidate after fixes.

Continue until quality threshold is reached.

Never stop after the first generation.

---

# AI MUST NEVER

Skip validation.

Ignore accessibility.

Ignore responsiveness.

Ignore content quality.

Ignore UX.

Output low-quality UI.

Return UI with known issues.

---

# Quality Score

Each category contributes equally.

UX                         10

Layout                     10

Design System              10

Components                 10

Content                    10

Accessibility              10

Responsive                 10

Interaction                10

Performance                10

Technical Quality          10

-------------------------------

Total                     100

---

# Release Rules

Score

95–100

Ready

90–94

Improve Automatically

80–89

Major Revision Required

Below 80

Reject

Automatic release is prohibited below 95.

---

# Blocking Issues

The following automatically fail validation.

• Text clipping

• Overflow

• Component overlap

• Broken navigation

• Missing labels

• Accessibility failure

• Missing loading state

• Missing error state

• Broken responsive layout

• Missing primary action in page chrome

• Multiple primary CTAs in the same viewport

• Incorrect component usage

• Design System violation

• Placeholder-only labels

• Horizontal scrolling that hides critical content with no mobile strategy

• Hidden critical functionality

• Toast-only handling of irreversible destructive actions

• Sheet/Drawer breakpoint ignored (≥640 Sheet / &lt;640 Drawer)

• Missing required region from `.ops4/design-system/screens/` blueprint (collapsed multi-region screen into a single Card/form)

• Thin admin/CRUD scaffold where the locked build prompt specified production-grade multi-panel composition

A screen with any blocker must never be considered complete.

---

# Final Principle

Generating an interface is not success.

A successful interface is one that has been generated, validated, improved, validated again, and proven to meet the standards defined by Aperture Design Governance.

Quality is verified.

Never assumed.

---

## Requirements
- For every screen and modal, ensure all fields, filters, columns, badges, and meta fields from the latest Page by Page Data Points are present and visible.
- Implement all documented filters (search, multi-select, date range, toggles, etc.) above tables/lists using shadcn/ui components.
- Display all table columns, badges, and meta fields as specified per page, including AI match confidence, AHPRA verification status, assignment, etc.
- Implement all status variants (empty, loading, error, plan_limit, permission_denied) with correct illustration, messaging, and CTA per data points.
- Apply all role-based visibility and data masking rules as described in the data points and business rules.
- Do not change layout, styling, navigation structure, or component patterns—only enrich each screen to surface all required data points and edge case states.
- Use only existing shadcn/ui component patterns as per the locked Design Brain prompt.

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
- Open `.ops4/design-system/README.md` plus `01`–`14` for tokens/a11y; locked build prompt + blueprints win for composition.

## Acceptance Criteria
- All screens and modals display the updated data points, filters, columns, badges, and status variants as per the latest Page by Page Data Points.
- Role-based visibility and data masking are enforced according to business rules.
- No changes to layout, navigation, or component patterns outside of enriching with new data points.
- All status variants (empty, loading, error, plan_limit, permission_denied) are implemented per screen.
- Lint passes
- Build passes
- PR opened to default branch
- UI follows Aperture guideline docs under `.ops4/design-system/` for tokens/a11y; composition follows the locked build prompt and screen blueprints.

## Agent Instructions
Create a new branch named:
`ai-build/issue-21-enrich-all-screens-with-updated-data-points-and-`

Base branch: `main`
PR target: `main`

Implement this issue only.
Open a Pull Request to the repository default branch.
PR title should be:
AI Build: Enrich all screens with updated data points and design guidelines

PR body should include:
- Summary
- Files changed
- Validation results
- Screenshots of key screens (required for UI builds)
- Checklist of blueprint regions implemented
- Closes #21

Apply only the requested incremental change.
Preserve existing layout, theme, typography, spacing, colors, and components except where the change requires updates.
Reuse the existing design system and components.
When the 14 design guideline documents are provided, use them for tokens/UX validation; do not invent a new palette or shell.
When page-by-page data points are provided, use them as the source of truth for form fields, tables, filters, and statuses.
When screen blueprints are provided, do not collapse required regions.