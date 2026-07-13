# Screen blueprint: Permission Denied Screen

Route: `/forbidden`
Layout: **single-column-form**

## Required regions
- **header**: Branded error headline — components: PermissionDeniedHeadline
- **panel**: Error description and guidance — components: PermissionDeniedDescription, PlanLimitMessage, ErrorMessage, LoadingSpinner
- **footer**: Action buttons for navigation/support — components: ReturnToDashboardButton, ContactSupportLink

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Denied Head] |
| [Desc/Msg]    |
| [Plan/Error]  |
| [Spinner]     |
|───────────────|
| [Return][Help]|
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).