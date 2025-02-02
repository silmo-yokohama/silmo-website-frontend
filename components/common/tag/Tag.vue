<script setup lang="ts">
  /**
   * タグコンポーネント
   * @description 色付きの背景を持つタグを表示するコンポーネント
   */
  type ColorName = 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'purple' | 'slate';

  const props = defineProps<{
    colorName: ColorName;
  }>();

  const tagColor = computed(() => `tag-${props.colorName}`);
</script>

<template>
  <span :class="`px-2 py-1 text-xs rounded-md ${tagColor}`">
    <slot />
  </span>
</template>
