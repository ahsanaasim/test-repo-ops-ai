# Screen blueprint: CV Upload Wizard: Duplicate Detection

Route: `/doctors/add/duplicates`
Purpose: Review potential duplicate candidates.
Layout: **two-column-main-rail**

## Required regions
- **main**: Display duplicate candidates table or empty/error/loading/plan/permission state.
- **footer**: Primary actions for resolving duplicates or continuing.

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