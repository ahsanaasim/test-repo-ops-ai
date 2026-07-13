# Screen blueprint: Add Follow-Up Modal

Route: `/follow-ups/add`
Layout: **single-column-form**

## Required regions
- **form-panel**: Create new follow-up task — components: DueDatePicker, PrioritySelect, StatusSelect, NotesTextarea, AssigneeSelect
- **footer**: Form actions — components: SaveButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
|───────────────|
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).