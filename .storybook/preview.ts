import type { Preview } from '@storybook-vue/nuxt';

/**
 * Storybookのプレビュー設定ファイル
 *
 * @description
 * - アクションのパラメータ設定
 * - コントロールのマッチャー設定（色や日付など）
 * - ビューポート設定
 * - レイアウト設定
 * - ストーリーのソート順設定
 *
 * @typedef {import('@storybook/types').Preview} Preview
 */
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // ビューポートの設定
    viewport: {
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '800px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
    // レイアウト設定
    layout: 'centered',
    // ストーリーのソート順設定
    options: {
      storySort: {
        order: ['Introduction', 'Pages', 'Components', '*'],
      },
    },
  },
};

export default preview;
