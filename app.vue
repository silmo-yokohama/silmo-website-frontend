<script setup lang="ts">
  // グローバルなメタ情報の設定
  useHead({
    title: 'Portfolio Site',
    meta: [{ name: 'description', content: 'My professional portfolio website showcasing my works and skills.' }],
  });
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
