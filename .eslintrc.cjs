module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'react-hooks/exhaustive-deps': ['warn', { additionalHooks: '(useScreen)' }],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './apps/web/tsconfig.json',
      './apps/web/tsconfig.node.json',
      './packages/components/tsconfig.json',
      './packages/theme/tsconfig.json',
    ],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: 'detect' },
  },
}
