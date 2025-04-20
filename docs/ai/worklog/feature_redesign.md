# SilMoポートフォリオサイト 設計書更新分析

このドキュメントは、現在のプロジェクト（Nuxt3）に合わせて、Next.js前提で書かれた設計書を更新するために必要な変更点を分析したものです。

## 1. 更新が必要な主要箇所

| カテゴリ         | 該当ファイル                                                 | 対応内容                                                 |
| ---------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| 技術スタック     | `docs/design/02.技術スタック/フロントエンド関連技術.md`      | フレームワークをNext.jsからNuxt3に変更し、関連技術も更新 |
| システム設計     | `docs/design/03.システム設計/アーキテクチャ.md`              | ディレクトリ構成とアーキテクチャ図をNuxt3仕様に更新      |
| システム設計     | `docs/design/03.システム設計/コンポーネント設計.md`          | Nuxt3のコンポーネント設計パターンに更新                  |
| デザイン設計     | `docs/design/04.デザイン設計/コンポーネント設計.md`          | UIコンポーネントライブラリとの連携方法を更新             |
| コーディング規約 | `docs/design/05.コーディング規約/Reactコンポーネント規約.md` | Vueコンポーネント規約に置き換え                          |
| コーディング規約 | `docs/design/05.コーディング規約/`                           | Vue/Nuxt3特有の規約を追加                                |

## 2. フロントエンド関連技術の更新内容

### 現状（Next.js）

- フレームワーク: Next.js 14.2.28
- ルーティング: Next.js App Router
- UIコンポーネント: shadcn/ui
- レンダリング戦略: SSG + ISR
- ステート管理: React Context API + Zustand

### 更新案（Nuxt3）

- フレームワーク: Nuxt 3.15.4
- ルーティング: Nuxt Pages Router
- UIコンポーネント: カスタムコンポーネント (shadcn/ui未使用)
- レンダリング戦略: SSR + SSG (Nuxt Nitro)
- ステート管理: Vue Composition API + Pinia (要確認)
- スタイリング: TailwindCSS 3.4.17 + SCSS
- カラーモード: @nuxtjs/color-mode
- アイコン: lucide-vue-next

## 3. システム設計の更新内容

### ディレクトリ構成の更新

現在のNuxt3プロジェクトでは以下のディレクトリ構成が確認されています：

```
- app/
- assets/
- components/
- constants/
- layouts/
- pages/
- public/
- server/
- types/
- utils/
```

Next.js App Routerベースの設計からNuxt3の規約に合わせた更新が必要です。特に以下の点に注意：

1. `app/` ディレクトリの役割の違い
2. Nuxt特有の `layouts/` ディレクトリの活用
3. Vue Composition APIに適したコンポーネント設計への更新
4. サーバーサイド処理の `server/` ディレクトリ活用

## 4. コンポーネント設計の更新内容

### 現状（Next.js + shadcn/ui）

- React Server Components (RSC) を活用した設計
- shadcn/ui をベースとしたコンポーネント構成
- Client/Server Component の明確な区分け

### 更新案（Nuxt3 + TailwindCSS）

- Vue 3 Composition API を活用した設計
- TailwindCSS + カスタムコンポーネントによる実装
- Nuxt3 の `<script setup>` とTypeScriptの統合
- Auto-imports 機能の活用

## 5. その他更新が必要な箇所

1. **API連携**: Next.js API Routes から Nuxt Server API に更新
2. **ビルド・デプロイフロー**: Vercel前提の記述からプラットフォームに依存しない記述に更新
3. **テスト戦略**: React Testing Library から Vue Test Utils + Vitest に更新
4. **開発環境とツール**: 開発環境設定をNuxt3向けに更新

## 6. 優先的に更新すべき文書

1. `docs/design/02.技術スタック/フロントエンド関連技術.md`
2. `docs/design/03.システム設計/アーキテクチャ.md`
3. `docs/design/05.コーディング規約/` 関連ファイル（Vue/Nuxt特有の規約に更新）

## 7. 移行にあたっての検討事項

1. shadcn/ui から代替UIライブラリへの移行戦略
2. Next.js App Router特有の機能からNuxt3の同等機能への移行マッピング
3. 状態管理やデータフェッチングの手法の最適化
4. Nuxt3のコンポジションAPIとTypeScriptの効果的な活用方法

## 8. Vueコンポーネント規約の新規作成

現在の「Reactコンポーネント規約.md」をベースに、以下のVue/Nuxt3特有の規約を含む新しい文書を作成する必要があります：

### 8.1 Vueコンポーネント構造

- **単一ファイルコンポーネント（SFC）**: `.vue`ファイルを使用した構造化
- **script setup構文**: Composition APIをより簡潔に記述できる`<script setup>`の推奨
- **TypeScript統合**: `<script setup lang="ts">`によるタイプセーフなコンポーネント開発
- **コンポーネント命名**: PascalCaseでの命名（例：`BaseButton.vue`）

### 8.2 Composition API利用ガイドライン

- **ref vs reactive**: プリミティブ値には`ref`、オブジェクトには`reactive`を使用する原則
- **computed**: 派生データの計算には`computed`を使用
- **watch/watchEffect**: 副作用処理に適した使い分け
- **生命周期フック**: `onMounted`、`onUnmounted`などの適切な使用

### 8.3 Nuxt3特有の機能活用

- **Auto-imports**: コンポーネントやComposition API関数の自動インポート
- **Nuxtプラグイン**: グローバル機能の拡張方法
- **Nuxtミドルウェア**: ルーティング前後の処理方法
- **useFetch/useAsyncData**: データ取得の最適な方法

### 8.4 パフォーマンス最適化

- **Suspense**: 非同期コンポーネント読み込みの処理
- **Teleport**: DOMツリー外への要素の描画
- **コンポーネントの遅延ロード**: 必要に応じたコンポーネント読み込み
- **メモ化**: `shallowRef`や`markRaw`の適切な使用
