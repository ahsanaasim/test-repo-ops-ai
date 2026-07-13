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