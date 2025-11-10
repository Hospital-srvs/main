import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import Maintainance from './pages/Maintainance.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Maintainance/> */}
    <App />
  </StrictMode>,
)
