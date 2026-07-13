# Screen blueprint: Personalization Fields Modal

Route: `/outreach/personalize`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Edit personalization fields for message — components: DynamicFieldsList, FieldValidationIndicators, SaveButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
| [Validation]  |
| [Save][Cancel]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).