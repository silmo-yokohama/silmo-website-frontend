<script setup lang="ts">
  import type { Project } from '~/types/project';

  const portfolios: Project[] = [
    {
      id: 1,
      title: 'ECサイトリニューアル',
      description: 'Next.js と Supabase を使用したモダンなECサイト。パフォーマンスとユーザビリティを大幅に改善し、コンバージョン率が30%向上。',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964&auto=format&fit=crop',
      tags: [
        { id: 1, name: 'Next.js' },
        { id: 2, name: 'TypeScript' },
        { id: 3, name: 'Supabase' },
        { id: 4, name: 'TailwindCSS' },
      ],
    },
    {
      id: 2,
      title: 'コーポレートサイト制作',
      description: 'アニメーションと高いパフォーマンスを両立した企業サイト。Lighthouseスコア95点以上を達成。',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      tags: [
        { id: 1, name: 'Nuxt.js' },
        { id: 2, name: 'Vue.js' },
        { id: 3, name: 'GSAP' },
        { id: 4, name: 'Responsive' },
      ],
    },
    {
      id: 3,
      title: 'フィットネスアプリ開発',
      description: 'React Native で開発したクロスプラットフォームアプリ。ユーザーの運動記録や食事管理機能を実装。',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
      tags: [
        { id: 1, name: 'React Native' },
        { id: 2, name: 'Expo' },
        { id: 3, name: 'Firebase' },
      ],
    },
    {
      id: 4,
      title: 'デザインシステム構築',
      description: 'コンポーネントライブラリとデザインガイドラインの作成。開発効率と品質の向上に貢献。',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop',
      tags: [
        { id: 1, name: 'Storybook' },
        { id: 2, name: 'Figma' },
        { id: 3, name: 'Design System' },
      ],
    },
  ];
</script>

<template>
  <div>
    <common-page-title title="Portfolio" subtitle="ポートフォリオ" description="学習や趣味で作成したものをまとめています。" />
    <layouts-content-wrapper content-width="max-w-[1000px]">
      <ui-card-list>
        <nuxt-link v-for="portfolio in portfolios" :key="portfolio.id" :to="`/portfolio/${portfolio.id}`">
          <ui-card-item :project="portfolio" />
        </nuxt-link>
      </ui-card-list>
    </layouts-content-wrapper>
  </div>
</template>
