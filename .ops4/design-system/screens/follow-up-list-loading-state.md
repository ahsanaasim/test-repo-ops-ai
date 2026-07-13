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