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