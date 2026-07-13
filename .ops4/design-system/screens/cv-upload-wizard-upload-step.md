# Screen blueprint: CV Upload Wizard: Upload Step

Route: `/doctors/add/cv-upload`
Layout: **single-column-form**

## Required regions
- **header**: Wizard navigation and context — components: StepIndicator, PageTitle, PlanLimitBanner, PermissionDeniedBanner
- **panel**: File upload interaction and requirements — components: UploadArea, FileRequirementsTooltip, SupportedFileTypesBadge, MaxFileSizeTooltip, ProgressBar, ErrorMessage, FileNamePreview, RemoveFileAction
- **footer**: Primary and secondary actions — components: UploadButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Step][Title] |
| [UploadArea]  |
| [Progress]    |
| [File Info]   |
|───────────────|
| [Upload][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).