# Screen blueprint: Edit Doctor Profile Modal

Route: `/doctors/:id/edit`
Purpose: Edit candidate data, status, notes.
Layout: **single-column-form**

## Required regions
- **modal-form**: Edit doctor profile fields
- **modal-footer**: Form actions

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