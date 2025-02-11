<script setup lang="ts">
  const description = 'SilMoは、神奈川・東京を拠点にしているフリーランスエンジニアです。';

  useSeoMeta({
    title: 'SilMo',
    description,
    keywords: 'フロントエンド開発, バックエンド開発, フリーランスエンジニア, 神奈川, 東京, 横浜, WordPress ,Vue ,React, Laravel, Next.js, Nuxt3, Go',
    ogTitle: 'SilMo',
    ogDescription: description,
    ogImage: 'http://wp.silmo.jp/wp-content/uploads/2025/02/silmo.logo-01.png',
    ogUrl: 'https://silmo.jp',
    twitterTitle: 'SilMo',
    twitterDescription: description,
    twitterImage: 'http://wp.silmo.jp/wp-content/uploads/2025/02/silmo.logo-01.png',
    twitterCard: 'summary',
  });

  useHead({
    htmlAttrs: {
      lang: 'ja',
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico',
      },
    ],
  }); // グローバルなメタ情報の設定
</script>

<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
  /* グローバルなスタイル設定 */
  body {
    @apply bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100;
    font-feature-settings: "palt";
  }
</style>
