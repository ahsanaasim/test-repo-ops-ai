# Screen blueprint: Brief Activity Timeline Drawer

Route: `/briefs/:id/timeline`
Purpose: Show chronological log of all brief activity.
Layout: **drawer**

## Required regions
- **filters**: Filter and search activity timeline
- **timeline-list**: Chronological activity log

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).