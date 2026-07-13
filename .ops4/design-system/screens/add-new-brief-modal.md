# Screen blueprint: Add New Brief Modal

Route: `/briefs/add`
Purpose: Create a new client brief.
Layout: **single-column-form**

## Required regions
- **form**: Input fields for new brief
- **footer**: Form actions

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