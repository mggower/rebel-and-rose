import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'RebelTheme',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['@emotion/react', 'react'],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
})
