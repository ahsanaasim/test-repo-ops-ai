# Screen blueprint: AHPRA Manual Verification: Add Notes

Route: `/doctors/:id/verify/manual-notes`
Layout: **single-column-form**

## Required regions
- **panel**: Add internal verification notes — components: VerificationNotesTextarea
- **footer**: Form actions — components: ContinueButton, BackButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Notes]       |
|───────────────|
| [Continue][Back][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).