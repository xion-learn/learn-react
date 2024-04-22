import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import QuickStart from './QuickStart/ProductList'
import App from './Doc/EscapeHatches'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
