## Rebel & Rose Design System Refactor (11-11-2025)

This change set establishes the foundation for a modular, theme-driven design system across the monorepo.

---

### 1. New Shared Packages

- **`@rebel/theme`** – centralises the colour palette, typography scale, spacing system, shadows, breakpoints, and attribute helpers. The package is built as a Vite library, emitting compiled ESM and type declarations for downstream consumption.
- **`@rebel/components`** – exposes reusable primitives (`Typography`, `Heading`, `Paragraph`, `Link`, `Button`, `Icon`) and composite widgets (accessible `DropdownMenu`) backed by Emotion. It shares the same Vite-based build pipeline, producing tree-shakeable output and `.d.ts` bundles.

Both packages now compile to `dist/` via Vite + `vite-plugin-dts`, ensuring Turbo can cache artefacts while applications depend on the published build outputs (`"@rebel/theme": "workspace:*"`, `"@rebel/components": "workspace:*"`).

### 2. Application Integration (`@rebel/web`)

- Replaced bespoke `src/styles` modules and TailwindCSS with the shared packages.
- Updated feature areas (header, footer, home, policies, about) to consume the new primitives and theme tokens directly throughout `@rebel/web`.
- Removed legacy Tailwind/PostCSS/Sass tooling and simplified global CSS to only cover fonts, resets, and structural primitives.
- Migrated leftover bespoke components (e.g. `Scrapbook`, `SplashImage`) to leverage shared styling helpers while keeping domain-specific assets in the app.

### 3. Tooling & Build Updates

- Added Vite library configs for `@rebel/theme` and `@rebel/components`; builds now run through `pnpm turbo run build` before typechecking.
- Adjusted package manifests to rely on workspace dependencies (`workspace:*`) instead of tsconfig path aliases, matching Turborepo’s compiled-package guidance.
- Expanded root ESLint configuration to lint the new packages and ensured Turbo tasks cover build/typecheck for each workspace.

### 4. Follow-Up Ideas

- Author Storybook (or Ladle) stories for `@rebel/components` to aid design QA and documentation.
- Add automated accessibility checks (axe, eslint-plugin-jsx-a11y) and visual regression tests (Chromatic/Loki).
- Provide motion tokens and helper utilities for choreographing consistent micro-interactions.
- Explore exporting tokens in design-token formats (Style Dictionary) for cross-platform alignment.
