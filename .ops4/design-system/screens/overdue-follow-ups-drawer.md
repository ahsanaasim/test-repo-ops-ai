# Screen blueprint: Overdue Follow-Ups Drawer

Route: `/follow-ups/overdue`
Layout: **drawer**

## Required regions
- **drawer-header**: Drawer title and close — components: DrawerTitle, DrawerCloseButton
- **drawer-content**: List of overdue follow-ups with quick actions — components: OverdueFollowUpList, MarkCompleteAction, RescheduleAction, ContactAssigneeAction

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | overdue drawer |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).