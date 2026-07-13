# Screen blueprint: Registration Page

Route: `/register`
Layout: **single-column-form**

## Required regions
- **form-panel**: Allow new internal users to register for access — components: FirstNameInput, LastNameInput, EmailInput, PasswordInput, ConfirmPasswordInput, RegisterButton, CancelButton, ErrorAlert

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Fields]      |
| [Register][Cancel] |
| [Error]       |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).