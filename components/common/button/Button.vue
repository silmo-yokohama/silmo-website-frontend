<script setup lang="ts">
  const props = defineProps<{
    class?: string;
  }>();

  const mergedClasses = mergeClassNames(
    'inline-block border border-black/10 dark:border-white/10 rounded-lg px-6 py-3 hover:border-primary hover:text-primary transition-colors duration-200',
    props.class || ''
  );

  // class属性を除外した残りの属性を取得
  const attrs = useAttrs();
  const filteredAttrs = computed(() => {
    const { class: _, ...rest } = attrs;
    return rest;
  });
</script>

<template>
  <button :class="mergedClasses" v-bind="filteredAttrs">
    <slot />
  </button>
</template>
