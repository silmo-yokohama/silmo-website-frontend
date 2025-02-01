import type { Meta, StoryObj } from '@storybook/vue3';

const ExampleComponent = defineComponent({
  name: 'ExampleComponent',
  setup() {
    return {
      message: 'Hello, World!',
    };
  },
});

/**
 * Exampleコンポーネントのストーリー定義
 *
 * @description
 * - コンポーネントの使用例を示す
 * - 各種プロパティの動作確認
 */
const meta = {
  title: 'Components/Example',
  component: ExampleComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof ExampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // コンポーネントのプロパティをここに定義
  },
};
