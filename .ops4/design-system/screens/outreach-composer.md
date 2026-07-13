# Screen blueprint: Outreach Composer

Route: `/outreach`
Layout: **two-column-main-rail**

## Required regions
- **main**: Compose and send outreach messages — components: RecipientCard, ChannelToggle, SubjectInput, MessageBodyTextarea, TemplateSelectorButton, PersonalizationFieldsButton, ConsentCheckbox, SendNowButton, SaveAsDraftButton, ErrorAlert, LoadingSpinner
- **context-rail**: Related context for outreach — components: RelatedBriefCard, PreviousContactList, CandidateProfileMiniCard, ConsentStatusBadge

## Forbidden collapses
- Do not replace context-rail with nothing
- Do not use a single Card form for the whole page

## ASCII wireframe
```
| main composer | context rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).