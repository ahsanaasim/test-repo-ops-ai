# Screen blueprint: Doctor List Loading State

Route: `/doctors`
Purpose: Show while doctor data loads.
Layout: **two-column-main-rail**

## Required regions
- **filters**: Always-visible contextual filters for doctor search (disabled during loading)
- **main-panel**: Loading skeleton for doctor table and spinner

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