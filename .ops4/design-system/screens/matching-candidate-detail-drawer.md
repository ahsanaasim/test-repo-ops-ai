# Screen blueprint: Matching Candidate Detail Drawer

Route: `/matching/:candidateId`
Purpose: Quick view of candidate details from matching list.
Layout: **drawer**

## Required regions
- **drawer-header**: Candidate identity and close action
- **drawer-main**: Candidate core details and match info
- **drawer-footer**: Candidate actions
- **drawer-status**: Status overlays (loading, error, plan, permission, empty)

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