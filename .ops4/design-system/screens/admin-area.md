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