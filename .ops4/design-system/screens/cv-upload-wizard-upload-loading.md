# Screen blueprint: CV Upload Wizard: Upload Loading

Route: `/doctors/add/cv-upload`
Layout: **single-column-form**

## Required regions
- **header**: Wizard navigation and context — components: StepIndicator, PageTitle
- **panel**: File upload progress — components: UploadArea, ProgressBar, FileNamePreview
- **footer**: Secondary action — components: CancelButton

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
| [Cancel]      |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).