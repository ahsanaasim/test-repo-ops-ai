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