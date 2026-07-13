# Screen blueprint: Edit Follow-Up Modal

Route: `/follow-ups/:id/edit`
Layout: **single-column-form**

## Required regions
- **form-panel**: Edit follow-up task details — components: DueDatePicker, PrioritySelect, StatusSelect, NotesTextarea, AssigneeSelect
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