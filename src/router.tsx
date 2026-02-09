import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { NotFoundPage } from '@/routes/NotFoundPage'
import { WorkReaderPage } from '@/routes/WorkReaderPage'
import { WorksIndexPage } from '@/routes/WorksIndexPage'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/works" replace />,
  },
  {
    path: '/works',
    element: <WorksIndexPage />,
  },
  {
    path: '/works/:id',
    element: <WorkReaderPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export const router = createBrowserRouter(appRoutes)
