# Screen blueprint: Edit Doctor Profile Modal

Route: `/doctors/:id/edit`
Layout: **single-column-form**

## Required regions
- **form-panel**: Edit candidate data, status, notes. — components: FirstNameInput, LastNameInput, EmailInput, PhoneInput, SpecialtyInput, LocationInput, AHPRAInput, AvailabilitySelect, StatusSelect, NotesTextarea
- **footer**: Form actions. — components: SaveAction, CancelAction
- **state-variant**: Display loading spinner, error, plan limit, or permission denied messages. — components: LoadingSpinner, ErrorMessage, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Edit Fields] |
|───────────────|
| [Save][Cancel]|
| [Status Msgs] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).