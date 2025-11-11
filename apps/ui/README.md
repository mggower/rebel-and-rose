## @rebel/ui

`@rebel/ui` is the Vite + React application that powers the Rebel & Rose customer-facing experience. It consumes shared tooling from the monorepo and exposes common scripts for development, testing, and deployments.

### Tech Stack

- **React 18** with the modern JSX transform.
- **Vite** for fast dev server and optimized builds.
- **Emotion** for styling + CSS-in-JS patterns.
- **Tailwind CSS** for utility-first styling.
- **pnpm** for dependency management within the monorepo.

### Available Scripts

Inside the `apps/ui` directory you can run:

| Command           | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `pnpm dev`        | Start the Vite dev server with hot module replacement.                      |
| `pnpm build`      | Run `tsc` followed by `vite build` to produce the production bundle.        |
| `pnpm preview`    | Serve the production build locally for validation.                          |
| `pnpm lint`       | Run ESLint with repo standards.                                             |
| `pnpm typecheck`  | Execute TypeScript `--noEmit` to ensure types are sound.                    |

These scripts are also reachable from the repo root via Turborepo (`pnpm turbo run <script>`).

### Project Structure

- `src/` – React components, hooks, styles, and utilities.
- `public/` – static assets served as-is.
- `vite.config.ts`, `tailwind.config.js`, `postcss.config.js` – tooling configuration colocated with the app.
- `tsconfig.json` – extends the shared `@rebel/tsconfig/react` preset, adding workspace-specific path aliases.

### Local Development

```bash
nvm use               # picks up repo-wide Node 25.1+ requirement
corepack enable       # ensures pnpm is available with Node 25.1+
```

Then install dependencies and start the dev server:

```bash
pnpm install      # from repo root
pnpm dev          # or pnpm turbo run dev
```

Visit `http://localhost:5173/` (default Vite port) to interact with the app. Adjust environment variables or Vite configuration as needed for feature work.

### Deployment

The app targets static hosting via Vite’s build output. A `vercel.json` file exists at repo root for Vercel rewrites. Produce a production build with:

```bash
pnpm build
pnpm preview
```

This ensures assets and routes render correctly before deploying. Continuous integration should mirror these commands to guard against regressions.

