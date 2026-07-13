# Screen blueprint: Doctor Candidate Profile

Route: `/doctors/:id`
Layout: **master-detail**

## Required regions
- **main**: Candidate profile header and tabbed content — components: CandidateHeaderCard, CandidateName, Specialty, Location, AHPRAStatusBadge, EmploymentType, Availability, EditProfileAction, Tabs: Profile|Documents|Timeline|Follow-Ups
- **tab-content**: Tab-specific content: profile data, docs, timeline, follow-ups — components: ProfileFieldsPanel, DocumentsList, AHPRAStatusPanel, VerificationSource, VerificationDate, SupportingDocsList, VerificationNotes, CommunicationLog, FollowUpTaskList, AddFollowUpTaskAction, ActivityTimeline, EmptyTimelineMessage
- **state-variant**: Display skeletons, error, plan limit, or permission denied messages as overlays or in main region. — components: ProfileSkeleton, TabSkeletons, ErrorMessage, RetryAction, PlanLimitMessage, UpgradePlanAction, PermissionDeniedMessage

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
| candidate header | tab content |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).