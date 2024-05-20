import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Pages } from '@/pages'

import './app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
