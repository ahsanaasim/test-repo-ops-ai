# Screen blueprint: Doctor List Loading State

Route: `/doctors`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Always-visible contextual filters for doctor search (disabled during loading) — components: SearchInput (disabled), SpecialtySelect (disabled), LocationSelect (disabled), AHPRAStatusSelect (disabled), AvailabilitySelect (disabled)
- **main-panel**: Loading skeleton for doctor table and spinner — components: DoctorTableSkeleton, LoadingSpinner

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters (d) | skeleton table |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).