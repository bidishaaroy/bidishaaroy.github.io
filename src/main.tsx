
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'next-themes'    
import App from './App'
import './index.css'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)

