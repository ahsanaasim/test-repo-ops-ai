# Screen blueprint: AHPRA Manual Verification: Upload Docs

Route: `/doctors/:id/verify/manual-upload`
Purpose: Upload supporting documents for manual verification.
Layout: **single-column-form**

## Required regions
- **header**: Wizard step navigation and candidate context
- **panel**: Document upload and validation
- **footer**: Wizard navigation actions

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