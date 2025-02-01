import type { Meta, StoryObj } from '@storybook/vue3';
import TestComponent from '~/components/ui/TestComponent.vue';
/**
 * Exampleコンポーネントのストーリー定義
 *
 * @description
 * - コンポーネントの使用例を示す
 * - 各種プロパティの動作確認
 */
const meta = {
  title: 'Components/Example',
  component: TestComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // コンポーネントのプロパティをここに定義
  },
};
