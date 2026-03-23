import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/miles-education-website/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-dom') || id.includes('react/')) {
            return 'react-vendor'
          }
          if (id.includes('react-router')) {
            return 'router'
          }
        },
      },
    },
    target: 'es2020',
    cssCodeSplit: true,
  },
})
