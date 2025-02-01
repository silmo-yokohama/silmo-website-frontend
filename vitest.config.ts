/**
 * Vitest設定ファイル
 *
 * @description
 * - Vue.jsのコンポーネントテスト環境の設定
 * - カバレッジレポートの設定
 * - テスト対象ファイルのパターン指定
 * - エイリアスの設定
 *
 * @note
 * - テスト環境としてhappy-domを使用
 * - カバレッジレポートはv8プロバイダーを使用
 * - テストファイルは*.test.*, *.spec.*のパターンを含む
 */

import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    // グローバル変数の自動インポートを有効化
    globals: true,
    // テスト環境としてhappy-domを使用
    environment: 'happy-dom',
    // カバレッジ設定
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/**',
        'dist/**',
        '.nuxt/**',
        '.output/**',
        'coverage/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/composables/**', // 必要に応じて除外
        '**/types/**',
        'test/**',
      ],
    },
    // テスト対象ファイルのパターン
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['node_modules/**', 'dist/**', '.nuxt/**', '.output/**', 'coverage/**'],
    // プロジェクトルートの設定
    root: fileURLToPath(new URL('./', import.meta.url)),
  },
  // エイリアス設定
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
