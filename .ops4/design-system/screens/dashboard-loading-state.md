# Screen blueprint: Dashboard Loading State

Route: `/dashboard`
Purpose: Show while dashboard data loads.
Layout: **dashboard-grid**

## Required regions
- **sidebar**: Navigation and workspace context
- **topbar**: Page title, search, user menu
- **main**: Dashboard widgets and content

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