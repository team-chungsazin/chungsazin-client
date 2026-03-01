import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from '@/routes/AboutPage'
import { LandingPage } from '@/routes/LandingPage'
import { NotFoundPage } from '@/routes/NotFoundPage'
import { WorkReaderPage } from '@/routes/WorkReaderPage'
import { WorksIndexPage } from '@/routes/WorksIndexPage'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/works',
    element: <WorksIndexPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
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
