/**
 * @file ButtonPrimary コンポーネントの Storybook 設定ファイル
 * @description プライマリーボタンコンポーネントの様々なバリエーションを表示するためのストーリーを定義
 */

import type { Meta, StoryObj } from '@storybook/vue3';
import ButtonPrimary from '@/components/common/button/ButtonPrimary.vue';

/**
 * プライマリーアクション用のボタンコンポーネント。
 * アプリケーション内で最も重要なアクションを示すために使用される強調されたスタイルのボタンです。
 * アニメーションが含まれている関係上、幅は140pxに固定される。長文ボタンには使用は向かない。
 *
 * @component
 * @example
 * ```
 * <ButtonPrimary>登録する</ButtonPrimary>
 * <ButtonPrimary disabled>処理中...</ButtonPrimary>
 * <ButtonPrimary @click="handleSubmit">送信</ButtonPrimary>
 * ```
 *
 * @remarks
 * - primary.scss スタイルシートに依存しています
 * - hover時の色変更アニメーションが含まれています
 * - disabled状態では特別なスタイリングが適用されます
 */
const meta = {
  title: 'Components/Common/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    // スロットのコンテンツを制御するための引数
    default: {
      control: 'text',
      description: 'ボタン内に表示するテキストコンテンツ',
    },
    // class プロパティの制御
    class: {
      control: 'text',
      description: 'カスタムCSSクラスを追加',
    },
    // disabled プロパティの制御
    disabled: {
      control: 'boolean',
      description: 'ボタンの無効化状態を制御',
    },
    // クリックイベントの制御
    onClick: {
      action: 'clicked',
      description: 'ボタンクリック時のイベントハンドラ',
    },
  },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なプライマリーボタン
export const Default: Story = {
  args: {
    default: 'プライマリーボタン',
  },
};

// 無効化状態のプライマリーボタン
export const Disabled: Story = {
  args: {
    default: '無効化状態',
    disabled: true,
  },
};

// カスタムクラスを適用したプライマリーボタン
export const CustomClass: Story = {
  args: {
    default: 'カスタムスタイル',
    class: 'px-8 py-4',
  },
};

// クリックイベント付きのプライマリーボタン
export const WithClickHandler: Story = {
  args: {
    default: 'クリックしてください',
    onClick: () => {
      alert('ボタンがクリックされました！');
    },
  },
};
