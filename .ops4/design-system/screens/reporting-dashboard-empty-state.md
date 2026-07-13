# Screen blueprint: Reporting Dashboard Empty State

Route: `/reporting`
Purpose: Show when no data matches filters.
Layout: **dashboard-grid**

## Required regions
- **dashboard-header**: Page title and banners (none visible in empty state)
- **dashboard-filters-toolbar**: Filters and (disabled) export actions
- **dashboard-metrics**: Empty state prompt

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).