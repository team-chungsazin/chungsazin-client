import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { appRoutes } from '@/router'

describe('router baseline', () => {
  it('renders works index at /works', async () => {
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/works'],
    })

    render(<RouterProvider router={router} />)

    expect(await screen.findByRole('heading', { name: '시집 목록' })).toBeInTheDocument()
  })

  it('renders 404 for invalid id format', async () => {
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/works/abc'],
    })

    render(<RouterProvider router={router} />)

    expect(await screen.findByRole('heading', { name: '404' })).toBeInTheDocument()
  })

  it('navigates from about overview to project detail', async () => {
    const user = userEvent.setup()
    const router = createMemoryRouter(appRoutes, {
      initialEntries: ['/about'],
    })

    render(<RouterProvider router={router} />)

    await user.click(await screen.findByRole('link', { name: '프로젝트 소개 상세보기' }))

    expect(await screen.findByRole('heading', { name: '프로젝트 상세' })).toBeInTheDocument()
  })
})
