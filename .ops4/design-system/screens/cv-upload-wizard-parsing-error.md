# Screen blueprint: CV Upload Wizard: Parsing Error

Route: `/doctors/add/cv-review`
Layout: **two-column-main-rail**

## Required regions
- **header**: Wizard navigation and context — components: StepIndicator, PageTitle, PlanLimitBanner, PermissionDeniedBanner
- **main**: Parsing error message and manual entry fallback — components: ParsingErrorAlert, ManualEntryFields, RetryUploadButton
- **rail**: Original CV preview for reference — components: OriginalCVPreviewPanel

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| error/manual fields | CV preview |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).