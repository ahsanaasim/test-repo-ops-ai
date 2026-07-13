# Screen blueprint: CV Upload Wizard: Finalize & Save

Route: `/doctors/add/confirm`
Layout: **two-column-main-rail**

## Required regions
- **main**: Review and confirm new doctor profile — components: ProfileSummaryCard, EditFieldsButton, SaveProfileButton, CancelButton
- **rail**: Original CV preview — components: OriginalCVPreviewPanel

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| profile summary | CV preview |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).