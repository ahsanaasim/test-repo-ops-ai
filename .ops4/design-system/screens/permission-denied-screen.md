# Screen blueprint: Permission Denied Screen

Route: `/forbidden`
Purpose: Show when user tries to access unauthorized area.
Layout: **single-column-form**

## Required regions
- **header**: Branded error headline
- **panel**: Error description and guidance
- **footer**: Action buttons for navigation/support

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