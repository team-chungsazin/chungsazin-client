import type { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { LinkButton } from '@/ui/LinkButton'

const meta = {
  title: 'Primitives/LinkButton',
  component: LinkButton,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    to: '/works/101',
    children: 'Open work',
  },
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
