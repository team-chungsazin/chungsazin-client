import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@/ui/Text'

const meta = {
  title: 'Foundations/Typography',
  component: Text,
  args: {
    children: 'The poem remains readable before effects.',
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Display: Story = {
  args: {
    as: 'h1',
    roleType: 'display',
    children: 'Display role',
  },
}

export const PoemBody: Story = {
  args: {
    as: 'p',
    roleType: 'poem',
    children: 'A line that prioritizes cadence, spacing, and comfortable reading rhythm.',
  },
}
