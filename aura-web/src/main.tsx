import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuraDemo from './AuraDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuraDemo />
  </StrictMode>,
)