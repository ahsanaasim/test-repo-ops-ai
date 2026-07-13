# Screen blueprint: Message Template Selector Modal

Route: `/outreach/templates`
Layout: **single-column-form**

## Required regions
- **modal-panel**: Select predefined message template — components: SearchTemplatesInput, TemplateList, TemplatePreviewPanel, SelectTemplateButton, CancelButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Search]      |
| [List]        |
| [Preview]     |
| [Select][Cancel] |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).