# Screen blueprint: Password Reset Confirmation

Route: `/login/reset/confirm`
Layout: **single-column-form**

## Required regions
- **panel**: Main modal content for password reset confirmation — components: NewPasswordInput, ConfirmNewPasswordInput, PasswordRequirementsTooltip
- **footer**: Action buttons for modal — components: SubmitButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [NewPassword] |
| [ConfirmPwd]  |
| [PwdReqsTip]  |
|───────────────|
| [Submit][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).