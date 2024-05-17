import {
  Navigate,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { MainLayout } from './main-layout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="cases" />,
      },
      {
        path: 'cases',
        async lazy() {
          const { CasesPage } = await import('./cases-page')
          return { Component: CasesPage }
        },
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export const Pages = () => <RouterProvider router={router} />
