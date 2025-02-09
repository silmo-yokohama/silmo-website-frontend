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

  const props = defineProps<{
    class?: string;
    contentWidth?: string;
  }>();

  const mergedClasses = mergeClassNames(props.class || '', 'pt-[60px] md:pt-[50px]');
</script>

<template>
  <div :class="mergedClasses">
    <div class="pb-8 md:pb-12">
      <div :class="contentWidth || 'max-w-[780px]'" class="mx-auto px-6">
        <slot />
      </div>
    </div>
  </div>
</template>
