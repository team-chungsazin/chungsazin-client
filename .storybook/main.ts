import { resolve } from 'node:path'
import type { StorybookConfig } from '@storybook/react-vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), vanillaExtractPlugin()]

    const previousAlias = (config.resolve?.alias as Record<string, string>) ?? {}
    config.resolve = {
      ...config.resolve,
      alias: {
        ...previousAlias,
        '@': resolve(__dirname, '../src'),
      },
    }

    return config
  },
}

export default config
