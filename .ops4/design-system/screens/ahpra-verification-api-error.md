# Screen blueprint: AHPRA Verification API Error

Route: `/doctors/:id/verify`
Purpose: Show if API check fails.
Layout: **single-column-form**

## Required regions
- **panel**: Error and status messages
- **footer**: Action controls

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