# Screen blueprint: Login Screen

Route: `/login`
Layout: **single-column-form**

## Required regions
- **centered-panel**: Primary authentication form region — components: LogoHeader, EmailInput, PasswordInput, ShowPasswordToggle, LoginButton, ForgotPasswordLink, SessionExpiryTooltip, ErrorAlert, PlanLimitBanner, PermissionDeniedBanner

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
| [Error/Plan]  |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).