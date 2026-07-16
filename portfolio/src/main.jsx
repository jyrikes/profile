import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initScrollReveal } from './scroll-reveal.js'
import './base.css'
import './evidence.css'
import './accessibility.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

initScrollReveal()
