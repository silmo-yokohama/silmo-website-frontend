<script setup lang="ts">
  /**
   * コンテンツを中央寄せで表示するラッパーコンポーネント
   *
   * @description
   * - 画面上部に固定のパディングを設定
   * - コンテンツ幅を最大640pxに制限
   * - レスポンシブ対応（モバイル/デスクトップ）
   */
  defineOptions({
    name: 'ContentWrapper',
  });
</script>

<template>
  <div class="pt-[60px] md:pt-[50px]">
    <div class="pb-8 md:pb-12">
      <div class="max-w-[640px] mx-auto px-6">
        <slot />
      </div>
    </div>
  </div>
</template>
