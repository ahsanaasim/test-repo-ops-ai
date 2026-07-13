# Screen blueprint: AHPRA Manual Verification: Manager Review Modal

Route: `/doctors/:id/verify/manual-review`
Layout: **single-column-form**

## Required regions
- **panel**: Manager reviews manual verification submission — components: VerificationSummaryCard, ApproveButton, RejectButton, ReviewNotesTextarea

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Summary]     |
| [Approve][Reject] |
| [Notes]       |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).