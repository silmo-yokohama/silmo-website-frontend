<script setup lang="ts">
  /**
   * フォーム用のラベルコンポーネント
   *
   * @description
   * フォーム要素に紐づくラベルを表示する。
   * 必須項目の場合は赤色のアスタリスクを表示する。
   *
   * @example
   * ```vue
   * <Label htmlFor="email" text="メールアドレス" required />
   * ```
   */
  import type { BaseLabelProps } from '~/types/form';

  defineProps<BaseLabelProps>();
</script>

<template>
  <label :for="htmlFor" class="block mb-2 text-sm font-medium">
    {{ text }}
    <span v-if="required" class="ml-1 text-red-500">*</span>
  </label>
</template>
