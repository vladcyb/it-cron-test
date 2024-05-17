import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => (
  <div className="main-layout">
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  </div>
)
