# Screen blueprint: Login Loading State

Route: `/login`
Layout: **single-column-form**

## Required regions
- **centered-panel**: Primary authentication form region (disabled) with loading spinner overlay — components: LogoHeader, EmailInput (disabled), PasswordInput (disabled), ShowPasswordToggle (disabled), LoginButton (disabled), ForgotPasswordLink (disabled), LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
|   [Logo]      |
| [Email] (d)   |
| [Password](d) |
| [Show/Hide](d)|
| [Login Btn](d)|
| [Forgot?](d)  |
| [Spinner]     |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).