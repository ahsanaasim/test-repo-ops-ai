# Screen blueprint: Matching Loading State

Route: `/matching`
Purpose: Show while AI results load.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display skeleton cards for candidate matching results
- **filters**: Show skeletons for filters above results
- **panel**: Display error, plan, or permission messages

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