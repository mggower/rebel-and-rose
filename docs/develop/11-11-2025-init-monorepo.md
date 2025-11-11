## Summary

Root now delegates all lifecycle commands to Turborepo and brings in `turbo` as the sole root dependency for coordination across workspaces, leaving app-level dependencies scoped to their packages.

```json
// 1:17:package.json
{
  "name": "rebel-and-rose",
  // ... existing code ...
  "scripts": {
    "dev": "turbo run dev --parallel",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "typecheck": "turbo run typecheck",
    "preview": "turbo run preview --parallel"
  },
  "devDependencies": {
    "turbo": "^2.1.1"
  }
}
```

The Vite UI has been relocated into `apps/ui` with its own `package.json`, retaining all runtime and build tooling so it can run independently inside the monorepo structure.

```json
// 1:56:apps/ui/package.json
{
  "name": "ui",
  // ... existing code ...
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
  // ... existing code ...
}
```

Turborepo configuration, pnpm workspace roots, and shared TypeScript options now live at the repo root, while the UI package extends those settings without project references so its path aliases keep working.

```json
// 1:22:turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
    // ... existing code ...
  }
}
```

```json
// 1:12:apps/ui/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

ESLint now targets the new TypeScript config, `.gitignore` ignores Turborepo artifacts, and the `Scrapbook` component shed leftover disable directives/imports picked up during linting.

```
// 10:30:.gitignore
node_modules
dist
dist-ssr
*.local
.turbo

# Editor directories and files
.vscode/*
```

```javascript
// 1:34:.eslintrc.cjs
module.exports = {
  // ... existing code ...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./apps/ui/tsconfig.json', './apps/ui/tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  // ... existing code ...
}
```

```typescript
// 1:31:apps/ui/src/components/Shared/Scrapbook.tsx
import { css } from '@emotion/react'
import theme from '@/styles/theme'
import Heading from './Heading'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import paper1 from '@/assets/textures/paper-1.png'
import paper2 from '@/assets/textures/paper-2.png'
// ... existing code ...
```

## Testing

- `pnpm turbo run lint`
- `pnpm turbo run typecheck`
- `pnpm turbo run build`

## Follow-Up

- Populate `packages/` with shared libraries as they emerge, updating task pipelines if new build or lint targets are required.
- Run `npx update-browserslist-db@latest` when feasible to refresh the browserslist data flagged during build.
- Consider enabling Turborepo remote caching once a shared cache endpoint is available.
