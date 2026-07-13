# Screen blueprint: Client Brief Detail

Route: `/briefs/:id`
Purpose: View/edit a client brief, requirements, status, linked candidates, timeline.
Layout: **master-detail**

## Required regions
- **main**: Display brief header, details, and tabbed content (details, candidates, timeline).
- **tab-content**: Show tab-specific content: details, candidate list, or activity timeline.
- **state-variant**: Display skeletons, error, plan limit, or permission denied messages as overlays or in main region.

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