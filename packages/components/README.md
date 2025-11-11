# @rebel/components

Reusable UI primitives and styling helpers backed by the Rebel & Rose theme tokens. The library packages common typography, button, link, and dropdown patterns so applications stay consistent while remaining easy to extend.

## Highlights

- Headless, theme-aware primitives (`Typography`, `Heading`, `Paragraph`, `Link`, `Button`, `Icon`).
- Composite widgets such as the accessible `DropdownMenu` built on `@floating-ui/react`.
- Emotion-powered style helpers (`library`, `buttonStyles`, `linkStyles`, `typography`) that encapsulate consistent layout and interaction patterns.
- Distributed as a Vite-built library (ESM + declaration bundles) so apps consume compiled artefacts via `dist/`.

## Build & Scripts

```bash
pnpm install                      # from repository root
pnpm --filter @rebel/components build     # emit dist/
pnpm --filter @rebel/components typecheck # validate TypeScript against sources
```

The build pipeline leverages Vite + `vite-plugin-dts` and is orchestrated automatically by `pnpm turbo run build`.

## Installation

```bash
pnpm add @rebel/components@workspace:* --filter <app>
```

Because the package depends on the theme tokens at runtime, ensure the consuming workspace also has:

```json
"dependencies": {
  "@rebel/theme": "workspace:*"
}
```

## Example

```tsx
import { Button, Heading, Paragraph } from '@rebel/components'

export function Hero() {
  return (
    <section>
      <Heading fontSize="xl" tracking="widest">
        Rebel & Rose
      </Heading>
      <Paragraph prose>
        Artistry-first salon and spa services in historic Concord, MA.
      </Paragraph>
      <Button buttonTheme="primary" fontSize="sm">
        Book Now
      </Button>
    </section>
  )
}
```

> Consumers must also supply the required peer dependencies (`react`, `react-dom`, `@emotion/react`, `@emotion/styled`, etc.). See `package.json` for the complete list.
