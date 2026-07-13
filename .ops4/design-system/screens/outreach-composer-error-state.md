# Screen blueprint: Outreach Composer Error State

Route: `/outreach/error`
Layout: **two-column-main-rail**

## Required regions
- **main**: Show outreach send error and retry — components: ErrorAlert, RetryButton
- **context-rail**: Related context for outreach — components: RelatedBriefCard, PreviousContactList

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| error + retry | context rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).