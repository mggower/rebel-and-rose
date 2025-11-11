## Rebel & Rose Monorepo

This repository contains the Rebel & Rose web properties managed as a single Turborepo monorepo. It uses `pnpm` for dependency management and organizes all code into `apps/` and `packages/`.

### Directory Layout

- `apps/` – deployable applications.
  - `ui/` – the public Vite + React experience (`@rebel/ui`).
- `packages/` – shareable libraries.
  - `components/` – themed UI primitives and composite widgets (`@rebel/components`).
  - `theme/` – canonical design tokens and utilities (`@rebel/theme`).
  - `tsconfig/` – shared TypeScript configuration presets (`@rebel/tsconfig`).
- `docs/` – engineering notes and change retrospectives.
- `.turbo/` – Turborepo’s cache directory (ignored from git).

### Build & Quality Gates

Both `@rebel/theme` and `@rebel/components` ship as compiled libraries. Before consuming them from applications (or publishing), emit their build artefacts:

```bash
pnpm turbo run build --filter="@rebel/theme @rebel/components"
```

The standard project checks remain:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

These commands fan out through Turbo and run the appropriate Vite builds and TypeScript validation for every workspace.

### Getting Started

Ensure your environment matches the repo’s Node requirement:

```bash
nvm use               # respects the checked-in .nvmrc (Node 22.x)
corepack enable       # activates pnpm that ships with Node 22.x
pnpm install          # bootstrap workspace (installs all app + package deps)
pnpm dev              # run all dev servers in parallel via Turbo
pnpm turbo run dev    # explicit Turbo invocation if you prefer
```

The root `package.json` exposes standard scripts that fan out to every relevant workspace:

| Script           | Description                                           |
| ---------------- | ----------------------------------------------------- |
| `pnpm dev`       | Run `dev` in parallel across all apps.                |
| `pnpm lint`      | Run ESLint in every package that declares the script. |
| `pnpm typecheck` | Run TypeScript `--noEmit` checks everywhere.          |
| `pnpm build`     | Execute the build pipeline for all applications.      |
| `pnpm preview`   | Run each app’s preview command (after build).         |

### Developing Individual Packages

To focus on a single workspace, `cd` into it and use `pnpm` locally:

```bash
cd apps/ui
pnpm dev
```

Because the workspaces are linked, TypeScript path aliases and `pnpm` peer dependencies resolve automatically without additional configuration.

### Tooling

- **Node.js 22.x** (enforced via `package.json` engines + `.nvmrc`).
- **Turborepo** orchestrates builds and caches intermediate results.
- **pnpm** provides workspace-aware dependency management.
- **TypeScript** configuration is centralized under `@rebel/tsconfig`.
- **ESLint** & **Prettier** enforce code style.
- **Vite** powers the UI application.

### Contributing

1. Create a branch off the main line of development.
2. Make changes and ensure relevant commands succeed:
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm build
   ```
3. Commit with a meaningful message and open a pull request summarizing the impact.

### Deployment (Vercel + GitHub)

- **Project configuration:** Point the Vercel dashboard at the repository root. Leave the framework preset as “Other”.
- **Install command:** `pnpm install --frozen-lockfile`
- **Build command:** `pnpm turbo run build --filter=@rebel/ui...`
- **Output directory:** `apps/ui/dist`
- **Routing:** All paths rewrite to `/` (defined in `vercel.json`) for SPA navigation.

These values are also codified in `vercel.json`, so fresh deployments using `vercel --prod` or GitHub→Vercel integrations inherit the correct behavior automatically. Ensure Corepack is enabled on CI runners (`corepack enable`), and keep `pnpm-lock.yaml` committed so Vercel can reproduce workspace installs.

### Additional Resources

- `docs/develop/` contains narrative documentation for significant refactors such as the monorepo migration.
- `packages/tsconfig` exports reusable TS config presets that new packages should rely on.
