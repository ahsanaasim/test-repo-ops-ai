# Screen blueprint: Follow-Up List Loading State

Route: `/follow-ups`
Purpose: Show while follow-up data loads.
Layout: **two-column-main-rail**

## Required regions
- **main**: Primary follow-up list and filters
- **context-rail**: Status banners, empty/error/plan limit/permission states

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