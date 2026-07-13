# Screen blueprint: Password Reset Confirmation

Route: `/login/reset/confirm`
Purpose: Set new password after email link.
Layout: **single-column-form**

## Required regions
- **panel**: Main modal content for password reset confirmation
- **footer**: Action buttons for modal

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