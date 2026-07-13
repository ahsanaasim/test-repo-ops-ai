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