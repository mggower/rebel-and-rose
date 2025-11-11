## Rebel & Rose Monorepo Migration (11-11-2025)

This document captures the full scope of work required to transform the Rebel & Rose codebase into a Turborepo-powered monorepo. The migration delivers better separation of concerns, centralized tooling, and scalability for new apps and packages.

---

### 1. Repository Restructure

- Introduced the canonical monorepo layout with top-level `apps/` and `packages/` directories.
- Moved the existing Vite + React site into `apps/ui` and renamed the workspace to `@rebel/ui`.
- Added placeholder `.gitkeep` files to ensure empty directories are tracked.
- Updated `.gitignore` to exclude Turborepo cache artifacts (`.turbo/`).

### 2. Turborepo & pnpm Workspaces

- Installed `turbo` at the root and replaced legacy scripts with Turbo-powered pipelines (`dev`, `build`, `lint`, `typecheck`, `preview`).
- Authored `turbo.json` to define task orchestration, caching behaviour, and dependencies between pipelines.
- Added `pnpm-workspace.yaml` to register `apps/*` and `packages/*` as first-class workspaces.
- Refreshed `pnpm-lock.yaml` to capture new workspace topology and dependency graph.

### 3. TypeScript Configuration Package

- Created the shared package `@rebel/tsconfig` under `packages/tsconfig`.
  - `tsconfig.root.json` encapsulates universal compiler options (ES2020 target, bundler module resolution, `noEmit`, etc.).
  - `tsconfig.react.json` extends the root preset with React-specific JSX settings.
- Exported both presets via the package’s `package.json` `exports` map for clean consumption.
- Updated the root `tsconfig.json` and `apps/ui/tsconfig.json` to extend from `@rebel/tsconfig/react`, while localising path aliases in the app.

### 4. Tooling Alignment

- Pointed `.eslintrc.cjs` at the relocated TypeScript configs to keep parser projects accurate.
- Removed stale ESLint disable directives and unused imports (e.g., `Scrapbook.tsx`) exposed during lint pipelines.
- Ensured existing Tailwind, PostCSS, and Vite configuration files travel with the UI workspace without behavioural regressions.

### 5. Documentation

- Authored comprehensive README files:
  - Root `README.md` documents the monorepo architecture, commands, and development workflow.
  - `apps/ui/README.md` describes the UI application stack, scripts, and deployment guidance.
  - `packages/tsconfig/README.md` explains the shared TypeScript presets and extension strategy.
- Replaced this migration report with the present narrative to serve as historical context.

### 6. Deployment Integration

- Updated `vercel.json` so Vercel installs with `pnpm`, runs `pnpm turbo run build --filter=@rebel/ui...`, emits `apps/ui/dist`, and rewrites SPA routes.
- Documented Vercel/GitHub deployment commands in the root README, including the exact install/build/output values needed for CI.

### 7. Validation

- `pnpm turbo run lint`
- `pnpm turbo run typecheck`
- `pnpm turbo run build`

All tasks succeeded, confirming the monorepo configuration, shared tooling, and application builds remain healthy.

---

### Next Steps

- Standardise additional shared tooling (e.g., ESLint or Jest presets) as packages under `packages/`.
- Introduce new applications or feature packages by following the existing workspace patterns.
- Consider enabling Turbo remote caching to accelerate CI once an appropriate cache backend is available.
