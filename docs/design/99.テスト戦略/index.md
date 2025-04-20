# SilMoポートフォリオサイト テスト戦略

このドキュメントでは、SilMoポートフォリオサイトのテスト戦略、テスト手法、およびテストツールについて定義しています。

## 1. テスト戦略の概要

### 1.1 テストの目的

- バグの早期発見と修正
- コードの品質と信頼性の担保
- リファクタリングの安全性確保
- 仕様との整合性の検証
- 継続的なコード品質の維持

### 1.2 テスト階層

```
+------------------------+
|    E2Eテスト           | ← エンドツーエンドの機能検証（必要に応じて）
+------------------------+
|    統合テスト          | ← コンポーネント間の連携確認
+------------------------+
|    コンポーネントテスト | ← 個別コンポーネントの検証
+------------------------+
|    ユニットテスト      | ← 関数・メソッドレベルの検証
+------------------------+
```

## 2. テスト手法

### 2.1 ユニットテスト

- **対象**: ユーティリティ関数、ヘルパー関数、コンポジション関数
- **ツール**: Vitest
- **アプローチ**: 入力と出力の検証、エッジケースの確認
- **カバレッジ目標**: ビジネスロジックを含む関数は70%以上

```ts
// utils/formatters.tsのテスト例
import { describe, it, expect } from 'vitest';
import { formatDate } from '../utils/formatters';

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2023-01-01');
    expect(formatDate(date)).toBe('2023年1月1日');
  });

  it('handles invalid date', () => {
    expect(formatDate(null)).toBe('-');
  });
});
```

### 2.2 コンポーネントテスト

- **対象**: UIコンポーネント、ページコンポーネント
- **ツール**: Vitest + Vue Test Utils
- **アプローチ**: コンポーネントのレンダリング、イベント発火、プロップス検証
- **カバレッジ目標**: 共通UIコンポーネントは80%以上

```ts
// components/ui/BaseButton.vueのテスト例
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '../components/ui/BaseButton.vue';

describe('BaseButton', () => {
  it('renders with correct text', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Click me',
      },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(BaseButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
```

### 2.3 統合テスト

- **対象**: 複数のコンポーネントの連携、フォーム送信、ルーティングなど
- **ツール**: Vitest + Vue Test Utils + happy-dom
- **アプローチ**: コンポーネント間の相互作用、データの受け渡し検証
- **カバレッジ目標**: 重要な機能フローは60%以上

```ts
// 統合テストの例（フォーム送信）
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ContactForm from '../components/ContactForm.vue';
import { useContactForm } from '../composables/useContactForm';

// モック
vi.mock('../composables/useContactForm', () => ({
  useContactForm: vi.fn().mockReturnValue({
    submitForm: vi.fn().mockResolvedValue({ success: true }),
  }),
}));

describe('ContactForm integration', () => {
  it('submits form with correct data', async () => {
    const wrapper = mount(ContactForm);

    // フォーム入力
    await wrapper.find('input[name="name"]').setValue('Test User');
    await wrapper.find('input[name="email"]').setValue('test@example.com');
    await wrapper.find('textarea[name="message"]').setValue('Test message');

    // フォーム送信
    await wrapper.find('form').trigger('submit');

    // 送信関数が正しいデータで呼ばれたか検証
    const { submitForm } = useContactForm();
    expect(submitForm).toHaveBeenCalledWith({
      name: 'Test User',
      email: 'test@example.com',
      message: 'Test message',
    });
  });
});
```

### 2.4 ビジュアルテスト

- **対象**: UIコンポーネント、レイアウト
- **ツール**: Storybook
- **アプローチ**: 各コンポーネントの視覚的な検証、インタラクションテスト
- **カバレッジ目標**: 共通UIコンポーネントは100%

```ts
// stories/BaseButton.stories.ts の例
import BaseButton from '../components/ui/BaseButton.vue';

export default {
  title: 'UI/BaseButton',
  component: BaseButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: '<BaseButton v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
  size: 'md',
};
```

## 3. テスト環境とツール

### 3.1 テストツール

| ツール              | 用途                                             |
| ------------------- | ------------------------------------------------ |
| Vitest              | 高速なユニットテスト実行、Vue.jsとの統合性       |
| Vue Test Utils      | Vue.jsコンポーネントの単体・統合テスト           |
| happy-dom           | テスト用DOMシミュレーション                      |
| @vitest/coverage-v8 | コードカバレッジ測定                             |
| Storybook           | コンポーネントのビジュアルテスト・ドキュメント化 |

### 3.2 テスト実行コマンド

| コマンド                | 説明                                       |
| ----------------------- | ------------------------------------------ |
| `npm run test`          | すべてのテストを実行                       |
| `npm run test:coverage` | カバレッジレポート付きでテスト実行         |
| `npm run test:ui`       | Vitestのインタラクティブモードでテスト実行 |
| `npm run story`         | Storybookを起動してビジュアルテスト        |

### 3.3 テストファイル配置

```
/
├── components/              # コンポーネント
│   ├── ui/                  # UIコンポーネント
│   │   ├── BaseButton.vue   # コンポーネント
│   │   └── ...
├── tests/                   # テストファイル
│   ├── unit/                # ユニットテスト
│   │   ├── utils.test.ts    # ユーティリティ関数のテスト
│   │   └── ...
│   └── components/          # コンポーネントテスト
│       ├── BaseButton.test.ts # UIコンポーネントのテスト
│       └── ...
└── stories/                 # Storybookストーリー
    ├── BaseButton.stories.ts # UIコンポーネントのストーリー
    └── ...
```

## 4. CI/CDとの統合

- **Pull Requestごとのテスト**: PRが作成されるたびに自動的にテストが実行
- **テスト失敗時の処理**: テストが失敗した場合、PRのマージをブロック
- **カバレッジレポート**: PRごとにカバレッジレポートを生成し、閾値を下回る場合は警告

## 関連ドキュメント

- [技術スタック](../技術スタック/index.md)
- [コード品質と安全性](../コーディング規約/コード品質と安全性.md)
- [デプロイフロー](./デプロイフロー.md)
