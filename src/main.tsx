import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.tsx'

 createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Router>
  </StrictMode>,
)
