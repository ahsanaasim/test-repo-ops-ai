# Screen blueprint: CV Upload Wizard: Upload Loading

Route: `/doctors/add/cv-upload`
Purpose: Show while file uploads.
Layout: **single-column-form**

## Required regions
- **header**: Wizard navigation and context
- **panel**: File upload progress
- **footer**: Secondary action

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