import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

const external = [
  '@emotion/react',
  '@emotion/styled',
  '@floating-ui/react',
  '@fortawesome/fontawesome-svg-core',
  '@fortawesome/react-fontawesome',
  '@rebel/theme',
  'react',
  'react-dom',
  'react-router-dom',
]

export default defineConfig({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      outDir: 'dist',
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'RebelComponents',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external,
    },
    sourcemap: true,
  },
})
