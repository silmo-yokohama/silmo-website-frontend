# SilMoポートフォリオサイト API設計

このドキュメントでは、SilMoポートフォリオサイトのNewt CMS API連携および内部APIの設計について定義しています。

## 6. API設計

### 6.1 Newt CMS API連携

#### プロフィール取得

Newt CMSからプロフィール情報を取得するための関数を実装します。特定のアプリと モデルからプロフィールデータを取得し、型安全な形で返す設計とします。

```typescript
// lib/newt.ts
export async function getProfile(): Promise<Profile | null> {
  try {
    const response = await newtClient.getContent<Profile>({
      appUid: 'silmo',
      modelUid: 'profile',
      // プロフィールはシングルトンなので1件のみ取得
    });

    return response;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}
```

#### 実績/成果物一覧取得

カテゴリ（works/sandbox）、ページネーション、表示件数を指定して、実績/成果物の一覧をNewtから取得する関数を用意します。作成日の降順でソートし、総件数や現在のページ情報も含めたレスポンスを返します。

```typescript
// lib/newt.ts
export async function getWorks({
  category = 'works',
  page = 1,
  limit = 9,
}: {
  category?: 'works' | 'sandbox';
  page?: number;
  limit?: number;
}): Promise<WorksResponse> {
  try {
    const response = await newtClient.getContents<Work>({
      appUid: 'silmo',
      modelUid: 'work',
      query: {
        category: category,
        select: ['title', 'slug', 'categories', 'technologies', 'coverImage', 'publishedAt'],
        order: ['-publishedAt'],
        limit: limit,
        skip: (page - 1) * limit,
      },
    });

    return {
      works: response.items,
      total: response.total,
      page,
      limit,
      totalPages: Math.ceil(response.total / limit),
    };
  } catch (error) {
    console.error(`Error fetching ${category}:`, error);
    return {
      works: [],
      total: 0,
      page,
      limit,
      totalPages: 0,
    };
  }
}
```

#### 実績/成果物詳細取得

スラッグ（URL用のID）をパラメータとして、特定の実績/成果物の詳細情報をNewtから取得する関数を実装します。該当データが存在しない場合は適切にnullを返します。

```typescript
// lib/newt.ts
export async function getWorkBySlug(slug: string): Promise<Work | null> {
  try {
    const response = await newtClient.getContents<Work>({
      appUid: 'silmo',
      modelUid: 'work',
      query: {
        slug: slug,
      },
    });

    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching work with slug ${slug}:`, error);
    return null;
  }
}
```

### 6.2 内部API

#### OGP画像生成API

Vercelの@vercel/ogを使用して、動的にOGP画像を生成するAPIエンドポイントを実装します。ページタイトルをパラメータとして受け取り、ブランドカラーを背景にしたカスタムOGP画像を生成します。エッジランタイムで動作させることで、高速なレスポンスを確保します。

```typescript
// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'SilMo Portfolio';

  // OGP画像を生成
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'white',
          background: '#00A197',
          width: '100%',
          height: '100%',
          padding: '50px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 30, opacity: 0.8 }}>SilMo Portfolio</div>
          <div>{title}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

#### ISR再検証API

コンテンツ更新時にISRページを再検証するためのAPIエンドポイントを実装します。シークレットキーによる認証を行い、指定されたパスのページを再検証します。Webhookと連携することで、CMS更新時に自動で関連ページを更新する仕組みを構築します。

```typescript
// app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, paths } = body;

    // シークレットキーの検証
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ success: false, message: 'Invalid secret' }, { status: 401 });
    }

    // 指定されたパスの再検証
    if (Array.isArray(paths) && paths.length > 0) {
      for (const path of paths) {
        revalidatePath(path);
      }

      return NextResponse.json({
        success: true,
        message: `Revalidated ${paths.length} paths`,
        revalidated: paths,
      });
    }

    return NextResponse.json({ success: false, message: 'No paths provided' }, { status: 400 });
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json({ success: false, message: 'Error revalidating paths' }, { status: 500 });
  }
}
```

## 関連ドキュメント

- [システム設計インデックス](./index.md)
- [データフロー](./データフロー.md)
- [技術的対策](./技術的対策.md)
- [技術スタック](../技術スタック/バックエンド関連技術.md)
