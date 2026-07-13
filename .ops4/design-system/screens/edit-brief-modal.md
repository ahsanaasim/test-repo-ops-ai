# Screen blueprint: Edit Brief Modal

Route: `/briefs/:id/edit`
Purpose: Edit brief details, requirements, assignment.
Layout: **single-column-form**

## Required regions
- **form-panel**: Edit brief details, requirements, and assignment.
- **footer**: Form actions.
- **state-variant**: Display loading spinner, error, plan limit, or permission denied messages.

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