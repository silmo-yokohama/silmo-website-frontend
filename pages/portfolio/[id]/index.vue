<script setup lang="ts">
  import { Github, Link as LinkIcon, CalendarDays, CodeXml, PencilRuler } from 'lucide-vue-next';
  import type { Project } from '~/types/project';

  const route = useRoute();
  const _id = computed(() => route.params.id);

  const data: Project = {
    id: 4,
    title: 'デザインシステム構築',
    description: 'コンポーネントライブラリとデザインガイドラインの作成。開発効率と品質の向上に貢献。',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
    tags: [
      { id: 1, name: 'Storybook' },
      { id: 2, name: 'Figma' },
      { id: 3, name: 'Design System' },
    ],
  };
</script>

<template>
  <div>
    <common-page-title :title="data.title" subtitle="Portfolio" :description="data.description" />
    <layouts-content-wrapper content-width="max-w-[1000px]">
      <div class="relative aspect-[16/9] mb-12 rounded-2xl overflow-hidden">
        <nuxt-img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
          alt="デザインシステム構築"
          class="w-full h-full object-cover"
        />
      </div>

      <article class="mt-10 article">
        <ui-table-wrapper>
          <ui-table-row>
            <ui-table-row-title>
              <link-icon class="text-gray-500 w-4 h-4" />
              URL</ui-table-row-title
            >
            <ui-table-row-content> SECRET </ui-table-row-content>
          </ui-table-row>
          <ui-table-row>
            <ui-table-row-title>
              <github class="text-orange-500 w-4 h-4" />
              GitHub
            </ui-table-row-title>
            <ui-table-row-content>-</ui-table-row-content>
          </ui-table-row>
          <ui-table-row>
            <ui-table-row-title>
              <calendar-days class="text-blue-500 w-4 h-4" />
              作成期間
            </ui-table-row-title>
            <ui-table-row-content>2024年1月 ~ 2024年2月</ui-table-row-content>
          </ui-table-row>
          <ui-table-row>
            <ui-table-row-title>
              <code-xml class="text-green-500 w-4 h-4" />
              使用技術
            </ui-table-row-title>
            <ui-table-row-content>
              <common-tag tag-color-class="tag-emerald">Nuxt3</common-tag>
              <common-tag tag-color-class="tag-emerald">Storybook</common-tag>
              <common-tag tag-color-class="tag-emerald">Figma</common-tag>
            </ui-table-row-content>
          </ui-table-row>
          <ui-table-row>
            <ui-table-row-title>
              <pencil-ruler class="text-purple-500 w-4 h-4" />
              担当業務
            </ui-table-row-title>
            <ui-table-row-content>
              <common-tag tag-color-class="tag-purple">デザインシステム構築</common-tag>
              <common-tag tag-color-class="tag-purple">コンポーネントライブラリ</common-tag>
              <common-tag tag-color-class="tag-purple">デザインガイドライン</common-tag>
            </ui-table-row-content>
          </ui-table-row>
        </ui-table-wrapper>

        <section>
          <h2>WordPressを用いたウェブサイト開発の最新トレンド</h2>
          <p>
            ウェブ開発の世界は日々進化しており、新しい技術やツールが次々と登場しています。特に、<strong>WordPress</strong>はその柔軟性と拡張性から、多くの開発者やデザイナーに愛用されています。
          </p>

          <blockquote>
            <p>「WordPressは、初心者からプロフェッショナルまで、誰もが使いやすいプラットフォームです。」</p>
          </blockquote>

          <h3>カスタマイズ性の魅力</h3>
          <p>
            WordPressの最大の魅力はそのカスタマイズ性にあります。<em>豊富なテーマとプラグイン</em>を活用することで、初心者でも簡単にプロフェッショナルなウェブサイトを構築することができます。
          </p>
          <ul>
            <li>テーマの選択肢が豊富</li>
            <li>プラグインによる機能拡張</li>
            <li>直感的なブロックエディター「Gutenberg」</li>
          </ul>

          <h3>セキュリティの重要性</h3>
          <p>
            WordPressは世界中で広く利用されているため、<a href="https://example.com/security-tips" target="_blank">セキュリティの脅威</a
            >にさらされることも少なくありません。定期的なアップデートやセキュリティプラグインの導入は必須です。
          </p>
          <ol>
            <li>定期的なアップデート</li>
            <li>セキュリティプラグインの導入</li>
            <li>二要素認証の設定</li>
          </ol>

          <h3>SEO対策</h3>
          <p>
            WordPressはSEOに強いプラットフォームとして知られていますが、適切なプラグインを使用することで、さらに検索エンジンでの可視性を高めることができます。
          </p>
          <figure>
            <img src="https://via.placeholder.com/600x400" alt="SEO対策のイメージ" />
            <figcaption>SEO対策の重要性を示す図</figcaption>
          </figure>

          <h3>パフォーマンスの最適化</h3>
          <p>
            ウェブサイトの読み込み速度はユーザーエクスペリエンスに大きな影響を与えます。<code>キャッシュプラグイン</code>の導入や画像の最適化、CDNの利用など、さまざまな方法でパフォーマンスを向上させることができます。
          </p>

          <p>
            以上のように、WordPressを用いたウェブサイト開発には多くのポイントがありますが、これらをしっかりと押さえることで、より効果的なサイト運営が可能になります。今後も新しい技術やトレンドに注目し、常に最新の情報を取り入れていくことが重要です。
          </p>
        </section>
      </article>
    </layouts-content-wrapper>
  </div>
</template>
