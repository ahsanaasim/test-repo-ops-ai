# Screen blueprint: AHPRA Manual Verification: Upload Docs

Route: `/doctors/:id/verify/manual-upload`
Layout: **single-column-form**

## Required regions
- **panel**: Upload supporting documents for manual verification — components: UploadDocsField, DocsListPreview, RemoveDocAction, UploadProgressBar
- **footer**: Form actions — components: ContinueButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Upload Docs] |
| [Docs List]   |
| [Progress]    |
|───────────────|
| [Continue][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).