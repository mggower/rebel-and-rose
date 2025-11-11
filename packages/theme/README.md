# @rebel/theme

The shared design token library for Rebel & Rose applications. It centralises color palettes, typography scales, spacing rhythms, shadows, breakpoints, and attribute helpers so every UI surface derives styles from the same canonical source of truth.

## Features

- Typed tokens for palette, typography, spacing, shadows, radii, and z-index layers.
- Attribute selector helpers that pair naturally with Emotion variants.
- `createTheme` deep-merge helper for deriving tailored design systems.
- Delivered as a Vite-built library (`dist/index.js`, `.d.ts`) for fast downstream installs.

## Build & Scripts

```bash
pnpm install                # from repository root
pnpm --filter @rebel/theme build     # emit dist/
pnpm --filter @rebel/theme typecheck # verify types with local sources
```

The build command uses Vite + `vite-plugin-dts` to produce treeshakeable ESM output and bundled declaration files. Turbo caches the results when you run `pnpm turbo run build`.

## Usage

Install via workspace reference:

```bash
pnpm add @rebel/theme@workspace:* --filter <app>
```

Import the default theme and utilities:

```ts
import theme, { createTheme, palette } from '@rebel/theme'

const customTheme = createTheme({
  palette: {
    ink: { main: '#101010' },
  },
})
```

The compiled output lives under `dist/`; consumers should import from the package entrypoints rather than local source paths.
