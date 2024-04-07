import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/TicTacToe.tsx'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
