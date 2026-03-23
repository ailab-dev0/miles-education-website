import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  base: '/miles-education-website/',
  plugins: [
    preact(),
    tailwindcss(),
    // Make CSS non-render-blocking
    {
      name: 'css-non-blocking',
      transformIndexHtml(html) {
        // Convert <link rel="stylesheet"> to non-blocking with media="print" onload trick
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)">/g,
          '<link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'">' +
          '<noscript><link rel="stylesheet" href="$1"></noscript>'
        )
      },
    },
  ],
  build: {
    target: 'es2020',
    cssCodeSplit: false, // Single CSS file for better caching
  },
})
