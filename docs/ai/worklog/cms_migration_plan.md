# WordPress から Newt CMS への移行計画

このドキュメントでは、現在のWordPressベースのコンテンツ管理システムからNewt CMSへの移行計画について詳細を定義します。

## 1. 移行の目的と背景

### 1.1 移行の目的

- **JAMstack アーキテクチャへの完全移行**: ヘッドレスCMSを活用した最新のアーキテクチャ採用
- **コンテンツ管理の簡素化**: 使いやすいインターフェースによる効率的なコンテンツ管理
- **パフォーマンス向上**: APIベースのコンテンツ取得によるフロントエンドの高速化
- **セキュリティ強化**: WordPressの脆弱性リスクの排除
- **開発ワークフローの改善**: 設計書との整合性確保

### 1.2 Newt CMSの主な利点

- **使いやすい管理画面**: 直感的なUIでコンテンツ管理が容易
- **構造化されたコンテンツモデル**: 型安全なコンテンツスキーマ定義
- **高速なAPI**: CDN対応のGraphQL/REST APIによる高速なコンテンツ配信
- **画像最適化**: 自動的な画像最適化と変換
- **多言語対応**: 将来的な多言語コンテンツ対応の容易さ
- **Webhook連携**: 外部システムとの連携の柔軟性

## 2. 移行計画

### 2.1 移行フェーズ

| フェーズ                      | 内容                                              | 期間   |
| ----------------------------- | ------------------------------------------------- | ------ |
| 1. 準備と計画                 | 現状分析、コンテンツモデル設計、APIキー取得       | 1週間  |
| 2. Newt CMS設定               | スペース作成、コンテンツモデル実装、ユーザー設定  | 1週間  |
| 3. コンテンツ移行             | WordPressからコンテンツをエクスポート・インポート | 2週間  |
| 4. API連携実装                | Nuxtアプリケーションでのデータ取得処理実装        | 2週間  |
| 5. テストと検証               | データ取得、表示の確認、パフォーマンス測定        | 1週間  |
| 6. 本番切り替え               | 本番環境での切り替え、リダイレクト設定            | 1日    |
| 7. モニタリングとチューニング | 運用監視、パフォーマンス最適化                    | 継続的 |

### 2.2 コンテンツモデル設計

#### 作品（Works）モデル

- タイトル（テキスト）
- スラッグ（テキスト）
- 概要（リッチテキスト）
- サムネイル画像（メディア）
- 詳細内容（リッチテキスト）
- 使用技術（マルチセレクト）
- URL（テキスト）
- 制作期間（日付範囲）
- カテゴリー（参照）

#### 成果物（Sandbox）モデル

- タイトル（テキスト）
- スラッグ（テキスト）
- 概要（リッチテキスト）
- サムネイル画像（メディア）
- 詳細内容（リッチテキスト）
- 使用技術（マルチセレクト）
- 公開URL（テキスト）
- ソースコードURL（テキスト）
- カテゴリー（参照）

#### プロフィール（Profile）モデル

- 名前（テキスト）
- 肩書き（テキスト）
- 自己紹介（リッチテキスト）
- プロフィール画像（メディア）
- スキル（カスタムフィールド）
  - 名前（テキスト）
  - カテゴリー（セレクト）
  - レベル（数値）
- 職歴（カスタムフィールド）
  - 会社名（テキスト）
  - 役職（テキスト）
  - 期間（日付範囲）
  - 詳細（リッチテキスト）

### 2.3 API実装計画

#### データ取得用ユーティリティ関数

```typescript
// utils/cms.ts
import { createClient } from 'newt-client-js';

// Newtクライアントの初期化
const client = createClient({
  spaceUid: process.env.NUXT_PUBLIC_NEWT_SPACE_UID,
  token: process.env.NUXT_PUBLIC_NEWT_API_TOKEN,
  apiType: 'cdn',
});

// 作品一覧の取得
export const getWorks = async (params = {}) => {
  return await client.getContents({
    appUid: 'portfolio',
    modelUid: 'work',
    ...params,
  });
};

// 作品詳細の取得
export const getWorkBySlug = async (slug: string) => {
  return await client.getFirstContent({
    appUid: 'portfolio',
    modelUid: 'work',
    query: {
      slug,
    },
  });
};

// 成果物一覧の取得
export const getSandboxItems = async (params = {}) => {
  return await client.getContents({
    appUid: 'portfolio',
    modelUid: 'sandbox',
    ...params,
  });
};

// 成果物詳細の取得
export const getSandboxItemBySlug = async (slug: string) => {
  return await client.getFirstContent({
    appUid: 'portfolio',
    modelUid: 'sandbox',
    query: {
      slug,
    },
  });
};

// プロフィール情報の取得
export const getProfile = async () => {
  return await client.getFirstContent({
    appUid: 'portfolio',
    modelUid: 'profile',
  });
};
```

#### Nuxtページでの利用例

```vue
<script setup>
  // pages/works/[slug].vue
  const route = useRoute();
  const { data: work } = await useFetch(() => `/api/works/${route.params.slug}`);
</script>

<template>
  <div>
    <h1>{{ work.title }}</h1>
    <div v-html="work.content"></div>
    <!-- ... その他の表示内容 ... -->
  </div>
</template>
```

### 2.4 サーバーAPI実装

```typescript
// server/api/works/[slug].ts
import { getWorkBySlug } from '~/utils/cms';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');

  try {
    const work = await getWorkBySlug(slug);

    if (!work) {
      throw createError({
        statusCode: 404,
        message: 'Work not found',
      });
    }

    return work;
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message,
    });
  }
});
```

## 3. 技術的考慮事項

### 3.1 環境変数設定

```env
# .env
NUXT_PUBLIC_NEWT_SPACE_UID=your_space_uid
NUXT_PUBLIC_NEWT_API_TOKEN=your_api_token
NUXT_PUBLIC_NEWT_API_TYPE=cdn
NUXT_PUBLIC_NEWT_APP_UID=portfolio
```

### 3.2 型定義

```typescript
// types/cms.ts
export interface Work {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  content: string;
  technologies: string[];
  url?: string;
  period: {
    from: string;
    to: string;
  };
  category: Category;
}

export interface SandboxItem {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  thumbnail: {
    src: string;
    alt: string;
  };
  content: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  category: Category;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  profileImage: {
    src: string;
    alt: string;
  };
  skills: Skill[];
  experiences: Experience[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'other';
  level: number;
}

export interface Experience {
  company: string;
  position: string;
  period: {
    from: string;
    to: string;
  };
  description: string;
}
```

### 3.3 データ移行ツール

WordPressデータを適切な形式でエクスポートし、Newt CMSへインポートするためのスクリプトを作成予定。
主な機能:

- WordPress REST APIからのデータ取得
- データ形式の変換
- 画像ファイルのダウンロードと再アップロード
- Newt CMS APIを使用したコンテンツ作成

## 4. リスクと対策

| リスク               | 影響                       | 対策                                                   |
| -------------------- | -------------------------- | ------------------------------------------------------ |
| データ移行の不完全性 | コンテンツの欠落や表示崩れ | 移行後の徹底的な検証、段階的な移行、バックアップの保持 |
| API連携の不具合      | サイト表示エラー           | 十分なエラーハンドリング、フォールバック表示の実装     |
| パフォーマンス低下   | ユーザー体験の悪化         | SSG/ISRの活用、キャッシュ戦略の最適化                  |
| 運用コスト増加       | 予算オーバー               | 無料プランからの開始、段階的な機能拡張                 |

## 5. スケジュール

| アクティビティ       | 開始日     | 終了日     | 担当者    |
| -------------------- | ---------- | ---------- | --------- |
| 現状分析             | YYYY-MM-DD | YYYY-MM-DD | 開発者    |
| コンテンツモデル設計 | YYYY-MM-DD | YYYY-MM-DD | 開発者    |
| Newt CMS設定         | YYYY-MM-DD | YYYY-MM-DD | 開発者    |
| 移行スクリプト作成   | YYYY-MM-DD | YYYY-MM-DD | 開発者    |
| データ移行実行       | YYYY-MM-DD | YYYY-MM-DD | 開発者    |
| API連携実装          | YYYY-MM-DD | YYYY-MM-DD | 開発者    |
| テストと検証         | YYYY-MM-DD | YYYY-MM-DD | 開発者/QA |
| 本番切り替え         | YYYY-MM-DD | YYYY-MM-DD | 開発者    |

## 6. まとめ

WordPressからNewt CMSへの移行により、よりモダンで保守性の高いJAMstackアーキテクチャを実現し、パフォーマンスとセキュリティを向上させます。段階的に移行を進め、十分なテストと検証を行うことで、スムーズな移行を目指します。また、設計書と実装の整合性を確保することで、長期的なプロジェクトの健全性を維持します。
