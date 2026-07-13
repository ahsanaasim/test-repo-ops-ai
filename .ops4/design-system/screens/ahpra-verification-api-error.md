# Screen blueprint: AHPRA Verification API Error

Route: `/doctors/:id/verify`
Layout: **single-column-form**

## Required regions
- **panel**: AHPRA verification error and manual fallback — components: APIErrorAlert, ManualVerificationButton, RetryButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [API Error]   |
| [Manual Btn]  |
| [Retry]       |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).