// vite.config.ts
import { defineConfig } from 'vite'
import react       from '@vitejs/plugin-react-swc'
import path        from 'path'

export default defineConfig({
  // for a user site (yourname.github.io) this should be "/"
  base: '/',

  build: {
    // GH-Pages will serve files out of /docs on the main branch
    outDir: 'docs',
  },

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
