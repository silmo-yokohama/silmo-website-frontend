# SilMoポートフォリオサイト TypeScript規約

このドキュメントでは、SilMoポートフォリオサイトのTypeScript固有のコーディングルールについて定義しています。型安全性を確保し、保守性の高いコードを実現するためのガイドラインです。

## 4. TypeScriptルール

### 4.1 型定義

- **明示的な型定義**: 関数の引数と戻り値は常に型アノテーションを記述
- **暗黙的な型推論の活用**: ローカル変数は型推論が明確な場合は型アノテーションを省略可
- **any型の回避**: `any`型はできるだけ使用せず、`unknown`や具体的な型を使用
- **型エイリアスとインターフェース**:
  - 拡張予定のオブジェクト型には`interface`を使用
  - 単純な型や共用体（Union）には`type`を使用

### 4.2 TypeScript設定

- `tsconfig.json`での厳格な型チェック設定を有効化:
  - `"strict": true`
  - `"noImplicitAny": true`
  - `"strictNullChecks": true`
  - `"exactOptionalPropertyTypes": true`

### 4.3 型のエクスポート

- 再利用可能な型は`types/`ディレクトリに配置し、必要に応じてエクスポート
- モジュール固有の型は対応するモジュールファイル内で定義

### 4.4 型安全性のベストプラクティス

- **Non-null assertion operator (`!`)の回避**: 非nullアサーションは極力使用せず、条件チェックを行う
- **Optional chaining (`?.`)の活用**: nullやundefinedの可能性があるプロパティへのアクセスに使用
- **Nullish coalescing (`??`)の活用**: nullやundefinedの場合のデフォルト値設定に使用
- **型ガード関数の活用**: 複雑な型判定には専用の型ガード関数を実装

```typescript
// 型ガード関数の例
function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error !== null && 'code' in error && 'message' in error;
}
```

### 4.5 ジェネリック型

- **意味のある型パラメータ名**: 単一文字（`T`など）よりも意味のある名前（`TItem`など）を優先
- **制約の活用**: 型パラメータに対して適切な制約を設定（`<T extends object>`など）
- **デフォルト型の活用**: 必要に応じてデフォルト型パラメータを設定（`<T = string>`など）

### 4.6 Utility Types

- **組み込みUtility Typesの活用**: TypeScriptの組み込みユーティリティ型を積極的に活用
  - `Partial<T>`: プロパティをすべてオプショナルに
  - `Required<T>`: プロパティをすべて必須に
  - `Pick<T, K>`: 特定のプロパティのみを選択
  - `Omit<T, K>`: 特定のプロパティを除外
  - `Record<K, T>`: キーと値の型を持つオブジェクト型

### 4.7 TypeScript 5.x固有の機能

- **satisfies演算子**: 型制約の検証と型推論の維持を両立させるために活用
- **const型アサーション**: リテラル型を維持したい場合に使用

```typescript
// satisfies演算子の例
const themeColors = {
  primary: '#00A197',
  secondary: '#F8B62B',
} satisfies Record<string, string>;

// constアサーションの例
const directions = ['north', 'south', 'east', 'west'] as const;
type Direction = (typeof directions)[number]; // 'north' | 'south' | 'east' | 'west'
```

## 関連ドキュメント

- [コーディング規約インデックス](./index.md)
- [基本方針と命名規則](./基本方針と命名規則.md)
- [Reactコンポーネント規約](./Reactコンポーネント規約.md)
- [スタイリング規約](./スタイリング規約.md)
- [コード品質と安全性](./コード品質と安全性.md)
