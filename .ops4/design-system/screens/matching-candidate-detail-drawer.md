# Screen blueprint: Matching Candidate Detail Drawer

Route: `/matching/:candidateId`
Layout: **drawer**

## Required regions
- **drawer-header**: Candidate summary and close — components: CandidateName, CloseButton
- **drawer-content**: Candidate actionable summary — components: Specialty, Location, AHPRAStatusBadge, AIConfidenceScore, MatchRationale, ContactActions, AssignToBriefAction, ViewFullProfileLink

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| main | candidate drawer |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).