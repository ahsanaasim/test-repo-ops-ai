# Screen blueprint: Doctor Database List

Route: `/doctors`
Layout: **two-column-main-rail**

## Required regions
- **filters**: Advanced search and filtering — components: SearchDoctorsInput, SpecialtySelect, LocationSelect, AHPRAStatusSelect, EmploymentTypeSelect, AvailabilitySelect, DuplicateStatusToggle, GeospatialSearchToggle, SavedFiltersDropdown
- **table**: Doctor candidate list — components: DoctorName, SpecialtyColumn, LocationColumn, AHPRAStatusBadge, EmploymentTypeColumn, AvailabilityColumn, DuplicateBadge, AIGeneratedNotesBadge, ProfileActions, BulkSelect, ExportListAction

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| filters | doctor table |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).