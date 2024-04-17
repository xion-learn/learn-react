import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App/ProductList'
import App from './Doc/ManagingState'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
