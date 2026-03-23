import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  base: '/miles-education-website/',
  plugins: [preact(), tailwindcss()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
})
