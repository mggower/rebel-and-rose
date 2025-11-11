## @rebel/ui

`@rebel/ui` is the Vite + React application that powers the Rebel & Rose customer-facing experience. It consumes shared tooling from the monorepo and exposes common scripts for development, testing, and deployments.

### Tech Stack

- **React 18** with the modern JSX transform.
- **Vite** for fast dev server and optimized builds.
- **Emotion** for styling + CSS-in-JS patterns, consuming shared tokens from `@rebel/theme`.
- **@rebel/components** for reusable, theme-aware UI primitives (compiled via Vite).
- **pnpm** for dependency management within the monorepo.

### Build Prerequisites

The UI imports `@rebel/components` and `@rebel/theme` as compiled libraries. Ensure their build outputs exist before running the app in isolation:

```bash
pnpm --filter "@rebel/theme @rebel/components" build
```

Running `pnpm turbo run dev`/`build` automatically handles this dependency chain.

### Available Scripts

Inside the `apps/ui`