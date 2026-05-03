import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is '/' because the site uses a custom domain (ryanjames.dev)
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
