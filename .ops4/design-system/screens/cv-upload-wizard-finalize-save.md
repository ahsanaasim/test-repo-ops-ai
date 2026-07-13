# Screen blueprint: CV Upload Wizard: Finalize & Save

Route: `/doctors/add/confirm`
Purpose: Confirm and save new doctor profile.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display doctor profile summary, audit log, and actions to save or edit.
- **footer**: Primary actions for saving or editing doctor profile.

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