# Screen blueprint: Candidate Activity Timeline Drawer

Route: `/doctors/:id/timeline`
Layout: **drawer**

## Required regions
- **filters**: Filter and search activity timeline — components: SearchActivityInput, ActivityTypeSelect, DateRangePicker, UserSelect
- **timeline-list**: Chronological activity log — components: ActivityTimestamp, ActivityType, ActivityDescription, PerformedBy, LinkedBrief, LinkedCommunication, StatusChangeBadge, AHPRAStatusBadge, NoteContent, AttachmentIcon, AIGeneratedNoteBadge, DownloadActivityLog

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | timeline drawer (filters + log) |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).