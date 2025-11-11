---
title: Talent Page Refresh
date: 11-11-2025
---

## Summary

- Converted `@rebel/web` talent experience from a placeholder into a fully styled, JSON-driven page.
- Implemented a textured hero and a responsive roster grid that uses shared design tokens and `@rebel/components`.
- Added a `staff.json` configuration to power talent data and wired dynamic asset resolution with fallbacks.
- Refactored the implementation into focused modules (`Hero`, `TalentSection`, `TalentCard`, `styles`, `staff`) for maintainable growth.

## Details

- Created `apps/web/src/data/staff.json` to store the talent roster. Profiles include name, title, optional bio, and photo filename.
- Implemented lazy-loaded image resolution via `import.meta.glob` with graceful fallbacks if an asset is missing.
- Designed a hero banner that leverages existing textures, typography hierarchy, and constrained widths through `library.contain`.
- Constructed a responsive card layout: one column on mobile, expanding to three on large screens with consistent spacing.
- Routed navigation to the new talent page by renaming `/team` → `/talent` throughout the app and surfacing it in menus.
- Extracted hero, roster, card, shared styles, and data utilities into separate files to keep `Team.tsx` lean and composable.
- Ensured lint checks pass after every major edit and documented the nvm/corepack requirement in Cursor rules.

## Verification

```bash
pnpm --filter @rebel/web lint
```

