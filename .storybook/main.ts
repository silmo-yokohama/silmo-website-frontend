import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

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
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
        '~': path.resolve(__dirname, '../'),
      };
    }

    // SCSSの設定を追加
    if (!config.css) {
      config.css = {};
    }
    config.css.preprocessorOptions = {
      scss: {
        additionalData: `@use "@/assets/scss/_variables.scss" as *;`,
      },
    };

    return config;
  },
};

export default config;
