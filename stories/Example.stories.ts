import type { Meta, StoryObj } from '@storybook/vue3';
import { UiTestComponent } from '#components';
/**
 * Exampleコンポーネントのストーリー定義
 *
 * @description
 * - コンポーネントの使用例を示す
 * - 各種プロパティの動作確認
 */
const meta = {
  title: 'Components/Example',
  component: UiTestComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof UiTestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // コンポーネントのプロパティをここに定義
  },
};
