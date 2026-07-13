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