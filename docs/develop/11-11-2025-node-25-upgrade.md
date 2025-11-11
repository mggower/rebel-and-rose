## Node 25.1+ Runtime Alignment (11-11-2025)

### Summary

- Raised the minimum supported runtime to **Node.js 25.1.x** across every workspace.
- Added `.nvmrc` so local environments default to the new baseline.
- Updated developer documentation to reflect the new requirement.

### Technical Changes

- Injected `"engines": { "node": ">=25.1.0 <26" }` into:
  - `package.json`
  - `apps/ui/package.json`
  - `packages/tsconfig/package.json`
- Bumped `.nvmrc` value to `25.1.0`.
- Refreshed onboarding steps in `README.md` and `apps/ui/README.md` to call out Node 25.1.x and the need to run `corepack enable`.

### Follow-Up / Verification

- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build` on Node 25.1.x to confirm compatibility.
- Ensure Vercel/CI images are upgraded to Node 25.1.x (Corepack enabled) before merging.


