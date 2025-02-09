<!--
 * エラーページコンポーネント
 * 
 * @description
 * - 404エラーを含む各種エラーページを表示
 * - ホームページへの誘導リンクを提供
 * - エラーの種類に応じて適切なメッセージを表示
 * - シンプルでわかりやすいデザインを採用
 -->

<script setup lang="ts">
  const error = useError();

  // エラーをクリアしてホームページへ遷移
  const handleError = () => {
    clearError({ redirect: '/' });
  };
</script>

<template>
  <div class="transition-colors duration-300 min-h-screen">
    <common-header />
    <main class="font-zen">
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center p-8">
          <!-- 404エラーの場合 -->
          <template v-if="error?.statusCode === 404">
            <h1 class="text-6xl font-bold mb-4 text-primary font-mono">404</h1>
            <h2 class="text-2xl font-semibold mb-4">ページが見つかりませんでした</h2>
            <p class="text-gray-500 mb-8">お探しのページは削除されたか、URLが間違っている可能性があります。</p>
          </template>
          <!-- その他のエラーの場合 -->
          <template v-else>
            <h1 class="text-6xl font-bold text-gray-800 mb-4">
              {{ error?.statusCode }}
            </h1>
            <h2 class="text-2xl font-semibold text-gray-600 mb-4">エラーが発生しました</h2>
            <p class="text-gray-500 mb-8">
              {{ error?.message }}
            </p>
          </template>

          <common-button variant="primary" class="inline-block px-6 py-3 rounded-lg transition-colors" @click="handleError"> ホームページへ戻る </common-button>
        </div>
      </div>
    </main>
    <common-footer />
  </div>
</template>
