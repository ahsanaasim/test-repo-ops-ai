# Screen blueprint: Add New Brief Modal

Route: `/briefs/add`
Layout: **single-column-form**

## Required regions
- **form**: Input fields for new brief — components: ClientNameInput, BriefTitleInput, RoleTypeSelect, SpecialtyInput, LocationInput, StartDatePicker, EndDatePicker, EmploymentTypeSelect, NumberOfPositionsInput, BriefDescriptionTextarea, RequirementsTextarea, NotesTextarea, AssignedRecruiterSelect
- **footer**: Form actions — components: SaveBriefButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Add Fields]  |
|───────────────|
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).