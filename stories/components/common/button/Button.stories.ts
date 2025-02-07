/**
 * @file Button コンポーネントの Storybook 設定ファイル
 * @description ボタンコンポーネントの様々なバリエーションとユースケースを表示
 */

import type { Meta, StoryObj } from '@storybook/vue3';
import { FileText, ExternalLink } from 'lucide-vue-next';
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
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'outline', 'ghost', 'link', 'slate'],
      description: 'ボタンのスタイルバリエーション',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'ボタンのサイズ',
    },
    hasIcon: {
      control: 'boolean',
      description: 'アイコンの表示有無',
    },
    disabled: {
      control: 'boolean',
      description: '無効状態の切り替え',
    },
    to: {
      control: 'text',
      description: 'リンク先のパス（指定時はNuxtLinkとして描画）',
    },
    default: {
      control: 'text',
      description: 'ボタン内のテキストコンテンツ',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// バリエーション別のストーリー
export const Default: Story = {
  args: {
    default: 'デフォルトボタン',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'プライマリーボタン',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'セカンダリーボタン',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    default: 'アウトラインボタン',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'ゴーストボタン',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    default: 'リンクボタン',
  },
};

export const Slate: Story = {
  args: {
    variant: 'slate',
    default: 'スレートボタン',
  },
};

// サイズバリエーション
export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
      </div>
    `,
  }),
};

// アイコン付きボタン
export const WithIcon: Story = {
  render: () => ({
    components: { Button, FileText },
    template: `
      <div class="flex flex-col gap-4">
        <Button hasIcon>
          <FileText class="w-5 h-5" />
          アイコン付きボタン
        </Button>
        <Button variant="primary" hasIcon>
          <FileText class="w-5 h-5" />
          プライマリー
        </Button>
        <Button variant="slate" hasIcon>
          <FileText class="w-5 h-5" />
          スレート
        </Button>
      </div>
    `,
  }),
};

// リンクとして使用
export const AsLink: Story = {
  render: () => ({
    components: { Button, ExternalLink },
    template: `
      <div class="flex flex-col gap-4">
        <Button to="/about">内部リンク</Button>
        <Button variant="primary" to="/docs" hasIcon>
          <ExternalLink class="w-5 h-5" />
          ドキュメントへ
        </Button>
        <Button variant="link" to="https://example.com">
          外部リンク
        </Button>
      </div>
    `,
  }),
};

// 無効状態
export const DisabledStates: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-4">
        <Button disabled>Default</Button>
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="outline" disabled>Outline</Button>
        <Button variant="ghost" disabled>Ghost</Button>
        <Button variant="link" disabled>Link</Button>
        <Button variant="slate" disabled>Slate</Button>
      </div>
    `,
  }),
};

// ダークモード
export const DarkMode: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="dark p-8 bg-dark flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="slate">Slate</Button>
      </div>
    `,
  }),
};
