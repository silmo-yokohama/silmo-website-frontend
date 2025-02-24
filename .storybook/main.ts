import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
};
export default config;
