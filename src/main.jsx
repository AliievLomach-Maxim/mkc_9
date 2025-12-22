import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  // App > mount ? >unmount > web > mount
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />
    </BrowserRouter>
  </StrictMode>
)
