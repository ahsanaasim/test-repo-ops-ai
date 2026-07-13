# Screen blueprint: CV Upload Wizard: Duplicate Detection

Route: `/doctors/add/duplicates`
Layout: **two-column-main-rail**

## Required regions
- **main**: Duplicate candidates review and resolution — components: DuplicateCandidatesList, DuplicateResolutionActions, ContinueButton, CancelButton
- **rail**: Selected duplicate candidate detail — components: CandidateDetailCard

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| duplicates list | candidate detail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).