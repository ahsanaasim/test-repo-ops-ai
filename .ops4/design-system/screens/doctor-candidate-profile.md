# Screen blueprint: Doctor Candidate Profile

Route: `/doctors/:id`
Purpose: Full candidate view: data, documents, AHPRA status, communication, follow-ups, timeline.
Layout: **two-column-main-rail**

## Required regions
- **main**: Candidate profile details and tabbed content
- **context-rail**: Quick actions, status, and meta info

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