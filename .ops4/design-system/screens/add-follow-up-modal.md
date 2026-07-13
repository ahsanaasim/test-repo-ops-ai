# Screen blueprint: Add Follow-Up Modal

Route: `/follow-ups/add`
Purpose: Create new follow-up task.
Layout: **single-column-form**

## Required regions
- **modal-form**: Add follow-up task form
- **modal-footer**: Form actions and status

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