# Screen blueprint: Candidate Activity Timeline Drawer

Route: `/doctors/:id/timeline`
Purpose: Show chronological log of all candidate activity.
Layout: **drawer-panel**

## Required regions
- **drawer-header**: Timeline filters and close action
- **drawer-content**: Timeline event list and details

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