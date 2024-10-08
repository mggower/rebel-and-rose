import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  css: { modules: { localsConvention: 'camelCase' } },
  resolve: { alias: [{ find: /^@\/(.*)/, replacement: '/src/$1' }] },
})
