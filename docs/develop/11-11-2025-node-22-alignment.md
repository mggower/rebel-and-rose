## Node 22.x Runtime Alignment (11-11-2025)

### Summary

- Standardised on **Node.js 22.x** across the monorepo to match Vercel’s runtime.
- Updated `.nvmrc` to guide local environments toward the supported version.
- Refreshed developer documentation to call out the Node 22.x requirement.

### Technical Changes

- Set `"engines": { "node": ">=22.0.0 <23" }` in:
  - `package.json`
  - `apps/ui/package.json`
  - `packages/tsconfig/package.json`
- Bumped `.nvmrc` to `22.10.0`.
- Adjusted onboarding steps in `README.md` and `apps/ui/README.md` to reference Node 22.x and `corepack enable`.

### Follow-Up / Verification

- Execute `pnpm lint`, `pnpm typecheck`, and `pnpm build` under Node 22.x to confirm compatibility.
- Ensure Vercel/CI images are pinned to Node 22.x with Corepack enabled before merging.


