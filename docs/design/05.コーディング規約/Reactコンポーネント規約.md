# SilMoポートフォリオサイト Reactコンポーネント規約

このドキュメントでは、SilMoポートフォリオサイトのReact/Next.jsコンポーネント実装に関するルールについて定義しています。効率的で保守しやすいコンポーネントを開発するためのガイドラインです。

## 5. React/Next.jsルール

### 5.1 コンポーネント構造

- **関数コンポーネント**: クラスコンポーネントではなく関数コンポーネントを使用
- **コンポーネント分割**: 単一責任の原則に従い、一つのコンポーネントは一つの明確な役割を持つ
- **小さなコンポーネント**: 100行を超えるコンポーネントは再分割を検討
- **プロパティ型**: すべてのコンポーネントpropsに型定義を行う

### 5.2 Server ComponentsとClient Components

- **Server Components**: デフォルトではServer Componentsとして実装
- **Client Components**: インタラクティブな機能が必要な場合のみClient Componentsを使用
- **明示的なマーキング**: Client Componentsは先頭に`'use client'`ディレクティブを記述
- **コンポーネントの分離**: サーバーとクライアントのロジックを明確に分離

### 5.3 Hooksルール

- **Hooksの規則**: React Hooksの公式ルール（トップレベルでの呼び出し、条件分岐内での使用禁止など）を厳守
- **カスタムHooks**: 再利用可能なロジックはカスタムHooksに抽出
- **依存配列**: useEffect, useCallback, useMemoの依存配列は必ず明示
- **ESLintルール**: `eslint-plugin-react-hooks`を使用して自動検証

## 関連ドキュメント

- [コーディング規約インデックス](./index.md)
- [基本方針と命名規則](./基本方針と命名規則.md)
- [TypeScript規約](./TypeScript規約.md)
- [スタイリング規約](./スタイリング規約.md)
- [コード品質と安全性](./コード品質と安全性.md)
