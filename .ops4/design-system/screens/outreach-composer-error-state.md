# Screen blueprint: Outreach Composer Error State

Route: `/outreach`
Purpose: Show if send fails (e.g., network, consent, invalid address).
Layout: **single-column-form**

## Required regions
- **header**: Display error or plan/permission banners
- **composer-form**: Main outreach composition fields
- **footer**: Action controls for retry or dismiss

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