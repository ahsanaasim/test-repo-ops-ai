# Screen blueprint: AHPRA Manual Verification: Submit for Review

Route: `/doctors/:id/verify/manual-submit`
Layout: **single-column-form**

## Required regions
- **panel**: Submit manual verification for manager review — components: SummaryCard, SubmitForReviewButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Summary]     |
| [Submit][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).