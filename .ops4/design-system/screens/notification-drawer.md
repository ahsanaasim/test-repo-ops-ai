# Screen blueprint: Notification Drawer

Route: `/dashboard/notifications`
Layout: **drawer**

## Required regions
- **drawer-header**: Drawer title, close button, and filters — components: DrawerTitle, DrawerCloseButton, NotificationTypeFilter, UnreadOnlyFilter
- **drawer-content**: Scrollable notification list, grouped by date/type — components: NotificationGroupHeader, NotificationList, NotificationTypeBadge, NotificationTimestamp, NotificationContent, UnreadIndicator, MarkAsReadAction, GoToRelatedItemAction, NotificationTooltip
- **drawer-status**: Status banners/messages for empty, error, plan limit, or permission denied states — components: EmptyStateMessage, ErrorMessage, RetryAction, PlanLimitMessage, PermissionDeniedMessage, NotificationListSkeleton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌─────────────main─────────────┬─notif drawer─┐
|                             | [header]     |
|                             | [filters]    |
|                             | [notif list] |
|                             | [status]     |
└─────────────────────────────┴──────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).