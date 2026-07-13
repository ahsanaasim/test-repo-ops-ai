# Screen blueprint: Overdue Follow-Ups Drawer

Route: `/follow-ups/overdue`
Purpose: Show list of overdue follow-ups.
Layout: **drawer-main**

## Required regions
- **drawer-header**: Drawer title and close action
- **drawer-filters**: Filter overdue follow-ups by assignee and priority
- **drawer-content**: Main content: table of overdue follow-ups or state messages

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