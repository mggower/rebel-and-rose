## @rebel/tsconfig

Reusable TypeScript configuration presets shared across the Rebel & Rose monorepo. The package ships multiple entry points for different runtime environments, enabling consistent compiler options without copy-pasting JSON.

### Available Presets

| Export            | Path                     | Description                                              |
| ----------------- | ------------------------ | -------------------------------------------------------- |
| `@rebel/tsconfig/root`  | `tsconfig.root.json`  | Base compiler options suitable for Node/bundler contexts. |
| `@rebel/tsconfig/react` | `tsconfig.react.json` | Extends the root preset and enables React JSX settings.   |

Each preset focuses on `compilerOptions` and is designed to be **extended**, not used standalone. Consumers should layer their own `include`, `exclude`, or path alias directives as necessary.

### Usage

From a workspace `tsconfig.json`:

```json
{
  "extends": "@rebel/tsconfig/react",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Adding New Presets

1. Create the new `tsconfig.<name>.json` file in this directory.
2. Update `package.json`:
   - Append the file to the `"files"` array.
   - Add an export mapping under `"exports"`.
3. Document the preset in this README.
4. Run `pnpm install` (or `pnpm -w install`) so the lockfile records the workspace package change.

### Development Notes

- The presets intentionally avoid `references` to keep path aliases simple inside each workspace.
- Enabling `noEmit` is required to prevent accidental emission during type-check tasks.
- Consumers should still run `tsc --noEmit` or their respective build pipelines; this package only centralizes configuration.

