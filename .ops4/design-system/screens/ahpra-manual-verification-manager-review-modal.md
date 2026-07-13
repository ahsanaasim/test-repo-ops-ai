# Screen blueprint: AHPRA Manual Verification: Manager Review Modal

Route: `/doctors/:id/verify/manual-review`
Purpose: Manager reviews manual verification submission.
Layout: **single-column-form**

## Required regions
- **header**: Display doctor identity and current verification status
- **panel**: Show verification submission details and review fields
- **footer**: Primary and secondary actions

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