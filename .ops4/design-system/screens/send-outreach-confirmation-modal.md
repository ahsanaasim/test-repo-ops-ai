# Screen blueprint: Send Outreach Confirmation Modal

Route: `/outreach/send-confirm`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Confirm send now or save as draft — components: ConsentCheckSummary, SendNowButton, SaveAsDraftButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Consent]     |
| [Send][Draft][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).