# Screen blueprint: Login Error State

Route: `/login`
Layout: **single-column-form**

## Required regions
- **centered-panel**: Primary authentication form region with error alert — components: LogoHeader, EmailInput, PasswordInput, ShowPasswordToggle, LoginButton, ForgotPasswordLink, ErrorAlert

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
|   [Logo]      |
| [Email]       |
| [Password]    |
| [Show/Hide]   |
| [Login Btn]   |
| [Forgot?]     |
| [ErrorAlert]  |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).