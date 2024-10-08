import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [{ ...eslintPlugin(), apply: 'serve' }, react(), svgr()],
  resolve: {
    alias: {
      '~@entur': '@entur',
    },
  },
  build: {
    outDir: './build',
  },
})
