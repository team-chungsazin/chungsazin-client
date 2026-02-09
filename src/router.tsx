import { Navigate, createBrowserRouter } from 'react-router-dom'
import { NotFoundPage } from './routes/NotFoundPage'
import { WorkReaderPage } from './routes/WorkReaderPage'
import { WorksIndexPage } from './routes/WorksIndexPage'

export const router = createBrowserRouter([
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
])
