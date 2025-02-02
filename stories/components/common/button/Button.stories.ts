/**
 * @file Button コンポーネントの Storybook 設定ファイル
 * @description ボタンコンポーネントの様々なバリエーションを表示するためのストーリーを定義
 */

import type { Meta, StoryObj } from '@storybook/vue3';
import Button from '@/components/common/button/Button.vue';

/**
 * 汎用的なボタンコンポーネント。
 * シンプルなスタイリングを持ち、様々な用途に使用できる基本的なボタンです。
 *
 * @component
 * @example
 * ```
 * <Button>クリックしてください</Button>
 * <Button class="bg-primary">カスタムスタイル</Button>
 * <Button disabled>無効化状態</Button>
 * ```
 */
const meta = {
  title: 'Components/Common/Button',
  component: Button,
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
    // クリックイベントの制御
    onClick: {
      action: 'clicked',
      description: 'ボタンクリック時のイベントハンドラ',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なボタン
export const Default: Story = {
  args: {
    default: 'ボタン',
  },
};

// カスタムクラスを適用したボタン
export const CustomClass: Story = {
  args: {
    default: 'カスタムボタン',
    class: 'bg-primary text-white',
  },
};

// 無効化されたボタン
export const Disabled: Story = {
  args: {
    default: '無効化ボタン',
    disabled: true,
  },
};

// 長いテキストを持つボタン
export const LongText: Story = {
  args: {
    default: 'とても長いテキストを持つボタンの例です',
  },
};
