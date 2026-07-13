# Screen blueprint: Add Doctor Modal

Route: `/doctors/add`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Add doctor via CV upload or manual entry, with duplicate detection and error handling — components: UploadCVField, ManualEntryToggle, FirstNameInput, LastNameInput, EmailInput, PhoneInput, SpecialtyInput, LocationInput, AHPRAInput, AvailabilitySelect, UploadProgressBar, DuplicateDetectionBanner, DuplicateResolutionModal, ContinueButton, CancelButton, LoadingSpinner, ErrorMessage, RetryButton, PlanLimitMessage, UpgradePlanButton, PermissionDeniedMessage, InvalidUploadMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [CV/Manual]   |
| [Fields]      |
| [Progress]    |
| [Dup/Error]   |
| [Continue][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).