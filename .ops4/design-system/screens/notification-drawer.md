# Screen blueprint: Notification Drawer

Route: `/dashboard/notifications`
Purpose: Show in-app notifications, alerts, and reminders.
Layout: **drawer**

## Required regions
- **drawer-header**: Drawer title, close button, and filters
- **drawer-content**: Scrollable notification list, grouped by date/type
- **drawer-status**: Status banners/messages for empty, error, plan limit, or permission denied states

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