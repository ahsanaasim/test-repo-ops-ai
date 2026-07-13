# Screen blueprint: Admin Area

Route: `/admin`
Purpose: Manage users, roles, permissions, audit logs, data retention.
Layout: **two-column-main-rail**

## Required regions
- **admin-tabs-header**: Tab navigation for admin sections
- **admin-main-panel**: Main content area for selected tab

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