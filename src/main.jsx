import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import OpenData from './openData.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OpenData />
  </StrictMode>,
)
