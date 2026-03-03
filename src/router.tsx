import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from '@/routes/AboutPage'
import { BlueprintContentPage } from '@/routes/BlueprintContentPage'
import { BlueprintHubPage } from '@/routes/BlueprintHubPage'
import { BlueprintInputPage } from '@/routes/BlueprintInputPage'
import { BlueprintKeywordPage } from '@/routes/BlueprintKeywordPage'
import { BlueprintRevealPage } from '@/routes/BlueprintRevealPage'
import { HomePage } from '@/routes/HomePage'
import { LandingPage } from '@/routes/LandingPage'
import { NotFoundPage } from '@/routes/NotFoundPage'
import { WorkReaderPage } from '@/routes/WorkReaderPage'
import { WorksIndexPage } from '@/routes/WorksIndexPage'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/landing',
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
    path: '/blueprint/hub',
    element: <BlueprintHubPage />,
  },
  {
    path: '/blueprint/:section',
    element: <BlueprintContentPage />,
  },
  {
    path: '/blueprint/:section/input',
    element: <BlueprintInputPage />,
  },
  {
    path: '/blueprint/youth/keyword',
    element: <BlueprintKeywordPage />,
  },
  {
    path: '/blueprint/reveal',
    element: <BlueprintRevealPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export const router = createBrowserRouter(appRoutes)
