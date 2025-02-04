<script setup lang="ts">
  /**
   * デフォルトレイアウトコンポーネント
   * @description ヘッダー、フッター、およびページトランジションを管理
   */
  const error = useError();

  // エラーをクリアする関数
  const handleError = () => {
    error.value = null;
  };
</script>

<template>
  <div class="transition-colors duration-300 min-h-screen">
    <common-header />
    <main class="font-zen">
      <!-- エラーがある場合はエラー表示 -->
      <div v-if="error" class="container mx-auto px-4 py-8">
        <div class="bg-red-50 dark:bg-red-900/50 p-4 rounded-lg">
          <h2 class="text-red-800 dark:text-red-200 text-lg font-bold">
            {{ error.message }}
          </h2>
          <button class="mt-4 text-red-600 dark:text-red-400 hover:underline" @click="handleError">エラーを閉じる</button>
        </div>
      </div>
      <!-- メインコンテンツ -->
      <slot />
    </main>
    <common-footer />
  </div>
</template>

<style scoped>
  .page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
