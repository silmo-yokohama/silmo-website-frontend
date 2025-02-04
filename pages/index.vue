<script setup lang="ts">
  const works = [
    {
      title: 'E-commerce Platform',
      description: 'Next.js と Supabase を使用したモダンなECサイト。',
      category: 'Web App',
    },
    {
      title: 'Corporate Website',
      description: 'アニメーションと高いパフォーマンスを両立した企業サイト。',
      category: 'Website',
    },
    {
      title: 'Fitness Tracking App',
      description: 'React Native で開発したクロスプラットフォームアプリ。',
      category: 'Mobile App',
    },
    {
      title: 'Design System',
      description: 'コンポーネントライブラリとデザインガイドライン。',
      category: 'Design',
    },
  ];
</script>

<template>
  <div class="min-h-screen pt-[60px] md:pt-[50px]">
    <!-- Hero Section -->
    <ui-hero-section />
    <!-- Featured Works -->
    <common-section>
      <common-section-title>Selected Works</common-section-title>
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <common-list-item
          v-for="work in works"
          :key="work.title"
          :to="'/works/1'"
          :title="work.title"
          :description="work.description"
          :category="work.category"
        />
      </div>

      <!-- Works & Portfolio Links -->
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 flex-1">
        <common-link to="/works" class="w-full sm:w-60 text-center"> 全ての実績 </common-link>
        <common-link to="/portfolio" class="w-full sm:w-60 text-center"> 全てのポートフォリオ </common-link>
      </div>
    </common-section>

    <!-- Contact -->
    <common-section>
      <common-section-title>Get in Touch</common-section-title>
      <p class="mt-4 max-w-[600px] text-lg">新しいプロジェクトのご相談やお問い合わせをお待ちしています。 まずはお気軽にメッセージをお送りください。</p>
      <common-link class="mt-8" to="/contact"> Contact Me </common-link>
    </common-section>
  </div>
</template>
