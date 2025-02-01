import type { StorybookConfig } from '@storybook-vue/nuxt';
/**
 * Storybookのメイン設定ファイル
 *
 * @description
 * - フレームワークとしてVue3 + Viteを使用
 * - stories、components配下のStoryファイルを読み込み
 * - 必要なアドオンを設定（アクセシビリティ、テーマ、スタイリングなど）
 *
 * @typedef {import('@storybook/types').StorybookConfig} StorybookConfig
 */
const config: StorybookConfig = {
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)', '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
