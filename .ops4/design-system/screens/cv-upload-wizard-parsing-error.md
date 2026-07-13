# Screen blueprint: CV Upload Wizard: Parsing Error

Route: `/doctors/add/cv-review`
Purpose: Show if AI parsing fails.
Layout: **single-column-form**

## Required regions
- **main**: Display error, loading, plan, or permission state for CV parsing step.

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