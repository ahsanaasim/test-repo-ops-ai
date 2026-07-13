# Screen blueprint: Add Doctor Modal

Route: `/doctors/add`
Purpose: Start new doctor profile via CV upload or manual entry.
Layout: **single-column-form**

## Required regions
- **modal-panel**: Add doctor via CV upload or manual entry, with duplicate detection and error handling

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