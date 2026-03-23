import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Load Google Fonts after first paint (non-blocking)
if (typeof window !== 'undefined') {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800&display=swap'
  document.head.appendChild(link)
}
