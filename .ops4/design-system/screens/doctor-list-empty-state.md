# Screen blueprint: Doctor List Empty State

Route: `/doctors`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Always-visible contextual filters for doctor search — components: SearchInput, SpecialtySelect, LocationSelect, AHPRAStatusSelect, AvailabilitySelect
- **main-panel**: Empty state illustration, message, and primary action — components: EmptyStateIllustration, EmptyStateMessage, AddDoctorButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | empty illustration + CTA |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).