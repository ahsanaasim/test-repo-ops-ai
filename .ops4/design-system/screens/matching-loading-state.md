# Screen blueprint: Matching Loading State

Route: `/matching`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Candidate matching filters — components: SpecialtySelect, LocationSelect, AHPRAStatusSelect, AvailabilitySelect
- **main-panel**: AI results loading skeleton — components: MatchingListSkeleton, LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | skeleton list |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).