# SilMoポートフォリオサイト Vueコンポーネント規約

このドキュメントでは、SilMoポートフォリオサイトのVue/Nuxt3コンポーネント実装に関するルールについて定義しています。効率的で保守しやすいコンポーネントを開発するためのガイドラインです。

## 5. Vue/Nuxt3ルール

### 5.1 コンポーネント構造

- **単一ファイルコンポーネント**: すべてのコンポーネントは`.vue`ファイルで作成
- **コンポーネント命名**: パスカルケース（PascalCase）で作成（例: `BaseButton.vue`, `TheHeader.vue`）
- **接頭辞の使用**:
  - `Base`: 基本UIコンポーネント（例: `BaseButton`, `BaseCard`）
  - `The`: アプリケーション全体で一度だけ使用するコンポーネント（例: `TheHeader`, `TheFooter`）
- **コンポーネント分割**: 単一責任の原則に従い、一つのコンポーネントは一つの明確な役割を持つ
- **小さなコンポーネント**: 100行を超えるコンポーネントは再分割を検討
- **プロパティ型**: すべてのコンポーネントpropsに型定義を行う

### 5.2 Script Setup構文

- **基本書式**: `<script setup lang="ts">`を使用
- **API宣言**: モジュールのトップレベルで宣言したものが自動的にテンプレートで使用可能
- **props定義**: `defineProps<{ ... }>()`形式で型安全に定義
- **イベント定義**: `defineEmits<{ ... }>()`で型安全に定義
- **露出スロット**: `defineSlots<{ ... }>()`で型安全に定義
- **モデル値**: `defineModel()`を使用してv-modelバインディングを定義

```vue
<script setup lang="ts">
  // propsの型定義
  const props = defineProps<{
    label: string;
    disabled?: boolean;
  }>();

  // イベントの型定義
  const emit = defineEmits<{
    (e: 'click', value: string): void;
    (e: 'change', value: boolean): void;
  }>();

  // スロットの型定義
  defineSlots<{
    default(props: { item: string }): any;
    header(): any;
  }>();

  // v-modelの定義
  const model = defineModel<string>();
</script>
```

### 5.3 Composition API ルール

- **ref vs reactive**:
  - プリミティブ値（文字列、数値、真偽値）には`ref`を使用
  - オブジェクトや配列には`reactive`を使用
- **computed**: 計算プロパティは`computed`を使用して宣言的に定義
- **watch**: 副作用処理は`watch`または`watchEffect`で適切に管理
- **ライフサイクルフック**: `onMounted`, `onUnmounted`など適切なライフサイクルフックを使用
- **カスタムコンポジション関数**: 再利用可能なロジックは`use`プレフィックスを持つ関数として抽出

```vue
<script setup lang="ts">
  import { ref, computed, watch, onMounted } from 'vue';

  // refでプリミティブ値を宣言
  const count = ref(0);

  // computedで計算プロパティを定義
  const doubleCount = computed(() => count.value * 2);

  // watchで変更監視
  watch(
    count,
    (newValue, oldValue) => {
      console.log(`Count changed from ${oldValue} to ${newValue}`);
    },
    { immediate: true }
  );

  // ライフサイクルフック
  onMounted(() => {
    console.log('Component mounted');
  });
</script>
```

### 5.4 Nuxt3特有の機能

- **Auto-imports**: Nuxt3の自動インポート機能を活用（明示的なimport文不要）
  - Vue Composition API (`ref`, `computed`など)
  - Nuxt提供のコンポジション関数 (`useRoute`, `useHead`など)
  - コンポーネント（`components/`ディレクトリ内のコンポーネント）
- **Nuxtリンク**: 内部リンクには`<NuxtLink>`を使用
- **ページとレイアウト**:
  - `pages/`ディレクトリ内のファイルは自動的にルートとして認識
  - `layouts/`ディレクトリ内のファイルはページレイアウトとして使用
- **データフェッチ**:
  - `useFetch`または`useAsyncData`を使用したデータ取得
  - `$fetch`を使用したAPI呼び出し

```vue
<script setup lang="ts">
  // Auto-importsによりimport文不要
  const route = useRoute();
  const { data: items } = await useFetch('/api/items');

  // ページのメタデータ設定
  useHead({
    title: 'ページタイトル',
    meta: [{ name: 'description', content: 'ページの説明' }],
  });
</script>

<template>
  <div>
    <h1>{{ route.params.id }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <NuxtLink :to="`/items/${item.id}`">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
```

### 5.5 パフォーマンス最適化

- **コンポーネントの遅延ロード**: `defineAsyncComponent`または`<ClientOnly>`を使用
- **状態管理の最適化**: `shallowRef`や`markRaw`を使用して必要に応じてリアクティブ性を制限
- **メモ化**: 計算コストの高い処理には`computed`や`useMemo`を使用
- **不要な再レンダリングの防止**: `v-once`や`v-memo`ディレクティブの活用

### 5.6 テンプレート記法

- **v-for**: 常に`:key`属性を指定
- **v-if/v-for**: 同じ要素に`v-if`と`v-for`を同時に使用しない（`v-if`が優先される）
- **v-model**: フォーム要素では適切に`v-model`を使用
- **条件付きクラス**: `:class`と`clsx`または配列・オブジェクト構文を組み合わせて使用

## 関連ドキュメント

- [コーディング規約インデックス](./index.md)
- [基本方針と命名規則](./基本方針と命名規則.md)
- [TypeScript規約](./TypeScript規約.md)
- [スタイリング規約](./スタイリング規約.md)
- [コード品質と安全性](./コード品質と安全性.md)
