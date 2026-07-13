# Screen blueprint: Brief List Loading State

Route: `/briefs`
Purpose: Show while briefs load.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display brief list table or state variant (skeleton, empty, error, plan limit, permission denied).
- **toolbar**: Table-level actions and filters (when not loading/empty/plan limit/permission denied).

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