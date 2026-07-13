# Screen blueprint: Send Outreach Confirmation Modal

Route: `/outreach/send-confirm`
Purpose: Confirm send now or save as draft.
Layout: **single-column-form**

## Required regions
- **modal-header**: Title and cancel action
- **modal-body**: Confirmation details and consent
- **modal-footer**: Primary actions

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