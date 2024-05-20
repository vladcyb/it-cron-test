import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import './main-layout.scss'

export const MainLayout = () => (
  <div className="main-layout">
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  </div>
)
