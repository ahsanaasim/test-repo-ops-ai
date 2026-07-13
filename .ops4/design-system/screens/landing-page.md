# Screen blueprint: Landing Page

Route: `/`
Layout: **single-column-form**

## Required regions
- **hero-panel**: Public entry point introducing the platform — components: PlatformLogo, HeroTitle, HeroDescription, LoginButton, RegisterButton

## Forbidden collapses
- Do not collapse this screen into a single Card with a basic form.

## ASCII wireframe
```
┌───────────────┐
| [Logo]        |
| [HeroTitle]   |
| [Desc]        |
| [Login][Reg]  |
└───────────────┘
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).