# Screen blueprint: Client Brief Detail

Route: `/briefs/:id`
Layout: **master-detail**

## Required regions
- **main**: Display brief header, details, and tabbed content (details, candidates, timeline). — components: BriefHeaderCard, BriefTitle, ClientName, Location, Specialty, StatusBadge, AssignedRecruiter, OpenPositions, CreatedDate, BriefNotes, EditBriefAction, DeleteBriefAction, Tabs: Details|Candidates|Timeline
- **tab-content**: Show tab-specific content: details, candidate list, or activity timeline. — components: AICandidateMatchList, CandidateStatus, CandidateAssignment, CandidateAIExtractedFieldIndicator, CandidateOriginalCVFile, AHPRARegistrationNumber, VerificationStatus, VerificationDate, VerificationSource, VerificationSupportingDocs, VerificationNotes, FollowUpTaskList, AddFollowUpTaskAction, ActivityTimeline, EmptyCandidateListMessage, EmptyTimelineMessage, AddCandidateAction
- **state-variant**: Display skeletons, error, plan limit, or permission denied messages as overlays or in main region. — components: BriefDetailSkeleton, TabSkeletons, CandidateListSkeleton, ErrorMessage, RetryAction, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| brief header | tab content |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).