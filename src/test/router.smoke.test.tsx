import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { appRoutes } from '@/router'

describe('router baseline', () => {
  it('renders works index at /works', async () => {
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/works'],
    })

    render(<RouterProvider router={router} />)

    expect(await screen.findByRole('heading', { name: 'Works' })).toBeInTheDocument()
  })

  it('renders 404 for invalid id format', async () => {
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/works/abc'],
    })

    render(<RouterProvider router={router} />)

    expect(await screen.findByRole('heading', { name: '404' })).toBeInTheDocument()
  })
})
